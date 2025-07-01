---
layout: post
title: "Visa to DjangoCon Africa"
date: 2025-06-30 22:31:08 +0100
comments: true
categories: [Django, Community, Conferences]
seo_image: /images/blog/visa-to-djangocon-africa/arusha_city_view.jpg
seo_image_alt: Arusha city view with Mount Meru in the background, taken from a hotel balcony
---

Here are the steps to get a visa application done for DjangoCon Africa in Tanzania 🇹🇿. Give it a go!

<!-- more -->

![Arusha city view with Mount Meru in the background, taken from a hotel balcony](/images/blog/visa-to-djangocon-africa/arusha_city_view.jpg)

_Credits: By [Halidtz - Own work, CC BY-SA 4.0](https://commons.wikimedia.org/w/index.php?curid=113072596)_

[DjangoCon Africa 2025](https://2025.djangocon.africa/) represents an excellent opportunity to meet new faces and get new ideas in the Django world. It’s the second edition of the conference after a beautiful start in 2023, and I thought it might encourage more people to attend from overseas if I spent time documenting some of the steps. So here we are – how to get a visa!

## When to apply

For me, the online process from "submit" to "visa granted" took 11 days, which matches what the official guidelines say. It’s also possible to apply for a visa on the spot once you land there. While that‘s not the recommended option, it’s well explained online. But the benefits of applying online ahead of time are to be more confident in the results, and skip the queue at the airport (those are lengthy forms to fill).

## How to apply

See the official instructions from DjangoCon Africa organizers: [Visa information](https://2025.djangocon.africa/en/visa_info/).

Important points to note:

- You will need a plane ticket / travel booking. Either get a reservation without paying, get a refundable ticket, or chance it!
- The steps all work well, except for the last payment processing, which hasn’t been reliable.

## The steps

There are a lot of steps but nothing particularly surprising for a visa application.

### Homepage & navigation

This is where we start, [visa.immigration.go.tz](https://visa.immigration.go.tz/)

![Visa Application System homepage with New Application, Continue Application, and Visa Status options](/images/blog/visa-to-djangocon-africa/homepage-60.avif)

### Start a new application

Once you hit **Start New Application**, the system generates an **Application ID** so you can interrupt and resume your application at any point.

![New visa application form showing email, passport number, security question and reCAPTCHA](/images/blog/visa-to-djangocon-africa/a_apply-60.avif)

Record this ID somewhere safe, it’s also useful so you can check on progress after submission.

![Screen showing generated Application ID and date with “Copied” button](/images/blog/visa-to-djangocon-africa/b_application_id-60.avif)

You’ll also receive an email from `services@immigration.go.tz` containing the application ID.

![Tanzania e-Visa email with Application ID, date, and verification link](/images/blog/visa-to-djangocon-africa/b2_application_id_email-60.avif)

### Enter personal information

First actual form step! On the **Personal Information** page, not many surprises there.

![Personal Information page with name, birth date, nationality fields](/images/blog/visa-to-djangocon-africa/c_personal_info-60.avif)

### Contact, address & employment

Here the "employment" fields will changed a bit depending on your status.

![Contact, Address & Employment page with phone, address, employment fields](/images/blog/visa-to-djangocon-africa/d_contact_address_employment-60.avif)

### Passport information

No surprises there either. 

![Passport Information page with passport type, number, issue and expiry dates](/images/blog/visa-to-djangocon-africa/e_passport_info-60.avif)

### Travel information

Here’s where it gets detailed:

- **Type of visa** depends on your personal circumstances. In particular different countries are expected to use different types. See the [official guidelines](https://visa.immigration.go.tz/guidelines) which are clear about that.
- **Purpose of visit** - I used "tourism" but there is also a "meetings and workshops" that seems somewhat appropriate for a conference. 

The subsequent fields likely reflect my selection on those two.

#### Travel plans

At this stage you might not need travel bookings to fill this in, but this will be asked later.

![Travel Information with “No” selected revealing last visit date and visa number](/images/blog/visa-to-djangocon-africa/f2_visit-60.avif)

#### Local host & accommodation

It’s not super clear to me how essential the "Local host" is, but for DjangoCon Africa we chose to recommend people use the conference organizers as their local host. See our [DjangoCon Africa 2025 visa information page](https://2025.djangocon.africa/en/visa_info/) for more details.

![Local host selection and accommodation fields](/images/blog/visa-to-djangocon-africa/f3_local_host-60.avif)

### Upload supporting documents

Finally, upload digital copies of:

- **Passport-style photo** (JPEG/PNG, ≤ 300 KB)  
- **Passport bio-data page** (JPEG/PNG, ≤ 300 KB)  
- **Return ticket** (PDF, ≤ 1 MB)

Note `.jpg` files aren’t supported, only `.jpeg`! (and `-60.avif`).

![Upload Documents page with photo, passport data page, and return ticket fields](/images/blog/visa-to-djangocon-africa/g_documents-60.avif)

### Declaration

Before payment, you’ll see a summary of all your inputs on the **Declaration** page.

![Close-up of the Declaration page fields (application info, contact info) locked for final review](/images/blog/visa-to-djangocon-africa/h2_declaration-60.avif)


### Payment options

Once you’ve declared, you’ll arrive at the **Payments** page. There are three methods, only one of which worked for me:

1. ❌ Bank deposit: none of the payment details were visible on the page, so can’t do this.
2. ❌ Visa or Mastercard: the payment form never loaded, so I don’t think this works either ("500, An error occurred while processing your request.")
3. ✅ GePG ePay: it was tricky but did work!

That last payment option is in the bottom left corner, hard to spot. Grab your **Control Number**, click the link and move on.

![Payments page showing bank deposit details and Visa/Mastercard option](/images/blog/visa-to-djangocon-africa/i_payment-60.avif)

## GePG gateway payment

This is what worked for me but it was very unreliable and took about 45 minutes of trying many times.

![GePG Government electronic Payment Gateway login with Control Number and reCAPTCHA](/images/blog/visa-to-djangocon-africa/k_gepg_payment-60.avif)

### GePG timeout error

In those cases I would go back and retry.

![GePG “Request Failed” timeout error showing failure code 7242](/images/blog/visa-to-djangocon-africa/l_gepg_payment_error-60.avif)

### GePG bill prompt

I arrived on that step twice! "Pay Now" didn’t work the first time, but did work the second time.

![GePG bill fetched with Control Number and Pay Now button](/images/blog/visa-to-djangocon-africa/m_gepg_payment_prompt-60.avif)

### NMB bank card checkout

This worked fine the one and only time I got to it, except I never saw the next "success" page, only the proxy error below.

![NMB Bank Mastercard/Visa checkout form with card details and timer](/images/blog/visa-to-djangocon-africa/n_mastercard_payment-60.avif)

### Final proxy error

Even after a successful payment, this is what I saw. However I could already go back to my application and see that the payment was confirmed.

![Proxy error page indicating “Error reading from remote server” after payment](/images/blog/visa-to-djangocon-africa/o_gepg_payment_success_error-60.avif)

Upon refreshing I got to this different (but also irrelevant) error page:

![GePG Online Payment status error showing “Invalid Response From NMB Payment Gateway” and failure code](/images/blog/visa-to-djangocon-africa/p_gepg_payment_status_error-60.avif)

### Application completed

Once payment is confirmed, the system shows an **Application completed!** page with your Application ID and submission date.

![Application completed page showing Application ID and completion date](/images/blog/visa-to-djangocon-africa/q_complete-60.avif)

### Checking visa status

To track your application later, go to **Check Visa Status** and enter the details you’d started your application with: Application ID, email address, security question and answer.

![Visa status check form with fields for Application ID, Email, Security Question, and Answer](/images/blog/visa-to-djangocon-africa/r_status-60.avif)

#### Status: pending approval

This is what you’ll see once you submit your application.

![Visa Status “Application received, pending approval” screen with Application ID](/images/blog/visa-to-djangocon-africa/s_status_success-60.avif)

#### Status: on progress

After a few days it switched to this different status.

![Visa Status “Application On Progress” screen showing Application ID](/images/blog/visa-to-djangocon-africa/t_status_progress-60.avif)

### Approved

After 11 days, I received an email confirmation the visa was approved! With instructions on documents to print and bring to Tanzania 🎉

---

So, not the most straightforward, but definitely not too hard either! Get your visa sorted and join us in Tanzania for [DjangoCon Africa 2025](https://2025.djangocon.africa/)! 🇹🇿
