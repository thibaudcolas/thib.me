// START CUSTOM REVEAL.JS INTEGRATION
(function() {
  if (typeof window.addEventListener === "function") {
    var hljs_nodes = document.querySelectorAll("pre code");

    for (var i = 0, len = hljs_nodes.length; i < len; i++) {
      var element = hljs_nodes[i];

      // trim whitespace if data-trim attribute is present
      if (
        element.hasAttribute("data-trim") &&
        typeof element.innerHTML.trim === "function"
      ) {
        element.innerHTML = element.innerHTML.trim();
      }

      // Now escape html unless prevented by author
      if (!element.hasAttribute("data-noescape")) {
        element.innerHTML = element.innerHTML
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }

      // re-highlight when focus is lost (for edited code)
      element.addEventListener(
        "focusout",
        function(event) {
          hljs.highlightBlock(event.currentTarget);
        },
        false
      );
    }
  }
})();
// END CUSTOM REVEAL.JS INTEGRATION

// highlight.js build includes support for:
// All languages in master + fsharp

var hljs = new (function() {
  function l(o) {
    return o
      .replace(/&/gm, "&amp;")
      .replace(/</gm, "&lt;")
      .replace(/>/gm, "&gt;");
  }
  function b(p) {
    for (var o = p.firstChild; o; o = o.nextSibling) {
      if (o.nodeName == "CODE") {
        return o;
      }
      if (!(o.nodeType == 3 && o.nodeValue.match(/\s+/))) {
        break;
      }
    }
  }
  function h(p, o) {
    return Array.prototype.map
      .call(p.childNodes, function(q) {
        if (q.nodeType == 3) {
          return o ? q.nodeValue.replace(/\n/g, "") : q.nodeValue;
        }
        if (q.nodeName == "BR") {
          return "\n";
        }
        return h(q, o);
      })
      .join("");
  }
  function a(q) {
    var p = (
      q.className +
      " " +
      (q.parentNode ? q.parentNode.className : "")
    ).split(/\s+/);
    p = p.map(function(r) {
      return r.replace(/^language-/, "");
    });
    for (var o = 0; o < p.length; o++) {
      if (e[p[o]] || p[o] == "no-highlight") {
        return p[o];
      }
    }
  }
  function c(q) {
    var o = [];
    (function p(r, s) {
      for (var t = r.firstChild; t; t = t.nextSibling) {
        if (t.nodeType == 3) {
          s += t.nodeValue.length;
        } else {
          if (t.nodeName == "BR") {
            s += 1;
          } else {
            if (t.nodeType == 1) {
              o.push({ event: "start", offset: s, node: t });
              s = p(t, s);
              o.push({ event: "stop", offset: s, node: t });
            }
          }
        }
      }
      return s;
    })(q, 0);
    return o;
  }
  function j(x, v, w) {
    var p = 0;
    var y = "";
    var r = [];
    function t() {
      if (x.length && v.length) {
        if (x[0].offset != v[0].offset) {
          return x[0].offset < v[0].offset ? x : v;
        } else {
          return v[0].event == "start" ? x : v;
        }
      } else {
        return x.length ? x : v;
      }
    }
    function s(A) {
      function z(B) {
        return " " + B.nodeName + '="' + l(B.value) + '"';
      }
      return (
        "<" +
        A.nodeName +
        Array.prototype.map.call(A.attributes, z).join("") +
        ">"
      );
    }
    while (x.length || v.length) {
      var u = t().splice(0, 1)[0];
      y += l(w.substr(p, u.offset - p));
      p = u.offset;
      if (u.event == "start") {
        y += s(u.node);
        r.push(u.node);
      } else {
        if (u.event == "stop") {
          var o,
            q = r.length;
          do {
            q--;
            o = r[q];
            y += "</" + o.nodeName.toLowerCase() + ">";
          } while (o != u.node);
          r.splice(q, 1);
          while (q < r.length) {
            y += s(r[q]);
            q++;
          }
        }
      }
    }
    return y + l(w.substr(p));
  }
  function f(r) {
    function o(s) {
      return (s && s.source) || s;
    }
    function p(t, s) {
      return RegExp(o(t), "m" + (r.cI ? "i" : "") + (s ? "g" : ""));
    }
    function q(z, x) {
      if (z.compiled) {
        return;
      }
      z.compiled = true;
      var u = [];
      if (z.k) {
        var s = {};
        function A(B, t) {
          t.split(" ").forEach(function(C) {
            var D = C.split("|");
            s[D[0]] = [B, D[1] ? Number(D[1]) : 1];
            u.push(D[0]);
          });
        }
        z.lR = p(z.l || hljs.IR + "(?!\\.)", true);
        if (typeof z.k == "string") {
          A("keyword", z.k);
        } else {
          for (var y in z.k) {
            if (!z.k.hasOwnProperty(y)) {
              continue;
            }
            A(y, z.k[y]);
          }
        }
        z.k = s;
      }
      if (x) {
        if (z.bWK) {
          z.b = "\\b(" + u.join("|") + ")\\b(?!\\.)\\s*";
        }
        z.bR = p(z.b ? z.b : "\\B|\\b");
        if (!z.e && !z.eW) {
          z.e = "\\B|\\b";
        }
        if (z.e) {
          z.eR = p(z.e);
        }
        z.tE = o(z.e) || "";
        if (z.eW && x.tE) {
          z.tE += (z.e ? "|" : "") + x.tE;
        }
      }
      if (z.i) {
        z.iR = p(z.i);
      }
      if (z.r === undefined) {
        z.r = 1;
      }
      if (!z.c) {
        z.c = [];
      }
      for (var w = 0; w < z.c.length; w++) {
        if (z.c[w] == "self") {
          z.c[w] = z;
        }
        q(z.c[w], z);
      }
      if (z.starts) {
        q(z.starts, x);
      }
      var v = [];
      for (var w = 0; w < z.c.length; w++) {
        v.push(o(z.c[w].b));
      }
      if (z.tE) {
        v.push(o(z.tE));
      }
      if (z.i) {
        v.push(o(z.i));
      }
      z.t = v.length
        ? p(v.join("|"), true)
        : {
            exec: function(t) {
              return null;
            },
          };
    }
    q(r);
  }
  function d(E, F, C) {
    function o(r, N) {
      for (var M = 0; M < N.c.length; M++) {
        var L = N.c[M].bR.exec(r);
        if (L && L.index == 0) {
          return N.c[M];
        }
      }
    }
    function s(L, r) {
      if (L.e && L.eR.test(r)) {
        return L;
      }
      if (L.eW) {
        return s(L.parent, r);
      }
    }
    function t(r, L) {
      return !C && L.i && L.iR.test(r);
    }
    function y(M, r) {
      var L = G.cI ? r[0].toLowerCase() : r[0];
      return M.k.hasOwnProperty(L) && M.k[L];
    }
    function H() {
      var L = l(w);
      if (!A.k) {
        return L;
      }
      var r = "";
      var O = 0;
      A.lR.lastIndex = 0;
      var M = A.lR.exec(L);
      while (M) {
        r += L.substr(O, M.index - O);
        var N = y(A, M);
        if (N) {
          v += N[1];
          r += '<span class="' + N[0] + '">' + M[0] + "</span>";
        } else {
          r += M[0];
        }
        O = A.lR.lastIndex;
        M = A.lR.exec(L);
      }
      return r + L.substr(O);
    }
    function z() {
      if (A.sL && !e[A.sL]) {
        return l(w);
      }
      var r = A.sL ? d(A.sL, w) : g(w);
      if (A.r > 0) {
        v += r.keyword_count;
        B += r.r;
      }
      return '<span class="' + r.language + '">' + r.value + "</span>";
    }
    function K() {
      return A.sL !== undefined ? z() : H();
    }
    function J(M, r) {
      var L = M.cN ? '<span class="' + M.cN + '">' : "";
      if (M.rB) {
        x += L;
        w = "";
      } else {
        if (M.eB) {
          x += l(r) + L;
          w = "";
        } else {
          x += L;
          w = r;
        }
      }
      A = Object.create(M, { parent: { value: A } });
    }
    function D(L, r) {
      w += L;
      if (r === undefined) {
        x += K();
        return 0;
      }
      var N = o(r, A);
      if (N) {
        x += K();
        J(N, r);
        return N.rB ? 0 : r.length;
      }
      var O = s(A, r);
      if (O) {
        var M = A;
        if (!(M.rE || M.eE)) {
          w += r;
        }
        x += K();
        do {
          if (A.cN) {
            x += "</span>";
          }
          B += A.r;
          A = A.parent;
        } while (A != O.parent);
        if (M.eE) {
          x += l(r);
        }
        w = "";
        if (O.starts) {
          J(O.starts, "");
        }
        return M.rE ? 0 : r.length;
      }
      if (t(r, A)) {
        throw new Error(
          'Illegal lexem "' + r + '" for mode "' + (A.cN || "<unnamed>") + '"'
        );
      }
      w += r;
      return r.length || 1;
    }
    var G = e[E];
    f(G);
    var A = G;
    var w = "";
    var B = 0;
    var v = 0;
    var x = "";
    try {
      var u,
        q,
        p = 0;
      while (true) {
        A.t.lastIndex = p;
        u = A.t.exec(F);
        if (!u) {
          break;
        }
        q = D(F.substr(p, u.index - p), u[0]);
        p = u.index + q;
      }
      D(F.substr(p));
      return { r: B, keyword_count: v, value: x, language: E };
    } catch (I) {
      if (I.message.indexOf("Illegal") != -1) {
        return { r: 0, keyword_count: 0, value: l(F) };
      } else {
        throw I;
      }
    }
  }
  function g(s) {
    var o = { keyword_count: 0, r: 0, value: l(s) };
    var q = o;
    for (var p in e) {
      if (!e.hasOwnProperty(p)) {
        continue;
      }
      var r = d(p, s, false);
      r.language = p;
      if (r.keyword_count + r.r > q.keyword_count + q.r) {
        q = r;
      }
      if (r.keyword_count + r.r > o.keyword_count + o.r) {
        q = o;
        o = r;
      }
    }
    if (q.language) {
      o.second_best = q;
    }
    return o;
  }
  function i(q, p, o) {
    if (p) {
      q = q.replace(/^((<[^>]+>|\t)+)/gm, function(r, v, u, t) {
        return v.replace(/\t/g, p);
      });
    }
    if (o) {
      q = q.replace(/\n/g, "<br>");
    }
    return q;
  }
  function m(r, u, p) {
    var v = h(r, p);
    var t = a(r);
    if (t == "no-highlight") {
      return;
    }
    var w = t ? d(t, v, true) : g(v);
    t = w.language;
    var o = c(r);
    if (o.length) {
      var q = document.createElement("pre");
      q.innerHTML = w.value;
      w.value = j(o, c(q), v);
    }
    w.value = i(w.value, u, p);
    var s = r.className;
    if (!s.match("(\\s|^)(language-)?" + t + "(\\s|$)")) {
      s = s ? s + " " + t : t;
    }
    r.innerHTML = w.value;
    r.className = s;
    r.result = { language: t, kw: w.keyword_count, re: w.r };
    if (w.second_best) {
      r.second_best = {
        language: w.second_best.language,
        kw: w.second_best.keyword_count,
        re: w.second_best.r,
      };
    }
  }
  function n() {
    if (n.called) {
      return;
    }
    n.called = true;
    Array.prototype.map
      .call(document.getElementsByTagName("pre"), b)
      .filter(Boolean)
      .forEach(function(o) {
        m(o, hljs.tabReplace);
      });
  }
  function k() {
    window.addEventListener("DOMContentLoaded", n, false);
    window.addEventListener("load", n, false);
  }
  var e = {};
  this.LANGUAGES = e;
  this.highlight = d;
  this.highlightAuto = g;
  this.fixMarkup = i;
  this.highlightBlock = m;
  this.initHighlighting = n;
  this.initHighlightingOnLoad = k;
  this.IR = "[a-zA-Z][a-zA-Z0-9_]*";
  this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*";
  this.NR = "\\b\\d+(\\.\\d+)?";
  this.CNR =
    "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
  this.BNR = "\\b(0b[01]+)";
  this.RSR =
    "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
  this.BE = { b: "\\\\[\\s\\S]", r: 0 };
  this.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [this.BE], r: 0 };
  this.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [this.BE], r: 0 };
  this.CLCM = { cN: "comment", b: "//", e: "$" };
  this.CBLCLM = { cN: "comment", b: "/\\*", e: "\\*/" };
  this.HCM = { cN: "comment", b: "#", e: "$" };
  this.NM = { cN: "number", b: this.NR, r: 0 };
  this.CNM = { cN: "number", b: this.CNR, r: 0 };
  this.BNM = { cN: "number", b: this.BNR, r: 0 };
  this.REGEXP_MODE = {
    cN: "regexp",
    b: /\//,
    e: /\/[gim]*/,
    i: /\n/,
    c: [this.BE, { b: /\[/, e: /\]/, r: 0, c: [this.BE] }],
  };
  this.inherit = function(q, r) {
    var o = {};
    for (var p in q) {
      o[p] = q[p];
    }
    if (r) {
      for (var p in r) {
        o[p] = r[p];
      }
    }
    return o;
  };
})();
hljs.LANGUAGES["1c"] = (function(b) {
  var f = "[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*";
  var c =
    "возврат дата для если и или иначе иначеесли исключение конецесли конецпопытки конецпроцедуры конецфункции конеццикла константа не перейти перем перечисление по пока попытка прервать продолжить процедура строка тогда фс функция цикл число экспорт";
  var e =
    "ansitooem oemtoansi ввестивидсубконто ввестидату ввестизначение ввестиперечисление ввестипериод ввестиплансчетов ввестистроку ввестичисло вопрос восстановитьзначение врег выбранныйплансчетов вызватьисключение датагод датамесяц датачисло добавитьмесяц завершитьработусистемы заголовоксистемы записьжурналарегистрации запуститьприложение зафиксироватьтранзакцию значениевстроку значениевстрокувнутр значениевфайл значениеизстроки значениеизстрокивнутр значениеизфайла имякомпьютера имяпользователя каталогвременныхфайлов каталогиб каталогпользователя каталогпрограммы кодсимв командасистемы конгода конецпериодаби конецрассчитанногопериодаби конецстандартногоинтервала конквартала конмесяца коннедели лев лог лог10 макс максимальноеколичествосубконто мин монопольныйрежим названиеинтерфейса названиенабораправ назначитьвид назначитьсчет найти найтипомеченныенаудаление найтиссылки началопериодаби началостандартногоинтервала начатьтранзакцию начгода начквартала начмесяца начнедели номерднягода номерднянедели номернеделигода нрег обработкаожидания окр описаниеошибки основнойжурналрасчетов основнойплансчетов основнойязык открытьформу открытьформумодально отменитьтранзакцию очиститьокносообщений периодстр полноеимяпользователя получитьвремята получитьдатута получитьдокументта получитьзначенияотбора получитьпозициюта получитьпустоезначение получитьта прав праводоступа предупреждение префиксавтонумерации пустаястрока пустоезначение рабочаядаттьпустоезначение рабочаядата разделительстраниц разделительстрок разм разобратьпозициюдокумента рассчитатьрегистрына рассчитатьрегистрыпо сигнал симв символтабуляции создатьобъект сокрл сокрлп сокрп сообщить состояние сохранитьзначение сред статусвозврата стрдлина стрзаменить стрколичествострок стрполучитьстроку  стрчисловхождений сформироватьпозициюдокумента счетпокоду текущаядата текущеевремя типзначения типзначениястр удалитьобъекты установитьтана установитьтапо фиксшаблон формат цел шаблон";
  var a = { cN: "dquote", b: '""' };
  var d = { cN: "string", b: '"', e: '"|$', c: [a], r: 0 };
  var g = { cN: "string", b: "\\|", e: '"|$', c: [a] };
  return {
    cI: true,
    l: f,
    k: { keyword: c, built_in: e },
    c: [
      b.CLCM,
      b.NM,
      d,
      g,
      {
        cN: "function",
        b: "(процедура|функция)",
        e: "$",
        l: f,
        k: "процедура функция",
        c: [
          { cN: "title", b: f },
          {
            cN: "tail",
            eW: true,
            c: [
              { cN: "params", b: "\\(", e: "\\)", l: f, k: "знач", c: [d, g] },
              {
                cN: "export",
                b: "экспорт",
                eW: true,
                l: f,
                k: "экспорт",
                c: [b.CLCM],
              },
            ],
          },
          b.CLCM,
        ],
      },
      { cN: "preprocessor", b: "#", e: "$" },
      { cN: "date", b: "'\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})'" },
    ],
  };
})(hljs);
hljs.LANGUAGES.actionscript = (function(a) {
  var d = "[a-zA-Z_$][a-zA-Z0-9_$]*";
  var c = "([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)";
  var e = { cN: "rest_arg", b: "[.]{3}", e: d, r: 10 };
  var b = { cN: "title", b: d };
  return {
    k: {
      keyword:
        "as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",
      literal: "true false null undefined",
    },
    c: [
      a.ASM,
      a.QSM,
      a.CLCM,
      a.CBLCLM,
      a.CNM,
      { cN: "package", bWK: true, e: "{", k: "package", c: [b] },
      {
        cN: "class",
        bWK: true,
        e: "{",
        k: "class interface",
        c: [{ bWK: true, k: "extends implements" }, b],
      },
      { cN: "preprocessor", bWK: true, e: ";", k: "import include" },
      {
        cN: "function",
        bWK: true,
        e: "[{;]",
        k: "function",
        i: "\\S",
        c: [
          b,
          {
            cN: "params",
            b: "\\(",
            e: "\\)",
            c: [a.ASM, a.QSM, a.CLCM, a.CBLCLM, e],
          },
          { cN: "type", b: ":", e: c, r: 10 },
        ],
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.apache = (function(a) {
  var b = { cN: "number", b: "[\\$%]\\d+" };
  return {
    cI: true,
    k: {
      keyword:
        "acceptfilter acceptmutex acceptpathinfo accessfilename action addalt addaltbyencoding addaltbytype addcharset adddefaultcharset adddescription addencoding addhandler addicon addiconbyencoding addiconbytype addinputfilter addlanguage addmoduleinfo addoutputfilter addoutputfilterbytype addtype alias aliasmatch allow allowconnect allowencodedslashes allowoverride anonymous anonymous_logemail anonymous_mustgiveemail anonymous_nouserid anonymous_verifyemail authbasicauthoritative authbasicprovider authdbduserpwquery authdbduserrealmquery authdbmgroupfile authdbmtype authdbmuserfile authdefaultauthoritative authdigestalgorithm authdigestdomain authdigestnccheck authdigestnonceformat authdigestnoncelifetime authdigestprovider authdigestqop authdigestshmemsize authgroupfile authldapbinddn authldapbindpassword authldapcharsetconfig authldapcomparednonserver authldapdereferencealiases authldapgroupattribute authldapgroupattributeisdn authldapremoteuserattribute authldapremoteuserisdn authldapurl authname authnprovideralias authtype authuserfile authzdbmauthoritative authzdbmtype authzdefaultauthoritative authzgroupfileauthoritative authzldapauthoritative authzownerauthoritative authzuserauthoritative balancermember browsermatch browsermatchnocase bufferedlogs cachedefaultexpire cachedirlength cachedirlevels cachedisable cacheenable cachefile cacheignorecachecontrol cacheignoreheaders cacheignorenolastmod cacheignorequerystring cachelastmodifiedfactor cachemaxexpire cachemaxfilesize cacheminfilesize cachenegotiateddocs cacheroot cachestorenostore cachestoreprivate cgimapextension charsetdefault charsetoptions charsetsourceenc checkcaseonly checkspelling chrootdir contentdigest cookiedomain cookieexpires cookielog cookiename cookiestyle cookietracking coredumpdirectory customlog dav davdepthinfinity davgenericlockdb davlockdb davmintimeout dbdexptime dbdkeep dbdmax dbdmin dbdparams dbdpersist dbdpreparesql dbdriver defaulticon defaultlanguage defaulttype deflatebuffersize deflatecompressionlevel deflatefilternote deflatememlevel deflatewindowsize deny directoryindex directorymatch directoryslash documentroot dumpioinput dumpiologlevel dumpiooutput enableexceptionhook enablemmap enablesendfile errordocument errorlog example expiresactive expiresbytype expiresdefault extendedstatus extfilterdefine extfilteroptions fileetag filterchain filterdeclare filterprotocol filterprovider filtertrace forcelanguagepriority forcetype forensiclog gracefulshutdowntimeout group header headername hostnamelookups identitycheck identitychecktimeout imapbase imapdefault imapmenu include indexheadinsert indexignore indexoptions indexorderdefault indexstylesheet isapiappendlogtoerrors isapiappendlogtoquery isapicachefile isapifakeasync isapilognotsupported isapireadaheadbuffer keepalive keepalivetimeout languagepriority ldapcacheentries ldapcachettl ldapconnectiontimeout ldapopcacheentries ldapopcachettl ldapsharedcachefile ldapsharedcachesize ldaptrustedclientcert ldaptrustedglobalcert ldaptrustedmode ldapverifyservercert limitinternalrecursion limitrequestbody limitrequestfields limitrequestfieldsize limitrequestline limitxmlrequestbody listen listenbacklog loadfile loadmodule lockfile logformat loglevel maxclients maxkeepaliverequests maxmemfree maxrequestsperchild maxrequestsperthread maxspareservers maxsparethreads maxthreads mcachemaxobjectcount mcachemaxobjectsize mcachemaxstreamingbuffer mcacheminobjectsize mcacheremovalalgorithm mcachesize metadir metafiles metasuffix mimemagicfile minspareservers minsparethreads mmapfile mod_gzip_on mod_gzip_add_header_count mod_gzip_keep_workfiles mod_gzip_dechunk mod_gzip_min_http mod_gzip_minimum_file_size mod_gzip_maximum_file_size mod_gzip_maximum_inmem_size mod_gzip_temp_dir mod_gzip_item_include mod_gzip_item_exclude mod_gzip_command_version mod_gzip_can_negotiate mod_gzip_handle_methods mod_gzip_static_suffix mod_gzip_send_vary mod_gzip_update_static modmimeusepathinfo multiviewsmatch namevirtualhost noproxy nwssltrustedcerts nwsslupgradeable options order passenv pidfile protocolecho proxybadheader proxyblock proxydomain proxyerroroverride proxyftpdircharset proxyiobuffersize proxymaxforwards proxypass proxypassinterpolateenv proxypassmatch proxypassreverse proxypassreversecookiedomain proxypassreversecookiepath proxypreservehost proxyreceivebuffersize proxyremote proxyremotematch proxyrequests proxyset proxystatus proxytimeout proxyvia readmename receivebuffersize redirect redirectmatch redirectpermanent redirecttemp removecharset removeencoding removehandler removeinputfilter removelanguage removeoutputfilter removetype requestheader require rewritebase rewritecond rewriteengine rewritelock rewritelog rewriteloglevel rewritemap rewriteoptions rewriterule rlimitcpu rlimitmem rlimitnproc satisfy scoreboardfile script scriptalias scriptaliasmatch scriptinterpretersource scriptlog scriptlogbuffer scriptloglength scriptsock securelisten seerequesttail sendbuffersize serveradmin serveralias serverlimit servername serverpath serverroot serversignature servertokens setenv setenvif setenvifnocase sethandler setinputfilter setoutputfilter ssienableaccess ssiendtag ssierrormsg ssistarttag ssitimeformat ssiundefinedecho sslcacertificatefile sslcacertificatepath sslcadnrequestfile sslcadnrequestpath sslcarevocationfile sslcarevocationpath sslcertificatechainfile sslcertificatefile sslcertificatekeyfile sslciphersuite sslcryptodevice sslengine sslhonorciperorder sslmutex ssloptions sslpassphrasedialog sslprotocol sslproxycacertificatefile sslproxycacertificatepath sslproxycarevocationfile sslproxycarevocationpath sslproxyciphersuite sslproxyengine sslproxymachinecertificatefile sslproxymachinecertificatepath sslproxyprotocol sslproxyverify sslproxyverifydepth sslrandomseed sslrequire sslrequiressl sslsessioncache sslsessioncachetimeout sslusername sslverifyclient sslverifydepth startservers startthreads substitute suexecusergroup threadlimit threadsperchild threadstacksize timeout traceenable transferlog typesconfig unsetenv usecanonicalname usecanonicalphysicalport user userdir virtualdocumentroot virtualdocumentrootip virtualscriptalias virtualscriptaliasip win32disableacceptex xbithack",
      literal: "on off",
    },
    c: [
      a.HCM,
      { cN: "sqbracket", b: "\\s\\[", e: "\\]$" },
      { cN: "cbracket", b: "[\\$%]\\{", e: "\\}", c: ["self", b] },
      b,
      { cN: "tag", b: "</?", e: ">" },
      a.QSM,
    ],
  };
})(hljs);
hljs.LANGUAGES.applescript = (function(a) {
  var b = a.inherit(a.QSM, { i: "" });
  var e = { cN: "title", b: a.UIR };
  var d = { cN: "params", b: "\\(", e: "\\)", c: ["self", a.CNM, b] };
  var c = [
    { cN: "comment", b: "--", e: "$" },
    {
      cN: "comment",
      b: "\\(\\*",
      e: "\\*\\)",
      c: ["self", { b: "--", e: "$" }],
    },
    a.HCM,
  ];
  return {
    k: {
      keyword:
        "about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the then third through thru timeout times to transaction try until where while whose with without",
      constant:
        "AppleScript false linefeed return pi quote result space tab true",
      type:
        "alias application boolean class constant date file integer list number real record string text",
      command:
        "activate beep count delay launch log offset read round run say summarize write",
      property:
        "character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year",
    },
    c: [
      b,
      a.CNM,
      { cN: "type", b: "\\bPOSIX file\\b" },
      {
        cN: "command",
        b:
          "\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b",
      },
      {
        cN: "constant",
        b: "\\b(text item delimiters|current application|missing value)\\b",
      },
      {
        cN: "keyword",
        b:
          "\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference))\\b",
      },
      {
        cN: "property",
        b: "\\b(POSIX path|(date|time) string|quoted form)\\b",
      },
      { cN: "function_start", bWK: true, k: "on", i: "[${=;\\n]", c: [e, d] },
    ].concat(c),
    i: "//",
  };
})(hljs);
hljs.LANGUAGES.xml = (function(a) {
  var c = "[A-Za-z0-9\\._:-]+";
  var b = {
    eW: true,
    r: 0,
    c: [
      { cN: "attribute", b: c, r: 0 },
      { b: '="', rB: true, e: '"', c: [{ cN: "value", b: '"', eW: true }] },
      { b: "='", rB: true, e: "'", c: [{ cN: "value", b: "'", eW: true }] },
      { b: "=", c: [{ cN: "value", b: "[^\\s/>]+" }] },
    ],
  };
  return {
    cI: true,
    c: [
      { cN: "pi", b: "<\\?", e: "\\?>", r: 10 },
      {
        cN: "doctype",
        b: "<!DOCTYPE",
        e: ">",
        r: 10,
        c: [{ b: "\\[", e: "\\]" }],
      },
      { cN: "comment", b: "<!--", e: "-->", r: 10 },
      { cN: "cdata", b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10 },
      {
        cN: "tag",
        b: "<style(?=\\s|>|$)",
        e: ">",
        k: { title: "style" },
        c: [b],
        starts: { e: "</style>", rE: true, sL: "css" },
      },
      {
        cN: "tag",
        b: "<script(?=\\s|>|$)",
        e: ">",
        k: { title: "script" },
        c: [b],
        starts: { e: "</script>", rE: true, sL: "javascript" },
      },
      { b: "<%", e: "%>", sL: "vbscript" },
      {
        cN: "tag",
        b: "</?",
        e: "/?>",
        r: 0,
        c: [{ cN: "title", b: "[^ /><]+" }, b],
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.asciidoc = (function(a) {
  return {
    c: [
      { cN: "comment", b: "^/{4,}\\n", e: "\\n/{4,}$", r: 10 },
      { cN: "comment", b: "^//", e: "$", r: 0 },
      { cN: "title", b: "^\\.\\w.*$" },
      { b: "^[=\\*]{4,}\\n", e: "\\n^[=\\*]{4,}$", r: 10 },
      { cN: "header", b: "^(={1,5}) .+?( \\1)?$", r: 10 },
      { cN: "header", b: "^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$", r: 10 },
      { cN: "attribute", b: "^:.+?:", e: "\\s", eE: true, r: 10 },
      { cN: "attribute", b: "^\\[.+?\\]$", r: 0 },
      { cN: "blockquote", b: "^_{4,}\\n", e: "\\n_{4,}$", r: 10 },
      { cN: "code", b: "^[\\-\\.]{4,}\\n", e: "\\n[\\-\\.]{4,}$", r: 10 },
      {
        b: "^\\+{4,}\\n",
        e: "\\n\\+{4,}$",
        c: [{ b: "<", e: ">", sL: "xml", r: 0 }],
        r: 10,
      },
      { cN: "bullet", b: "^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+" },
      { cN: "label", b: "^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+", r: 10 },
      {
        cN: "strong",
        b: "\\B\\*(?![\\*\\s])",
        e: "(\\n{2}|\\*)",
        c: [{ b: "\\\\*\\w", r: 0 }],
      },
      {
        cN: "emphasis",
        b: "\\B'(?!['\\s])",
        e: "(\\n{2}|')",
        c: [{ b: "\\\\'\\w", r: 0 }],
        r: 0,
      },
      { cN: "emphasis", b: "_(?![_\\s])", e: "(\\n{2}|_)", r: 0 },
      { cN: "code", b: "(`.+?`|\\+.+?\\+)", r: 0 },
      { cN: "code", b: "^[ \\t]", e: "$", r: 0 },
      { cN: "horizontal_rule", b: "^'{4,}[ \\t]*$", r: 10 },
      {
        b: "(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]",
        rB: true,
        c: [
          { b: "(link|image:?):", r: 0 },
          { cN: "link_url", b: "\\w", e: "[^\\[]+", r: 0 },
          { cN: "link_label", b: "\\[", e: "\\]", eB: true, eE: true, r: 0 },
        ],
        r: 10,
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.avrasm = (function(a) {
  return {
    cI: true,
    k: {
      keyword:
        "adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr",
      built_in:
        "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf",
    },
    c: [
      a.CBLCLM,
      { cN: "comment", b: ";", e: "$" },
      a.CNM,
      a.BNM,
      { cN: "number", b: "\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)" },
      a.QSM,
      { cN: "string", b: "'", e: "[^\\\\]'", i: "[^\\\\][^']" },
      { cN: "label", b: "^[A-Za-z0-9_.$]+:" },
      { cN: "preprocessor", b: "#", e: "$" },
      { cN: "preprocessor", b: "\\.[a-zA-Z]+" },
      { cN: "localvars", b: "@[0-9]+" },
    ],
  };
})(hljs);
hljs.LANGUAGES.axapta = (function(a) {
  return {
    k:
      "false int abstract private char boolean static null if for true while long throw finally protected final return void enum else break new catch byte super case short default double public try this switch continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count order group by asc desc index hint like dispaly edit client server ttsbegin ttscommit str real date container anytype common div mod",
    c: [
      a.CLCM,
      a.CBLCLM,
      a.ASM,
      a.QSM,
      a.CNM,
      { cN: "preprocessor", b: "#", e: "$" },
      {
        cN: "class",
        bWK: true,
        e: "{",
        i: ":",
        k: "class interface",
        c: [
          { cN: "inheritance", bWK: true, k: "extends implements", r: 10 },
          { cN: "title", b: a.UIR },
        ],
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.bash = (function(a) {
  var c = { cN: "variable", b: /\$[\w\d#@][\w\d_]*/ };
  var b = { cN: "variable", b: /\$\{(.*?)\}/ };
  var e = {
    cN: "string",
    b: /"/,
    e: /"/,
    c: [a.BE, c, b, { cN: "variable", b: /\$\(/, e: /\)/, c: a.BE }],
    r: 0,
  };
  var d = { cN: "string", b: /'/, e: /'/, r: 0 };
  return {
    l: /-?[a-z]+/,
    k: {
      keyword:
        "if then else elif fi for break continue while in do done exit return set declare case esac export exec",
      literal: "true false",
      built_in:
        "printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",
      operator: "-ne -eq -lt -gt -f -d -e -s -l -a",
    },
    c: [
      { cN: "shebang", b: /^#![^\n]+sh\s*$/, r: 10 },
      {
        cN: "function",
        b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        rB: true,
        c: [{ cN: "title", b: /\w[\w\d_]*/ }],
        r: 0,
      },
      a.HCM,
      a.NM,
      e,
      d,
      c,
      b,
    ],
  };
})(hljs);
hljs.LANGUAGES.brainfuck = (function(a) {
  return {
    c: [
      {
        cN: "comment",
        b: "[^\\[\\]\\.,\\+\\-<> \r\n]",
        eE: true,
        e: "[\\[\\]\\.,\\+\\-<> \r\n]",
        r: 0,
      },
      { cN: "title", b: "[\\[\\]]", r: 0 },
      { cN: "string", b: "[\\.,]" },
      { cN: "literal", b: "[\\+\\-]" },
    ],
  };
})(hljs);
hljs.LANGUAGES.clojure = (function(l) {
  var e = {
    built_in:
      "def cond apply if-not if-let if not not= = &lt; < > &lt;= <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for doseq dosync dotimes and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import intern refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! import use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if throw printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time ns assert re-find re-groups rand-int rand mod locking assert-valid-fdecl alias namespace resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! memfn to-array future future-call into-array aset gen-class reduce merge map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize",
  };
  var f = "[a-zA-Z_0-9\\!\\.\\?\\-\\+\\*\\/\\<\\=\\>\\&\\#\\$';]+";
  var a = "[\\s:\\(\\{]+\\d+(\\.\\d+)?";
  var d = { cN: "number", b: a, r: 0 };
  var j = { cN: "string", b: '"', e: '"', c: [l.BE], r: 0 };
  var o = { cN: "comment", b: ";", e: "$", r: 0 };
  var n = { cN: "collection", b: "[\\[\\{]", e: "[\\]\\}]" };
  var c = { cN: "comment", b: "\\^" + f };
  var b = { cN: "comment", b: "\\^\\{", e: "\\}" };
  var h = { cN: "attribute", b: "[:]" + f };
  var m = { cN: "list", b: "\\(", e: "\\)" };
  var g = { eW: true, k: { literal: "true false nil" }, r: 0 };
  var i = { k: e, l: f, cN: "title", b: f, starts: g };
  m.c = [{ cN: "comment", b: "comment" }, i];
  g.c = [m, j, c, b, o, h, n, d];
  n.c = [m, j, c, o, h, n, d];
  return { i: "\\S", c: [o, m] };
})(hljs);
hljs.LANGUAGES.cmake = (function(a) {
  return {
    cI: true,
    k:
      "add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_subdirectory add_test aux_source_directory break build_command cmake_minimum_required cmake_policy configure_file create_test_sourcelist define_property else elseif enable_language enable_testing endforeach endfunction endif endmacro endwhile execute_process export find_file find_library find_package find_path find_program fltk_wrap_ui foreach function get_cmake_property get_directory_property get_filename_component get_property get_source_file_property get_target_property get_test_property if include include_directories include_external_msproject include_regular_expression install link_directories load_cache load_command macro mark_as_advanced message option output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return separate_arguments set set_directory_properties set_property set_source_files_properties set_target_properties set_tests_properties site_name source_group string target_link_libraries try_compile try_run unset variable_watch while build_name exec_program export_library_dependencies install_files install_programs install_targets link_libraries make_directory remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file",
    c: [{ cN: "envvar", b: "\\${", e: "}" }, a.HCM, a.QSM, a.NM],
  };
})(hljs);
hljs.LANGUAGES.coffeescript = (function(c) {
  var b = {
    keyword:
      "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
    literal: "true false null undefined yes no on off",
    reserved:
      "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
    built_in: "npm require console print module exports global window document",
  };
  var a = "[A-Za-z$_][0-9A-Za-z$_]*";
  var f = { cN: "title", b: a };
  var e = { cN: "subst", b: "#\\{", e: "}", k: b };
  var d = [
    c.BNM,
    c.inherit(c.CNM, { starts: { e: "(\\s*/)?", r: 0 } }),
    { cN: "string", b: "'''", e: "'''", c: [c.BE] },
    { cN: "string", b: "'", e: "'", c: [c.BE], r: 0 },
    { cN: "string", b: '"""', e: '"""', c: [c.BE, e] },
    { cN: "string", b: '"', e: '"', c: [c.BE, e], r: 0 },
    { cN: "regexp", b: "///", e: "///", c: [c.HCM] },
    { cN: "regexp", b: "//[gim]*", r: 0 },
    { cN: "regexp", b: "/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)" },
    { cN: "property", b: "@" + a },
    { b: "`", e: "`", eB: true, eE: true, sL: "javascript" },
  ];
  e.c = d;
  return {
    k: b,
    c: d.concat([
      { cN: "comment", b: "###", e: "###" },
      c.HCM,
      {
        cN: "function",
        b: "(" + a + "\\s*=\\s*)?(\\(.*\\))?\\s*[-=]>",
        e: "[-=]>",
        rB: true,
        c: [
          f,
          {
            cN: "params",
            b: "\\(",
            rB: true,
            c: [{ b: /\(/, e: /\)/, k: b, c: ["self"].concat(d) }],
          },
        ],
      },
      {
        cN: "class",
        bWK: true,
        k: "class",
        e: "$",
        i: "[:\\[\\]]",
        c: [{ bWK: true, k: "extends", eW: true, i: ":", c: [f] }, f],
      },
      { cN: "attribute", b: a + ":", e: ":", rB: true, eE: true },
    ]),
  };
})(hljs);
hljs.LANGUAGES.cpp = (function(a) {
  var b = {
    keyword:
      "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex",
    built_in:
      "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr",
  };
  return {
    k: b,
    i: "</",
    c: [
      a.CLCM,
      a.CBLCLM,
      a.QSM,
      { cN: "string", b: "'\\\\?.", e: "'", i: "." },
      { cN: "number", b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)" },
      a.CNM,
      {
        cN: "preprocessor",
        b: "#",
        e: "$",
        c: [{ b: "<", e: ">", i: "\\n" }, a.CLCM],
      },
      {
        cN: "stl_container",
        b:
          "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        e: ">",
        k: b,
        r: 10,
        c: ["self"],
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.cs = (function(a) {
  return {
    k:
      "abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield",
    c: [
      {
        cN: "comment",
        b: "///",
        e: "$",
        rB: true,
        c: [
          { cN: "xmlDocTag", b: "///|<!--|-->" },
          { cN: "xmlDocTag", b: "</?", e: ">" },
        ],
      },
      a.CLCM,
      a.CBLCLM,
      {
        cN: "preprocessor",
        b: "#",
        e: "$",
        k:
          "if else elif endif define undef warning error line region endregion pragma checksum",
      },
      { cN: "string", b: '@"', e: '"', c: [{ b: '""' }] },
      a.ASM,
      a.QSM,
      a.CNM,
    ],
  };
})(hljs);
hljs.LANGUAGES.css = (function(a) {
  var b = "[a-zA-Z-][a-zA-Z0-9_-]*";
  var c = {
    cN: "function",
    b: b + "\\(",
    e: "\\)",
    c: ["self", a.NM, a.ASM, a.QSM],
  };
  return {
    cI: true,
    i: "[=/|']",
    c: [
      a.CBLCLM,
      { cN: "id", b: "\\#[A-Za-z0-9_-]+" },
      { cN: "class", b: "\\.[A-Za-z0-9_-]+", r: 0 },
      { cN: "attr_selector", b: "\\[", e: "\\]", i: "$" },
      { cN: "pseudo", b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+" },
      {
        cN: "at_rule",
        b: "@(font-face|page)",
        l: "[a-z-]+",
        k: "font-face page",
      },
      {
        cN: "at_rule",
        b: "@",
        e: "[{;]",
        c: [
          { cN: "keyword", b: /\S+/ },
          { b: /\s/, eW: true, eE: true, r: 0, c: [c, a.ASM, a.QSM, a.NM] },
        ],
      },
      { cN: "tag", b: b, r: 0 },
      {
        cN: "rules",
        b: "{",
        e: "}",
        i: "[^\\s]",
        r: 0,
        c: [
          a.CBLCLM,
          {
            cN: "rule",
            b: "[^\\s]",
            rB: true,
            e: ";",
            eW: true,
            c: [
              {
                cN: "attribute",
                b: "[A-Z\\_\\.\\-]+",
                e: ":",
                eE: true,
                i: "[^\\s]",
                starts: {
                  cN: "value",
                  eW: true,
                  eE: true,
                  c: [
                    c,
                    a.NM,
                    a.QSM,
                    a.ASM,
                    a.CBLCLM,
                    { cN: "hexcolor", b: "#[0-9A-Fa-f]+" },
                    { cN: "important", b: "!important" },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.d = (function(x) {
  var b = {
    keyword:
      "abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
    built_in:
      "bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
    literal: "false null true",
  };
  var c = "(0|[1-9][\\d_]*)",
    q = "(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)",
    h = "0[bB][01_]+",
    v = "([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",
    y = "0[xX]" + v,
    p = "([eE][+-]?" + q + ")",
    o = "(" + q + "(\\.\\d*|" + p + ")|\\d+\\." + q + q + "|\\." + c + p + "?)",
    k = "(0[xX](" + v + "\\." + v + "|\\.?" + v + ")[pP][+-]?" + q + ")",
    l = "(" + c + "|" + h + "|" + y + ")",
    n = "(" + k + "|" + o + ")";
  var z =
    "\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};";
  var m = { cN: "number", b: "\\b" + l + "(L|u|U|Lu|LU|uL|UL)?", r: 0 };
  var j = {
    cN: "number",
    b: "\\b(" + n + "([fF]|L|i|[fF]i|Li)?|" + l + "(i|[fF]i|Li))",
    r: 0,
  };
  var s = { cN: "string", b: "'(" + z + "|.)", e: "'", i: "." };
  var r = { b: z, r: 0 };
  var w = { cN: "string", b: '"', c: [r], e: '"[cwd]?', r: 0 };
  var f = { cN: "string", b: '[rq]"', e: '"[cwd]?', r: 5 };
  var u = { cN: "string", b: "`", e: "`[cwd]?" };
  var i = { cN: "string", b: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?', r: 10 };
  var t = { cN: "string", b: 'q"\\{', e: '\\}"' };
  var e = { cN: "shebang", b: "^#!", e: "$", r: 5 };
  var g = { cN: "preprocessor", b: "#(line)", e: "$", r: 5 };
  var d = { cN: "keyword", b: "@[a-zA-Z_][a-zA-Z_\\d]*" };
  var a = { cN: "comment", b: "\\/\\+", c: ["self"], e: "\\+\\/", r: 10 };
  return {
    l: x.UIR,
    k: b,
    c: [x.CLCM, x.CBLCLM, a, i, w, f, u, t, j, m, s, e, g, d],
  };
})(hljs);
hljs.LANGUAGES.delphi = (function(b) {
  var f =
    "and safecall cdecl then string exports library not pascal set virtual file in array label packed end. index while const raise for to implementation with except overload destructor downto finally program exit unit inherited override if type until function do begin repeat goto nil far initialization object else var uses external resourcestring interface end finalization class asm mod case on shr shl of register xorwrite threadvar try record near stored constructor stdcall inline div out or procedure";
  var e =
    "safecall stdcall pascal stored const implementation finalization except to finally program inherited override then exports string read not mod shr try div shl set library message packed index for near overload label downto exit public goto interface asm on of constructor or private array unit raise destructor var type until function else external with case default record while protected property procedure published and cdecl do threadvar file in if end virtual write far out begin repeat nil initialization object uses resourcestring class register xorwrite inline static";
  var a = { cN: "comment", b: "{", e: "}", r: 0 };
  var g = { cN: "comment", b: "\\(\\*", e: "\\*\\)", r: 10 };
  var c = { cN: "string", b: "'", e: "'", c: [{ b: "''" }], r: 0 };
  var d = { cN: "string", b: "(#\\d+)+" };
  var h = {
    cN: "function",
    bWK: true,
    e: "[:;]",
    k: "function constructor|10 destructor|10 procedure|10",
    c: [
      { cN: "title", b: b.IR },
      { cN: "params", b: "\\(", e: "\\)", k: f, c: [c, d] },
      a,
      g,
    ],
  };
  return {
    cI: true,
    k: f,
    i: '("|\\$[G-Zg-z]|\\/\\*|</)',
    c: [
      a,
      g,
      b.CLCM,
      c,
      d,
      b.NM,
      h,
      {
        cN: "class",
        b: "=\\bclass\\b",
        e: "end;",
        k: e,
        c: [c, d, a, g, b.CLCM, h],
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.diff = (function(a) {
  return {
    c: [
      { cN: "chunk", b: "^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$", r: 10 },
      { cN: "chunk", b: "^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$", r: 10 },
      { cN: "chunk", b: "^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$", r: 10 },
      { cN: "header", b: "Index: ", e: "$" },
      { cN: "header", b: "=====", e: "=====$" },
      { cN: "header", b: "^\\-\\-\\-", e: "$" },
      { cN: "header", b: "^\\*{3} ", e: "$" },
      { cN: "header", b: "^\\+\\+\\+", e: "$" },
      { cN: "header", b: "\\*{5}", e: "\\*{5}$" },
      { cN: "addition", b: "^\\+", e: "$" },
      { cN: "deletion", b: "^\\-", e: "$" },
      { cN: "change", b: "^\\!", e: "$" },
    ],
  };
})(hljs);
hljs.LANGUAGES.django = (function(c) {
  function e(h, g) {
    return g == undefined || (!h.cN && g.cN == "tag") || h.cN == "value";
  }
  function f(l, k) {
    var g = {};
    for (var j in l) {
      if (j != "contains") {
        g[j] = l[j];
      }
      var m = [];
      for (var h = 0; l.c && h < l.c.length; h++) {
        m.push(f(l.c[h], l));
      }
      if (e(l, k)) {
        m = b.concat(m);
      }
      if (m.length) {
        g.c = m;
      }
    }
    return g;
  }
  var d = {
    cN: "filter",
    b: "\\|[A-Za-z]+\\:?",
    k:
      "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone",
    c: [{ cN: "argument", b: '"', e: '"' }],
  };
  var b = [
    {
      cN: "template_comment",
      b: "{%\\s*comment\\s*%}",
      e: "{%\\s*endcomment\\s*%}",
    },
    { cN: "template_comment", b: "{#", e: "#}" },
    {
      cN: "template_tag",
      b: "{%",
      e: "%}",
      k:
        "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor in ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup by as ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim",
      c: [d],
    },
    { cN: "variable", b: "{{", e: "}}", c: [d] },
  ];
  var a = f(c.LANGUAGES.xml);
  a.cI = true;
  return a;
})(hljs);
hljs.LANGUAGES.dos = (function(a) {
  return {
    cI: true,
    k: {
      flow:
        "if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",
      keyword: "shift cd dir echo setlocal endlocal set pause copy",
      stream: "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux",
      winutils: "ping net ipconfig taskkill xcopy ren del",
    },
    c: [
      { cN: "envvar", b: "%%[^ ]" },
      { cN: "envvar", b: "%[^ ]+?%" },
      { cN: "envvar", b: "![^ ]+?!" },
      { cN: "number", b: "\\b\\d+", r: 0 },
      { cN: "comment", b: "@?rem", e: "$" },
    ],
  };
})(hljs);
hljs.LANGUAGES["erlang-repl"] = (function(a) {
  return {
    k: {
      special_functions: "spawn spawn_link self",
      reserved:
        "after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor",
    },
    c: [
      { cN: "prompt", b: "^[0-9]+> ", r: 10 },
      { cN: "comment", b: "%", e: "$" },
      {
        cN: "number",
        b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
        r: 0,
      },
      a.ASM,
      a.QSM,
      { cN: "constant", b: "\\?(::)?([A-Z]\\w*(::)?)+" },
      { cN: "arrow", b: "->" },
      { cN: "ok", b: "ok" },
      { cN: "exclamation_mark", b: "!" },
      {
        cN: "function_or_atom",
        b:
          "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
        r: 0,
      },
      { cN: "variable", b: "[A-Z][a-zA-Z0-9_']*", r: 0 },
    ],
  };
})(hljs);
hljs.LANGUAGES.erlang = (function(i) {
  var c = "[a-z'][a-zA-Z0-9_']*";
  var o = "(" + c + ":" + c + "|" + c + ")";
  var f = {
    keyword:
      "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun let not of orelse|10 query receive rem try when xor",
    literal: "false true",
  };
  var l = { cN: "comment", b: "%", e: "$", r: 0 };
  var e = {
    cN: "number",
    b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
    r: 0,
  };
  var g = { b: "fun\\s+" + c + "/\\d+" };
  var n = {
    b: o + "\\(",
    e: "\\)",
    rB: true,
    r: 0,
    c: [
      { cN: "function_name", b: o, r: 0 },
      { b: "\\(", e: "\\)", eW: true, rE: true, r: 0 },
    ],
  };
  var h = { cN: "tuple", b: "{", e: "}", r: 0 };
  var a = { cN: "variable", b: "\\b_([A-Z][A-Za-z0-9_]*)?", r: 0 };
  var m = { cN: "variable", b: "[A-Z][a-zA-Z0-9_]*", r: 0 };
  var b = {
    b: "#",
    e: "}",
    i: ".",
    r: 0,
    rB: true,
    c: [
      { cN: "record_name", b: "#" + i.UIR, r: 0 },
      { b: "{", eW: true, r: 0 },
    ],
  };
  var k = { k: f, b: "(fun|receive|if|try|case)", e: "end" };
  k.c = [l, g, i.inherit(i.ASM, { cN: "" }), k, n, i.QSM, e, h, a, m, b];
  var j = [l, g, k, n, i.QSM, e, h, a, m, b];
  n.c[1].c = j;
  h.c = j;
  b.c[1].c = j;
  var d = { cN: "params", b: "\\(", e: "\\)", c: j };
  return {
    k: f,
    i: "(</|\\*=|\\+=|-=|/=|/\\*|\\*/|\\(\\*|\\*\\))",
    c: [
      {
        cN: "function",
        b: "^" + c + "\\s*\\(",
        e: "->",
        rB: true,
        i: "\\(|#|//|/\\*|\\\\|:",
        c: [d, { cN: "title", b: c }],
        starts: { e: ";|\\.", k: f, c: j },
      },
      l,
      {
        cN: "pp",
        b: "^-",
        e: "\\.",
        r: 0,
        eE: true,
        rB: true,
        l: "-" + i.IR,
        k:
          "-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior",
        c: [d],
      },
      e,
      i.QSM,
      b,
      a,
      m,
      h,
    ],
  };
})(hljs);
hljs.LANGUAGES.fsharp = (function(a) {
  var b = "'[a-zA-Z0-9_]+";
  return {
    k:
      "yield! return! let! do!abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun|10 function global if in inherit inline interface internal lazy let match member module mutable|10 namespace new null of open or override private public rec|10 return sig static struct then to true try type upcast use val void when while with yield",
    c: [
      { cN: "string", b: '@"', e: '"', c: [{ b: '""' }] },
      { cN: "string", b: '"""', e: '"""' },
      { cN: "comment", b: "//", e: "$", rB: true },
      { cN: "comment", b: "\\(\\*", e: "\\*\\)" },
      {
        cN: "class",
        bWK: true,
        e: "\\(|=|$",
        k: "type",
        c: [{ cN: "title", b: a.UIR }],
      },
      { cN: "annotation", b: "\\[<", e: ">\\]", r: 10 },
      { cN: "typeparam", b: "<", e: ">", c: [{ cN: "title", b: b }] },
      a.CLCM,
      a.CBLCLM,
      a.inherit(a.ASM, { i: null }),
      a.inherit(a.QSM, { i: null }),
      a.CNM,
    ],
  };
})(hljs);
hljs.LANGUAGES.glsl = (function(a) {
  return {
    k: {
      keyword:
        "atomic_uint attribute bool break bvec2 bvec3 bvec4 case centroid coherent const continue default discard dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 do double dvec2 dvec3 dvec4 else flat float for highp if iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer iimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray in inout int invariant isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 layout lowp mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 mediump noperspective out patch precision readonly restrict return sample sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow smooth struct subroutine switch uimage1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint uniform usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D usamplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 varying vec2 vec3 vec4 void volatile while writeonly",
      built_in:
        "gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffsetgl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_PerVertex gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicCounter atomicCounterDecrement atomicCounterIncrement barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow gl_TextureMatrix gl_TextureMatrixInverse",
      literal: "true false",
    },
    i: '"',
    c: [a.CLCM, a.CBLCLM, a.CNM, { cN: "preprocessor", b: "#", e: "$" }],
  };
})(hljs);
hljs.LANGUAGES.go = (function(a) {
  var b = {
    keyword:
      "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer",
    constant: "true false iota nil",
    typename:
      "bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
    built_in:
      "append cap close complex copy imag len make new panic print println real recover delete",
  };
  return {
    k: b,
    i: "</",
    c: [
      a.CLCM,
      a.CBLCLM,
      a.QSM,
      { cN: "string", b: "'", e: "[^\\\\]'", r: 0 },
      { cN: "string", b: "`", e: "`" },
      {
        cN: "number",
        b:
          "[^a-zA-Z_0-9](\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?",
        r: 0,
      },
      a.CNM,
    ],
  };
})(hljs);
hljs.LANGUAGES.ruby = (function(e) {
  var a = "[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";
  var j =
    "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";
  var g = {
    keyword:
      "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include",
  };
  var c = { cN: "yardoctag", b: "@[A-Za-z]+" };
  var k = [
    { cN: "comment", b: "#", e: "$", c: [c] },
    { cN: "comment", b: "^\\=begin", e: "^\\=end", c: [c], r: 10 },
    { cN: "comment", b: "^__END__", e: "\\n$" },
  ];
  var d = { cN: "subst", b: "#\\{", e: "}", l: a, k: g };
  var i = [e.BE, d];
  var b = [
    { cN: "string", b: "'", e: "'", c: i, r: 0 },
    { cN: "string", b: '"', e: '"', c: i, r: 0 },
    { cN: "string", b: "%[qw]?\\(", e: "\\)", c: i },
    { cN: "string", b: "%[qw]?\\[", e: "\\]", c: i },
    { cN: "string", b: "%[qw]?{", e: "}", c: i },
    { cN: "string", b: "%[qw]?<", e: ">", c: i, r: 10 },
    { cN: "string", b: "%[qw]?/", e: "/", c: i, r: 10 },
    { cN: "string", b: "%[qw]?%", e: "%", c: i, r: 10 },
    { cN: "string", b: "%[qw]?-", e: "-", c: i, r: 10 },
    { cN: "string", b: "%[qw]?\\|", e: "\\|", c: i, r: 10 },
  ];
  var h = {
    cN: "function",
    bWK: true,
    e: " |$|;",
    k: "def",
    c: [
      { cN: "title", b: j, l: a, k: g },
      { cN: "params", b: "\\(", e: "\\)", l: a, k: g },
    ].concat(k),
  };
  var f = k.concat(
    b.concat([
      {
        cN: "class",
        bWK: true,
        e: "$|;",
        k: "class module",
        c: [
          { cN: "title", b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?", r: 0 },
          {
            cN: "inheritance",
            b: "<\\s*",
            c: [{ cN: "parent", b: "(" + e.IR + "::)?" + e.IR }],
          },
        ].concat(k),
      },
      h,
      { cN: "constant", b: "(::)?(\\b[A-Z]\\w*(::)?)+", r: 0 },
      { cN: "symbol", b: ":", c: b.concat([{ b: j }]), r: 0 },
      { cN: "symbol", b: a + ":", r: 0 },
      {
        cN: "number",
        b:
          "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0,
      },
      { cN: "number", b: "\\?\\w" },
      { cN: "variable", b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))" },
      {
        b: "(" + e.RSR + ")\\s*",
        c: k.concat([
          { cN: "regexp", b: "/", e: "/[a-z]*", i: "\\n", c: [e.BE, d] },
        ]),
        r: 0,
      },
    ])
  );
  d.c = f;
  h.c[1].c = f;
  return { l: a, k: g, c: f };
})(hljs);
hljs.LANGUAGES.haml = (function(a) {
  return {
    cI: true,
    c: [
      {
        cN: "doctype",
        b: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
        r: 10,
      },
      { cN: "comment", b: "^\\s*(-#|/).*$", r: 0 },
      { b: "^\\s*-(?!#)", starts: { e: "\\n", sL: "ruby" }, r: 0 },
      {
        cN: "tag",
        b: "^\\s*%",
        c: [
          { cN: "title", b: "\\w+", r: 0 },
          { cN: "value", b: "[#\\.]\\w+", r: 0 },
          {
            b: "{\\s*",
            e: "\\s*}",
            eE: true,
            c: [
              {
                b: ":\\w+\\s*=>",
                e: ",\\s+",
                rB: true,
                eW: true,
                r: 0,
                c: [
                  { cN: "symbol", b: ":\\w+", r: 0 },
                  { cN: "string", b: '"', e: '"', r: 0 },
                  { cN: "string", b: "'", e: "'", r: 0 },
                  { b: "\\w+", r: 0 },
                ],
              },
            ],
            r: 0,
          },
          {
            b: "\\(\\s*",
            e: "\\s*\\)",
            eE: true,
            c: [
              {
                b: "\\w+\\s*=",
                e: "\\s+",
                rB: true,
                eW: true,
                r: 0,
                c: [
                  { cN: "attribute", b: "\\w+", r: 0 },
                  { cN: "string", b: '"', e: '"', r: 0 },
                  { cN: "string", b: "'", e: "'", r: 0 },
                  { b: "\\w+", r: 0 },
                ],
              },
            ],
            r: 0,
          },
        ],
        r: 10,
      },
      { cN: "bullet", b: "^\\s*[=~]\\s*", r: 0 },
      { b: "#{", starts: { e: "}", sL: "ruby" }, r: 0 },
    ],
  };
})(hljs);
hljs.LANGUAGES.handlebars = (function(c) {
  function f(l, k) {
    var g = {};
    for (var j in l) {
      if (j != "contains") {
        g[j] = l[j];
      }
      var m = [];
      for (var h = 0; l.c && h < l.c.length; h++) {
        m.push(f(l.c[h], l));
      }
      m = d.concat(m);
      if (m.length) {
        g.c = m;
      }
    }
    return g;
  }
  var b =
    "each in with if else unless bindattr action collection debugger log outlet template unbound view yield";
  var e = { cN: "variable", b: "[a-zA-Z.]+", k: b };
  var d = [
    {
      cN: "expression",
      b: "{{",
      e: "}}",
      c: [
        { cN: "begin-block", b: "#[a-zA-Z .]+", k: b },
        { cN: "string", b: '"', e: '"' },
        { cN: "end-block", b: "\\/[a-zA-Z .]+", k: b },
        { cN: "variable", b: "[a-zA-Z.]+", k: b },
      ],
    },
  ];
  var a = f(c.LANGUAGES.xml);
  a.cI = true;
  return a;
})(hljs);
hljs.LANGUAGES.haskell = (function(a) {
  var d = { cN: "type", b: "\\b[A-Z][\\w']*", r: 0 };
  var c = {
    cN: "container",
    b: "\\(",
    e: "\\)",
    i: '"',
    c: [
      { cN: "type", b: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?" },
      { cN: "title", b: "[_a-z][\\w']*" },
    ],
  };
  var b = { cN: "container", b: "{", e: "}", c: c.c };
  return {
    k:
      "let in if then else case of where do module import hiding qualified type data newtype deriving class instance not as foreign ccall safe unsafe",
    c: [
      { cN: "comment", b: "--", e: "$" },
      { cN: "preprocessor", b: "{-#", e: "#-}" },
      { cN: "comment", c: ["self"], b: "{-", e: "-}" },
      { cN: "string", b: "\\s+'", e: "'", c: [a.BE], r: 0 },
      a.QSM,
      {
        cN: "import",
        b: "\\bimport",
        e: "$",
        k: "import qualified as hiding",
        c: [c],
        i: "\\W\\.|;",
      },
      {
        cN: "module",
        b: "\\bmodule",
        e: "where",
        k: "module where",
        c: [c],
        i: "\\W\\.|;",
      },
      {
        cN: "class",
        b: "\\b(class|instance)",
        e: "where",
        k: "class where instance",
        c: [d],
      },
      {
        cN: "typedef",
        b: "\\b(data|(new)?type)",
        e: "$",
        k: "data type newtype deriving",
        c: [d, c, b],
      },
      a.CNM,
      { cN: "shebang", b: "#!\\/usr\\/bin\\/env runhaskell", e: "$" },
      d,
      { cN: "title", b: "^[_a-z][\\w']*" },
      { b: "->|<-" },
    ],
  };
})(hljs);
hljs.LANGUAGES.http = (function(a) {
  return {
    i: "\\S",
    c: [
      {
        cN: "status",
        b: "^HTTP/[0-9\\.]+",
        e: "$",
        c: [{ cN: "number", b: "\\b\\d{3}\\b" }],
      },
      {
        cN: "request",
        b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
        rB: true,
        e: "$",
        c: [{ cN: "string", b: " ", e: " ", eB: true, eE: true }],
      },
      {
        cN: "attribute",
        b: "^\\w",
        e: ": ",
        eE: true,
        i: "\\n|\\s|=",
        starts: { cN: "string", e: "$" },
      },
      { b: "\\n\\n", starts: { sL: "", eW: true } },
    ],
  };
})(hljs);
hljs.LANGUAGES.ini = (function(a) {
  return {
    cI: true,
    i: "[^\\s]",
    c: [
      { cN: "comment", b: ";", e: "$" },
      { cN: "title", b: "^\\[", e: "\\]" },
      {
        cN: "setting",
        b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
        e: "$",
        c: [
          {
            cN: "value",
            eW: true,
            k: "on off true false yes no",
            c: [a.QSM, a.NM],
            r: 0,
          },
        ],
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.java = (function(a) {
  return {
    k:
      "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws",
    c: [
      {
        cN: "javadoc",
        b: "/\\*\\*",
        e: "\\*/",
        c: [{ cN: "javadoctag", b: "(^|\\s)@[A-Za-z]+" }],
        r: 10,
      },
      a.CLCM,
      a.CBLCLM,
      a.ASM,
      a.QSM,
      {
        cN: "class",
        bWK: true,
        e: "{",
        k: "class interface",
        eE: true,
        i: ":",
        c: [
          { bWK: true, k: "extends implements", r: 10 },
          { cN: "title", b: a.UIR },
        ],
      },
      a.CNM,
      { cN: "annotation", b: "@[A-Za-z]+" },
    ],
  };
})(hljs);
hljs.LANGUAGES.javascript = (function(a) {
  return {
    k: {
      keyword:
        "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",
      literal: "true false null undefined NaN Infinity",
    },
    c: [
      a.ASM,
      a.QSM,
      a.CLCM,
      a.CBLCLM,
      a.CNM,
      {
        b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
        k: "return throw case",
        c: [a.CLCM, a.CBLCLM, a.REGEXP_MODE, { b: /</, e: />;/, sL: "xml" }],
        r: 0,
      },
      {
        cN: "function",
        bWK: true,
        e: /{/,
        k: "function",
        c: [
          { cN: "title", b: /[A-Za-z$_][0-9A-Za-z$_]*/ },
          {
            cN: "params",
            b: /\(/,
            e: /\)/,
            c: [a.CLCM, a.CBLCLM],
            i: /["'\(]/,
          },
        ],
        i: /\[|%/,
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.json = (function(a) {
  var e = { literal: "true false null" };
  var d = [a.QSM, a.CNM];
  var c = { cN: "value", e: ",", eW: true, eE: true, c: d, k: e };
  var b = {
    b: "{",
    e: "}",
    c: [
      {
        cN: "attribute",
        b: '\\s*"',
        e: '"\\s*:\\s*',
        eB: true,
        eE: true,
        c: [a.BE],
        i: "\\n",
        starts: c,
      },
    ],
    i: "\\S",
  };
  var f = { b: "\\[", e: "\\]", c: [a.inherit(c, { cN: null })], i: "\\S" };
  d.splice(d.length, 0, b, f);
  return { c: d, k: e, i: "\\S" };
})(hljs);
hljs.LANGUAGES.lasso = (function(b) {
  var a = "[a-zA-Z_][a-zA-Z0-9_.]*|&[lg]t;";
  var c = "<\\?(lasso(script)?|=)";
  return {
    cI: true,
    l: a,
    k: {
      literal:
        "true false none minimal full all infinity nan and or not bw ew cn lt lte gt gte eq neq ft rx nrx",
      built_in:
        "array date decimal duration integer map pair string tag xml null list queue set stack staticarray local var variable data global self inherited void",
      keyword:
        "error_code error_msg error_pop error_push error_reset cache database_names database_schemanames database_tablenames define_tag define_type email_batch encode_set html_comment handle handle_error header if inline iterate ljax_target link link_currentaction link_currentgroup link_currentrecord link_detail link_firstgroup link_firstrecord link_lastgroup link_lastrecord link_nextgroup link_nextrecord link_prevgroup link_prevrecord log loop namespace_using output_none portal private protect records referer referrer repeating resultset rows search_args search_arguments select sort_args sort_arguments thread_atomic value_list while abort case else if_empty if_false if_null if_true loop_abort loop_continue loop_count params params_up return return_value run_children soap_definetag soap_lastrequest soap_lastresponse tag_name ascending average by define descending do equals frozen group handle_failure import in into join let match max min on order parent protected provide public require skip split_thread sum take thread to trait type where with yield",
    },
    c: [
      {
        cN: "preprocessor",
        b: "\\]|\\?>",
        r: 0,
        starts: { cN: "markup", e: "\\[|" + c, rE: true },
      },
      {
        cN: "preprocessor",
        b: "\\[noprocess\\]",
        starts: { cN: "markup", e: "\\[/noprocess\\]", rE: true },
      },
      { cN: "preprocessor", b: "\\[no_square_brackets|\\[/noprocess|" + c },
      { cN: "preprocessor", b: "\\[", r: 0 },
      { cN: "shebang", b: "^#!.+lasso9\\b", r: 10 },
      b.CLCM,
      { cN: "javadoc", b: "/\\*\\*!", e: "\\*/" },
      b.CBLCLM,
      b.CNM,
      b.inherit(b.ASM, { i: null }),
      b.inherit(b.QSM, { i: null }),
      { cN: "string", b: "`", e: "`" },
      { cN: "variable", b: "#\\d+|[#$]" + a },
      { cN: "tag", b: "::", e: a },
      { cN: "attribute", b: "\\.\\.\\.|-" + b.UIR },
      {
        cN: "class",
        bWK: true,
        k: "define",
        eE: true,
        e: "\\(|=>",
        c: [{ cN: "title", b: b.UIR + "=?" }],
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.lisp = (function(i) {
  var l =
    "[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*";
  var m = "(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?";
  var k = { cN: "shebang", b: "^#!", e: "$" };
  var a = { cN: "literal", b: "\\b(t{1}|nil)\\b" };
  var d = [
    { cN: "number", b: m },
    { cN: "number", b: "#b[0-1]+(/[0-1]+)?" },
    { cN: "number", b: "#o[0-7]+(/[0-7]+)?" },
    { cN: "number", b: "#x[0-9a-f]+(/[0-9a-f]+)?" },
    { cN: "number", b: "#c\\(" + m + " +" + m, e: "\\)" },
  ];
  var h = { cN: "string", b: '"', e: '"', c: [i.BE], r: 0 };
  var n = { cN: "comment", b: ";", e: "$" };
  var g = { cN: "variable", b: "\\*", e: "\\*" };
  var o = { cN: "keyword", b: "[:&]" + l };
  var b = { b: "\\(", e: "\\)", c: ["self", a, h].concat(d) };
  var e = { cN: "quoted", b: "['`]\\(", e: "\\)", c: d.concat([h, g, o, b]) };
  var c = {
    cN: "quoted",
    b: "\\(quote ",
    e: "\\)",
    k: { title: "quote" },
    c: d.concat([h, g, o, b]),
  };
  var j = { cN: "list", b: "\\(", e: "\\)" };
  var f = { eW: true, r: 0 };
  j.c = [{ cN: "title", b: l }, f];
  f.c = [e, c, j, a].concat(d).concat([h, n, g, o]);
  return { i: "[^\\s]", c: d.concat([k, a, h, n, e, c, j]) };
})(hljs);
hljs.LANGUAGES.lua = (function(b) {
  var a = "\\[=*\\[";
  var e = "\\]=*\\]";
  var c = { b: a, e: e, c: ["self"] };
  var d = [
    { cN: "comment", b: "--(?!" + a + ")", e: "$" },
    { cN: "comment", b: "--" + a, e: e, c: [c], r: 10 },
  ];
  return {
    l: b.UIR,
    k: {
      keyword:
        "and break do else elseif end false for if in local nil not or repeat return then true until while",
      built_in:
        "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table",
    },
    c: d.concat([
      {
        cN: "function",
        bWK: true,
        e: "\\)",
        k: "function",
        c: [
          {
            cN: "title",
            b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*",
          },
          { cN: "params", b: "\\(", eW: true, c: d },
        ].concat(d),
      },
      b.CNM,
      b.ASM,
      b.QSM,
      { cN: "string", b: a, e: e, c: [c], r: 10 },
    ]),
  };
})(hljs);
hljs.LANGUAGES.markdown = (function(a) {
  return {
    c: [
      { cN: "header", b: "^#{1,3}", e: "$" },
      { cN: "header", b: "^.+?\\n[=-]{2,}$" },
      { b: "<", e: ">", sL: "xml", r: 0 },
      { cN: "bullet", b: "^([*+-]|(\\d+\\.))\\s+" },
      { cN: "strong", b: "[*_]{2}.+?[*_]{2}" },
      { cN: "emphasis", b: "\\*.+?\\*" },
      { cN: "emphasis", b: "_.+?_", r: 0 },
      { cN: "blockquote", b: "^>\\s+", e: "$" },
      { cN: "code", b: "`.+?`" },
      { cN: "code", b: "^    ", e: "$", r: 0 },
      { cN: "horizontal_rule", b: "^-{3,}", e: "$" },
      {
        b: "\\[.+?\\]\\(.+?\\)",
        rB: true,
        c: [
          { cN: "link_label", b: "\\[.+\\]" },
          { cN: "link_url", b: "\\(", e: "\\)", eB: true, eE: true },
        ],
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.matlab = (function(a) {
  var b = [
    a.CNM,
    { cN: "string", b: "'", e: "'", c: [a.BE, { b: "''" }], r: 0 },
  ];
  return {
    k: {
      keyword:
        "break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",
      built_in:
        "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson",
    },
    i: '(//|"|#|/\\*|\\s+/\\w+)',
    c: [
      {
        cN: "function",
        bWK: true,
        e: "$",
        k: "function",
        c: [
          { cN: "title", b: a.UIR },
          { cN: "params", b: "\\(", e: "\\)" },
          { cN: "params", b: "\\[", e: "\\]" },
        ],
      },
      {
        cN: "transposed_variable",
        b: "[a-zA-Z_][a-zA-Z_0-9]*('+[\\.']*|[\\.']+)",
        e: "",
      },
      { cN: "matrix", b: "\\[", e: "\\]'*[\\.']*", c: b },
      { cN: "cell", b: "\\{", e: "\\}'*[\\.']*", c: b },
      { cN: "comment", b: "\\%", e: "$" },
    ].concat(b),
  };
})(hljs);
hljs.LANGUAGES.mel = (function(a) {
  return {
    k:
      "int float string vector matrix if else switch case default while do for in break continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor animDisplay animView annotate appendStringArray applicationName applyAttrPreset applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem componentEditor compositingInterop computePolysetVolume condition cone confirmDialog connectAttr connectControl connectDynamic connectJoint connectionInfo constrain constrainValue constructionHistory container containsMultibyte contextInfo control convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse currentCtx currentTime currentTimeCtx currentUnit currentUnit curve curveAddPtCtx curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected displayColor displayCull displayLevelOfDetail displayPref displayRGBColor displaySmoothness displayStats displayString displaySurface distanceDimContext distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor editorTemplate effector emit emitter enableDevice encodeString endString endsWith env equivalent equivalentTol erf error eval eval evalDeferred evalEcho event exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo filetest filletCurve filter filterCurve filterExpand filterStudioImport findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss geometryConstraint getApplicationVersionAsFloat getAttr getClassification getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation listNodeTypes listPanelCategories listRelatives listSets listTransforms listUnselected listerEditor loadFluid loadNewShelf loadPlugin loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration panelHistory paramDimContext paramDimension paramLocator parent parentConstraint particle particleExists particleInstancer particleRenderInfo partition pasteKey pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE registerPluginResource rehash reloadImage removeJoint removeMultiInstance removePanelCategory rename renameAttr renameSelectionList renameUI render renderGlobalsNode renderInfo renderLayerButton renderLayerParent renderLayerPostProcess renderLayerUnparent renderManip renderPartition renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor renderWindowSelectContext renderer reorder reorderDeformers requires reroot resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType selectedNodes selectionConnection separator setAttr setAttrEnumResource setAttrMapping setAttrNiceNameResource setConstraintRestPosition setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField shortNameOf showHelp showHidden showManipCtx showSelectionInTitle showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString stringToStringArray strip stripPrefixFromName stroke subdAutoProjection subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList textToShelf textureDisplacePlane textureHairColor texturePlacementContext textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper trace track trackCtx transferAttributes transformCompare transformLimits translator trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform",
    i: "</",
    c: [
      a.CNM,
      a.ASM,
      a.QSM,
      { cN: "string", b: "`", e: "`", c: [a.BE] },
      { cN: "variable", b: "\\$\\d", r: 5 },
      {
        cN: "variable",
        b: "[\\$\\%\\@\\*](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)",
      },
      a.CLCM,
      a.CBLCLM,
    ],
  };
})(hljs);
hljs.LANGUAGES.mizar = (function(a) {
  return {
    k: [
      "environ vocabularies notations constructors definitions registrations theorems schemes requirements",
      "begin end definition registration cluster existence pred func defpred deffunc theorem proof",
      "let take assume then thus hence ex for st holds consider reconsider such that and in provided of as from",
      "be being by means equals implies iff redefine define now not or attr is mode suppose per cases set",
      "thesis contradiction scheme reserve struct",
      "correctness compatibility coherence symmetry assymetry reflexivity irreflexivity",
      "connectedness uniqueness commutativity idempotence involutiveness projectivity",
    ].join(" "),
    c: [{ cN: "comment", b: "::", e: "$" }],
  };
})(hljs);
hljs.LANGUAGES.nginx = (function(b) {
  var c = [
    { cN: "variable", b: "\\$\\d+" },
    { cN: "variable", b: "\\${", e: "}" },
    { cN: "variable", b: "[\\$\\@]" + b.UIR },
  ];
  var a = {
    eW: true,
    l: "[a-z/_]+",
    k: {
      built_in:
        "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll",
    },
    r: 0,
    i: "=>",
    c: [
      b.HCM,
      { cN: "string", b: '"', e: '"', c: [b.BE].concat(c), r: 0 },
      { cN: "string", b: "'", e: "'", c: [b.BE].concat(c), r: 0 },
      { cN: "url", b: "([a-z]+):/", e: "\\s", eW: true, eE: true },
      {
        cN: "regexp",
        b: "\\s\\^",
        e: "\\s|{|;",
        rE: true,
        c: [b.BE].concat(c),
      },
      {
        cN: "regexp",
        b: "~\\*?\\s+",
        e: "\\s|{|;",
        rE: true,
        c: [b.BE].concat(c),
      },
      { cN: "regexp", b: "\\*(\\.[a-z\\-]+)+", c: [b.BE].concat(c) },
      { cN: "regexp", b: "([a-z\\-]+\\.)+\\*", c: [b.BE].concat(c) },
      {
        cN: "number",
        b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b",
      },
      { cN: "number", b: "\\b\\d+[kKmMgGdshdwy]*\\b", r: 0 },
    ].concat(c),
  };
  return {
    c: [
      b.HCM,
      {
        b: b.UIR + "\\s",
        e: ";|{",
        rB: true,
        c: [{ cN: "title", b: b.UIR, starts: a }],
        r: 0,
      },
    ],
    i: "[^\\s\\}]",
  };
})(hljs);
hljs.LANGUAGES.objectivec = (function(a) {
  var b = {
    keyword:
      "int float while private char catch export sizeof typedef const struct for union unsigned long volatile static protected bool mutable if public do return goto void enum else break extern asm case short default double throw register explicit signed typename try this switch continue wchar_t inline readonly assign property self synchronized end synthesize id optional required nonatomic super unichar finally dynamic IBOutlet IBAction selector strong weak readonly",
    literal: "false true FALSE TRUE nil YES NO NULL",
    built_in:
      "NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once",
  };
  return {
    k: b,
    i: "</",
    c: [
      a.CLCM,
      a.CBLCLM,
      a.CNM,
      a.QSM,
      { cN: "string", b: "'", e: "[^\\\\]'", i: "[^\\\\][^']" },
      {
        cN: "preprocessor",
        b: "#import",
        e: "$",
        c: [
          { cN: "title", b: '"', e: '"' },
          { cN: "title", b: "<", e: ">" },
        ],
      },
      { cN: "preprocessor", b: "#", e: "$" },
      {
        cN: "class",
        bWK: true,
        e: "({|$)",
        k: "interface class protocol implementation",
        c: [{ cN: "id", b: a.UIR }],
      },
      { cN: "variable", b: "\\." + a.UIR, r: 0 },
    ],
  };
})(hljs);
hljs.LANGUAGES.parser3 = (function(a) {
  return {
    sL: "xml",
    r: 0,
    c: [
      { cN: "comment", b: "^#", e: "$" },
      {
        cN: "comment",
        b: "\\^rem{",
        e: "}",
        r: 10,
        c: [{ b: "{", e: "}", c: ["self"] }],
      },
      { cN: "preprocessor", b: "^@(?:BASE|USE|CLASS|OPTIONS)$", r: 10 },
      {
        cN: "title",
        b: "@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$",
      },
      { cN: "variable", b: "\\$\\{?[\\w\\-\\.\\:]+\\}?" },
      { cN: "keyword", b: "\\^[\\w\\-\\.\\:]+" },
      { cN: "number", b: "\\^#[0-9a-fA-F]+" },
      a.CNM,
    ],
  };
})(hljs);
hljs.LANGUAGES.perl = (function(e) {
  var a =
    "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";
  var d = { cN: "subst", b: "[$@]\\{", e: "\\}", k: a, r: 10 };
  var b = { cN: "variable", b: "\\$\\d" };
  var i = {
    cN: "variable",
    b:
      "[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)",
  };
  var f = [e.BE, d, b, i];
  var h = { b: "->", c: [{ b: e.IR }, { b: "{", e: "}" }] };
  var g = { cN: "comment", b: "^(__END__|__DATA__)", e: "\\n$", r: 5 };
  var c = [
    b,
    i,
    e.HCM,
    g,
    { cN: "comment", b: "^\\=\\w", e: "\\=cut", eW: true },
    h,
    { cN: "string", b: "q[qwxr]?\\s*\\(", e: "\\)", c: f, r: 5 },
    { cN: "string", b: "q[qwxr]?\\s*\\[", e: "\\]", c: f, r: 5 },
    { cN: "string", b: "q[qwxr]?\\s*\\{", e: "\\}", c: f, r: 5 },
    { cN: "string", b: "q[qwxr]?\\s*\\|", e: "\\|", c: f, r: 5 },
    { cN: "string", b: "q[qwxr]?\\s*\\<", e: "\\>", c: f, r: 5 },
    { cN: "string", b: "qw\\s+q", e: "q", c: f, r: 5 },
    { cN: "string", b: "'", e: "'", c: [e.BE], r: 0 },
    { cN: "string", b: '"', e: '"', c: f, r: 0 },
    { cN: "string", b: "`", e: "`", c: [e.BE] },
    { cN: "string", b: "{\\w+}", r: 0 },
    { cN: "string", b: "-?\\w+\\s*\\=\\>", r: 0 },
    {
      cN: "number",
      b:
        "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      r: 0,
    },
    {
      b: "(" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
      k: "split return print reverse grep",
      r: 0,
      c: [
        e.HCM,
        g,
        {
          cN: "regexp",
          b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
          r: 10,
        },
        { cN: "regexp", b: "(m|qr)?/", e: "/[a-z]*", c: [e.BE], r: 0 },
      ],
    },
    { cN: "sub", bWK: true, e: "(\\s*\\(.*?\\))?[;{]", k: "sub", r: 5 },
    { cN: "operator", b: "-\\w\\b", r: 0 },
  ];
  d.c = c;
  h.c[1].c = c;
  return { k: a, c: c };
})(hljs);
hljs.LANGUAGES.php = (function(a) {
  var e = { cN: "variable", b: "\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*" };
  var b = [
    a.inherit(a.ASM, { i: null }),
    a.inherit(a.QSM, { i: null }),
    { cN: "string", b: 'b"', e: '"', c: [a.BE] },
    { cN: "string", b: "b'", e: "'", c: [a.BE] },
  ];
  var c = [a.BNM, a.CNM];
  var d = { cN: "title", b: a.UIR };
  return {
    cI: true,
    k:
      "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return implements parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception php_user_filter default die require __FUNCTION__ enddeclare final try this switch continue endfor endif declare unset true false namespace trait goto instanceof insteadof __DIR__ __NAMESPACE__ __halt_compiler",
    c: [
      a.CLCM,
      a.HCM,
      {
        cN: "comment",
        b: "/\\*",
        e: "\\*/",
        c: [{ cN: "phpdoc", b: "\\s@[A-Za-z]+" }],
      },
      { cN: "comment", eB: true, b: "__halt_compiler.+?;", eW: true },
      { cN: "string", b: "<<<['\"]?\\w+['\"]?$", e: "^\\w+;", c: [a.BE] },
      { cN: "preprocessor", b: "<\\?php", r: 10 },
      { cN: "preprocessor", b: "\\?>" },
      e,
      {
        cN: "function",
        bWK: true,
        e: "{",
        k: "function",
        i: "\\$|\\[|%",
        c: [
          d,
          {
            cN: "params",
            b: "\\(",
            e: "\\)",
            c: ["self", e, a.CBLCLM].concat(b).concat(c),
          },
        ],
      },
      {
        cN: "class",
        bWK: true,
        e: "{",
        k: "class",
        i: "[:\\(\\$]",
        c: [{ bWK: true, eW: true, k: "extends", c: [d] }, d],
      },
      { b: "=>" },
    ]
      .concat(b)
      .concat(c),
  };
})(hljs);
hljs.LANGUAGES.profile = (function(a) {
  return {
    c: [
      a.CNM,
      {
        cN: "built_in",
        b: "{",
        e: "}$",
        eB: true,
        eE: true,
        c: [a.ASM, a.QSM],
        r: 0,
      },
      {
        cN: "filename",
        b: "[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",
        e: ":",
        eE: true,
      },
      {
        cN: "header",
        b: "(ncalls|tottime|cumtime)",
        e: "$",
        k: "ncalls tottime|10 cumtime|10 filename",
        r: 10,
      },
      { cN: "summary", b: "function calls", e: "$", c: [a.CNM], r: 10 },
      a.ASM,
      a.QSM,
      {
        cN: "function",
        b: "\\(",
        e: "\\)$",
        c: [{ cN: "title", b: a.UIR, r: 0 }],
        r: 0,
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.python = (function(a) {
  var f = { cN: "prompt", b: /^(>>>|\.\.\.) / };
  var c = [
    { cN: "string", b: /(u|b)?r?'''/, e: /'''/, c: [f], r: 10 },
    { cN: "string", b: /(u|b)?r?"""/, e: /"""/, c: [f], r: 10 },
    { cN: "string", b: /(u|r|ur)'/, e: /'/, c: [a.BE], r: 10 },
    { cN: "string", b: /(u|r|ur)"/, e: /"/, c: [a.BE], r: 10 },
    { cN: "string", b: /(b|br)'/, e: /'/, c: [a.BE] },
    { cN: "string", b: /(b|br)"/, e: /"/, c: [a.BE] },
  ].concat([a.ASM, a.QSM]);
  var e = { cN: "title", b: a.UIR };
  var d = { cN: "params", b: /\(/, e: /\)/, c: ["self", a.CNM, f].concat(c) };
  var b = { bWK: true, e: /:/, i: /[${=;\n]/, c: [e, d], r: 10 };
  return {
    k: {
      keyword:
        "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10",
      built_in: "None True False Ellipsis NotImplemented",
    },
    i: /(<\/|->|\?)/,
    c: c.concat([
      f,
      a.HCM,
      a.inherit(b, { cN: "function", k: "def" }),
      a.inherit(b, { cN: "class", k: "class" }),
      a.CNM,
      { cN: "decorator", b: /@/, e: /$/ },
      { b: /\b(print|exec)\(/ },
    ]),
  };
})(hljs);
hljs.LANGUAGES.r = (function(a) {
  var b = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
  return {
    c: [
      a.HCM,
      {
        b: b,
        l: b,
        k: {
          keyword:
            "function if in break next repeat else for return switch while try tryCatch|10 stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...|10",
          literal:
            "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
        },
        r: 0,
      },
      { cN: "number", b: "0[xX][0-9a-fA-F]+[Li]?\\b", r: 0 },
      { cN: "number", b: "\\d+(?:[eE][+\\-]?\\d*)?L\\b", r: 0 },
      { cN: "number", b: "\\d+\\.(?!\\d)(?:i\\b)?", r: 0 },
      { cN: "number", b: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b", r: 0 },
      { cN: "number", b: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b", r: 0 },
      { b: "`", e: "`", r: 0 },
      { cN: "string", b: '"', e: '"', c: [a.BE], r: 0 },
      { cN: "string", b: "'", e: "'", c: [a.BE], r: 0 },
    ],
  };
})(hljs);
hljs.LANGUAGES.rib = (function(a) {
  return {
    k:
      "ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry Hider Hyperboloid Identity Illuminate Imager Interior LightSource MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd TransformPoints Translate TrimCurve WorldBegin WorldEnd",
    i: "</",
    c: [a.HCM, a.CNM, a.ASM, a.QSM],
  };
})(hljs);
hljs.LANGUAGES.rsl = (function(a) {
  return {
    k: {
      keyword:
        "float color point normal vector matrix while for if do return else break extern continue",
      built_in:
        "abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp faceforward filterstep floor format fresnel incident length lightsource log match max min mod noise normalize ntransform opposite option phong pnoise pow printf ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan texture textureinfo trace transform vtransform xcomp ycomp zcomp",
    },
    i: "</",
    c: [
      a.CLCM,
      a.CBLCLM,
      a.QSM,
      a.ASM,
      a.CNM,
      { cN: "preprocessor", b: "#", e: "$" },
      {
        cN: "shader",
        bWK: true,
        e: "\\(",
        k: "surface displacement light volume imager",
      },
      {
        cN: "shading",
        bWK: true,
        e: "\\(",
        k: "illuminate illuminance gather",
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.ruby = (function(e) {
  var a = "[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";
  var j =
    "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";
  var g = {
    keyword:
      "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include",
  };
  var c = { cN: "yardoctag", b: "@[A-Za-z]+" };
  var k = [
    { cN: "comment", b: "#", e: "$", c: [c] },
    { cN: "comment", b: "^\\=begin", e: "^\\=end", c: [c], r: 10 },
    { cN: "comment", b: "^__END__", e: "\\n$" },
  ];
  var d = { cN: "subst", b: "#\\{", e: "}", l: a, k: g };
  var i = [e.BE, d];
  var b = [
    { cN: "string", b: "'", e: "'", c: i, r: 0 },
    { cN: "string", b: '"', e: '"', c: i, r: 0 },
    { cN: "string", b: "%[qw]?\\(", e: "\\)", c: i },
    { cN: "string", b: "%[qw]?\\[", e: "\\]", c: i },
    { cN: "string", b: "%[qw]?{", e: "}", c: i },
    { cN: "string", b: "%[qw]?<", e: ">", c: i, r: 10 },
    { cN: "string", b: "%[qw]?/", e: "/", c: i, r: 10 },
    { cN: "string", b: "%[qw]?%", e: "%", c: i, r: 10 },
    { cN: "string", b: "%[qw]?-", e: "-", c: i, r: 10 },
    { cN: "string", b: "%[qw]?\\|", e: "\\|", c: i, r: 10 },
  ];
  var h = {
    cN: "function",
    bWK: true,
    e: " |$|;",
    k: "def",
    c: [
      { cN: "title", b: j, l: a, k: g },
      { cN: "params", b: "\\(", e: "\\)", l: a, k: g },
    ].concat(k),
  };
  var f = k.concat(
    b.concat([
      {
        cN: "class",
        bWK: true,
        e: "$|;",
        k: "class module",
        c: [
          { cN: "title", b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?", r: 0 },
          {
            cN: "inheritance",
            b: "<\\s*",
            c: [{ cN: "parent", b: "(" + e.IR + "::)?" + e.IR }],
          },
        ].concat(k),
      },
      h,
      { cN: "constant", b: "(::)?(\\b[A-Z]\\w*(::)?)+", r: 0 },
      { cN: "symbol", b: ":", c: b.concat([{ b: j }]), r: 0 },
      { cN: "symbol", b: a + ":", r: 0 },
      {
        cN: "number",
        b:
          "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0,
      },
      { cN: "number", b: "\\?\\w" },
      { cN: "variable", b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))" },
      {
        b: "(" + e.RSR + ")\\s*",
        c: k.concat([
          { cN: "regexp", b: "/", e: "/[a-z]*", i: "\\n", c: [e.BE, d] },
        ]),
        r: 0,
      },
    ])
  );
  d.c = f;
  h.c[1].c = f;
  return { l: a, k: g, c: f };
})(hljs);
hljs.LANGUAGES.ruleslanguage = (function(a) {
  return {
    k: {
      keyword:
        "BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 INTDCREATEHANDLE|5 INTDCREATEMASK|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE NOVALUE SECTION WARN DELETE SAVE SAVE_UPDATE CLEAR DETERMINANT LABEL REPORT REVENUE ABORT CALL DONE LEAVE EACH IN LIST NOVALUE FROM TOTAL CHARGE BLOCK AND OR CSV_FILE BILL_PERIOD RATE_CODE AUXILIARY_DEMAND UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM ABORT WARN NUMDAYS RATE_CODE READ_DATE STAGING",
      built_in:
        "IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME",
    },
    c: [
      a.CLCM,
      a.CBLCLM,
      a.ASM,
      a.QSM,
      a.CNM,
      { cN: "array", b: "#[a-zA-Z .]+" },
    ],
  };
})(hljs);
hljs.LANGUAGES.rust = (function(b) {
  var d = { cN: "title", b: b.UIR };
  var c = {
    cN: "number",
    b: "\\b(0[xb][A-Za-z0-9_]+|[0-9_]+(\\.[0-9_]+)?([uif](8|16|32|64)?)?)",
    r: 0,
  };
  var a =
    "assert bool break char check claim comm const cont copy dir do drop else enum extern export f32 f64 fail false float fn for i16 i32 i64 i8 if impl int let log loop match mod move mut priv pub pure ref return self static str struct task true trait type u16 u32 u64 u8 uint unsafe use vec while";
  return {
    k: a,
    i: "</",
    c: [
      b.CLCM,
      b.CBLCLM,
      b.inherit(b.QSM, { i: null }),
      b.ASM,
      c,
      { cN: "function", bWK: true, e: "(\\(|<)", k: "fn", c: [d] },
      { cN: "preprocessor", b: "#\\[", e: "\\]" },
      { bWK: true, e: "(=|<)", k: "type", c: [d], i: "\\S" },
      { bWK: true, e: "({|<)", k: "trait enum", c: [d], i: "\\S" },
    ],
  };
})(hljs);
hljs.LANGUAGES.scala = (function(a) {
  var c = { cN: "annotation", b: "@[A-Za-z]+" };
  var b = { cN: "string", b: 'u?r?"""', e: '"""', r: 10 };
  return {
    k:
      "type yield lazy override def with val var false true sealed abstract private trait object null if for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws",
    c: [
      {
        cN: "javadoc",
        b: "/\\*\\*",
        e: "\\*/",
        c: [{ cN: "javadoctag", b: "@[A-Za-z]+" }],
        r: 10,
      },
      a.CLCM,
      a.CBLCLM,
      a.ASM,
      a.QSM,
      b,
      {
        cN: "class",
        b: "((case )?class |object |trait )",
        e: "({|$)",
        i: ":",
        k: "case class trait object",
        c: [
          { bWK: true, k: "extends with", r: 10 },
          { cN: "title", b: a.UIR },
          { cN: "params", b: "\\(", e: "\\)", c: [a.ASM, a.QSM, b, c] },
        ],
      },
      a.CNM,
      c,
    ],
  };
})(hljs);
hljs.LANGUAGES.scss = (function(a) {
  var c = "[a-zA-Z-][a-zA-Z0-9_-]*";
  var d = {
    cN: "function",
    b: c + "\\(",
    e: "\\)",
    c: ["self", a.NM, a.ASM, a.QSM],
  };
  var b = { cN: "hexcolor", b: "#[0-9A-Fa-f]+" };
  var e = {
    cN: "attribute",
    b: "[A-Z\\_\\.\\-]+",
    e: ":",
    eE: true,
    i: "[^\\s]",
    starts: {
      cN: "value",
      eW: true,
      eE: true,
      c: [
        d,
        b,
        a.NM,
        a.QSM,
        a.ASM,
        a.CBLCLM,
        { cN: "important", b: "!important" },
      ],
    },
  };
  return {
    cI: true,
    i: "[=/|']",
    c: [
      a.CLCM,
      a.CBLCLM,
      {
        cN: "function",
        b: c + "\\(",
        e: "\\)",
        c: ["self", a.NM, a.ASM, a.QSM],
      },
      { cN: "id", b: "\\#[A-Za-z0-9_-]+", r: 0 },
      { cN: "class", b: "\\.[A-Za-z0-9_-]+", r: 0 },
      { cN: "attr_selector", b: "\\[", e: "\\]", i: "$" },
      {
        cN: "tag",
        b:
          "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
        r: 0,
      },
      {
        cN: "pseudo",
        b:
          ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)",
      },
      {
        cN: "pseudo",
        b:
          "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)",
      },
      {
        cN: "attribute",
        b:
          "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
        i: "[^\\s]",
      },
      {
        cN: "value",
        b:
          "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b",
      },
      {
        cN: "value",
        b: ":",
        e: ";",
        c: [b, a.NM, a.QSM, a.ASM, { cN: "important", b: "!important" }],
      },
      {
        cN: "at_rule",
        b: "@",
        e: "[{;]",
        k:
          "mixin include for extend charset import media page font-face namespace",
        c: [
          d,
          a.QSM,
          a.ASM,
          b,
          a.NM,
          { cN: "preprocessor", b: "\\s[A-Za-z0-9_.-]+", r: 0 },
        ],
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.smalltalk = (function(a) {
  var b = "[a-z][a-zA-Z0-9_]*";
  var d = { cN: "char", b: "\\$.{1}" };
  var c = { cN: "symbol", b: "#" + a.UIR };
  return {
    k: "self super nil true false thisContext",
    c: [
      { cN: "comment", b: '"', e: '"', r: 0 },
      a.ASM,
      { cN: "class", b: "\\b[A-Z][A-Za-z0-9_]*", r: 0 },
      { cN: "method", b: b + ":" },
      a.CNM,
      c,
      d,
      { cN: "localvars", b: "\\|\\s*" + b + "(\\s+" + b + ")*\\s*\\|" },
      { cN: "array", b: "\\#\\(", e: "\\)", c: [a.ASM, d, a.CNM, c] },
    ],
  };
})(hljs);
hljs.LANGUAGES.sql = (function(a) {
  return {
    cI: true,
    c: [
      {
        cN: "operator",
        b:
          "(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b(?!:)",
        e: ";",
        eW: true,
        k: {
          keyword:
            "all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row",
          aggregate: "count sum min max avg",
        },
        c: [
          { cN: "string", b: "'", e: "'", c: [a.BE, { b: "''" }], r: 0 },
          { cN: "string", b: '"', e: '"', c: [a.BE, { b: '""' }], r: 0 },
          { cN: "string", b: "`", e: "`", c: [a.BE] },
          a.CNM,
        ],
      },
      a.CBLCLM,
      { cN: "comment", b: "--", e: "$" },
    ],
  };
})(hljs);
hljs.LANGUAGES.tex = (function(a) {
  var d = { cN: "command", b: "\\\\[a-zA-Zа-яА-я]+[\\*]?" };
  var c = { cN: "command", b: "\\\\[^a-zA-Zа-яА-я0-9]" };
  var b = { cN: "special", b: "[{}\\[\\]\\&#~]", r: 0 };
  return {
    c: [
      {
        b:
          "\\\\[a-zA-Zа-яА-я]+[\\*]? *= *-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",
        rB: true,
        c: [
          d,
          c,
          {
            cN: "number",
            b: " *=",
            e: "-?\\d*\\.?\\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?",
            eB: true,
          },
        ],
        r: 10,
      },
      d,
      c,
      b,
      { cN: "formula", b: "\\$\\$", e: "\\$\\$", c: [d, c, b], r: 0 },
      { cN: "formula", b: "\\$", e: "\\$", c: [d, c, b], r: 0 },
      { cN: "comment", b: "%", e: "$", r: 0 },
    ],
  };
})(hljs);
hljs.LANGUAGES.vala = (function(a) {
  return {
    k: {
      keyword:
        "char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",
      built_in: "DBus GLib CCode Gee Object",
      literal: "false true null",
    },
    c: [
      {
        cN: "class",
        bWK: true,
        e: "{",
        k: "class interface delegate namespace",
        i: "[^,:\\n\\s\\.]",
        c: [{ cN: "title", b: a.UIR }],
      },
      a.CLCM,
      a.CBLCLM,
      { cN: "string", b: '"""', e: '"""', r: 5 },
      a.ASM,
      a.QSM,
      a.CNM,
      { cN: "preprocessor", b: "^#", e: "$", r: 2 },
      { cN: "constant", b: " [A-Z_]+ ", r: 0 },
    ],
  };
})(hljs);
hljs.LANGUAGES.vbnet = (function(a) {
  return {
    cI: true,
    k: {
      keyword:
        "addhandler addressof alias and andalso aggregate ansi as assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass namespace narrowing new next not notinheritable notoverridable of off on operator option optional or order orelse overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim rem removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly xor",
      built_in:
        "boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype date decimal directcast double gettype getxmlnamespace iif integer long object sbyte short single string trycast typeof uinteger ulong ushort",
      literal: "true false nothing",
    },
    i: "(//|endif|gosub|variant|wend)",
    c: [
      a.inherit(a.QSM, { c: [{ b: '""' }] }),
      {
        cN: "comment",
        b: "'",
        e: "$",
        rB: true,
        c: [
          { cN: "xmlDocTag", b: "'''|<!--|-->" },
          { cN: "xmlDocTag", b: "</?", e: ">" },
        ],
      },
      a.CNM,
      {
        cN: "preprocessor",
        b: "#",
        e: "$",
        k: "if else elseif end region externalsource",
      },
    ],
  };
})(hljs);
hljs.LANGUAGES.vbscript = (function(a) {
  return {
    cI: true,
    k: {
      keyword:
        "call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",
      built_in:
        "lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion scriptengine split scriptengineminorversion cint sin datepart ltrim sqr scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw chrw regexp server response request cstr err",
      literal: "true false null nothing empty",
    },
    i: "//",
    c: [
      a.inherit(a.QSM, { c: [{ b: '""' }] }),
      { cN: "comment", b: "'", e: "$" },
      a.CNM,
    ],
  };
})(hljs);
hljs.LANGUAGES.vhdl = (function(a) {
  return {
    cI: true,
    k: {
      keyword:
        "abs access after alias all and architecture array assert attribute begin block body buffer bus case component configuration constant context cover disconnect downto default else elsif end entity exit fairness file for force function generate generic group guarded if impure in inertial inout is label library linkage literal loop map mod nand new next nor not null of on open or others out package port postponed procedure process property protected pure range record register reject release rem report restrict restrict_guarantee return rol ror select sequence severity shared signal sla sll sra srl strong subtype then to transport type unaffected units until use variable vmode vprop vunit wait when while with xnor xor",
      typename:
        "boolean bit character severity_level integer time delay_length natural positive string bit_vector file_open_kind file_open_status std_ulogic std_ulogic_vector std_logic std_logic_vector unsigned signed boolean_vector integer_vector real_vector time_vector",
    },
    i: "{",
    c: [
      a.CBLCLM,
      { cN: "comment", b: "--", e: "$" },
      a.QSM,
      a.CNM,
      { cN: "literal", b: "'(U|X|0|1|Z|W|L|H|-)'", c: [a.BE] },
      { cN: "attribute", b: "'[A-Za-z](_?[A-Za-z0-9])*", c: [a.BE] },
    ],
  };
})(hljs);
hljs.LANGUAGES.xml = (function(a) {
  var c = "[A-Za-z0-9\\._:-]+";
  var b = {
    eW: true,
    r: 0,
    c: [
      { cN: "attribute", b: c, r: 0 },
      { b: '="', rB: true, e: '"', c: [{ cN: "value", b: '"', eW: true }] },
      { b: "='", rB: true, e: "'", c: [{ cN: "value", b: "'", eW: true }] },
      { b: "=", c: [{ cN: "value", b: "[^\\s/>]+" }] },
    ],
  };
  return {
    cI: true,
    c: [
      { cN: "pi", b: "<\\?", e: "\\?>", r: 10 },
      {
        cN: "doctype",
        b: "<!DOCTYPE",
        e: ">",
        r: 10,
        c: [{ b: "\\[", e: "\\]" }],
      },
      { cN: "comment", b: "<!--", e: "-->", r: 10 },
      { cN: "cdata", b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10 },
      {
        cN: "tag",
        b: "<style(?=\\s|>|$)",
        e: ">",
        k: { title: "style" },
        c: [b],
        starts: { e: "</style>", rE: true, sL: "css" },
      },
      {
        cN: "tag",
        b: "<script(?=\\s|>|$)",
        e: ">",
        k: { title: "script" },
        c: [b],
        starts: { e: "</script>", rE: true, sL: "javascript" },
      },
      { b: "<%", e: "%>", sL: "vbscript" },
      {
        cN: "tag",
        b: "</?",
        e: "/?>",
        r: 0,
        c: [{ cN: "title", b: "[^ /><]+" }, b],
      },
    ],
  };
})(hljs);
