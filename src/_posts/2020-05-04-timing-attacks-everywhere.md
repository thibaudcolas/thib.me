---
layout: post
title: "Timing attacks, everywhere"
date: 2020-05-04 22:15:08 +0100
comments: true
categories: [Security, Wagtail, Tools]
---

Ever heard of [timing attacks](https://en.wikipedia.org/wiki/Timing_attack)? Turns out timing attack vulnerabilities are pretty common. It’s unclear to me how practical those attacks are, but I wouldn’t risk it.

<!-- more -->

## Finding timing attack vulnerabilities

The gist of a timing attack is an _[observable timing discrepancy](http://cwe.mitre.org/data/definitions/208.html)_ in access control code:

- Some code compares two values in order to determine whether something is authorised or not, for example comparing the user input with a stored plaintext password, or even comparing a hashed version of the user input against a password hash.
- Turns out, the programming language executing that comparison is smart enough to stop the comparison as early as one of the characters stops matching – instead of having to compare all of the characters of the two strings.
- If the execution time of the comparison can be observed – then an attacker can determine whether their supplied input is getting closer to the compared value, by seeing the execution take gradually longer.

What does this look like in practice? This:

```python
class PasswordViewRestrictionForm(forms.Form):
    [...]

    def clean_password(self):
        data = self.cleaned_data['password']
        if data != self.restriction.password:
            raise forms.ValidationError(_("The password you have entered is not correct. Please try again."))
```

or that:

```python
def authorize(request, configured_username, configured_password):
    # [...]
    if username == configured_username and password == configured_password:
        return True
```

…or [in Ruby (Rails)](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-7576),

```ruby
module ClassMethods
  def http_basic_authenticate_with(options = {})
    before_filter(options.except(:name, :password, :realm)) do
      authenticate_or_request_with_http_basic(options[:realm] || "Application") do |name, password|
        name == options[:name] && password == options[:password]
      end
    end
  end
end
```

or [in Node (Express)](https://github.com/flawyte/now-basic-auth/issues/4),

```js
const app = protect(
  "/admin",
  (user, pass) => user === "admin" && pass === "admin",
  {
    directory: __dirname + "/_static",
    realm: "now-basic-auth.node-static-auth",
    onAuthFailed: (res) => {
      res.end("Restricted area, please login (admin:admin).");
    },
  }
);
```

Once you know what to look for, timing attack vulnerabilities really are everywhere. In [basic auth code](https://github.com/flawyte/now-basic-auth/issues/4). In [more basic auth code](https://github.com/tm-kn/django-basic-auth-ip-whitelist/security/advisories/GHSA-m38j-pmg3-v5x5), and also in [password-protected content](https://github.com/wagtail/wagtail/security/advisories/GHSA-jjjr-3jcw-f8v6).

For me, this came up because I was looking for a good Express basic auth implementation, stumbled upon [express-basic-auth](https://github.com/LionC/express-basic-auth), which works well, and then wondered – “oh, are other libraries using a [timing-safe comparison function](https://nodejs.org/api/crypto.html#crypto_crypto_timingsafeequal_a_b)?” Lots weren’t.

## Protecting yourself

As mentioned above, all sensitive comparison checks should use timing-safe comparison functions such as Node’s [crypto.timingSafeEqual](https://nodejs.org/api/crypto.html#crypto_crypto_timingsafeequal_a_b) or Python 3.4+’s [hmac.compare_digest](https://docs.python.org/3/library/hmac.html#hmac.compare_digest) (or Django’s [`crypto.constant_time_compare`](https://github.com/django/django/blob/659a73bc0a2df9be856e23fcfc6cc66d0d1a35fd/django/utils/crypto.py#L77)).

### Proactively looking for similar issues

You will want to look for all access control code that uses the programming language’s built-in comparison operators (`==` or `!=`). I’m very excited about the potential of platforms like [LGTM](https://lgtm.com/) and their [CodeQL language](https://securitylab.github.com/tools/codeql) to find vulnerabilities like this automaticaly. Here is a sample query:

```js
import python

from Compare eq
where eq.getAComparator().toString().toLowerCase().matches("%key%") or eq.getAComparator().toString().toLowerCase().matches("%password%") or eq.getAComparator().toString().toLowerCase().matches("%auth%") or eq.getAComparator().toString().toLowerCase().matches("%sign%")
select eq
```

This is a relatively naive query, but it helped me identify issues like Wagtail’s bypass-able [image serve signature check](https://github.com/wagtail/wagtail/issues/6127).

If you want to try this out for yourself, [GitHub’s Security Labs](https://securitylab.github.com/tools/codeql) have the most extensive documentation on how to use this.

## References

- Tools to probe for timing attack vulnerabilities:
  - [https://github.com/ffleming/timing_attack](https://github.com/ffleming/timing_attack)
  - [https://github.com/SakiiR/timeauth](https://github.com/SakiiR/timeauth)
- [Timing Attacks Made Practical, Blackhat 2015](https://www.blackhat.com/docs/us-15/materials/us-15-Morgan-Web-Timing-Attacks-Made-Practical.pdf)
- [Initial research for django-basic-auth-ip-whitelist vulnerability](https://gist.github.com/thibaudcolas/f68fb257abb6dc6164be0c01c4f42367)
  - [CVE-2020-4071](https://github.com/tm-kn/django-basic-auth-ip-whitelist/security/advisories/GHSA-m38j-pmg3-v5x5)
- [Initial research for Wagtail vulnerability](https://gist.github.com/thibaudcolas/bf80b119225dacb8463aab7d7e527bd6)
  - [CVE-2020-11037](https://github.com/wagtail/wagtail/security/advisories/GHSA-jjjr-3jcw-f8v6)
