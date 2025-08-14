/*! For license information please see index.js.LICENSE.txt */
!(function () {
  var e = {
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (i, r) {
          "use strict";
          var o = [],
            s = Object.getPrototypeOf,
            a = o.slice,
            l = o.flat
              ? function (e) {
                  return o.flat.call(e);
                }
              : function (e) {
                  return o.concat.apply([], e);
                },
            c = o.push,
            u = o.indexOf,
            d = {},
            p = d.toString,
            f = d.hasOwnProperty,
            h = f.toString,
            m = h.call(Object),
            g = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            x = i.document,
            b = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var i,
              r,
              o = (n = n || x).createElement("script");
            if (((o.text = e), t))
              for (i in b)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  o.setAttribute(i, r);
            n.head.appendChild(o).parentNode.removeChild(o);
          }
          function S(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[p.call(e)] || "object"
              : typeof e;
          }
          var _ = "3.6.0",
            T = function (e, t) {
              return new T.fn.init(e, t);
            };
          function C(e) {
            var t = !!e && "length" in e && e.length,
              n = S(e);
            return (
              !v(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (T.fn = T.prototype =
            {
              jquery: _,
              constructor: T,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e
                  ? a.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = T.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return T.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  T.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: o.sort,
              splice: o.splice,
            }),
            (T.extend = T.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  o,
                  s = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof s &&
                    ((c = s), (s = arguments[a] || {}), a++),
                    "object" == typeof s || v(s) || (s = {}),
                    a === l && ((s = this), a--);
                  a < l;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          s !== i &&
                          (c &&
                          i &&
                          (T.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = s[t]),
                              (o =
                                r && !Array.isArray(n)
                                  ? []
                                  : r || T.isPlainObject(n)
                                  ? n
                                  : {}),
                              (r = !1),
                              (s[t] = T.extend(c, o, i)))
                            : void 0 !== i && (s[t] = i));
                return s;
              }),
            T.extend({
              expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== p.call(e)) &&
                  (!(t = s(e)) ||
                    ("function" ==
                      typeof (n = f.call(t, "constructor") && t.constructor) &&
                      h.call(n) === m))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (C(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (C(Object(e))
                      ? T.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                  e[r++] = t[i];
                return (e.length = r), e;
              },
              grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                  !t(e[r], r) !== s && i.push(e[r]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  r,
                  o = 0,
                  s = [];
                if (C(e))
                  for (i = e.length; o < i; o++)
                    null != (r = t(e[o], o, n)) && s.push(r);
                else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                return l(s);
              },
              guid: 1,
              support: g,
            }),
            "function" == typeof Symbol &&
              (T.fn[Symbol.iterator] = o[Symbol.iterator]),
            T.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                d["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var E = (function (e) {
            var t,
              n,
              i,
              r,
              o,
              s,
              a,
              l,
              c,
              u,
              d,
              p,
              f,
              h,
              m,
              g,
              v,
              y,
              x,
              b = "sizzle" + 1 * new Date(),
              w = e.document,
              S = 0,
              _ = 0,
              T = le(),
              C = le(),
              E = le(),
              A = le(),
              k = function (e, t) {
                return e === t && (d = !0), 0;
              },
              M = {}.hasOwnProperty,
              P = [],
              L = P.pop,
              D = P.push,
              O = P.push,
              B = P.slice,
              I = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              z =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              R = "[\\x20\\t\\r\\n\\f]",
              q =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                R +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              N =
                "\\[" +
                R +
                "*(" +
                q +
                ")(?:" +
                R +
                "*([*^$|!~]?=)" +
                R +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                q +
                "))|)" +
                R +
                "*\\]",
              $ =
                ":(" +
                q +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                N +
                ")*)|.*)\\)|)",
              F = new RegExp(R + "+", "g"),
              j = new RegExp(
                "^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$",
                "g"
              ),
              H = new RegExp("^" + R + "*," + R + "*"),
              W = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
              V = new RegExp(R + "|>"),
              G = new RegExp($),
              X = new RegExp("^" + q + "$"),
              Y = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    R +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    R +
                    "*(?:([+-]|)" +
                    R +
                    "*(\\d+)|))" +
                    R +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + z + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    R +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    R +
                    "*((?:-\\d)?\\d*)" +
                    R +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              U = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              K = /^h\d$/i,
              Z = /^[^{]+\{\s*\[native \w/,
              J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              re = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              oe = function () {
                p();
              },
              se = be(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              O.apply((P = B.call(w.childNodes)), w.childNodes),
                P[w.childNodes.length].nodeType;
            } catch (e) {
              O = {
                apply: P.length
                  ? function (e, t) {
                      D.apply(e, B.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                      e.length = n - 1;
                    },
              };
            }
            function ae(e, t, i, r) {
              var o,
                a,
                c,
                u,
                d,
                h,
                v,
                y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
              if (
                ((i = i || []),
                "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
              )
                return i;
              if (!r && (p(t), (t = t || f), m)) {
                if (11 !== w && (d = J.exec(e)))
                  if ((o = d[1])) {
                    if (9 === w) {
                      if (!(c = t.getElementById(o))) return i;
                      if (c.id === o) return i.push(c), i;
                    } else if (
                      y &&
                      (c = y.getElementById(o)) &&
                      x(t, c) &&
                      c.id === o
                    )
                      return i.push(c), i;
                  } else {
                    if (d[2]) return O.apply(i, t.getElementsByTagName(e)), i;
                    if (
                      (o = d[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return O.apply(i, t.getElementsByClassName(o)), i;
                  }
                if (
                  n.qsa &&
                  !A[e + " "] &&
                  (!g || !g.test(e)) &&
                  (1 !== w || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((v = e), (y = t), 1 === w && (V.test(e) || W.test(e)))) {
                    for (
                      ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((u = t.getAttribute("id"))
                          ? (u = u.replace(ie, re))
                          : t.setAttribute("id", (u = b))),
                        a = (h = s(e)).length;
                      a--;

                    )
                      h[a] = (u ? "#" + u : ":scope") + " " + xe(h[a]);
                    v = h.join(",");
                  }
                  try {
                    return O.apply(i, y.querySelectorAll(v)), i;
                  } catch (t) {
                    A(e, !0);
                  } finally {
                    u === b && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(j, "$1"), t, i, r);
            }
            function le() {
              var e = [];
              return function t(n, r) {
                return (
                  e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                  (t[n + " "] = r)
                );
              };
            }
            function ce(e) {
              return (e[b] = !0), e;
            }
            function ue(e) {
              var t = f.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function de(e, t) {
              for (var n = e.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                i =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function fe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function me(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && se(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ge(e) {
              return ce(function (t) {
                return (
                  (t = +t),
                  ce(function (n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                      n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                  })
                );
              });
            }
            function ve(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = ae.support = {}),
            (o = ae.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !U.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = ae.setDocument =
              function (e) {
                var t,
                  r,
                  s = e ? e.ownerDocument || e : w;
                return s != f && 9 === s.nodeType && s.documentElement
                  ? ((h = (f = s).documentElement),
                    (m = !o(f)),
                    w != f &&
                      (r = f.defaultView) &&
                      r.top !== r &&
                      (r.addEventListener
                        ? r.addEventListener("unload", oe, !1)
                        : r.attachEvent && r.attachEvent("onunload", oe)),
                    (n.scope = ue(function (e) {
                      return (
                        h.appendChild(e).appendChild(f.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = ue(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ue(function (e) {
                      return (
                        e.appendChild(f.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = Z.test(
                      f.getElementsByClassName
                    )),
                    (n.getById = ue(function (e) {
                      return (
                        (h.appendChild(e).id = b),
                        !f.getElementsByName || !f.getElementsByName(b).length
                      );
                    })),
                    n.getById
                      ? ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && m) {
                            var n,
                              i,
                              r,
                              o = t.getElementById(e);
                            if (o) {
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                              for (
                                r = t.getElementsByName(e), i = 0;
                                (o = r[i++]);

                              )
                                if (
                                  (n = o.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [o];
                            }
                            return [];
                          }
                        })),
                    (i.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = o[r++]); )
                              1 === n.nodeType && i.push(n);
                            return i;
                          }
                          return o;
                        }),
                    (i.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && m)
                          return t.getElementsByClassName(e);
                      }),
                    (v = []),
                    (g = []),
                    (n.qsa = Z.test(f.querySelectorAll)) &&
                      (ue(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          b +
                          "'></a><select id='" +
                          b +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            g.push("[*^$]=" + R + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            g.push("\\[" + R + "*(?:value|" + z + ")"),
                          e.querySelectorAll("[id~=" + b + "-]").length ||
                            g.push("~="),
                          (t = f.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            g.push(
                              "\\[" +
                                R +
                                "*name" +
                                R +
                                "*=" +
                                R +
                                "*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            g.push(":checked"),
                          e.querySelectorAll("a#" + b + "+*").length ||
                            g.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          g.push("[\\r\\n\\f]");
                      }),
                      ue(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = f.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            g.push("name" + R + "*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            g.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            g.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          g.push(",.*:");
                      })),
                    (n.matchesSelector = Z.test(
                      (y =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      ue(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          v.push("!=", $);
                      }),
                    (g = g.length && new RegExp(g.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = Z.test(h.compareDocumentPosition)),
                    (x =
                      t || Z.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              i = t && t.parentNode;
                            return (
                              e === i ||
                              !(
                                !i ||
                                1 !== i.nodeType ||
                                !(n.contains
                                  ? n.contains(i)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(i))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (k = t
                      ? function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var i =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            i ||
                            (1 &
                              (i =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === i)
                              ? e == f || (e.ownerDocument == w && x(w, e))
                                ? -1
                                : t == f || (t.ownerDocument == w && x(w, t))
                                ? 1
                                : u
                                ? I(u, e) - I(u, t)
                                : 0
                              : 4 & i
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (d = !0), 0;
                          var n,
                            i = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            a = [t];
                          if (!r || !o)
                            return e == f
                              ? -1
                              : t == f
                              ? 1
                              : r
                              ? -1
                              : o
                              ? 1
                              : u
                              ? I(u, e) - I(u, t)
                              : 0;
                          if (r === o) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) s.unshift(n);
                          for (n = t; (n = n.parentNode); ) a.unshift(n);
                          for (; s[i] === a[i]; ) i++;
                          return i
                            ? pe(s[i], a[i])
                            : s[i] == w
                            ? -1
                            : a[i] == w
                            ? 1
                            : 0;
                        }),
                    f)
                  : f;
              }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  m &&
                  !A[t + " "] &&
                  (!v || !v.test(t)) &&
                  (!g || !g.test(t)))
              )
                try {
                  var i = y.call(e, t);
                  if (
                    i ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return i;
                } catch (e) {
                  A(t, !0);
                }
              return ae(t, f, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != f && p(e), x(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != f && p(e);
              var r = i.attrHandle[t.toLowerCase()],
                o =
                  r && M.call(i.attrHandle, t.toLowerCase())
                    ? r(e, t, !m)
                    : void 0;
              return void 0 !== o
                ? o
                : n.attributes || !m
                ? e.getAttribute(t)
                : (o = e.getAttributeNode(t)) && o.specified
                ? o.value
                : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(ie, re);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                i = [],
                r = 0,
                o = 0;
              if (
                ((d = !n.detectDuplicates),
                (u = !n.sortStable && e.slice(0)),
                e.sort(k),
                d)
              ) {
                for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
                for (; r--; ) e.splice(i[r], 1);
              }
              return (u = null), e;
            }),
            (r = ae.getText =
              function (e) {
                var t,
                  n = "",
                  i = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += r(t);
                return n;
              }),
            (i = ae.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || ae.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && ae.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return Y.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            G.test(n) &&
                            (t = s(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = T[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + R + ")" + e + "(" + R + "|$)"
                      )) &&
                        T(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (i) {
                      var r = ae.attr(i, e);
                      return null == r
                        ? "!=" === t
                        : !t ||
                            ((r += ""),
                            "=" === t
                              ? r === n
                              : "!=" === t
                              ? r !== n
                              : "^=" === t
                              ? n && 0 === r.indexOf(n)
                              : "*=" === t
                              ? n && r.indexOf(n) > -1
                              : "$=" === t
                              ? n && r.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + r.replace(F, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (r === n ||
                                  r.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                      s = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === i && 0 === r
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            u,
                            d,
                            p,
                            f,
                            h,
                            m = o !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            x = !1;
                          if (g) {
                            if (o) {
                              for (; m; ) {
                                for (p = t; (p = p[m]); )
                                  if (
                                    a
                                      ? p.nodeName.toLowerCase() === v
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                h = m = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [s ? g.firstChild : g.lastChild]), s && y)
                            ) {
                              for (
                                x =
                                  (f =
                                    (c =
                                      (u =
                                        (d = (p = g)[b] || (p[b] = {}))[
                                          p.uniqueID
                                        ] || (d[p.uniqueID] = {}))[e] ||
                                      [])[0] === S && c[1]) && c[2],
                                  p = f && g.childNodes[f];
                                (p =
                                  (++f && p && p[m]) || (x = f = 0) || h.pop());

                              )
                                if (1 === p.nodeType && ++x && p === t) {
                                  u[e] = [S, f, x];
                                  break;
                                }
                            } else if (
                              (y &&
                                (x = f =
                                  (c =
                                    (u =
                                      (d = (p = t)[b] || (p[b] = {}))[
                                        p.uniqueID
                                      ] || (d[p.uniqueID] = {}))[e] ||
                                    [])[0] === S && c[1]),
                              !1 === x)
                            )
                              for (
                                ;
                                (p =
                                  (++f && p && p[m]) ||
                                  (x = f = 0) ||
                                  h.pop()) &&
                                ((a
                                  ? p.nodeName.toLowerCase() !== v
                                  : 1 !== p.nodeType) ||
                                  !++x ||
                                  (y &&
                                    ((u =
                                      (d = p[b] || (p[b] = {}))[p.uniqueID] ||
                                      (d[p.uniqueID] = {}))[e] = [S, x]),
                                  p !== t));

                              );
                            return (x -= r) === i || (x % i == 0 && x / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      r =
                        i.pseudos[e] ||
                        i.setFilters[e.toLowerCase()] ||
                        ae.error("unsupported pseudo: " + e);
                    return r[b]
                      ? r(t)
                      : r.length > 1
                      ? ((n = [e, e, "", t]),
                        i.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var i, o = r(e, t), s = o.length; s--; )
                                e[(i = I(e, o[s]))] = !(n[i] = o[s]);
                            })
                          : function (e) {
                              return r(e, 0, n);
                            })
                      : r;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      i = a(e.replace(j, "$1"));
                    return i[b]
                      ? ce(function (e, t, n, r) {
                          for (
                            var o, s = i(e, null, r, []), a = e.length;
                            a--;

                          )
                            (o = s[a]) && (e[a] = !(t[a] = o));
                        })
                      : function (e, r, o) {
                          return (
                            (t[0] = e),
                            i(t, null, o, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ce(function (e) {
                    return function (t) {
                      return ae(e, t).length > 0;
                    };
                  }),
                  contains: ce(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || r(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ce(function (e) {
                    return (
                      X.test(e || "") || ae.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = m
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === f.activeElement &&
                      (!f.hasFocus || f.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: me(!1),
                  disabled: me(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !i.pseudos.empty(e);
                  },
                  header: function (e) {
                    return K.test(e.nodeName);
                  },
                  input: function (e) {
                    return Q.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ge(function () {
                    return [0];
                  }),
                  last: ge(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ge(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ge(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ge(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ge(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                      e.push(i);
                    return e;
                  }),
                  gt: ge(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }),
            (i.pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              i.pseudos[t] = fe(t);
            for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
            function ye() {}
            function xe(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function be(e, t, n) {
              var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = _++;
              return t.first
                ? function (t, n, r) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || s) return e(t, n, r);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      u,
                      d,
                      p = [S, a];
                    if (l) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || s)
                          if (
                            ((u =
                              (d = t[b] || (t[b] = {}))[t.uniqueID] ||
                              (d[t.uniqueID] = {})),
                            r && r === t.nodeName.toLowerCase())
                          )
                            t = t[i] || t;
                          else {
                            if ((c = u[o]) && c[0] === S && c[1] === a)
                              return (p[2] = c[2]);
                            if (((u[o] = p), (p[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function we(e) {
              return e.length > 1
                ? function (t, n, i) {
                    for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Se(e, t, n, i, r) {
              for (
                var o, s = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (o = e[a]) &&
                  ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
              return s;
            }
            function _e(e, t, n, i, r, o) {
              return (
                i && !i[b] && (i = _e(i)),
                r && !r[b] && (r = _e(r, o)),
                ce(function (o, s, a, l) {
                  var c,
                    u,
                    d,
                    p = [],
                    f = [],
                    h = s.length,
                    m =
                      o ||
                      (function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++)
                          ae(e, t[i], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || (!o && t) ? m : Se(m, p, e, a, l),
                    v = n ? (r || (o ? e : h || i) ? [] : s) : g;
                  if ((n && n(g, v, a, l), i))
                    for (c = Se(v, f), i(c, [], a, l), u = c.length; u--; )
                      (d = c[u]) && (v[f[u]] = !(g[f[u]] = d));
                  if (o) {
                    if (r || e) {
                      if (r) {
                        for (c = [], u = v.length; u--; )
                          (d = v[u]) && c.push((g[u] = d));
                        r(null, (v = []), c, l);
                      }
                      for (u = v.length; u--; )
                        (d = v[u]) &&
                          (c = r ? I(o, d) : p[u]) > -1 &&
                          (o[c] = !(s[c] = d));
                    }
                  } else (v = Se(v === s ? v.splice(h, v.length) : v)), r ? r(null, s, v, l) : O.apply(s, v);
                })
              );
            }
            function Te(e) {
              for (
                var t,
                  n,
                  r,
                  o = e.length,
                  s = i.relative[e[0].type],
                  a = s || i.relative[" "],
                  l = s ? 1 : 0,
                  u = be(
                    function (e) {
                      return e === t;
                    },
                    a,
                    !0
                  ),
                  d = be(
                    function (e) {
                      return I(t, e) > -1;
                    },
                    a,
                    !0
                  ),
                  p = [
                    function (e, n, i) {
                      var r =
                        (!s && (i || n !== c)) ||
                        ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                      return (t = null), r;
                    },
                  ];
                l < o;
                l++
              )
                if ((n = i.relative[e[l].type])) p = [be(we(p), n)];
                else {
                  if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                    for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                    return _e(
                      l > 1 && we(p),
                      l > 1 &&
                        xe(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(j, "$1"),
                      n,
                      l < r && Te(e.slice(l, r)),
                      r < o && Te((e = e.slice(r))),
                      r < o && xe(e)
                    );
                  }
                  p.push(n);
                }
              return we(p);
            }
            return (
              (ye.prototype = i.filters = i.pseudos),
              (i.setFilters = new ye()),
              (s = ae.tokenize =
                function (e, t) {
                  var n,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u = C[e + " "];
                  if (u) return t ? 0 : u.slice(0);
                  for (a = e, l = [], c = i.preFilter; a; ) {
                    for (s in ((n && !(r = H.exec(a))) ||
                      (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                    (n = !1),
                    (r = W.exec(a)) &&
                      ((n = r.shift()),
                      o.push({ value: n, type: r[0].replace(j, " ") }),
                      (a = a.slice(n.length))),
                    i.filter))
                      !(r = Y[s].exec(a)) ||
                        (c[s] && !(r = c[s](r))) ||
                        ((n = r.shift()),
                        o.push({ value: n, type: s, matches: r }),
                        (a = a.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
                }),
              (a = ae.compile =
                function (e, t) {
                  var n,
                    r = [],
                    o = [],
                    a = E[e + " "];
                  if (!a) {
                    for (t || (t = s(e)), n = t.length; n--; )
                      (a = Te(t[n]))[b] ? r.push(a) : o.push(a);
                    (a = E(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          r = e.length > 0,
                          o = function (o, s, a, l, u) {
                            var d,
                              h,
                              g,
                              v = 0,
                              y = "0",
                              x = o && [],
                              b = [],
                              w = c,
                              _ = o || (r && i.find.TAG("*", u)),
                              T = (S += null == w ? 1 : Math.random() || 0.1),
                              C = _.length;
                            for (
                              u && (c = s == f || s || u);
                              y !== C && null != (d = _[y]);
                              y++
                            ) {
                              if (r && d) {
                                for (
                                  h = 0,
                                    s ||
                                      d.ownerDocument == f ||
                                      (p(d), (a = !m));
                                  (g = e[h++]);

                                )
                                  if (g(d, s || f, a)) {
                                    l.push(d);
                                    break;
                                  }
                                u && (S = T);
                              }
                              n && ((d = !g && d) && v--, o && x.push(d));
                            }
                            if (((v += y), n && y !== v)) {
                              for (h = 0; (g = t[h++]); ) g(x, b, s, a);
                              if (o) {
                                if (v > 0)
                                  for (; y--; )
                                    x[y] || b[y] || (b[y] = L.call(l));
                                b = Se(b);
                              }
                              O.apply(l, b),
                                u &&
                                  !o &&
                                  b.length > 0 &&
                                  v + t.length > 1 &&
                                  ae.uniqueSort(l);
                            }
                            return u && ((S = T), (c = w)), x;
                          };
                        return n ? ce(o) : o;
                      })(o, r)
                    )),
                      (a.selector = e);
                  }
                  return a;
                }),
              (l = ae.select =
                function (e, t, n, r) {
                  var o,
                    l,
                    c,
                    u,
                    d,
                    p = "function" == typeof e && e,
                    f = !r && s((e = p.selector || e));
                  if (((n = n || []), 1 === f.length)) {
                    if (
                      (l = f[0] = f[0].slice(0)).length > 2 &&
                      "ID" === (c = l[0]).type &&
                      9 === t.nodeType &&
                      m &&
                      i.relative[l[1].type]
                    ) {
                      if (
                        !(t = (i.find.ID(c.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      o = Y.needsContext.test(e) ? 0 : l.length;
                      o-- && ((c = l[o]), !i.relative[(u = c.type)]);

                    )
                      if (
                        (d = i.find[u]) &&
                        (r = d(
                          c.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && ve(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(o, 1), !(e = r.length && xe(l))))
                          return O.apply(n, r), n;
                        break;
                      }
                  }
                  return (
                    (p || a(e, f))(
                      r,
                      t,
                      !m,
                      n,
                      !t || (ee.test(e) && ve(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = b.split("").sort(k).join("") === b),
              (n.detectDuplicates = !!d),
              p(),
              (n.sortDetached = ue(function (e) {
                return (
                  1 & e.compareDocumentPosition(f.createElement("fieldset"))
                );
              })),
              ue(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                de("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ue(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                de("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ue(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                de(z, function (e, t, n) {
                  var i;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                }),
              ae
            );
          })(i);
          (T.find = E),
            (T.expr = E.selectors),
            (T.expr[":"] = T.expr.pseudos),
            (T.uniqueSort = T.unique = E.uniqueSort),
            (T.text = E.getText),
            (T.isXMLDoc = E.isXML),
            (T.contains = E.contains),
            (T.escapeSelector = E.escape);
          var A = function (e, t, n) {
              for (
                var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (r && T(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            k = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            M = T.expr.match.needsContext;
          function P(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var L =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function D(e, t, n) {
            return v(t)
              ? T.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? T.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? T.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
                })
              : T.filter(t, e, n);
          }
          (T.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? T.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : T.find.matches(
                    e,
                    T.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            T.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  r = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    T(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (T.contains(r[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  T.find(e, r[t], n);
                return i > 1 ? T.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(D(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(D(this, e || [], !0));
              },
              is: function (e) {
                return !!D(
                  this,
                  "string" == typeof e && M.test(e) ? T(e) : e || [],
                  !1
                ).length;
              },
            });
          var O,
            B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((T.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || O), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : B.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof T ? t[0] : t),
                  T.merge(
                    this,
                    T.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : x,
                      !0
                    )
                  ),
                  L.test(i[1]) && T.isPlainObject(t))
                )
                  for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = x.getElementById(i[2])) &&
                  ((this[0] = r), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(T)
              : T.makeArray(e, this);
          }).prototype = T.fn),
            (O = T(x));
          var I = /^(?:parents|prev(?:Until|All))/,
            z = { children: !0, contents: !0, next: !0, prev: !0 };
          function R(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          T.fn.extend({
            has: function (e) {
              var t = T(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (T.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && T(e);
              if (!M.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (s
                        ? s.index(n) > -1
                        : 1 === n.nodeType && T.find.matchesSelector(n, e))
                    ) {
                      o.push(n);
                      break;
                    }
              return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? u.call(T(e), this[0])
                  : u.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            T.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return A(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return A(e, "parentNode", n);
                },
                next: function (e) {
                  return R(e, "nextSibling");
                },
                prev: function (e) {
                  return R(e, "previousSibling");
                },
                nextAll: function (e) {
                  return A(e, "nextSibling");
                },
                prevAll: function (e) {
                  return A(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return A(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return A(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return k((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return k(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && s(e.contentDocument)
                    ? e.contentDocument
                    : (P(e, "template") && (e = e.content || e),
                      T.merge([], e.childNodes));
                },
              },
              function (e, t) {
                T.fn[e] = function (n, i) {
                  var r = T.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = T.filter(i, r)),
                    this.length > 1 &&
                      (z[e] || T.uniqueSort(r), I.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              }
            );
          var q = /[^\x20\t\r\n\f]+/g;
          function N(e) {
            return e;
          }
          function $(e) {
            throw e;
          }
          function F(e, t, n, i) {
            var r;
            try {
              e && v((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && v((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (T.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      T.each(e.match(q) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : T.extend({}, e);
            var t,
              n,
              i,
              r,
              o = [],
              s = [],
              a = -1,
              l = function () {
                for (r = r || e.once, i = t = !0; s.length; a = -1)
                  for (n = s.shift(); ++a < o.length; )
                    !1 === o[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = o.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    o &&
                      (n && !t && ((a = o.length - 1), s.push(n)),
                      (function t(n) {
                        T.each(n, function (n, i) {
                          v(i)
                            ? (e.unique && c.has(i)) || o.push(i)
                            : i && i.length && "string" !== S(i) && t(i);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    T.each(arguments, function (e, t) {
                      for (var n; (n = T.inArray(t, o, n)) > -1; )
                        o.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? T.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                  return o && (o = []), this;
                },
                disable: function () {
                  return (r = s = []), (o = n = ""), this;
                },
                disabled: function () {
                  return !o;
                },
                lock: function () {
                  return (r = s = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                  return !!r;
                },
                fireWith: function (e, n) {
                  return (
                    r ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      s.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!i;
                },
              };
            return c;
          }),
            T.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      T.Callbacks("memory"),
                      T.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  r = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return r.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return T.Deferred(function (n) {
                        T.each(t, function (t, i) {
                          var r = v(e[i[4]]) && e[i[4]];
                          o[i[1]](function () {
                            var e = r && r.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[i[0] + "With"](this, r ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, r) {
                      var o = 0;
                      function s(e, t, n, r) {
                        return function () {
                          var a = this,
                            l = arguments,
                            c = function () {
                              var i, c;
                              if (!(e < o)) {
                                if ((i = n.apply(a, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  i &&
                                  ("object" == typeof i ||
                                    "function" == typeof i) &&
                                  i.then),
                                  v(c)
                                    ? r
                                      ? c.call(i, s(o, t, N, r), s(o, t, $, r))
                                      : (o++,
                                        c.call(
                                          i,
                                          s(o, t, N, r),
                                          s(o, t, $, r),
                                          s(o, t, N, t.notifyWith)
                                        ))
                                    : (n !== N && ((a = void 0), (l = [i])),
                                      (r || t.resolveWith)(a, l));
                              }
                            },
                            u = r
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (i) {
                                    T.Deferred.exceptionHook &&
                                      T.Deferred.exceptionHook(i, u.stackTrace),
                                      e + 1 >= o &&
                                        (n !== $ && ((a = void 0), (l = [i])),
                                        t.rejectWith(a, l));
                                  }
                                };
                          e
                            ? u()
                            : (T.Deferred.getStackHook &&
                                (u.stackTrace = T.Deferred.getStackHook()),
                              i.setTimeout(u));
                        };
                      }
                      return T.Deferred(function (i) {
                        t[0][3].add(s(0, i, v(r) ? r : N, i.notifyWith)),
                          t[1][3].add(s(0, i, v(e) ? e : N)),
                          t[2][3].add(s(0, i, v(n) ? n : $));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? T.extend(e, r) : r;
                    },
                  },
                  o = {};
                return (
                  T.each(t, function (e, i) {
                    var s = i[2],
                      a = i[5];
                    (r[i[1]] = s.add),
                      a &&
                        s.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      s.add(i[3].fire),
                      (o[i[0]] = function () {
                        return (
                          o[i[0] + "With"](
                            this === o ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (o[i[0] + "With"] = s.fireWith);
                  }),
                  r.promise(o),
                  e && e.call(o, o),
                  o
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  r = a.call(arguments),
                  o = T.Deferred(),
                  s = function (e) {
                    return function (n) {
                      (i[e] = this),
                        (r[e] = arguments.length > 1 ? a.call(arguments) : n),
                        --t || o.resolveWith(i, r);
                    };
                  };
                if (
                  t <= 1 &&
                  (F(e, o.done(s(n)).resolve, o.reject, !t),
                  "pending" === o.state() || v(r[n] && r[n].then))
                )
                  return o.then();
                for (; n--; ) F(r[n], s(n), o.reject);
                return o.promise();
              },
            });
          var j = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (T.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              j.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (T.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var H = T.Deferred();
          function W() {
            x.removeEventListener("DOMContentLoaded", W),
              i.removeEventListener("load", W),
              T.ready();
          }
          (T.fn.ready = function (e) {
            return (
              H.then(e).catch(function (e) {
                T.readyException(e);
              }),
              this
            );
          }),
            T.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) ||
                  ((T.isReady = !0),
                  (!0 !== e && --T.readyWait > 0) || H.resolveWith(x, [T]));
              },
            }),
            (T.ready.then = H.then),
            "complete" === x.readyState ||
            ("loading" !== x.readyState && !x.documentElement.doScroll)
              ? i.setTimeout(T.ready)
              : (x.addEventListener("DOMContentLoaded", W),
                i.addEventListener("load", W));
          var V = function (e, t, n, i, r, o, s) {
              var a = 0,
                l = e.length,
                c = null == n;
              if ("object" === S(n))
                for (a in ((r = !0), n)) V(e, t, a, n[a], !0, o, s);
              else if (
                void 0 !== i &&
                ((r = !0),
                v(i) || (s = !0),
                c &&
                  (s
                    ? (t.call(e, i), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(T(e), n);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
              return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
            },
            G = /^-ms-/,
            X = /-([a-z])/g;
          function Y(e, t) {
            return t.toUpperCase();
          }
          function U(e) {
            return e.replace(G, "ms-").replace(X, Y);
          }
          var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function K() {
            this.expando = T.expando + K.uid++;
          }
          (K.uid = 1),
            (K.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  r = this.cache(e);
                if ("string" == typeof t) r[U(t)] = n;
                else for (i in t) r[U(i)] = t[i];
                return r;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][U(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(U)
                      : (t = U(t)) in i
                      ? [t]
                      : t.match(q) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || T.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !T.isEmptyObject(t);
              },
            });
          var Z = new K(),
            J = new K(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                J.set(e, t, n);
              } else n = void 0;
            return n;
          }
          T.extend({
            hasData: function (e) {
              return J.hasData(e) || Z.hasData(e);
            },
            data: function (e, t, n) {
              return J.access(e, t, n);
            },
            removeData: function (e, t) {
              J.remove(e, t);
            },
            _data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            _removeData: function (e, t) {
              Z.remove(e, t);
            },
          }),
            T.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  r,
                  o = this[0],
                  s = o && o.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((r = J.get(o)),
                    1 === o.nodeType && !Z.get(o, "hasDataAttrs"))
                  ) {
                    for (n = s.length; n--; )
                      s[n] &&
                        0 === (i = s[n].name).indexOf("data-") &&
                        ((i = U(i.slice(5))), ne(o, i, r[i]));
                    Z.set(o, "hasDataAttrs", !0);
                  }
                  return r;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      J.set(this, e);
                    })
                  : V(
                      this,
                      function (t) {
                        var n;
                        if (o && void 0 === t)
                          return void 0 !== (n = J.get(o, e)) ||
                            void 0 !== (n = ne(o, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          J.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  J.remove(this, e);
                });
              },
            }),
            T.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = Z.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = Z.access(e, t, T.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = T.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  o = T._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                  r &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(
                      e,
                      function () {
                        T.dequeue(e, t);
                      },
                      o
                    )),
                  !i && o && o.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  Z.get(e, n) ||
                  Z.access(e, n, {
                    empty: T.Callbacks("once memory").add(function () {
                      Z.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            T.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? T.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = T.queue(this, e, t);
                        T._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            T.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  T.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  r = T.Deferred(),
                  o = this,
                  s = this.length,
                  a = function () {
                    --i || r.resolveWith(o, [o]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  s--;

                )
                  (n = Z.get(o[s], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(a));
                return a(), r.promise(t);
              },
            });
          var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            oe = ["Top", "Right", "Bottom", "Left"],
            se = x.documentElement,
            ae = function (e) {
              return T.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          se.getRootNode &&
            (ae = function (e) {
              return (
                T.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ae(e) &&
                "none" === T.css(e, "display"))
            );
          };
          function ue(e, t, n, i) {
            var r,
              o,
              s = 20,
              a = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return T.css(e, t, "");
                  },
              l = a(),
              c = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
              u =
                e.nodeType &&
                (T.cssNumber[t] || ("px" !== c && +l)) &&
                re.exec(T.css(e, t));
            if (u && u[3] !== c) {
              for (l /= 2, c = c || u[3], u = +l || 1; s--; )
                T.style(e, t, u + c),
                  (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                  (u /= o);
              (u *= 2), T.style(e, t, u + c), (n = n || []);
            }
            return (
              n &&
                ((u = +u || +l || 0),
                (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = u), (i.end = r))),
              r
            );
          }
          var de = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              r = de[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = T.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === r && (r = "block"),
              (de[i] = r),
              r)
            );
          }
          function fe(e, t) {
            for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
              (i = e[o]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((r[o] = Z.get(i, "display") || null),
                      r[o] || (i.style.display = "")),
                    "" === i.style.display && ce(i) && (r[o] = pe(i)))
                  : "none" !== n && ((r[o] = "none"), Z.set(i, "display", n)));
            for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
            return e;
          }
          T.fn.extend({
            show: function () {
              return fe(this, !0);
            },
            hide: function () {
              return fe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ce(this) ? T(this).show() : T(this).hide();
                  });
            },
          });
          var he,
            me,
            ge = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (he = x.createDocumentFragment().appendChild(x.createElement("div"))),
            (me = x.createElement("input")).setAttribute("type", "radio"),
            me.setAttribute("checked", "checked"),
            me.setAttribute("name", "t"),
            he.appendChild(me),
            (g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (g.option = !!he.lastChild);
          var xe = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function be(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && P(e, t)) ? T.merge([e], n) : n
            );
          }
          function we(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
          }
          (xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead),
            (xe.th = xe.td),
            g.option ||
              (xe.optgroup = xe.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Se = /<|&#?\w+;/;
          function _e(e, t, n, i, r) {
            for (
              var o,
                s,
                a,
                l,
                c,
                u,
                d = t.createDocumentFragment(),
                p = [],
                f = 0,
                h = e.length;
              f < h;
              f++
            )
              if ((o = e[f]) || 0 === o)
                if ("object" === S(o)) T.merge(p, o.nodeType ? [o] : o);
                else if (Se.test(o)) {
                  for (
                    s = s || d.appendChild(t.createElement("div")),
                      a = (ve.exec(o) || ["", ""])[1].toLowerCase(),
                      l = xe[a] || xe._default,
                      s.innerHTML = l[1] + T.htmlPrefilter(o) + l[2],
                      u = l[0];
                    u--;

                  )
                    s = s.lastChild;
                  T.merge(p, s.childNodes),
                    ((s = d.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
            for (d.textContent = "", f = 0; (o = p[f++]); )
              if (i && T.inArray(o, i) > -1) r && r.push(o);
              else if (
                ((c = ae(o)),
                (s = be(d.appendChild(o), "script")),
                c && we(s),
                n)
              )
                for (u = 0; (o = s[u++]); ) ye.test(o.type || "") && n.push(o);
            return d;
          }
          var Te = /^([^.]*)(?:\.(.+)|)/;
          function Ce() {
            return !0;
          }
          function Ee() {
            return !1;
          }
          function Ae(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return x.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function ke(e, t, n, i, r, o) {
            var s, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                ke(e, a, n, i, t[a], o);
              return e;
            }
            if (
              (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                    ? ((r = i), (i = void 0))
                    : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = Ee;
            else if (!r) return e;
            return (
              1 === o &&
                ((s = r),
                (r = function (e) {
                  return T().off(e), s.apply(this, arguments);
                }),
                (r.guid = s.guid || (s.guid = T.guid++))),
              e.each(function () {
                T.event.add(this, t, r, i, n);
              })
            );
          }
          function Me(e, t, n) {
            n
              ? (Z.set(e, t, !1),
                T.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var i,
                      r,
                      o = Z.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length)
                        (T.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((o = a.call(arguments)),
                        Z.set(this, t, o),
                        (i = n(this, t)),
                        this[t](),
                        o !== (r = Z.get(this, t)) || i
                          ? Z.set(this, t, !1)
                          : (r = {}),
                        o !== r)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          r && r.value
                        );
                    } else
                      o.length &&
                        (Z.set(this, t, {
                          value: T.event.trigger(
                            T.extend(o[0], T.Event.prototype),
                            o.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === Z.get(e, t) && T.event.add(e, t, Ce);
          }
          (T.event = {
            global: {},
            add: function (e, t, n, i, r) {
              var o,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h,
                m,
                g = Z.get(e);
              if (Q(e))
                for (
                  n.handler && ((n = (o = n).handler), (r = o.selector)),
                    r && T.find.matchesSelector(se, r),
                    n.guid || (n.guid = T.guid++),
                    (l = g.events) || (l = g.events = Object.create(null)),
                    (s = g.handle) ||
                      (s = g.handle =
                        function (t) {
                          return void 0 !== T && T.event.triggered !== t.type
                            ? T.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(q) || [""]).length;
                  c--;

                )
                  (f = m = (a = Te.exec(t[c]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f &&
                      ((d = T.event.special[f] || {}),
                      (f = (r ? d.delegateType : d.bindType) || f),
                      (d = T.event.special[f] || {}),
                      (u = T.extend(
                        {
                          type: f,
                          origType: m,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && T.expr.match.needsContext.test(r),
                          namespace: h.join("."),
                        },
                        o
                      )),
                      (p = l[f]) ||
                        (((p = l[f] = []).delegateCount = 0),
                        (d.setup && !1 !== d.setup.call(e, i, h, s)) ||
                          (e.addEventListener && e.addEventListener(f, s))),
                      d.add &&
                        (d.add.call(e, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                      r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                      (T.event.global[f] = !0));
            },
            remove: function (e, t, n, i, r) {
              var o,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                f,
                h,
                m,
                g = Z.hasData(e) && Z.get(e);
              if (g && (l = g.events)) {
                for (c = (t = (t || "").match(q) || [""]).length; c--; )
                  if (
                    ((f = m = (a = Te.exec(t[c]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f)
                  ) {
                    for (
                      d = T.event.special[f] || {},
                        p =
                          l[(f = (i ? d.delegateType : d.bindType) || f)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        s = o = p.length;
                      o--;

                    )
                      (u = p[o]),
                        (!r && m !== u.origType) ||
                          (n && n.guid !== u.guid) ||
                          (a && !a.test(u.namespace)) ||
                          (i &&
                            i !== u.selector &&
                            ("**" !== i || !u.selector)) ||
                          (p.splice(o, 1),
                          u.selector && p.delegateCount--,
                          d.remove && d.remove.call(e, u));
                    s &&
                      !p.length &&
                      ((d.teardown && !1 !== d.teardown.call(e, h, g.handle)) ||
                        T.removeEvent(e, f, g.handle),
                      delete l[f]);
                  } else for (f in l) T.event.remove(e, f + t[c], n, i, !0);
                T.isEmptyObject(l) && Z.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                r,
                o,
                s,
                a = new Array(arguments.length),
                l = T.event.fix(e),
                c =
                  (Z.get(this, "events") || Object.create(null))[l.type] || [],
                u = T.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !u.preDispatch || !1 !== u.preDispatch.call(this, l))
              ) {
                for (
                  s = T.event.handlers.call(this, l, c), t = 0;
                  (r = s[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = r.elem, n = 0;
                    (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== o.namespace &&
                      !l.rnamespace.test(o.namespace)) ||
                      ((l.handleObj = o),
                      (l.data = o.data),
                      void 0 !==
                        (i = (
                          (T.event.special[o.origType] || {}).handle ||
                          o.handler
                        ).apply(r.elem, a)) &&
                        !1 === (l.result = i) &&
                        (l.preventDefault(), l.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                r,
                o,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (o = [], s = {}, n = 0; n < l; n++)
                      void 0 === s[(r = (i = t[n]).selector + " ")] &&
                        (s[r] = i.needsContext
                          ? T(r, this).index(c) > -1
                          : T.find(r, this, null, [c]).length),
                        s[r] && o.push(i);
                    o.length && a.push({ elem: c, handlers: o });
                  }
              return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[T.expando] ? e : new T.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      P(t, "input") &&
                      Me(t, "click", Ce),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ge.test(t.type) &&
                      t.click &&
                      P(t, "input") &&
                      Me(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ge.test(t.type) &&
                      t.click &&
                      P(t, "input") &&
                      Z.get(t, "click")) ||
                    P(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (T.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (T.Event = function (e, t) {
              if (!(this instanceof T.Event)) return new T.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ce
                      : Ee),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && T.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[T.expando] = !0);
            }),
            (T.Event.prototype = {
              constructor: T.Event,
              isDefaultPrevented: Ee,
              isPropagationStopped: Ee,
              isImmediatePropagationStopped: Ee,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ce),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ce),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ce),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            T.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              T.event.addProp
            ),
            T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              T.event.special[e] = {
                setup: function () {
                  return Me(this, e, Ae), !1;
                },
                trigger: function () {
                  return Me(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            T.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                T.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = e.relatedTarget,
                      r = e.handleObj;
                    return (
                      (i && (i === this || T.contains(this, i))) ||
                        ((e.type = r.origType),
                        (n = r.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            T.fn.extend({
              on: function (e, t, n, i) {
                return ke(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return ke(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    T(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Ee),
                  this.each(function () {
                    T.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Pe = /<script|<style|<link/i,
            Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
            De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Oe(e, t) {
            return (
              (P(e, "table") &&
                P(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                T(e).children("tbody")[0]) ||
              e
            );
          }
          function Be(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Ie(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function ze(e, t) {
            var n, i, r, o, s, a;
            if (1 === t.nodeType) {
              if (Z.hasData(e) && (a = Z.get(e).events))
                for (r in (Z.remove(t, "handle events"), a))
                  for (n = 0, i = a[r].length; n < i; n++)
                    T.event.add(t, r, a[r][n]);
              J.hasData(e) &&
                ((o = J.access(e)), (s = T.extend({}, o)), J.set(t, s));
            }
          }
          function Re(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ge.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function qe(e, t, n, i) {
            t = l(t);
            var r,
              o,
              s,
              a,
              c,
              u,
              d = 0,
              p = e.length,
              f = p - 1,
              h = t[0],
              m = v(h);
            if (
              m ||
              (p > 1 && "string" == typeof h && !g.checkClone && Le.test(h))
            )
              return e.each(function (r) {
                var o = e.eq(r);
                m && (t[0] = h.call(this, r, o.html())), qe(o, t, n, i);
              });
            if (
              p &&
              ((o = (r = _e(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === r.childNodes.length && (r = o),
              o || i)
            ) {
              for (a = (s = T.map(be(r, "script"), Be)).length; d < p; d++)
                (c = r),
                  d !== f &&
                    ((c = T.clone(c, !0, !0)),
                    a && T.merge(s, be(c, "script"))),
                  n.call(e[d], c, d);
              if (a)
                for (
                  u = s[s.length - 1].ownerDocument, T.map(s, Ie), d = 0;
                  d < a;
                  d++
                )
                  (c = s[d]),
                    ye.test(c.type || "") &&
                      !Z.access(c, "globalEval") &&
                      T.contains(u, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? T._evalUrl &&
                          !c.noModule &&
                          T._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            u
                          )
                        : w(c.textContent.replace(De, ""), c, u));
            }
            return e;
          }
          function Ne(e, t, n) {
            for (
              var i, r = t ? T.filter(t, e) : e, o = 0;
              null != (i = r[o]);
              o++
            )
              n || 1 !== i.nodeType || T.cleanData(be(i)),
                i.parentNode &&
                  (n && ae(i) && we(be(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          T.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                r,
                o,
                s,
                a = e.cloneNode(!0),
                l = ae(e);
              if (
                !(
                  g.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  T.isXMLDoc(e)
                )
              )
                for (s = be(a), i = 0, r = (o = be(e)).length; i < r; i++)
                  Re(o[i], s[i]);
              if (t)
                if (n)
                  for (
                    o = o || be(e), s = s || be(a), i = 0, r = o.length;
                    i < r;
                    i++
                  )
                    ze(o[i], s[i]);
                else ze(e, a);
              return (
                (s = be(a, "script")).length > 0 &&
                  we(s, !l && be(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, r = T.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
              )
                if (Q(n)) {
                  if ((t = n[Z.expando])) {
                    if (t.events)
                      for (i in t.events)
                        r[i]
                          ? T.event.remove(n, i)
                          : T.removeEvent(n, i, t.handle);
                    n[Z.expando] = void 0;
                  }
                  n[J.expando] && (n[J.expando] = void 0);
                }
            },
          }),
            T.fn.extend({
              detach: function (e) {
                return Ne(this, e, !0);
              },
              remove: function (e) {
                return Ne(this, e);
              },
              text: function (e) {
                return V(
                  this,
                  function (e) {
                    return void 0 === e
                      ? T.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return qe(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Oe(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return qe(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return qe(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return qe(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (T.cleanData(be(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return T.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return V(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Pe.test(e) &&
                      !xe[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = T.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (T.cleanData(be(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return qe(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    T.inArray(this, e) < 0 &&
                      (T.cleanData(be(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            T.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                T.fn[e] = function (e) {
                  for (
                    var n, i = [], r = T(e), o = r.length - 1, s = 0;
                    s <= o;
                    s++
                  )
                    (n = s === o ? this : this.clone(!0)),
                      T(r[s])[t](n),
                      c.apply(i, n.get());
                  return this.pushStack(i);
                };
              }
            );
          var $e = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            Fe = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            je = function (e, t, n) {
              var i,
                r,
                o = {};
              for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
              return i;
            },
            He = new RegExp(oe.join("|"), "i");
          function We(e, t, n) {
            var i,
              r,
              o,
              s,
              a = e.style;
            return (
              (n = n || Fe(e)) &&
                ("" !== (s = n.getPropertyValue(t) || n[t]) ||
                  ae(e) ||
                  (s = T.style(e, t)),
                !g.pixelBoxStyles() &&
                  $e.test(s) &&
                  He.test(t) &&
                  ((i = a.width),
                  (r = a.minWidth),
                  (o = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = s),
                  (s = n.width),
                  (a.width = i),
                  (a.minWidth = r),
                  (a.maxWidth = o))),
              void 0 !== s ? s + "" : s
            );
          }
          function Ve(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (u) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (u.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  se.appendChild(c).appendChild(u);
                var e = i.getComputedStyle(u);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (u.style.right = "60%"),
                  (s = 36 === t(e.right)),
                  (r = 36 === t(e.width)),
                  (u.style.position = "absolute"),
                  (o = 12 === t(u.offsetWidth / 3)),
                  se.removeChild(c),
                  (u = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              r,
              o,
              s,
              a,
              l,
              c = x.createElement("div"),
              u = x.createElement("div");
            u.style &&
              ((u.style.backgroundClip = "content-box"),
              (u.cloneNode(!0).style.backgroundClip = ""),
              (g.clearCloneStyle = "content-box" === u.style.backgroundClip),
              T.extend(g, {
                boxSizingReliable: function () {
                  return e(), r;
                },
                pixelBoxStyles: function () {
                  return e(), s;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), o;
                },
                reliableTrDimensions: function () {
                  var e, t, n, r;
                  return (
                    null == a &&
                      ((e = x.createElement("table")),
                      (t = x.createElement("tr")),
                      (n = x.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      se.appendChild(e).appendChild(t).appendChild(n),
                      (r = i.getComputedStyle(t)),
                      (a =
                        parseInt(r.height, 10) +
                          parseInt(r.borderTopWidth, 10) +
                          parseInt(r.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      se.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          var Ge = ["Webkit", "Moz", "ms"],
            Xe = x.createElement("div").style,
            Ye = {};
          function Ue(e) {
            var t = T.cssProps[e] || Ye[e];
            return (
              t ||
              (e in Xe
                ? e
                : (Ye[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                        n--;

                      )
                        if ((e = Ge[n] + t) in Xe) return e;
                    })(e) || e))
            );
          }
          var Qe = /^(none|table(?!-c[ea]).+)/,
            Ke = /^--/,
            Ze = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Je = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var i = re.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function tt(e, t, n, i, r, o) {
            var s = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2)
              "margin" === n && (l += T.css(e, n + oe[s], !0, r)),
                i
                  ? ("content" === n &&
                      (l -= T.css(e, "padding" + oe[s], !0, r)),
                    "margin" !== n &&
                      (l -= T.css(e, "border" + oe[s] + "Width", !0, r)))
                  : ((l += T.css(e, "padding" + oe[s], !0, r)),
                    "padding" !== n
                      ? (l += T.css(e, "border" + oe[s] + "Width", !0, r))
                      : (a += T.css(e, "border" + oe[s] + "Width", !0, r)));
            return (
              !i &&
                o >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        o -
                        l -
                        a -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function nt(e, t, n) {
            var i = Fe(e),
              r =
                (!g.boxSizingReliable() || n) &&
                "border-box" === T.css(e, "boxSizing", !1, i),
              o = r,
              s = We(e, t, i),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if ($e.test(s)) {
              if (!n) return s;
              s = "auto";
            }
            return (
              ((!g.boxSizingReliable() && r) ||
                (!g.reliableTrDimensions() && P(e, "tr")) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === T.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === T.css(e, "boxSizing", !1, i)),
                (o = a in e) && (s = e[a])),
              (s = parseFloat(s) || 0) +
                tt(e, t, n || (r ? "border" : "content"), o, i, s) +
                "px"
            );
          }
          function it(e, t, n, i, r) {
            return new it.prototype.init(e, t, n, i, r);
          }
          T.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = We(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                  o,
                  s,
                  a = U(t),
                  l = Ke.test(t),
                  c = e.style;
                if (
                  (l || (t = Ue(a)),
                  (s = T.cssHooks[t] || T.cssHooks[a]),
                  void 0 === n)
                )
                  return s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                    ? r
                    : c[t];
                "string" === (o = typeof n) &&
                  (r = re.exec(n)) &&
                  r[1] &&
                  ((n = ue(e, t, r)), (o = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== o ||
                      l ||
                      (n += (r && r[3]) || (T.cssNumber[a] ? "" : "px")),
                    g.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var r,
                o,
                s,
                a = U(t);
              return (
                Ke.test(t) || (t = Ue(a)),
                (s = T.cssHooks[t] || T.cssHooks[a]) &&
                  "get" in s &&
                  (r = s.get(e, !0, n)),
                void 0 === r && (r = We(e, t, i)),
                "normal" === r && t in Je && (r = Je[t]),
                "" === n || n
                  ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
                  : r
              );
            },
          }),
            T.each(["height", "width"], function (e, t) {
              T.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !Qe.test(T.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, i)
                      : je(e, Ze, function () {
                          return nt(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var r,
                    o = Fe(e),
                    s = !g.scrollboxSize() && "absolute" === o.position,
                    a =
                      (s || i) && "border-box" === T.css(e, "boxSizing", !1, o),
                    l = i ? tt(e, t, i, a, o) : 0;
                  return (
                    a &&
                      s &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(o[t]) -
                          tt(e, t, "border", !1, o) -
                          0.5
                      )),
                    l &&
                      (r = re.exec(n)) &&
                      "px" !== (r[3] || "px") &&
                      ((e.style[t] = n), (n = T.css(e, t))),
                    et(0, n, l)
                  );
                },
              };
            }),
            (T.cssHooks.marginLeft = Ve(g.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(We(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      je(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            T.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (T.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var i = 0,
                        r = {},
                        o = "string" == typeof n ? n.split(" ") : [n];
                      i < 4;
                      i++
                    )
                      r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
                    return r;
                  },
                }),
                  "margin" !== e && (T.cssHooks[e + t].set = et);
              }
            ),
            T.fn.extend({
              css: function (e, t) {
                return V(
                  this,
                  function (e, t, n) {
                    var i,
                      r,
                      o = {},
                      s = 0;
                    if (Array.isArray(t)) {
                      for (i = Fe(e), r = t.length; s < r; s++)
                        o[t[s]] = T.css(e, t[s], !1, i);
                      return o;
                    }
                    return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (T.Tween = it),
            (it.prototype = {
              constructor: it,
              init: function (e, t, n, i, r, o) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || T.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = o || (T.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = it.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : it.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = it.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        T.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : it.propHooks._default.set(this),
                  this
                );
              },
            }),
            (it.prototype.init.prototype = it.prototype),
            (it.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  T.fx.step[e.prop]
                    ? T.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!T.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : T.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (it.propHooks.scrollTop = it.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (T.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (T.fx = it.prototype.init),
            (T.fx.step = {});
          var rt,
            ot,
            st = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;
          function lt() {
            ot &&
              (!1 === x.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(lt)
                : i.setTimeout(lt, T.fx.interval),
              T.fx.tick());
          }
          function ct() {
            return (
              i.setTimeout(function () {
                rt = void 0;
              }),
              (rt = Date.now())
            );
          }
          function ut(e, t) {
            var n,
              i = 0,
              r = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              r["margin" + (n = oe[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function dt(e, t, n) {
            for (
              var i,
                r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                o = 0,
                s = r.length;
              o < s;
              o++
            )
              if ((i = r[o].call(n, t, e))) return i;
          }
          function pt(e, t, n) {
            var i,
              r,
              o = 0,
              s = pt.prefilters.length,
              a = T.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (r) return !1;
                for (
                  var t = rt || ct(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    i = 1 - (n / c.duration || 0),
                    o = 0,
                    s = c.tweens.length;
                  o < s;
                  o++
                )
                  c.tweens[o].run(i);
                return (
                  a.notifyWith(e, [c, i, n]),
                  i < 1 && s
                    ? n
                    : (s || a.notifyWith(e, [c, 1, 0]),
                      a.resolveWith(e, [c]),
                      !1)
                );
              },
              c = a.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(
                  !0,
                  { specialEasing: {}, easing: T.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = T.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing
                  );
                  return c.tweens.push(i), i;
                },
                stop: function (t) {
                  var n = 0,
                    i = t ? c.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                      : a.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              u = c.props;
            for (
              !(function (e, t) {
                var n, i, r, o, s;
                for (n in e)
                  if (
                    ((r = t[(i = U(n))]),
                    (o = e[n]),
                    Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                    n !== i && ((e[i] = o), delete e[n]),
                    (s = T.cssHooks[i]) && ("expand" in s))
                  )
                    for (n in ((o = s.expand(o)), delete e[i], o))
                      (n in e) || ((e[n] = o[n]), (t[n] = r));
                  else t[i] = r;
              })(u, c.opts.specialEasing);
              o < s;
              o++
            )
              if ((i = pt.prefilters[o].call(c, e, u, c.opts)))
                return (
                  v(i.stop) &&
                    (T._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              T.map(u, dt, c),
              v(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              T.fx.timer(
                T.extend(l, { elem: e, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (T.Animation = T.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ue(n.elem, e, re.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(q));
              for (var n, i = 0, r = e.length; i < r; i++)
                (n = e[i]),
                  (pt.tweeners[n] = pt.tweeners[n] || []),
                  pt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d = "width" in t || "height" in t,
                  p = this,
                  f = {},
                  h = e.style,
                  m = e.nodeType && ce(e),
                  g = Z.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (s = T._queueHooks(e, "fx")).unqueued &&
                    ((s.unqueued = 0),
                    (a = s.empty.fire),
                    (s.empty.fire = function () {
                      s.unqueued || a();
                    })),
                  s.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      s.unqueued--, T.queue(e, "fx").length || s.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), st.test(r))) {
                    if (
                      (delete t[i],
                      (o = o || "toggle" === r),
                      r === (m ? "hide" : "show"))
                    ) {
                      if ("show" !== r || !g || void 0 === g[i]) continue;
                      m = !0;
                    }
                    f[i] = (g && g[i]) || T.style(e, i);
                  }
                if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
                  for (i in (d &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = g && g.display) && (c = Z.get(e, "display")),
                    "none" === (u = T.css(e, "display")) &&
                      (c
                        ? (u = c)
                        : (fe([e], !0),
                          (c = e.style.display || c),
                          (u = T.css(e, "display")),
                          fe([e]))),
                    ("inline" === u || ("inline-block" === u && null != c)) &&
                      "none" === T.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          h.display = c;
                        }),
                        null == c &&
                          ((u = h.display), (c = "none" === u ? "" : u))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  f))
                    l ||
                      (g
                        ? "hidden" in g && (m = g.hidden)
                        : (g = Z.access(e, "fxshow", { display: c })),
                      o && (g.hidden = !m),
                      m && fe([e], !0),
                      p.done(function () {
                        for (i in (m || fe([e]), Z.remove(e, "fxshow"), f))
                          T.style(e, i, f[i]);
                      })),
                      (l = dt(m ? g[i] : 0, i, p)),
                      i in g ||
                        ((g[i] = l.start),
                        m && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (T.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? T.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                T.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in T.fx.speeds
                      ? (i.duration = T.fx.speeds[i.duration])
                      : (i.duration = T.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  v(i.old) && i.old.call(this),
                    i.queue && T.dequeue(this, i.queue);
                }),
                i
              );
            }),
            T.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(ce)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                var r = T.isEmptyObject(e),
                  o = T.speed(t, n, i),
                  s = function () {
                    var t = pt(this, T.extend({}, e), o);
                    (r || Z.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (s.finish = s),
                  r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                );
              },
              stop: function (e, t, n) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      r = null != e && e + "queueHooks",
                      o = T.timers,
                      s = Z.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                      for (r in s) s[r] && s[r].stop && at.test(r) && i(s[r]);
                    for (r = o.length; r--; )
                      o[r].elem !== this ||
                        (null != e && o[r].queue !== e) ||
                        (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                    (!t && n) || T.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = Z.get(this),
                      i = n[e + "queue"],
                      r = n[e + "queueHooks"],
                      o = T.timers,
                      s = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        T.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = o.length;
                      t--;

                    )
                      o[t].elem === this &&
                        o[t].queue === e &&
                        (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            T.each(["toggle", "show", "hide"], function (e, t) {
              var n = T.fn[t];
              T.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ut(t, !0), e, i, r);
              };
            }),
            T.each(
              {
                slideDown: ut("show"),
                slideUp: ut("hide"),
                slideToggle: ut("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                T.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              }
            ),
            (T.timers = []),
            (T.fx.tick = function () {
              var e,
                t = 0,
                n = T.timers;
              for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || T.fx.stop(), (rt = void 0);
            }),
            (T.fx.timer = function (e) {
              T.timers.push(e), T.fx.start();
            }),
            (T.fx.interval = 13),
            (T.fx.start = function () {
              ot || ((ot = !0), lt());
            }),
            (T.fx.stop = function () {
              ot = null;
            }),
            (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (T.fn.delay = function (e, t) {
              return (
                (e = (T.fx && T.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var r = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              var e = x.createElement("input"),
                t = x
                  .createElement("select")
                  .appendChild(x.createElement("option"));
              (e.type = "checkbox"),
                (g.checkOn = "" !== e.value),
                (g.optSelected = t.selected),
                ((e = x.createElement("input")).value = "t"),
                (e.type = "radio"),
                (g.radioValue = "t" === e.value);
            })();
          var ft,
            ht = T.expr.attrHandle;
          T.fn.extend({
            attr: function (e, t) {
              return V(this, T.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                T.removeAttr(this, e);
              });
            },
          }),
            T.extend({
              attr: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return void 0 === e.getAttribute
                    ? T.prop(e, t, n)
                    : ((1 === o && T.isXMLDoc(e)) ||
                        (r =
                          T.attrHooks[t.toLowerCase()] ||
                          (T.expr.match.bool.test(t) ? ft : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void T.removeAttr(e, t)
                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : null == (i = T.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!g.radioValue && "radio" === t && P(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  r = t && t.match(q);
                if (r && 1 === e.nodeType)
                  for (; (n = r[i++]); ) e.removeAttribute(n);
              },
            }),
            (ft = {
              set: function (e, t, n) {
                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ht[t] || T.find.attr;
              ht[t] = function (e, t, i) {
                var r,
                  o,
                  s = t.toLowerCase();
                return (
                  i ||
                    ((o = ht[s]),
                    (ht[s] = r),
                    (r = null != n(e, t, i) ? s : null),
                    (ht[s] = o)),
                  r
                );
              };
            });
          var mt = /^(?:input|select|textarea|button)$/i,
            gt = /^(?:a|area)$/i;
          function vt(e) {
            return (e.match(q) || []).join(" ");
          }
          function yt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function xt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(q)) || [];
          }
          T.fn.extend({
            prop: function (e, t) {
              return V(this, T.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[T.propFix[e] || e];
              });
            },
          }),
            T.extend({
              prop: function (e, t, n) {
                var i,
                  r,
                  o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                  return (
                    (1 === o && T.isXMLDoc(e)) ||
                      ((t = T.propFix[t] || t), (r = T.propHooks[t])),
                    void 0 !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = T.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : mt.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            g.optSelected ||
              (T.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            T.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                T.propFix[this.toLowerCase()] = this;
              }
            ),
            T.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    T(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = xt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                    ) {
                      for (s = 0; (o = t[s++]); )
                        i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                      r !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    T(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = xt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                    ) {
                      for (s = 0; (o = t[s++]); )
                        for (; i.indexOf(" " + o + " ") > -1; )
                          i = i.replace(" " + o + " ", " ");
                      r !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : v(e)
                  ? this.each(function (n) {
                      T(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })
                  : this.each(function () {
                      var t, r, o, s;
                      if (i)
                        for (r = 0, o = T(this), s = xt(e); (t = s[r++]); )
                          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = yt(this)) && Z.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : Z.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + vt(yt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var bt = /\r/g;
          T.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                r = this[0];
              return arguments.length
                ? ((i = v(e)),
                  this.each(function (n) {
                    var r;
                    1 === this.nodeType &&
                      (null == (r = i ? e.call(this, n, T(this).val()) : e)
                        ? (r = "")
                        : "number" == typeof r
                        ? (r += "")
                        : Array.isArray(r) &&
                          (r = T.map(r, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        T.valHooks[this.type] ||
                        T.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  }))
                : r
                ? (t =
                    T.valHooks[r.type] ||
                    T.valHooks[r.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(r, "value"))
                  ? n
                  : "string" == typeof (n = r.value)
                  ? n.replace(bt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            T.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : vt(T.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      r = e.options,
                      o = e.selectedIndex,
                      s = "select-one" === e.type,
                      a = s ? null : [],
                      l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                      if (
                        ((n = r[i]).selected || i === o) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))
                      ) {
                        if (((t = T(n).val()), s)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, r = e.options, o = T.makeArray(t), s = r.length;
                      s--;

                    )
                      ((i = r[s]).selected =
                        T.inArray(T.valHooks.option.get(i), o) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), o;
                  },
                },
              },
            }),
            T.each(["radio", "checkbox"], function () {
              (T.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = T.inArray(T(e).val(), t) > -1);
                },
              }),
                g.checkOn ||
                  (T.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (g.focusin = "onfocusin" in i);
          var wt = /^(?:focusinfocus|focusoutblur)$/,
            St = function (e) {
              e.stopPropagation();
            };
          T.extend(T.event, {
            trigger: function (e, t, n, r) {
              var o,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                h = [n || x],
                m = f.call(e, "type") ? e.type : e,
                g = f.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((s = p = a = n = n || x),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !wt.test(m + T.event.triggered) &&
                  (m.indexOf(".") > -1 &&
                    ((g = m.split(".")), (m = g.shift()), g.sort()),
                  (c = m.indexOf(":") < 0 && "on" + m),
                  ((e = e[T.expando]
                    ? e
                    : new T.Event(m, "object" == typeof e && e)).isTrigger = r
                    ? 2
                    : 3),
                  (e.namespace = g.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : T.makeArray(t, [e])),
                  (d = T.event.special[m] || {}),
                  r || !d.trigger || !1 !== d.trigger.apply(n, t)))
              ) {
                if (!r && !d.noBubble && !y(n)) {
                  for (
                    l = d.delegateType || m,
                      wt.test(l + m) || (s = s.parentNode);
                    s;
                    s = s.parentNode
                  )
                    h.push(s), (a = s);
                  a === (n.ownerDocument || x) &&
                    h.push(a.defaultView || a.parentWindow || i);
                }
                for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
                  (p = s),
                    (e.type = o > 1 ? l : d.bindType || m),
                    (u =
                      (Z.get(s, "events") || Object.create(null))[e.type] &&
                      Z.get(s, "handle")) && u.apply(s, t),
                    (u = c && s[c]) &&
                      u.apply &&
                      Q(s) &&
                      ((e.result = u.apply(s, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = m),
                  r ||
                    e.isDefaultPrevented() ||
                    (d._default && !1 !== d._default.apply(h.pop(), t)) ||
                    !Q(n) ||
                    (c &&
                      v(n[m]) &&
                      !y(n) &&
                      ((a = n[c]) && (n[c] = null),
                      (T.event.triggered = m),
                      e.isPropagationStopped() && p.addEventListener(m, St),
                      n[m](),
                      e.isPropagationStopped() && p.removeEventListener(m, St),
                      (T.event.triggered = void 0),
                      a && (n[c] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
              T.event.trigger(i, null, t);
            },
          }),
            T.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  T.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return T.event.trigger(e, t, n, !0);
              },
            }),
            g.focusin ||
              T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  T.event.simulate(t, e.target, T.event.fix(e));
                };
                T.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = Z.access(i, t);
                    r || i.addEventListener(e, n, !0),
                      Z.access(i, t, (r || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = Z.access(i, t) - 1;
                    r
                      ? Z.access(i, t, r)
                      : (i.removeEventListener(e, n, !0), Z.remove(i, t));
                  },
                };
              });
          var _t = i.location,
            Tt = { guid: Date.now() },
            Ct = /\?/;
          T.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                T.error(
                  "Invalid XML: " +
                    (n
                      ? T.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var Et = /\[\]$/,
            At = /\r?\n/g,
            kt = /^(?:submit|button|image|reset|file)$/i,
            Mt = /^(?:input|select|textarea|keygen)/i;
          function Pt(e, t, n, i) {
            var r;
            if (Array.isArray(t))
              T.each(t, function (t, r) {
                n || Et.test(e)
                  ? i(e, r)
                  : Pt(
                      e +
                        "[" +
                        ("object" == typeof r && null != r ? t : "") +
                        "]",
                      r,
                      n,
                      i
                    );
              });
            else if (n || "object" !== S(t)) i(e, t);
            else for (r in t) Pt(e + "[" + r + "]", t[r], n, i);
          }
          (T.param = function (e, t) {
            var n,
              i = [],
              r = function (e, t) {
                var n = v(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
              T.each(e, function () {
                r(this.name, this.value);
              });
            else for (n in e) Pt(n, e[n], t, r);
            return i.join("&");
          }),
            T.fn.extend({
              serialize: function () {
                return T.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = T.prop(this, "elements");
                  return e ? T.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !T(this).is(":disabled") &&
                      Mt.test(this.nodeName) &&
                      !kt.test(e) &&
                      (this.checked || !ge.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = T(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? T.map(n, function (e) {
                          return { name: t.name, value: e.replace(At, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(At, "\r\n") };
                  })
                  .get();
              },
            });
          var Lt = /%20/g,
            Dt = /#.*$/,
            Ot = /([?&])_=[^&]*/,
            Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            It = /^(?:GET|HEAD)$/,
            zt = /^\/\//,
            Rt = {},
            qt = {},
            Nt = "*/".concat("*"),
            $t = x.createElement("a");
          function Ft(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                r = 0,
                o = t.toLowerCase().match(q) || [];
              if (v(n))
                for (; (i = o[r++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function jt(e, t, n, i) {
            var r = {},
              o = e === qt;
            function s(a) {
              var l;
              return (
                (r[a] = !0),
                T.each(e[a] || [], function (e, a) {
                  var c = a(t, n, i);
                  return "string" != typeof c || o || r[c]
                    ? o
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), s(c), !1);
                }),
                l
              );
            }
            return s(t.dataTypes[0]) || (!r["*"] && s("*"));
          }
          function Ht(e, t) {
            var n,
              i,
              r = T.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && T.extend(!0, e, i), e;
          }
          ($t.href = _t.href),
            T.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: _t.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    _t.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Nt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": T.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Ht(Ht(e, T.ajaxSettings), t) : Ht(T.ajaxSettings, e);
              },
              ajaxPrefilter: Ft(Rt),
              ajaxTransport: Ft(qt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d,
                  p,
                  f = T.ajaxSetup({}, t),
                  h = f.context || f,
                  m = f.context && (h.nodeType || h.jquery) ? T(h) : T.event,
                  g = T.Deferred(),
                  v = T.Callbacks("once memory"),
                  y = f.statusCode || {},
                  b = {},
                  w = {},
                  S = "canceled",
                  _ = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!s)
                          for (s = {}; (t = Bt.exec(o)); )
                            s[t[1].toLowerCase() + " "] = (
                              s[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = s[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? o : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (b[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (f.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) _.always(e[_.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || S;
                      return n && n.abort(t), C(0, t), this;
                    },
                  };
                if (
                  (g.promise(_),
                  (f.url = ((e || f.url || _t.href) + "").replace(
                    zt,
                    _t.protocol + "//"
                  )),
                  (f.type = t.method || t.type || f.method || f.type),
                  (f.dataTypes = (f.dataType || "*").toLowerCase().match(q) || [
                    "",
                  ]),
                  null == f.crossDomain)
                ) {
                  l = x.createElement("a");
                  try {
                    (l.href = f.url),
                      (l.href = l.href),
                      (f.crossDomain =
                        $t.protocol + "//" + $t.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    f.crossDomain = !0;
                  }
                }
                if (
                  (f.data &&
                    f.processData &&
                    "string" != typeof f.data &&
                    (f.data = T.param(f.data, f.traditional)),
                  jt(Rt, f, t, _),
                  c)
                )
                  return _;
                for (d in ((u = T.event && f.global) &&
                  0 == T.active++ &&
                  T.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !It.test(f.type)),
                (r = f.url.replace(Dt, "")),
                f.hasContent
                  ? f.data &&
                    f.processData &&
                    0 ===
                      (f.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (f.data = f.data.replace(Lt, "+"))
                  : ((p = f.url.slice(r.length)),
                    f.data &&
                      (f.processData || "string" == typeof f.data) &&
                      ((r += (Ct.test(r) ? "&" : "?") + f.data), delete f.data),
                    !1 === f.cache &&
                      ((r = r.replace(Ot, "$1")),
                      (p = (Ct.test(r) ? "&" : "?") + "_=" + Tt.guid++ + p)),
                    (f.url = r + p)),
                f.ifModified &&
                  (T.lastModified[r] &&
                    _.setRequestHeader("If-Modified-Since", T.lastModified[r]),
                  T.etag[r] && _.setRequestHeader("If-None-Match", T.etag[r])),
                ((f.data && f.hasContent && !1 !== f.contentType) ||
                  t.contentType) &&
                  _.setRequestHeader("Content-Type", f.contentType),
                _.setRequestHeader(
                  "Accept",
                  f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                    ? f.accepts[f.dataTypes[0]] +
                        ("*" !== f.dataTypes[0] ? ", " + Nt + "; q=0.01" : "")
                    : f.accepts["*"]
                ),
                f.headers))
                  _.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, _, f) || c))
                  return _.abort();
                if (
                  ((S = "abort"),
                  v.add(f.complete),
                  _.done(f.success),
                  _.fail(f.error),
                  (n = jt(qt, f, t, _)))
                ) {
                  if (
                    ((_.readyState = 1), u && m.trigger("ajaxSend", [_, f]), c)
                  )
                    return _;
                  f.async &&
                    f.timeout > 0 &&
                    (a = i.setTimeout(function () {
                      _.abort("timeout");
                    }, f.timeout));
                  try {
                    (c = !1), n.send(b, C);
                  } catch (e) {
                    if (c) throw e;
                    C(-1, e);
                  }
                } else C(-1, "No Transport");
                function C(e, t, s, l) {
                  var d,
                    p,
                    x,
                    b,
                    w,
                    S = t;
                  c ||
                    ((c = !0),
                    a && i.clearTimeout(a),
                    (n = void 0),
                    (o = l || ""),
                    (_.readyState = e > 0 ? 4 : 0),
                    (d = (e >= 200 && e < 300) || 304 === e),
                    s &&
                      (b = (function (e, t, n) {
                        for (
                          var i, r, o, s, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (r in a)
                            if (a[r] && a[r].test(i)) {
                              l.unshift(r);
                              break;
                            }
                        if (l[0] in n) o = l[0];
                        else {
                          for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                              o = r;
                              break;
                            }
                            s || (s = r);
                          }
                          o = o || s;
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o];
                      })(f, _, s)),
                    !d &&
                      T.inArray("script", f.dataTypes) > -1 &&
                      T.inArray("json", f.dataTypes) < 0 &&
                      (f.converters["text script"] = function () {}),
                    (b = (function (e, t, n, i) {
                      var r,
                        o,
                        s,
                        a,
                        l,
                        c = {},
                        u = e.dataTypes.slice();
                      if (u[1])
                        for (s in e.converters)
                          c[s.toLowerCase()] = e.converters[s];
                      for (o = u.shift(); o; )
                        if (
                          (e.responseFields[o] && (n[e.responseFields[o]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = o),
                          (o = u.shift()))
                        )
                          if ("*" === o) o = l;
                          else if ("*" !== l && l !== o) {
                            if (!(s = c[l + " " + o] || c["* " + o]))
                              for (r in c)
                                if (
                                  (a = r.split(" "))[1] === o &&
                                  (s = c[l + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === s
                                    ? (s = c[r])
                                    : !0 !== c[r] &&
                                      ((o = a[0]), u.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== s)
                              if (s && e.throws) t = s(t);
                              else
                                try {
                                  t = s(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: s
                                      ? e
                                      : "No conversion from " + l + " to " + o,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(f, b, _, d)),
                    d
                      ? (f.ifModified &&
                          ((w = _.getResponseHeader("Last-Modified")) &&
                            (T.lastModified[r] = w),
                          (w = _.getResponseHeader("etag")) && (T.etag[r] = w)),
                        204 === e || "HEAD" === f.type
                          ? (S = "nocontent")
                          : 304 === e
                          ? (S = "notmodified")
                          : ((S = b.state), (p = b.data), (d = !(x = b.error))))
                      : ((x = S),
                        (!e && S) || ((S = "error"), e < 0 && (e = 0))),
                    (_.status = e),
                    (_.statusText = (t || S) + ""),
                    d
                      ? g.resolveWith(h, [p, S, _])
                      : g.rejectWith(h, [_, S, x]),
                    _.statusCode(y),
                    (y = void 0),
                    u &&
                      m.trigger(d ? "ajaxSuccess" : "ajaxError", [
                        _,
                        f,
                        d ? p : x,
                      ]),
                    v.fireWith(h, [_, S]),
                    u &&
                      (m.trigger("ajaxComplete", [_, f]),
                      --T.active || T.event.trigger("ajaxStop")));
                }
                return _;
              },
              getJSON: function (e, t, n) {
                return T.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return T.get(e, void 0, t, "script");
              },
            }),
            T.each(["get", "post"], function (e, t) {
              T[t] = function (e, n, i, r) {
                return (
                  v(n) && ((r = r || i), (i = n), (n = void 0)),
                  T.ajax(
                    T.extend(
                      { url: e, type: t, dataType: r, data: n, success: i },
                      T.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            T.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (T._evalUrl = function (e, t, n) {
              return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  T.globalEval(e, t, n);
                },
              });
            }),
            T.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      T(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = T(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  T(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      T(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (T.expr.pseudos.hidden = function (e) {
              return !T.expr.pseudos.visible(e);
            }),
            (T.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (T.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Wt = { 0: 200, 1223: 204 },
            Vt = T.ajaxSettings.xhr();
          (g.cors = !!Vt && "withCredentials" in Vt),
            (g.ajax = Vt = !!Vt),
            T.ajaxTransport(function (e) {
              var t, n;
              if (g.cors || (Vt && !e.crossDomain))
                return {
                  send: function (r, o) {
                    var s,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (s in e.xhrFields) a[s] = e.xhrFields[s];
                    for (s in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      r["X-Requested-With"] ||
                      (r["X-Requested-With"] = "XMLHttpRequest"),
                    r))
                      a.setRequestHeader(s, r[s]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? o(0, "error")
                              : o(a.status, a.statusText)
                            : o(
                                Wt[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            T.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            T.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return T.globalEval(e), e;
                },
              },
            }),
            T.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            T.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, r) {
                    (t = T("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && r("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      x.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Gt,
            Xt = [],
            Yt = /(=)\?(?=&|$)|\?\?/;
          T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Xt.pop() || T.expando + "_" + Tt.guid++;
              return (this[e] = !0), e;
            },
          }),
            T.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                o,
                s,
                a =
                  !1 !== e.jsonp &&
                  (Yt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Yt.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (r = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Yt, "$1" + r))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return s || T.error(r + " was not called"), s[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (o = i[r]),
                  (i[r] = function () {
                    s = arguments;
                  }),
                  n.always(function () {
                    void 0 === o ? T(i).removeProp(r) : (i[r] = o),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
                      s && v(o) && o(s[0]),
                      (s = o = void 0);
                  }),
                  "script"
                );
            }),
            (g.createHTMLDocument =
              (((Gt = x.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Gt.childNodes.length)),
            (T.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (g.createHTMLDocument
                      ? (((i = (t =
                          x.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = x.location.href),
                        t.head.appendChild(i))
                      : (t = x)),
                  (o = !n && []),
                  (r = L.exec(e))
                    ? [t.createElement(r[1])]
                    : ((r = _e([e], t, o)),
                      o && o.length && T(o).remove(),
                      T.merge([], r.childNodes)));
              var i, r, o;
            }),
            (T.fn.load = function (e, t, n) {
              var i,
                r,
                o,
                s = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((i = vt(e.slice(a))), (e = e.slice(0, a))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (r = "POST"),
                s.length > 0 &&
                  T.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (o = arguments),
                        s.html(
                          i ? T("<div>").append(T.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          s.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (T.expr.pseudos.animated = function (e) {
              return T.grep(T.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (T.offset = {
              setOffset: function (e, t, n) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c = T.css(e, "position"),
                  u = T(e),
                  d = {};
                "static" === c && (e.style.position = "relative"),
                  (a = u.offset()),
                  (o = T.css(e, "top")),
                  (l = T.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (o + l).indexOf("auto") > -1
                    ? ((s = (i = u.position()).top), (r = i.left))
                    : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                  v(t) && (t = t.call(e, n, T.extend({}, a))),
                  null != t.top && (d.top = t.top - a.top + s),
                  null != t.left && (d.left = t.left - a.left + r),
                  "using" in t ? t.using.call(e, d) : u.css(d);
              },
            }),
            T.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        T.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    r = { top: 0, left: 0 };
                  if ("fixed" === T.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === T.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((r = T(e).offset()).top += T.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (r.left += T.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - r.top - T.css(i, "marginTop", !0),
                    left: t.left - r.left - T.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === T.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || se;
                });
              },
            }),
            T.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                T.fn[e] = function (i) {
                  return V(
                    this,
                    function (e, i, r) {
                      var o;
                      if (
                        (y(e)
                          ? (o = e)
                          : 9 === e.nodeType && (o = e.defaultView),
                        void 0 === r)
                      )
                        return o ? o[t] : e[i];
                      o
                        ? o.scrollTo(
                            n ? o.pageXOffset : r,
                            n ? r : o.pageYOffset
                          )
                        : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length
                  );
                };
              }
            ),
            T.each(["top", "left"], function (e, t) {
              T.cssHooks[t] = Ve(g.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = We(e, t)), $e.test(n) ? T(e).position()[t] + "px" : n
                  );
              });
            }),
            T.each({ Height: "height", Width: "width" }, function (e, t) {
              T.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, i) {
                  T.fn[i] = function (r, o) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                      a = n || (!0 === r || !0 === o ? "margin" : "border");
                    return V(
                      this,
                      function (t, n, r) {
                        var o;
                        return y(t)
                          ? 0 === i.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((o = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              o["scroll" + e],
                              t.body["offset" + e],
                              o["offset" + e],
                              o["client" + e]
                            ))
                          : void 0 === r
                          ? T.css(t, n, a)
                          : T.style(t, n, r, a);
                      },
                      t,
                      s ? r : void 0,
                      s
                    );
                  };
                }
              );
            }),
            T.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                T.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            T.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            T.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                T.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (T.proxy = function (e, t) {
            var n, i, r;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (i = a.call(arguments, 2)),
                (r = function () {
                  return e.apply(t || this, i.concat(a.call(arguments)));
                }),
                (r.guid = e.guid = e.guid || T.guid++),
                r
              );
          }),
            (T.holdReady = function (e) {
              e ? T.readyWait++ : T.ready(!0);
            }),
            (T.isArray = Array.isArray),
            (T.parseJSON = JSON.parse),
            (T.nodeName = P),
            (T.isFunction = v),
            (T.isWindow = y),
            (T.camelCase = U),
            (T.type = S),
            (T.now = Date.now),
            (T.isNumeric = function (e) {
              var t = T.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (T.trim = function (e) {
              return null == e ? "" : (e + "").replace(Ut, "");
            }),
            void 0 ===
              (n = function () {
                return T;
              }.apply(t, [])) || (e.exports = n);
          var Qt = i.jQuery,
            Kt = i.$;
          return (
            (T.noConflict = function (e) {
              return (
                i.$ === T && (i.$ = Kt),
                e && i.jQuery === T && (i.jQuery = Qt),
                T
              );
            }),
            void 0 === r && (i.jQuery = i.$ = T),
            T
          );
        });
      },
      90: function (e) {
        !(function (t) {
          var n = (function (e, t, n) {
            "use strict";
            var i, r;
            if (
              ((function () {
                var t,
                  n = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    fastLoadedClass: "ls-is-cached",
                    iframeLoadMode: 0,
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: 0.8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125,
                  };
                for (t in ((r = e.lazySizesConfig || e.lazysizesConfig || {}),
                n))
                  t in r || (r[t] = n[t]);
              })(),
              !t || !t.getElementsByClassName)
            )
              return { init: function () {}, cfg: r, noSupport: !0 };
            var o = t.documentElement,
              s = e.HTMLPictureElement,
              a = "addEventListener",
              l = "getAttribute",
              c = e[a].bind(e),
              u = e.setTimeout,
              d = e.requestAnimationFrame || u,
              p = e.requestIdleCallback,
              f = /^picture$/i,
              h = ["load", "error", "lazyincluded", "_lazyloaded"],
              m = {},
              g = Array.prototype.forEach,
              v = function (e, t) {
                return (
                  m[t] || (m[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                  m[t].test(e[l]("class") || "") && m[t]
                );
              },
              y = function (e, t) {
                v(e, t) ||
                  e.setAttribute(
                    "class",
                    (e[l]("class") || "").trim() + " " + t
                  );
              },
              x = function (e, t) {
                var n;
                (n = v(e, t)) &&
                  e.setAttribute(
                    "class",
                    (e[l]("class") || "").replace(n, " ")
                  );
              },
              b = function (e, t, n) {
                var i = n ? a : "removeEventListener";
                n && b(e, t),
                  h.forEach(function (n) {
                    e[i](n, t);
                  });
              },
              w = function (e, n, r, o, s) {
                var a = t.createEvent("Event");
                return (
                  r || (r = {}),
                  (r.instance = i),
                  a.initEvent(n, !o, !s),
                  (a.detail = r),
                  e.dispatchEvent(a),
                  a
                );
              },
              S = function (t, n) {
                var i;
                !s && (i = e.picturefill || r.pf)
                  ? (n &&
                      n.src &&
                      !t[l]("srcset") &&
                      t.setAttribute("srcset", n.src),
                    i({ reevaluate: !0, elements: [t] }))
                  : n && n.src && (t.src = n.src);
              },
              _ = function (e, t) {
                return (getComputedStyle(e, null) || {})[t];
              },
              T = function (e, t, n) {
                for (
                  n = n || e.offsetWidth;
                  n < r.minSize && t && !e._lazysizesWidth;

                )
                  (n = t.offsetWidth), (t = t.parentNode);
                return n;
              },
              C =
                ((ye = []),
                (xe = []),
                (be = ye),
                (we = function () {
                  var e = be;
                  for (be = ye.length ? xe : ye, ge = !0, ve = !1; e.length; )
                    e.shift()();
                  ge = !1;
                }),
                (Se = function (e, n) {
                  ge && !n
                    ? e.apply(this, arguments)
                    : (be.push(e), ve || ((ve = !0), (t.hidden ? u : d)(we)));
                }),
                (Se._lsFlush = we),
                Se),
              E = function (e, t) {
                return t
                  ? function () {
                      C(e);
                    }
                  : function () {
                      var t = this,
                        n = arguments;
                      C(function () {
                        e.apply(t, n);
                      });
                    };
              },
              A = function (e) {
                var t,
                  i = 0,
                  o = r.throttleDelay,
                  s = r.ricTimeout,
                  a = function () {
                    (t = !1), (i = n.now()), e();
                  },
                  l =
                    p && s > 49
                      ? function () {
                          p(a, { timeout: s }),
                            s !== r.ricTimeout && (s = r.ricTimeout);
                        }
                      : E(function () {
                          u(a);
                        }, !0);
                return function (e) {
                  var r;
                  (e = !0 === e) && (s = 33),
                    t ||
                      ((t = !0),
                      (r = o - (n.now() - i)) < 0 && (r = 0),
                      e || r < 9 ? l() : u(l, r));
                };
              },
              k = function (e) {
                var t,
                  i,
                  r = 99,
                  o = function () {
                    (t = null), e();
                  },
                  s = function () {
                    var e = n.now() - i;
                    e < r ? u(s, r - e) : (p || o)(o);
                  };
                return function () {
                  (i = n.now()), t || (t = u(s, r));
                };
              },
              M =
                ((Y = /^img$/i),
                (U = /^iframe$/i),
                (Q =
                  "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent)),
                (K = 0),
                (Z = 0),
                (J = 0),
                (ee = -1),
                (te = function (e) {
                  J--, (!e || J < 0 || !e.target) && (J = 0);
                }),
                (ne = function (e) {
                  return (
                    null == X && (X = "hidden" == _(t.body, "visibility")),
                    X ||
                      !(
                        "hidden" == _(e.parentNode, "visibility") &&
                        "hidden" == _(e, "visibility")
                      )
                  );
                }),
                (ie = function (e, n) {
                  var i,
                    r = e,
                    s = ne(e);
                  for (
                    H -= n, G += n, W -= n, V += n;
                    s && (r = r.offsetParent) && r != t.body && r != o;

                  )
                    (s = (_(r, "opacity") || 1) > 0) &&
                      "visible" != _(r, "overflow") &&
                      ((i = r.getBoundingClientRect()),
                      (s =
                        V > i.left &&
                        W < i.right &&
                        G > i.top - 1 &&
                        H < i.bottom + 1));
                  return s;
                }),
                (re = function () {
                  var e,
                    n,
                    s,
                    a,
                    c,
                    u,
                    d,
                    p,
                    f,
                    h,
                    m,
                    g,
                    v = i.elements;
                  if ((N = r.loadMode) && J < 8 && (e = v.length)) {
                    for (n = 0, ee++; n < e; n++)
                      if (v[n] && !v[n]._lazyRace)
                        if (
                          !Q ||
                          (i.prematureUnveil && i.prematureUnveil(v[n]))
                        )
                          pe(v[n]);
                        else if (
                          (((p = v[n][l]("data-expand")) && (u = 1 * p)) ||
                            (u = Z),
                          h ||
                            ((h =
                              !r.expand || r.expand < 1
                                ? o.clientHeight > 500 && o.clientWidth > 500
                                  ? 500
                                  : 370
                                : r.expand),
                            (i._defEx = h),
                            (m = h * r.expFactor),
                            (g = r.hFac),
                            (X = null),
                            Z < m && J < 1 && ee > 2 && N > 2 && !t.hidden
                              ? ((Z = m), (ee = 0))
                              : (Z = N > 1 && ee > 1 && J < 6 ? h : K)),
                          f !== u &&
                            ((F = innerWidth + u * g),
                            (j = innerHeight + u),
                            (d = -1 * u),
                            (f = u)),
                          (s = v[n].getBoundingClientRect()),
                          (G = s.bottom) >= d &&
                            (H = s.top) <= j &&
                            (V = s.right) >= d * g &&
                            (W = s.left) <= F &&
                            (G || V || W || H) &&
                            (r.loadHidden || ne(v[n])) &&
                            ((R && J < 3 && !p && (N < 3 || ee < 4)) ||
                              ie(v[n], u)))
                        ) {
                          if ((pe(v[n]), (c = !0), J > 9)) break;
                        } else
                          !c &&
                            R &&
                            !a &&
                            J < 4 &&
                            ee < 4 &&
                            N > 2 &&
                            (z[0] || r.preloadAfterLoad) &&
                            (z[0] ||
                              (!p &&
                                (G ||
                                  V ||
                                  W ||
                                  H ||
                                  "auto" != v[n][l](r.sizesAttr)))) &&
                            (a = z[0] || v[n]);
                    a && !c && pe(a);
                  }
                }),
                (oe = A(re)),
                (se = function (e) {
                  var t = e.target;
                  t._lazyCache
                    ? delete t._lazyCache
                    : (te(e),
                      y(t, r.loadedClass),
                      x(t, r.loadingClass),
                      b(t, le),
                      w(t, "lazyloaded"));
                }),
                (ae = E(se)),
                (le = function (e) {
                  ae({ target: e.target });
                }),
                (ce = function (e, t) {
                  var n = e.getAttribute("data-load-mode") || r.iframeLoadMode;
                  0 == n
                    ? e.contentWindow.location.replace(t)
                    : 1 == n && (e.src = t);
                }),
                (ue = function (e) {
                  var t,
                    n = e[l](r.srcsetAttr);
                  (t = r.customMedia[e[l]("data-media") || e[l]("media")]) &&
                    e.setAttribute("media", t),
                    n && e.setAttribute("srcset", n);
                }),
                (de = E(function (e, t, n, i, o) {
                  var s, a, c, d, p, h;
                  (p = w(e, "lazybeforeunveil", t)).defaultPrevented ||
                    (i &&
                      (n ? y(e, r.autosizesClass) : e.setAttribute("sizes", i)),
                    (a = e[l](r.srcsetAttr)),
                    (s = e[l](r.srcAttr)),
                    o && (d = (c = e.parentNode) && f.test(c.nodeName || "")),
                    (h = t.firesLoad || ("src" in e && (a || s || d))),
                    (p = { target: e }),
                    y(e, r.loadingClass),
                    h && (clearTimeout(q), (q = u(te, 2500)), b(e, le, !0)),
                    d && g.call(c.getElementsByTagName("source"), ue),
                    a
                      ? e.setAttribute("srcset", a)
                      : s &&
                        !d &&
                        (U.test(e.nodeName) ? ce(e, s) : (e.src = s)),
                    o && (a || d) && S(e, { src: s })),
                    e._lazyRace && delete e._lazyRace,
                    x(e, r.lazyClass),
                    C(function () {
                      var t = e.complete && e.naturalWidth > 1;
                      (h && !t) ||
                        (t && y(e, r.fastLoadedClass),
                        se(p),
                        (e._lazyCache = !0),
                        u(function () {
                          "_lazyCache" in e && delete e._lazyCache;
                        }, 9)),
                        "lazy" == e.loading && J--;
                    }, !0);
                })),
                (pe = function (e) {
                  if (!e._lazyRace) {
                    var t,
                      n = Y.test(e.nodeName),
                      i = n && (e[l](r.sizesAttr) || e[l]("sizes")),
                      o = "auto" == i;
                    ((!o && R) ||
                      !n ||
                      (!e[l]("src") && !e.srcset) ||
                      e.complete ||
                      v(e, r.errorClass) ||
                      !v(e, r.lazyClass)) &&
                      ((t = w(e, "lazyunveilread").detail),
                      o && P.updateElem(e, !0, e.offsetWidth),
                      (e._lazyRace = !0),
                      J++,
                      de(e, t, o, i, n));
                  }
                }),
                (fe = k(function () {
                  (r.loadMode = 3), oe();
                })),
                (he = function () {
                  3 == r.loadMode && (r.loadMode = 2), fe();
                }),
                (me = function () {
                  R ||
                    (n.now() - $ < 999
                      ? u(me, 999)
                      : ((R = !0),
                        (r.loadMode = 3),
                        oe(),
                        c("scroll", he, !0)));
                }),
                {
                  _: function () {
                    ($ = n.now()),
                      (i.elements = t.getElementsByClassName(r.lazyClass)),
                      (z = t.getElementsByClassName(
                        r.lazyClass + " " + r.preloadClass
                      )),
                      c("scroll", oe, !0),
                      c("resize", oe, !0),
                      c("pageshow", function (e) {
                        if (e.persisted) {
                          var n = t.querySelectorAll("." + r.loadingClass);
                          n.length &&
                            n.forEach &&
                            d(function () {
                              n.forEach(function (e) {
                                e.complete && pe(e);
                              });
                            });
                        }
                      }),
                      e.MutationObserver
                        ? new MutationObserver(oe).observe(o, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0,
                          })
                        : (o[a]("DOMNodeInserted", oe, !0),
                          o[a]("DOMAttrModified", oe, !0),
                          setInterval(oe, 999)),
                      c("hashchange", oe, !0),
                      [
                        "focus",
                        "mouseover",
                        "click",
                        "load",
                        "transitionend",
                        "animationend",
                      ].forEach(function (e) {
                        t[a](e, oe, !0);
                      }),
                      /d$|^c/.test(t.readyState)
                        ? me()
                        : (c("load", me),
                          t[a]("DOMContentLoaded", oe),
                          u(me, 2e4)),
                      i.elements.length ? (re(), C._lsFlush()) : oe();
                  },
                  checkElems: oe,
                  unveil: pe,
                  _aLSL: he,
                }),
              P =
                ((O = E(function (e, t, n, i) {
                  var r, o, s;
                  if (
                    ((e._lazysizesWidth = i),
                    (i += "px"),
                    e.setAttribute("sizes", i),
                    f.test(t.nodeName || ""))
                  )
                    for (
                      o = 0, s = (r = t.getElementsByTagName("source")).length;
                      o < s;
                      o++
                    )
                      r[o].setAttribute("sizes", i);
                  n.detail.dataAttr || S(e, n.detail);
                })),
                (B = function (e, t, n) {
                  var i,
                    r = e.parentNode;
                  r &&
                    ((n = T(e, r, n)),
                    (i = w(e, "lazybeforesizes", { width: n, dataAttr: !!t }))
                      .defaultPrevented ||
                      ((n = i.detail.width) &&
                        n !== e._lazysizesWidth &&
                        O(e, r, i, n)));
                }),
                (I = k(function () {
                  var e,
                    t = D.length;
                  if (t) for (e = 0; e < t; e++) B(D[e]);
                })),
                {
                  _: function () {
                    (D = t.getElementsByClassName(r.autosizesClass)),
                      c("resize", I);
                  },
                  checkElems: I,
                  updateElem: B,
                }),
              L = function () {
                !L.i && t.getElementsByClassName && ((L.i = !0), P._(), M._());
              };
            var D, O, B, I;
            var z,
              R,
              q,
              N,
              $,
              F,
              j,
              H,
              W,
              V,
              G,
              X,
              Y,
              U,
              Q,
              K,
              Z,
              J,
              ee,
              te,
              ne,
              ie,
              re,
              oe,
              se,
              ae,
              le,
              ce,
              ue,
              de,
              pe,
              fe,
              he,
              me;
            var ge, ve, ye, xe, be, we, Se;
            return (
              u(function () {
                r.init && L();
              }),
              (i = {
                cfg: r,
                autoSizer: P,
                loader: M,
                init: L,
                uP: S,
                aC: y,
                rC: x,
                hC: v,
                fire: w,
                gW: T,
                rAF: C,
              })
            );
          })(t, t.document, Date);
          (t.lazySizes = n), e.exports && (e.exports = n);
        })("undefined" != typeof window ? window : {});
      },
      842: function (e, t, n) {
        var i;
        (i = function () {
          return (function (e) {
            var t = {};
            function n(i) {
              if (t[i]) return t[i].exports;
              var r = (t[i] = { i: i, l: !1, exports: {} });
              return (
                e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
              );
            }
            return (
              (n.m = e),
              (n.c = t),
              (n.d = function (e, t, i) {
                n.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: i });
              }),
              (n.r = function (e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                  return e;
                var i = Object.create(null);
                if (
                  (n.r(i),
                  Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var r in e)
                    n.d(
                      i,
                      r,
                      function (t) {
                        return e[t];
                      }.bind(null, r)
                    );
                return i;
              }),
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, "a", t), t;
              }),
              (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (n.p = ""),
              n((n.s = 20))
            );
          })([
            function (e, t) {
              var i = {};
              (e.exports = i),
                (function () {
                  (i._baseDelta = 1e3 / 60),
                    (i._nextId = 0),
                    (i._seed = 0),
                    (i._nowStartTime = +new Date()),
                    (i._warnedOnce = {}),
                    (i._decomp = null),
                    (i.extend = function (e, t) {
                      var n, r;
                      "boolean" == typeof t
                        ? ((n = 2), (r = t))
                        : ((n = 1), (r = !0));
                      for (var o = n; o < arguments.length; o++) {
                        var s = arguments[o];
                        if (s)
                          for (var a in s)
                            r && s[a] && s[a].constructor === Object
                              ? e[a] && e[a].constructor !== Object
                                ? (e[a] = s[a])
                                : ((e[a] = e[a] || {}), i.extend(e[a], r, s[a]))
                              : (e[a] = s[a]);
                      }
                      return e;
                    }),
                    (i.clone = function (e, t) {
                      return i.extend({}, t, e);
                    }),
                    (i.keys = function (e) {
                      if (Object.keys) return Object.keys(e);
                      var t = [];
                      for (var n in e) t.push(n);
                      return t;
                    }),
                    (i.values = function (e) {
                      var t = [];
                      if (Object.keys) {
                        for (var n = Object.keys(e), i = 0; i < n.length; i++)
                          t.push(e[n[i]]);
                        return t;
                      }
                      for (var r in e) t.push(e[r]);
                      return t;
                    }),
                    (i.get = function (e, t, n, i) {
                      t = t.split(".").slice(n, i);
                      for (var r = 0; r < t.length; r += 1) e = e[t[r]];
                      return e;
                    }),
                    (i.set = function (e, t, n, r, o) {
                      var s = t.split(".").slice(r, o);
                      return (i.get(e, t, 0, -1)[s[s.length - 1]] = n), n;
                    }),
                    (i.shuffle = function (e) {
                      for (var t = e.length - 1; t > 0; t--) {
                        var n = Math.floor(i.random() * (t + 1)),
                          r = e[t];
                        (e[t] = e[n]), (e[n] = r);
                      }
                      return e;
                    }),
                    (i.choose = function (e) {
                      return e[Math.floor(i.random() * e.length)];
                    }),
                    (i.isElement = function (e) {
                      return "undefined" != typeof HTMLElement
                        ? e instanceof HTMLElement
                        : !!(e && e.nodeType && e.nodeName);
                    }),
                    (i.isArray = function (e) {
                      return (
                        "[object Array]" === Object.prototype.toString.call(e)
                      );
                    }),
                    (i.isFunction = function (e) {
                      return "function" == typeof e;
                    }),
                    (i.isPlainObject = function (e) {
                      return "object" == typeof e && e.constructor === Object;
                    }),
                    (i.isString = function (e) {
                      return "[object String]" === toString.call(e);
                    }),
                    (i.clamp = function (e, t, n) {
                      return e < t ? t : e > n ? n : e;
                    }),
                    (i.sign = function (e) {
                      return e < 0 ? -1 : 1;
                    }),
                    (i.now = function () {
                      if ("undefined" != typeof window && window.performance) {
                        if (window.performance.now)
                          return window.performance.now();
                        if (window.performance.webkitNow)
                          return window.performance.webkitNow();
                      }
                      return Date.now
                        ? Date.now()
                        : new Date() - i._nowStartTime;
                    }),
                    (i.random = function (t, n) {
                      return (
                        (n = void 0 !== n ? n : 1),
                        (t = void 0 !== t ? t : 0) + e() * (n - t)
                      );
                    });
                  var e = function () {
                    return (
                      (i._seed = (9301 * i._seed + 49297) % 233280),
                      i._seed / 233280
                    );
                  };
                  (i.colorToNumber = function (e) {
                    return (
                      3 == (e = e.replace("#", "")).length &&
                        (e =
                          e.charAt(0) +
                          e.charAt(0) +
                          e.charAt(1) +
                          e.charAt(1) +
                          e.charAt(2) +
                          e.charAt(2)),
                      parseInt(e, 16)
                    );
                  }),
                    (i.logLevel = 1),
                    (i.log = function () {
                      console &&
                        i.logLevel > 0 &&
                        i.logLevel <= 3 &&
                        console.log.apply(
                          console,
                          ["matter-js:"].concat(
                            Array.prototype.slice.call(arguments)
                          )
                        );
                    }),
                    (i.info = function () {
                      console &&
                        i.logLevel > 0 &&
                        i.logLevel <= 2 &&
                        console.info.apply(
                          console,
                          ["matter-js:"].concat(
                            Array.prototype.slice.call(arguments)
                          )
                        );
                    }),
                    (i.warn = function () {
                      console &&
                        i.logLevel > 0 &&
                        i.logLevel <= 3 &&
                        console.warn.apply(
                          console,
                          ["matter-js:"].concat(
                            Array.prototype.slice.call(arguments)
                          )
                        );
                    }),
                    (i.warnOnce = function () {
                      var e = Array.prototype.slice.call(arguments).join(" ");
                      i._warnedOnce[e] || (i.warn(e), (i._warnedOnce[e] = !0));
                    }),
                    (i.deprecated = function (e, t, n) {
                      e[t] = i.chain(function () {
                        i.warnOnce("🔅 deprecated 🔅", n);
                      }, e[t]);
                    }),
                    (i.nextId = function () {
                      return i._nextId++;
                    }),
                    (i.indexOf = function (e, t) {
                      if (e.indexOf) return e.indexOf(t);
                      for (var n = 0; n < e.length; n++)
                        if (e[n] === t) return n;
                      return -1;
                    }),
                    (i.map = function (e, t) {
                      if (e.map) return e.map(t);
                      for (var n = [], i = 0; i < e.length; i += 1)
                        n.push(t(e[i]));
                      return n;
                    }),
                    (i.topologicalSort = function (e) {
                      var t = [],
                        n = [],
                        r = [];
                      for (var o in e)
                        n[o] || r[o] || i._topologicalSort(o, n, r, e, t);
                      return t;
                    }),
                    (i._topologicalSort = function (e, t, n, r, o) {
                      var s = r[e] || [];
                      n[e] = !0;
                      for (var a = 0; a < s.length; a += 1) {
                        var l = s[a];
                        n[l] || t[l] || i._topologicalSort(l, t, n, r, o);
                      }
                      (n[e] = !1), (t[e] = !0), o.push(e);
                    }),
                    (i.chain = function () {
                      for (var e = [], t = 0; t < arguments.length; t += 1) {
                        var n = arguments[t];
                        n._chained ? e.push.apply(e, n._chained) : e.push(n);
                      }
                      var i = function () {
                        for (
                          var t,
                            n = new Array(arguments.length),
                            i = 0,
                            r = arguments.length;
                          i < r;
                          i++
                        )
                          n[i] = arguments[i];
                        for (i = 0; i < e.length; i += 1) {
                          var o = e[i].apply(t, n);
                          void 0 !== o && (t = o);
                        }
                        return t;
                      };
                      return (i._chained = e), i;
                    }),
                    (i.chainPathBefore = function (e, t, n) {
                      return i.set(e, t, i.chain(n, i.get(e, t)));
                    }),
                    (i.chainPathAfter = function (e, t, n) {
                      return i.set(e, t, i.chain(i.get(e, t), n));
                    }),
                    (i.setDecomp = function (e) {
                      i._decomp = e;
                    }),
                    (i.getDecomp = function () {
                      var e = i._decomp;
                      try {
                        e ||
                          "undefined" == typeof window ||
                          (e = window.decomp),
                          e || void 0 === n.g || (e = n.g.decomp);
                      } catch (t) {
                        e = null;
                      }
                      return e;
                    });
                })();
            },
            function (e, t) {
              var n = {};
              (e.exports = n),
                (n.create = function (e) {
                  var t = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
                  return e && n.update(t, e), t;
                }),
                (n.update = function (e, t, n) {
                  (e.min.x = 1 / 0),
                    (e.max.x = -1 / 0),
                    (e.min.y = 1 / 0),
                    (e.max.y = -1 / 0);
                  for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    r.x > e.max.x && (e.max.x = r.x),
                      r.x < e.min.x && (e.min.x = r.x),
                      r.y > e.max.y && (e.max.y = r.y),
                      r.y < e.min.y && (e.min.y = r.y);
                  }
                  n &&
                    (n.x > 0 ? (e.max.x += n.x) : (e.min.x += n.x),
                    n.y > 0 ? (e.max.y += n.y) : (e.min.y += n.y));
                }),
                (n.contains = function (e, t) {
                  return (
                    t.x >= e.min.x &&
                    t.x <= e.max.x &&
                    t.y >= e.min.y &&
                    t.y <= e.max.y
                  );
                }),
                (n.overlaps = function (e, t) {
                  return (
                    e.min.x <= t.max.x &&
                    e.max.x >= t.min.x &&
                    e.max.y >= t.min.y &&
                    e.min.y <= t.max.y
                  );
                }),
                (n.translate = function (e, t) {
                  (e.min.x += t.x),
                    (e.max.x += t.x),
                    (e.min.y += t.y),
                    (e.max.y += t.y);
                }),
                (n.shift = function (e, t) {
                  var n = e.max.x - e.min.x,
                    i = e.max.y - e.min.y;
                  (e.min.x = t.x),
                    (e.max.x = t.x + n),
                    (e.min.y = t.y),
                    (e.max.y = t.y + i);
                });
            },
            function (e, t) {
              var n = {};
              (e.exports = n),
                (n.create = function (e, t) {
                  return { x: e || 0, y: t || 0 };
                }),
                (n.clone = function (e) {
                  return { x: e.x, y: e.y };
                }),
                (n.magnitude = function (e) {
                  return Math.sqrt(e.x * e.x + e.y * e.y);
                }),
                (n.magnitudeSquared = function (e) {
                  return e.x * e.x + e.y * e.y;
                }),
                (n.rotate = function (e, t, n) {
                  var i = Math.cos(t),
                    r = Math.sin(t);
                  n || (n = {});
                  var o = e.x * i - e.y * r;
                  return (n.y = e.x * r + e.y * i), (n.x = o), n;
                }),
                (n.rotateAbout = function (e, t, n, i) {
                  var r = Math.cos(t),
                    o = Math.sin(t);
                  i || (i = {});
                  var s = n.x + ((e.x - n.x) * r - (e.y - n.y) * o);
                  return (
                    (i.y = n.y + ((e.x - n.x) * o + (e.y - n.y) * r)),
                    (i.x = s),
                    i
                  );
                }),
                (n.normalise = function (e) {
                  var t = n.magnitude(e);
                  return 0 === t ? { x: 0, y: 0 } : { x: e.x / t, y: e.y / t };
                }),
                (n.dot = function (e, t) {
                  return e.x * t.x + e.y * t.y;
                }),
                (n.cross = function (e, t) {
                  return e.x * t.y - e.y * t.x;
                }),
                (n.cross3 = function (e, t, n) {
                  return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x);
                }),
                (n.add = function (e, t, n) {
                  return n || (n = {}), (n.x = e.x + t.x), (n.y = e.y + t.y), n;
                }),
                (n.sub = function (e, t, n) {
                  return n || (n = {}), (n.x = e.x - t.x), (n.y = e.y - t.y), n;
                }),
                (n.mult = function (e, t) {
                  return { x: e.x * t, y: e.y * t };
                }),
                (n.div = function (e, t) {
                  return { x: e.x / t, y: e.y / t };
                }),
                (n.perp = function (e, t) {
                  return { x: (t = !0 === t ? -1 : 1) * -e.y, y: t * e.x };
                }),
                (n.neg = function (e) {
                  return { x: -e.x, y: -e.y };
                }),
                (n.angle = function (e, t) {
                  return Math.atan2(t.y - e.y, t.x - e.x);
                }),
                (n._temp = [
                  n.create(),
                  n.create(),
                  n.create(),
                  n.create(),
                  n.create(),
                  n.create(),
                ]);
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(2),
                o = n(0);
              (i.create = function (e, t) {
                for (var n = [], i = 0; i < e.length; i++) {
                  var r = e[i],
                    o = { x: r.x, y: r.y, index: i, body: t, isInternal: !1 };
                  n.push(o);
                }
                return n;
              }),
                (i.fromPath = function (e, t) {
                  var n = [];
                  return (
                    e.replace(
                      /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                      function (e, t, i) {
                        n.push({ x: parseFloat(t), y: parseFloat(i) });
                      }
                    ),
                    i.create(n, t)
                  );
                }),
                (i.centre = function (e) {
                  for (
                    var t, n, o, s = i.area(e, !0), a = { x: 0, y: 0 }, l = 0;
                    l < e.length;
                    l++
                  )
                    (o = (l + 1) % e.length),
                      (t = r.cross(e[l], e[o])),
                      (n = r.mult(r.add(e[l], e[o]), t)),
                      (a = r.add(a, n));
                  return r.div(a, 6 * s);
                }),
                (i.mean = function (e) {
                  for (var t = { x: 0, y: 0 }, n = 0; n < e.length; n++)
                    (t.x += e[n].x), (t.y += e[n].y);
                  return r.div(t, e.length);
                }),
                (i.area = function (e, t) {
                  for (var n = 0, i = e.length - 1, r = 0; r < e.length; r++)
                    (n += (e[i].x - e[r].x) * (e[i].y + e[r].y)), (i = r);
                  return t ? n / 2 : Math.abs(n) / 2;
                }),
                (i.inertia = function (e, t) {
                  for (var n, i, o = 0, s = 0, a = e, l = 0; l < a.length; l++)
                    (i = (l + 1) % a.length),
                      (o +=
                        (n = Math.abs(r.cross(a[i], a[l]))) *
                        (r.dot(a[i], a[i]) +
                          r.dot(a[i], a[l]) +
                          r.dot(a[l], a[l]))),
                      (s += n);
                  return (t / 6) * (o / s);
                }),
                (i.translate = function (e, t, n) {
                  n = void 0 !== n ? n : 1;
                  var i,
                    r = e.length,
                    o = t.x * n,
                    s = t.y * n;
                  for (i = 0; i < r; i++) (e[i].x += o), (e[i].y += s);
                  return e;
                }),
                (i.rotate = function (e, t, n) {
                  if (0 !== t) {
                    var i,
                      r,
                      o,
                      s,
                      a = Math.cos(t),
                      l = Math.sin(t),
                      c = n.x,
                      u = n.y,
                      d = e.length;
                    for (s = 0; s < d; s++)
                      (r = (i = e[s]).x - c),
                        (o = i.y - u),
                        (i.x = c + (r * a - o * l)),
                        (i.y = u + (r * l + o * a));
                    return e;
                  }
                }),
                (i.contains = function (e, t) {
                  for (
                    var n, i = t.x, r = t.y, o = e.length, s = e[o - 1], a = 0;
                    a < o;
                    a++
                  ) {
                    if (
                      ((n = e[a]),
                      (i - s.x) * (n.y - s.y) + (r - s.y) * (s.x - n.x) > 0)
                    )
                      return !1;
                    s = n;
                  }
                  return !0;
                }),
                (i.scale = function (e, t, n, o) {
                  if (1 === t && 1 === n) return e;
                  var s, a;
                  o = o || i.centre(e);
                  for (var l = 0; l < e.length; l++)
                    (s = e[l]),
                      (a = r.sub(s, o)),
                      (e[l].x = o.x + a.x * t),
                      (e[l].y = o.y + a.y * n);
                  return e;
                }),
                (i.chamfer = function (e, t, n, i, s) {
                  (t = "number" == typeof t ? [t] : t || [8]),
                    (n = void 0 !== n ? n : -1),
                    (i = i || 2),
                    (s = s || 14);
                  for (var a = [], l = 0; l < e.length; l++) {
                    var c = e[l - 1 >= 0 ? l - 1 : e.length - 1],
                      u = e[l],
                      d = e[(l + 1) % e.length],
                      p = t[l < t.length ? l : t.length - 1];
                    if (0 !== p) {
                      var f = r.normalise({ x: u.y - c.y, y: c.x - u.x }),
                        h = r.normalise({ x: d.y - u.y, y: u.x - d.x }),
                        m = Math.sqrt(2 * Math.pow(p, 2)),
                        g = r.mult(o.clone(f), p),
                        v = r.normalise(r.mult(r.add(f, h), 0.5)),
                        y = r.sub(u, r.mult(v, m)),
                        x = n;
                      -1 === n && (x = 1.75 * Math.pow(p, 0.32)),
                        (x = o.clamp(x, i, s)) % 2 == 1 && (x += 1);
                      for (
                        var b = Math.acos(r.dot(f, h)) / x, w = 0;
                        w < x;
                        w++
                      )
                        a.push(r.add(r.rotate(g, b * w), y));
                    } else a.push(u);
                  }
                  return a;
                }),
                (i.clockwiseSort = function (e) {
                  var t = i.mean(e);
                  return (
                    e.sort(function (e, n) {
                      return r.angle(t, e) - r.angle(t, n);
                    }),
                    e
                  );
                }),
                (i.isConvex = function (e) {
                  var t,
                    n,
                    i,
                    r,
                    o = 0,
                    s = e.length;
                  if (s < 3) return null;
                  for (t = 0; t < s; t++)
                    if (
                      ((i = (t + 2) % s),
                      (r =
                        (e[(n = (t + 1) % s)].x - e[t].x) * (e[i].y - e[n].y)),
                      (r -= (e[n].y - e[t].y) * (e[i].x - e[n].x)) < 0
                        ? (o |= 1)
                        : r > 0 && (o |= 2),
                      3 === o)
                    )
                      return !1;
                  return 0 !== o || null;
                }),
                (i.hull = function (e) {
                  var t,
                    n,
                    i = [],
                    o = [];
                  for (
                    (e = e.slice(0)).sort(function (e, t) {
                      var n = e.x - t.x;
                      return 0 !== n ? n : e.y - t.y;
                    }),
                      n = 0;
                    n < e.length;
                    n += 1
                  ) {
                    for (
                      t = e[n];
                      o.length >= 2 &&
                      r.cross3(o[o.length - 2], o[o.length - 1], t) <= 0;

                    )
                      o.pop();
                    o.push(t);
                  }
                  for (n = e.length - 1; n >= 0; n -= 1) {
                    for (
                      t = e[n];
                      i.length >= 2 &&
                      r.cross3(i[i.length - 2], i[i.length - 1], t) <= 0;

                    )
                      i.pop();
                    i.push(t);
                  }
                  return i.pop(), o.pop(), i.concat(o);
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(3),
                o = n(2),
                s = n(7),
                a = n(0),
                l = n(1),
                c = n(11);
              !(function () {
                (i._timeCorrection = !0),
                  (i._inertiaScale = 4),
                  (i._nextCollidingGroupId = 1),
                  (i._nextNonCollidingGroupId = -1),
                  (i._nextCategory = 1),
                  (i._baseDelta = 1e3 / 60),
                  (i.create = function (t) {
                    var n = {
                        id: a.nextId(),
                        type: "body",
                        label: "Body",
                        parts: [],
                        plugin: {},
                        angle: 0,
                        vertices: r.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                        position: { x: 0, y: 0 },
                        force: { x: 0, y: 0 },
                        torque: 0,
                        positionImpulse: { x: 0, y: 0 },
                        constraintImpulse: { x: 0, y: 0, angle: 0 },
                        totalContacts: 0,
                        speed: 0,
                        angularSpeed: 0,
                        velocity: { x: 0, y: 0 },
                        angularVelocity: 0,
                        isSensor: !1,
                        isStatic: !1,
                        isSleeping: !1,
                        motion: 0,
                        sleepThreshold: 60,
                        density: 0.001,
                        restitution: 0,
                        friction: 0.1,
                        frictionStatic: 0.5,
                        frictionAir: 0.01,
                        collisionFilter: {
                          category: 1,
                          mask: 4294967295,
                          group: 0,
                        },
                        slop: 0.05,
                        timeScale: 1,
                        render: {
                          visible: !0,
                          opacity: 1,
                          strokeStyle: null,
                          fillStyle: null,
                          lineWidth: null,
                          sprite: {
                            xScale: 1,
                            yScale: 1,
                            xOffset: 0,
                            yOffset: 0,
                          },
                        },
                        events: null,
                        bounds: null,
                        chamfer: null,
                        circleRadius: 0,
                        positionPrev: null,
                        anglePrev: 0,
                        parent: null,
                        axes: null,
                        area: 0,
                        mass: 0,
                        inertia: 0,
                        deltaTime: 1e3 / 60,
                        _original: null,
                      },
                      i = a.extend(n, t);
                    return e(i, t), i;
                  }),
                  (i.nextGroup = function (e) {
                    return e
                      ? i._nextNonCollidingGroupId--
                      : i._nextCollidingGroupId++;
                  }),
                  (i.nextCategory = function () {
                    return (
                      (i._nextCategory = i._nextCategory << 1), i._nextCategory
                    );
                  });
                var e = function (e, t) {
                  (t = t || {}),
                    i.set(e, {
                      bounds: e.bounds || l.create(e.vertices),
                      positionPrev: e.positionPrev || o.clone(e.position),
                      anglePrev: e.anglePrev || e.angle,
                      vertices: e.vertices,
                      parts: e.parts || [e],
                      isStatic: e.isStatic,
                      isSleeping: e.isSleeping,
                      parent: e.parent || e,
                    }),
                    r.rotate(e.vertices, e.angle, e.position),
                    c.rotate(e.axes, e.angle),
                    l.update(e.bounds, e.vertices, e.velocity),
                    i.set(e, {
                      axes: t.axes || e.axes,
                      area: t.area || e.area,
                      mass: t.mass || e.mass,
                      inertia: t.inertia || e.inertia,
                    });
                  var n = e.isStatic
                      ? "#14151f"
                      : a.choose([
                          "#f19648",
                          "#f5d259",
                          "#f55a3c",
                          "#063e7b",
                          "#ececd1",
                        ]),
                    s = e.isStatic ? "#555" : "#ccc",
                    u = e.isStatic && null === e.render.fillStyle ? 1 : 0;
                  (e.render.fillStyle = e.render.fillStyle || n),
                    (e.render.strokeStyle = e.render.strokeStyle || s),
                    (e.render.lineWidth = e.render.lineWidth || u),
                    (e.render.sprite.xOffset +=
                      -(e.bounds.min.x - e.position.x) /
                      (e.bounds.max.x - e.bounds.min.x)),
                    (e.render.sprite.yOffset +=
                      -(e.bounds.min.y - e.position.y) /
                      (e.bounds.max.y - e.bounds.min.y));
                };
                (i.set = function (e, t, n) {
                  var r;
                  for (r in ("string" == typeof t &&
                    ((r = t), ((t = {})[r] = n)),
                  t))
                    if (Object.prototype.hasOwnProperty.call(t, r))
                      switch (((n = t[r]), r)) {
                        case "isStatic":
                          i.setStatic(e, n);
                          break;
                        case "isSleeping":
                          s.set(e, n);
                          break;
                        case "mass":
                          i.setMass(e, n);
                          break;
                        case "density":
                          i.setDensity(e, n);
                          break;
                        case "inertia":
                          i.setInertia(e, n);
                          break;
                        case "vertices":
                          i.setVertices(e, n);
                          break;
                        case "position":
                          i.setPosition(e, n);
                          break;
                        case "angle":
                          i.setAngle(e, n);
                          break;
                        case "velocity":
                          i.setVelocity(e, n);
                          break;
                        case "angularVelocity":
                          i.setAngularVelocity(e, n);
                          break;
                        case "speed":
                          i.setSpeed(e, n);
                          break;
                        case "angularSpeed":
                          i.setAngularSpeed(e, n);
                          break;
                        case "parts":
                          i.setParts(e, n);
                          break;
                        case "centre":
                          i.setCentre(e, n);
                          break;
                        default:
                          e[r] = n;
                      }
                }),
                  (i.setStatic = function (e, t) {
                    for (var n = 0; n < e.parts.length; n++) {
                      var i = e.parts[n];
                      t
                        ? (i.isStatic ||
                            (i._original = {
                              restitution: i.restitution,
                              friction: i.friction,
                              mass: i.mass,
                              inertia: i.inertia,
                              density: i.density,
                              inverseMass: i.inverseMass,
                              inverseInertia: i.inverseInertia,
                            }),
                          (i.restitution = 0),
                          (i.friction = 1),
                          (i.mass = i.inertia = i.density = 1 / 0),
                          (i.inverseMass = i.inverseInertia = 0),
                          (i.positionPrev.x = i.position.x),
                          (i.positionPrev.y = i.position.y),
                          (i.anglePrev = i.angle),
                          (i.angularVelocity = 0),
                          (i.speed = 0),
                          (i.angularSpeed = 0),
                          (i.motion = 0))
                        : i._original &&
                          ((i.restitution = i._original.restitution),
                          (i.friction = i._original.friction),
                          (i.mass = i._original.mass),
                          (i.inertia = i._original.inertia),
                          (i.density = i._original.density),
                          (i.inverseMass = i._original.inverseMass),
                          (i.inverseInertia = i._original.inverseInertia),
                          (i._original = null)),
                        (i.isStatic = t);
                    }
                  }),
                  (i.setMass = function (e, t) {
                    var n = e.inertia / (e.mass / 6);
                    (e.inertia = n * (t / 6)),
                      (e.inverseInertia = 1 / e.inertia),
                      (e.mass = t),
                      (e.inverseMass = 1 / e.mass),
                      (e.density = e.mass / e.area);
                  }),
                  (i.setDensity = function (e, t) {
                    i.setMass(e, t * e.area), (e.density = t);
                  }),
                  (i.setInertia = function (e, t) {
                    (e.inertia = t), (e.inverseInertia = 1 / e.inertia);
                  }),
                  (i.setVertices = function (e, t) {
                    t[0].body === e
                      ? (e.vertices = t)
                      : (e.vertices = r.create(t, e)),
                      (e.axes = c.fromVertices(e.vertices)),
                      (e.area = r.area(e.vertices)),
                      i.setMass(e, e.density * e.area);
                    var n = r.centre(e.vertices);
                    r.translate(e.vertices, n, -1),
                      i.setInertia(
                        e,
                        i._inertiaScale * r.inertia(e.vertices, e.mass)
                      ),
                      r.translate(e.vertices, e.position),
                      l.update(e.bounds, e.vertices, e.velocity);
                  }),
                  (i.setParts = function (e, t, n) {
                    var o;
                    for (
                      t = t.slice(0),
                        e.parts.length = 0,
                        e.parts.push(e),
                        e.parent = e,
                        o = 0;
                      o < t.length;
                      o++
                    ) {
                      var s = t[o];
                      s !== e && ((s.parent = e), e.parts.push(s));
                    }
                    if (1 !== e.parts.length) {
                      if ((n = void 0 === n || n)) {
                        var a = [];
                        for (o = 0; o < t.length; o++)
                          a = a.concat(t[o].vertices);
                        r.clockwiseSort(a);
                        var l = r.hull(a),
                          c = r.centre(l);
                        i.setVertices(e, l), r.translate(e.vertices, c);
                      }
                      var u = i._totalProperties(e);
                      (e.area = u.area),
                        (e.parent = e),
                        (e.position.x = u.centre.x),
                        (e.position.y = u.centre.y),
                        (e.positionPrev.x = u.centre.x),
                        (e.positionPrev.y = u.centre.y),
                        i.setMass(e, u.mass),
                        i.setInertia(e, u.inertia),
                        i.setPosition(e, u.centre);
                    }
                  }),
                  (i.setCentre = function (e, t, n) {
                    n
                      ? ((e.positionPrev.x += t.x),
                        (e.positionPrev.y += t.y),
                        (e.position.x += t.x),
                        (e.position.y += t.y))
                      : ((e.positionPrev.x =
                          t.x - (e.position.x - e.positionPrev.x)),
                        (e.positionPrev.y =
                          t.y - (e.position.y - e.positionPrev.y)),
                        (e.position.x = t.x),
                        (e.position.y = t.y));
                  }),
                  (i.setPosition = function (e, t, n) {
                    var i = o.sub(t, e.position);
                    n
                      ? ((e.positionPrev.x = e.position.x),
                        (e.positionPrev.y = e.position.y),
                        (e.velocity.x = i.x),
                        (e.velocity.y = i.y),
                        (e.speed = o.magnitude(i)))
                      : ((e.positionPrev.x += i.x), (e.positionPrev.y += i.y));
                    for (var s = 0; s < e.parts.length; s++) {
                      var a = e.parts[s];
                      (a.position.x += i.x),
                        (a.position.y += i.y),
                        r.translate(a.vertices, i),
                        l.update(a.bounds, a.vertices, e.velocity);
                    }
                  }),
                  (i.setAngle = function (e, t, n) {
                    var i = t - e.angle;
                    n
                      ? ((e.anglePrev = e.angle),
                        (e.angularVelocity = i),
                        (e.angularSpeed = Math.abs(i)))
                      : (e.anglePrev += i);
                    for (var s = 0; s < e.parts.length; s++) {
                      var a = e.parts[s];
                      (a.angle += i),
                        r.rotate(a.vertices, i, e.position),
                        c.rotate(a.axes, i),
                        l.update(a.bounds, a.vertices, e.velocity),
                        s > 0 &&
                          o.rotateAbout(a.position, i, e.position, a.position);
                    }
                  }),
                  (i.setVelocity = function (e, t) {
                    var n = e.deltaTime / i._baseDelta;
                    (e.positionPrev.x = e.position.x - t.x * n),
                      (e.positionPrev.y = e.position.y - t.y * n),
                      (e.velocity.x = (e.position.x - e.positionPrev.x) / n),
                      (e.velocity.y = (e.position.y - e.positionPrev.y) / n),
                      (e.speed = o.magnitude(e.velocity));
                  }),
                  (i.getVelocity = function (e) {
                    var t = i._baseDelta / e.deltaTime;
                    return {
                      x: (e.position.x - e.positionPrev.x) * t,
                      y: (e.position.y - e.positionPrev.y) * t,
                    };
                  }),
                  (i.getSpeed = function (e) {
                    return o.magnitude(i.getVelocity(e));
                  }),
                  (i.setSpeed = function (e, t) {
                    i.setVelocity(e, o.mult(o.normalise(i.getVelocity(e)), t));
                  }),
                  (i.setAngularVelocity = function (e, t) {
                    var n = e.deltaTime / i._baseDelta;
                    (e.anglePrev = e.angle - t * n),
                      (e.angularVelocity = (e.angle - e.anglePrev) / n),
                      (e.angularSpeed = Math.abs(e.angularVelocity));
                  }),
                  (i.getAngularVelocity = function (e) {
                    return (
                      ((e.angle - e.anglePrev) * i._baseDelta) / e.deltaTime
                    );
                  }),
                  (i.getAngularSpeed = function (e) {
                    return Math.abs(i.getAngularVelocity(e));
                  }),
                  (i.setAngularSpeed = function (e, t) {
                    i.setAngularVelocity(
                      e,
                      a.sign(i.getAngularVelocity(e)) * t
                    );
                  }),
                  (i.translate = function (e, t, n) {
                    i.setPosition(e, o.add(e.position, t), n);
                  }),
                  (i.rotate = function (e, t, n, r) {
                    if (n) {
                      var o = Math.cos(t),
                        s = Math.sin(t),
                        a = e.position.x - n.x,
                        l = e.position.y - n.y;
                      i.setPosition(
                        e,
                        { x: n.x + (a * o - l * s), y: n.y + (a * s + l * o) },
                        r
                      ),
                        i.setAngle(e, e.angle + t, r);
                    } else i.setAngle(e, e.angle + t, r);
                  }),
                  (i.scale = function (e, t, n, o) {
                    var s = 0,
                      a = 0;
                    o = o || e.position;
                    for (var u = 0; u < e.parts.length; u++) {
                      var d = e.parts[u];
                      r.scale(d.vertices, t, n, o),
                        (d.axes = c.fromVertices(d.vertices)),
                        (d.area = r.area(d.vertices)),
                        i.setMass(d, e.density * d.area),
                        r.translate(d.vertices, {
                          x: -d.position.x,
                          y: -d.position.y,
                        }),
                        i.setInertia(
                          d,
                          i._inertiaScale * r.inertia(d.vertices, d.mass)
                        ),
                        r.translate(d.vertices, {
                          x: d.position.x,
                          y: d.position.y,
                        }),
                        u > 0 && ((s += d.area), (a += d.inertia)),
                        (d.position.x = o.x + (d.position.x - o.x) * t),
                        (d.position.y = o.y + (d.position.y - o.y) * n),
                        l.update(d.bounds, d.vertices, e.velocity);
                    }
                    e.parts.length > 1 &&
                      ((e.area = s),
                      e.isStatic ||
                        (i.setMass(e, e.density * s), i.setInertia(e, a))),
                      e.circleRadius &&
                        (t === n
                          ? (e.circleRadius *= t)
                          : (e.circleRadius = null));
                  }),
                  (i.update = function (e, t) {
                    var n =
                        (t = (void 0 !== t ? t : 1e3 / 60) * e.timeScale) * t,
                      s = i._timeCorrection ? t / (e.deltaTime || t) : 1,
                      u = 1 - e.frictionAir * (t / a._baseDelta),
                      d = (e.position.x - e.positionPrev.x) * s,
                      p = (e.position.y - e.positionPrev.y) * s;
                    (e.velocity.x = d * u + (e.force.x / e.mass) * n),
                      (e.velocity.y = p * u + (e.force.y / e.mass) * n),
                      (e.positionPrev.x = e.position.x),
                      (e.positionPrev.y = e.position.y),
                      (e.position.x += e.velocity.x),
                      (e.position.y += e.velocity.y),
                      (e.deltaTime = t),
                      (e.angularVelocity =
                        (e.angle - e.anglePrev) * u * s +
                        (e.torque / e.inertia) * n),
                      (e.anglePrev = e.angle),
                      (e.angle += e.angularVelocity);
                    for (var f = 0; f < e.parts.length; f++) {
                      var h = e.parts[f];
                      r.translate(h.vertices, e.velocity),
                        f > 0 &&
                          ((h.position.x += e.velocity.x),
                          (h.position.y += e.velocity.y)),
                        0 !== e.angularVelocity &&
                          (r.rotate(h.vertices, e.angularVelocity, e.position),
                          c.rotate(h.axes, e.angularVelocity),
                          f > 0 &&
                            o.rotateAbout(
                              h.position,
                              e.angularVelocity,
                              e.position,
                              h.position
                            )),
                        l.update(h.bounds, h.vertices, e.velocity);
                    }
                  }),
                  (i.updateVelocities = function (e) {
                    var t = i._baseDelta / e.deltaTime,
                      n = e.velocity;
                    (n.x = (e.position.x - e.positionPrev.x) * t),
                      (n.y = (e.position.y - e.positionPrev.y) * t),
                      (e.speed = Math.sqrt(n.x * n.x + n.y * n.y)),
                      (e.angularVelocity = (e.angle - e.anglePrev) * t),
                      (e.angularSpeed = Math.abs(e.angularVelocity));
                  }),
                  (i.applyForce = function (e, t, n) {
                    var i = t.x - e.position.x,
                      r = t.y - e.position.y;
                    (e.force.x += n.x),
                      (e.force.y += n.y),
                      (e.torque += i * n.y - r * n.x);
                  }),
                  (i._totalProperties = function (e) {
                    for (
                      var t = {
                          mass: 0,
                          area: 0,
                          inertia: 0,
                          centre: { x: 0, y: 0 },
                        },
                        n = 1 === e.parts.length ? 0 : 1;
                      n < e.parts.length;
                      n++
                    ) {
                      var i = e.parts[n],
                        r = i.mass !== 1 / 0 ? i.mass : 1;
                      (t.mass += r),
                        (t.area += i.area),
                        (t.inertia += i.inertia),
                        (t.centre = o.add(t.centre, o.mult(i.position, r)));
                    }
                    return (t.centre = o.div(t.centre, t.mass)), t;
                  });
              })();
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(0);
              (i.on = function (e, t, n) {
                for (var i, r = t.split(" "), o = 0; o < r.length; o++)
                  (i = r[o]),
                    (e.events = e.events || {}),
                    (e.events[i] = e.events[i] || []),
                    e.events[i].push(n);
                return n;
              }),
                (i.off = function (e, t, n) {
                  if (t) {
                    "function" == typeof t &&
                      ((n = t), (t = r.keys(e.events).join(" ")));
                    for (var i = t.split(" "), o = 0; o < i.length; o++) {
                      var s = e.events[i[o]],
                        a = [];
                      if (n && s)
                        for (var l = 0; l < s.length; l++)
                          s[l] !== n && a.push(s[l]);
                      e.events[i[o]] = a;
                    }
                  } else e.events = {};
                }),
                (i.trigger = function (e, t, n) {
                  var i,
                    o,
                    s,
                    a,
                    l = e.events;
                  if (l && r.keys(l).length > 0) {
                    n || (n = {}), (i = t.split(" "));
                    for (var c = 0; c < i.length; c++)
                      if ((s = l[(o = i[c])])) {
                        ((a = r.clone(n, !1)).name = o), (a.source = e);
                        for (var u = 0; u < s.length; u++) s[u].apply(e, [a]);
                      }
                  }
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(5),
                o = n(0),
                s = n(1),
                a = n(4);
              (i.create = function (e) {
                return o.extend(
                  {
                    id: o.nextId(),
                    type: "composite",
                    parent: null,
                    isModified: !1,
                    bodies: [],
                    constraints: [],
                    composites: [],
                    label: "Composite",
                    plugin: {},
                    cache: {
                      allBodies: null,
                      allConstraints: null,
                      allComposites: null,
                    },
                  },
                  e
                );
              }),
                (i.setModified = function (e, t, n, r) {
                  if (
                    ((e.isModified = t),
                    t &&
                      e.cache &&
                      ((e.cache.allBodies = null),
                      (e.cache.allConstraints = null),
                      (e.cache.allComposites = null)),
                    n && e.parent && i.setModified(e.parent, t, n, r),
                    r)
                  )
                    for (var o = 0; o < e.composites.length; o++) {
                      var s = e.composites[o];
                      i.setModified(s, t, n, r);
                    }
                }),
                (i.add = function (e, t) {
                  var n = [].concat(t);
                  r.trigger(e, "beforeAdd", { object: t });
                  for (var s = 0; s < n.length; s++) {
                    var a = n[s];
                    switch (a.type) {
                      case "body":
                        if (a.parent !== a) {
                          o.warn(
                            "Composite.add: skipped adding a compound body part (you must add its parent instead)"
                          );
                          break;
                        }
                        i.addBody(e, a);
                        break;
                      case "constraint":
                        i.addConstraint(e, a);
                        break;
                      case "composite":
                        i.addComposite(e, a);
                        break;
                      case "mouseConstraint":
                        i.addConstraint(e, a.constraint);
                    }
                  }
                  return r.trigger(e, "afterAdd", { object: t }), e;
                }),
                (i.remove = function (e, t, n) {
                  var o = [].concat(t);
                  r.trigger(e, "beforeRemove", { object: t });
                  for (var s = 0; s < o.length; s++) {
                    var a = o[s];
                    switch (a.type) {
                      case "body":
                        i.removeBody(e, a, n);
                        break;
                      case "constraint":
                        i.removeConstraint(e, a, n);
                        break;
                      case "composite":
                        i.removeComposite(e, a, n);
                        break;
                      case "mouseConstraint":
                        i.removeConstraint(e, a.constraint);
                    }
                  }
                  return r.trigger(e, "afterRemove", { object: t }), e;
                }),
                (i.addComposite = function (e, t) {
                  return (
                    e.composites.push(t),
                    (t.parent = e),
                    i.setModified(e, !0, !0, !1),
                    e
                  );
                }),
                (i.removeComposite = function (e, t, n) {
                  var r = o.indexOf(e.composites, t);
                  if (-1 !== r) {
                    var s = i.allBodies(t);
                    i.removeCompositeAt(e, r);
                    for (var a = 0; a < s.length; a++) s[a].sleepCounter = 0;
                  }
                  if (n)
                    for (a = 0; a < e.composites.length; a++)
                      i.removeComposite(e.composites[a], t, !0);
                  return e;
                }),
                (i.removeCompositeAt = function (e, t) {
                  return (
                    e.composites.splice(t, 1), i.setModified(e, !0, !0, !1), e
                  );
                }),
                (i.addBody = function (e, t) {
                  return e.bodies.push(t), i.setModified(e, !0, !0, !1), e;
                }),
                (i.removeBody = function (e, t, n) {
                  var r = o.indexOf(e.bodies, t);
                  if (
                    (-1 !== r && (i.removeBodyAt(e, r), (t.sleepCounter = 0)),
                    n)
                  )
                    for (var s = 0; s < e.composites.length; s++)
                      i.removeBody(e.composites[s], t, !0);
                  return e;
                }),
                (i.removeBodyAt = function (e, t) {
                  return e.bodies.splice(t, 1), i.setModified(e, !0, !0, !1), e;
                }),
                (i.addConstraint = function (e, t) {
                  return e.constraints.push(t), i.setModified(e, !0, !0, !1), e;
                }),
                (i.removeConstraint = function (e, t, n) {
                  var r = o.indexOf(e.constraints, t);
                  if ((-1 !== r && i.removeConstraintAt(e, r), n))
                    for (var s = 0; s < e.composites.length; s++)
                      i.removeConstraint(e.composites[s], t, !0);
                  return e;
                }),
                (i.removeConstraintAt = function (e, t) {
                  return (
                    e.constraints.splice(t, 1), i.setModified(e, !0, !0, !1), e
                  );
                }),
                (i.clear = function (e, t, n) {
                  if (n)
                    for (var r = 0; r < e.composites.length; r++)
                      i.clear(e.composites[r], t, !0);
                  return (
                    t
                      ? (e.bodies = e.bodies.filter(function (e) {
                          return e.isStatic;
                        }))
                      : (e.bodies.length = 0),
                    (e.constraints.length = 0),
                    (e.composites.length = 0),
                    i.setModified(e, !0, !0, !1),
                    e
                  );
                }),
                (i.allBodies = function (e) {
                  if (e.cache && e.cache.allBodies) return e.cache.allBodies;
                  for (
                    var t = [].concat(e.bodies), n = 0;
                    n < e.composites.length;
                    n++
                  )
                    t = t.concat(i.allBodies(e.composites[n]));
                  return e.cache && (e.cache.allBodies = t), t;
                }),
                (i.allConstraints = function (e) {
                  if (e.cache && e.cache.allConstraints)
                    return e.cache.allConstraints;
                  for (
                    var t = [].concat(e.constraints), n = 0;
                    n < e.composites.length;
                    n++
                  )
                    t = t.concat(i.allConstraints(e.composites[n]));
                  return e.cache && (e.cache.allConstraints = t), t;
                }),
                (i.allComposites = function (e) {
                  if (e.cache && e.cache.allComposites)
                    return e.cache.allComposites;
                  for (
                    var t = [].concat(e.composites), n = 0;
                    n < e.composites.length;
                    n++
                  )
                    t = t.concat(i.allComposites(e.composites[n]));
                  return e.cache && (e.cache.allComposites = t), t;
                }),
                (i.get = function (e, t, n) {
                  var r, o;
                  switch (n) {
                    case "body":
                      r = i.allBodies(e);
                      break;
                    case "constraint":
                      r = i.allConstraints(e);
                      break;
                    case "composite":
                      r = i.allComposites(e).concat(e);
                  }
                  return r
                    ? 0 ===
                      (o = r.filter(function (e) {
                        return e.id.toString() === t.toString();
                      })).length
                      ? null
                      : o[0]
                    : null;
                }),
                (i.move = function (e, t, n) {
                  return i.remove(e, t), i.add(n, t), e;
                }),
                (i.rebase = function (e) {
                  for (
                    var t = i
                        .allBodies(e)
                        .concat(i.allConstraints(e))
                        .concat(i.allComposites(e)),
                      n = 0;
                    n < t.length;
                    n++
                  )
                    t[n].id = o.nextId();
                  return e;
                }),
                (i.translate = function (e, t, n) {
                  for (
                    var r = n ? i.allBodies(e) : e.bodies, o = 0;
                    o < r.length;
                    o++
                  )
                    a.translate(r[o], t);
                  return e;
                }),
                (i.rotate = function (e, t, n, r) {
                  for (
                    var o = Math.cos(t),
                      s = Math.sin(t),
                      l = r ? i.allBodies(e) : e.bodies,
                      c = 0;
                    c < l.length;
                    c++
                  ) {
                    var u = l[c],
                      d = u.position.x - n.x,
                      p = u.position.y - n.y;
                    a.setPosition(u, {
                      x: n.x + (d * o - p * s),
                      y: n.y + (d * s + p * o),
                    }),
                      a.rotate(u, t);
                  }
                  return e;
                }),
                (i.scale = function (e, t, n, r, o) {
                  for (
                    var s = o ? i.allBodies(e) : e.bodies, l = 0;
                    l < s.length;
                    l++
                  ) {
                    var c = s[l],
                      u = c.position.x - r.x,
                      d = c.position.y - r.y;
                    a.setPosition(c, { x: r.x + u * t, y: r.y + d * n }),
                      a.scale(c, t, n);
                  }
                  return e;
                }),
                (i.bounds = function (e) {
                  for (
                    var t = i.allBodies(e), n = [], r = 0;
                    r < t.length;
                    r += 1
                  ) {
                    var o = t[r];
                    n.push(o.bounds.min, o.bounds.max);
                  }
                  return s.create(n);
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(4),
                o = n(5),
                s = n(0);
              (i._motionWakeThreshold = 0.18),
                (i._motionSleepThreshold = 0.08),
                (i._minBias = 0.9),
                (i.update = function (e, t) {
                  for (
                    var n = t / s._baseDelta,
                      o = i._motionSleepThreshold,
                      a = 0;
                    a < e.length;
                    a++
                  ) {
                    var l = e[a],
                      c = r.getSpeed(l),
                      u = r.getAngularSpeed(l),
                      d = c * c + u * u;
                    if (0 === l.force.x && 0 === l.force.y) {
                      var p = Math.min(l.motion, d),
                        f = Math.max(l.motion, d);
                      (l.motion = i._minBias * p + (1 - i._minBias) * f),
                        l.sleepThreshold > 0 && l.motion < o
                          ? ((l.sleepCounter += 1),
                            l.sleepCounter >= l.sleepThreshold / n &&
                              i.set(l, !0))
                          : l.sleepCounter > 0 && (l.sleepCounter -= 1);
                    } else i.set(l, !1);
                  }
                }),
                (i.afterCollisions = function (e) {
                  for (
                    var t = i._motionSleepThreshold, n = 0;
                    n < e.length;
                    n++
                  ) {
                    var r = e[n];
                    if (r.isActive) {
                      var o = r.collision,
                        s = o.bodyA.parent,
                        a = o.bodyB.parent;
                      if (
                        !(
                          (s.isSleeping && a.isSleeping) ||
                          s.isStatic ||
                          a.isStatic
                        ) &&
                        (s.isSleeping || a.isSleeping)
                      ) {
                        var l = s.isSleeping && !s.isStatic ? s : a,
                          c = l === s ? a : s;
                        !l.isStatic && c.motion > t && i.set(l, !1);
                      }
                    }
                  }
                }),
                (i.set = function (e, t) {
                  var n = e.isSleeping;
                  t
                    ? ((e.isSleeping = !0),
                      (e.sleepCounter = e.sleepThreshold),
                      (e.positionImpulse.x = 0),
                      (e.positionImpulse.y = 0),
                      (e.positionPrev.x = e.position.x),
                      (e.positionPrev.y = e.position.y),
                      (e.anglePrev = e.angle),
                      (e.speed = 0),
                      (e.angularSpeed = 0),
                      (e.motion = 0),
                      n || o.trigger(e, "sleepStart"))
                    : ((e.isSleeping = !1),
                      (e.sleepCounter = 0),
                      n && o.trigger(e, "sleepEnd"));
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r,
                o,
                s,
                a = n(3),
                l = n(9);
              (r = []),
                (o = { overlap: 0, axis: null }),
                (s = { overlap: 0, axis: null }),
                (i.create = function (e, t) {
                  return {
                    pair: null,
                    collided: !1,
                    bodyA: e,
                    bodyB: t,
                    parentA: e.parent,
                    parentB: t.parent,
                    depth: 0,
                    normal: { x: 0, y: 0 },
                    tangent: { x: 0, y: 0 },
                    penetration: { x: 0, y: 0 },
                    supports: [null, null],
                    supportCount: 0,
                  };
                }),
                (i.collides = function (e, t, n) {
                  if (
                    (i._overlapAxes(o, e.vertices, t.vertices, e.axes),
                    o.overlap <= 0)
                  )
                    return null;
                  if (
                    (i._overlapAxes(s, t.vertices, e.vertices, t.axes),
                    s.overlap <= 0)
                  )
                    return null;
                  var r,
                    c,
                    u = n && n.table[l.id(e, t)];
                  u
                    ? (r = u.collision)
                    : (((r = i.create(e, t)).collided = !0),
                      (r.bodyA = e.id < t.id ? e : t),
                      (r.bodyB = e.id < t.id ? t : e),
                      (r.parentA = r.bodyA.parent),
                      (r.parentB = r.bodyB.parent)),
                    (e = r.bodyA),
                    (t = r.bodyB),
                    (c = o.overlap < s.overlap ? o : s);
                  var d = r.normal,
                    p = r.tangent,
                    f = r.penetration,
                    h = r.supports,
                    m = c.overlap,
                    g = c.axis,
                    v = g.x,
                    y = g.y;
                  v * (t.position.x - e.position.x) +
                    y * (t.position.y - e.position.y) >=
                    0 && ((v = -v), (y = -y)),
                    (d.x = v),
                    (d.y = y),
                    (p.x = -y),
                    (p.y = v),
                    (f.x = v * m),
                    (f.y = y * m),
                    (r.depth = m);
                  var x = i._findSupports(e, t, d, 1),
                    b = 0;
                  if (
                    (a.contains(e.vertices, x[0]) && (h[b++] = x[0]),
                    a.contains(e.vertices, x[1]) && (h[b++] = x[1]),
                    b < 2)
                  ) {
                    var w = i._findSupports(t, e, d, -1);
                    a.contains(t.vertices, w[0]) && (h[b++] = w[0]),
                      b < 2 && a.contains(t.vertices, w[1]) && (h[b++] = w[1]);
                  }
                  return 0 === b && (h[b++] = x[0]), (r.supportCount = b), r;
                }),
                (i._overlapAxes = function (e, t, n, i) {
                  var r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u = t.length,
                    d = n.length,
                    p = t[0].x,
                    f = t[0].y,
                    h = n[0].x,
                    m = n[0].y,
                    g = i.length,
                    v = Number.MAX_VALUE,
                    y = 0;
                  for (l = 0; l < g; l++) {
                    var x = i[l],
                      b = x.x,
                      w = x.y,
                      S = p * b + f * w,
                      _ = h * b + m * w,
                      T = S,
                      C = _;
                    for (c = 1; c < u; c += 1)
                      (a = t[c].x * b + t[c].y * w) > T
                        ? (T = a)
                        : a < S && (S = a);
                    for (c = 1; c < d; c += 1)
                      (a = n[c].x * b + n[c].y * w) > C
                        ? (C = a)
                        : a < _ && (_ = a);
                    if (
                      (r = (o = T - _) < (s = C - S) ? o : s) < v &&
                      ((v = r), (y = l), r <= 0)
                    )
                      break;
                  }
                  (e.axis = i[y]), (e.overlap = v);
                }),
                (i._findSupports = function (e, t, n, i) {
                  var o,
                    s,
                    a,
                    l = t.vertices,
                    c = l.length,
                    u = e.position.x,
                    d = e.position.y,
                    p = n.x * i,
                    f = n.y * i,
                    h = l[0],
                    m = h,
                    g = p * (u - m.x) + f * (d - m.y);
                  for (a = 1; a < c; a += 1)
                    (s = p * (u - (m = l[a]).x) + f * (d - m.y)) < g &&
                      ((g = s), (h = m));
                  return (
                    (g =
                      p * (u - (o = l[(c + h.index - 1) % c]).x) +
                      f * (d - o.y)),
                    p * (u - (m = l[(h.index + 1) % c]).x) + f * (d - m.y) < g
                      ? ((r[0] = h), (r[1] = m), r)
                      : ((r[0] = h), (r[1] = o), r)
                  );
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(16);
              (i.create = function (e, t) {
                var n = e.bodyA,
                  o = e.bodyB,
                  s = {
                    id: i.id(n, o),
                    bodyA: n,
                    bodyB: o,
                    collision: e,
                    contacts: [r.create(), r.create()],
                    contactCount: 0,
                    separation: 0,
                    isActive: !0,
                    isSensor: n.isSensor || o.isSensor,
                    timeCreated: t,
                    timeUpdated: t,
                    inverseMass: 0,
                    friction: 0,
                    frictionStatic: 0,
                    restitution: 0,
                    slop: 0,
                  };
                return i.update(s, e, t), s;
              }),
                (i.update = function (e, t, n) {
                  var i = t.supports,
                    r = t.supportCount,
                    o = e.contacts,
                    s = t.parentA,
                    a = t.parentB;
                  (e.isActive = !0),
                    (e.timeUpdated = n),
                    (e.collision = t),
                    (e.separation = t.depth),
                    (e.inverseMass = s.inverseMass + a.inverseMass),
                    (e.friction =
                      s.friction < a.friction ? s.friction : a.friction),
                    (e.frictionStatic =
                      s.frictionStatic > a.frictionStatic
                        ? s.frictionStatic
                        : a.frictionStatic),
                    (e.restitution =
                      s.restitution > a.restitution
                        ? s.restitution
                        : a.restitution),
                    (e.slop = s.slop > a.slop ? s.slop : a.slop),
                    (e.contactCount = r),
                    (t.pair = e);
                  var l = i[0],
                    c = o[0],
                    u = i[1],
                    d = o[1];
                  (d.vertex !== l && c.vertex !== u) ||
                    ((o[1] = c), (o[0] = c = d), (d = o[1])),
                    (c.vertex = l),
                    (d.vertex = u);
                }),
                (i.setActive = function (e, t, n) {
                  t
                    ? ((e.isActive = !0), (e.timeUpdated = n))
                    : ((e.isActive = !1), (e.contactCount = 0));
                }),
                (i.id = function (e, t) {
                  return e.id < t.id
                    ? e.id.toString(36) + ":" + t.id.toString(36)
                    : t.id.toString(36) + ":" + e.id.toString(36);
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(3),
                o = n(2),
                s = n(7),
                a = n(1),
                l = n(11),
                c = n(0);
              (i._warming = 0.4),
                (i._torqueDampen = 1),
                (i._minLength = 1e-6),
                (i.create = function (e) {
                  var t = e;
                  t.bodyA && !t.pointA && (t.pointA = { x: 0, y: 0 }),
                    t.bodyB && !t.pointB && (t.pointB = { x: 0, y: 0 });
                  var n = t.bodyA
                      ? o.add(t.bodyA.position, t.pointA)
                      : t.pointA,
                    i = t.bodyB ? o.add(t.bodyB.position, t.pointB) : t.pointB,
                    r = o.magnitude(o.sub(n, i));
                  (t.length = void 0 !== t.length ? t.length : r),
                    (t.id = t.id || c.nextId()),
                    (t.label = t.label || "Constraint"),
                    (t.type = "constraint"),
                    (t.stiffness = t.stiffness || (t.length > 0 ? 1 : 0.7)),
                    (t.damping = t.damping || 0),
                    (t.angularStiffness = t.angularStiffness || 0),
                    (t.angleA = t.bodyA ? t.bodyA.angle : t.angleA),
                    (t.angleB = t.bodyB ? t.bodyB.angle : t.angleB),
                    (t.plugin = {});
                  var s = {
                    visible: !0,
                    lineWidth: 2,
                    strokeStyle: "#ffffff",
                    type: "line",
                    anchors: !0,
                  };
                  return (
                    0 === t.length && t.stiffness > 0.1
                      ? ((s.type = "pin"), (s.anchors = !1))
                      : t.stiffness < 0.9 && (s.type = "spring"),
                    (t.render = c.extend(s, t.render)),
                    t
                  );
                }),
                (i.preSolveAll = function (e) {
                  for (var t = 0; t < e.length; t += 1) {
                    var n = e[t],
                      i = n.constraintImpulse;
                    n.isStatic ||
                      (0 === i.x && 0 === i.y && 0 === i.angle) ||
                      ((n.position.x += i.x),
                      (n.position.y += i.y),
                      (n.angle += i.angle));
                  }
                }),
                (i.solveAll = function (e, t) {
                  for (
                    var n = c.clamp(t / c._baseDelta, 0, 1), r = 0;
                    r < e.length;
                    r += 1
                  ) {
                    var o = e[r],
                      s = !o.bodyA || (o.bodyA && o.bodyA.isStatic),
                      a = !o.bodyB || (o.bodyB && o.bodyB.isStatic);
                    (s || a) && i.solve(e[r], n);
                  }
                  for (r = 0; r < e.length; r += 1)
                    (s = !(o = e[r]).bodyA || (o.bodyA && o.bodyA.isStatic)),
                      (a = !o.bodyB || (o.bodyB && o.bodyB.isStatic)),
                      s || a || i.solve(e[r], n);
                }),
                (i.solve = function (e, t) {
                  var n = e.bodyA,
                    r = e.bodyB,
                    s = e.pointA,
                    a = e.pointB;
                  if (n || r) {
                    n &&
                      !n.isStatic &&
                      (o.rotate(s, n.angle - e.angleA, s),
                      (e.angleA = n.angle)),
                      r &&
                        !r.isStatic &&
                        (o.rotate(a, r.angle - e.angleB, a),
                        (e.angleB = r.angle));
                    var l = s,
                      c = a;
                    if (
                      (n && (l = o.add(n.position, s)),
                      r && (c = o.add(r.position, a)),
                      l && c)
                    ) {
                      var u = o.sub(l, c),
                        d = o.magnitude(u);
                      d < i._minLength && (d = i._minLength);
                      var p,
                        f,
                        h,
                        m,
                        g,
                        v = (d - e.length) / d,
                        y =
                          e.stiffness >= 1 || 0 === e.length
                            ? e.stiffness * t
                            : e.stiffness * t * t,
                        x = e.damping * t,
                        b = o.mult(u, v * y),
                        w = (n ? n.inverseMass : 0) + (r ? r.inverseMass : 0),
                        S =
                          w +
                          ((n ? n.inverseInertia : 0) +
                            (r ? r.inverseInertia : 0));
                      if (x > 0) {
                        var _ = o.create();
                        (h = o.div(u, d)),
                          (g = o.sub(
                            (r && o.sub(r.position, r.positionPrev)) || _,
                            (n && o.sub(n.position, n.positionPrev)) || _
                          )),
                          (m = o.dot(h, g));
                      }
                      n &&
                        !n.isStatic &&
                        ((f = n.inverseMass / w),
                        (n.constraintImpulse.x -= b.x * f),
                        (n.constraintImpulse.y -= b.y * f),
                        (n.position.x -= b.x * f),
                        (n.position.y -= b.y * f),
                        x > 0 &&
                          ((n.positionPrev.x -= x * h.x * m * f),
                          (n.positionPrev.y -= x * h.y * m * f)),
                        (p =
                          (o.cross(s, b) / S) *
                          i._torqueDampen *
                          n.inverseInertia *
                          (1 - e.angularStiffness)),
                        (n.constraintImpulse.angle -= p),
                        (n.angle -= p)),
                        r &&
                          !r.isStatic &&
                          ((f = r.inverseMass / w),
                          (r.constraintImpulse.x += b.x * f),
                          (r.constraintImpulse.y += b.y * f),
                          (r.position.x += b.x * f),
                          (r.position.y += b.y * f),
                          x > 0 &&
                            ((r.positionPrev.x += x * h.x * m * f),
                            (r.positionPrev.y += x * h.y * m * f)),
                          (p =
                            (o.cross(a, b) / S) *
                            i._torqueDampen *
                            r.inverseInertia *
                            (1 - e.angularStiffness)),
                          (r.constraintImpulse.angle += p),
                          (r.angle += p));
                    }
                  }
                }),
                (i.postSolveAll = function (e) {
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t],
                      c = n.constraintImpulse;
                    if (
                      !(n.isStatic || (0 === c.x && 0 === c.y && 0 === c.angle))
                    ) {
                      s.set(n, !1);
                      for (var u = 0; u < n.parts.length; u++) {
                        var d = n.parts[u];
                        r.translate(d.vertices, c),
                          u > 0 &&
                            ((d.position.x += c.x), (d.position.y += c.y)),
                          0 !== c.angle &&
                            (r.rotate(d.vertices, c.angle, n.position),
                            l.rotate(d.axes, c.angle),
                            u > 0 &&
                              o.rotateAbout(
                                d.position,
                                c.angle,
                                n.position,
                                d.position
                              )),
                          a.update(d.bounds, d.vertices, n.velocity);
                      }
                      (c.angle *= i._warming),
                        (c.x *= i._warming),
                        (c.y *= i._warming);
                    }
                  }
                }),
                (i.pointAWorld = function (e) {
                  return {
                    x:
                      (e.bodyA ? e.bodyA.position.x : 0) +
                      (e.pointA ? e.pointA.x : 0),
                    y:
                      (e.bodyA ? e.bodyA.position.y : 0) +
                      (e.pointA ? e.pointA.y : 0),
                  };
                }),
                (i.pointBWorld = function (e) {
                  return {
                    x:
                      (e.bodyB ? e.bodyB.position.x : 0) +
                      (e.pointB ? e.pointB.x : 0),
                    y:
                      (e.bodyB ? e.bodyB.position.y : 0) +
                      (e.pointB ? e.pointB.y : 0),
                  };
                }),
                (i.currentLength = function (e) {
                  var t =
                      (e.bodyA ? e.bodyA.position.x : 0) +
                      (e.pointA ? e.pointA.x : 0),
                    n =
                      (e.bodyA ? e.bodyA.position.y : 0) +
                      (e.pointA ? e.pointA.y : 0),
                    i =
                      t -
                      ((e.bodyB ? e.bodyB.position.x : 0) +
                        (e.pointB ? e.pointB.x : 0)),
                    r =
                      n -
                      ((e.bodyB ? e.bodyB.position.y : 0) +
                        (e.pointB ? e.pointB.y : 0));
                  return Math.sqrt(i * i + r * r);
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(2),
                o = n(0);
              (i.fromVertices = function (e) {
                for (var t = {}, n = 0; n < e.length; n++) {
                  var i = (n + 1) % e.length,
                    s = r.normalise({ x: e[i].y - e[n].y, y: e[n].x - e[i].x }),
                    a = 0 === s.y ? 1 / 0 : s.x / s.y;
                  t[(a = a.toFixed(3).toString())] = s;
                }
                return o.values(t);
              }),
                (i.rotate = function (e, t) {
                  if (0 !== t)
                    for (
                      var n = Math.cos(t), i = Math.sin(t), r = 0;
                      r < e.length;
                      r++
                    ) {
                      var o,
                        s = e[r];
                      (o = s.x * n - s.y * i),
                        (s.y = s.x * i + s.y * n),
                        (s.x = o);
                    }
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(3),
                o = n(0),
                s = n(4),
                a = n(1),
                l = n(2);
              (i.rectangle = function (e, t, n, i, a) {
                a = a || {};
                var l = {
                  label: "Rectangle Body",
                  position: { x: e, y: t },
                  vertices: r.fromPath(
                    "L 0 0 L " + n + " 0 L " + n + " " + i + " L 0 " + i
                  ),
                };
                if (a.chamfer) {
                  var c = a.chamfer;
                  (l.vertices = r.chamfer(
                    l.vertices,
                    c.radius,
                    c.quality,
                    c.qualityMin,
                    c.qualityMax
                  )),
                    delete a.chamfer;
                }
                return s.create(o.extend({}, l, a));
              }),
                (i.trapezoid = function (e, t, n, i, a, l) {
                  (l = l || {}),
                    a >= 1 &&
                      o.warn("Bodies.trapezoid: slope parameter must be < 1.");
                  var c,
                    u = n * (a *= 0.5),
                    d = u + (1 - 2 * a) * n,
                    p = d + u;
                  c =
                    a < 0.5
                      ? "L 0 0 L " +
                        u +
                        " " +
                        -i +
                        " L " +
                        d +
                        " " +
                        -i +
                        " L " +
                        p +
                        " 0"
                      : "L 0 0 L " + d + " " + -i + " L " + p + " 0";
                  var f = {
                    label: "Trapezoid Body",
                    position: { x: e, y: t },
                    vertices: r.fromPath(c),
                  };
                  if (l.chamfer) {
                    var h = l.chamfer;
                    (f.vertices = r.chamfer(
                      f.vertices,
                      h.radius,
                      h.quality,
                      h.qualityMin,
                      h.qualityMax
                    )),
                      delete l.chamfer;
                  }
                  return s.create(o.extend({}, f, l));
                }),
                (i.circle = function (e, t, n, r, s) {
                  r = r || {};
                  var a = { label: "Circle Body", circleRadius: n };
                  s = s || 25;
                  var l = Math.ceil(Math.max(10, Math.min(s, n)));
                  return (
                    l % 2 == 1 && (l += 1),
                    i.polygon(e, t, l, n, o.extend({}, a, r))
                  );
                }),
                (i.polygon = function (e, t, n, a, l) {
                  if (((l = l || {}), n < 3)) return i.circle(e, t, a, l);
                  for (
                    var c = (2 * Math.PI) / n, u = "", d = 0.5 * c, p = 0;
                    p < n;
                    p += 1
                  ) {
                    var f = d + p * c,
                      h = Math.cos(f) * a,
                      m = Math.sin(f) * a;
                    u += "L " + h.toFixed(3) + " " + m.toFixed(3) + " ";
                  }
                  var g = {
                    label: "Polygon Body",
                    position: { x: e, y: t },
                    vertices: r.fromPath(u),
                  };
                  if (l.chamfer) {
                    var v = l.chamfer;
                    (g.vertices = r.chamfer(
                      g.vertices,
                      v.radius,
                      v.quality,
                      v.qualityMin,
                      v.qualityMax
                    )),
                      delete l.chamfer;
                  }
                  return s.create(o.extend({}, g, l));
                }),
                (i.fromVertices = function (e, t, n, i, c, u, d, p) {
                  var f,
                    h,
                    m,
                    g,
                    v,
                    y,
                    x,
                    b,
                    w,
                    S,
                    _ = o.getDecomp();
                  for (
                    f = Boolean(_ && _.quickDecomp),
                      i = i || {},
                      m = [],
                      c = void 0 !== c && c,
                      u = void 0 !== u ? u : 0.01,
                      d = void 0 !== d ? d : 10,
                      p = void 0 !== p ? p : 0.01,
                      o.isArray(n[0]) || (n = [n]),
                      w = 0;
                    w < n.length;
                    w += 1
                  )
                    if (
                      ((v = n[w]),
                      !(g = r.isConvex(v)) &&
                        !f &&
                        o.warnOnce(
                          "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                        ),
                      g || !f)
                    )
                      (v = g ? r.clockwiseSort(v) : r.hull(v)),
                        m.push({ position: { x: e, y: t }, vertices: v });
                    else {
                      var T = v.map(function (e) {
                        return [e.x, e.y];
                      });
                      _.makeCCW(T),
                        !1 !== u && _.removeCollinearPoints(T, u),
                        !1 !== p &&
                          _.removeDuplicatePoints &&
                          _.removeDuplicatePoints(T, p);
                      var C = _.quickDecomp(T);
                      for (y = 0; y < C.length; y++) {
                        var E = C[y].map(function (e) {
                          return { x: e[0], y: e[1] };
                        });
                        (d > 0 && r.area(E) < d) ||
                          m.push({ position: r.centre(E), vertices: E });
                      }
                    }
                  for (y = 0; y < m.length; y++)
                    m[y] = s.create(o.extend(m[y], i));
                  if (c)
                    for (y = 0; y < m.length; y++) {
                      var A = m[y];
                      for (x = y + 1; x < m.length; x++) {
                        var k = m[x];
                        if (a.overlaps(A.bounds, k.bounds)) {
                          var M = A.vertices,
                            P = k.vertices;
                          for (b = 0; b < A.vertices.length; b++)
                            for (S = 0; S < k.vertices.length; S++) {
                              var L = l.magnitudeSquared(
                                  l.sub(M[(b + 1) % M.length], P[S])
                                ),
                                D = l.magnitudeSquared(
                                  l.sub(M[b], P[(S + 1) % P.length])
                                );
                              L < 5 &&
                                D < 5 &&
                                ((M[b].isInternal = !0),
                                (P[S].isInternal = !0));
                            }
                        }
                      }
                    }
                  return m.length > 1
                    ? ((h = s.create(o.extend({ parts: m.slice(0) }, i))),
                      s.setPosition(h, { x: e, y: t }),
                      h)
                    : m[0];
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(0),
                o = n(8);
              (i.create = function (e) {
                return r.extend({ bodies: [], collisions: [], pairs: null }, e);
              }),
                (i.setBodies = function (e, t) {
                  e.bodies = t.slice(0);
                }),
                (i.clear = function (e) {
                  (e.bodies = []), (e.collisions = []);
                }),
                (i.collisions = function (e) {
                  var t,
                    n,
                    r = e.pairs,
                    s = e.bodies,
                    a = s.length,
                    l = i.canCollide,
                    c = o.collides,
                    u = e.collisions,
                    d = 0;
                  for (s.sort(i._compareBoundsX), t = 0; t < a; t++) {
                    var p = s[t],
                      f = p.bounds,
                      h = p.bounds.max.x,
                      m = p.bounds.max.y,
                      g = p.bounds.min.y,
                      v = p.isStatic || p.isSleeping,
                      y = p.parts.length,
                      x = 1 === y;
                    for (n = t + 1; n < a; n++) {
                      var b = s[n];
                      if ((k = b.bounds).min.x > h) break;
                      if (
                        !(m < k.min.y || g > k.max.y) &&
                        (!v || (!b.isStatic && !b.isSleeping)) &&
                        l(p.collisionFilter, b.collisionFilter)
                      ) {
                        var w = b.parts.length;
                        if (x && 1 === w) (E = c(p, b, r)) && (u[d++] = E);
                        else
                          for (
                            var S = w > 1 ? 1 : 0, _ = y > 1 ? 1 : 0;
                            _ < y;
                            _++
                          )
                            for (
                              var T = p.parts[_], C = ((f = T.bounds), S);
                              C < w;
                              C++
                            ) {
                              var E,
                                A = b.parts[C],
                                k = A.bounds;
                              f.min.x > k.max.x ||
                                f.max.x < k.min.x ||
                                f.max.y < k.min.y ||
                                f.min.y > k.max.y ||
                                ((E = c(T, A, r)) && (u[d++] = E));
                            }
                      }
                    }
                  }
                  return u.length !== d && (u.length = d), u;
                }),
                (i.canCollide = function (e, t) {
                  return e.group === t.group && 0 !== e.group
                    ? e.group > 0
                    : !!(e.mask & t.category) && !!(t.mask & e.category);
                }),
                (i._compareBoundsX = function (e, t) {
                  return e.bounds.min.x - t.bounds.min.x;
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(0);
              (i.create = function (e) {
                var t = {};
                return (
                  e ||
                    r.log(
                      "Mouse.create: element was undefined, defaulting to document.body",
                      "warn"
                    ),
                  (t.element = e || document.body),
                  (t.absolute = { x: 0, y: 0 }),
                  (t.position = { x: 0, y: 0 }),
                  (t.mousedownPosition = { x: 0, y: 0 }),
                  (t.mouseupPosition = { x: 0, y: 0 }),
                  (t.offset = { x: 0, y: 0 }),
                  (t.scale = { x: 1, y: 1 }),
                  (t.wheelDelta = 0),
                  (t.button = -1),
                  (t.pixelRatio =
                    parseInt(t.element.getAttribute("data-pixel-ratio"), 10) ||
                    1),
                  (t.sourceEvents = {
                    mousemove: null,
                    mousedown: null,
                    mouseup: null,
                    mousewheel: null,
                  }),
                  (t.mousemove = function (e) {
                    var n = i._getRelativeMousePosition(
                      e,
                      t.element,
                      t.pixelRatio
                    );
                    e.changedTouches && ((t.button = 0), e.preventDefault()),
                      (t.absolute.x = n.x),
                      (t.absolute.y = n.y),
                      (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                      (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                      (t.sourceEvents.mousemove = e);
                  }),
                  (t.mousedown = function (e) {
                    var n = i._getRelativeMousePosition(
                      e,
                      t.element,
                      t.pixelRatio
                    );
                    e.changedTouches
                      ? ((t.button = 0), e.preventDefault())
                      : (t.button = e.button),
                      (t.absolute.x = n.x),
                      (t.absolute.y = n.y),
                      (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                      (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                      (t.mousedownPosition.x = t.position.x),
                      (t.mousedownPosition.y = t.position.y),
                      (t.sourceEvents.mousedown = e);
                  }),
                  (t.mouseup = function (e) {
                    var n = i._getRelativeMousePosition(
                      e,
                      t.element,
                      t.pixelRatio
                    );
                    e.changedTouches && e.preventDefault(),
                      (t.button = -1),
                      (t.absolute.x = n.x),
                      (t.absolute.y = n.y),
                      (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                      (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                      (t.mouseupPosition.x = t.position.x),
                      (t.mouseupPosition.y = t.position.y),
                      (t.sourceEvents.mouseup = e);
                  }),
                  (t.mousewheel = function (e) {
                    (t.wheelDelta = Math.max(
                      -1,
                      Math.min(1, e.wheelDelta || -e.detail)
                    )),
                      e.preventDefault(),
                      (t.sourceEvents.mousewheel = e);
                  }),
                  i.setElement(t, t.element),
                  t
                );
              }),
                (i.setElement = function (e, t) {
                  (e.element = t),
                    t.addEventListener("mousemove", e.mousemove, {
                      passive: !0,
                    }),
                    t.addEventListener("mousedown", e.mousedown, {
                      passive: !0,
                    }),
                    t.addEventListener("mouseup", e.mouseup, { passive: !0 }),
                    t.addEventListener("wheel", e.mousewheel, { passive: !1 }),
                    t.addEventListener("touchmove", e.mousemove, {
                      passive: !1,
                    }),
                    t.addEventListener("touchstart", e.mousedown, {
                      passive: !1,
                    }),
                    t.addEventListener("touchend", e.mouseup, { passive: !1 });
                }),
                (i.clearSourceEvents = function (e) {
                  (e.sourceEvents.mousemove = null),
                    (e.sourceEvents.mousedown = null),
                    (e.sourceEvents.mouseup = null),
                    (e.sourceEvents.mousewheel = null),
                    (e.wheelDelta = 0);
                }),
                (i.setOffset = function (e, t) {
                  (e.offset.x = t.x),
                    (e.offset.y = t.y),
                    (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
                    (e.position.y = e.absolute.y * e.scale.y + e.offset.y);
                }),
                (i.setScale = function (e, t) {
                  (e.scale.x = t.x),
                    (e.scale.y = t.y),
                    (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
                    (e.position.y = e.absolute.y * e.scale.y + e.offset.y);
                }),
                (i._getRelativeMousePosition = function (e, t, n) {
                  var i,
                    r,
                    o = t.getBoundingClientRect(),
                    s =
                      document.documentElement ||
                      document.body.parentNode ||
                      document.body,
                    a =
                      void 0 !== window.pageXOffset
                        ? window.pageXOffset
                        : s.scrollLeft,
                    l =
                      void 0 !== window.pageYOffset
                        ? window.pageYOffset
                        : s.scrollTop,
                    c = e.changedTouches;
                  return (
                    c
                      ? ((i = c[0].pageX - o.left - a),
                        (r = c[0].pageY - o.top - l))
                      : ((i = e.pageX - o.left - a), (r = e.pageY - o.top - l)),
                    {
                      x: i / ((t.clientWidth / (t.width || t.clientWidth)) * n),
                      y:
                        r /
                        ((t.clientHeight / (t.height || t.clientHeight)) * n),
                    }
                  );
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(0);
              (i._registry = {}),
                (i.register = function (e) {
                  if (
                    (i.isPlugin(e) ||
                      r.warn(
                        "Plugin.register:",
                        i.toString(e),
                        "does not implement all required fields."
                      ),
                    e.name in i._registry)
                  ) {
                    var t = i._registry[e.name],
                      n = i.versionParse(e.version).number,
                      o = i.versionParse(t.version).number;
                    n > o
                      ? (r.warn(
                          "Plugin.register:",
                          i.toString(t),
                          "was upgraded to",
                          i.toString(e)
                        ),
                        (i._registry[e.name] = e))
                      : n < o
                      ? r.warn(
                          "Plugin.register:",
                          i.toString(t),
                          "can not be downgraded to",
                          i.toString(e)
                        )
                      : e !== t &&
                        r.warn(
                          "Plugin.register:",
                          i.toString(e),
                          "is already registered to different plugin object"
                        );
                  } else i._registry[e.name] = e;
                  return e;
                }),
                (i.resolve = function (e) {
                  return i._registry[i.dependencyParse(e).name];
                }),
                (i.toString = function (e) {
                  return "string" == typeof e
                    ? e
                    : (e.name || "anonymous") +
                        "@" +
                        (e.version || e.range || "0.0.0");
                }),
                (i.isPlugin = function (e) {
                  return e && e.name && e.version && e.install;
                }),
                (i.isUsed = function (e, t) {
                  return e.used.indexOf(t) > -1;
                }),
                (i.isFor = function (e, t) {
                  var n = e.for && i.dependencyParse(e.for);
                  return (
                    !e.for ||
                    (t.name === n.name &&
                      i.versionSatisfies(t.version, n.range))
                  );
                }),
                (i.use = function (e, t) {
                  if (
                    ((e.uses = (e.uses || []).concat(t || [])),
                    0 !== e.uses.length)
                  ) {
                    for (
                      var n = i.dependencies(e),
                        o = r.topologicalSort(n),
                        s = [],
                        a = 0;
                      a < o.length;
                      a += 1
                    )
                      if (o[a] !== e.name) {
                        var l = i.resolve(o[a]);
                        l
                          ? i.isUsed(e, l.name) ||
                            (i.isFor(l, e) ||
                              (r.warn(
                                "Plugin.use:",
                                i.toString(l),
                                "is for",
                                l.for,
                                "but installed on",
                                i.toString(e) + "."
                              ),
                              (l._warned = !0)),
                            l.install
                              ? l.install(e)
                              : (r.warn(
                                  "Plugin.use:",
                                  i.toString(l),
                                  "does not specify an install function."
                                ),
                                (l._warned = !0)),
                            l._warned
                              ? (s.push("🔶 " + i.toString(l)),
                                delete l._warned)
                              : s.push("✅ " + i.toString(l)),
                            e.used.push(l.name))
                          : s.push("❌ " + o[a]);
                      }
                    s.length > 0 && r.info(s.join("  "));
                  } else
                    r.warn(
                      "Plugin.use:",
                      i.toString(e),
                      "does not specify any dependencies to install."
                    );
                }),
                (i.dependencies = function (e, t) {
                  var n = i.dependencyParse(e),
                    o = n.name;
                  if (!(o in (t = t || {}))) {
                    (e = i.resolve(e) || e),
                      (t[o] = r.map(e.uses || [], function (t) {
                        i.isPlugin(t) && i.register(t);
                        var o = i.dependencyParse(t),
                          s = i.resolve(t);
                        return (
                          s && !i.versionSatisfies(s.version, o.range)
                            ? (r.warn(
                                "Plugin.dependencies:",
                                i.toString(s),
                                "does not satisfy",
                                i.toString(o),
                                "used by",
                                i.toString(n) + "."
                              ),
                              (s._warned = !0),
                              (e._warned = !0))
                            : s ||
                              (r.warn(
                                "Plugin.dependencies:",
                                i.toString(t),
                                "used by",
                                i.toString(n),
                                "could not be resolved."
                              ),
                              (e._warned = !0)),
                          o.name
                        );
                      }));
                    for (var s = 0; s < t[o].length; s += 1)
                      i.dependencies(t[o][s], t);
                    return t;
                  }
                }),
                (i.dependencyParse = function (e) {
                  return r.isString(e)
                    ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(
                        e
                      ) ||
                        r.warn(
                          "Plugin.dependencyParse:",
                          e,
                          "is not a valid dependency string."
                        ),
                      { name: e.split("@")[0], range: e.split("@")[1] || "*" })
                    : { name: e.name, range: e.range || e.version };
                }),
                (i.versionParse = function (e) {
                  var t =
                    /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                  t.test(e) ||
                    r.warn(
                      "Plugin.versionParse:",
                      e,
                      "is not a valid version or range."
                    );
                  var n = t.exec(e),
                    i = Number(n[4]),
                    o = Number(n[5]),
                    s = Number(n[6]);
                  return {
                    isRange: Boolean(n[1] || n[2]),
                    version: n[3],
                    range: e,
                    operator: n[1] || n[2] || "",
                    major: i,
                    minor: o,
                    patch: s,
                    parts: [i, o, s],
                    prerelease: n[7],
                    number: 1e8 * i + 1e4 * o + s,
                  };
                }),
                (i.versionSatisfies = function (e, t) {
                  t = t || "*";
                  var n = i.versionParse(t),
                    r = i.versionParse(e);
                  if (n.isRange) {
                    if ("*" === n.operator || "*" === e) return !0;
                    if (">" === n.operator) return r.number > n.number;
                    if (">=" === n.operator) return r.number >= n.number;
                    if ("~" === n.operator)
                      return (
                        r.major === n.major &&
                        r.minor === n.minor &&
                        r.patch >= n.patch
                      );
                    if ("^" === n.operator)
                      return n.major > 0
                        ? r.major === n.major && r.number >= n.number
                        : n.minor > 0
                        ? r.minor === n.minor && r.patch >= n.patch
                        : r.patch === n.patch;
                  }
                  return e === t || "*" === e;
                });
            },
            function (e, t) {
              var n = {};
              (e.exports = n),
                (n.create = function (e) {
                  return { vertex: e, normalImpulse: 0, tangentImpulse: 0 };
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(7),
                o = n(18),
                s = n(13),
                a = n(19),
                l = n(5),
                c = n(6),
                u = n(10),
                d = n(0),
                p = n(4);
              (i._deltaMax = 1e3 / 60),
                (i.create = function (e) {
                  e = e || {};
                  var t = d.extend(
                    {
                      positionIterations: 6,
                      velocityIterations: 4,
                      constraintIterations: 2,
                      enableSleeping: !1,
                      events: [],
                      plugin: {},
                      gravity: { x: 0, y: 1, scale: 0.001 },
                      timing: {
                        timestamp: 0,
                        timeScale: 1,
                        lastDelta: 0,
                        lastElapsed: 0,
                        lastUpdatesPerFrame: 0,
                      },
                    },
                    e
                  );
                  return (
                    (t.world = e.world || c.create({ label: "World" })),
                    (t.pairs = e.pairs || a.create()),
                    (t.detector = e.detector || s.create()),
                    (t.detector.pairs = t.pairs),
                    (t.grid = { buckets: [] }),
                    (t.world.gravity = t.gravity),
                    (t.broadphase = t.grid),
                    (t.metrics = {}),
                    t
                  );
                }),
                (i.update = function (e, t) {
                  var n,
                    p = d.now(),
                    f = e.world,
                    h = e.detector,
                    m = e.pairs,
                    g = e.timing,
                    v = g.timestamp;
                  t > i._deltaMax &&
                    d.warnOnce(
                      "Matter.Engine.update: delta argument is recommended to be less than or equal to",
                      i._deltaMax.toFixed(3),
                      "ms."
                    ),
                    (t = void 0 !== t ? t : d._baseDelta),
                    (t *= g.timeScale),
                    (g.timestamp += t),
                    (g.lastDelta = t);
                  var y = { timestamp: g.timestamp, delta: t };
                  l.trigger(e, "beforeUpdate", y);
                  var x = c.allBodies(f),
                    b = c.allConstraints(f);
                  for (
                    f.isModified &&
                      (s.setBodies(h, x), c.setModified(f, !1, !1, !0)),
                      e.enableSleeping && r.update(x, t),
                      i._bodiesApplyGravity(x, e.gravity),
                      t > 0 && i._bodiesUpdate(x, t),
                      l.trigger(e, "beforeSolve", y),
                      u.preSolveAll(x),
                      n = 0;
                    n < e.constraintIterations;
                    n++
                  )
                    u.solveAll(b, t);
                  u.postSolveAll(x);
                  var w = s.collisions(h);
                  a.update(m, w, v),
                    e.enableSleeping && r.afterCollisions(m.list),
                    m.collisionStart.length > 0 &&
                      l.trigger(e, "collisionStart", {
                        pairs: m.collisionStart,
                        timestamp: g.timestamp,
                        delta: t,
                      });
                  var S = d.clamp(20 / e.positionIterations, 0, 1);
                  for (
                    o.preSolvePosition(m.list), n = 0;
                    n < e.positionIterations;
                    n++
                  )
                    o.solvePosition(m.list, t, S);
                  for (
                    o.postSolvePosition(x), u.preSolveAll(x), n = 0;
                    n < e.constraintIterations;
                    n++
                  )
                    u.solveAll(b, t);
                  for (
                    u.postSolveAll(x), o.preSolveVelocity(m.list), n = 0;
                    n < e.velocityIterations;
                    n++
                  )
                    o.solveVelocity(m.list, t);
                  return (
                    i._bodiesUpdateVelocities(x),
                    m.collisionActive.length > 0 &&
                      l.trigger(e, "collisionActive", {
                        pairs: m.collisionActive,
                        timestamp: g.timestamp,
                        delta: t,
                      }),
                    m.collisionEnd.length > 0 &&
                      l.trigger(e, "collisionEnd", {
                        pairs: m.collisionEnd,
                        timestamp: g.timestamp,
                        delta: t,
                      }),
                    i._bodiesClearForces(x),
                    l.trigger(e, "afterUpdate", y),
                    (e.timing.lastElapsed = d.now() - p),
                    e
                  );
                }),
                (i.merge = function (e, t) {
                  if ((d.extend(e, t), t.world)) {
                    (e.world = t.world), i.clear(e);
                    for (
                      var n = c.allBodies(e.world), o = 0;
                      o < n.length;
                      o++
                    ) {
                      var s = n[o];
                      r.set(s, !1), (s.id = d.nextId());
                    }
                  }
                }),
                (i.clear = function (e) {
                  a.clear(e.pairs), s.clear(e.detector);
                }),
                (i._bodiesClearForces = function (e) {
                  for (var t = e.length, n = 0; n < t; n++) {
                    var i = e[n];
                    (i.force.x = 0), (i.force.y = 0), (i.torque = 0);
                  }
                }),
                (i._bodiesApplyGravity = function (e, t) {
                  var n = void 0 !== t.scale ? t.scale : 0.001,
                    i = e.length;
                  if ((0 !== t.x || 0 !== t.y) && 0 !== n)
                    for (var r = 0; r < i; r++) {
                      var o = e[r];
                      o.isStatic ||
                        o.isSleeping ||
                        ((o.force.y += o.mass * t.y * n),
                        (o.force.x += o.mass * t.x * n));
                    }
                }),
                (i._bodiesUpdate = function (e, t) {
                  for (var n = e.length, i = 0; i < n; i++) {
                    var r = e[i];
                    r.isStatic || r.isSleeping || p.update(r, t);
                  }
                }),
                (i._bodiesUpdateVelocities = function (e) {
                  for (var t = e.length, n = 0; n < t; n++)
                    p.updateVelocities(e[n]);
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(3),
                o = n(0),
                s = n(1);
              (i._restingThresh = 2),
                (i._restingThreshTangent = Math.sqrt(6)),
                (i._positionDampen = 0.9),
                (i._positionWarming = 0.8),
                (i._frictionNormalMultiplier = 5),
                (i._frictionMaxStatic = Number.MAX_VALUE),
                (i.preSolvePosition = function (e) {
                  var t,
                    n,
                    i,
                    r = e.length;
                  for (t = 0; t < r; t++)
                    (n = e[t]).isActive &&
                      ((i = n.contactCount),
                      (n.collision.parentA.totalContacts += i),
                      (n.collision.parentB.totalContacts += i));
                }),
                (i.solvePosition = function (e, t, n) {
                  var r,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    f = i._positionDampen * (n || 1),
                    h = o.clamp(t / o._baseDelta, 0, 1),
                    m = e.length;
                  for (r = 0; r < m; r++)
                    (s = e[r]).isActive &&
                      !s.isSensor &&
                      ((l = (a = s.collision).parentA),
                      (c = a.parentB),
                      (u = a.normal),
                      (s.separation =
                        a.depth +
                        u.x * (c.positionImpulse.x - l.positionImpulse.x) +
                        u.y * (c.positionImpulse.y - l.positionImpulse.y)));
                  for (r = 0; r < m; r++)
                    (s = e[r]).isActive &&
                      !s.isSensor &&
                      ((l = (a = s.collision).parentA),
                      (c = a.parentB),
                      (u = a.normal),
                      (p = s.separation - s.slop * h),
                      (l.isStatic || c.isStatic) && (p *= 2),
                      l.isStatic ||
                        l.isSleeping ||
                        ((d = f / l.totalContacts),
                        (l.positionImpulse.x += u.x * p * d),
                        (l.positionImpulse.y += u.y * p * d)),
                      c.isStatic ||
                        c.isSleeping ||
                        ((d = f / c.totalContacts),
                        (c.positionImpulse.x -= u.x * p * d),
                        (c.positionImpulse.y -= u.y * p * d)));
                }),
                (i.postSolvePosition = function (e) {
                  for (
                    var t = i._positionWarming,
                      n = e.length,
                      o = r.translate,
                      a = s.update,
                      l = 0;
                    l < n;
                    l++
                  ) {
                    var c = e[l],
                      u = c.positionImpulse,
                      d = u.x,
                      p = u.y,
                      f = c.velocity;
                    if (((c.totalContacts = 0), 0 !== d || 0 !== p)) {
                      for (var h = 0; h < c.parts.length; h++) {
                        var m = c.parts[h];
                        o(m.vertices, u),
                          a(m.bounds, m.vertices, f),
                          (m.position.x += d),
                          (m.position.y += p);
                      }
                      (c.positionPrev.x += d),
                        (c.positionPrev.y += p),
                        d * f.x + p * f.y < 0
                          ? ((u.x = 0), (u.y = 0))
                          : ((u.x *= t), (u.y *= t));
                    }
                  }
                }),
                (i.preSolveVelocity = function (e) {
                  var t,
                    n,
                    i = e.length;
                  for (t = 0; t < i; t++) {
                    var r = e[t];
                    if (r.isActive && !r.isSensor) {
                      var o = r.contacts,
                        s = r.contactCount,
                        a = r.collision,
                        l = a.parentA,
                        c = a.parentB,
                        u = a.normal,
                        d = a.tangent;
                      for (n = 0; n < s; n++) {
                        var p = o[n],
                          f = p.vertex,
                          h = p.normalImpulse,
                          m = p.tangentImpulse;
                        if (0 !== h || 0 !== m) {
                          var g = u.x * h + d.x * m,
                            v = u.y * h + d.y * m;
                          l.isStatic ||
                            l.isSleeping ||
                            ((l.positionPrev.x += g * l.inverseMass),
                            (l.positionPrev.y += v * l.inverseMass),
                            (l.anglePrev +=
                              l.inverseInertia *
                              ((f.x - l.position.x) * v -
                                (f.y - l.position.y) * g))),
                            c.isStatic ||
                              c.isSleeping ||
                              ((c.positionPrev.x -= g * c.inverseMass),
                              (c.positionPrev.y -= v * c.inverseMass),
                              (c.anglePrev -=
                                c.inverseInertia *
                                ((f.x - c.position.x) * v -
                                  (f.y - c.position.y) * g)));
                        }
                      }
                    }
                  }
                }),
                (i.solveVelocity = function (e, t) {
                  var n,
                    r,
                    s,
                    a,
                    l = t / o._baseDelta,
                    c = l * l * l,
                    u = -i._restingThresh * l,
                    d = i._restingThreshTangent,
                    p = i._frictionNormalMultiplier * l,
                    f = i._frictionMaxStatic,
                    h = e.length;
                  for (s = 0; s < h; s++) {
                    var m = e[s];
                    if (m.isActive && !m.isSensor) {
                      var g = m.collision,
                        v = g.parentA,
                        y = g.parentB,
                        x = g.normal.x,
                        b = g.normal.y,
                        w = g.tangent.x,
                        S = g.tangent.y,
                        _ = m.inverseMass,
                        T = m.friction * m.frictionStatic * p,
                        C = m.contacts,
                        E = m.contactCount,
                        A = 1 / E,
                        k = v.position.x - v.positionPrev.x,
                        M = v.position.y - v.positionPrev.y,
                        P = v.angle - v.anglePrev,
                        L = y.position.x - y.positionPrev.x,
                        D = y.position.y - y.positionPrev.y,
                        O = y.angle - y.anglePrev;
                      for (a = 0; a < E; a++) {
                        var B = C[a],
                          I = B.vertex,
                          z = I.x - v.position.x,
                          R = I.y - v.position.y,
                          q = I.x - y.position.x,
                          N = I.y - y.position.y,
                          $ = k - R * P - (L - N * O),
                          F = M + z * P - (D + q * O),
                          j = x * $ + b * F,
                          H = w * $ + S * F,
                          W = m.separation + j,
                          V = Math.min(W, 1),
                          G = (V = W < 0 ? 0 : V) * T;
                        H < -G || H > G
                          ? ((r = H > 0 ? H : -H),
                            (n = m.friction * (H > 0 ? 1 : -1) * c) < -r
                              ? (n = -r)
                              : n > r && (n = r))
                          : ((n = H), (r = f));
                        var X = z * b - R * x,
                          Y = q * b - N * x,
                          U =
                            A /
                            (_ +
                              v.inverseInertia * X * X +
                              y.inverseInertia * Y * Y),
                          Q = (1 + m.restitution) * j * U;
                        if (((n *= U), j < u)) B.normalImpulse = 0;
                        else {
                          var K = B.normalImpulse;
                          (B.normalImpulse += Q),
                            B.normalImpulse > 0 && (B.normalImpulse = 0),
                            (Q = B.normalImpulse - K);
                        }
                        if (H < -d || H > d) B.tangentImpulse = 0;
                        else {
                          var Z = B.tangentImpulse;
                          (B.tangentImpulse += n),
                            B.tangentImpulse < -r && (B.tangentImpulse = -r),
                            B.tangentImpulse > r && (B.tangentImpulse = r),
                            (n = B.tangentImpulse - Z);
                        }
                        var J = x * Q + w * n,
                          ee = b * Q + S * n;
                        v.isStatic ||
                          v.isSleeping ||
                          ((v.positionPrev.x += J * v.inverseMass),
                          (v.positionPrev.y += ee * v.inverseMass),
                          (v.anglePrev += (z * ee - R * J) * v.inverseInertia)),
                          y.isStatic ||
                            y.isSleeping ||
                            ((y.positionPrev.x -= J * y.inverseMass),
                            (y.positionPrev.y -= ee * y.inverseMass),
                            (y.anglePrev -=
                              (q * ee - N * J) * y.inverseInertia));
                      }
                    }
                  }
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(9),
                o = n(0);
              (i.create = function (e) {
                return o.extend(
                  {
                    table: {},
                    list: [],
                    collisionStart: [],
                    collisionActive: [],
                    collisionEnd: [],
                  },
                  e
                );
              }),
                (i.update = function (e, t, n) {
                  var i,
                    o,
                    s,
                    a = r.update,
                    l = r.create,
                    c = r.setActive,
                    u = e.table,
                    d = e.list,
                    p = d.length,
                    f = p,
                    h = e.collisionStart,
                    m = e.collisionEnd,
                    g = e.collisionActive,
                    v = t.length,
                    y = 0,
                    x = 0,
                    b = 0;
                  for (s = 0; s < v; s++)
                    (o = (i = t[s]).pair)
                      ? (o.isActive && (g[b++] = o), a(o, i, n))
                      : ((u[(o = l(i, n)).id] = o), (h[y++] = o), (d[f++] = o));
                  for (f = 0, p = d.length, s = 0; s < p; s++)
                    (o = d[s]).timeUpdated >= n
                      ? (d[f++] = o)
                      : (c(o, !1, n),
                        o.collision.bodyA.sleepCounter > 0 &&
                        o.collision.bodyB.sleepCounter > 0
                          ? (d[f++] = o)
                          : ((m[x++] = o), delete u[o.id]));
                  d.length !== f && (d.length = f),
                    h.length !== y && (h.length = y),
                    m.length !== x && (m.length = x),
                    g.length !== b && (g.length = b);
                }),
                (i.clear = function (e) {
                  return (
                    (e.table = {}),
                    (e.list.length = 0),
                    (e.collisionStart.length = 0),
                    (e.collisionActive.length = 0),
                    (e.collisionEnd.length = 0),
                    e
                  );
                });
            },
            function (e, t, n) {
              var i = (e.exports = n(21));
              (i.Axes = n(11)),
                (i.Bodies = n(12)),
                (i.Body = n(4)),
                (i.Bounds = n(1)),
                (i.Collision = n(8)),
                (i.Common = n(0)),
                (i.Composite = n(6)),
                (i.Composites = n(22)),
                (i.Constraint = n(10)),
                (i.Contact = n(16)),
                (i.Detector = n(13)),
                (i.Engine = n(17)),
                (i.Events = n(5)),
                (i.Grid = n(23)),
                (i.Mouse = n(14)),
                (i.MouseConstraint = n(24)),
                (i.Pair = n(9)),
                (i.Pairs = n(19)),
                (i.Plugin = n(15)),
                (i.Query = n(25)),
                (i.Render = n(26)),
                (i.Resolver = n(18)),
                (i.Runner = n(27)),
                (i.SAT = n(28)),
                (i.Sleeping = n(7)),
                (i.Svg = n(29)),
                (i.Vector = n(2)),
                (i.Vertices = n(3)),
                (i.World = n(30)),
                (i.Engine.run = i.Runner.run),
                i.Common.deprecated(
                  i.Engine,
                  "run",
                  "Engine.run ➤ use Matter.Runner.run(engine) instead"
                );
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(15),
                o = n(0);
              (i.name = "matter-js"),
                (i.version = "0.20.0"),
                (i.uses = []),
                (i.used = []),
                (i.use = function () {
                  r.use(i, Array.prototype.slice.call(arguments));
                }),
                (i.before = function (e, t) {
                  return (
                    (e = e.replace(/^Matter./, "")), o.chainPathBefore(i, e, t)
                  );
                }),
                (i.after = function (e, t) {
                  return (
                    (e = e.replace(/^Matter./, "")), o.chainPathAfter(i, e, t)
                  );
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(6),
                o = n(10),
                s = n(0),
                a = n(4),
                l = n(12),
                c = s.deprecated;
              (i.stack = function (e, t, n, i, o, s, l) {
                for (
                  var c,
                    u = r.create({ label: "Stack" }),
                    d = e,
                    p = t,
                    f = 0,
                    h = 0;
                  h < i;
                  h++
                ) {
                  for (var m = 0, g = 0; g < n; g++) {
                    var v = l(d, p, g, h, c, f);
                    if (v) {
                      var y = v.bounds.max.y - v.bounds.min.y,
                        x = v.bounds.max.x - v.bounds.min.x;
                      y > m && (m = y),
                        a.translate(v, { x: 0.5 * x, y: 0.5 * y }),
                        (d = v.bounds.max.x + o),
                        r.addBody(u, v),
                        (c = v),
                        (f += 1);
                    } else d += o;
                  }
                  (p += m + s), (d = e);
                }
                return u;
              }),
                (i.chain = function (e, t, n, i, a, l) {
                  for (var c = e.bodies, u = 1; u < c.length; u++) {
                    var d = c[u - 1],
                      p = c[u],
                      f = d.bounds.max.y - d.bounds.min.y,
                      h = d.bounds.max.x - d.bounds.min.x,
                      m = p.bounds.max.y - p.bounds.min.y,
                      g = {
                        bodyA: d,
                        pointA: { x: h * t, y: f * n },
                        bodyB: p,
                        pointB: {
                          x: (p.bounds.max.x - p.bounds.min.x) * i,
                          y: m * a,
                        },
                      },
                      v = s.extend(g, l);
                    r.addConstraint(e, o.create(v));
                  }
                  return (e.label += " Chain"), e;
                }),
                (i.mesh = function (e, t, n, i, a) {
                  var l,
                    c,
                    u,
                    d,
                    p,
                    f = e.bodies;
                  for (l = 0; l < n; l++) {
                    for (c = 1; c < t; c++)
                      (u = f[c - 1 + l * t]),
                        (d = f[c + l * t]),
                        r.addConstraint(
                          e,
                          o.create(s.extend({ bodyA: u, bodyB: d }, a))
                        );
                    if (l > 0)
                      for (c = 0; c < t; c++)
                        (u = f[c + (l - 1) * t]),
                          (d = f[c + l * t]),
                          r.addConstraint(
                            e,
                            o.create(s.extend({ bodyA: u, bodyB: d }, a))
                          ),
                          i &&
                            c > 0 &&
                            ((p = f[c - 1 + (l - 1) * t]),
                            r.addConstraint(
                              e,
                              o.create(s.extend({ bodyA: p, bodyB: d }, a))
                            )),
                          i &&
                            c < t - 1 &&
                            ((p = f[c + 1 + (l - 1) * t]),
                            r.addConstraint(
                              e,
                              o.create(s.extend({ bodyA: p, bodyB: d }, a))
                            ));
                  }
                  return (e.label += " Mesh"), e;
                }),
                (i.pyramid = function (e, t, n, r, o, s, l) {
                  return i.stack(e, t, n, r, o, s, function (t, i, s, c, u, d) {
                    var p = Math.min(r, Math.ceil(n / 2)),
                      f = u ? u.bounds.max.x - u.bounds.min.x : 0;
                    if (!(c > p || s < (c = p - c) || s > n - 1 - c))
                      return (
                        1 === d &&
                          a.translate(u, {
                            x: (s + (n % 2 == 1 ? 1 : -1)) * f,
                            y: 0,
                          }),
                        l(e + (u ? s * f : 0) + s * o, i, s, c, u, d)
                      );
                  });
                }),
                (i.newtonsCradle = function (e, t, n, i, s) {
                  for (
                    var a = r.create({ label: "Newtons Cradle" }), c = 0;
                    c < n;
                    c++
                  ) {
                    var u = l.circle(e + c * (1.9 * i), t + s, i, {
                        inertia: 1 / 0,
                        restitution: 1,
                        friction: 0,
                        frictionAir: 1e-4,
                        slop: 1,
                      }),
                      d = o.create({
                        pointA: { x: e + c * (1.9 * i), y: t },
                        bodyB: u,
                      });
                    r.addBody(a, u), r.addConstraint(a, d);
                  }
                  return a;
                }),
                c(
                  i,
                  "newtonsCradle",
                  "Composites.newtonsCradle ➤ moved to newtonsCradle example"
                ),
                (i.car = function (e, t, n, i, s) {
                  var c = a.nextGroup(!0),
                    u = 0.5 * -n + 20,
                    d = 0.5 * n - 20,
                    p = r.create({ label: "Car" }),
                    f = l.rectangle(e, t, n, i, {
                      collisionFilter: { group: c },
                      chamfer: { radius: 0.5 * i },
                      density: 2e-4,
                    }),
                    h = l.circle(e + u, t + 0, s, {
                      collisionFilter: { group: c },
                      friction: 0.8,
                    }),
                    m = l.circle(e + d, t + 0, s, {
                      collisionFilter: { group: c },
                      friction: 0.8,
                    }),
                    g = o.create({
                      bodyB: f,
                      pointB: { x: u, y: 0 },
                      bodyA: h,
                      stiffness: 1,
                      length: 0,
                    }),
                    v = o.create({
                      bodyB: f,
                      pointB: { x: d, y: 0 },
                      bodyA: m,
                      stiffness: 1,
                      length: 0,
                    });
                  return (
                    r.addBody(p, f),
                    r.addBody(p, h),
                    r.addBody(p, m),
                    r.addConstraint(p, g),
                    r.addConstraint(p, v),
                    p
                  );
                }),
                c(i, "car", "Composites.car ➤ moved to car example"),
                (i.softBody = function (e, t, n, r, o, a, c, u, d, p) {
                  (d = s.extend({ inertia: 1 / 0 }, d)),
                    (p = s.extend(
                      { stiffness: 0.2, render: { type: "line", anchors: !1 } },
                      p
                    ));
                  var f = i.stack(e, t, n, r, o, a, function (e, t) {
                    return l.circle(e, t, u, d);
                  });
                  return i.mesh(f, n, r, c, p), (f.label = "Soft Body"), f;
                }),
                c(
                  i,
                  "softBody",
                  "Composites.softBody ➤ moved to softBody and cloth examples"
                );
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(9),
                o = n(0),
                s = o.deprecated;
              (i.create = function (e) {
                return o.extend(
                  {
                    buckets: {},
                    pairs: {},
                    pairsList: [],
                    bucketWidth: 48,
                    bucketHeight: 48,
                  },
                  e
                );
              }),
                (i.update = function (e, t, n, r) {
                  var o,
                    s,
                    a,
                    l,
                    c,
                    u = n.world,
                    d = e.buckets,
                    p = !1;
                  for (o = 0; o < t.length; o++) {
                    var f = t[o];
                    if (
                      (!f.isSleeping || r) &&
                      (!u.bounds ||
                        !(
                          f.bounds.max.x < u.bounds.min.x ||
                          f.bounds.min.x > u.bounds.max.x ||
                          f.bounds.max.y < u.bounds.min.y ||
                          f.bounds.min.y > u.bounds.max.y
                        ))
                    ) {
                      var h = i._getRegion(e, f);
                      if (!f.region || h.id !== f.region.id || r) {
                        (f.region && !r) || (f.region = h);
                        var m = i._regionUnion(h, f.region);
                        for (s = m.startCol; s <= m.endCol; s++)
                          for (a = m.startRow; a <= m.endRow; a++) {
                            l = d[(c = i._getBucketId(s, a))];
                            var g =
                                s >= h.startCol &&
                                s <= h.endCol &&
                                a >= h.startRow &&
                                a <= h.endRow,
                              v =
                                s >= f.region.startCol &&
                                s <= f.region.endCol &&
                                a >= f.region.startRow &&
                                a <= f.region.endRow;
                            !g && v && v && l && i._bucketRemoveBody(e, l, f),
                              (f.region === h || (g && !v) || r) &&
                                (l || (l = i._createBucket(d, c)),
                                i._bucketAddBody(e, l, f));
                          }
                        (f.region = h), (p = !0);
                      }
                    }
                  }
                  p && (e.pairsList = i._createActivePairsList(e));
                }),
                s(i, "update", "Grid.update ➤ replaced by Matter.Detector"),
                (i.clear = function (e) {
                  (e.buckets = {}), (e.pairs = {}), (e.pairsList = []);
                }),
                s(i, "clear", "Grid.clear ➤ replaced by Matter.Detector"),
                (i._regionUnion = function (e, t) {
                  var n = Math.min(e.startCol, t.startCol),
                    r = Math.max(e.endCol, t.endCol),
                    o = Math.min(e.startRow, t.startRow),
                    s = Math.max(e.endRow, t.endRow);
                  return i._createRegion(n, r, o, s);
                }),
                (i._getRegion = function (e, t) {
                  var n = t.bounds,
                    r = Math.floor(n.min.x / e.bucketWidth),
                    o = Math.floor(n.max.x / e.bucketWidth),
                    s = Math.floor(n.min.y / e.bucketHeight),
                    a = Math.floor(n.max.y / e.bucketHeight);
                  return i._createRegion(r, o, s, a);
                }),
                (i._createRegion = function (e, t, n, i) {
                  return {
                    id: e + "," + t + "," + n + "," + i,
                    startCol: e,
                    endCol: t,
                    startRow: n,
                    endRow: i,
                  };
                }),
                (i._getBucketId = function (e, t) {
                  return "C" + e + "R" + t;
                }),
                (i._createBucket = function (e, t) {
                  return (e[t] = []);
                }),
                (i._bucketAddBody = function (e, t, n) {
                  var i,
                    o = e.pairs,
                    s = r.id,
                    a = t.length;
                  for (i = 0; i < a; i++) {
                    var l = t[i];
                    if (!(n.id === l.id || (n.isStatic && l.isStatic))) {
                      var c = s(n, l),
                        u = o[c];
                      u ? (u[2] += 1) : (o[c] = [n, l, 1]);
                    }
                  }
                  t.push(n);
                }),
                (i._bucketRemoveBody = function (e, t, n) {
                  var i,
                    s = e.pairs,
                    a = r.id;
                  t.splice(o.indexOf(t, n), 1);
                  var l = t.length;
                  for (i = 0; i < l; i++) {
                    var c = s[a(n, t[i])];
                    c && (c[2] -= 1);
                  }
                }),
                (i._createActivePairsList = function (e) {
                  var t,
                    n,
                    i = e.pairs,
                    r = o.keys(i),
                    s = r.length,
                    a = [];
                  for (n = 0; n < s; n++)
                    (t = i[r[n]])[2] > 0 ? a.push(t) : delete i[r[n]];
                  return a;
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(3),
                o = n(7),
                s = n(14),
                a = n(5),
                l = n(13),
                c = n(10),
                u = n(6),
                d = n(0),
                p = n(1);
              (i.create = function (e, t) {
                var n = (e ? e.mouse : null) || (t ? t.mouse : null);
                n ||
                  (e && e.render && e.render.canvas
                    ? (n = s.create(e.render.canvas))
                    : t && t.element
                    ? (n = s.create(t.element))
                    : ((n = s.create()),
                      d.warn(
                        "MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected"
                      )));
                var r = {
                    type: "mouseConstraint",
                    mouse: n,
                    element: null,
                    body: null,
                    constraint: c.create({
                      label: "Mouse Constraint",
                      pointA: n.position,
                      pointB: { x: 0, y: 0 },
                      length: 0.01,
                      stiffness: 0.1,
                      angularStiffness: 1,
                      render: { strokeStyle: "#90EE90", lineWidth: 3 },
                    }),
                    collisionFilter: {
                      category: 1,
                      mask: 4294967295,
                      group: 0,
                    },
                  },
                  o = d.extend(r, t);
                return (
                  a.on(e, "beforeUpdate", function () {
                    var t = u.allBodies(e.world);
                    i.update(o, t), i._triggerEvents(o);
                  }),
                  o
                );
              }),
                (i.update = function (e, t) {
                  var n = e.mouse,
                    i = e.constraint,
                    s = e.body;
                  if (0 === n.button) {
                    if (i.bodyB) o.set(i.bodyB, !1), (i.pointA = n.position);
                    else
                      for (var c = 0; c < t.length; c++)
                        if (
                          ((s = t[c]),
                          p.contains(s.bounds, n.position) &&
                            l.canCollide(s.collisionFilter, e.collisionFilter))
                        )
                          for (
                            var u = s.parts.length > 1 ? 1 : 0;
                            u < s.parts.length;
                            u++
                          ) {
                            var d = s.parts[u];
                            if (r.contains(d.vertices, n.position)) {
                              (i.pointA = n.position),
                                (i.bodyB = e.body = s),
                                (i.pointB = {
                                  x: n.position.x - s.position.x,
                                  y: n.position.y - s.position.y,
                                }),
                                (i.angleB = s.angle),
                                o.set(s, !1),
                                a.trigger(e, "startdrag", {
                                  mouse: n,
                                  body: s,
                                });
                              break;
                            }
                          }
                  } else
                    (i.bodyB = e.body = null),
                      (i.pointB = null),
                      s && a.trigger(e, "enddrag", { mouse: n, body: s });
                }),
                (i._triggerEvents = function (e) {
                  var t = e.mouse,
                    n = t.sourceEvents;
                  n.mousemove && a.trigger(e, "mousemove", { mouse: t }),
                    n.mousedown && a.trigger(e, "mousedown", { mouse: t }),
                    n.mouseup && a.trigger(e, "mouseup", { mouse: t }),
                    s.clearSourceEvents(t);
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(2),
                o = n(8),
                s = n(1),
                a = n(12),
                l = n(3);
              (i.collides = function (e, t) {
                for (
                  var n = [],
                    i = t.length,
                    r = e.bounds,
                    a = o.collides,
                    l = s.overlaps,
                    c = 0;
                  c < i;
                  c++
                ) {
                  var u = t[c],
                    d = u.parts.length,
                    p = 1 === d ? 0 : 1;
                  if (l(u.bounds, r))
                    for (var f = p; f < d; f++) {
                      var h = u.parts[f];
                      if (l(h.bounds, r)) {
                        var m = a(h, e);
                        if (m) {
                          n.push(m);
                          break;
                        }
                      }
                    }
                }
                return n;
              }),
                (i.ray = function (e, t, n, o) {
                  o = o || 1e-100;
                  for (
                    var s = r.angle(t, n),
                      l = r.magnitude(r.sub(t, n)),
                      c = 0.5 * (n.x + t.x),
                      u = 0.5 * (n.y + t.y),
                      d = a.rectangle(c, u, l, o, { angle: s }),
                      p = i.collides(d, e),
                      f = 0;
                    f < p.length;
                    f += 1
                  ) {
                    var h = p[f];
                    h.body = h.bodyB = h.bodyA;
                  }
                  return p;
                }),
                (i.region = function (e, t, n) {
                  for (var i = [], r = 0; r < e.length; r++) {
                    var o = e[r],
                      a = s.overlaps(o.bounds, t);
                    ((a && !n) || (!a && n)) && i.push(o);
                  }
                  return i;
                }),
                (i.point = function (e, t) {
                  for (var n = [], i = 0; i < e.length; i++) {
                    var r = e[i];
                    if (s.contains(r.bounds, t))
                      for (
                        var o = 1 === r.parts.length ? 0 : 1;
                        o < r.parts.length;
                        o++
                      ) {
                        var a = r.parts[o];
                        if (
                          s.contains(a.bounds, t) &&
                          l.contains(a.vertices, t)
                        ) {
                          n.push(r);
                          break;
                        }
                      }
                  }
                  return n;
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(4),
                o = n(0),
                s = n(6),
                a = n(1),
                l = n(5),
                c = n(2),
                u = n(14);
              !(function () {
                var e, t;
                "undefined" != typeof window &&
                  ((e =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (e) {
                      window.setTimeout(function () {
                        e(o.now());
                      }, 1e3 / 60);
                    }),
                  (t =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.msCancelAnimationFrame)),
                  (i._goodFps = 30),
                  (i._goodDelta = 1e3 / 60),
                  (i.create = function (e) {
                    var t = {
                        engine: null,
                        element: null,
                        canvas: null,
                        mouse: null,
                        frameRequestId: null,
                        timing: {
                          historySize: 60,
                          delta: 0,
                          deltaHistory: [],
                          lastTime: 0,
                          lastTimestamp: 0,
                          lastElapsed: 0,
                          timestampElapsed: 0,
                          timestampElapsedHistory: [],
                          engineDeltaHistory: [],
                          engineElapsedHistory: [],
                          engineUpdatesHistory: [],
                          elapsedHistory: [],
                        },
                        options: {
                          width: 800,
                          height: 600,
                          pixelRatio: 1,
                          background: "#14151f",
                          wireframeBackground: "#14151f",
                          wireframeStrokeStyle: "#bbb",
                          hasBounds: !!e.bounds,
                          enabled: !0,
                          wireframes: !0,
                          showSleeping: !0,
                          showDebug: !1,
                          showStats: !1,
                          showPerformance: !1,
                          showBounds: !1,
                          showVelocity: !1,
                          showCollisions: !1,
                          showSeparations: !1,
                          showAxes: !1,
                          showPositions: !1,
                          showAngleIndicator: !1,
                          showIds: !1,
                          showVertexNumbers: !1,
                          showConvexHulls: !1,
                          showInternalEdges: !1,
                          showMousePosition: !1,
                        },
                      },
                      n = o.extend(t, e);
                    return (
                      n.canvas &&
                        ((n.canvas.width = n.options.width || n.canvas.width),
                        (n.canvas.height =
                          n.options.height || n.canvas.height)),
                      (n.mouse = e.mouse),
                      (n.engine = e.engine),
                      (n.canvas =
                        n.canvas || p(n.options.width, n.options.height)),
                      (n.context = n.canvas.getContext("2d")),
                      (n.textures = {}),
                      (n.bounds = n.bounds || {
                        min: { x: 0, y: 0 },
                        max: { x: n.canvas.width, y: n.canvas.height },
                      }),
                      (n.controller = i),
                      (n.options.showBroadphase = !1),
                      1 !== n.options.pixelRatio &&
                        i.setPixelRatio(n, n.options.pixelRatio),
                      o.isElement(n.element) && n.element.appendChild(n.canvas),
                      n
                    );
                  }),
                  (i.run = function (t) {
                    !(function r(o) {
                      (t.frameRequestId = e(r)),
                        n(t, o),
                        i.world(t, o),
                        t.context.setTransform(
                          t.options.pixelRatio,
                          0,
                          0,
                          t.options.pixelRatio,
                          0,
                          0
                        ),
                        (t.options.showStats || t.options.showDebug) &&
                          i.stats(t, t.context, o),
                        (t.options.showPerformance || t.options.showDebug) &&
                          i.performance(t, t.context, o),
                        t.context.setTransform(1, 0, 0, 1, 0, 0);
                    })();
                  }),
                  (i.stop = function (e) {
                    t(e.frameRequestId);
                  }),
                  (i.setPixelRatio = function (e, t) {
                    var n = e.options,
                      i = e.canvas;
                    "auto" === t && (t = f(i)),
                      (n.pixelRatio = t),
                      i.setAttribute("data-pixel-ratio", t),
                      (i.width = n.width * t),
                      (i.height = n.height * t),
                      (i.style.width = n.width + "px"),
                      (i.style.height = n.height + "px");
                  }),
                  (i.setSize = function (e, t, n) {
                    (e.options.width = t),
                      (e.options.height = n),
                      (e.bounds.max.x = e.bounds.min.x + t),
                      (e.bounds.max.y = e.bounds.min.y + n),
                      1 !== e.options.pixelRatio
                        ? i.setPixelRatio(e, e.options.pixelRatio)
                        : ((e.canvas.width = t), (e.canvas.height = n));
                  }),
                  (i.lookAt = function (e, t, n, i) {
                    (i = void 0 === i || i),
                      (t = o.isArray(t) ? t : [t]),
                      (n = n || { x: 0, y: 0 });
                    for (
                      var r = {
                          min: { x: 1 / 0, y: 1 / 0 },
                          max: { x: -1 / 0, y: -1 / 0 },
                        },
                        s = 0;
                      s < t.length;
                      s += 1
                    ) {
                      var a = t[s],
                        l = a.bounds ? a.bounds.min : a.min || a.position || a,
                        c = a.bounds ? a.bounds.max : a.max || a.position || a;
                      l &&
                        c &&
                        (l.x < r.min.x && (r.min.x = l.x),
                        c.x > r.max.x && (r.max.x = c.x),
                        l.y < r.min.y && (r.min.y = l.y),
                        c.y > r.max.y && (r.max.y = c.y));
                    }
                    var d = r.max.x - r.min.x + 2 * n.x,
                      p = r.max.y - r.min.y + 2 * n.y,
                      f = e.canvas.height,
                      h = e.canvas.width / f,
                      m = d / p,
                      g = 1,
                      v = 1;
                    m > h ? (v = m / h) : (g = h / m),
                      (e.options.hasBounds = !0),
                      (e.bounds.min.x = r.min.x),
                      (e.bounds.max.x = r.min.x + d * g),
                      (e.bounds.min.y = r.min.y),
                      (e.bounds.max.y = r.min.y + p * v),
                      i &&
                        ((e.bounds.min.x += 0.5 * d - d * g * 0.5),
                        (e.bounds.max.x += 0.5 * d - d * g * 0.5),
                        (e.bounds.min.y += 0.5 * p - p * v * 0.5),
                        (e.bounds.max.y += 0.5 * p - p * v * 0.5)),
                      (e.bounds.min.x -= n.x),
                      (e.bounds.max.x -= n.x),
                      (e.bounds.min.y -= n.y),
                      (e.bounds.max.y -= n.y),
                      e.mouse &&
                        (u.setScale(e.mouse, {
                          x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                          y:
                            (e.bounds.max.y - e.bounds.min.y) / e.canvas.height,
                        }),
                        u.setOffset(e.mouse, e.bounds.min));
                  }),
                  (i.startViewTransform = function (e) {
                    var t = e.bounds.max.x - e.bounds.min.x,
                      n = e.bounds.max.y - e.bounds.min.y,
                      i = t / e.options.width,
                      r = n / e.options.height;
                    e.context.setTransform(
                      e.options.pixelRatio / i,
                      0,
                      0,
                      e.options.pixelRatio / r,
                      0,
                      0
                    ),
                      e.context.translate(-e.bounds.min.x, -e.bounds.min.y);
                  }),
                  (i.endViewTransform = function (e) {
                    e.context.setTransform(
                      e.options.pixelRatio,
                      0,
                      0,
                      e.options.pixelRatio,
                      0,
                      0
                    );
                  }),
                  (i.world = function (e, t) {
                    var n,
                      r = o.now(),
                      d = e.engine,
                      p = d.world,
                      f = e.canvas,
                      h = e.context,
                      g = e.options,
                      v = e.timing,
                      y = s.allBodies(p),
                      x = s.allConstraints(p),
                      b = g.wireframes ? g.wireframeBackground : g.background,
                      w = [],
                      S = [],
                      _ = { timestamp: d.timing.timestamp };
                    if (
                      (l.trigger(e, "beforeRender", _),
                      e.currentBackground !== b && m(e, b),
                      (h.globalCompositeOperation = "source-in"),
                      (h.fillStyle = "transparent"),
                      h.fillRect(0, 0, f.width, f.height),
                      (h.globalCompositeOperation = "source-over"),
                      g.hasBounds)
                    ) {
                      for (n = 0; n < y.length; n++) {
                        var T = y[n];
                        a.overlaps(T.bounds, e.bounds) && w.push(T);
                      }
                      for (n = 0; n < x.length; n++) {
                        var C = x[n],
                          E = C.bodyA,
                          A = C.bodyB,
                          k = C.pointA,
                          M = C.pointB;
                        E && (k = c.add(E.position, C.pointA)),
                          A && (M = c.add(A.position, C.pointB)),
                          k &&
                            M &&
                            (a.contains(e.bounds, k) ||
                              a.contains(e.bounds, M)) &&
                            S.push(C);
                      }
                      i.startViewTransform(e),
                        e.mouse &&
                          (u.setScale(e.mouse, {
                            x:
                              (e.bounds.max.x - e.bounds.min.x) /
                              e.options.width,
                            y:
                              (e.bounds.max.y - e.bounds.min.y) /
                              e.options.height,
                          }),
                          u.setOffset(e.mouse, e.bounds.min));
                    } else
                      (S = x),
                        (w = y),
                        1 !== e.options.pixelRatio &&
                          e.context.setTransform(
                            e.options.pixelRatio,
                            0,
                            0,
                            e.options.pixelRatio,
                            0,
                            0
                          );
                    !g.wireframes || (d.enableSleeping && g.showSleeping)
                      ? i.bodies(e, w, h)
                      : (g.showConvexHulls && i.bodyConvexHulls(e, w, h),
                        i.bodyWireframes(e, w, h)),
                      g.showBounds && i.bodyBounds(e, w, h),
                      (g.showAxes || g.showAngleIndicator) &&
                        i.bodyAxes(e, w, h),
                      g.showPositions && i.bodyPositions(e, w, h),
                      g.showVelocity && i.bodyVelocity(e, w, h),
                      g.showIds && i.bodyIds(e, w, h),
                      g.showSeparations && i.separations(e, d.pairs.list, h),
                      g.showCollisions && i.collisions(e, d.pairs.list, h),
                      g.showVertexNumbers && i.vertexNumbers(e, w, h),
                      g.showMousePosition && i.mousePosition(e, e.mouse, h),
                      i.constraints(S, h),
                      g.hasBounds && i.endViewTransform(e),
                      l.trigger(e, "afterRender", _),
                      (v.lastElapsed = o.now() - r);
                  }),
                  (i.stats = function (e, t, n) {
                    for (
                      var i = e.engine,
                        r = i.world,
                        o = s.allBodies(r),
                        a = 0,
                        l = 0,
                        c = 0;
                      c < o.length;
                      c += 1
                    )
                      a += o[c].parts.length;
                    var u = {
                      Part: a,
                      Body: o.length,
                      Cons: s.allConstraints(r).length,
                      Comp: s.allComposites(r).length,
                      Pair: i.pairs.list.length,
                    };
                    for (var d in ((t.fillStyle = "#0e0f19"),
                    t.fillRect(l, 0, 302.5, 44),
                    (t.font = "12px Arial"),
                    (t.textBaseline = "top"),
                    (t.textAlign = "right"),
                    u)) {
                      var p = u[d];
                      (t.fillStyle = "#aaa"),
                        t.fillText(d, l + 55, 8),
                        (t.fillStyle = "#eee"),
                        t.fillText(p, l + 55, 26),
                        (l += 55);
                    }
                  }),
                  (i.performance = function (e, t) {
                    var n = e.engine,
                      r = e.timing,
                      s = r.deltaHistory,
                      a = r.elapsedHistory,
                      l = r.timestampElapsedHistory,
                      c = r.engineDeltaHistory,
                      u = r.engineUpdatesHistory,
                      p = r.engineElapsedHistory,
                      f = n.timing.lastUpdatesPerFrame,
                      h = n.timing.lastDelta,
                      m = d(s),
                      g = d(a),
                      v = d(c),
                      y = d(u),
                      x = d(p),
                      b = d(l) / m || 0,
                      w = Math.round(m / h),
                      S = 1e3 / m || 0,
                      _ = 60,
                      T = 10,
                      C = 69;
                    (t.fillStyle = "#0e0f19"),
                      t.fillRect(0, 50, 442, 34),
                      i.status(
                        t,
                        T,
                        C,
                        _,
                        4,
                        s.length,
                        Math.round(S) + " fps",
                        S / i._goodFps,
                        function (e) {
                          return s[e] / m - 1;
                        }
                      ),
                      i.status(
                        t,
                        82,
                        C,
                        _,
                        4,
                        c.length,
                        h.toFixed(2) + " dt",
                        i._goodDelta / h,
                        function (e) {
                          return c[e] / v - 1;
                        }
                      ),
                      i.status(
                        t,
                        154,
                        C,
                        _,
                        4,
                        u.length,
                        f + " upf",
                        Math.pow(o.clamp(y / w || 1, 0, 1), 4),
                        function (e) {
                          return u[e] / y - 1;
                        }
                      ),
                      i.status(
                        t,
                        226,
                        C,
                        _,
                        4,
                        p.length,
                        x.toFixed(2) + " ut",
                        1 - (f * x) / i._goodFps,
                        function (e) {
                          return p[e] / x - 1;
                        }
                      ),
                      i.status(
                        t,
                        298,
                        C,
                        _,
                        4,
                        a.length,
                        g.toFixed(2) + " rt",
                        1 - g / i._goodFps,
                        function (e) {
                          return a[e] / g - 1;
                        }
                      ),
                      i.status(
                        t,
                        370,
                        C,
                        _,
                        4,
                        l.length,
                        b.toFixed(2) + " x",
                        b * b * b,
                        function (e) {
                          return (l[e] / s[e] / b || 0) - 1;
                        }
                      );
                  }),
                  (i.status = function (e, t, n, i, r, s, a, l, c) {
                    (e.strokeStyle = "#888"),
                      (e.fillStyle = "#444"),
                      (e.lineWidth = 1),
                      e.fillRect(t, n + 7, i, 1),
                      e.beginPath(),
                      e.moveTo(t, n + 7 - r * o.clamp(0.4 * c(0), -2, 2));
                    for (var u = 0; u < i; u += 1)
                      e.lineTo(
                        t + u,
                        n + 7 - (u < s ? r * o.clamp(0.4 * c(u), -2, 2) : 0)
                      );
                    e.stroke(),
                      (e.fillStyle =
                        "hsl(" + o.clamp(25 + 95 * l, 0, 120) + ",100%,60%)"),
                      e.fillRect(t, n - 7, 4, 4),
                      (e.font = "12px Arial"),
                      (e.textBaseline = "middle"),
                      (e.textAlign = "right"),
                      (e.fillStyle = "#eee"),
                      e.fillText(a, t + i, n - 5);
                  }),
                  (i.constraints = function (e, t) {
                    for (var n = t, i = 0; i < e.length; i++) {
                      var r = e[i];
                      if (r.render.visible && r.pointA && r.pointB) {
                        var s,
                          a,
                          l = r.bodyA,
                          u = r.bodyB;
                        if (
                          ((s = l ? c.add(l.position, r.pointA) : r.pointA),
                          "pin" === r.render.type)
                        )
                          n.beginPath(),
                            n.arc(s.x, s.y, 3, 0, 2 * Math.PI),
                            n.closePath();
                        else {
                          if (
                            ((a = u ? c.add(u.position, r.pointB) : r.pointB),
                            n.beginPath(),
                            n.moveTo(s.x, s.y),
                            "spring" === r.render.type)
                          )
                            for (
                              var d,
                                p = c.sub(a, s),
                                f = c.perp(c.normalise(p)),
                                h = Math.ceil(o.clamp(r.length / 5, 12, 20)),
                                m = 1;
                              m < h;
                              m += 1
                            )
                              (d = m % 2 == 0 ? 1 : -1),
                                n.lineTo(
                                  s.x + p.x * (m / h) + f.x * d * 4,
                                  s.y + p.y * (m / h) + f.y * d * 4
                                );
                          n.lineTo(a.x, a.y);
                        }
                        r.render.lineWidth &&
                          ((n.lineWidth = r.render.lineWidth),
                          (n.strokeStyle = r.render.strokeStyle),
                          n.stroke()),
                          r.render.anchors &&
                            ((n.fillStyle = r.render.strokeStyle),
                            n.beginPath(),
                            n.arc(s.x, s.y, 3, 0, 2 * Math.PI),
                            n.arc(a.x, a.y, 3, 0, 2 * Math.PI),
                            n.closePath(),
                            n.fill());
                      }
                    }
                  }),
                  (i.bodies = function (e, t, n) {
                    var i,
                      r,
                      o,
                      s,
                      a = n,
                      l = (e.engine, e.options),
                      c = l.showInternalEdges || !l.wireframes;
                    for (o = 0; o < t.length; o++)
                      if ((i = t[o]).render.visible)
                        for (
                          s = i.parts.length > 1 ? 1 : 0;
                          s < i.parts.length;
                          s++
                        )
                          if ((r = i.parts[s]).render.visible) {
                            if (
                              (l.showSleeping && i.isSleeping
                                ? (a.globalAlpha = 0.5 * r.render.opacity)
                                : 1 !== r.render.opacity &&
                                  (a.globalAlpha = r.render.opacity),
                              r.render.sprite &&
                                r.render.sprite.texture &&
                                !l.wireframes)
                            ) {
                              var u = r.render.sprite,
                                d = h(e, u.texture);
                              a.translate(r.position.x, r.position.y),
                                a.rotate(r.angle),
                                a.drawImage(
                                  d,
                                  d.width * -u.xOffset * u.xScale,
                                  d.height * -u.yOffset * u.yScale,
                                  d.width * u.xScale,
                                  d.height * u.yScale
                                ),
                                a.rotate(-r.angle),
                                a.translate(-r.position.x, -r.position.y);
                            } else {
                              if (r.circleRadius)
                                a.beginPath(),
                                  a.arc(
                                    r.position.x,
                                    r.position.y,
                                    r.circleRadius,
                                    0,
                                    2 * Math.PI
                                  );
                              else {
                                a.beginPath(),
                                  a.moveTo(r.vertices[0].x, r.vertices[0].y);
                                for (var p = 1; p < r.vertices.length; p++)
                                  !r.vertices[p - 1].isInternal || c
                                    ? a.lineTo(r.vertices[p].x, r.vertices[p].y)
                                    : a.moveTo(
                                        r.vertices[p].x,
                                        r.vertices[p].y
                                      ),
                                    r.vertices[p].isInternal &&
                                      !c &&
                                      a.moveTo(
                                        r.vertices[(p + 1) % r.vertices.length]
                                          .x,
                                        r.vertices[(p + 1) % r.vertices.length]
                                          .y
                                      );
                                a.lineTo(r.vertices[0].x, r.vertices[0].y),
                                  a.closePath();
                              }
                              l.wireframes
                                ? ((a.lineWidth = 1),
                                  (a.strokeStyle =
                                    e.options.wireframeStrokeStyle),
                                  a.stroke())
                                : ((a.fillStyle = r.render.fillStyle),
                                  r.render.lineWidth &&
                                    ((a.lineWidth = r.render.lineWidth),
                                    (a.strokeStyle = r.render.strokeStyle),
                                    a.stroke()),
                                  a.fill());
                            }
                            a.globalAlpha = 1;
                          }
                  }),
                  (i.bodyWireframes = function (e, t, n) {
                    var i,
                      r,
                      o,
                      s,
                      a,
                      l = n,
                      c = e.options.showInternalEdges;
                    for (l.beginPath(), o = 0; o < t.length; o++)
                      if ((i = t[o]).render.visible)
                        for (
                          a = i.parts.length > 1 ? 1 : 0;
                          a < i.parts.length;
                          a++
                        ) {
                          for (
                            r = i.parts[a],
                              l.moveTo(r.vertices[0].x, r.vertices[0].y),
                              s = 1;
                            s < r.vertices.length;
                            s++
                          )
                            !r.vertices[s - 1].isInternal || c
                              ? l.lineTo(r.vertices[s].x, r.vertices[s].y)
                              : l.moveTo(r.vertices[s].x, r.vertices[s].y),
                              r.vertices[s].isInternal &&
                                !c &&
                                l.moveTo(
                                  r.vertices[(s + 1) % r.vertices.length].x,
                                  r.vertices[(s + 1) % r.vertices.length].y
                                );
                          l.lineTo(r.vertices[0].x, r.vertices[0].y);
                        }
                    (l.lineWidth = 1),
                      (l.strokeStyle = e.options.wireframeStrokeStyle),
                      l.stroke();
                  }),
                  (i.bodyConvexHulls = function (e, t, n) {
                    var i,
                      r,
                      o,
                      s = n;
                    for (s.beginPath(), r = 0; r < t.length; r++)
                      if ((i = t[r]).render.visible && 1 !== i.parts.length) {
                        for (
                          s.moveTo(i.vertices[0].x, i.vertices[0].y), o = 1;
                          o < i.vertices.length;
                          o++
                        )
                          s.lineTo(i.vertices[o].x, i.vertices[o].y);
                        s.lineTo(i.vertices[0].x, i.vertices[0].y);
                      }
                    (s.lineWidth = 1),
                      (s.strokeStyle = "rgba(255,255,255,0.2)"),
                      s.stroke();
                  }),
                  (i.vertexNumbers = function (e, t, n) {
                    var i,
                      r,
                      o,
                      s = n;
                    for (i = 0; i < t.length; i++) {
                      var a = t[i].parts;
                      for (o = a.length > 1 ? 1 : 0; o < a.length; o++) {
                        var l = a[o];
                        for (r = 0; r < l.vertices.length; r++)
                          (s.fillStyle = "rgba(255,255,255,0.2)"),
                            s.fillText(
                              i + "_" + r,
                              l.position.x +
                                0.8 * (l.vertices[r].x - l.position.x),
                              l.position.y +
                                0.8 * (l.vertices[r].y - l.position.y)
                            );
                      }
                    }
                  }),
                  (i.mousePosition = function (e, t, n) {
                    var i = n;
                    (i.fillStyle = "rgba(255,255,255,0.8)"),
                      i.fillText(
                        t.position.x + "  " + t.position.y,
                        t.position.x + 5,
                        t.position.y - 5
                      );
                  }),
                  (i.bodyBounds = function (e, t, n) {
                    var i = n,
                      r = (e.engine, e.options);
                    i.beginPath();
                    for (var o = 0; o < t.length; o++)
                      if (t[o].render.visible)
                        for (
                          var s = t[o].parts, a = s.length > 1 ? 1 : 0;
                          a < s.length;
                          a++
                        ) {
                          var l = s[a];
                          i.rect(
                            l.bounds.min.x,
                            l.bounds.min.y,
                            l.bounds.max.x - l.bounds.min.x,
                            l.bounds.max.y - l.bounds.min.y
                          );
                        }
                    r.wireframes
                      ? (i.strokeStyle = "rgba(255,255,255,0.08)")
                      : (i.strokeStyle = "rgba(0,0,0,0.1)"),
                      (i.lineWidth = 1),
                      i.stroke();
                  }),
                  (i.bodyAxes = function (e, t, n) {
                    var i,
                      r,
                      o,
                      s,
                      a = n,
                      l = (e.engine, e.options);
                    for (a.beginPath(), r = 0; r < t.length; r++) {
                      var c = t[r],
                        u = c.parts;
                      if (c.render.visible)
                        if (l.showAxes)
                          for (o = u.length > 1 ? 1 : 0; o < u.length; o++)
                            for (i = u[o], s = 0; s < i.axes.length; s++) {
                              var d = i.axes[s];
                              a.moveTo(i.position.x, i.position.y),
                                a.lineTo(
                                  i.position.x + 20 * d.x,
                                  i.position.y + 20 * d.y
                                );
                            }
                        else
                          for (o = u.length > 1 ? 1 : 0; o < u.length; o++)
                            for (i = u[o], s = 0; s < i.axes.length; s++)
                              a.moveTo(i.position.x, i.position.y),
                                a.lineTo(
                                  (i.vertices[0].x +
                                    i.vertices[i.vertices.length - 1].x) /
                                    2,
                                  (i.vertices[0].y +
                                    i.vertices[i.vertices.length - 1].y) /
                                    2
                                );
                    }
                    l.wireframes
                      ? ((a.strokeStyle = "indianred"), (a.lineWidth = 1))
                      : ((a.strokeStyle = "rgba(255, 255, 255, 0.4)"),
                        (a.globalCompositeOperation = "overlay"),
                        (a.lineWidth = 2)),
                      a.stroke(),
                      (a.globalCompositeOperation = "source-over");
                  }),
                  (i.bodyPositions = function (e, t, n) {
                    var i,
                      r,
                      o,
                      s,
                      a = n,
                      l = (e.engine, e.options);
                    for (a.beginPath(), o = 0; o < t.length; o++)
                      if ((i = t[o]).render.visible)
                        for (s = 0; s < i.parts.length; s++)
                          (r = i.parts[s]),
                            a.arc(
                              r.position.x,
                              r.position.y,
                              3,
                              0,
                              2 * Math.PI,
                              !1
                            ),
                            a.closePath();
                    for (
                      l.wireframes
                        ? (a.fillStyle = "indianred")
                        : (a.fillStyle = "rgba(0,0,0,0.5)"),
                        a.fill(),
                        a.beginPath(),
                        o = 0;
                      o < t.length;
                      o++
                    )
                      (i = t[o]).render.visible &&
                        (a.arc(
                          i.positionPrev.x,
                          i.positionPrev.y,
                          2,
                          0,
                          2 * Math.PI,
                          !1
                        ),
                        a.closePath());
                    (a.fillStyle = "rgba(255,165,0,0.8)"), a.fill();
                  }),
                  (i.bodyVelocity = function (e, t, n) {
                    var i = n;
                    i.beginPath();
                    for (var o = 0; o < t.length; o++) {
                      var s = t[o];
                      if (s.render.visible) {
                        var a = r.getVelocity(s);
                        i.moveTo(s.position.x, s.position.y),
                          i.lineTo(s.position.x + a.x, s.position.y + a.y);
                      }
                    }
                    (i.lineWidth = 3),
                      (i.strokeStyle = "cornflowerblue"),
                      i.stroke();
                  }),
                  (i.bodyIds = function (e, t, n) {
                    var i,
                      r,
                      o = n;
                    for (i = 0; i < t.length; i++)
                      if (t[i].render.visible) {
                        var s = t[i].parts;
                        for (r = s.length > 1 ? 1 : 0; r < s.length; r++) {
                          var a = s[r];
                          (o.font = "12px Arial"),
                            (o.fillStyle = "rgba(255,255,255,0.5)"),
                            o.fillText(
                              a.id,
                              a.position.x + 10,
                              a.position.y - 10
                            );
                        }
                      }
                  }),
                  (i.collisions = function (e, t, n) {
                    var i,
                      r,
                      o,
                      s,
                      a = n,
                      l = e.options;
                    for (a.beginPath(), o = 0; o < t.length; o++)
                      if ((i = t[o]).isActive)
                        for (r = i.collision, s = 0; s < i.contactCount; s++) {
                          var c = i.contacts[s].vertex;
                          a.rect(c.x - 1.5, c.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      l.wireframes
                        ? (a.fillStyle = "rgba(255,255,255,0.7)")
                        : (a.fillStyle = "orange"),
                        a.fill(),
                        a.beginPath(),
                        o = 0;
                      o < t.length;
                      o++
                    )
                      if (
                        (i = t[o]).isActive &&
                        ((r = i.collision), i.contactCount > 0)
                      ) {
                        var u = i.contacts[0].vertex.x,
                          d = i.contacts[0].vertex.y;
                        2 === i.contactCount &&
                          ((u =
                            (i.contacts[0].vertex.x + i.contacts[1].vertex.x) /
                            2),
                          (d =
                            (i.contacts[0].vertex.y + i.contacts[1].vertex.y) /
                            2)),
                          r.bodyB === r.supports[0].body ||
                          !0 === r.bodyA.isStatic
                            ? a.moveTo(u - 8 * r.normal.x, d - 8 * r.normal.y)
                            : a.moveTo(u + 8 * r.normal.x, d + 8 * r.normal.y),
                          a.lineTo(u, d);
                      }
                    l.wireframes
                      ? (a.strokeStyle = "rgba(255,165,0,0.7)")
                      : (a.strokeStyle = "orange"),
                      (a.lineWidth = 1),
                      a.stroke();
                  }),
                  (i.separations = function (e, t, n) {
                    var i,
                      r,
                      o,
                      s,
                      a,
                      l = n,
                      c = e.options;
                    for (l.beginPath(), a = 0; a < t.length; a++)
                      if ((i = t[a]).isActive) {
                        o = (r = i.collision).bodyA;
                        var u = 1;
                        (s = r.bodyB).isStatic || o.isStatic || (u = 0.5),
                          s.isStatic && (u = 0),
                          l.moveTo(s.position.x, s.position.y),
                          l.lineTo(
                            s.position.x - r.penetration.x * u,
                            s.position.y - r.penetration.y * u
                          ),
                          (u = 1),
                          s.isStatic || o.isStatic || (u = 0.5),
                          o.isStatic && (u = 0),
                          l.moveTo(o.position.x, o.position.y),
                          l.lineTo(
                            o.position.x + r.penetration.x * u,
                            o.position.y + r.penetration.y * u
                          );
                      }
                    c.wireframes
                      ? (l.strokeStyle = "rgba(255,165,0,0.5)")
                      : (l.strokeStyle = "orange"),
                      l.stroke();
                  }),
                  (i.inspector = function (e, t) {
                    e.engine;
                    var n,
                      i = e.selected,
                      r = e.render,
                      o = r.options;
                    if (o.hasBounds) {
                      var s = r.bounds.max.x - r.bounds.min.x,
                        a = r.bounds.max.y - r.bounds.min.y,
                        l = s / r.options.width,
                        c = a / r.options.height;
                      t.scale(1 / l, 1 / c),
                        t.translate(-r.bounds.min.x, -r.bounds.min.y);
                    }
                    for (var u = 0; u < i.length; u++) {
                      var d = i[u].data;
                      switch (
                        (t.translate(0.5, 0.5),
                        (t.lineWidth = 1),
                        (t.strokeStyle = "rgba(255,165,0,0.9)"),
                        t.setLineDash([1, 2]),
                        d.type)
                      ) {
                        case "body":
                          (n = d.bounds),
                            t.beginPath(),
                            t.rect(
                              Math.floor(n.min.x - 3),
                              Math.floor(n.min.y - 3),
                              Math.floor(n.max.x - n.min.x + 6),
                              Math.floor(n.max.y - n.min.y + 6)
                            ),
                            t.closePath(),
                            t.stroke();
                          break;
                        case "constraint":
                          var p = d.pointA;
                          d.bodyA && (p = d.pointB),
                            t.beginPath(),
                            t.arc(p.x, p.y, 10, 0, 2 * Math.PI),
                            t.closePath(),
                            t.stroke();
                      }
                      t.setLineDash([]), t.translate(-0.5, -0.5);
                    }
                    null !== e.selectStart &&
                      (t.translate(0.5, 0.5),
                      (t.lineWidth = 1),
                      (t.strokeStyle = "rgba(255,165,0,0.6)"),
                      (t.fillStyle = "rgba(255,165,0,0.1)"),
                      (n = e.selectBounds),
                      t.beginPath(),
                      t.rect(
                        Math.floor(n.min.x),
                        Math.floor(n.min.y),
                        Math.floor(n.max.x - n.min.x),
                        Math.floor(n.max.y - n.min.y)
                      ),
                      t.closePath(),
                      t.stroke(),
                      t.fill(),
                      t.translate(-0.5, -0.5)),
                      o.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0);
                  });
                var n = function (e, t) {
                    var n = e.engine,
                      r = e.timing,
                      o = r.historySize,
                      s = n.timing.timestamp;
                    (r.delta = t - r.lastTime || i._goodDelta),
                      (r.lastTime = t),
                      (r.timestampElapsed = s - r.lastTimestamp || 0),
                      (r.lastTimestamp = s),
                      r.deltaHistory.unshift(r.delta),
                      (r.deltaHistory.length = Math.min(
                        r.deltaHistory.length,
                        o
                      )),
                      r.engineDeltaHistory.unshift(n.timing.lastDelta),
                      (r.engineDeltaHistory.length = Math.min(
                        r.engineDeltaHistory.length,
                        o
                      )),
                      r.timestampElapsedHistory.unshift(r.timestampElapsed),
                      (r.timestampElapsedHistory.length = Math.min(
                        r.timestampElapsedHistory.length,
                        o
                      )),
                      r.engineUpdatesHistory.unshift(
                        n.timing.lastUpdatesPerFrame
                      ),
                      (r.engineUpdatesHistory.length = Math.min(
                        r.engineUpdatesHistory.length,
                        o
                      )),
                      r.engineElapsedHistory.unshift(n.timing.lastElapsed),
                      (r.engineElapsedHistory.length = Math.min(
                        r.engineElapsedHistory.length,
                        o
                      )),
                      r.elapsedHistory.unshift(r.lastElapsed),
                      (r.elapsedHistory.length = Math.min(
                        r.elapsedHistory.length,
                        o
                      ));
                  },
                  d = function (e) {
                    for (var t = 0, n = 0; n < e.length; n += 1) t += e[n];
                    return t / e.length || 0;
                  },
                  p = function (e, t) {
                    var n = document.createElement("canvas");
                    return (
                      (n.width = e),
                      (n.height = t),
                      (n.oncontextmenu = function () {
                        return !1;
                      }),
                      (n.onselectstart = function () {
                        return !1;
                      }),
                      n
                    );
                  },
                  f = function (e) {
                    var t = e.getContext("2d");
                    return (
                      (window.devicePixelRatio || 1) /
                      (t.webkitBackingStorePixelRatio ||
                        t.mozBackingStorePixelRatio ||
                        t.msBackingStorePixelRatio ||
                        t.oBackingStorePixelRatio ||
                        t.backingStorePixelRatio ||
                        1)
                    );
                  },
                  h = function (e, t) {
                    var n = e.textures[t];
                    return (
                      n || (((n = e.textures[t] = new Image()).src = t), n)
                    );
                  },
                  m = function (e, t) {
                    var n = t;
                    /(jpg|gif|png)$/.test(t) && (n = "url(" + t + ")"),
                      (e.canvas.style.background = n),
                      (e.canvas.style.backgroundSize = "contain"),
                      (e.currentBackground = t);
                  };
              })();
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(5),
                o = n(17),
                s = n(0);
              !(function () {
                (i._maxFrameDelta = 1e3 / 15),
                  (i._frameDeltaFallback = 1e3 / 60),
                  (i._timeBufferMargin = 1.5),
                  (i._elapsedNextEstimate = 1),
                  (i._smoothingLowerBound = 0.1),
                  (i._smoothingUpperBound = 0.9),
                  (i.create = function (e) {
                    var t = s.extend(
                      {
                        delta: 1e3 / 60,
                        frameDelta: null,
                        frameDeltaSmoothing: !0,
                        frameDeltaSnapping: !0,
                        frameDeltaHistory: [],
                        frameDeltaHistorySize: 100,
                        frameRequestId: null,
                        timeBuffer: 0,
                        timeLastTick: null,
                        maxUpdates: null,
                        maxFrameTime: 1e3 / 30,
                        lastUpdatesDeferred: 0,
                        enabled: !0,
                      },
                      e
                    );
                    return (t.fps = 0), t;
                  }),
                  (i.run = function (e, t) {
                    return (
                      (e.timeBuffer = i._frameDeltaFallback),
                      (function n(r) {
                        (e.frameRequestId = i._onNextFrame(e, n)),
                          r && e.enabled && i.tick(e, t, r);
                      })(),
                      e
                    );
                  }),
                  (i.tick = function (t, n, a) {
                    var l = s.now(),
                      c = t.delta,
                      u = 0,
                      d = a - t.timeLastTick;
                    if (
                      ((!d ||
                        !t.timeLastTick ||
                        d > Math.max(i._maxFrameDelta, t.maxFrameTime)) &&
                        (d = t.frameDelta || i._frameDeltaFallback),
                      t.frameDeltaSmoothing)
                    ) {
                      t.frameDeltaHistory.push(d),
                        (t.frameDeltaHistory = t.frameDeltaHistory.slice(
                          -t.frameDeltaHistorySize
                        ));
                      var p = t.frameDeltaHistory.slice(0).sort(),
                        f = t.frameDeltaHistory.slice(
                          p.length * i._smoothingLowerBound,
                          p.length * i._smoothingUpperBound
                        );
                      d = e(f) || d;
                    }
                    t.frameDeltaSnapping && (d = 1e3 / Math.round(1e3 / d)),
                      (t.frameDelta = d),
                      (t.timeLastTick = a),
                      (t.timeBuffer += t.frameDelta),
                      (t.timeBuffer = s.clamp(
                        t.timeBuffer,
                        0,
                        t.frameDelta + c * i._timeBufferMargin
                      )),
                      (t.lastUpdatesDeferred = 0);
                    var h = t.maxUpdates || Math.ceil(t.maxFrameTime / c),
                      m = { timestamp: n.timing.timestamp };
                    r.trigger(t, "beforeTick", m), r.trigger(t, "tick", m);
                    for (
                      var g = s.now();
                      c > 0 && t.timeBuffer >= c * i._timeBufferMargin;

                    ) {
                      r.trigger(t, "beforeUpdate", m),
                        o.update(n, c),
                        r.trigger(t, "afterUpdate", m),
                        (t.timeBuffer -= c),
                        (u += 1);
                      var v = s.now() - l,
                        y = s.now() - g,
                        x = v + (i._elapsedNextEstimate * y) / u;
                      if (u >= h || x > t.maxFrameTime) {
                        t.lastUpdatesDeferred = Math.round(
                          Math.max(0, t.timeBuffer / c - i._timeBufferMargin)
                        );
                        break;
                      }
                    }
                    (n.timing.lastUpdatesPerFrame = u),
                      r.trigger(t, "afterTick", m),
                      t.frameDeltaHistory.length >= 100 &&
                        (t.lastUpdatesDeferred &&
                        Math.round(t.frameDelta / c) > h
                          ? s.warnOnce(
                              "Matter.Runner: runner reached runner.maxUpdates, see docs."
                            )
                          : t.lastUpdatesDeferred &&
                            s.warnOnce(
                              "Matter.Runner: runner reached runner.maxFrameTime, see docs."
                            ),
                        void 0 !== t.isFixed &&
                          s.warnOnce(
                            "Matter.Runner: runner.isFixed is now redundant, see docs."
                          ),
                        (t.deltaMin || t.deltaMax) &&
                          s.warnOnce(
                            "Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."
                          ),
                        0 !== t.fps &&
                          s.warnOnce(
                            "Matter.Runner: runner.fps was replaced by runner.delta, see docs."
                          ));
                  }),
                  (i.stop = function (e) {
                    i._cancelNextFrame(e);
                  }),
                  (i._onNextFrame = function (e, t) {
                    if (
                      "undefined" == typeof window ||
                      !window.requestAnimationFrame
                    )
                      throw new Error(
                        "Matter.Runner: missing required global window.requestAnimationFrame."
                      );
                    return (
                      (e.frameRequestId = window.requestAnimationFrame(t)),
                      e.frameRequestId
                    );
                  }),
                  (i._cancelNextFrame = function (e) {
                    if (
                      "undefined" == typeof window ||
                      !window.cancelAnimationFrame
                    )
                      throw new Error(
                        "Matter.Runner: missing required global window.cancelAnimationFrame."
                      );
                    window.cancelAnimationFrame(e.frameRequestId);
                  });
                var e = function (e) {
                  for (var t = 0, n = e.length, i = 0; i < n; i += 1) t += e[i];
                  return t / n || 0;
                };
              })();
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(8),
                o = n(0).deprecated;
              (i.collides = function (e, t) {
                return r.collides(e, t);
              }),
                o(
                  i,
                  "collides",
                  "SAT.collides ➤ replaced by Collision.collides"
                );
            },
            function (e, t, n) {
              var i = {};
              (e.exports = i), n(1);
              var r = n(0);
              (i.pathToVertices = function (e, t) {
                "undefined" == typeof window ||
                  "SVGPathSeg" in window ||
                  r.warn(
                    "Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required."
                  );
                var n,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d,
                  p,
                  f,
                  h,
                  m = [],
                  g = 0,
                  v = 0,
                  y = 0;
                t = t || 15;
                var x = function (e, t, n) {
                    var i = n % 2 == 1 && n > 1;
                    if (!p || e != p.x || t != p.y) {
                      p && i ? ((f = p.x), (h = p.y)) : ((f = 0), (h = 0));
                      var r = { x: f + e, y: h + t };
                      (!i && p) || (p = r), m.push(r), (v = f + e), (y = h + t);
                    }
                  },
                  b = function (e) {
                    var t = e.pathSegTypeAsLetter.toUpperCase();
                    if ("Z" !== t) {
                      switch (t) {
                        case "M":
                        case "L":
                        case "T":
                        case "C":
                        case "S":
                        case "Q":
                          (v = e.x), (y = e.y);
                          break;
                        case "H":
                          v = e.x;
                          break;
                        case "V":
                          y = e.y;
                      }
                      x(v, y, e.pathSegType);
                    }
                  };
                for (
                  i._svgPathToAbsolute(e),
                    s = e.getTotalLength(),
                    c = [],
                    n = 0;
                  n < e.pathSegList.numberOfItems;
                  n += 1
                )
                  c.push(e.pathSegList.getItem(n));
                for (u = c.concat(); g < s; ) {
                  if ((l = c[e.getPathSegAtLength(g)]) != d) {
                    for (; u.length && u[0] != l; ) b(u.shift());
                    d = l;
                  }
                  switch (l.pathSegTypeAsLetter.toUpperCase()) {
                    case "C":
                    case "T":
                    case "S":
                    case "Q":
                    case "A":
                      (a = e.getPointAtLength(g)), x(a.x, a.y, 0);
                  }
                  g += t;
                }
                for (n = 0, o = u.length; n < o; ++n) b(u[n]);
                return m;
              }),
                (i._svgPathToAbsolute = function (e) {
                  for (
                    var t,
                      n,
                      i,
                      r,
                      o,
                      s,
                      a = e.pathSegList,
                      l = 0,
                      c = 0,
                      u = a.numberOfItems,
                      d = 0;
                    d < u;
                    ++d
                  ) {
                    var p = a.getItem(d),
                      f = p.pathSegTypeAsLetter;
                    if (/[MLHVCSQTA]/.test(f))
                      "x" in p && (l = p.x), "y" in p && (c = p.y);
                    else
                      switch (
                        ("x1" in p && (i = l + p.x1),
                        "x2" in p && (o = l + p.x2),
                        "y1" in p && (r = c + p.y1),
                        "y2" in p && (s = c + p.y2),
                        "x" in p && (l += p.x),
                        "y" in p && (c += p.y),
                        f)
                      ) {
                        case "m":
                          a.replaceItem(e.createSVGPathSegMovetoAbs(l, c), d);
                          break;
                        case "l":
                          a.replaceItem(e.createSVGPathSegLinetoAbs(l, c), d);
                          break;
                        case "h":
                          a.replaceItem(
                            e.createSVGPathSegLinetoHorizontalAbs(l),
                            d
                          );
                          break;
                        case "v":
                          a.replaceItem(
                            e.createSVGPathSegLinetoVerticalAbs(c),
                            d
                          );
                          break;
                        case "c":
                          a.replaceItem(
                            e.createSVGPathSegCurvetoCubicAbs(l, c, i, r, o, s),
                            d
                          );
                          break;
                        case "s":
                          a.replaceItem(
                            e.createSVGPathSegCurvetoCubicSmoothAbs(l, c, o, s),
                            d
                          );
                          break;
                        case "q":
                          a.replaceItem(
                            e.createSVGPathSegCurvetoQuadraticAbs(l, c, i, r),
                            d
                          );
                          break;
                        case "t":
                          a.replaceItem(
                            e.createSVGPathSegCurvetoQuadraticSmoothAbs(l, c),
                            d
                          );
                          break;
                        case "a":
                          a.replaceItem(
                            e.createSVGPathSegArcAbs(
                              l,
                              c,
                              p.r1,
                              p.r2,
                              p.angle,
                              p.largeArcFlag,
                              p.sweepFlag
                            ),
                            d
                          );
                          break;
                        case "z":
                        case "Z":
                          (l = t), (c = n);
                      }
                    ("M" != f && "m" != f) || ((t = l), (n = c));
                  }
                });
            },
            function (e, t, n) {
              var i = {};
              e.exports = i;
              var r = n(6);
              n(0),
                (i.create = r.create),
                (i.add = r.add),
                (i.remove = r.remove),
                (i.clear = r.clear),
                (i.addComposite = r.addComposite),
                (i.addBody = r.addBody),
                (i.addConstraint = r.addConstraint);
            },
          ]);
        }),
          (e.exports = i());
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var o = (t[i] = { exports: {} });
    return e[i].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      n(755);
      function e(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function t(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      var i,
        r,
        o,
        s,
        a,
        l,
        c,
        u,
        d,
        p,
        f,
        h,
        m,
        g,
        v,
        y = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        x = { duration: 0.5, overwrite: !1, delay: 0 },
        b = 1e8,
        w = 1e-8,
        S = 2 * Math.PI,
        _ = S / 4,
        T = 0,
        C = Math.sqrt,
        E = Math.cos,
        A = Math.sin,
        k = function (e) {
          return "string" == typeof e;
        },
        M = function (e) {
          return "function" == typeof e;
        },
        P = function (e) {
          return "number" == typeof e;
        },
        L = function (e) {
          return void 0 === e;
        },
        D = function (e) {
          return "object" == typeof e;
        },
        O = function (e) {
          return !1 !== e;
        },
        B = function () {
          return "undefined" != typeof window;
        },
        I = function (e) {
          return M(e) || k(e);
        },
        z =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        R = Array.isArray,
        q = /(?:-?\.?\d|\.)+/gi,
        N = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        $ = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        F = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        j = /[+-]=-?[.\d]+/,
        H = /[^,'"\[\]\s]+/gi,
        W = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        V = {},
        G = {},
        X = function (e) {
          return (G = xe(e, V)) && ln;
        },
        Y = function (e, t) {
          return console.warn(
            "Invalid property",
            e,
            "set to",
            t,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        U = function (e, t) {
          return !t && console.warn(e);
        },
        Q = function (e, t) {
          return (e && (V[e] = t) && G && (G[e] = t)) || V;
        },
        K = function () {
          return 0;
        },
        Z = {},
        J = [],
        ee = {},
        te = {},
        ne = {},
        ie = 30,
        re = [],
        oe = "",
        se = function (e) {
          var t,
            n,
            i = e[0];
          if ((D(i) || M(i) || (e = [e]), !(t = (i._gsap || {}).harness))) {
            for (n = re.length; n-- && !re[n].targetTest(i); );
            t = re[n];
          }
          for (n = e.length; n--; )
            (e[n] && (e[n]._gsap || (e[n]._gsap = new Pt(e[n], t)))) ||
              e.splice(n, 1);
          return e;
        },
        ae = function (e) {
          return e._gsap || se(Qe(e))[0]._gsap;
        },
        le = function (e, t, n) {
          return (n = e[t]) && M(n)
            ? e[t]()
            : (L(n) && e.getAttribute && e.getAttribute(t)) || n;
        },
        ce = function (e, t) {
          return (e = e.split(",")).forEach(t) || e;
        },
        ue = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        },
        de = function (e) {
          return Math.round(1e7 * e) / 1e7 || 0;
        },
        pe = function (e, t) {
          var n = t.charAt(0),
            i = parseFloat(t.substr(2));
          return (
            (e = parseFloat(e)),
            "+" === n ? e + i : "-" === n ? e - i : "*" === n ? e * i : e / i
          );
        },
        fe = function (e, t) {
          for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; );
          return i < n;
        },
        he = function () {
          var e,
            t,
            n = J.length,
            i = J.slice(0);
          for (ee = {}, J.length = 0, e = 0; e < n; e++)
            (t = i[e]) &&
              t._lazy &&
              (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
        },
        me = function (e, t, n, i) {
          J.length && he(), e.render(t, n, i), J.length && he();
        },
        ge = function (e) {
          var t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(H).length < 2
            ? t
            : k(e)
            ? e.trim()
            : e;
        },
        ve = function (e) {
          return e;
        },
        ye = function (e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e;
        },
        xe = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        be = function e(t, n) {
          for (var i in n)
            "__proto__" !== i &&
              "constructor" !== i &&
              "prototype" !== i &&
              (t[i] = D(n[i]) ? e(t[i] || (t[i] = {}), n[i]) : n[i]);
          return t;
        },
        we = function (e, t) {
          var n,
            i = {};
          for (n in e) n in t || (i[n] = e[n]);
          return i;
        },
        Se = function (e) {
          var t,
            n = e.parent || r,
            i = e.keyframes
              ? ((t = R(e.keyframes)),
                function (e, n) {
                  for (var i in n)
                    i in e ||
                      ("duration" === i && t) ||
                      "ease" === i ||
                      (e[i] = n[i]);
                })
              : ye;
          if (O(e.inherit))
            for (; n; ) i(e, n.vars.defaults), (n = n.parent || n._dp);
          return e;
        },
        _e = function (e, t, n, i, r) {
          void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
          var o,
            s = e[i];
          if (r) for (o = t[r]; s && s[r] > o; ) s = s._prev;
          return (
            s
              ? ((t._next = s._next), (s._next = t))
              : ((t._next = e[n]), (e[n] = t)),
            t._next ? (t._next._prev = t) : (e[i] = t),
            (t._prev = s),
            (t.parent = t._dp = e),
            t
          );
        },
        Te = function (e, t, n, i) {
          void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
          var r = t._prev,
            o = t._next;
          r ? (r._next = o) : e[n] === t && (e[n] = o),
            o ? (o._prev = r) : e[i] === t && (e[i] = r),
            (t._next = t._prev = t.parent = null);
        },
        Ce = function (e, t) {
          e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
            (e._act = 0);
        },
        Ee = function (e, t) {
          if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
          return e;
        },
        Ae = function e(t) {
          return !t || (t._ts && e(t.parent));
        },
        ke = function (e) {
          return e._repeat
            ? Me(e._tTime, (e = e.duration() + e._rDelay)) * e
            : 0;
        },
        Me = function (e, t) {
          var n = Math.floor((e /= t));
          return e && n === e ? n - 1 : n;
        },
        Pe = function (e, t) {
          return (
            (e - t._start) * t._ts +
            (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
          );
        },
        Le = function (e) {
          return (e._end = de(
            e._start + (e._tDur / Math.abs(e._ts || e._rts || w) || 0)
          ));
        },
        De = function (e, t) {
          var n = e._dp;
          return (
            n &&
              n.smoothChildTiming &&
              e._ts &&
              ((e._start = de(
                n._time -
                  (e._ts > 0
                    ? t / e._ts
                    : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
              )),
              Le(e),
              n._dirty || Ee(n, e)),
            e
          );
        },
        Oe = function (e, t) {
          var n;
          if (
            ((t._time || (t._initted && !t._dur)) &&
              ((n = Pe(e.rawTime(), t)),
              (!t._dur || Ve(0, t.totalDuration(), n) - t._tTime > w) &&
                t.render(n, !0)),
            Ee(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
          ) {
            if (e._dur < e.duration())
              for (n = e; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            e._zTime = -1e-8;
          }
        },
        Be = function (e, t, n, i) {
          return (
            t.parent && Ce(t),
            (t._start = de(
              (P(n) ? n : n || e !== r ? je(e, n, t) : e._time) + t._delay
            )),
            (t._end = de(
              t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
            )),
            _e(e, t, "_first", "_last", e._sort ? "_start" : 0),
            qe(t) || (e._recent = t),
            i || Oe(e, t),
            e
          );
        },
        Ie = function (e, t) {
          return (
            (V.ScrollTrigger || Y("scrollTrigger", t)) &&
            V.ScrollTrigger.create(t, e)
          );
        },
        ze = function (e, t, n, i) {
          return (
            qt(e, t),
            e._initted
              ? !n &&
                e._pt &&
                ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
                c !== vt.frame
                ? (J.push(e), (e._lazy = [t, i]), 1)
                : void 0
              : 1
          );
        },
        Re = function e(t) {
          var n = t.parent;
          return (
            n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
          );
        },
        qe = function (e) {
          var t = e.data;
          return "isFromStart" === t || "isStart" === t;
        },
        Ne = function (e, t, n, i) {
          var r = e._repeat,
            o = de(t) || 0,
            s = e._tTime / e._tDur;
          return (
            s && !i && (e._time *= o / e._dur),
            (e._dur = o),
            (e._tDur = r
              ? r < 0
                ? 1e10
                : de(o * (r + 1) + e._rDelay * r)
              : o),
            s > 0 && !i ? De(e, (e._tTime = e._tDur * s)) : e.parent && Le(e),
            n || Ee(e.parent, e),
            e
          );
        },
        $e = function (e) {
          return e instanceof Dt ? Ee(e) : Ne(e, e._dur);
        },
        Fe = { _start: 0, endTime: K, totalDuration: K },
        je = function e(t, n, i) {
          var r,
            o,
            s,
            a = t.labels,
            l = t._recent || Fe,
            c = t.duration() >= b ? l.endTime(!1) : t._dur;
          return k(n) && (isNaN(n) || n in a)
            ? ((o = n.charAt(0)),
              (s = "%" === n.substr(-1)),
              (r = n.indexOf("=")),
              "<" === o || ">" === o
                ? (r >= 0 && (n = n.replace(/=/, "")),
                  ("<" === o ? l._start : l.endTime(l._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                      (s ? (r < 0 ? l : i).totalDuration() / 100 : 1))
                : r < 0
                ? (n in a || (a[n] = c), a[n])
                : ((o = parseFloat(n.charAt(r - 1) + n.substr(r + 1))),
                  s && i && (o = (o / 100) * (R(i) ? i[0] : i).totalDuration()),
                  r > 1 ? e(t, n.substr(0, r - 1), i) + o : c + o))
            : null == n
            ? c
            : +n;
        },
        He = function (e, t, n) {
          var i,
            r,
            o = P(t[1]),
            s = (o ? 2 : 1) + (e < 2 ? 0 : 1),
            a = t[s];
          if ((o && (a.duration = t[1]), (a.parent = n), e)) {
            for (i = a, r = n; r && !("immediateRender" in i); )
              (i = r.vars.defaults || {}), (r = O(r.vars.inherit) && r.parent);
            (a.immediateRender = O(i.immediateRender)),
              e < 2 ? (a.runBackwards = 1) : (a.startAt = t[s - 1]);
          }
          return new Ht(t[0], a, t[s + 1]);
        },
        We = function (e, t) {
          return e || 0 === e ? t(e) : t;
        },
        Ve = function (e, t, n) {
          return n < e ? e : n > t ? t : n;
        },
        Ge = function (e, t) {
          return k(e) && (t = W.exec(e)) ? t[1] : "";
        },
        Xe = [].slice,
        Ye = function (e, t) {
          return (
            e &&
            D(e) &&
            "length" in e &&
            ((!t && !e.length) || (e.length - 1 in e && D(e[0]))) &&
            !e.nodeType &&
            e !== o
          );
        },
        Ue = function (e, t, n) {
          return (
            void 0 === n && (n = []),
            e.forEach(function (e) {
              var i;
              return (k(e) && !t) || Ye(e, 1)
                ? (i = n).push.apply(i, Qe(e))
                : n.push(e);
            }) || n
          );
        },
        Qe = function (e, t, n) {
          return !k(e) || n || (!s && yt())
            ? R(e)
              ? Ue(e, n)
              : Ye(e)
              ? Xe.call(e, 0)
              : e
              ? [e]
              : []
            : Xe.call((t || a).querySelectorAll(e), 0);
        },
        Ke = function (e) {
          return e.sort(function () {
            return 0.5 - Math.random();
          });
        },
        Ze = function (e) {
          if (M(e)) return e;
          var t = D(e) ? e : { each: e },
            n = Ct(t.ease),
            i = t.from || 0,
            r = parseFloat(t.base) || 0,
            o = {},
            s = i > 0 && i < 1,
            a = isNaN(i) || s,
            l = t.axis,
            c = i,
            u = i;
          return (
            k(i)
              ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
              : !s && a && ((c = i[0]), (u = i[1])),
            function (e, s, d) {
              var p,
                f,
                h,
                m,
                g,
                v,
                y,
                x,
                w,
                S = (d || t).length,
                _ = o[S];
              if (!_) {
                if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, b])[1])) {
                  for (
                    y = -b;
                    y < (y = d[w++].getBoundingClientRect().left) && w < S;

                  );
                  w--;
                }
                for (
                  _ = o[S] = [],
                    p = a ? Math.min(w, S) * c - 0.5 : i % w,
                    f = w === b ? 0 : a ? (S * u) / w - 0.5 : (i / w) | 0,
                    y = 0,
                    x = b,
                    v = 0;
                  v < S;
                  v++
                )
                  (h = (v % w) - p),
                    (m = f - ((v / w) | 0)),
                    (_[v] = g =
                      l ? Math.abs("y" === l ? m : h) : C(h * h + m * m)),
                    g > y && (y = g),
                    g < x && (x = g);
                "random" === i && Ke(_),
                  (_.max = y - x),
                  (_.min = x),
                  (_.v = S =
                    (parseFloat(t.amount) ||
                      parseFloat(t.each) *
                        (w > S
                          ? S - 1
                          : l
                          ? "y" === l
                            ? S / w
                            : w
                          : Math.max(w, S / w)) ||
                      0) * ("edges" === i ? -1 : 1)),
                  (_.b = S < 0 ? r - S : r),
                  (_.u = Ge(t.amount || t.each) || 0),
                  (n = n && S < 0 ? _t(n) : n);
              }
              return (
                (S = (_[e] - _.min) / _.max || 0),
                de(_.b + (n ? n(S) : S) * _.v) + _.u
              );
            }
          );
        },
        Je = function (e) {
          var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
          return function (n) {
            var i = Math.round(parseFloat(n) / e) * e * t;
            return (i - (i % 1)) / t + (P(n) ? 0 : Ge(n));
          };
        },
        et = function (e, t) {
          var n,
            i,
            r = R(e);
          return (
            !r &&
              D(e) &&
              ((n = r = e.radius || b),
              e.values
                ? ((e = Qe(e.values)), (i = !P(e[0])) && (n *= n))
                : (e = Je(e.increment))),
            We(
              t,
              r
                ? M(e)
                  ? function (t) {
                      return (i = e(t)), Math.abs(i - t) <= n ? i : t;
                    }
                  : function (t) {
                      for (
                        var r,
                          o,
                          s = parseFloat(i ? t.x : t),
                          a = parseFloat(i ? t.y : 0),
                          l = b,
                          c = 0,
                          u = e.length;
                        u--;

                      )
                        (r = i
                          ? (r = e[u].x - s) * r + (o = e[u].y - a) * o
                          : Math.abs(e[u] - s)) < l && ((l = r), (c = u));
                      return (
                        (c = !n || l <= n ? e[c] : t),
                        i || c === t || P(t) ? c : c + Ge(t)
                      );
                    }
                : Je(e)
            )
          );
        },
        tt = function (e, t, n, i) {
          return We(R(e) ? !t : !0 === n ? !!(n = 0) : !i, function () {
            return R(e)
              ? e[~~(Math.random() * e.length)]
              : (n = n || 1e-5) &&
                  (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (e - n / 2 + Math.random() * (t - e + 0.99 * n)) / n
                    ) *
                      n *
                      i
                  ) / i;
          });
        },
        nt = function (e, t, n) {
          return We(n, function (n) {
            return e[~~t(n)];
          });
        },
        it = function (e) {
          for (var t, n, i, r, o = 0, s = ""; ~(t = e.indexOf("random(", o)); )
            (i = e.indexOf(")", t)),
              (r = "[" === e.charAt(t + 7)),
              (n = e.substr(t + 7, i - t - 7).match(r ? H : q)),
              (s +=
                e.substr(o, t - o) +
                tt(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5)),
              (o = i + 1);
          return s + e.substr(o, e.length - o);
        },
        rt = function (e, t, n, i, r) {
          var o = t - e,
            s = i - n;
          return We(r, function (t) {
            return n + (((t - e) / o) * s || 0);
          });
        },
        ot = function (e, t, n) {
          var i,
            r,
            o,
            s = e.labels,
            a = b;
          for (i in s)
            (r = s[i] - t) < 0 == !!n &&
              r &&
              a > (r = Math.abs(r)) &&
              ((o = i), (a = r));
          return o;
        },
        st = function (e, t, n) {
          var i,
            r,
            o = e.vars,
            s = o[t];
          if (s)
            return (
              (i = o[t + "Params"]),
              (r = o.callbackScope || e),
              n && J.length && he(),
              i ? s.apply(r, i) : s.call(r)
            );
        },
        at = function (e) {
          return (
            Ce(e),
            e.scrollTrigger && e.scrollTrigger.kill(!1),
            e.progress() < 1 && st(e, "onInterrupt"),
            e
          );
        },
        lt = 255,
        ct = {
          aqua: [0, lt, lt],
          lime: [0, lt, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, lt],
          navy: [0, 0, 128],
          white: [lt, lt, lt],
          olive: [128, 128, 0],
          yellow: [lt, lt, 0],
          orange: [lt, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [lt, 0, 0],
          pink: [lt, 192, 203],
          cyan: [0, lt, lt],
          transparent: [lt, lt, lt, 0],
        },
        ut = function (e, t, n) {
          return (
            ((6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1
              ? t + (n - t) * e * 6
              : e < 0.5
              ? n
              : 3 * e < 2
              ? t + (n - t) * (2 / 3 - e) * 6
              : t) *
              lt +
              0.5) |
            0
          );
        },
        dt = function (e, t, n) {
          var i,
            r,
            o,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f = e ? (P(e) ? [e >> 16, (e >> 8) & lt, e & lt] : 0) : ct.black;
          if (!f) {
            if (
              ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), ct[e])
            )
              f = ct[e];
            else if ("#" === e.charAt(0)) {
              if (
                (e.length < 6 &&
                  ((i = e.charAt(1)),
                  (r = e.charAt(2)),
                  (o = e.charAt(3)),
                  (e =
                    "#" +
                    i +
                    i +
                    r +
                    r +
                    o +
                    o +
                    (5 === e.length ? e.charAt(4) + e.charAt(4) : ""))),
                9 === e.length)
              )
                return [
                  (f = parseInt(e.substr(1, 6), 16)) >> 16,
                  (f >> 8) & lt,
                  f & lt,
                  parseInt(e.substr(7), 16) / 255,
                ];
              f = [
                (e = parseInt(e.substr(1), 16)) >> 16,
                (e >> 8) & lt,
                e & lt,
              ];
            } else if ("hsl" === e.substr(0, 3))
              if (((f = p = e.match(q)), t)) {
                if (~e.indexOf("="))
                  return (f = e.match(N)), n && f.length < 4 && (f[3] = 1), f;
              } else
                (s = (+f[0] % 360) / 360),
                  (a = +f[1] / 100),
                  (i =
                    2 * (l = +f[2] / 100) -
                    (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                  f.length > 3 && (f[3] *= 1),
                  (f[0] = ut(s + 1 / 3, i, r)),
                  (f[1] = ut(s, i, r)),
                  (f[2] = ut(s - 1 / 3, i, r));
            else f = e.match(q) || ct.transparent;
            f = f.map(Number);
          }
          return (
            t &&
              !p &&
              ((i = f[0] / lt),
              (r = f[1] / lt),
              (o = f[2] / lt),
              (l = ((c = Math.max(i, r, o)) + (u = Math.min(i, r, o))) / 2),
              c === u
                ? (s = a = 0)
                : ((d = c - u),
                  (a = l > 0.5 ? d / (2 - c - u) : d / (c + u)),
                  (s =
                    c === i
                      ? (r - o) / d + (r < o ? 6 : 0)
                      : c === r
                      ? (o - i) / d + 2
                      : (i - r) / d + 4),
                  (s *= 60)),
              (f[0] = ~~(s + 0.5)),
              (f[1] = ~~(100 * a + 0.5)),
              (f[2] = ~~(100 * l + 0.5))),
            n && f.length < 4 && (f[3] = 1),
            f
          );
        },
        pt = function (e) {
          var t = [],
            n = [],
            i = -1;
          return (
            e.split(ht).forEach(function (e) {
              var r = e.match($) || [];
              t.push.apply(t, r), n.push((i += r.length + 1));
            }),
            (t.c = n),
            t
          );
        },
        ft = function (e, t, n) {
          var i,
            r,
            o,
            s,
            a = "",
            l = (e + a).match(ht),
            c = t ? "hsla(" : "rgba(",
            u = 0;
          if (!l) return e;
          if (
            ((l = l.map(function (e) {
              return (
                (e = dt(e, t, 1)) &&
                c +
                  (t
                    ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                    : e.join(",")) +
                  ")"
              );
            })),
            n && ((o = pt(e)), (i = n.c).join(a) !== o.c.join(a)))
          )
            for (s = (r = e.replace(ht, "1").split($)).length - 1; u < s; u++)
              a +=
                r[u] +
                (~i.indexOf(u)
                  ? l.shift() || c + "0,0,0,0)"
                  : (o.length ? o : l.length ? l : n).shift());
          if (!r)
            for (s = (r = e.split(ht)).length - 1; u < s; u++) a += r[u] + l[u];
          return a + r[s];
        },
        ht = (function () {
          var e,
            t =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (e in ct) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi");
        })(),
        mt = /hsl[a]?\(/,
        gt = function (e) {
          var t,
            n = e.join(" ");
          if (((ht.lastIndex = 0), ht.test(n)))
            return (
              (t = mt.test(n)),
              (e[1] = ft(e[1], t)),
              (e[0] = ft(e[0], t, pt(e[1]))),
              !0
            );
        },
        vt = (function () {
          var e,
            t,
            n,
            i,
            r,
            c,
            u = Date.now,
            p = 500,
            f = 33,
            h = u(),
            m = h,
            g = 1e3 / 240,
            v = g,
            y = [],
            x = function n(o) {
              var s,
                a,
                l,
                d,
                x = u() - m,
                b = !0 === o;
              if (
                (x > p && (h += x - f),
                ((s = (l = (m += x) - h) - v) > 0 || b) &&
                  ((d = ++i.frame),
                  (r = l - 1e3 * i.time),
                  (i.time = l /= 1e3),
                  (v += s + (s >= g ? 4 : g - s)),
                  (a = 1)),
                b || (e = t(n)),
                a)
              )
                for (c = 0; c < y.length; c++) y[c](l, r, d, o);
            };
          return (
            (i = {
              time: 0,
              frame: 0,
              tick: function () {
                x(!0);
              },
              deltaRatio: function (e) {
                return r / (1e3 / (e || 60));
              },
              wake: function () {
                l &&
                  (!s &&
                    B() &&
                    ((o = s = window),
                    (a = o.document || {}),
                    (V.gsap = ln),
                    (o.gsapVersions || (o.gsapVersions = [])).push(ln.version),
                    X(G || o.GreenSockGlobals || (!o.gsap && o) || {}),
                    (n = o.requestAnimationFrame)),
                  e && i.sleep(),
                  (t =
                    n ||
                    function (e) {
                      return setTimeout(e, (v - 1e3 * i.time + 1) | 0);
                    }),
                  (d = 1),
                  x(2));
              },
              sleep: function () {
                (n ? o.cancelAnimationFrame : clearTimeout)(e),
                  (d = 0),
                  (t = K);
              },
              lagSmoothing: function (e, t) {
                (p = e || 1e8), (f = Math.min(t, p, 0));
              },
              fps: function (e) {
                (g = 1e3 / (e || 240)), (v = 1e3 * i.time + g);
              },
              add: function (e, t, n) {
                var r = t
                  ? function (t, n, o, s) {
                      e(t, n, o, s), i.remove(r);
                    }
                  : e;
                return i.remove(e), y[n ? "unshift" : "push"](r), yt(), r;
              },
              remove: function (e, t) {
                ~(t = y.indexOf(e)) && y.splice(t, 1) && c >= t && c--;
              },
              _listeners: y,
            }),
            i
          );
        })(),
        yt = function () {
          return !d && vt.wake();
        },
        xt = {},
        bt = /^[\d.\-M][\d.\-,\s]/,
        wt = /["']/g,
        St = function (e) {
          for (
            var t,
              n,
              i,
              r = {},
              o = e.substr(1, e.length - 3).split(":"),
              s = o[0],
              a = 1,
              l = o.length;
            a < l;
            a++
          )
            (n = o[a]),
              (t = a !== l - 1 ? n.lastIndexOf(",") : n.length),
              (i = n.substr(0, t)),
              (r[s] = isNaN(i) ? i.replace(wt, "").trim() : +i),
              (s = n.substr(t + 1).trim());
          return r;
        },
        _t = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        Tt = function e(t, n) {
          for (var i, r = t._first; r; )
            r instanceof Dt
              ? e(r, n)
              : !r.vars.yoyoEase ||
                (r._yoyo && r._repeat) ||
                r._yoyo === n ||
                (r.timeline
                  ? e(r.timeline, n)
                  : ((i = r._ease),
                    (r._ease = r._yEase),
                    (r._yEase = i),
                    (r._yoyo = n))),
              (r = r._next);
        },
        Ct = function (e, t) {
          return (
            (e &&
              (M(e)
                ? e
                : xt[e] ||
                  (function (e) {
                    var t = (e + "").split("("),
                      n = xt[t[0]];
                    return n && t.length > 1 && n.config
                      ? n.config.apply(
                          null,
                          ~e.indexOf("{")
                            ? [St(t[1])]
                            : (function (e) {
                                var t = e.indexOf("(") + 1,
                                  n = e.indexOf(")"),
                                  i = e.indexOf("(", t);
                                return e.substring(
                                  t,
                                  ~i && i < n ? e.indexOf(")", n + 1) : n
                                );
                              })(e)
                                .split(",")
                                .map(ge)
                        )
                      : xt._CE && bt.test(e)
                      ? xt._CE("", e)
                      : n;
                  })(e))) ||
            t
          );
        },
        Et = function (e, t, n, i) {
          void 0 === n &&
            (n = function (e) {
              return 1 - t(1 - e);
            }),
            void 0 === i &&
              (i = function (e) {
                return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
              });
          var r,
            o = { easeIn: t, easeOut: n, easeInOut: i };
          return (
            ce(e, function (e) {
              for (var t in ((xt[e] = V[e] = o),
              (xt[(r = e.toLowerCase())] = n),
              o))
                xt[
                  r +
                    ("easeIn" === t
                      ? ".in"
                      : "easeOut" === t
                      ? ".out"
                      : ".inOut")
                ] = xt[e + "." + t] = o[t];
            }),
            o
          );
        },
        At = function (e) {
          return function (t) {
            return t < 0.5
              ? (1 - e(1 - 2 * t)) / 2
              : 0.5 + e(2 * (t - 0.5)) / 2;
          };
        },
        kt = function e(t, n, i) {
          var r = n >= 1 ? n : 1,
            o = (i || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            s = (o / S) * (Math.asin(1 / r) || 0),
            a = function (e) {
              return 1 === e
                ? 1
                : r * Math.pow(2, -10 * e) * A((e - s) * o) + 1;
            },
            l =
              "out" === t
                ? a
                : "in" === t
                ? function (e) {
                    return 1 - a(1 - e);
                  }
                : At(a);
          return (
            (o = S / o),
            (l.config = function (n, i) {
              return e(t, n, i);
            }),
            l
          );
        },
        Mt = function e(t, n) {
          void 0 === n && (n = 1.70158);
          var i = function (e) {
              return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
            },
            r =
              "out" === t
                ? i
                : "in" === t
                ? function (e) {
                    return 1 - i(1 - e);
                  }
                : At(i);
          return (
            (r.config = function (n) {
              return e(t, n);
            }),
            r
          );
        };
      ce("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
        var n = t < 5 ? t + 1 : t;
        Et(
          e + ",Power" + (n - 1),
          t
            ? function (e) {
                return Math.pow(e, n);
              }
            : function (e) {
                return e;
              },
          function (e) {
            return 1 - Math.pow(1 - e, n);
          },
          function (e) {
            return e < 0.5
              ? Math.pow(2 * e, n) / 2
              : 1 - Math.pow(2 * (1 - e), n) / 2;
          }
        );
      }),
        (xt.Linear.easeNone = xt.none = xt.Linear.easeIn),
        Et("Elastic", kt("in"), kt("out"), kt()),
        (p = 7.5625),
        (m = 2 * (h = 1 / (f = 2.75))),
        (g = 2.5 * h),
        Et(
          "Bounce",
          function (e) {
            return 1 - v(1 - e);
          },
          (v = function (e) {
            return e < h
              ? p * e * e
              : e < m
              ? p * Math.pow(e - 1.5 / f, 2) + 0.75
              : e < g
              ? p * (e -= 2.25 / f) * e + 0.9375
              : p * Math.pow(e - 2.625 / f, 2) + 0.984375;
          })
        ),
        Et("Expo", function (e) {
          return e ? Math.pow(2, 10 * (e - 1)) : 0;
        }),
        Et("Circ", function (e) {
          return -(C(1 - e * e) - 1);
        }),
        Et("Sine", function (e) {
          return 1 === e ? 1 : 1 - E(e * _);
        }),
        Et("Back", Mt("in"), Mt("out"), Mt()),
        (xt.SteppedEase =
          xt.steps =
          V.SteppedEase =
            {
              config: function (e, t) {
                void 0 === e && (e = 1);
                var n = 1 / e,
                  i = e + (t ? 0 : 1),
                  r = t ? 1 : 0;
                return function (e) {
                  return (((i * Ve(0, 0.99999999, e)) | 0) + r) * n;
                };
              },
            }),
        (x.ease = xt["quad.out"]),
        ce(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (e) {
            return (oe += e + "," + e + "Params,");
          }
        );
      var Pt = function (e, t) {
          (this.id = T++),
            (e._gsap = this),
            (this.target = e),
            (this.harness = t),
            (this.get = t ? t.get : le),
            (this.set = t ? t.getSetter : Yt);
        },
        Lt = (function () {
          function e(e) {
            (this.vars = e),
              (this._delay = +e.delay || 0),
              (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
                ((this._rDelay = e.repeatDelay || 0),
                (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
              (this._ts = 1),
              Ne(this, +e.duration, 1, 1),
              (this.data = e.data),
              d || vt.wake();
          }
          var t = e.prototype;
          return (
            (t.delay = function (e) {
              return e || 0 === e
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + e - this._delay),
                  (this._delay = e),
                  this)
                : this._delay;
            }),
            (t.duration = function (e) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
                  )
                : this.totalDuration() && this._dur;
            }),
            (t.totalDuration = function (e) {
              return arguments.length
                ? ((this._dirty = 0),
                  Ne(
                    this,
                    this._repeat < 0
                      ? e
                      : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (t.totalTime = function (e, t) {
              if ((yt(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (
                  De(this, e), !n._dp || n.parent || Oe(n, this);
                  n && n.parent;

                )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && e < this._tDur) ||
                    (this._ts < 0 && e > 0) ||
                    (!this._tDur && !e)) &&
                  Be(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== e ||
                  (!this._dur && !t) ||
                  (this._initted && Math.abs(this._zTime) === w) ||
                  (!e && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = e), me(this, e, t)),
                this
              );
            }),
            (t.time = function (e, t) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), e + ke(this)) %
                      (this._dur + this._rDelay) || (e ? this._dur : 0),
                    t
                  )
                : this._time;
            }),
            (t.totalProgress = function (e, t) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * e, t)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (t.progress = function (e, t) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                      ke(this),
                    t
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (t.iteration = function (e, t) {
              var n = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (e - 1) * n, t)
                : this._repeat
                ? Me(this._tTime, n) + 1
                : 1;
            }),
            (t.timeScale = function (e) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === e) return this;
              var t =
                this.parent && this._ts
                  ? Pe(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +e || 0),
                (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
                this.totalTime(Ve(-this._delay, this._tDur, t), !0),
                Le(this),
                (function (e) {
                  for (var t = e.parent; t && t.parent; )
                    (t._dirty = 1), t.totalDuration(), (t = t.parent);
                  return e;
                })(this)
              );
            }),
            (t.paused = function (e) {
              return arguments.length
                ? (this._ps !== e &&
                    ((this._ps = e),
                    e
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (yt(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== w &&
                            (this._tTime -= w)
                        ))),
                  this)
                : this._ps;
            }),
            (t.startTime = function (e) {
              if (arguments.length) {
                this._start = e;
                var t = this.parent || this._dp;
                return (
                  t &&
                    (t._sort || !this.parent) &&
                    Be(t, this, e - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (t.endTime = function (e) {
              return (
                this._start +
                (O(e) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (t.rawTime = function (e) {
              var t = this.parent || this._dp;
              return t
                ? e &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? Pe(t.rawTime(e), this)
                  : this._tTime
                : this._tTime;
            }),
            (t.globalTime = function (e) {
              for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
                (n = t._start + n / (t._ts || 1)), (t = t._dp);
              return n;
            }),
            (t.repeat = function (e) {
              return arguments.length
                ? ((this._repeat = e === 1 / 0 ? -2 : e), $e(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (t.repeatDelay = function (e) {
              if (arguments.length) {
                var t = this._time;
                return (this._rDelay = e), $e(this), t ? this.time(t) : this;
              }
              return this._rDelay;
            }),
            (t.yoyo = function (e) {
              return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
            }),
            (t.seek = function (e, t) {
              return this.totalTime(je(this, e), O(t));
            }),
            (t.restart = function (e, t) {
              return this.play().totalTime(e ? -this._delay : 0, O(t));
            }),
            (t.play = function (e, t) {
              return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
            }),
            (t.reverse = function (e, t) {
              return (
                null != e && this.seek(e || this.totalDuration(), t),
                this.reversed(!0).paused(!1)
              );
            }),
            (t.pause = function (e, t) {
              return null != e && this.seek(e, t), this.paused(!0);
            }),
            (t.resume = function () {
              return this.paused(!1);
            }),
            (t.reversed = function (e) {
              return arguments.length
                ? (!!e !== this.reversed() &&
                    this.timeScale(-this._rts || (e ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (t.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (t.isActive = function () {
              var e,
                t = this.parent || this._dp,
                n = this._start;
              return !(
                t &&
                !(
                  this._ts &&
                  this._initted &&
                  t.isActive() &&
                  (e = t.rawTime(!0)) >= n &&
                  e < this.endTime(!0) - w
                )
              );
            }),
            (t.eventCallback = function (e, t, n) {
              var i = this.vars;
              return arguments.length > 1
                ? (t
                    ? ((i[e] = t),
                      n && (i[e + "Params"] = n),
                      "onUpdate" === e && (this._onUpdate = t))
                    : delete i[e],
                  this)
                : i[e];
            }),
            (t.then = function (e) {
              var t = this;
              return new Promise(function (n) {
                var i = M(e) ? e : ve,
                  r = function () {
                    var e = t.then;
                    (t.then = null),
                      M(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                      n(i),
                      (t.then = e);
                  };
                (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
                (!t._tTime && t._ts < 0)
                  ? r()
                  : (t._prom = r);
              });
            }),
            (t.kill = function () {
              at(this);
            }),
            e
          );
        })();
      ye(Lt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var Dt = (function (n) {
        function i(t, i) {
          var o;
          return (
            void 0 === t && (t = {}),
            ((o = n.call(this, t) || this).labels = {}),
            (o.smoothChildTiming = !!t.smoothChildTiming),
            (o.autoRemoveChildren = !!t.autoRemoveChildren),
            (o._sort = O(t.sortChildren)),
            r && Be(t.parent || r, e(o), i),
            t.reversed && o.reverse(),
            t.paused && o.paused(!0),
            t.scrollTrigger && Ie(e(o), t.scrollTrigger),
            o
          );
        }
        t(i, n);
        var o = i.prototype;
        return (
          (o.to = function (e, t, n) {
            return He(0, arguments, this), this;
          }),
          (o.from = function (e, t, n) {
            return He(1, arguments, this), this;
          }),
          (o.fromTo = function (e, t, n, i) {
            return He(2, arguments, this), this;
          }),
          (o.set = function (e, t, n) {
            return (
              (t.duration = 0),
              (t.parent = this),
              Se(t).repeatDelay || (t.repeat = 0),
              (t.immediateRender = !!t.immediateRender),
              new Ht(e, t, je(this, n), 1),
              this
            );
          }),
          (o.call = function (e, t, n) {
            return Be(this, Ht.delayedCall(0, e, t), n);
          }),
          (o.staggerTo = function (e, t, n, i, r, o, s) {
            return (
              (n.duration = t),
              (n.stagger = n.stagger || i),
              (n.onComplete = o),
              (n.onCompleteParams = s),
              (n.parent = this),
              new Ht(e, n, je(this, r)),
              this
            );
          }),
          (o.staggerFrom = function (e, t, n, i, r, o, s) {
            return (
              (n.runBackwards = 1),
              (Se(n).immediateRender = O(n.immediateRender)),
              this.staggerTo(e, t, n, i, r, o, s)
            );
          }),
          (o.staggerFromTo = function (e, t, n, i, r, o, s, a) {
            return (
              (i.startAt = n),
              (Se(i).immediateRender = O(i.immediateRender)),
              this.staggerTo(e, t, i, r, o, s, a)
            );
          }),
          (o.render = function (e, t, n) {
            var i,
              o,
              s,
              a,
              l,
              c,
              u,
              d,
              p,
              f,
              h,
              m,
              g = this._time,
              v = this._dirty ? this.totalDuration() : this._tDur,
              y = this._dur,
              x = e <= 0 ? 0 : de(e),
              b = this._zTime < 0 != e < 0 && (this._initted || !y);
            if (
              (this !== r && x > v && e >= 0 && (x = v),
              x !== this._tTime || n || b)
            ) {
              if (
                (g !== this._time &&
                  y &&
                  ((x += this._time - g), (e += this._time - g)),
                (i = x),
                (p = this._start),
                (c = !(d = this._ts)),
                b && (y || (g = this._zTime), (e || !t) && (this._zTime = e)),
                this._repeat)
              ) {
                if (
                  ((h = this._yoyo),
                  (l = y + this._rDelay),
                  this._repeat < -1 && e < 0)
                )
                  return this.totalTime(100 * l + e, t, n);
                if (
                  ((i = de(x % l)),
                  x === v
                    ? ((a = this._repeat), (i = y))
                    : ((a = ~~(x / l)) && a === x / l && ((i = y), a--),
                      i > y && (i = y)),
                  (f = Me(this._tTime, l)),
                  !g && this._tTime && f !== a && (f = a),
                  h && 1 & a && ((i = y - i), (m = 1)),
                  a !== f && !this._lock)
                ) {
                  var S = h && 1 & f,
                    _ = S === (h && 1 & a);
                  if (
                    (a < f && (S = !S),
                    (g = S ? 0 : y),
                    (this._lock = 1),
                    (this.render(g || (m ? 0 : de(a * l)), t, !y)._lock = 0),
                    (this._tTime = x),
                    !t && this.parent && st(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !m &&
                      (this.invalidate()._lock = 1),
                    (g && g !== this._time) ||
                      c !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((y = this._dur),
                    (v = this._tDur),
                    _ &&
                      ((this._lock = 2),
                      (g = S ? y : -1e-4),
                      this.render(g, !0),
                      this.vars.repeatRefresh && !m && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !c)
                  )
                    return this;
                  Tt(this, m);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((u = (function (e, t, n) {
                    var i;
                    if (n > t)
                      for (i = e._first; i && i._start <= n; ) {
                        if ("isPause" === i.data && i._start > t) return i;
                        i = i._next;
                      }
                    else
                      for (i = e._last; i && i._start >= n; ) {
                        if ("isPause" === i.data && i._start < t) return i;
                        i = i._prev;
                      }
                  })(this, de(g), de(i))),
                  u && (x -= i - (i = u._start))),
                (this._tTime = x),
                (this._time = i),
                (this._act = !d),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = e),
                  (g = 0)),
                !g && i && !t && (st(this, "onStart"), this._tTime !== x))
              )
                return this;
              if (i >= g && e >= 0)
                for (o = this._first; o; ) {
                  if (
                    ((s = o._next),
                    (o._act || i >= o._start) && o._ts && u !== o)
                  ) {
                    if (o.parent !== this) return this.render(e, t, n);
                    if (
                      (o.render(
                        o._ts > 0
                          ? (i - o._start) * o._ts
                          : (o._dirty ? o.totalDuration() : o._tDur) +
                              (i - o._start) * o._ts,
                        t,
                        n
                      ),
                      i !== this._time || (!this._ts && !c))
                    ) {
                      (u = 0), s && (x += this._zTime = -1e-8);
                      break;
                    }
                  }
                  o = s;
                }
              else {
                o = this._last;
                for (var T = e < 0 ? e : i; o; ) {
                  if (
                    ((s = o._prev), (o._act || T <= o._end) && o._ts && u !== o)
                  ) {
                    if (o.parent !== this) return this.render(e, t, n);
                    if (
                      (o.render(
                        o._ts > 0
                          ? (T - o._start) * o._ts
                          : (o._dirty ? o.totalDuration() : o._tDur) +
                              (T - o._start) * o._ts,
                        t,
                        n
                      ),
                      i !== this._time || (!this._ts && !c))
                    ) {
                      (u = 0), s && (x += this._zTime = T ? -1e-8 : w);
                      break;
                    }
                  }
                  o = s;
                }
              }
              if (
                u &&
                !t &&
                (this.pause(),
                (u.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1),
                this._ts)
              )
                return (this._start = p), Le(this), this.render(e, t, n);
              this._onUpdate && !t && st(this, "onUpdate", !0),
                ((x === v && this._tTime >= this.totalDuration()) ||
                  (!x && g)) &&
                  ((p !== this._start && Math.abs(d) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((e || !y) &&
                      ((x === v && this._ts > 0) || (!x && this._ts < 0)) &&
                      Ce(this, 1),
                    t ||
                      (e < 0 && !g) ||
                      (!x && !g && v) ||
                      (st(
                        this,
                        x === v && e >= 0 ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(x < v && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (o.add = function (e, t) {
            var n = this;
            if ((P(t) || (t = je(this, t, e)), !(e instanceof Lt))) {
              if (R(e))
                return (
                  e.forEach(function (e) {
                    return n.add(e, t);
                  }),
                  this
                );
              if (k(e)) return this.addLabel(e, t);
              if (!M(e)) return this;
              e = Ht.delayedCall(0, e);
            }
            return this !== e ? Be(this, e, t) : this;
          }),
          (o.getChildren = function (e, t, n, i) {
            void 0 === e && (e = !0),
              void 0 === t && (t = !0),
              void 0 === n && (n = !0),
              void 0 === i && (i = -b);
            for (var r = [], o = this._first; o; )
              o._start >= i &&
                (o instanceof Ht
                  ? t && r.push(o)
                  : (n && r.push(o),
                    e && r.push.apply(r, o.getChildren(!0, t, n)))),
                (o = o._next);
            return r;
          }),
          (o.getById = function (e) {
            for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
              if (t[n].vars.id === e) return t[n];
          }),
          (o.remove = function (e) {
            return k(e)
              ? this.removeLabel(e)
              : M(e)
              ? this.killTweensOf(e)
              : (Te(this, e),
                e === this._recent && (this._recent = this._last),
                Ee(this));
          }),
          (o.totalTime = function (e, t) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = de(
                    vt.time -
                      (this._ts > 0
                        ? e / this._ts
                        : (this.totalDuration() - e) / -this._ts)
                  )),
                n.prototype.totalTime.call(this, e, t),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (o.addLabel = function (e, t) {
            return (this.labels[e] = je(this, t)), this;
          }),
          (o.removeLabel = function (e) {
            return delete this.labels[e], this;
          }),
          (o.addPause = function (e, t, n) {
            var i = Ht.delayedCall(0, t || K, n);
            return (
              (i.data = "isPause"),
              (this._hasPause = 1),
              Be(this, i, je(this, e))
            );
          }),
          (o.removePause = function (e) {
            var t = this._first;
            for (e = je(this, e); t; )
              t._start === e && "isPause" === t.data && Ce(t), (t = t._next);
          }),
          (o.killTweensOf = function (e, t, n) {
            for (var i = this.getTweensOf(e, n), r = i.length; r--; )
              Ot !== i[r] && i[r].kill(e, t);
            return this;
          }),
          (o.getTweensOf = function (e, t) {
            for (var n, i = [], r = Qe(e), o = this._first, s = P(t); o; )
              o instanceof Ht
                ? fe(o._targets, r) &&
                  (s
                    ? (!Ot || (o._initted && o._ts)) &&
                      o.globalTime(0) <= t &&
                      o.globalTime(o.totalDuration()) > t
                    : !t || o.isActive()) &&
                  i.push(o)
                : (n = o.getTweensOf(r, t)).length && i.push.apply(i, n),
                (o = o._next);
            return i;
          }),
          (o.tweenTo = function (e, t) {
            t = t || {};
            var n,
              i = this,
              r = je(i, e),
              o = t,
              s = o.startAt,
              a = o.onStart,
              l = o.onStartParams,
              c = o.immediateRender,
              u = Ht.to(
                i,
                ye(
                  {
                    ease: t.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: r,
                    overwrite: "auto",
                    duration:
                      t.duration ||
                      Math.abs(
                        (r - (s && "time" in s ? s.time : i._time)) /
                          i.timeScale()
                      ) ||
                      w,
                    onStart: function () {
                      if ((i.pause(), !n)) {
                        var e =
                          t.duration ||
                          Math.abs(
                            (r - (s && "time" in s ? s.time : i._time)) /
                              i.timeScale()
                          );
                        u._dur !== e && Ne(u, e, 0, 1).render(u._time, !0, !0),
                          (n = 1);
                      }
                      a && a.apply(u, l || []);
                    },
                  },
                  t
                )
              );
            return c ? u.render(0) : u;
          }),
          (o.tweenFromTo = function (e, t, n) {
            return this.tweenTo(t, ye({ startAt: { time: je(this, e) } }, n));
          }),
          (o.recent = function () {
            return this._recent;
          }),
          (o.nextLabel = function (e) {
            return void 0 === e && (e = this._time), ot(this, je(this, e));
          }),
          (o.previousLabel = function (e) {
            return void 0 === e && (e = this._time), ot(this, je(this, e), 1);
          }),
          (o.currentLabel = function (e) {
            return arguments.length
              ? this.seek(e, !0)
              : this.previousLabel(this._time + w);
          }),
          (o.shiftChildren = function (e, t, n) {
            void 0 === n && (n = 0);
            for (var i, r = this._first, o = this.labels; r; )
              r._start >= n && ((r._start += e), (r._end += e)), (r = r._next);
            if (t) for (i in o) o[i] >= n && (o[i] += e);
            return Ee(this);
          }),
          (o.invalidate = function () {
            var e = this._first;
            for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
            return n.prototype.invalidate.call(this);
          }),
          (o.clear = function (e) {
            void 0 === e && (e = !0);
            for (var t, n = this._first; n; )
              (t = n._next), this.remove(n), (n = t);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              e && (this.labels = {}),
              Ee(this)
            );
          }),
          (o.totalDuration = function (e) {
            var t,
              n,
              i,
              o = 0,
              s = this,
              a = s._last,
              l = b;
            if (arguments.length)
              return s.timeScale(
                (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                  (s.reversed() ? -e : e)
              );
            if (s._dirty) {
              for (i = s.parent; a; )
                (t = a._prev),
                  a._dirty && a.totalDuration(),
                  (n = a._start) > l && s._sort && a._ts && !s._lock
                    ? ((s._lock = 1), (Be(s, a, n - a._delay, 1)._lock = 0))
                    : (l = n),
                  n < 0 &&
                    a._ts &&
                    ((o -= n),
                    ((!i && !s._dp) || (i && i.smoothChildTiming)) &&
                      ((s._start += n / s._ts),
                      (s._time -= n),
                      (s._tTime -= n)),
                    s.shiftChildren(-n, !1, -Infinity),
                    (l = 0)),
                  a._end > o && a._ts && (o = a._end),
                  (a = t);
              Ne(s, s === r && s._time > o ? s._time : o, 1, 1), (s._dirty = 0);
            }
            return s._tDur;
          }),
          (i.updateRoot = function (e) {
            if ((r._ts && (me(r, Pe(e, r)), (c = vt.frame)), vt.frame >= ie)) {
              ie += y.autoSleep || 120;
              var t = r._first;
              if ((!t || !t._ts) && y.autoSleep && vt._listeners.length < 2) {
                for (; t && !t._ts; ) t = t._next;
                t || vt.sleep();
              }
            }
          }),
          i
        );
      })(Lt);
      ye(Dt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Ot,
        Bt,
        It = function (e, t, n, i, r, o, s) {
          var a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            m = new rn(this._pt, e, t, 0, 1, Kt, null, r),
            g = 0,
            v = 0;
          for (
            m.b = n,
              m.e = i,
              n += "",
              (f = ~(i += "").indexOf("random(")) && (i = it(i)),
              o && (o((h = [n, i]), e, t), (n = h[0]), (i = h[1])),
              l = n.match(F) || [];
            (a = F.exec(i));

          )
            (u = a[0]),
              (d = i.substring(g, a.index)),
              c ? (c = (c + 1) % 5) : "rgba(" === d.substr(-5) && (c = 1),
              u !== l[v++] &&
                ((p = parseFloat(l[v - 1]) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: d || 1 === v ? d : ",",
                  s: p,
                  c: "=" === u.charAt(1) ? pe(p, u) - p : parseFloat(u) - p,
                  m: c && c < 4 ? Math.round : 0,
                }),
                (g = F.lastIndex));
          return (
            (m.c = g < i.length ? i.substring(g, i.length) : ""),
            (m.fp = s),
            (j.test(i) || f) && (m.e = 0),
            (this._pt = m),
            m
          );
        },
        zt = function (e, t, n, i, r, o, s, a, l) {
          M(i) && (i = i(r || 0, e, o));
          var c,
            u = e[t],
            d =
              "get" !== n
                ? n
                : M(u)
                ? l
                  ? e[
                      t.indexOf("set") || !M(e["get" + t.substr(3)])
                        ? t
                        : "get" + t.substr(3)
                    ](l)
                  : e[t]()
                : u,
            p = M(u) ? (l ? Gt : Vt) : Wt;
          if (
            (k(i) &&
              (~i.indexOf("random(") && (i = it(i)),
              "=" === i.charAt(1) &&
                ((c = pe(d, i) + (Ge(d) || 0)) || 0 === c) &&
                (i = c)),
            d !== i || Bt)
          )
            return isNaN(d * i) || "" === i
              ? (!u && !(t in e) && Y(t, i),
                It.call(this, e, t, d, i, p, a || y.stringFilter, l))
              : ((c = new rn(
                  this._pt,
                  e,
                  t,
                  +d || 0,
                  i - (d || 0),
                  "boolean" == typeof u ? Qt : Ut,
                  0,
                  p
                )),
                l && (c.fp = l),
                s && c.modifier(s, this, e),
                (this._pt = c));
        },
        Rt = function (e, t, n, i, r, o) {
          var s, a, l, c;
          if (
            te[e] &&
            !1 !==
              (s = new te[e]()).init(
                r,
                s.rawVars
                  ? t[e]
                  : (function (e, t, n, i, r) {
                      if (
                        (M(e) && (e = $t(e, r, t, n, i)),
                        !D(e) || (e.style && e.nodeType) || R(e) || z(e))
                      )
                        return k(e) ? $t(e, r, t, n, i) : e;
                      var o,
                        s = {};
                      for (o in e) s[o] = $t(e[o], r, t, n, i);
                      return s;
                    })(t[e], i, r, o, n),
                n,
                i,
                o
              ) &&
            ((n._pt = a =
              new rn(n._pt, r, e, 0, 1, s.render, s, 0, s.priority)),
            n !== u)
          )
            for (
              l = n._ptLookup[n._targets.indexOf(r)], c = s._props.length;
              c--;

            )
              l[s._props[c]] = a;
          return s;
        },
        qt = function e(t, n) {
          var o,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            m,
            g,
            v,
            y = t.vars,
            S = y.ease,
            _ = y.startAt,
            T = y.immediateRender,
            C = y.lazy,
            E = y.onUpdate,
            A = y.onUpdateParams,
            k = y.callbackScope,
            M = y.runBackwards,
            P = y.yoyoEase,
            L = y.keyframes,
            D = y.autoRevert,
            B = t._dur,
            I = t._startAt,
            z = t._targets,
            R = t.parent,
            q = R && "nested" === R.data ? R.parent._targets : z,
            N = "auto" === t._overwrite && !i,
            $ = t.timeline;
          if (
            ($ && (!L || !S) && (S = "none"),
            (t._ease = Ct(S, x.ease)),
            (t._yEase = P ? _t(Ct(!0 === P ? S : P, x.ease)) : 0),
            P &&
              t._yoyo &&
              !t._repeat &&
              ((P = t._yEase), (t._yEase = t._ease), (t._ease = P)),
            (t._from = !$ && !!y.runBackwards),
            !$ || (L && !y.stagger))
          ) {
            if (
              ((g = (p = z[0] ? ae(z[0]).harness : 0) && y[p.prop]),
              (o = we(y, Z)),
              I && (Ce(I.render(-1, !0)), (I._lazy = 0)),
              _)
            )
              if (
                (Ce(
                  (t._startAt = Ht.set(
                    z,
                    ye(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: R,
                        immediateRender: !0,
                        lazy: O(C),
                        startAt: null,
                        delay: 0,
                        onUpdate: E,
                        onUpdateParams: A,
                        callbackScope: k,
                        stagger: 0,
                      },
                      _
                    )
                  ))
                ),
                n < 0 && !T && !D && t._startAt.render(-1, !0),
                T)
              ) {
                if ((n > 0 && !D && (t._startAt = 0), B && n <= 0))
                  return void (n && (t._zTime = n));
              } else !1 === D && (t._startAt = 0);
            else if (M && B)
              if (I) !D && (t._startAt = 0);
              else if (
                (n && (T = !1),
                (a = ye(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: T && O(C),
                    immediateRender: T,
                    stagger: 0,
                    parent: R,
                  },
                  o
                )),
                g && (a[p.prop] = g),
                Ce((t._startAt = Ht.set(z, a))),
                n < 0 && t._startAt.render(-1, !0),
                (t._zTime = n),
                T)
              ) {
                if (!n) return;
              } else e(t._startAt, w);
            for (
              t._pt = t._ptCache = 0, C = (B && O(C)) || (C && !B), s = 0;
              s < z.length;
              s++
            ) {
              if (
                ((d = (c = z[s])._gsap || se(z)[s]._gsap),
                (t._ptLookup[s] = h = {}),
                ee[d.id] && J.length && he(),
                (m = q === z ? s : q.indexOf(c)),
                p &&
                  !1 !== (f = new p()).init(c, g || o, t, m, q) &&
                  ((t._pt = l =
                    new rn(t._pt, c, f.name, 0, 1, f.render, f, 0, f.priority)),
                  f._props.forEach(function (e) {
                    h[e] = l;
                  }),
                  f.priority && (u = 1)),
                !p || g)
              )
                for (a in o)
                  te[a] && (f = Rt(a, o, t, m, c, q))
                    ? f.priority && (u = 1)
                    : (h[a] = l =
                        zt.call(t, c, a, "get", o[a], m, q, 0, y.stringFilter));
              t._op && t._op[s] && t.kill(c, t._op[s]),
                N &&
                  t._pt &&
                  ((Ot = t),
                  r.killTweensOf(c, h, t.globalTime(n)),
                  (v = !t.parent),
                  (Ot = 0)),
                t._pt && C && (ee[d.id] = 1);
            }
            u && nn(t), t._onInit && t._onInit(t);
          }
          (t._onUpdate = E),
            (t._initted = (!t._op || t._pt) && !v),
            L && n <= 0 && $.render(b, !0, !0);
        },
        Nt = function (e, t, n, i) {
          var r,
            o,
            s = t.ease || i || "power1.inOut";
          if (R(t))
            (o = n[e] || (n[e] = [])),
              t.forEach(function (e, n) {
                return o.push({ t: (n / (t.length - 1)) * 100, v: e, e: s });
              });
          else
            for (r in t)
              (o = n[r] || (n[r] = [])),
                "ease" === r || o.push({ t: parseFloat(e), v: t[r], e: s });
        },
        $t = function (e, t, n, i, r) {
          return M(e)
            ? e.call(t, n, i, r)
            : k(e) && ~e.indexOf("random(")
            ? it(e)
            : e;
        },
        Ft = oe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        jt = {};
      ce(Ft + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
        return (jt[e] = 1);
      });
      var Ht = (function (n) {
        function o(t, o, s, a) {
          var l;
          "number" == typeof o && ((s.duration = o), (o = s), (s = null));
          var c,
            u,
            d,
            p,
            f,
            h,
            m,
            g,
            v = (l = n.call(this, a ? o : Se(o)) || this).vars,
            x = v.duration,
            b = v.delay,
            w = v.immediateRender,
            S = v.stagger,
            _ = v.overwrite,
            T = v.keyframes,
            C = v.defaults,
            E = v.scrollTrigger,
            A = v.yoyoEase,
            k = o.parent || r,
            M = (R(t) || z(t) ? P(t[0]) : "length" in o) ? [t] : Qe(t);
          if (
            ((l._targets = M.length
              ? se(M)
              : U(
                  "GSAP target " + t + " not found. https://greensock.com",
                  !y.nullTargetWarn
                ) || []),
            (l._ptLookup = []),
            (l._overwrite = _),
            T || S || I(x) || I(b))
          ) {
            if (
              ((o = l.vars),
              (c = l.timeline =
                new Dt({ data: "nested", defaults: C || {} })).kill(),
              (c.parent = c._dp = e(l)),
              (c._start = 0),
              S || I(x) || I(b))
            ) {
              if (((p = M.length), (m = S && Ze(S)), D(S)))
                for (f in S) ~Ft.indexOf(f) && (g || (g = {}), (g[f] = S[f]));
              for (u = 0; u < p; u++)
                ((d = we(o, jt)).stagger = 0),
                  A && (d.yoyoEase = A),
                  g && xe(d, g),
                  (h = M[u]),
                  (d.duration = +$t(x, e(l), u, h, M)),
                  (d.delay = (+$t(b, e(l), u, h, M) || 0) - l._delay),
                  !S &&
                    1 === p &&
                    d.delay &&
                    ((l._delay = b = d.delay), (l._start += b), (d.delay = 0)),
                  c.to(h, d, m ? m(u, h, M) : 0),
                  (c._ease = xt.none);
              c.duration() ? (x = b = 0) : (l.timeline = 0);
            } else if (T) {
              Se(ye(c.vars.defaults, { ease: "none" })),
                (c._ease = Ct(T.ease || o.ease || "none"));
              var L,
                B,
                q,
                N = 0;
              if (R(T))
                T.forEach(function (e) {
                  return c.to(M, e, ">");
                });
              else {
                for (f in ((d = {}), T))
                  "ease" === f ||
                    "easeEach" === f ||
                    Nt(f, T[f], d, T.easeEach);
                for (f in d)
                  for (
                    L = d[f].sort(function (e, t) {
                      return e.t - t.t;
                    }),
                      N = 0,
                      u = 0;
                    u < L.length;
                    u++
                  )
                    ((q = {
                      ease: (B = L[u]).e,
                      duration: ((B.t - (u ? L[u - 1].t : 0)) / 100) * x,
                    })[f] = B.v),
                      c.to(M, q, N),
                      (N += q.duration);
                c.duration() < x && c.to({}, { duration: x - c.duration() });
              }
            }
            x || l.duration((x = c.duration()));
          } else l.timeline = 0;
          return (
            !0 !== _ || i || ((Ot = e(l)), r.killTweensOf(M), (Ot = 0)),
            Be(k, e(l), s),
            o.reversed && l.reverse(),
            o.paused && l.paused(!0),
            (w ||
              (!x &&
                !T &&
                l._start === de(k._time) &&
                O(w) &&
                Ae(e(l)) &&
                "nested" !== k.data)) &&
              ((l._tTime = -1e-8), l.render(Math.max(0, -b))),
            E && Ie(e(l), E),
            l
          );
        }
        t(o, n);
        var s = o.prototype;
        return (
          (s.render = function (e, t, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              u,
              d,
              p = this._time,
              f = this._tDur,
              h = this._dur,
              m = e > f - w && e >= 0 ? f : e < w ? 0 : e;
            if (h) {
              if (
                m !== this._tTime ||
                !e ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 != e < 0)
              ) {
                if (((i = m), (u = this.timeline), this._repeat)) {
                  if (((s = h + this._rDelay), this._repeat < -1 && e < 0))
                    return this.totalTime(100 * s + e, t, n);
                  if (
                    ((i = de(m % s)),
                    m === f
                      ? ((o = this._repeat), (i = h))
                      : ((o = ~~(m / s)) && o === m / s && ((i = h), o--),
                        i > h && (i = h)),
                    (l = this._yoyo && 1 & o) &&
                      ((d = this._yEase), (i = h - i)),
                    (a = Me(this._tTime, s)),
                    i === p && !n && this._initted)
                  )
                    return (this._tTime = m), this;
                  o !== a &&
                    (u && this._yEase && Tt(u, l),
                    !this.vars.repeatRefresh ||
                      l ||
                      this._lock ||
                      ((this._lock = n = 1),
                      (this.render(de(s * o), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (ze(this, e < 0 ? e : i, n, t))
                    return (this._tTime = 0), this;
                  if (p !== this._time) return this;
                  if (h !== this._dur) return this.render(e, t, n);
                }
                if (
                  ((this._tTime = m),
                  (this._time = i),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = c = (d || this._ease)(i / h)),
                  this._from && (this.ratio = c = 1 - c),
                  i && !p && !t && (st(this, "onStart"), this._tTime !== m))
                )
                  return this;
                for (r = this._pt; r; ) r.r(c, r.d), (r = r._next);
                (u &&
                  u.render(
                    e < 0
                      ? e
                      : !i && l
                      ? -1e-8
                      : u._dur * u._ease(i / this._dur),
                    t,
                    n
                  )) ||
                  (this._startAt && (this._zTime = e)),
                  this._onUpdate &&
                    !t &&
                    (e < 0 && this._startAt && this._startAt.render(e, !0, n),
                    st(this, "onUpdate")),
                  this._repeat &&
                    o !== a &&
                    this.vars.onRepeat &&
                    !t &&
                    this.parent &&
                    st(this, "onRepeat"),
                  (m !== this._tDur && m) ||
                    this._tTime !== m ||
                    (e < 0 &&
                      this._startAt &&
                      !this._onUpdate &&
                      this._startAt.render(e, !0, !0),
                    (e || !h) &&
                      ((m === this._tDur && this._ts > 0) ||
                        (!m && this._ts < 0)) &&
                      Ce(this, 1),
                    t ||
                      (e < 0 && !p) ||
                      (!m && !p) ||
                      (st(
                        this,
                        m === f ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(m < f && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else
              !(function (e, t, n, i) {
                var r,
                  o,
                  s,
                  a = e.ratio,
                  l =
                    t < 0 ||
                    (!t &&
                      ((!e._start && Re(e) && (e._initted || !qe(e))) ||
                        ((e._ts < 0 || e._dp._ts < 0) && !qe(e))))
                      ? 0
                      : 1,
                  c = e._rDelay,
                  u = 0;
                if (
                  (c &&
                    e._repeat &&
                    ((u = Ve(0, e._tDur, t)),
                    (o = Me(u, c)),
                    e._yoyo && 1 & o && (l = 1 - l),
                    o !== Me(e._tTime, c) &&
                      ((a = 1 - l),
                      e.vars.repeatRefresh && e._initted && e.invalidate())),
                  l !== a || i || e._zTime === w || (!t && e._zTime))
                ) {
                  if (!e._initted && ze(e, t, i, n)) return;
                  for (
                    s = e._zTime,
                      e._zTime = t || (n ? w : 0),
                      n || (n = t && !s),
                      e.ratio = l,
                      e._from && (l = 1 - l),
                      e._time = 0,
                      e._tTime = u,
                      r = e._pt;
                    r;

                  )
                    r.r(l, r.d), (r = r._next);
                  e._startAt && t < 0 && e._startAt.render(t, !0, !0),
                    e._onUpdate && !n && st(e, "onUpdate"),
                    u && e._repeat && !n && e.parent && st(e, "onRepeat"),
                    (t >= e._tDur || t < 0) &&
                      e.ratio === l &&
                      (l && Ce(e, 1),
                      n ||
                        (st(e, l ? "onComplete" : "onReverseComplete", !0),
                        e._prom && e._prom()));
                } else e._zTime || (e._zTime = t);
              })(this, e, t, n);
            return this;
          }),
          (s.targets = function () {
            return this._targets;
          }),
          (s.invalidate = function () {
            return (
              (this._pt =
                this._op =
                this._startAt =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(),
              n.prototype.invalidate.call(this)
            );
          }),
          (s.resetTo = function (e, t, n, i) {
            d || vt.wake(), this._ts || this.play();
            var r = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (
              this._initted || qt(this, r),
              (function (e, t, n, i, r, o, s) {
                var a,
                  l,
                  c,
                  u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t];
                if (!u)
                  for (
                    u = e._ptCache[t] = [],
                      l = e._ptLookup,
                      c = e._targets.length;
                    c--;

                  ) {
                    if ((a = l[c][t]) && a.d && a.d._pt)
                      for (a = a.d._pt; a && a.p !== t; ) a = a._next;
                    if (!a)
                      return (
                        (Bt = 1), (e.vars[t] = "+=0"), qt(e, s), (Bt = 0), 1
                      );
                    u.push(a);
                  }
                for (c = u.length; c--; )
                  ((a = u[c]).s =
                    (!i && 0 !== i) || r ? a.s + (i || 0) + o * a.c : i),
                    (a.c = n - a.s),
                    a.e && (a.e = ue(n) + Ge(a.e)),
                    a.b && (a.b = a.s + Ge(a.b));
              })(this, e, t, n, i, this._ease(r / this._dur), r)
                ? this.resetTo(e, t, n, i)
                : (De(this, 0),
                  this.parent ||
                    _e(
                      this._dp,
                      this,
                      "_first",
                      "_last",
                      this._dp._sort ? "_start" : 0
                    ),
                  this.render(0))
            );
          }),
          (s.kill = function (e, t) {
            if ((void 0 === t && (t = "all"), !(e || (t && "all" !== t))))
              return (this._lazy = this._pt = 0), this.parent ? at(this) : this;
            if (this.timeline) {
              var n = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(e, t, Ot && !0 !== Ot.vars.overwrite)
                  ._first || at(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  Ne(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              );
            }
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              u = this._targets,
              d = e ? Qe(e) : u,
              p = this._ptLookup,
              f = this._pt;
            if (
              (!t || "all" === t) &&
              (function (e, t) {
                for (
                  var n = e.length, i = n === t.length;
                  i && n-- && e[n] === t[n];

                );
                return n < 0;
              })(u, d)
            )
              return "all" === t && (this._pt = 0), at(this);
            for (
              i = this._op = this._op || [],
                "all" !== t &&
                  (k(t) &&
                    ((a = {}),
                    ce(t, function (e) {
                      return (a[e] = 1);
                    }),
                    (t = a)),
                  (t = (function (e, t) {
                    var n,
                      i,
                      r,
                      o,
                      s = e[0] ? ae(e[0]).harness : 0,
                      a = s && s.aliases;
                    if (!a) return t;
                    for (i in ((n = xe({}, t)), a))
                      if ((i in n))
                        for (r = (o = a[i].split(",")).length; r--; )
                          n[o[r]] = n[i];
                    return n;
                  })(u, t))),
                c = u.length;
              c--;

            )
              if (~d.indexOf(u[c]))
                for (a in ((r = p[c]),
                "all" === t
                  ? ((i[c] = t), (s = r), (o = {}))
                  : ((o = i[c] = i[c] || {}), (s = t)),
                s))
                  (l = r && r[a]) &&
                    (("kill" in l.d && !0 !== l.d.kill(a)) ||
                      Te(this, l, "_pt"),
                    delete r[a]),
                    "all" !== o && (o[a] = 1);
            return this._initted && !this._pt && f && at(this), this;
          }),
          (o.to = function (e, t) {
            return new o(e, t, arguments[2]);
          }),
          (o.from = function (e, t) {
            return He(1, arguments);
          }),
          (o.delayedCall = function (e, t, n, i) {
            return new o(t, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: e,
              onComplete: t,
              onReverseComplete: t,
              onCompleteParams: n,
              onReverseCompleteParams: n,
              callbackScope: i,
            });
          }),
          (o.fromTo = function (e, t, n) {
            return He(2, arguments);
          }),
          (o.set = function (e, t) {
            return (
              (t.duration = 0), t.repeatDelay || (t.repeat = 0), new o(e, t)
            );
          }),
          (o.killTweensOf = function (e, t, n) {
            return r.killTweensOf(e, t, n);
          }),
          o
        );
      })(Lt);
      ye(Ht.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        ce("staggerTo,staggerFrom,staggerFromTo", function (e) {
          Ht[e] = function () {
            var t = new Dt(),
              n = Xe.call(arguments, 0);
            return (
              n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
            );
          };
        });
      var Wt = function (e, t, n) {
          return (e[t] = n);
        },
        Vt = function (e, t, n) {
          return e[t](n);
        },
        Gt = function (e, t, n, i) {
          return e[t](i.fp, n);
        },
        Xt = function (e, t, n) {
          return e.setAttribute(t, n);
        },
        Yt = function (e, t) {
          return M(e[t]) ? Vt : L(e[t]) && e.setAttribute ? Xt : Wt;
        },
        Ut = function (e, t) {
          return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t);
        },
        Qt = function (e, t) {
          return t.set(t.t, t.p, !!(t.s + t.c * e), t);
        },
        Kt = function (e, t) {
          var n = t._pt,
            i = "";
          if (!e && t.b) i = t.b;
          else if (1 === e && t.e) i = t.e;
          else {
            for (; n; )
              (i =
                n.p +
                (n.m
                  ? n.m(n.s + n.c * e)
                  : Math.round(1e4 * (n.s + n.c * e)) / 1e4) +
                i),
                (n = n._next);
            i += t.c;
          }
          t.set(t.t, t.p, i, t);
        },
        Zt = function (e, t) {
          for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
        },
        Jt = function (e, t, n, i) {
          for (var r, o = this._pt; o; )
            (r = o._next), o.p === i && o.modifier(e, t, n), (o = r);
        },
        en = function (e) {
          for (var t, n, i = this._pt; i; )
            (n = i._next),
              (i.p === e && !i.op) || i.op === e
                ? Te(this, i, "_pt")
                : i.dep || (t = 1),
              (i = n);
          return !t;
        },
        tn = function (e, t, n, i) {
          i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
        },
        nn = function (e) {
          for (var t, n, i, r, o = e._pt; o; ) {
            for (t = o._next, n = i; n && n.pr > o.pr; ) n = n._next;
            (o._prev = n ? n._prev : r) ? (o._prev._next = o) : (i = o),
              (o._next = n) ? (n._prev = o) : (r = o),
              (o = t);
          }
          e._pt = i;
        },
        rn = (function () {
          function e(e, t, n, i, r, o, s, a, l) {
            (this.t = t),
              (this.s = i),
              (this.c = r),
              (this.p = n),
              (this.r = o || Ut),
              (this.d = s || this),
              (this.set = a || Wt),
              (this.pr = l || 0),
              (this._next = e),
              e && (e._prev = this);
          }
          return (
            (e.prototype.modifier = function (e, t, n) {
              (this.mSet = this.mSet || this.set),
                (this.set = tn),
                (this.m = e),
                (this.mt = n),
                (this.tween = t);
            }),
            e
          );
        })();
      ce(
        oe +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (e) {
          return (Z[e] = 1);
        }
      ),
        (V.TweenMax = V.TweenLite = Ht),
        (V.TimelineLite = V.TimelineMax = Dt),
        (r = new Dt({
          sortChildren: !1,
          defaults: x,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (y.stringFilter = gt);
      var on = {
        registerPlugin: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          t.forEach(function (e) {
            return (function (e) {
              var t = (e = (!e.name && e.default) || e).name,
                n = M(e),
                i =
                  t && !n && e.init
                    ? function () {
                        this._props = [];
                      }
                    : e,
                r = {
                  init: K,
                  render: Zt,
                  add: zt,
                  kill: en,
                  modifier: Jt,
                  rawVars: 0,
                },
                o = {
                  targetTest: 0,
                  get: 0,
                  getSetter: Yt,
                  aliases: {},
                  register: 0,
                };
              if ((yt(), e !== i)) {
                if (te[t]) return;
                ye(i, ye(we(e, r), o)),
                  xe(i.prototype, xe(r, we(e, o))),
                  (te[(i.prop = t)] = i),
                  e.targetTest && (re.push(i), (Z[t] = 1)),
                  (t =
                    ("css" === t
                      ? "CSS"
                      : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
              }
              Q(t, i), e.register && e.register(ln, i, rn);
            })(e);
          });
        },
        timeline: function (e) {
          return new Dt(e);
        },
        getTweensOf: function (e, t) {
          return r.getTweensOf(e, t);
        },
        getProperty: function (e, t, n, i) {
          k(e) && (e = Qe(e)[0]);
          var r = ae(e || {}).get,
            o = n ? ve : ge;
          return (
            "native" === n && (n = ""),
            e
              ? t
                ? o(((te[t] && te[t].get) || r)(e, t, n, i))
                : function (t, n, i) {
                    return o(((te[t] && te[t].get) || r)(e, t, n, i));
                  }
              : e
          );
        },
        quickSetter: function (e, t, n) {
          if ((e = Qe(e)).length > 1) {
            var i = e.map(function (e) {
                return ln.quickSetter(e, t, n);
              }),
              r = i.length;
            return function (e) {
              for (var t = r; t--; ) i[t](e);
            };
          }
          e = e[0] || {};
          var o = te[t],
            s = ae(e),
            a = (s.harness && (s.harness.aliases || {})[t]) || t,
            l = o
              ? function (t) {
                  var i = new o();
                  (u._pt = 0),
                    i.init(e, n ? t + n : t, u, 0, [e]),
                    i.render(1, i),
                    u._pt && Zt(1, u);
                }
              : s.set(e, a);
          return o
            ? l
            : function (t) {
                return l(e, a, n ? t + n : t, s, 1);
              };
        },
        quickTo: function (e, t, n) {
          var i,
            r = ln.to(
              e,
              xe((((i = {})[t] = "+=0.1"), (i.paused = !0), i), n || {})
            ),
            o = function (e, n, i) {
              return r.resetTo(t, e, n, i);
            };
          return (o.tween = r), o;
        },
        isTweening: function (e) {
          return r.getTweensOf(e, !0).length > 0;
        },
        defaults: function (e) {
          return e && e.ease && (e.ease = Ct(e.ease, x.ease)), be(x, e || {});
        },
        config: function (e) {
          return be(y, e || {});
        },
        registerEffect: function (e) {
          var t = e.name,
            n = e.effect,
            i = e.plugins,
            r = e.defaults,
            o = e.extendTimeline;
          (i || "").split(",").forEach(function (e) {
            return (
              e &&
              !te[e] &&
              !V[e] &&
              U(t + " effect requires " + e + " plugin.")
            );
          }),
            (ne[t] = function (e, t, i) {
              return n(Qe(e), ye(t || {}, r), i);
            }),
            o &&
              (Dt.prototype[t] = function (e, n, i) {
                return this.add(ne[t](e, D(n) ? n : (i = n) && {}, this), i);
              });
        },
        registerEase: function (e, t) {
          xt[e] = Ct(t);
        },
        parseEase: function (e, t) {
          return arguments.length ? Ct(e, t) : xt;
        },
        getById: function (e) {
          return r.getById(e);
        },
        exportRoot: function (e, t) {
          void 0 === e && (e = {});
          var n,
            i,
            o = new Dt(e);
          for (
            o.smoothChildTiming = O(e.smoothChildTiming),
              r.remove(o),
              o._dp = 0,
              o._time = o._tTime = r._time,
              n = r._first;
            n;

          )
            (i = n._next),
              (!t &&
                !n._dur &&
                n instanceof Ht &&
                n.vars.onComplete === n._targets[0]) ||
                Be(o, n, n._start - n._delay),
              (n = i);
          return Be(r, o, 0), o;
        },
        utils: {
          wrap: function e(t, n, i) {
            var r = n - t;
            return R(t)
              ? nt(t, e(0, t.length), n)
              : We(i, function (e) {
                  return ((r + ((e - t) % r)) % r) + t;
                });
          },
          wrapYoyo: function e(t, n, i) {
            var r = n - t,
              o = 2 * r;
            return R(t)
              ? nt(t, e(0, t.length - 1), n)
              : We(i, function (e) {
                  return (
                    t + ((e = (o + ((e - t) % o)) % o || 0) > r ? o - e : e)
                  );
                });
          },
          distribute: Ze,
          random: tt,
          snap: et,
          normalize: function (e, t, n) {
            return rt(e, t, 0, 1, n);
          },
          getUnit: Ge,
          clamp: function (e, t, n) {
            return We(n, function (n) {
              return Ve(e, t, n);
            });
          },
          splitColor: dt,
          toArray: Qe,
          selector: function (e) {
            return (
              (e = Qe(e)[0] || U("Invalid scope") || {}),
              function (t) {
                var n = e.current || e.nativeElement || e;
                return Qe(
                  t,
                  n.querySelectorAll
                    ? n
                    : n === e
                    ? U("Invalid scope") || a.createElement("div")
                    : e
                );
              }
            );
          },
          mapRange: rt,
          pipe: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return function (e) {
              return t.reduce(function (e, t) {
                return t(e);
              }, e);
            };
          },
          unitize: function (e, t) {
            return function (n) {
              return e(parseFloat(n)) + (t || Ge(n));
            };
          },
          interpolate: function e(t, n, i, r) {
            var o = isNaN(t + n)
              ? 0
              : function (e) {
                  return (1 - e) * t + e * n;
                };
            if (!o) {
              var s,
                a,
                l,
                c,
                u,
                d = k(t),
                p = {};
              if ((!0 === i && (r = 1) && (i = null), d))
                (t = { p: t }), (n = { p: n });
              else if (R(t) && !R(n)) {
                for (l = [], c = t.length, u = c - 2, a = 1; a < c; a++)
                  l.push(e(t[a - 1], t[a]));
                c--,
                  (o = function (e) {
                    e *= c;
                    var t = Math.min(u, ~~e);
                    return l[t](e - t);
                  }),
                  (i = n);
              } else r || (t = xe(R(t) ? [] : {}, t));
              if (!l) {
                for (s in n) zt.call(p, t, s, "get", n[s]);
                o = function (e) {
                  return Zt(e, p) || (d ? t.p : t);
                };
              }
            }
            return We(i, o);
          },
          shuffle: Ke,
        },
        install: X,
        effects: ne,
        ticker: vt,
        updateRoot: Dt.updateRoot,
        plugins: te,
        globalTimeline: r,
        core: {
          PropTween: rn,
          globals: Q,
          Tween: Ht,
          Timeline: Dt,
          Animation: Lt,
          getCache: ae,
          _removeLinkedListItem: Te,
          suppressOverwrites: function (e) {
            return (i = e);
          },
        },
      };
      ce("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
        return (on[e] = Ht[e]);
      }),
        vt.add(Dt.updateRoot),
        (u = on.to({}, { duration: 0 }));
      var sn = function (e, t) {
          for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
            n = n._next;
          return n;
        },
        an = function (e, t) {
          return {
            name: e,
            rawVars: 1,
            init: function (e, n, i) {
              i._onInit = function (e) {
                var i, r;
                if (
                  (k(n) &&
                    ((i = {}),
                    ce(n, function (e) {
                      return (i[e] = 1);
                    }),
                    (n = i)),
                  t)
                ) {
                  for (r in ((i = {}), n)) i[r] = t(n[r]);
                  n = i;
                }
                !(function (e, t) {
                  var n,
                    i,
                    r,
                    o = e._targets;
                  for (n in t)
                    for (i = o.length; i--; )
                      (r = e._ptLookup[i][n]) &&
                        (r = r.d) &&
                        (r._pt && (r = sn(r, n)),
                        r && r.modifier && r.modifier(t[n], e, o[i], n));
                })(e, n);
              };
            },
          };
        },
        ln =
          on.registerPlugin(
            {
              name: "attr",
              init: function (e, t, n, i, r) {
                var o, s;
                for (o in t)
                  (s = this.add(
                    e,
                    "setAttribute",
                    (e.getAttribute(o) || 0) + "",
                    t[o],
                    i,
                    r,
                    0,
                    0,
                    o
                  )) && (s.op = o),
                    this._props.push(o);
              },
            },
            {
              name: "endArray",
              init: function (e, t) {
                for (var n = t.length; n--; ) this.add(e, n, e[n] || 0, t[n]);
              },
            },
            an("roundProps", Je),
            an("modifiers"),
            an("snap", et)
          ) || on;
      (Ht.version = Dt.version = ln.version = "3.10.4"), (l = 1), B() && yt();
      xt.Power0,
        xt.Power1,
        xt.Power2,
        xt.Power3,
        xt.Power4,
        xt.Linear,
        xt.Quad,
        xt.Cubic,
        xt.Quart,
        xt.Quint,
        xt.Strong,
        xt.Elastic,
        xt.Back,
        xt.SteppedEase,
        xt.Bounce,
        xt.Sine,
        xt.Expo,
        xt.Circ;
      var cn,
        un,
        dn,
        pn,
        fn,
        hn,
        mn,
        gn = {},
        vn = 180 / Math.PI,
        yn = Math.PI / 180,
        xn = Math.atan2,
        bn = /([A-Z])/g,
        wn = /(left|right|width|margin|padding|x)/i,
        Sn = /[\s,\(]\S/,
        _n = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        Tn = function (e, t) {
          return t.set(
            t.t,
            t.p,
            Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
            t
          );
        },
        Cn = function (e, t) {
          return t.set(
            t.t,
            t.p,
            1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
            t
          );
        },
        En = function (e, t) {
          return t.set(
            t.t,
            t.p,
            e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
            t
          );
        },
        An = function (e, t) {
          var n = t.s + t.c * e;
          t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        kn = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        Mn = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        Pn = function (e, t, n) {
          return (e.style[t] = n);
        },
        Ln = function (e, t, n) {
          return e.style.setProperty(t, n);
        },
        Dn = function (e, t, n) {
          return (e._gsap[t] = n);
        },
        On = function (e, t, n) {
          return (e._gsap.scaleX = e._gsap.scaleY = n);
        },
        Bn = function (e, t, n, i, r) {
          var o = e._gsap;
          (o.scaleX = o.scaleY = n), o.renderTransform(r, o);
        },
        In = function (e, t, n, i, r) {
          var o = e._gsap;
          (o[t] = n), o.renderTransform(r, o);
        },
        zn = "transform",
        Rn = zn + "Origin",
        qn = function (e, t) {
          var n = un.createElementNS
            ? un.createElementNS(
                (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                e
              )
            : un.createElement(e);
          return n.style ? n : un.createElement(e);
        },
        Nn = function e(t, n, i) {
          var r = getComputedStyle(t);
          return (
            r[n] ||
            r.getPropertyValue(n.replace(bn, "-$1").toLowerCase()) ||
            r.getPropertyValue(n) ||
            (!i && e(t, Fn(n) || n, 1)) ||
            ""
          );
        },
        $n = "O,Moz,ms,Ms,Webkit".split(","),
        Fn = function (e, t, n) {
          var i = (t || fn).style,
            r = 5;
          if (e in i && !n) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            r-- && !($n[r] + e in i);

          );
          return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? $n[r] : "") + e;
        },
        jn = function () {
          "undefined" != typeof window &&
            window.document &&
            ((cn = window),
            (un = cn.document),
            (dn = un.documentElement),
            (fn = qn("div") || { style: {} }),
            qn("div"),
            (zn = Fn(zn)),
            (Rn = zn + "Origin"),
            (fn.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (mn = !!Fn("perspective")),
            (pn = 1));
        },
        Hn = function e(t) {
          var n,
            i = qn(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            r = this.parentNode,
            o = this.nextSibling,
            s = this.style.cssText;
          if (
            (dn.appendChild(i),
            i.appendChild(this),
            (this.style.display = "block"),
            t)
          )
            try {
              (n = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = e);
            } catch (e) {}
          else this._gsapBBox && (n = this._gsapBBox());
          return (
            r && (o ? r.insertBefore(this, o) : r.appendChild(this)),
            dn.removeChild(i),
            (this.style.cssText = s),
            n
          );
        },
        Wn = function (e, t) {
          for (var n = t.length; n--; )
            if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
        },
        Vn = function (e) {
          var t;
          try {
            t = e.getBBox();
          } catch (n) {
            t = Hn.call(e, !0);
          }
          return (
            (t && (t.width || t.height)) ||
              e.getBBox === Hn ||
              (t = Hn.call(e, !0)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +Wn(e, ["x", "cx", "x1"]) || 0,
                  y: +Wn(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        Gn = function (e) {
          return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !Vn(e));
        },
        Xn = function (e, t) {
          if (t) {
            var n = e.style;
            t in gn && t !== Rn && (t = zn),
              n.removeProperty
                ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) ||
                    (t = "-" + t),
                  n.removeProperty(t.replace(bn, "-$1").toLowerCase()))
                : n.removeAttribute(t);
          }
        },
        Yn = function (e, t, n, i, r, o) {
          var s = new rn(e._pt, t, n, 0, 1, o ? Mn : kn);
          return (e._pt = s), (s.b = i), (s.e = r), e._props.push(n), s;
        },
        Un = { deg: 1, rad: 1, turn: 1 },
        Qn = function e(t, n, i, r) {
          var o,
            s,
            a,
            l,
            c = parseFloat(i) || 0,
            u = (i + "").trim().substr((c + "").length) || "px",
            d = fn.style,
            p = wn.test(n),
            f = "svg" === t.tagName.toLowerCase(),
            h = (f ? "client" : "offset") + (p ? "Width" : "Height"),
            m = 100,
            g = "px" === r,
            v = "%" === r;
          return r === u || !c || Un[r] || Un[u]
            ? c
            : ("px" !== u && !g && (c = e(t, n, i, "px")),
              (l = t.getCTM && Gn(t)),
              (!v && "%" !== u) || (!gn[n] && !~n.indexOf("adius"))
                ? ((d[p ? "width" : "height"] = m + (g ? u : r)),
                  (s =
                    ~n.indexOf("adius") || ("em" === r && t.appendChild && !f)
                      ? t
                      : t.parentNode),
                  l && (s = (t.ownerSVGElement || {}).parentNode),
                  (s && s !== un && s.appendChild) || (s = un.body),
                  (a = s._gsap) && v && a.width && p && a.time === vt.time
                    ? ue((c / a.width) * m)
                    : ((v || "%" === u) && (d.position = Nn(t, "position")),
                      s === t && (d.position = "static"),
                      s.appendChild(fn),
                      (o = fn[h]),
                      s.removeChild(fn),
                      (d.position = "absolute"),
                      p &&
                        v &&
                        (((a = ae(s)).time = vt.time), (a.width = s[h])),
                      ue(g ? (o * c) / m : o && c ? (m / o) * c : 0)))
                : ((o = l ? t.getBBox()[p ? "width" : "height"] : t[h]),
                  ue(v ? (c / o) * m : (c / 100) * o)));
        },
        Kn = function (e, t, n, i) {
          var r;
          return (
            pn || jn(),
            t in _n &&
              "transform" !== t &&
              ~(t = _n[t]).indexOf(",") &&
              (t = t.split(",")[0]),
            gn[t] && "transform" !== t
              ? ((r = ci(e, i)),
                (r =
                  "transformOrigin" !== t
                    ? r[t]
                    : r.svg
                    ? r.origin
                    : ui(Nn(e, Rn)) + " " + r.zOrigin + "px"))
              : (!(r = e.style[t]) ||
                  "auto" === r ||
                  i ||
                  ~(r + "").indexOf("calc(")) &&
                (r =
                  (ni[t] && ni[t](e, t, n)) ||
                  Nn(e, t) ||
                  le(e, t) ||
                  ("opacity" === t ? 1 : 0)),
            n && !~(r + "").trim().indexOf(" ") ? Qn(e, t, r, n) + n : r
          );
        },
        Zn = function (e, t, n, i) {
          if (!n || "none" === n) {
            var r = Fn(t, e, 1),
              o = r && Nn(e, r, 1);
            o && o !== n
              ? ((t = r), (n = o))
              : "borderColor" === t && (n = Nn(e, "borderTopColor"));
          }
          var s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            m,
            g,
            v = new rn(this._pt, e.style, t, 0, 1, Kt),
            x = 0,
            b = 0;
          if (
            ((v.b = n),
            (v.e = i),
            (n += ""),
            "auto" === (i += "") &&
              ((e.style[t] = i), (i = Nn(e, t) || i), (e.style[t] = n)),
            gt((s = [n, i])),
            (i = s[1]),
            (l = (n = s[0]).match($) || []),
            (i.match($) || []).length)
          ) {
            for (; (a = $.exec(i)); )
              (p = a[0]),
                (h = i.substring(x, a.index)),
                u
                  ? (u = (u + 1) % 5)
                  : ("rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5)) ||
                    (u = 1),
                p !== (d = l[b++] || "") &&
                  ((c = parseFloat(d) || 0),
                  (g = d.substr((c + "").length)),
                  "=" === p.charAt(1) && (p = pe(c, p) + g),
                  (f = parseFloat(p)),
                  (m = p.substr((f + "").length)),
                  (x = $.lastIndex - m.length),
                  m ||
                    ((m = m || y.units[t] || g),
                    x === i.length && ((i += m), (v.e += m))),
                  g !== m && (c = Qn(e, t, d, m) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: h || 1 === b ? h : ",",
                    s: c,
                    c: f - c,
                    m: (u && u < 4) || "zIndex" === t ? Math.round : 0,
                  }));
            v.c = x < i.length ? i.substring(x, i.length) : "";
          } else v.r = "display" === t && "none" === i ? Mn : kn;
          return j.test(i) && (v.e = 0), (this._pt = v), v;
        },
        Jn = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        ei = function (e) {
          var t = e.split(" "),
            n = t[0],
            i = t[1] || "50%";
          return (
            ("top" !== n && "bottom" !== n && "left" !== i && "right" !== i) ||
              ((e = n), (n = i), (i = e)),
            (t[0] = Jn[n] || n),
            (t[1] = Jn[i] || i),
            t.join(" ")
          );
        },
        ti = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var n,
              i,
              r,
              o = t.t,
              s = o.style,
              a = t.u,
              l = o._gsap;
            if ("all" === a || !0 === a) (s.cssText = ""), (i = 1);
            else
              for (r = (a = a.split(",")).length; --r > -1; )
                (n = a[r]),
                  gn[n] && ((i = 1), (n = "transformOrigin" === n ? Rn : zn)),
                  Xn(o, n);
            i &&
              (Xn(o, zn),
              l &&
                (l.svg && o.removeAttribute("transform"),
                ci(o, 1),
                (l.uncache = 1)));
          }
        },
        ni = {
          clearProps: function (e, t, n, i, r) {
            if ("isFromStart" !== r.data) {
              var o = (e._pt = new rn(e._pt, t, n, 0, 0, ti));
              return (
                (o.u = i), (o.pr = -10), (o.tween = r), e._props.push(n), 1
              );
            }
          },
        },
        ii = [1, 0, 0, 1, 0, 0],
        ri = {},
        oi = function (e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
        },
        si = function (e) {
          var t = Nn(e, zn);
          return oi(t) ? ii : t.substr(7).match(N).map(ue);
        },
        ai = function (e, t) {
          var n,
            i,
            r,
            o,
            s = e._gsap || ae(e),
            a = e.style,
            l = si(e);
          return s.svg && e.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (l = [
                (r = e.transform.baseVal.consolidate().matrix).a,
                r.b,
                r.c,
                r.d,
                r.e,
                r.f,
              ]).join(",")
              ? ii
              : l
            : (l !== ii ||
                e.offsetParent ||
                e === dn ||
                s.svg ||
                ((r = a.display),
                (a.display = "block"),
                ((n = e.parentNode) && e.offsetParent) ||
                  ((o = 1), (i = e.nextSibling), dn.appendChild(e)),
                (l = si(e)),
                r ? (a.display = r) : Xn(e, "display"),
                o &&
                  (i
                    ? n.insertBefore(e, i)
                    : n
                    ? n.appendChild(e)
                    : dn.removeChild(e))),
              t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
        },
        li = function (e, t, n, i, r, o) {
          var s,
            a,
            l,
            c = e._gsap,
            u = r || ai(e, !0),
            d = c.xOrigin || 0,
            p = c.yOrigin || 0,
            f = c.xOffset || 0,
            h = c.yOffset || 0,
            m = u[0],
            g = u[1],
            v = u[2],
            y = u[3],
            x = u[4],
            b = u[5],
            w = t.split(" "),
            S = parseFloat(w[0]) || 0,
            _ = parseFloat(w[1]) || 0;
          n
            ? u !== ii &&
              (a = m * y - g * v) &&
              ((l = S * (-g / a) + _ * (m / a) - (m * b - g * x) / a),
              (S = S * (y / a) + _ * (-v / a) + (v * b - y * x) / a),
              (_ = l))
            : ((S =
                (s = Vn(e)).x + (~w[0].indexOf("%") ? (S / 100) * s.width : S)),
              (_ =
                s.y +
                (~(w[1] || w[0]).indexOf("%") ? (_ / 100) * s.height : _))),
            i || (!1 !== i && c.smooth)
              ? ((x = S - d),
                (b = _ - p),
                (c.xOffset = f + (x * m + b * v) - x),
                (c.yOffset = h + (x * g + b * y) - b))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = S),
            (c.yOrigin = _),
            (c.smooth = !!i),
            (c.origin = t),
            (c.originIsAbsolute = !!n),
            (e.style[Rn] = "0px 0px"),
            o &&
              (Yn(o, c, "xOrigin", d, S),
              Yn(o, c, "yOrigin", p, _),
              Yn(o, c, "xOffset", f, c.xOffset),
              Yn(o, c, "yOffset", h, c.yOffset)),
            e.setAttribute("data-svg-origin", S + " " + _);
        },
        ci = function (e, t) {
          var n = e._gsap || new Pt(e);
          if ("x" in n && !t && !n.uncache) return n;
          var i,
            r,
            o,
            s,
            a,
            l,
            c,
            u,
            d,
            p,
            f,
            h,
            m,
            g,
            v,
            x,
            b,
            w,
            S,
            _,
            T,
            C,
            E,
            A,
            k,
            M,
            P,
            L,
            D,
            O,
            B,
            I,
            z = e.style,
            R = n.scaleX < 0,
            q = "px",
            N = "deg",
            $ = Nn(e, Rn) || "0";
          return (
            (i = r = o = l = c = u = d = p = f = 0),
            (s = a = 1),
            (n.svg = !(!e.getCTM || !Gn(e))),
            (g = ai(e, n.svg)),
            n.svg &&
              ((A =
                (!n.uncache || "0px 0px" === $) &&
                !t &&
                e.getAttribute("data-svg-origin")),
              li(e, A || $, !!A || n.originIsAbsolute, !1 !== n.smooth, g)),
            (h = n.xOrigin || 0),
            (m = n.yOrigin || 0),
            g !== ii &&
              ((w = g[0]),
              (S = g[1]),
              (_ = g[2]),
              (T = g[3]),
              (i = C = g[4]),
              (r = E = g[5]),
              6 === g.length
                ? ((s = Math.sqrt(w * w + S * S)),
                  (a = Math.sqrt(T * T + _ * _)),
                  (l = w || S ? xn(S, w) * vn : 0),
                  (d = _ || T ? xn(_, T) * vn + l : 0) &&
                    (a *= Math.abs(Math.cos(d * yn))),
                  n.svg &&
                    ((i -= h - (h * w + m * _)), (r -= m - (h * S + m * T))))
                : ((I = g[6]),
                  (O = g[7]),
                  (P = g[8]),
                  (L = g[9]),
                  (D = g[10]),
                  (B = g[11]),
                  (i = g[12]),
                  (r = g[13]),
                  (o = g[14]),
                  (c = (v = xn(I, D)) * vn),
                  v &&
                    ((A = C * (x = Math.cos(-v)) + P * (b = Math.sin(-v))),
                    (k = E * x + L * b),
                    (M = I * x + D * b),
                    (P = C * -b + P * x),
                    (L = E * -b + L * x),
                    (D = I * -b + D * x),
                    (B = O * -b + B * x),
                    (C = A),
                    (E = k),
                    (I = M)),
                  (u = (v = xn(-_, D)) * vn),
                  v &&
                    ((x = Math.cos(-v)),
                    (B = T * (b = Math.sin(-v)) + B * x),
                    (w = A = w * x - P * b),
                    (S = k = S * x - L * b),
                    (_ = M = _ * x - D * b)),
                  (l = (v = xn(S, w)) * vn),
                  v &&
                    ((A = w * (x = Math.cos(v)) + S * (b = Math.sin(v))),
                    (k = C * x + E * b),
                    (S = S * x - w * b),
                    (E = E * x - C * b),
                    (w = A),
                    (C = k)),
                  c &&
                    Math.abs(c) + Math.abs(l) > 359.9 &&
                    ((c = l = 0), (u = 180 - u)),
                  (s = ue(Math.sqrt(w * w + S * S + _ * _))),
                  (a = ue(Math.sqrt(E * E + I * I))),
                  (v = xn(C, E)),
                  (d = Math.abs(v) > 2e-4 ? v * vn : 0),
                  (f = B ? 1 / (B < 0 ? -B : B) : 0)),
              n.svg &&
                ((A = e.getAttribute("transform")),
                (n.forceCSS =
                  e.setAttribute("transform", "") || !oi(Nn(e, zn))),
                A && e.setAttribute("transform", A))),
            Math.abs(d) > 90 &&
              Math.abs(d) < 270 &&
              (R
                ? ((s *= -1),
                  (d += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((a *= -1), (d += d <= 0 ? 180 : -180))),
            (t = t || n.uncache),
            (n.x =
              i -
              ((n.xPercent =
                i &&
                ((!t && n.xPercent) ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
                ? (e.offsetWidth * n.xPercent) / 100
                : 0) +
              q),
            (n.y =
              r -
              ((n.yPercent =
                r &&
                ((!t && n.yPercent) ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-r)
                    ? -50
                    : 0)))
                ? (e.offsetHeight * n.yPercent) / 100
                : 0) +
              q),
            (n.z = o + q),
            (n.scaleX = ue(s)),
            (n.scaleY = ue(a)),
            (n.rotation = ue(l) + N),
            (n.rotationX = ue(c) + N),
            (n.rotationY = ue(u) + N),
            (n.skewX = d + N),
            (n.skewY = p + N),
            (n.transformPerspective = f + q),
            (n.zOrigin = parseFloat($.split(" ")[2]) || 0) && (z[Rn] = ui($)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = y.force3D),
            (n.renderTransform = n.svg ? vi : mn ? gi : pi),
            (n.uncache = 0),
            n
          );
        },
        ui = function (e) {
          return (e = e.split(" "))[0] + " " + e[1];
        },
        di = function (e, t, n) {
          var i = Ge(t);
          return ue(parseFloat(t) + parseFloat(Qn(e, "x", n + "px", i))) + i;
        },
        pi = function (e, t) {
          (t.z = "0px"),
            (t.rotationY = t.rotationX = "0deg"),
            (t.force3D = 0),
            gi(e, t);
        },
        fi = "0deg",
        hi = "0px",
        mi = ") ",
        gi = function (e, t) {
          var n = t || this,
            i = n.xPercent,
            r = n.yPercent,
            o = n.x,
            s = n.y,
            a = n.z,
            l = n.rotation,
            c = n.rotationY,
            u = n.rotationX,
            d = n.skewX,
            p = n.skewY,
            f = n.scaleX,
            h = n.scaleY,
            m = n.transformPerspective,
            g = n.force3D,
            v = n.target,
            y = n.zOrigin,
            x = "",
            b = ("auto" === g && e && 1 !== e) || !0 === g;
          if (y && (u !== fi || c !== fi)) {
            var w,
              S = parseFloat(c) * yn,
              _ = Math.sin(S),
              T = Math.cos(S);
            (S = parseFloat(u) * yn),
              (w = Math.cos(S)),
              (o = di(v, o, _ * w * -y)),
              (s = di(v, s, -Math.sin(S) * -y)),
              (a = di(v, a, T * w * -y + y));
          }
          m !== hi && (x += "perspective(" + m + mi),
            (i || r) && (x += "translate(" + i + "%, " + r + "%) "),
            (b || o !== hi || s !== hi || a !== hi) &&
              (x +=
                a !== hi || b
                  ? "translate3d(" + o + ", " + s + ", " + a + ") "
                  : "translate(" + o + ", " + s + mi),
            l !== fi && (x += "rotate(" + l + mi),
            c !== fi && (x += "rotateY(" + c + mi),
            u !== fi && (x += "rotateX(" + u + mi),
            (d === fi && p === fi) || (x += "skew(" + d + ", " + p + mi),
            (1 === f && 1 === h) || (x += "scale(" + f + ", " + h + mi),
            (v.style[zn] = x || "translate(0, 0)");
        },
        vi = function (e, t) {
          var n,
            i,
            r,
            o,
            s,
            a = t || this,
            l = a.xPercent,
            c = a.yPercent,
            u = a.x,
            d = a.y,
            p = a.rotation,
            f = a.skewX,
            h = a.skewY,
            m = a.scaleX,
            g = a.scaleY,
            v = a.target,
            y = a.xOrigin,
            x = a.yOrigin,
            b = a.xOffset,
            w = a.yOffset,
            S = a.forceCSS,
            _ = parseFloat(u),
            T = parseFloat(d);
          (p = parseFloat(p)),
            (f = parseFloat(f)),
            (h = parseFloat(h)) && ((f += h = parseFloat(h)), (p += h)),
            p || f
              ? ((p *= yn),
                (f *= yn),
                (n = Math.cos(p) * m),
                (i = Math.sin(p) * m),
                (r = Math.sin(p - f) * -g),
                (o = Math.cos(p - f) * g),
                f &&
                  ((h *= yn),
                  (s = Math.tan(f - h)),
                  (r *= s = Math.sqrt(1 + s * s)),
                  (o *= s),
                  h &&
                    ((s = Math.tan(h)),
                    (n *= s = Math.sqrt(1 + s * s)),
                    (i *= s))),
                (n = ue(n)),
                (i = ue(i)),
                (r = ue(r)),
                (o = ue(o)))
              : ((n = m), (o = g), (i = r = 0)),
            ((_ && !~(u + "").indexOf("px")) ||
              (T && !~(d + "").indexOf("px"))) &&
              ((_ = Qn(v, "x", u, "px")), (T = Qn(v, "y", d, "px"))),
            (y || x || b || w) &&
              ((_ = ue(_ + y - (y * n + x * r) + b)),
              (T = ue(T + x - (y * i + x * o) + w))),
            (l || c) &&
              ((s = v.getBBox()),
              (_ = ue(_ + (l / 100) * s.width)),
              (T = ue(T + (c / 100) * s.height))),
            (s =
              "matrix(" +
              n +
              "," +
              i +
              "," +
              r +
              "," +
              o +
              "," +
              _ +
              "," +
              T +
              ")"),
            v.setAttribute("transform", s),
            S && (v.style[zn] = s);
        },
        yi = function (e, t, n, i, r) {
          var o,
            s,
            a = 360,
            l = k(r),
            c = parseFloat(r) * (l && ~r.indexOf("rad") ? vn : 1) - i,
            u = i + c + "deg";
          return (
            l &&
              ("short" === (o = r.split("_")[1]) &&
                (c %= a) !== c % 180 &&
                (c += c < 0 ? a : -360),
              "cw" === o && c < 0
                ? (c = ((c + 36e9) % a) - ~~(c / a) * a)
                : "ccw" === o &&
                  c > 0 &&
                  (c = ((c - 36e9) % a) - ~~(c / a) * a)),
            (e._pt = s = new rn(e._pt, t, n, i, c, Cn)),
            (s.e = u),
            (s.u = "deg"),
            e._props.push(n),
            s
          );
        },
        xi = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        bi = function (e, t, n) {
          var i,
            r,
            o,
            s,
            a,
            l,
            c,
            u = xi({}, n._gsap),
            d = n.style;
          for (r in (u.svg
            ? ((o = n.getAttribute("transform")),
              n.setAttribute("transform", ""),
              (d[zn] = t),
              (i = ci(n, 1)),
              Xn(n, zn),
              n.setAttribute("transform", o))
            : ((o = getComputedStyle(n)[zn]),
              (d[zn] = t),
              (i = ci(n, 1)),
              (d[zn] = o)),
          gn))
            (o = u[r]) !== (s = i[r]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
              ((a = Ge(o) !== (c = Ge(s)) ? Qn(n, r, o, c) : parseFloat(o)),
              (l = parseFloat(s)),
              (e._pt = new rn(e._pt, i, r, a, l - a, Tn)),
              (e._pt.u = c || 0),
              e._props.push(r));
          xi(i, u);
        };
      ce("padding,margin,Width,Radius", function (e, t) {
        var n = "Top",
          i = "Right",
          r = "Bottom",
          o = "Left",
          s = (t < 3 ? [n, i, r, o] : [n + o, n + i, r + i, r + o]).map(
            function (n) {
              return t < 2 ? e + n : "border" + n + e;
            }
          );
        ni[t > 1 ? "border" + e : e] = function (e, t, n, i, r) {
          var o, a;
          if (arguments.length < 4)
            return (
              (o = s.map(function (t) {
                return Kn(e, t, n);
              })),
              5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a
            );
          (o = (i + "").split(" ")),
            (a = {}),
            s.forEach(function (e, t) {
              return (a[e] = o[t] = o[t] || o[((t - 1) / 2) | 0]);
            }),
            e.init(t, a, r);
        };
      });
      var wi,
        Si,
        _i,
        Ti = {
          name: "css",
          register: jn,
          targetTest: function (e) {
            return e.style && e.nodeType;
          },
          init: function (e, t, n, i, r) {
            var o,
              s,
              a,
              l,
              c,
              u,
              d,
              p,
              f,
              h,
              m,
              g,
              v,
              x,
              b,
              w = this._props,
              S = e.style,
              _ = n.vars.startAt;
            for (d in (pn || jn(), t))
              if (
                "autoRound" !== d &&
                ((s = t[d]), !te[d] || !Rt(d, t, n, i, e, r))
              )
                if (
                  ((c = typeof s),
                  (u = ni[d]),
                  "function" === c && (c = typeof (s = s.call(n, i, e, r))),
                  "string" === c && ~s.indexOf("random(") && (s = it(s)),
                  u)
                )
                  u(this, e, d, s, n) && (b = 1);
                else if ("--" === d.substr(0, 2))
                  (o = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
                    (s += ""),
                    (ht.lastIndex = 0),
                    ht.test(o) || ((p = Ge(o)), (f = Ge(s))),
                    f ? p !== f && (o = Qn(e, d, o, f) + f) : p && (s += p),
                    this.add(S, "setProperty", o, s, i, r, 0, 0, d),
                    w.push(d);
                else if ("undefined" !== c) {
                  if (
                    (_ && d in _
                      ? ((o =
                          "function" == typeof _[d]
                            ? _[d].call(n, i, e, r)
                            : _[d]),
                        k(o) && ~o.indexOf("random(") && (o = it(o)),
                        Ge(o + "") || (o += y.units[d] || Ge(Kn(e, d)) || ""),
                        "=" === (o + "").charAt(1) && (o = Kn(e, d)))
                      : (o = Kn(e, d)),
                    (l = parseFloat(o)),
                    (h =
                      "string" === c &&
                      "=" === s.charAt(1) &&
                      s.substr(0, 2)) && (s = s.substr(2)),
                    (a = parseFloat(s)),
                    d in _n &&
                      ("autoAlpha" === d &&
                        (1 === l &&
                          "hidden" === Kn(e, "visibility") &&
                          a &&
                          (l = 0),
                        Yn(
                          this,
                          S,
                          "visibility",
                          l ? "inherit" : "hidden",
                          a ? "inherit" : "hidden",
                          !a
                        )),
                      "scale" !== d &&
                        "transform" !== d &&
                        ~(d = _n[d]).indexOf(",") &&
                        (d = d.split(",")[0])),
                    (m = d in gn))
                  )
                    if (
                      (g ||
                        (((v = e._gsap).renderTransform && !t.parseTransform) ||
                          ci(e, t.parseTransform),
                        (x = !1 !== t.smoothOrigin && v.smooth),
                        ((g = this._pt =
                          new rn(
                            this._pt,
                            S,
                            zn,
                            0,
                            1,
                            v.renderTransform,
                            v,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === d)
                    )
                      (this._pt = new rn(
                        this._pt,
                        v,
                        "scaleY",
                        v.scaleY,
                        (h ? pe(v.scaleY, h + a) : a) - v.scaleY || 0
                      )),
                        w.push("scaleY", d),
                        (d += "X");
                    else {
                      if ("transformOrigin" === d) {
                        (s = ei(s)),
                          v.svg
                            ? li(e, s, 0, x, 0, this)
                            : ((f = parseFloat(s.split(" ")[2]) || 0) !==
                                v.zOrigin &&
                                Yn(this, v, "zOrigin", v.zOrigin, f),
                              Yn(this, S, d, ui(o), ui(s)));
                        continue;
                      }
                      if ("svgOrigin" === d) {
                        li(e, s, 1, x, 0, this);
                        continue;
                      }
                      if (d in ri) {
                        yi(this, v, d, l, h ? pe(l, h + s) : s);
                        continue;
                      }
                      if ("smoothOrigin" === d) {
                        Yn(this, v, "smooth", v.smooth, s);
                        continue;
                      }
                      if ("force3D" === d) {
                        v[d] = s;
                        continue;
                      }
                      if ("transform" === d) {
                        bi(this, s, e);
                        continue;
                      }
                    }
                  else d in S || (d = Fn(d) || d);
                  if (
                    m ||
                    ((a || 0 === a) && (l || 0 === l) && !Sn.test(s) && d in S)
                  )
                    a || (a = 0),
                      (p = (o + "").substr((l + "").length)) !==
                        (f = Ge(s) || (d in y.units ? y.units[d] : p)) &&
                        (l = Qn(e, d, o, f)),
                      (this._pt = new rn(
                        this._pt,
                        m ? v : S,
                        d,
                        l,
                        (h ? pe(l, h + a) : a) - l,
                        m ||
                        ("px" !== f && "zIndex" !== d) ||
                        !1 === t.autoRound
                          ? Tn
                          : An
                      )),
                      (this._pt.u = f || 0),
                      p !== f &&
                        "%" !== f &&
                        ((this._pt.b = o), (this._pt.r = En));
                  else if (d in S) Zn.call(this, e, d, o, h ? h + s : s);
                  else {
                    if (!(d in e)) {
                      Y(d, s);
                      continue;
                    }
                    this.add(e, d, o || e[d], h ? h + s : s, i, r);
                  }
                  w.push(d);
                }
            b && nn(this);
          },
          get: Kn,
          aliases: _n,
          getSetter: function (e, t, n) {
            var i = _n[t];
            return (
              i && i.indexOf(",") < 0 && (t = i),
              t in gn && t !== Rn && (e._gsap.x || Kn(e, "x"))
                ? n && hn === n
                  ? "scale" === t
                    ? On
                    : Dn
                  : (hn = n || {}) && ("scale" === t ? Bn : In)
                : e.style && !L(e.style[t])
                ? Pn
                : ~t.indexOf("-")
                ? Ln
                : Yt(e, t)
            );
          },
          core: { _removeProperty: Xn, _getMatrix: ai },
        };
      (ln.utils.checkPrefix = Fn),
        (_i = ce(
          (wi = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
            "," +
            (Si = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (e) {
            gn[e] = 1;
          }
        )),
        ce(Si, function (e) {
          (y.units[e] = "deg"), (ri[e] = 1);
        }),
        (_n[_i[13]] = wi + "," + Si),
        ce(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (e) {
            var t = e.split(":");
            _n[t[1]] = _i[t[0]];
          }
        ),
        ce(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (e) {
            y.units[e] = "px";
          }
        ),
        ln.registerPlugin(Ti);
      var Ci = ln.registerPlugin(Ti) || ln,
        Ei =
          (Ci.core.Tween, /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
        Ai = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        ki = Math.PI / 180,
        Mi = (Math.PI, Math.sin),
        Pi = Math.cos,
        Li = Math.abs,
        Di = Math.sqrt,
        Oi =
          (Math.atan2,
          function (e) {
            return "number" == typeof e;
          }),
        Bi = 1e5,
        Ii = function (e) {
          return Math.round(e * Bi) / Bi || 0;
        };
      function zi(e, t, n, i, r, o, s, a, l) {
        if (e !== a || t !== l) {
          (n = Li(n)), (i = Li(i));
          var c = (r % 360) * ki,
            u = Pi(c),
            d = Mi(c),
            p = Math.PI,
            f = 2 * p,
            h = (e - a) / 2,
            m = (t - l) / 2,
            g = u * h + d * m,
            v = -d * h + u * m,
            y = g * g,
            x = v * v,
            b = y / (n * n) + x / (i * i);
          b > 1 && ((n = Di(b) * n), (i = Di(b) * i));
          var w = n * n,
            S = i * i,
            _ = (w * S - w * x - S * y) / (w * x + S * y);
          _ < 0 && (_ = 0);
          var T = (o === s ? -1 : 1) * Di(_),
            C = T * ((n * v) / i),
            E = T * ((-i * g) / n),
            A = (e + a) / 2 + (u * C - d * E),
            k = (t + l) / 2 + (d * C + u * E),
            M = (g - C) / n,
            P = (v - E) / i,
            L = (-g - C) / n,
            D = (-v - E) / i,
            O = M * M + P * P,
            B = (P < 0 ? -1 : 1) * Math.acos(M / Di(O)),
            I =
              (M * D - P * L < 0 ? -1 : 1) *
              Math.acos((M * L + P * D) / Di(O * (L * L + D * D)));
          isNaN(I) && (I = p),
            !s && I > 0 ? (I -= f) : s && I < 0 && (I += f),
            (B %= f),
            (I %= f);
          var z,
            R = Math.ceil(Li(I) / (f / 4)),
            q = [],
            N = I / R,
            $ = ((4 / 3) * Mi(N / 2)) / (1 + Pi(N / 2)),
            F = u * n,
            j = d * n,
            H = d * -i,
            W = u * i;
          for (z = 0; z < R; z++)
            (g = Pi((r = B + z * N))),
              (v = Mi(r)),
              (M = Pi((r += N))),
              (P = Mi(r)),
              q.push(g - $ * v, v + $ * g, M + $ * P, P - $ * M, M, P);
          for (z = 0; z < q.length; z += 2)
            (g = q[z]),
              (v = q[z + 1]),
              (q[z] = g * F + v * H + A),
              (q[z + 1] = g * j + v * W + k);
          return (q[z - 2] = a), (q[z - 1] = l), q;
        }
      }
      function Ri(e) {
        var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l,
          c,
          u,
          d,
          p,
          f,
          h,
          m,
          g =
            (e + "")
              .replace(Ai, function (e) {
                var t = +e;
                return t < 1e-4 && t > -1e-4 ? 0 : t;
              })
              .match(Ei) || [],
          v = [],
          y = 0,
          x = 0,
          b = 2 / 3,
          w = g.length,
          S = 0,
          _ = "ERROR: malformed path: " + e,
          T = function (e, t, n, i) {
            (u = (n - e) / 3),
              (d = (i - t) / 3),
              a.push(e + u, t + d, n - u, i - d, n, i);
          };
        if (!e || !isNaN(g[0]) || isNaN(g[1])) return console.log(_), v;
        for (t = 0; t < w; t++)
          if (
            ((f = o),
            isNaN(g[t]) ? (s = (o = g[t].toUpperCase()) !== g[t]) : t--,
            (i = +g[t + 1]),
            (r = +g[t + 2]),
            s && ((i += y), (r += x)),
            t || ((l = i), (c = r)),
            "M" === o)
          )
            a && (a.length < 8 ? (v.length -= 1) : (S += a.length)),
              (y = l = i),
              (x = c = r),
              (a = [i, r]),
              v.push(a),
              (t += 2),
              (o = "L");
          else if ("C" === o)
            a || (a = [0, 0]),
              s || (y = x = 0),
              a.push(
                i,
                r,
                y + 1 * g[t + 3],
                x + 1 * g[t + 4],
                (y += 1 * g[t + 5]),
                (x += 1 * g[t + 6])
              ),
              (t += 6);
          else if ("S" === o)
            (u = y),
              (d = x),
              ("C" !== f && "S" !== f) ||
                ((u += y - a[a.length - 4]), (d += x - a[a.length - 3])),
              s || (y = x = 0),
              a.push(u, d, i, r, (y += 1 * g[t + 3]), (x += 1 * g[t + 4])),
              (t += 4);
          else if ("Q" === o)
            (u = y + (i - y) * b),
              (d = x + (r - x) * b),
              s || (y = x = 0),
              (y += 1 * g[t + 3]),
              (x += 1 * g[t + 4]),
              a.push(u, d, y + (i - y) * b, x + (r - x) * b, y, x),
              (t += 4);
          else if ("T" === o)
            (u = y - a[a.length - 4]),
              (d = x - a[a.length - 3]),
              a.push(
                y + u,
                x + d,
                i + (y + 1.5 * u - i) * b,
                r + (x + 1.5 * d - r) * b,
                (y = i),
                (x = r)
              ),
              (t += 2);
          else if ("H" === o) T(y, x, (y = i), x), (t += 1);
          else if ("V" === o) T(y, x, y, (x = i + (s ? x - y : 0))), (t += 1);
          else if ("L" === o || "Z" === o)
            "Z" === o && ((i = l), (r = c), (a.closed = !0)),
              ("L" === o || Li(y - i) > 0.5 || Li(x - r) > 0.5) &&
                (T(y, x, i, r), "L" === o && (t += 2)),
              (y = i),
              (x = r);
          else if ("A" === o) {
            if (
              ((h = g[t + 4]),
              (m = g[t + 5]),
              (u = g[t + 6]),
              (d = g[t + 7]),
              (n = 7),
              h.length > 1 &&
                (h.length < 3
                  ? ((d = u), (u = m), n--)
                  : ((d = m), (u = h.substr(2)), (n -= 2)),
                (m = h.charAt(1)),
                (h = h.charAt(0))),
              (p = zi(
                y,
                x,
                +g[t + 1],
                +g[t + 2],
                +g[t + 3],
                +h,
                +m,
                (s ? y : 0) + 1 * u,
                (s ? x : 0) + 1 * d
              )),
              (t += n),
              p)
            )
              for (n = 0; n < p.length; n++) a.push(p[n]);
            (y = a[a.length - 2]), (x = a[a.length - 1]);
          } else console.log(_);
        return (
          (t = a.length) < 6
            ? (v.pop(), (t = 0))
            : a[0] === a[t - 2] && a[1] === a[t - 1] && (a.closed = !0),
          (v.totalPoints = S + t),
          v
        );
      }
      function qi(e) {
        Oi(e[0]) && (e = [e]);
        var t,
          n,
          i,
          r,
          o = "",
          s = e.length;
        for (n = 0; n < s; n++) {
          for (
            r = e[n],
              o += "M" + Ii(r[0]) + "," + Ii(r[1]) + " C",
              t = r.length,
              i = 2;
            i < t;
            i++
          )
            o +=
              Ii(r[i++]) +
              "," +
              Ii(r[i++]) +
              " " +
              Ii(r[i++]) +
              "," +
              Ii(r[i++]) +
              " " +
              Ii(r[i++]) +
              "," +
              Ii(r[i]) +
              " ";
          r.closed && (o += "z");
        }
        return o;
      }
      var Ni,
        $i,
        Fi = function () {
          return (
            Ni ||
            ("undefined" != typeof window &&
              (Ni = window.gsap) &&
              Ni.registerPlugin &&
              Ni)
          );
        },
        ji = function () {
          (Ni = Fi())
            ? (Ni.registerEase("_CE", Xi.create), ($i = 1))
            : console.warn("Please gsap.registerPlugin(CustomEase)");
        },
        Hi = function (e) {
          return ~~(1e3 * e + (e < 0 ? -0.5 : 0.5)) / 1e3;
        },
        Wi = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        Vi = /[cLlsSaAhHvVtTqQ]/g,
        Gi = function e(t, n, i, r, o, s, a, l, c, u, d) {
          var p,
            f = (t + i) / 2,
            h = (n + r) / 2,
            m = (i + o) / 2,
            g = (r + s) / 2,
            v = (o + a) / 2,
            y = (s + l) / 2,
            x = (f + m) / 2,
            b = (h + g) / 2,
            w = (m + v) / 2,
            S = (g + y) / 2,
            _ = (x + w) / 2,
            T = (b + S) / 2,
            C = a - t,
            E = l - n,
            A = Math.abs((i - a) * E - (r - l) * C),
            k = Math.abs((o - a) * E - (s - l) * C);
          return (
            u ||
              ((u = [
                { x: t, y: n },
                { x: a, y: l },
              ]),
              (d = 1)),
            u.splice(d || u.length - 1, 0, { x: _, y: T }),
            (A + k) * (A + k) > c * (C * C + E * E) &&
              ((p = u.length),
              e(t, n, f, h, x, b, _, T, c, u, d),
              e(_, T, w, S, v, y, a, l, c, u, d + 1 + (u.length - p))),
            u
          );
        },
        Xi = (function () {
          function e(e, t, n) {
            $i || ji(), (this.id = e), this.setData(t, n);
          }
          var t = e.prototype;
          return (
            (t.setData = function (e, t) {
              t = t || {};
              var n,
                i,
                r,
                o,
                s,
                a,
                l,
                c,
                u,
                d = (e = e || "0,0,1,1").match(Wi),
                p = 1,
                f = [],
                h = [],
                m = t.precision || 1,
                g = m <= 1;
              if (
                ((this.data = e),
                (Vi.test(e) || (~e.indexOf("M") && e.indexOf("C") < 0)) &&
                  (d = Ri(e)[0]),
                4 === (n = d.length))
              )
                d.unshift(0, 0), d.push(1, 1), (n = 8);
              else if ((n - 2) % 6) throw "Invalid CustomEase";
              for (
                (0 == +d[0] && 1 == +d[n - 2]) ||
                  (function (e, t, n) {
                    n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
                    var i,
                      r = -1 * +e[0],
                      o = -n,
                      s = e.length,
                      a = 1 / (+e[s - 2] + r),
                      l =
                        -t ||
                        (Math.abs(+e[s - 1] - +e[1]) <
                        0.01 * (+e[s - 2] - +e[0])
                          ? (function (e) {
                              var t,
                                n = e.length,
                                i = 1e20;
                              for (t = 1; t < n; t += 6)
                                +e[t] < i && (i = +e[t]);
                              return i;
                            })(e) + o
                          : +e[s - 1] + o);
                    for (l = l ? 1 / l : -a, i = 0; i < s; i += 2)
                      (e[i] = (+e[i] + r) * a),
                        (e[i + 1] = (+e[i + 1] + o) * l);
                  })(d, t.height, t.originY),
                  this.segment = d,
                  o = 2;
                o < n;
                o += 6
              )
                (i = { x: +d[o - 2], y: +d[o - 1] }),
                  (r = { x: +d[o + 4], y: +d[o + 5] }),
                  f.push(i, r),
                  Gi(
                    i.x,
                    i.y,
                    +d[o],
                    +d[o + 1],
                    +d[o + 2],
                    +d[o + 3],
                    r.x,
                    r.y,
                    1 / (2e5 * m),
                    f,
                    f.length - 1
                  );
              for (n = f.length, o = 0; o < n; o++)
                (l = f[o]),
                  (c = f[o - 1] || l),
                  (l.x > c.x || (c.y !== l.y && c.x === l.x) || l === c) &&
                  l.x <= 1
                    ? ((c.cx = l.x - c.x),
                      (c.cy = l.y - c.y),
                      (c.n = l),
                      (c.nx = l.x),
                      g &&
                        o > 1 &&
                        Math.abs(c.cy / c.cx - f[o - 2].cy / f[o - 2].cx) > 2 &&
                        (g = 0),
                      c.cx < p &&
                        (c.cx
                          ? (p = c.cx)
                          : ((c.cx = 0.001),
                            o === n - 1 &&
                              ((c.x -= 0.001),
                              (p = Math.min(p, 0.001)),
                              (g = 0)))))
                    : (f.splice(o--, 1), n--);
              if (((s = 1 / (n = (1 / p + 1) | 0)), (a = 0), (l = f[0]), g)) {
                for (o = 0; o < n; o++)
                  (u = o * s),
                    l.nx < u && (l = f[++a]),
                    (i = l.y + ((u - l.x) / l.cx) * l.cy),
                    (h[o] = { x: u, cx: s, y: i, cy: 0, nx: 9 }),
                    o && (h[o - 1].cy = i - h[o - 1].y);
                h[n - 1].cy = f[f.length - 1].y - i;
              } else {
                for (o = 0; o < n; o++)
                  l.nx < o * s && (l = f[++a]), (h[o] = l);
                a < f.length - 1 && (h[o - 1] = f[f.length - 2]);
              }
              return (
                (this.ease = function (e) {
                  var t = h[(e * n) | 0] || h[n - 1];
                  return t.nx < e && (t = t.n), t.y + ((e - t.x) / t.cx) * t.cy;
                }),
                (this.ease.custom = this),
                this.id && Ni && Ni.registerEase(this.id, this.ease),
                this
              );
            }),
            (t.getSVGData = function (t) {
              return e.getSVGData(this, t);
            }),
            (e.create = function (t, n, i) {
              return new e(t, n, i).ease;
            }),
            (e.register = function (e) {
              (Ni = e), ji();
            }),
            (e.get = function (e) {
              return Ni.parseEase(e);
            }),
            (e.getSVGData = function (t, n) {
              var i,
                r,
                o,
                s,
                a,
                l,
                c,
                u,
                d,
                p,
                f = (n = n || {}).width || 100,
                h = n.height || 100,
                m = n.x || 0,
                g = (n.y || 0) + h,
                v = Ni.utils.toArray(n.path)[0];
              if (
                (n.invert && ((h = -h), (g = 0)),
                "string" == typeof t && (t = Ni.parseEase(t)),
                t.custom && (t = t.custom),
                t instanceof e)
              )
                i = qi(
                  (function (e, t, n, i, r, o, s) {
                    for (var a, l, c, u, d, p = e.length; --p > -1; )
                      for (l = (a = e[p]).length, c = 0; c < l; c += 2)
                        (u = a[c]),
                          (d = a[c + 1]),
                          (a[c] = u * t + d * i + o),
                          (a[c + 1] = u * n + d * r + s);
                    return (e._dirty = 1), e;
                  })([t.segment], f, 0, 0, -h, m, g)
                );
              else {
                for (
                  i = [m, g],
                    s = 1 / (c = Math.max(5, 200 * (n.precision || 1))),
                    u = 5 / (c += 2),
                    d = Hi(m + s * f),
                    r = ((p = Hi(g + t(s) * -h)) - g) / (d - m),
                    o = 2;
                  o < c;
                  o++
                )
                  (a = Hi(m + o * s * f)),
                    (l = Hi(g + t(o * s) * -h)),
                    (Math.abs((l - p) / (a - d) - r) > u || o === c - 1) &&
                      (i.push(d, p), (r = (l - p) / (a - d))),
                    (d = a),
                    (p = l);
                i = "M" + i.join(",");
              }
              return v && v.setAttribute("d", i), i;
            }),
            e
          );
        })();
      function Yi(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      Fi() && Ni.registerPlugin(Xi), (Xi.version = "3.10.4");
      var Ui,
        Qi,
        Ki,
        Zi,
        Ji,
        er,
        tr,
        nr,
        ir,
        rr,
        or,
        sr,
        ar = function () {
          return (
            Ui ||
            ("undefined" != typeof window &&
              (Ui = window.gsap) &&
              Ui.registerPlugin &&
              Ui)
          );
        },
        lr = 1,
        cr = [],
        ur = [],
        dr = [],
        pr = Date.now,
        fr = function (e, t) {
          return t;
        },
        hr = function (e, t) {
          return ~dr.indexOf(e) && dr[dr.indexOf(e) + 1][t];
        },
        mr = function (e) {
          return !!~rr.indexOf(e);
        },
        gr = function (e, t, n, i, r) {
          return e.addEventListener(t, n, { passive: !i, capture: !!r });
        },
        vr = function (e, t, n, i) {
          return e.removeEventListener(t, n, !!i);
        },
        yr = "scrollLeft",
        xr = "scrollTop",
        br = function () {
          return (or && or.isPressed) || ur.cache++;
        },
        wr = function (e, t) {
          var n = function n(i) {
            if (i || 0 === i) {
              lr && (Ki.history.scrollRestoration = "manual");
              var r = or && or.isPressed;
              (i = n.v = Math.round(i) || (or && or.iOS ? 1 : 0)),
                e(i),
                (n.cacheID = ur.cache),
                r && fr("ss", i);
            } else
              (t || ur.cache !== n.cacheID || fr("ref")) &&
                ((n.cacheID = ur.cache), (n.v = e()));
            return n.v + n.offset;
          };
          return (n.offset = 0), e && n;
        },
        Sr = {
          s: yr,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: wr(function (e) {
            return arguments.length
              ? Ki.scrollTo(e, _r.sc())
              : Ki.pageXOffset || Zi[yr] || Ji[yr] || er[yr] || 0;
          }),
        },
        _r = {
          s: xr,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: Sr,
          sc: wr(function (e) {
            return arguments.length
              ? Ki.scrollTo(Sr.sc(), e)
              : Ki.pageYOffset || Zi[xr] || Ji[xr] || er[xr] || 0;
          }),
        },
        Tr = function (e) {
          return (
            Ui.utils.toArray(e)[0] ||
            ("string" == typeof e && !1 !== Ui.config().nullTargetWarn
              ? console.warn("Element not found:", e)
              : null)
          );
        },
        Cr = function (e, t) {
          var n = t.s,
            i = t.sc,
            r = ur.indexOf(e),
            o = i === _r.sc ? 1 : 2;
          return (
            !~r && (r = ur.push(e) - 1),
            ur[r + o] ||
              (ur[r + o] =
                wr(hr(e, n), !0) ||
                (mr(e)
                  ? i
                  : wr(function (t) {
                      return arguments.length ? (e[n] = t) : e[n];
                    })))
          );
        },
        Er = function (e, t, n) {
          var i = e,
            r = e,
            o = pr(),
            s = o,
            a = t || 50,
            l = Math.max(500, 3 * a),
            c = function (e, t) {
              var l = pr();
              t || l - o > a
                ? ((r = i), (i = e), (s = o), (o = l))
                : n
                ? (i += e)
                : (i = r + ((e - r) / (l - s)) * (o - s));
            };
          return {
            update: c,
            reset: function () {
              (r = i = n ? 0 : i), (s = o = 0);
            },
            getVelocity: function (e) {
              var t = s,
                a = r,
                u = pr();
              return (
                (e || 0 === e) && e !== i && c(e),
                o === s || u - s > l
                  ? 0
                  : ((i + (n ? a : -a)) / ((n ? u : o) - t)) * 1e3
              );
            },
          };
        },
        Ar = function (e, t) {
          return (
            t && !e._gsapAllow && e.preventDefault(),
            e.changedTouches ? e.changedTouches[0] : e
          );
        },
        kr = function (e) {
          var t = Math.max.apply(Math, e),
            n = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(n) ? t : n;
        },
        Mr = function () {
          (ir = Ui.core.globals().ScrollTrigger) &&
            ir.core &&
            (function () {
              var e = ir.core,
                t = e.bridge || {},
                n = e._scrollers,
                i = e._proxies;
              n.push.apply(n, ur),
                i.push.apply(i, dr),
                (ur = n),
                (dr = i),
                (fr = function (e, n) {
                  return t[e](n);
                });
            })();
        },
        Pr = function (e) {
          return (
            (Ui = e || ar()) &&
              "undefined" != typeof document &&
              document.body &&
              ((Ki = window),
              (Zi = document),
              (Ji = Zi.documentElement),
              (er = Zi.body),
              (rr = [Ki, Zi, Ji, er]),
              Ui.utils.clamp,
              (nr = "onpointerenter" in er ? "pointer" : "mouse"),
              (tr = Lr.isTouch =
                Ki.matchMedia &&
                Ki.matchMedia("(hover: none), (pointer: coarse)").matches
                  ? 1
                  : "ontouchstart" in Ki ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
              (sr = Lr.eventTypes =
                (
                  "ontouchstart" in Ji
                    ? "touchstart,touchmove,touchcancel,touchend"
                    : "onpointerdown" in Ji
                    ? "pointerdown,pointermove,pointercancel,pointerup"
                    : "mousedown,mousemove,mouseup,mouseup"
                ).split(",")),
              setTimeout(function () {
                return (lr = 0);
              }, 500),
              Mr(),
              (Qi = 1)),
            Qi
          );
        };
      (Sr.op = _r), (ur.cache = 0);
      var Lr = (function () {
        function e(e) {
          this.init(e);
        }
        var t, n, i;
        return (
          (e.prototype.init = function (e) {
            Qi ||
              Pr(Ui) ||
              console.warn("Please gsap.registerPlugin(Observer)"),
              ir || Mr();
            var t = e.tolerance,
              n = e.dragMinimum,
              i = e.type,
              r = e.target,
              o = e.lineHeight,
              s = e.debounce,
              a = e.preventDefault,
              l = e.onStop,
              c = e.onStopDelay,
              u = e.ignore,
              d = e.wheelSpeed,
              p = e.event,
              f = e.onDragStart,
              h = e.onDragEnd,
              m = e.onDrag,
              g = e.onPress,
              v = e.onRelease,
              y = e.onRight,
              x = e.onLeft,
              b = e.onUp,
              w = e.onDown,
              S = e.onChangeX,
              _ = e.onChangeY,
              T = e.onChange,
              C = e.onToggleX,
              E = e.onToggleY,
              A = e.onHover,
              k = e.onHoverEnd,
              M = e.onMove,
              P = e.ignoreCheck,
              L = e.isNormalizer,
              D = e.onGestureStart,
              O = e.onGestureEnd,
              B = e.onWheel,
              I = e.onEnable,
              z = e.onDisable,
              R = e.onClick,
              q = e.scrollSpeed,
              N = e.capture,
              $ = e.allowClicks,
              F = e.lockAxis,
              j = e.onLockAxis;
            (this.target = r = Tr(r) || Ji),
              (this.vars = e),
              u && (u = Ui.utils.toArray(u)),
              (t = t || 0),
              (n = n || 0),
              (d = d || 1),
              (q = q || 1),
              (i = i || "wheel,touch,pointer"),
              (s = !1 !== s),
              o || (o = parseFloat(Ki.getComputedStyle(er).lineHeight) || 22);
            var H,
              W,
              V,
              G,
              X,
              Y,
              U,
              Q = this,
              K = 0,
              Z = 0,
              J = Cr(r, Sr),
              ee = Cr(r, _r),
              te = J(),
              ne = ee(),
              ie =
                ~i.indexOf("touch") &&
                !~i.indexOf("pointer") &&
                "pointerdown" === sr[0],
              re = mr(r),
              oe = r.ownerDocument || Zi,
              se = [0, 0, 0],
              ae = [0, 0, 0],
              le = 0,
              ce = function () {
                return (le = pr());
              },
              ue = function (e, t) {
                return (
                  ((Q.event = e) && u && ~u.indexOf(e.target)) ||
                  (t && ie && "touch" !== e.pointerType) ||
                  (P && P(e, t))
                );
              },
              de = function () {
                var e = (Q.deltaX = kr(se)),
                  n = (Q.deltaY = kr(ae)),
                  i = Math.abs(e) >= t,
                  r = Math.abs(n) >= t;
                T && (i || r) && T(Q, e, n, se, ae),
                  i &&
                    (y && Q.deltaX > 0 && y(Q),
                    x && Q.deltaX < 0 && x(Q),
                    S && S(Q),
                    C && Q.deltaX < 0 != K < 0 && C(Q),
                    (K = Q.deltaX),
                    (se[0] = se[1] = se[2] = 0)),
                  r &&
                    (w && Q.deltaY > 0 && w(Q),
                    b && Q.deltaY < 0 && b(Q),
                    _ && _(Q),
                    E && Q.deltaY < 0 != Z < 0 && E(Q),
                    (Z = Q.deltaY),
                    (ae[0] = ae[1] = ae[2] = 0)),
                  (G || V) &&
                    (M && M(Q),
                    j && Y && j(Q),
                    V && (m(Q), (V = !1)),
                    (G = Y = !1)),
                  X && (B(Q), (X = !1)),
                  (H = 0);
              },
              pe = function (e, t, n) {
                (se[n] += e),
                  (ae[n] += t),
                  Q._vx.update(e),
                  Q._vy.update(t),
                  s ? H || (H = requestAnimationFrame(de)) : de();
              },
              fe = function (e, t) {
                "y" !== U && ((se[2] += e), Q._vx.update(e, !0)),
                  "x" !== U && ((ae[2] += t), Q._vy.update(t, !0)),
                  F &&
                    !U &&
                    ((Q.axis = U = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                    (Y = !0)),
                  s ? H || (H = requestAnimationFrame(de)) : de();
              },
              he = function (e) {
                if (!ue(e, 1)) {
                  var t = (e = Ar(e, a)).clientX,
                    i = e.clientY,
                    r = t - Q.x,
                    o = i - Q.y,
                    s = Q.isDragging;
                  (Q.x = t),
                    (Q.y = i),
                    (s ||
                      Math.abs(Q.startX - t) >= n ||
                      Math.abs(Q.startY - i) >= n) &&
                      (m && (V = !0),
                      s || (Q.isDragging = !0),
                      fe(r, o),
                      s || (f && f(Q)));
                }
              },
              me = (Q.onPress = function (e) {
                ue(e, 1) ||
                  ((Q.axis = U = null),
                  W.pause(),
                  (Q.isPressed = !0),
                  (e = Ar(e)),
                  (K = Z = 0),
                  (Q.startX = Q.x = e.clientX),
                  (Q.startY = Q.y = e.clientY),
                  Q._vx.reset(),
                  Q._vy.reset(),
                  gr(L ? r : oe, sr[1], he, a, !0),
                  (Q.deltaX = Q.deltaY = 0),
                  g && g(Q));
              }),
              ge = function (e) {
                if (!ue(e, 1)) {
                  vr(L ? r : oe, sr[1], he, !0);
                  var t =
                      Q.isDragging &&
                      (Math.abs(Q.x - Q.startX) > 3 ||
                        Math.abs(Q.y - Q.startY) > 3),
                    n = Ar(e);
                  t ||
                    (Q._vx.reset(),
                    Q._vy.reset(),
                    a &&
                      $ &&
                      Ui.delayedCall(0.08, function () {
                        if (pr() - le > 300 && !e.defaultPrevented)
                          if (e.target.click) e.target.click();
                          else if (oe.createEvent) {
                            var t = oe.createEvent("MouseEvents");
                            t.initMouseEvent(
                              "click",
                              !0,
                              !0,
                              Ki,
                              1,
                              n.screenX,
                              n.screenY,
                              n.clientX,
                              n.clientY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                              e.target.dispatchEvent(t);
                          }
                      })),
                    (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
                    l && !L && W.restart(!0),
                    h && t && h(Q),
                    v && v(Q, t);
                }
              },
              ve = function (e) {
                return (
                  e.touches &&
                  e.touches.length > 1 &&
                  (Q.isGesturing = !0) &&
                  D(e, Q.isDragging)
                );
              },
              ye = function () {
                return (Q.isGesturing = !1) || O(Q);
              },
              xe = function (e) {
                if (!ue(e)) {
                  var t = J(),
                    n = ee();
                  pe((t - te) * q, (n - ne) * q, 1),
                    (te = t),
                    (ne = n),
                    l && W.restart(!0);
                }
              },
              be = function (e) {
                if (!ue(e)) {
                  (e = Ar(e, a)), B && (X = !0);
                  var t =
                    (1 === e.deltaMode
                      ? o
                      : 2 === e.deltaMode
                      ? Ki.innerHeight
                      : 1) * d;
                  pe(e.deltaX * t, e.deltaY * t, 0), l && !L && W.restart(!0);
                }
              },
              we = function (e) {
                if (!ue(e)) {
                  var t = e.clientX,
                    n = e.clientY,
                    i = t - Q.x,
                    r = n - Q.y;
                  (Q.x = t), (Q.y = n), (G = !0), (i || r) && fe(i, r);
                }
              },
              Se = function (e) {
                (Q.event = e), A(Q);
              },
              _e = function (e) {
                (Q.event = e), k(Q);
              },
              Te = function (e) {
                return ue(e) || (Ar(e, a) && R(Q));
              };
            (W = Q._dc =
              Ui.delayedCall(c || 0.25, function () {
                Q._vx.reset(), Q._vy.reset(), W.pause(), l && l(Q);
              }).pause()),
              (Q.deltaX = Q.deltaY = 0),
              (Q._vx = Er(0, 50, !0)),
              (Q._vy = Er(0, 50, !0)),
              (Q.scrollX = J),
              (Q.scrollY = ee),
              (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
              (Q.enable = function (e) {
                return (
                  Q.isEnabled ||
                    (gr(re ? oe : r, "scroll", br),
                    i.indexOf("scroll") >= 0 &&
                      gr(re ? oe : r, "scroll", xe, a, N),
                    i.indexOf("wheel") >= 0 && gr(r, "wheel", be, a, N),
                    ((i.indexOf("touch") >= 0 && tr) ||
                      i.indexOf("pointer") >= 0) &&
                      (gr(r, sr[0], me, a, N),
                      gr(oe, sr[2], ge),
                      gr(oe, sr[3], ge),
                      $ && gr(r, "click", ce, !1, !0),
                      R && gr(r, "click", Te),
                      D && gr(oe, "gesturestart", ve),
                      O && gr(oe, "gestureend", ye),
                      A && gr(r, nr + "enter", Se),
                      k && gr(r, nr + "leave", _e),
                      M && gr(r, nr + "move", we)),
                    (Q.isEnabled = !0),
                    e && e.type && me(e),
                    I && I(Q)),
                  Q
                );
              }),
              (Q.disable = function () {
                Q.isEnabled &&
                  (cr.filter(function (e) {
                    return e !== Q && mr(e.target);
                  }).length || vr(re ? oe : r, "scroll", br),
                  Q.isPressed &&
                    (Q._vx.reset(),
                    Q._vy.reset(),
                    vr(L ? r : oe, sr[1], he, !0)),
                  vr(re ? oe : r, "scroll", xe, N),
                  vr(r, "wheel", be, N),
                  vr(r, sr[0], me, N),
                  vr(oe, sr[2], ge),
                  vr(oe, sr[3], ge),
                  vr(r, "click", ce, !0),
                  vr(r, "click", Te),
                  vr(oe, "gesturestart", ve),
                  vr(oe, "gestureend", ye),
                  vr(r, nr + "enter", Se),
                  vr(r, nr + "leave", _e),
                  vr(r, nr + "move", we),
                  (Q.isEnabled = Q.isPressed = Q.isDragging = !1),
                  z && z(Q));
              }),
              (Q.kill = function () {
                Q.disable();
                var e = cr.indexOf(Q);
                e >= 0 && cr.splice(e, 1), or === Q && (or = 0);
              }),
              cr.push(Q),
              L && mr(r) && (or = Q),
              Q.enable(p);
          }),
          (t = e),
          (n = [
            {
              key: "velocityX",
              get: function () {
                return this._vx.getVelocity();
              },
            },
            {
              key: "velocityY",
              get: function () {
                return this._vy.getVelocity();
              },
            },
          ]) && Yi(t.prototype, n),
          i && Yi(t, i),
          e
        );
      })();
      (Lr.version = "3.10.4"),
        (Lr.create = function (e) {
          return new Lr(e);
        }),
        (Lr.register = Pr),
        (Lr.getAll = function () {
          return cr.slice();
        }),
        (Lr.getById = function (e) {
          return cr.filter(function (t) {
            return t.vars.id === e;
          })[0];
        }),
        ar() && Ui.registerPlugin(Lr);
      var Dr,
        Or,
        Br,
        Ir,
        zr,
        Rr,
        qr,
        Nr,
        $r,
        Fr,
        jr,
        Hr,
        Wr,
        Vr,
        Gr,
        Xr,
        Yr,
        Ur,
        Qr,
        Kr,
        Zr,
        Jr,
        eo,
        to,
        no,
        io,
        ro,
        oo,
        so,
        ao,
        lo,
        co,
        uo,
        po = 1,
        fo = Date.now,
        ho = fo(),
        mo = 0,
        go = 0,
        vo = function () {
          return (Vr = 1);
        },
        yo = function () {
          return (Vr = 0);
        },
        xo = function (e) {
          return e;
        },
        bo = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        },
        wo = function () {
          return "undefined" != typeof window;
        },
        So = function () {
          return Dr || (wo() && (Dr = window.gsap) && Dr.registerPlugin && Dr);
        },
        _o = function (e) {
          return !!~qr.indexOf(e);
        },
        To = function (e) {
          return (
            hr(e, "getBoundingClientRect") ||
            (_o(e)
              ? function () {
                  return (
                    (Ns.width = Br.innerWidth), (Ns.height = Br.innerHeight), Ns
                  );
                }
              : function () {
                  return Zo(e);
                })
          );
        },
        Co = function (e, t) {
          var n = t.s,
            i = t.d2,
            r = t.d,
            o = t.a;
          return (n = "scroll" + i) && (o = hr(e, n))
            ? o() - To(e)()[r]
            : _o(e)
            ? (zr[n] || Rr[n]) -
              (Br["inner" + i] || zr["client" + i] || Rr["client" + i])
            : e[n] - e["offset" + i];
        },
        Eo = function (e, t) {
          for (var n = 0; n < Qr.length; n += 3)
            (!t || ~t.indexOf(Qr[n + 1])) && e(Qr[n], Qr[n + 1], Qr[n + 2]);
        },
        Ao = function (e) {
          return "string" == typeof e;
        },
        ko = function (e) {
          return "function" == typeof e;
        },
        Mo = function (e) {
          return "number" == typeof e;
        },
        Po = function (e) {
          return "object" == typeof e;
        },
        Lo = function (e) {
          return ko(e) && e();
        },
        Do = function (e, t) {
          return function () {
            var n = Lo(e),
              i = Lo(t);
            return function () {
              Lo(n), Lo(i);
            };
          };
        },
        Oo = function (e, t, n) {
          return e && e.progress(t ? 0 : 1) && n && e.pause();
        },
        Bo = function (e, t) {
          if (e.enabled) {
            var n = t(e);
            n && n.totalTime && (e.callbackAnimation = n);
          }
        },
        Io = Math.abs,
        zo = "left",
        Ro = "right",
        qo = "bottom",
        No = "width",
        $o = "height",
        Fo = "Right",
        jo = "Left",
        Ho = "Top",
        Wo = "Bottom",
        Vo = "padding",
        Go = "margin",
        Xo = "Width",
        Yo = "Height",
        Uo = "px",
        Qo = function (e) {
          return Br.getComputedStyle(e);
        },
        Ko = function (e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e;
        },
        Zo = function (e, t) {
          var n =
              t &&
              "matrix(1, 0, 0, 1, 0, 0)" !== Qo(e)[Gr] &&
              Dr.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              }).progress(1),
            i = e.getBoundingClientRect();
          return n && n.progress(0).kill(), i;
        },
        Jo = function (e, t) {
          var n = t.d2;
          return e["offset" + n] || e["client" + n] || 0;
        },
        es = function (e) {
          var t,
            n = [],
            i = e.labels,
            r = e.duration();
          for (t in i) n.push(i[t] / r);
          return n;
        },
        ts = function (e) {
          var t = Dr.utils.snap(e),
            n =
              Array.isArray(e) &&
              e.slice(0).sort(function (e, t) {
                return e - t;
              });
          return n
            ? function (e, i, r) {
                var o;
                if ((void 0 === r && (r = 0.001), !i)) return t(e);
                if (i > 0) {
                  for (e -= r, o = 0; o < n.length; o++)
                    if (n[o] >= e) return n[o];
                  return n[o - 1];
                }
                for (o = n.length, e += r; o--; ) if (n[o] <= e) return n[o];
                return n[0];
              }
            : function (n, i, r) {
                void 0 === r && (r = 0.001);
                var o = t(n);
                return !i || Math.abs(o - n) < r || o - n < 0 == i < 0
                  ? o
                  : t(i < 0 ? n - e : n + e);
              };
        },
        ns = function (e, t, n, i) {
          return n.split(",").forEach(function (n) {
            return e(t, n, i);
          });
        },
        is = function (e, t, n, i, r) {
          return e.addEventListener(t, n, { passive: !i, capture: !!r });
        },
        rs = function (e, t, n, i) {
          return e.removeEventListener(t, n, !!i);
        },
        os = function (e, t, n) {
          return n && n.wheelHandler && e(t, "wheel", n);
        },
        ss = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal",
        },
        as = { toggleActions: "play", anticipatePin: 0 },
        ls = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        cs = function (e, t) {
          if (Ao(e)) {
            var n = e.indexOf("="),
              i = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
            ~n &&
              (e.indexOf("%") > n && (i *= t / 100), (e = e.substr(0, n - 1))),
              (e =
                i +
                (e in ls
                  ? ls[e] * t
                  : ~e.indexOf("%")
                  ? (parseFloat(e) * t) / 100
                  : parseFloat(e) || 0));
          }
          return e;
        },
        us = function (e, t, n, i, r, o, s, a) {
          var l = r.startColor,
            c = r.endColor,
            u = r.fontSize,
            d = r.indent,
            p = r.fontWeight,
            f = Ir.createElement("div"),
            h = _o(n) || "fixed" === hr(n, "pinType"),
            m = -1 !== e.indexOf("scroller"),
            g = h ? Rr : n,
            v = -1 !== e.indexOf("start"),
            y = v ? l : c,
            x =
              "border-color:" +
              y +
              ";font-size:" +
              u +
              ";color:" +
              y +
              ";font-weight:" +
              p +
              ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return (
            (x += "position:" + ((m || a) && h ? "fixed;" : "absolute;")),
            (m || a || !h) &&
              (x += (i === _r ? Ro : qo) + ":" + (o + parseFloat(d)) + "px;"),
            s &&
              (x +=
                "box-sizing:border-box;text-align:left;width:" +
                s.offsetWidth +
                "px;"),
            (f._isStart = v),
            f.setAttribute(
              "class",
              "gsap-marker-" + e + (t ? " marker-" + t : "")
            ),
            (f.style.cssText = x),
            (f.innerText = t || 0 === t ? e + "-" + t : e),
            g.children[0] ? g.insertBefore(f, g.children[0]) : g.appendChild(f),
            (f._offset = f["offset" + i.op.d2]),
            ds(f, 0, i, v),
            f
          );
        },
        ds = function (e, t, n, i) {
          var r = { display: "block" },
            o = n[i ? "os2" : "p2"],
            s = n[i ? "p2" : "os2"];
          (e._isFlipped = i),
            (r[n.a + "Percent"] = i ? -100 : 0),
            (r[n.a] = i ? "1px" : 0),
            (r["border" + o + Xo] = 1),
            (r["border" + s + Xo] = 0),
            (r[n.p] = t + "px"),
            Dr.set(e, r);
        },
        ps = [],
        fs = {},
        hs = function () {
          return fo() - mo > 34 && Ds();
        },
        ms = function () {
          (!eo || !eo.isPressed || eo.startX > Rr.clientWidth) &&
            (ur.cache++,
            so || (so = requestAnimationFrame(Ds)),
            mo || _s("scrollStart"),
            (mo = fo()));
        },
        gs = function () {
          (io = Br.innerWidth), (no = Br.innerHeight);
        },
        vs = function () {
          ur.cache++,
            !Wr &&
              !Jr &&
              !Ir.fullscreenElement &&
              !Ir.webkitFullscreenElement &&
              (!to ||
                io !== Br.innerWidth ||
                Math.abs(Br.innerHeight - no) > 0.25 * Br.innerHeight) &&
              Nr.restart(!0);
        },
        ys = {},
        xs = [],
        bs = [],
        ws = function (e) {
          var t,
            n = Dr.ticker.frame,
            i = [],
            r = 0;
          if (lo !== n || po) {
            for (Es(); r < bs.length; r += 4)
              (t = Br.matchMedia(bs[r]).matches) !== bs[r + 3] &&
                ((bs[r + 3] = t),
                t ? i.push(r) : Es(1, bs[r]) || (ko(bs[r + 2]) && bs[r + 2]()));
            for (Cs(), r = 0; r < i.length; r++)
              (t = i[r]), (ao = bs[t]), (bs[t + 2] = bs[t + 1](e));
            (ao = 0), Or && Ms(0, 1), (lo = n), _s("matchMedia");
          }
        },
        Ss = function e() {
          return rs(Ws, "scrollEnd", e) || Ms(!0);
        },
        _s = function (e) {
          return (
            (ys[e] &&
              ys[e].map(function (e) {
                return e();
              })) ||
            xs
          );
        },
        Ts = [],
        Cs = function (e) {
          for (var t = 0; t < Ts.length; t += 5)
            (e && Ts[t + 4] !== e) ||
              ((Ts[t].style.cssText = Ts[t + 1]),
              Ts[t].getBBox && Ts[t].setAttribute("transform", Ts[t + 2] || ""),
              (Ts[t + 3].uncache = 1));
        },
        Es = function (e, t) {
          var n;
          for (Xr = 0; Xr < ps.length; Xr++)
            (n = ps[Xr]), (t && n.media !== t) || (e ? n.kill(1) : n.revert());
          t && Cs(t), t || _s("revert");
        },
        As = function () {
          return (
            ur.cache++ &&
            ur.forEach(function (e) {
              return "function" == typeof e && (e.rec = 0);
            })
          );
        },
        ks = 0,
        Ms = function (e, t) {
          if (!mo || e) {
            co = !0;
            var n = _s("refreshInit");
            Kr && Ws.sort(),
              t || Es(),
              ps.slice(0).forEach(function (e) {
                return e.refresh();
              }),
              ps.forEach(function (e) {
                return (
                  "max" === e.vars.end &&
                  e.setPositions(e.start, Co(e.scroller, e._dir))
                );
              }),
              n.forEach(function (e) {
                return e && e.render && e.render(-1);
              }),
              As(),
              Nr.pause(),
              ks++,
              (co = !1),
              _s("refresh");
          } else is(Ws, "scrollEnd", Ss);
        },
        Ps = 0,
        Ls = 1,
        Ds = function () {
          if (!co) {
            (Ws.isUpdating = !0), uo && uo.update(0);
            var e = ps.length,
              t = fo(),
              n = t - ho >= 50,
              i = e && ps[0].scroll();
            if (
              ((Ls = Ps > i ? -1 : 1),
              (Ps = i),
              n &&
                (mo && !Vr && t - mo > 200 && ((mo = 0), _s("scrollEnd")),
                (jr = ho),
                (ho = t)),
              Ls < 0)
            ) {
              for (Xr = e; Xr-- > 0; ) ps[Xr] && ps[Xr].update(0, n);
              Ls = 1;
            } else for (Xr = 0; Xr < e; Xr++) ps[Xr] && ps[Xr].update(0, n);
            Ws.isUpdating = !1;
          }
          so = 0;
        },
        Os = [
          zo,
          "top",
          qo,
          Ro,
          Go + Wo,
          Go + Fo,
          Go + Ho,
          Go + jo,
          "display",
          "flexShrink",
          "float",
          "zIndex",
          "gridColumnStart",
          "gridColumnEnd",
          "gridRowStart",
          "gridRowEnd",
          "gridArea",
          "justifySelf",
          "alignSelf",
          "placeSelf",
          "order",
        ],
        Bs = Os.concat([
          No,
          $o,
          "boxSizing",
          "max" + Xo,
          "max" + Yo,
          "position",
          Go,
          Vo,
          Vo + Ho,
          Vo + Fo,
          Vo + Wo,
          Vo + jo,
        ]),
        Is = function (e, t, n, i) {
          if (e.parentNode !== t) {
            for (var r, o = Os.length, s = t.style, a = e.style; o--; )
              s[(r = Os[o])] = n[r];
            (s.position = "absolute" === n.position ? "absolute" : "relative"),
              "inline" === n.display && (s.display = "inline-block"),
              (a[qo] = a[Ro] = s.flexBasis = "auto"),
              (s.overflow = "visible"),
              (s.boxSizing = "border-box"),
              (s[No] = Jo(e, Sr) + Uo),
              (s[$o] = Jo(e, _r) + Uo),
              (s[Vo] = a[Go] = a.top = a[zo] = "0"),
              Rs(i),
              (a[No] = a["max" + Xo] = n[No]),
              (a[$o] = a["max" + Yo] = n[$o]),
              (a[Vo] = n[Vo]),
              e.parentNode.insertBefore(t, e),
              t.appendChild(e);
          }
        },
        zs = /([A-Z])/g,
        Rs = function (e) {
          if (e) {
            var t,
              n,
              i = e.t.style,
              r = e.length,
              o = 0;
            for (
              (e.t._gsap || Dr.core.getCache(e.t)).uncache = 1;
              o < r;
              o += 2
            )
              (n = e[o + 1]),
                (t = e[o]),
                n
                  ? (i[t] = n)
                  : i[t] &&
                    i.removeProperty(t.replace(zs, "-$1").toLowerCase());
          }
        },
        qs = function (e) {
          for (var t = Bs.length, n = e.style, i = [], r = 0; r < t; r++)
            i.push(Bs[r], n[Bs[r]]);
          return (i.t = e), i;
        },
        Ns = { left: 0, top: 0 },
        $s = function (e, t, n, i, r, o, s, a, l, c, u, d, p) {
          ko(e) && (e = e(a)),
            Ao(e) &&
              "max" === e.substr(0, 3) &&
              (e = d + ("=" === e.charAt(4) ? cs("0" + e.substr(3), n) : 0));
          var f,
            h,
            m,
            g = p ? p.time() : 0;
          if ((p && p.seek(0), Mo(e))) s && ds(s, n, i, !0);
          else {
            ko(t) && (t = t(a));
            var v,
              y,
              x,
              b,
              w = e.split(" ");
            (m = Tr(t) || Rr),
              ((v = Zo(m) || {}) && (v.left || v.top)) ||
                "none" !== Qo(m).display ||
                ((b = m.style.display),
                (m.style.display = "block"),
                (v = Zo(m)),
                b ? (m.style.display = b) : m.style.removeProperty("display")),
              (y = cs(w[0], v[i.d])),
              (x = cs(w[1] || "0", n)),
              (e = v[i.p] - l[i.p] - c + y + r - x),
              s && ds(s, x, i, n - x < 20 || (s._isStart && x > 20)),
              (n -= n - x);
          }
          if (o) {
            var S = e + n,
              _ = o._isStart;
            (f = "scroll" + i.d2),
              ds(
                o,
                S,
                i,
                (_ && S > 20) ||
                  (!_ &&
                    (u ? Math.max(Rr[f], zr[f]) : o.parentNode[f]) <= S + 1)
              ),
              u &&
                ((l = Zo(s)),
                u && (o.style[i.op.p] = l[i.op.p] - i.op.m - o._offset + Uo));
          }
          return (
            p &&
              m &&
              ((f = Zo(m)),
              p.seek(d),
              (h = Zo(m)),
              (p._caScrollDist = f[i.p] - h[i.p]),
              (e = (e / p._caScrollDist) * d)),
            p && p.seek(g),
            p ? e : Math.round(e)
          );
        },
        Fs = /(webkit|moz|length|cssText|inset)/i,
        js = function (e, t, n, i) {
          if (e.parentNode !== t) {
            var r,
              o,
              s = e.style;
            if (t === Rr) {
              for (r in ((e._stOrig = s.cssText), (o = Qo(e))))
                +r ||
                  Fs.test(r) ||
                  !o[r] ||
                  "string" != typeof s[r] ||
                  "0" === r ||
                  (s[r] = o[r]);
              (s.top = n), (s.left = i);
            } else s.cssText = e._stOrig;
            (Dr.core.getCache(e).uncache = 1), t.appendChild(e);
          }
        },
        Hs = function (e, t) {
          var n,
            i,
            r = Cr(e, t),
            o = "_scroll" + t.p2,
            s = function t(s, a, l, c, u) {
              var d = t.tween,
                p = a.onComplete,
                f = {};
              return (
                (l = l || r()),
                (u = (c && u) || 0),
                (c = c || s - l),
                d && d.kill(),
                (n = Math.round(l)),
                (a[o] = s),
                (a.modifiers = f),
                (f[o] = function (e) {
                  return (
                    (e = bo(r())) !== n &&
                    e !== i &&
                    Math.abs(e - n) > 2 &&
                    Math.abs(e - i) > 2
                      ? (d.kill(), (t.tween = 0))
                      : (e = l + c * d.ratio + u * d.ratio * d.ratio),
                    (i = n),
                    (n = bo(e))
                  );
                }),
                (a.onComplete = function () {
                  (t.tween = 0), p && p.call(d);
                }),
                (d = t.tween = Dr.to(e, a))
              );
            };
          return (
            (e[o] = r),
            (r.wheelHandler = function () {
              return s.tween && s.tween.kill() && (s.tween = 0);
            }),
            is(e, "wheel", r.wheelHandler),
            s
          );
        },
        Ws = (function () {
          function e(t, n) {
            Or ||
              e.register(Dr) ||
              console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
              this.init(t, n);
          }
          return (
            (e.prototype.init = function (t, n) {
              if (
                ((this.progress = this.start = 0),
                this.vars && this.kill(!0, !0),
                go)
              ) {
                var i,
                  r,
                  o,
                  s,
                  a,
                  l,
                  c,
                  u,
                  d,
                  p,
                  f,
                  h,
                  m,
                  g,
                  v,
                  y,
                  x,
                  b,
                  w,
                  S,
                  _,
                  T,
                  C,
                  E,
                  A,
                  k,
                  M,
                  P,
                  L,
                  D,
                  O,
                  B,
                  I,
                  z,
                  R,
                  q,
                  N,
                  $,
                  F,
                  j,
                  H,
                  W = (t = Ko(
                    Ao(t) || Mo(t) || t.nodeType ? { trigger: t } : t,
                    as
                  )),
                  V = W.onUpdate,
                  G = W.toggleClass,
                  X = W.id,
                  Y = W.onToggle,
                  U = W.onRefresh,
                  Q = W.scrub,
                  K = W.trigger,
                  Z = W.pin,
                  J = W.pinSpacing,
                  ee = W.invalidateOnRefresh,
                  te = W.anticipatePin,
                  ne = W.onScrubComplete,
                  ie = W.onSnapComplete,
                  re = W.once,
                  oe = W.snap,
                  se = W.pinReparent,
                  ae = W.pinSpacer,
                  le = W.containerAnimation,
                  ce = W.fastScrollEnd,
                  ue = W.preventOverlaps,
                  de =
                    t.horizontal ||
                    (t.containerAnimation && !1 !== t.horizontal)
                      ? Sr
                      : _r,
                  pe = !Q && 0 !== Q,
                  fe = Tr(t.scroller || Br),
                  he = Dr.core.getCache(fe),
                  me = _o(fe),
                  ge =
                    "fixed" ===
                    ("pinType" in t
                      ? t.pinType
                      : hr(fe, "pinType") || (me && "fixed")),
                  ve = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                  ye = pe && t.toggleActions.split(" "),
                  xe = "markers" in t ? t.markers : as.markers,
                  be = me ? 0 : parseFloat(Qo(fe)["border" + de.p2 + Xo]) || 0,
                  we = this,
                  Se =
                    t.onRefreshInit &&
                    function () {
                      return t.onRefreshInit(we);
                    },
                  _e = (function (e, t, n) {
                    var i = n.d,
                      r = n.d2,
                      o = n.a;
                    return (o = hr(e, "getBoundingClientRect"))
                      ? function () {
                          return o()[i];
                        }
                      : function () {
                          return (t ? Br["inner" + r] : e["client" + r]) || 0;
                        };
                  })(fe, me, de),
                  Te = (function (e, t) {
                    return !t || ~dr.indexOf(e)
                      ? To(e)
                      : function () {
                          return Ns;
                        };
                  })(fe, me),
                  Ce = 0,
                  Ee = 0,
                  Ae = Cr(fe, de);
                if (
                  ((we.media = ao),
                  (we._dir = de),
                  (te *= 45),
                  (we.scroller = fe),
                  (we.scroll = le ? le.time.bind(le) : Ae),
                  (s = Ae()),
                  (we.vars = t),
                  (n = n || t.animation),
                  "refreshPriority" in t &&
                    ((Kr = 1), -9999 === t.refreshPriority && (uo = we)),
                  (he.tweenScroll = he.tweenScroll || {
                    top: Hs(fe, _r),
                    left: Hs(fe, Sr),
                  }),
                  (we.tweenTo = i = he.tweenScroll[de.p]),
                  (we.scrubDuration = function (e) {
                    (O = Mo(e) && e)
                      ? D
                        ? D.duration(e)
                        : (D = Dr.to(n, {
                            ease: "expo",
                            totalProgress: "+=0.001",
                            duration: O,
                            paused: !0,
                            onComplete: function () {
                              return ne && ne(we);
                            },
                          }))
                      : (D && D.progress(1).kill(), (D = 0));
                  }),
                  n &&
                    ((n.vars.lazy = !1),
                    n._initted ||
                      (!1 !== n.vars.immediateRender &&
                        !1 !== t.immediateRender &&
                        n.render(0, !0, !0)),
                    (we.animation = n.pause()),
                    (n.scrollTrigger = we),
                    we.scrubDuration(Q),
                    (P = 0),
                    X || (X = n.vars.id)),
                  ps.push(we),
                  oe &&
                    ((Po(oe) && !oe.push) || (oe = { snapTo: oe }),
                    "scrollBehavior" in Rr.style &&
                      Dr.set(me ? [Rr, zr] : fe, { scrollBehavior: "auto" }),
                    (o = ko(oe.snapTo)
                      ? oe.snapTo
                      : "labels" === oe.snapTo
                      ? (function (e) {
                          return function (t) {
                            return Dr.utils.snap(es(e), t);
                          };
                        })(n)
                      : "labelsDirectional" === oe.snapTo
                      ? ((F = n),
                        function (e, t) {
                          return ts(es(F))(e, t.direction);
                        })
                      : !1 !== oe.directional
                      ? function (e, t) {
                          return ts(oe.snapTo)(
                            e,
                            fo() - Ee < 500 ? 0 : t.direction
                          );
                        }
                      : Dr.utils.snap(oe.snapTo)),
                    (B = oe.duration || { min: 0.1, max: 2 }),
                    (B = Po(B) ? Fr(B.min, B.max) : Fr(B, B)),
                    (I = Dr.delayedCall(oe.delay || O / 2 || 0.1, function () {
                      var e = Ae(),
                        t = fo() - Ee < 500,
                        r = i.tween;
                      if (
                        !(t || Math.abs(we.getVelocity()) < 10) ||
                        r ||
                        Vr ||
                        Ce === e
                      )
                        we.isActive && Ce !== e && I.restart(!0);
                      else {
                        var s = (e - l) / m,
                          a = n && !pe ? n.totalProgress() : s,
                          u = t ? 0 : ((a - L) / (fo() - jr)) * 1e3 || 0,
                          d = Dr.utils.clamp(
                            -s,
                            1 - s,
                            (Io(u / 2) * u) / 0.185
                          ),
                          p = s + (!1 === oe.inertia ? 0 : d),
                          f = Fr(0, 1, o(p, we)),
                          h = Math.round(l + f * m),
                          g = oe,
                          v = g.onStart,
                          y = g.onInterrupt,
                          x = g.onComplete;
                        if (e <= c && e >= l && h !== e) {
                          if (r && !r._initted && r.data <= Io(h - e)) return;
                          !1 === oe.inertia && (d = f - s),
                            i(
                              h,
                              {
                                duration: B(
                                  Io(
                                    (0.185 * Math.max(Io(p - a), Io(f - a))) /
                                      u /
                                      0.05 || 0
                                  )
                                ),
                                ease: oe.ease || "power3",
                                data: Io(h - e),
                                onInterrupt: function () {
                                  return I.restart(!0) && y && y(we);
                                },
                                onComplete: function () {
                                  we.update(),
                                    (Ce = Ae()),
                                    (P = L =
                                      n && !pe
                                        ? n.totalProgress()
                                        : we.progress),
                                    ie && ie(we),
                                    x && x(we);
                                },
                              },
                              e,
                              d * m,
                              h - e - d * m
                            ),
                            v && v(we, i.tween);
                        }
                      }
                    }).pause())),
                  X && (fs[X] = we),
                  ($ =
                    (K = we.trigger = Tr(K || Z)) &&
                    K._gsap &&
                    K._gsap.stRevert) && ($ = $(we)),
                  (Z = !0 === Z ? K : Tr(Z)),
                  Ao(G) && (G = { targets: K, className: G }),
                  Z &&
                    (!1 === J ||
                      J === Go ||
                      (J = !(!J && "flex" === Qo(Z.parentNode).display) && Vo),
                    (we.pin = Z),
                    !1 !== t.force3D && Dr.set(Z, { force3D: !0 }),
                    (r = Dr.core.getCache(Z)).spacer
                      ? (g = r.pinState)
                      : (ae &&
                          ((ae = Tr(ae)) &&
                            !ae.nodeType &&
                            (ae = ae.current || ae.nativeElement),
                          (r.spacerIsNative = !!ae),
                          ae && (r.spacerState = qs(ae))),
                        (r.spacer = x = ae || Ir.createElement("div")),
                        x.classList.add("pin-spacer"),
                        X && x.classList.add("pin-spacer-" + X),
                        (r.pinState = g = qs(Z))),
                    (we.spacer = x = r.spacer),
                    (M = Qo(Z)),
                    (C = M[J + de.os2]),
                    (w = Dr.getProperty(Z)),
                    (S = Dr.quickSetter(Z, de.a, Uo)),
                    Is(Z, x, M),
                    (y = qs(Z))),
                  xe)
                ) {
                  (h = Po(xe) ? Ko(xe, ss) : ss),
                    (p = us("scroller-start", X, fe, de, h, 0)),
                    (f = us("scroller-end", X, fe, de, h, 0, p)),
                    (b = p["offset" + de.op.d2]);
                  var ke = Tr(hr(fe, "content") || fe);
                  (u = this.markerStart = us("start", X, ke, de, h, b, 0, le)),
                    (d = this.markerEnd = us("end", X, ke, de, h, b, 0, le)),
                    le && (N = Dr.quickSetter([u, d], de.a, Uo)),
                    ge ||
                      (dr.length && !0 === hr(fe, "fixedMarkers")) ||
                      ((H = Qo((j = me ? Rr : fe)).position),
                      (j.style.position =
                        "absolute" === H || "fixed" === H ? H : "relative"),
                      Dr.set([p, f], { force3D: !0 }),
                      (A = Dr.quickSetter(p, de.a, Uo)),
                      (k = Dr.quickSetter(f, de.a, Uo)));
                }
                if (le) {
                  var Me = le.vars.onUpdate,
                    Pe = le.vars.onUpdateParams;
                  le.eventCallback("onUpdate", function () {
                    we.update(0, 0, 1), Me && Me.apply(Pe || []);
                  });
                }
                (we.previous = function () {
                  return ps[ps.indexOf(we) - 1];
                }),
                  (we.next = function () {
                    return ps[ps.indexOf(we) + 1];
                  }),
                  (we.revert = function (e) {
                    var t = !1 !== e || !we.enabled,
                      i = Wr;
                    t !== we.isReverted &&
                      (t &&
                        (we.scroll.rec || !Wr || !co || (we.scroll.rec = Ae()),
                        (R = Math.max(Ae(), we.scroll.rec || 0)),
                        (z = we.progress),
                        (q = n && n.progress())),
                      u &&
                        [u, d, p, f].forEach(function (e) {
                          return (e.style.display = t ? "none" : "block");
                        }),
                      t && (Wr = 1),
                      we.update(t),
                      (Wr = i),
                      Z &&
                        (t
                          ? (function (e, t, n) {
                              Rs(n);
                              var i = e._gsap;
                              if (i.spacerIsNative) Rs(i.spacerState);
                              else if (e.parentNode === t) {
                                var r = t.parentNode;
                                r && (r.insertBefore(e, t), r.removeChild(t));
                              }
                            })(Z, x, g)
                          : (!se || !we.isActive) && Is(Z, x, Qo(Z), E)),
                      (we.isReverted = t));
                  }),
                  (we.refresh = function (r, o) {
                    if ((!Wr && we.enabled) || o)
                      if (Z && r && mo) is(e, "scrollEnd", Ss);
                      else {
                        !co && Se && Se(we),
                          (Wr = 1),
                          (Ee = fo()),
                          i.tween && (i.tween.kill(), (i.tween = 0)),
                          D && D.pause(),
                          ee && n && n.time(-0.01, !0).invalidate(),
                          we.isReverted || we.revert();
                        for (
                          var h,
                            b,
                            S,
                            C,
                            A,
                            k,
                            M,
                            P,
                            L,
                            O,
                            B = _e(),
                            N = Te(),
                            $ = le ? le.duration() : Co(fe, de),
                            F = 0,
                            j = 0,
                            H = t.end,
                            W = t.endTrigger || K,
                            V =
                              t.start ||
                              (0 !== t.start && K ? (Z ? "0 0" : "0 100%") : 0),
                            G = (we.pinnedContainer =
                              t.pinnedContainer && Tr(t.pinnedContainer)),
                            X = (K && Math.max(0, ps.indexOf(we))) || 0,
                            Y = X;
                          Y--;

                        )
                          (k = ps[Y]).end || k.refresh(0, 1) || (Wr = 1),
                            !(M = k.pin) ||
                              (M !== K && M !== Z) ||
                              k.isReverted ||
                              (O || (O = []), O.unshift(k), k.revert()),
                            k !== ps[Y] && (X--, Y--);
                        for (
                          ko(V) && (V = V(we)),
                            l =
                              $s(
                                V,
                                K,
                                B,
                                de,
                                Ae(),
                                u,
                                p,
                                we,
                                N,
                                be,
                                ge,
                                $,
                                le
                              ) || (Z ? -0.001 : 0),
                            ko(H) && (H = H(we)),
                            Ao(H) &&
                              !H.indexOf("+=") &&
                              (~H.indexOf(" ")
                                ? (H = (Ao(V) ? V.split(" ")[0] : "") + H)
                                : ((F = cs(H.substr(2), B)),
                                  (H = Ao(V) ? V : l + F),
                                  (W = K))),
                            c =
                              Math.max(
                                l,
                                $s(
                                  H || (W ? "100% 0" : $),
                                  W,
                                  B,
                                  de,
                                  Ae() + F,
                                  d,
                                  f,
                                  we,
                                  N,
                                  be,
                                  ge,
                                  $,
                                  le
                                )
                              ) || -0.001,
                            m = c - l || ((l -= 0.01) && 0.001),
                            F = 0,
                            Y = X;
                          Y--;

                        )
                          (M = (k = ps[Y]).pin) &&
                            k.start - k._pinPush < l &&
                            !le &&
                            k.end > 0 &&
                            ((h = k.end - k.start),
                            (M !== K && M !== G) ||
                              Mo(V) ||
                              (F += h * (1 - k.progress)),
                            M === Z && (j += h));
                        if (
                          ((l += F),
                          (c += F),
                          (we._pinPush = j),
                          u &&
                            F &&
                            (((h = {})[de.a] = "+=" + F),
                            G && (h[de.p] = "-=" + Ae()),
                            Dr.set([u, d], h)),
                          Z)
                        )
                          (h = Qo(Z)),
                            (C = de === _r),
                            (S = Ae()),
                            (_ = parseFloat(w(de.a)) + j),
                            !$ &&
                              c > 1 &&
                              ((me ? Rr : fe).style["overflow-" + de.a] =
                                "scroll"),
                            Is(Z, x, h),
                            (y = qs(Z)),
                            (b = Zo(Z, !0)),
                            (P = ge && Cr(fe, C ? Sr : _r)()),
                            J &&
                              (((E = [J + de.os2, m + j + Uo]).t = x),
                              (Y = J === Vo ? Jo(Z, de) + m + j : 0) &&
                                E.push(de.d, Y + Uo),
                              Rs(E),
                              ge && Ae(R)),
                            ge &&
                              (((A = {
                                top: b.top + (C ? S - l : P) + Uo,
                                left: b.left + (C ? P : S - l) + Uo,
                                boxSizing: "border-box",
                                position: "fixed",
                              })[No] = A["max" + Xo] =
                                Math.ceil(b.width) + Uo),
                              (A[$o] = A["max" + Yo] =
                                Math.ceil(b.height) + Uo),
                              (A[Go] =
                                A[Go + Ho] =
                                A[Go + Fo] =
                                A[Go + Wo] =
                                A[Go + jo] =
                                  "0"),
                              (A[Vo] = h[Vo]),
                              (A[Vo + Ho] = h[Vo + Ho]),
                              (A[Vo + Fo] = h[Vo + Fo]),
                              (A[Vo + Wo] = h[Vo + Wo]),
                              (A[Vo + jo] = h[Vo + jo]),
                              (v = (function (e, t, n) {
                                for (
                                  var i, r = [], o = e.length, s = n ? 8 : 0;
                                  s < o;
                                  s += 2
                                )
                                  (i = e[s]),
                                    r.push(i, i in t ? t[i] : e[s + 1]);
                                return (r.t = e.t), r;
                              })(g, A, se))),
                            n
                              ? ((L = n._initted),
                                Zr(1),
                                n.render(n.duration(), !0, !0),
                                (T = w(de.a) - _ + m + j),
                                m !== T && ge && v.splice(v.length - 2, 2),
                                n.render(0, !0, !0),
                                L || n.invalidate(),
                                Zr(0))
                              : (T = m);
                        else if (K && Ae() && !le)
                          for (b = K.parentNode; b && b !== Rr; )
                            b._pinOffset &&
                              ((l -= b._pinOffset), (c -= b._pinOffset)),
                              (b = b.parentNode);
                        O &&
                          O.forEach(function (e) {
                            return e.revert(!1);
                          }),
                          (we.start = l),
                          (we.end = c),
                          (s = a = Ae()),
                          le || (s < R && Ae(R), (we.scroll.rec = 0)),
                          we.revert(!1),
                          I &&
                            ((Ce = -1),
                            we.isActive && Ae(l + m * z),
                            I.restart(!0)),
                          (Wr = 0),
                          n &&
                            pe &&
                            (n._initted || q) &&
                            n.progress() !== q &&
                            n.progress(q, !0).render(n.time(), !0, !0),
                          (z !== we.progress || le) &&
                            (n && !pe && n.totalProgress(z, !0),
                            (we.progress = z),
                            we.update(0, 0, 1)),
                          Z &&
                            J &&
                            (x._pinOffset = Math.round(we.progress * T)),
                          U && U(we);
                      }
                  }),
                  (we.getVelocity = function () {
                    return ((Ae() - a) / (fo() - jr)) * 1e3 || 0;
                  }),
                  (we.endAnimation = function () {
                    Oo(we.callbackAnimation),
                      n &&
                        (D
                          ? D.progress(1)
                          : n.paused()
                          ? pe || Oo(n, we.direction < 0, 1)
                          : Oo(n, n.reversed()));
                  }),
                  (we.labelToScroll = function (e) {
                    return (
                      (n &&
                        n.labels &&
                        (l || we.refresh() || l) +
                          (n.labels[e] / n.duration()) * m) ||
                      0
                    );
                  }),
                  (we.getTrailing = function (e) {
                    var t = ps.indexOf(we),
                      n =
                        we.direction > 0
                          ? ps.slice(0, t).reverse()
                          : ps.slice(t + 1);
                    return (
                      Ao(e)
                        ? n.filter(function (t) {
                            return t.vars.preventOverlaps === e;
                          })
                        : n
                    ).filter(function (e) {
                      return we.direction > 0 ? e.end <= l : e.start >= c;
                    });
                  }),
                  (we.update = function (e, t, r) {
                    if (!le || r || e) {
                      var o,
                        u,
                        d,
                        f,
                        h,
                        g,
                        b,
                        w = we.scroll(),
                        E = e ? 0 : (w - l) / m,
                        M = E < 0 ? 0 : E > 1 ? 1 : E || 0,
                        O = we.progress;
                      if (
                        (t &&
                          ((a = s),
                          (s = le ? Ae() : w),
                          oe &&
                            ((L = P), (P = n && !pe ? n.totalProgress() : M))),
                        te &&
                          !M &&
                          Z &&
                          !Wr &&
                          !po &&
                          mo &&
                          l < w + ((w - a) / (fo() - jr)) * te &&
                          (M = 1e-4),
                        M !== O && we.enabled)
                      ) {
                        if (
                          ((f =
                            (h =
                              (o = we.isActive = !!M && M < 1) !==
                              (!!O && O < 1)) || !!M != !!O),
                          (we.direction = M > O ? 1 : -1),
                          (we.progress = M),
                          f &&
                            !Wr &&
                            ((u = M && !O ? 0 : 1 === M ? 1 : 1 === O ? 2 : 3),
                            pe &&
                              ((d =
                                (!h && "none" !== ye[u + 1] && ye[u + 1]) ||
                                ye[u]),
                              (b =
                                n &&
                                ("complete" === d ||
                                  "reset" === d ||
                                  d in n)))),
                          ue &&
                            (h || b) &&
                            (b || Q || !n) &&
                            (ko(ue)
                              ? ue(we)
                              : we.getTrailing(ue).forEach(function (e) {
                                  return e.endAnimation();
                                })),
                          pe ||
                            (!D || Wr || po
                              ? n && n.totalProgress(M, !!Wr)
                              : ((le || (uo && uo !== we)) &&
                                  D.render(D._dp._time - D._start),
                                D.resetTo
                                  ? D.resetTo(
                                      "totalProgress",
                                      M,
                                      n._tTime / n._tDur
                                    )
                                  : ((D.vars.totalProgress = M),
                                    D.invalidate().restart()))),
                          Z)
                        )
                          if ((e && J && (x.style[J + de.os2] = C), ge)) {
                            if (f) {
                              if (
                                ((g =
                                  !e &&
                                  M > O &&
                                  c + 1 > w &&
                                  w + 1 >= Co(fe, de)),
                                se)
                              )
                                if (e || (!o && !g)) js(Z, x);
                                else {
                                  var B = Zo(Z, !0),
                                    z = w - l;
                                  js(
                                    Z,
                                    Rr,
                                    B.top + (de === _r ? z : 0) + Uo,
                                    B.left + (de === _r ? 0 : z) + Uo
                                  );
                                }
                              Rs(o || g ? v : y),
                                (T !== m && M < 1 && o) ||
                                  S(_ + (1 !== M || g ? 0 : T));
                            }
                          } else S(bo(_ + T * M));
                        oe && !i.tween && !Wr && !po && I.restart(!0),
                          G &&
                            (h || (re && M && (M < 1 || !oo))) &&
                            $r(G.targets).forEach(function (e) {
                              return e.classList[o || re ? "add" : "remove"](
                                G.className
                              );
                            }),
                          V && !pe && !e && V(we),
                          f && !Wr
                            ? (pe &&
                                (b &&
                                  ("complete" === d
                                    ? n.pause().totalProgress(1)
                                    : "reset" === d
                                    ? n.restart(!0).pause()
                                    : "restart" === d
                                    ? n.restart(!0)
                                    : n[d]()),
                                V && V(we)),
                              (!h && oo) ||
                                (Y && h && Bo(we, Y),
                                ve[u] && Bo(we, ve[u]),
                                re && (1 === M ? we.kill(!1, 1) : (ve[u] = 0)),
                                h ||
                                  (ve[(u = 1 === M ? 1 : 3)] && Bo(we, ve[u]))),
                              ce &&
                                !o &&
                                Math.abs(we.getVelocity()) >
                                  (Mo(ce) ? ce : 2500) &&
                                (Oo(we.callbackAnimation),
                                D ? D.progress(1) : Oo(n, !M, 1)))
                            : pe && V && !Wr && V(we);
                      }
                      if (k) {
                        var R = le
                          ? (w / le.duration()) * (le._caScrollDist || 0)
                          : w;
                        A(R + (p._isFlipped ? 1 : 0)), k(R);
                      }
                      N && N((-w / le.duration()) * (le._caScrollDist || 0));
                    }
                  }),
                  (we.enable = function (t, n) {
                    we.enabled ||
                      ((we.enabled = !0),
                      is(fe, "resize", vs),
                      is(me ? Ir : fe, "scroll", ms),
                      Se && is(e, "refreshInit", Se),
                      !1 !== t && ((we.progress = z = 0), (s = a = Ce = Ae())),
                      !1 !== n && we.refresh());
                  }),
                  (we.getTween = function (e) {
                    return e && i ? i.tween : D;
                  }),
                  (we.setPositions = function (e, t) {
                    Z && ((_ += e - l), (T += t - e - m)),
                      (we.start = l = e),
                      (we.end = c = t),
                      (m = t - e),
                      we.update();
                  }),
                  (we.disable = function (t, n) {
                    if (
                      we.enabled &&
                      (!1 !== t && we.revert(),
                      (we.enabled = we.isActive = !1),
                      n || (D && D.pause()),
                      (R = 0),
                      r && (r.uncache = 1),
                      Se && rs(e, "refreshInit", Se),
                      I &&
                        (I.pause(), i.tween && i.tween.kill() && (i.tween = 0)),
                      !me)
                    ) {
                      for (var o = ps.length; o--; )
                        if (ps[o].scroller === fe && ps[o] !== we) return;
                      rs(fe, "resize", vs), rs(fe, "scroll", ms);
                    }
                  }),
                  (we.kill = function (e, i) {
                    we.disable(e, i), D && !i && D.kill(), X && delete fs[X];
                    var o = ps.indexOf(we);
                    o >= 0 && ps.splice(o, 1),
                      o === Xr && Ls > 0 && Xr--,
                      (o = 0),
                      ps.forEach(function (e) {
                        return e.scroller === we.scroller && (o = 1);
                      }),
                      o || (we.scroll.rec = 0),
                      n &&
                        ((n.scrollTrigger = null),
                        e && n.render(-1),
                        i || n.kill()),
                      u &&
                        [u, d, p, f].forEach(function (e) {
                          return e.parentNode && e.parentNode.removeChild(e);
                        }),
                      uo === we && (uo = 0),
                      Z &&
                        (r && (r.uncache = 1),
                        (o = 0),
                        ps.forEach(function (e) {
                          return e.pin === Z && o++;
                        }),
                        o || (r.spacer = 0)),
                      t.onKill && t.onKill(we);
                  }),
                  we.enable(!1, !1),
                  $ && $(we),
                  n && n.add && !m
                    ? Dr.delayedCall(0.01, function () {
                        return l || c || we.refresh();
                      }) &&
                      (m = 0.01) &&
                      (l = c = 0)
                    : we.refresh();
              } else this.update = this.refresh = this.kill = xo;
            }),
            (e.register = function (t) {
              return (
                Or ||
                  ((Dr = t || So()),
                  wo() && window.document && e.enable(),
                  (Or = go)),
                Or
              );
            }),
            (e.defaults = function (e) {
              if (e) for (var t in e) as[t] = e[t];
              return as;
            }),
            (e.disable = function (e, t) {
              (go = 0),
                ps.forEach(function (n) {
                  return n[t ? "kill" : "disable"](e);
                }),
                rs(Br, "wheel", ms),
                rs(Ir, "scroll", ms),
                clearInterval(Hr),
                rs(Ir, "touchcancel", xo),
                rs(Rr, "touchstart", xo),
                ns(rs, Ir, "pointerdown,touchstart,mousedown", vo),
                ns(rs, Ir, "pointerup,touchend,mouseup", yo),
                Nr.kill(),
                Eo(rs);
              for (var n = 0; n < ur.length; n += 3)
                os(rs, ur[n], ur[n + 1]), os(rs, ur[n], ur[n + 2]);
            }),
            (e.enable = function () {
              if (
                ((Br = window),
                (Ir = document),
                (zr = Ir.documentElement),
                (Rr = Ir.body),
                Dr &&
                  (($r = Dr.utils.toArray),
                  (Fr = Dr.utils.clamp),
                  (Zr = Dr.core.suppressOverwrites || xo),
                  Dr.core.globals("ScrollTrigger", e),
                  Rr))
              ) {
                (go = 1),
                  Lr.register(Dr),
                  (e.isTouch = Lr.isTouch),
                  (ro =
                    Lr.isTouch &&
                    /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                  is(Br, "wheel", ms),
                  (qr = [Br, Ir, zr, Rr]),
                  e.matchMedia({
                    "(orientation: portrait)": function () {
                      return gs(), gs;
                    },
                  }),
                  is(Ir, "scroll", ms);
                var t,
                  n,
                  i = Rr.style,
                  r = i.borderTopStyle;
                for (
                  i.borderTopStyle = "solid",
                    t = Zo(Rr),
                    _r.m = Math.round(t.top + _r.sc()) || 0,
                    Sr.m = Math.round(t.left + Sr.sc()) || 0,
                    r
                      ? (i.borderTopStyle = r)
                      : i.removeProperty("border-top-style"),
                    Hr = setInterval(hs, 250),
                    Dr.delayedCall(0.5, function () {
                      return (po = 0);
                    }),
                    is(Ir, "touchcancel", xo),
                    is(Rr, "touchstart", xo),
                    ns(is, Ir, "pointerdown,touchstart,mousedown", vo),
                    ns(is, Ir, "pointerup,touchend,mouseup", yo),
                    Gr = Dr.utils.checkPrefix("transform"),
                    Bs.push(Gr),
                    Or = fo(),
                    Nr = Dr.delayedCall(0.2, Ms).pause(),
                    Qr = [
                      Ir,
                      "visibilitychange",
                      function () {
                        var e = Br.innerWidth,
                          t = Br.innerHeight;
                        Ir.hidden
                          ? ((Yr = e), (Ur = t))
                          : (Yr === e && Ur === t) || vs();
                      },
                      Ir,
                      "DOMContentLoaded",
                      Ms,
                      Br,
                      "load",
                      Ms,
                      Br,
                      "resize",
                      vs,
                    ],
                    Eo(is),
                    ps.forEach(function (e) {
                      return e.enable(0, 1);
                    }),
                    n = 0;
                  n < ur.length;
                  n += 3
                )
                  os(rs, ur[n], ur[n + 1]), os(rs, ur[n], ur[n + 2]);
              }
            }),
            (e.config = function (t) {
              "limitCallbacks" in t && (oo = !!t.limitCallbacks);
              var n = t.syncInterval;
              (n && clearInterval(Hr)) || ((Hr = n) && setInterval(hs, n)),
                "ignoreMobileResize" in t &&
                  (to = 1 === e.isTouch && t.ignoreMobileResize),
                "autoRefreshEvents" in t &&
                  (Eo(rs) || Eo(is, t.autoRefreshEvents || "none"),
                  (Jr = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
            }),
            (e.scrollerProxy = function (e, t) {
              var n = Tr(e),
                i = ur.indexOf(n),
                r = _o(n);
              ~i && ur.splice(i, r ? 6 : 2),
                t && (r ? dr.unshift(Br, t, Rr, t, zr, t) : dr.unshift(n, t));
            }),
            (e.matchMedia = function (e) {
              var t, n, i, r, o;
              for (n in e)
                (i = bs.indexOf(n)),
                  (r = e[n]),
                  (ao = n),
                  "all" === n
                    ? r()
                    : (t = Br.matchMedia(n)) &&
                      (t.matches && (o = r()),
                      ~i
                        ? ((bs[i + 1] = Do(bs[i + 1], r)),
                          (bs[i + 2] = Do(bs[i + 2], o)))
                        : ((i = bs.length),
                          bs.push(n, r, o),
                          t.addListener
                            ? t.addListener(ws)
                            : t.addEventListener("change", ws)),
                      (bs[i + 3] = t.matches)),
                  (ao = 0);
              return bs;
            }),
            (e.clearMatchMedia = function (e) {
              e || (bs.length = 0), (e = bs.indexOf(e)) >= 0 && bs.splice(e, 4);
            }),
            (e.isInViewport = function (e, t, n) {
              var i = (Ao(e) ? Tr(e) : e).getBoundingClientRect(),
                r = i[n ? No : $o] * t || 0;
              return n
                ? i.right - r > 0 && i.left + r < Br.innerWidth
                : i.bottom - r > 0 && i.top + r < Br.innerHeight;
            }),
            (e.positionInViewport = function (e, t, n) {
              Ao(e) && (e = Tr(e));
              var i = e.getBoundingClientRect(),
                r = i[n ? No : $o],
                o =
                  null == t
                    ? r / 2
                    : t in ls
                    ? ls[t] * r
                    : ~t.indexOf("%")
                    ? (parseFloat(t) * r) / 100
                    : parseFloat(t) || 0;
              return n
                ? (i.left + o) / Br.innerWidth
                : (i.top + o) / Br.innerHeight;
            }),
            e
          );
        })();
      (Ws.version = "3.10.4"),
        (Ws.saveStyles = function (e) {
          return e
            ? $r(e).forEach(function (e) {
                if (e && e.style) {
                  var t = Ts.indexOf(e);
                  t >= 0 && Ts.splice(t, 5),
                    Ts.push(
                      e,
                      e.style.cssText,
                      e.getBBox && e.getAttribute("transform"),
                      Dr.core.getCache(e),
                      ao
                    );
                }
              })
            : Ts;
        }),
        (Ws.revert = function (e, t) {
          return Es(!e, t);
        }),
        (Ws.create = function (e, t) {
          return new Ws(e, t);
        }),
        (Ws.refresh = function (e) {
          return e ? vs() : (Or || Ws.register()) && Ms(!0);
        }),
        (Ws.update = Ds),
        (Ws.clearScrollMemory = As),
        (Ws.maxScroll = function (e, t) {
          return Co(e, t ? Sr : _r);
        }),
        (Ws.getScrollFunc = function (e, t) {
          return Cr(Tr(e), t ? Sr : _r);
        }),
        (Ws.getById = function (e) {
          return fs[e];
        }),
        (Ws.getAll = function () {
          return ps.filter(function (e) {
            return "ScrollSmoother" !== e.vars.id;
          });
        }),
        (Ws.isScrolling = function () {
          return !!mo;
        }),
        (Ws.snapDirectional = ts),
        (Ws.addEventListener = function (e, t) {
          var n = ys[e] || (ys[e] = []);
          ~n.indexOf(t) || n.push(t);
        }),
        (Ws.removeEventListener = function (e, t) {
          var n = ys[e],
            i = n && n.indexOf(t);
          i >= 0 && n.splice(i, 1);
        }),
        (Ws.batch = function (e, t) {
          var n,
            i = [],
            r = {},
            o = t.interval || 0.016,
            s = t.batchMax || 1e9,
            a = function (e, t) {
              var n = [],
                i = [],
                r = Dr.delayedCall(o, function () {
                  t(n, i), (n = []), (i = []);
                }).pause();
              return function (e) {
                n.length || r.restart(!0),
                  n.push(e.trigger),
                  i.push(e),
                  s <= n.length && r.progress(1);
              };
            };
          for (n in t)
            r[n] =
              "on" === n.substr(0, 2) && ko(t[n]) && "onRefreshInit" !== n
                ? a(0, t[n])
                : t[n];
          return (
            ko(s) &&
              ((s = s()),
              is(Ws, "refresh", function () {
                return (s = t.batchMax());
              })),
            $r(e).forEach(function (e) {
              var t = {};
              for (n in r) t[n] = r[n];
              (t.trigger = e), i.push(Ws.create(t));
            }),
            i
          );
        });
      var Vs,
        Gs = function (e, t, n, i) {
          return (
            t > i ? e(i) : t < 0 && e(0),
            n > i ? (i - t) / (n - t) : n < 0 ? t / (t - n) : 1
          );
        },
        Xs = function e(t, n) {
          !0 === n
            ? t.style.removeProperty("touch-action")
            : (t.style.touchAction =
                !0 === n
                  ? "auto"
                  : n
                  ? "pan-" + n + (Lr.isTouch ? " pinch-zoom" : "")
                  : "none"),
            t === zr && e(Rr, n);
        },
        Ys = { auto: 1, scroll: 1 },
        Us = function (e) {
          var t,
            n = e.event,
            i = e.target,
            r = e.axis,
            o = (n.changedTouches ? n.changedTouches[0] : n).target,
            s = o._gsap || Dr.core.getCache(o),
            a = fo();
          if (!s._isScrollT || a - s._isScrollT > 2e3) {
            for (; o && o.scrollHeight <= o.clientHeight; ) o = o.parentNode;
            (s._isScroll =
              o &&
              !_o(o) &&
              o !== i &&
              (Ys[(t = Qo(o)).overflowY] || Ys[t.overflowX])),
              (s._isScrollT = a);
          }
          (s._isScroll || "x" === r) && (n._gsapAllow = !0);
        },
        Qs = function (e, t, n, i) {
          return Lr.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: (i = i && Us),
            onPress: i,
            onDrag: i,
            onScroll: i,
            onEnable: function () {
              return n && is(Ir, Lr.eventTypes[0], Zs, !1, !0);
            },
            onDisable: function () {
              return rs(Ir, Lr.eventTypes[0], Zs, !0);
            },
          });
        },
        Ks = /(input|label|select|textarea)/i,
        Zs = function (e) {
          var t = Ks.test(e.target.tagName);
          (t || Vs) && ((e._gsapAllow = !0), (Vs = t));
        },
        Js = function (e) {
          Po(e) || (e = {}),
            (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
            e.type || (e.type = "wheel,touch"),
            (e.debounce = !!e.debounce),
            (e.id = e.id || "normalizer");
          var t,
            n,
            i,
            r,
            o,
            s,
            a,
            l,
            c = e,
            u = c.normalizeScrollX,
            d = c.momentum,
            p = c.allowNestedScroll,
            f = Tr(e.target) || zr,
            h = Dr.core.globals().ScrollSmoother,
            m =
              ro &&
              ((e.content && Tr(e.content)) ||
                (h && h.get() && h.get().content())),
            g = Cr(f, _r),
            v = Cr(f, Sr),
            y = 1,
            x =
              (Lr.isTouch && Br.visualViewport
                ? Br.visualViewport.scale * Br.visualViewport.width
                : Br.outerWidth) / Br.innerWidth,
            b = 0,
            w = ko(d)
              ? function () {
                  return d(t);
                }
              : function () {
                  return d || 2.8;
                },
            S = Qs(f, e.type, !0, p),
            _ = function () {
              return (i = !1);
            },
            T = xo,
            C = xo,
            E = function () {
              (n = Co(f, _r)),
                (C = Fr(ro ? 1 : 0, n)),
                u && (T = Fr(0, Co(f, Sr))),
                (r = ks);
            },
            A = function () {
              E(),
                o.isActive() &&
                  o.vars.scrollY > n &&
                  (g() > n ? o.progress(1) && g(n) : o.resetTo("scrollY", n));
            };
          return (
            (e.ignoreCheck = function (e) {
              return (
                (ro &&
                  "touchmove" === e.type &&
                  (function () {
                    if (i) {
                      requestAnimationFrame(_);
                      var e = bo(t.deltaY / 2),
                        n = C(g.v - e);
                      return (
                        m &&
                          n !== g.v + g.offset &&
                          ((g.offset = n - g.v),
                          (m.style.transform =
                            "translateY(" + -g.offset + "px)"),
                          m._gsap && (m._gsap.y = -g.offset + "px"),
                          (g.cacheID = ur.cache),
                          Ds()),
                        !0
                      );
                    }
                    m &&
                      ((m.style.transform = "translateY(0px)"),
                      (g.offset = g.cacheID = 0),
                      m._gsap && (m._gsap.y = "0px")),
                      (i = !0);
                  })()) ||
                (y > 1.05 && "touchstart" !== e.type) ||
                t.isGesturing ||
                (e.touches && e.touches.length > 1)
              );
            }),
            (e.onPress = function () {
              var e = y;
              (y = bo(
                ((Br.visualViewport && Br.visualViewport.scale) || 1) / x
              )),
                o.pause(),
                e !== y && Xs(f, y > 1.01 || (!u && "x")),
                (i = !1),
                (s = v()),
                (a = g()),
                E(),
                (r = ks);
            }),
            (e.onRelease = e.onGestureStart =
              function (e, t) {
                if (
                  (m &&
                    ((m.style.transform = "translateY(0px)"),
                    (g.offset = g.cacheID = 0),
                    m._gsap && (m._gsap.y = "0px")),
                  t)
                ) {
                  ur.cache++;
                  var i,
                    r,
                    s = w();
                  u &&
                    ((r = (i = v()) + (0.05 * s * -e.velocityX) / 0.227),
                    (s *= Gs(v, i, r, Co(f, Sr))),
                    (o.vars.scrollX = T(r))),
                    (r = (i = g()) + (0.05 * s * -e.velocityY) / 0.227),
                    (s *= Gs(g, i, r, Co(f, _r))),
                    (o.vars.scrollY = C(r)),
                    o.invalidate().duration(s).play(0.01),
                    ((ro && o.vars.scrollY >= n) || i >= n - 1) &&
                      Dr.to({}, { onUpdate: A, duration: s });
                } else l.restart(!0);
              }),
            (e.onWheel = function () {
              o._ts && o.pause(), fo() - b > 1e3 && ((r = 0), (b = fo()));
            }),
            (e.onChange = function (e, t, n, i, o) {
              ks !== r && E(),
                t &&
                  u &&
                  v(T(i[2] === t ? s + (e.startX - e.x) : v() + t - i[1])),
                n && g(C(o[2] === n ? a + (e.startY - e.y) : g() + n - o[1])),
                Ds();
            }),
            (e.onEnable = function () {
              Xs(f, !u && "x"), is(Br, "resize", A), S.enable();
            }),
            (e.onDisable = function () {
              Xs(f, !0), rs(Br, "resize", A), S.kill();
            }),
            ((t = new Lr(e)).iOS = ro),
            ro && !g() && g(1),
            (l = t._dc),
            (o = Dr.to(t, {
              ease: "power4",
              paused: !0,
              scrollX: u ? "+=0.1" : "+=0",
              scrollY: "+=0.1",
              onComplete: l.vars.onComplete,
            })),
            t
          );
        };
      (Ws.sort = function (e) {
        return ps.sort(
          e ||
            function (e, t) {
              return (
                -1e6 * (e.vars.refreshPriority || 0) +
                e.start -
                (t.start + -1e6 * (t.vars.refreshPriority || 0))
              );
            }
        );
      }),
        (Ws.observe = function (e) {
          return new Lr(e);
        }),
        (Ws.normalizeScroll = function (e) {
          if (void 0 === e) return eo;
          if (!0 === e && eo) return eo.enable();
          if (!1 === e) return eo && eo.kill();
          var t = e instanceof Lr ? e : Js(e);
          return (
            eo && eo.target === t.target && eo.kill(),
            _o(t.target) && (eo = t),
            t
          );
        }),
        (Ws.core = {
          _getVelocityProp: Er,
          _inputObserver: Qs,
          _scrollers: ur,
          _proxies: dr,
          bridge: {
            ss: function () {
              mo || _s("scrollStart"), (mo = fo());
            },
            ref: function () {
              return Wr;
            },
          },
        }),
        So() && Dr.registerPlugin(Ws);
      var ea,
        ta,
        na,
        ia,
        ra,
        oa,
        sa,
        aa = function () {
          return "undefined" != typeof window;
        },
        la = function () {
          return ea || (aa() && (ea = window.gsap) && ea.registerPlugin && ea);
        },
        ca = function (e) {
          return "string" == typeof e;
        },
        ua = function (e) {
          return "function" == typeof e;
        },
        da = function (e, t) {
          var n = "x" === t ? "Width" : "Height",
            i = "scroll" + n,
            r = "client" + n;
          return e === na || e === ia || e === ra
            ? Math.max(ia[i], ra[i]) - (na["inner" + n] || ia[r] || ra[r])
            : e[i] - e["offset" + n];
        },
        pa = function (e, t) {
          var n = "scroll" + ("x" === t ? "Left" : "Top");
          return (
            e === na &&
              (null != e.pageXOffset
                ? (n = "page" + t.toUpperCase() + "Offset")
                : (e = null != ia[n] ? ia : ra)),
            function () {
              return e[n];
            }
          );
        },
        fa = function (e, t) {
          if (!(e = oa(e)[0]) || !e.getBoundingClientRect)
            return (
              console.warn("scrollTo target doesn't exist. Using 0") || {
                x: 0,
                y: 0,
              }
            );
          var n = e.getBoundingClientRect(),
            i = !t || t === na || t === ra,
            r = i
              ? {
                  top:
                    ia.clientTop -
                    (na.pageYOffset || ia.scrollTop || ra.scrollTop || 0),
                  left:
                    ia.clientLeft -
                    (na.pageXOffset || ia.scrollLeft || ra.scrollLeft || 0),
                }
              : t.getBoundingClientRect(),
            o = { x: n.left - r.left, y: n.top - r.top };
          return !i && t && ((o.x += pa(t, "x")()), (o.y += pa(t, "y")())), o;
        },
        ha = function (e, t, n, i, r) {
          return isNaN(e) || "object" == typeof e
            ? ca(e) && "=" === e.charAt(1)
              ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + i - r
              : "max" === e
              ? da(t, n) - r
              : Math.min(da(t, n), fa(e, t)[n] - r)
            : parseFloat(e) - r;
        },
        ma = function () {
          (ea = la()),
            aa() &&
              ea &&
              document.body &&
              ((na = window),
              (ra = document.body),
              (ia = document.documentElement),
              (oa = ea.utils.toArray),
              ea.config({ autoKillThreshold: 7 }),
              (sa = ea.config()),
              (ta = 1));
        },
        ga = {
          version: "3.10.4",
          name: "scrollTo",
          rawVars: 1,
          register: function (e) {
            (ea = e), ma();
          },
          init: function (e, t, n, i, r) {
            ta || ma();
            var o = this,
              s = ea.getProperty(e, "scrollSnapType");
            (o.isWin = e === na),
              (o.target = e),
              (o.tween = n),
              (t = (function (e, t, n, i) {
                if ((ua(e) && (e = e(t, n, i)), "object" != typeof e))
                  return ca(e) && "max" !== e && "=" !== e.charAt(1)
                    ? { x: e, y: e }
                    : { y: e };
                if (e.nodeType) return { y: e, x: e };
                var r,
                  o = {};
                for (r in e)
                  o[r] = "onAutoKill" !== r && ua(e[r]) ? e[r](t, n, i) : e[r];
                return o;
              })(t, i, e, r)),
              (o.vars = t),
              (o.autoKill = !!t.autoKill),
              (o.getX = pa(e, "x")),
              (o.getY = pa(e, "y")),
              (o.x = o.xPrev = o.getX()),
              (o.y = o.yPrev = o.getY()),
              s &&
                "none" !== s &&
                ((o.snap = 1),
                (o.snapInline = e.style.scrollSnapType),
                (e.style.scrollSnapType = "none")),
              null != t.x
                ? (o.add(
                    o,
                    "x",
                    o.x,
                    ha(t.x, e, "x", o.x, t.offsetX || 0),
                    i,
                    r
                  ),
                  o._props.push("scrollTo_x"))
                : (o.skipX = 1),
              null != t.y
                ? (o.add(
                    o,
                    "y",
                    o.y,
                    ha(t.y, e, "y", o.y, t.offsetY || 0),
                    i,
                    r
                  ),
                  o._props.push("scrollTo_y"))
                : (o.skipY = 1);
          },
          render: function (e, t) {
            for (
              var n,
                i,
                r,
                o,
                s,
                a = t._pt,
                l = t.target,
                c = t.tween,
                u = t.autoKill,
                d = t.xPrev,
                p = t.yPrev,
                f = t.isWin,
                h = t.snap,
                m = t.snapInline;
              a;

            )
              a.r(e, a.d), (a = a._next);
            (n = f || !t.skipX ? t.getX() : d),
              (r = (i = f || !t.skipY ? t.getY() : p) - p),
              (o = n - d),
              (s = sa.autoKillThreshold),
              t.x < 0 && (t.x = 0),
              t.y < 0 && (t.y = 0),
              u &&
                (!t.skipX &&
                  (o > s || o < -s) &&
                  n < da(l, "x") &&
                  (t.skipX = 1),
                !t.skipY &&
                  (r > s || r < -s) &&
                  i < da(l, "y") &&
                  (t.skipY = 1),
                t.skipX &&
                  t.skipY &&
                  (c.kill(),
                  t.vars.onAutoKill &&
                    t.vars.onAutoKill.apply(c, t.vars.onAutoKillParams || []))),
              f
                ? na.scrollTo(t.skipX ? n : t.x, t.skipY ? i : t.y)
                : (t.skipY || (l.scrollTop = t.y),
                  t.skipX || (l.scrollLeft = t.x)),
              !h ||
                (1 !== e && 0 !== e) ||
                ((i = l.scrollTop),
                (n = l.scrollLeft),
                m
                  ? (l.style.scrollSnapType = m)
                  : l.style.removeProperty("scroll-snap-type"),
                (l.scrollTop = i + 1),
                (l.scrollLeft = n + 1),
                (l.scrollTop = i),
                (l.scrollLeft = n)),
              (t.xPrev = t.x),
              (t.yPrev = t.y);
          },
          kill: function (e) {
            var t = "scrollTo" === e;
            (t || "scrollTo_x" === e) && (this.skipX = 1),
              (t || "scrollTo_y" === e) && (this.skipY = 1);
          },
        };
      function va() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      }
      function ya(e, t) {
        return Object.getOwnPropertyNames(Object(e)).reduce((n, i) => {
          const r = Object.getOwnPropertyDescriptor(Object(e), i),
            o = Object.getOwnPropertyDescriptor(Object(t), i);
          return Object.defineProperty(n, i, o || r);
        }, {});
      }
      function xa(e) {
        return "string" == typeof e;
      }
      function ba(e) {
        return Array.isArray(e);
      }
      function wa(e = {}) {
        const t = ya(e);
        let n;
        return (
          void 0 !== t.types
            ? (n = t.types)
            : void 0 !== t.split && (n = t.split),
          void 0 !== n &&
            (t.types = (xa(n) || ba(n) ? String(n) : "")
              .split(",")
              .map((e) => String(e).trim())
              .filter((e) => /((line)|(word)|(char))/i.test(e))),
          (t.absolute || t.position) &&
            (t.absolute = t.absolute || /absolute/.test(e.position)),
          t
        );
      }
      function Sa(e) {
        const t = xa(e) || ba(e) ? String(e) : "";
        return {
          none: !t,
          lines: /line/i.test(t),
          words: /word/i.test(t),
          chars: /char/i.test(t),
        };
      }
      function _a(e) {
        return null !== e && "object" == typeof e;
      }
      function Ta(e) {
        return ba(e)
          ? e
          : null == e
          ? []
          : (function (e) {
              return (
                _a(e) &&
                (function (e) {
                  return "number" == typeof e && e > -1 && e % 1 == 0;
                })(e.length)
              );
            })(e)
          ? Array.prototype.slice.call(e)
          : [e];
      }
      function Ca(e) {
        return _a(e) && /^(1|3|11)$/.test(e.nodeType);
      }
      function Ea(e) {
        let t = e;
        return (
          xa(e) &&
            (t = /^(#[a-z]\w+)$/.test(e.trim())
              ? document.getElementById(e.trim().slice(1))
              : document.querySelectorAll(e)),
          Ta(t).reduce((e, t) => [...e, ...Ta(t).filter(Ca)], [])
        );
      }
      function Aa(e, t, n) {
        let i = {},
          r = null;
        return (
          _a(e) &&
            ((r = e[Aa.expando] || (e[Aa.expando] = ++Aa.uid)),
            (i = Aa.cache[r] || (Aa.cache[r] = {}))),
          void 0 === n
            ? void 0 === t
              ? i
              : i[t]
            : void 0 !== t
            ? ((i[t] = n), n)
            : void 0
        );
      }
      function ka(e) {
        const t = e && e[Aa.expando];
        t && (delete e[t], delete Aa.cache[t]);
      }
      (ga.max = da),
        (ga.getOffset = fa),
        (ga.buildGetter = pa),
        la() && ea.registerPlugin(ga),
        Ci.registerPlugin(Xi, Ws, ga),
        (() => {
          function e(...e) {
            const t = e.length;
            for (let n = 0; n < t; n++) {
              const t = e[n];
              1 === t.nodeType || 11 === t.nodeType
                ? this.appendChild(t)
                : this.appendChild(document.createTextNode(String(t)));
            }
          }
          function t(...e) {
            for (; this.lastChild; ) this.removeChild(this.lastChild);
            e.length && this.append(...e);
          }
          function n(...e) {
            const t = this.parentNode;
            let n = e.length;
            if (t)
              for (n || t.removeChild(this); n--; ) {
                let i = e[n];
                "object" != typeof i
                  ? (i = this.ownerDocument.createTextNode(i))
                  : i.parentNode && i.parentNode.removeChild(i),
                  n
                    ? t.insertBefore(this.previousSibling, i)
                    : t.replaceChild(i, this);
              }
          }
          Element.prototype.append ||
            ((Element.prototype.append = e),
            (DocumentFragment.prototype.append = e)),
            Element.prototype.replaceChildren ||
              ((Element.prototype.replaceChildren = t),
              (DocumentFragment.prototype.replaceChildren = t)),
            Element.prototype.replaceWith ||
              ((Element.prototype.replaceWith = n),
              (DocumentFragment.prototype.replaceWith = n));
        })(),
        (Aa.expando = "splitType" + 1 * new Date()),
        (Aa.cache = {}),
        (Aa.uid = 0);
      const Ma = "\\ud800-\\udfff",
        Pa = "\\u0300-\\u036f\\ufe20-\\ufe23",
        La = "\\u20d0-\\u20f0",
        Da = "\\ufe0e\\ufe0f",
        Oa = `[${Ma}]`,
        Ba = `[${Pa}${La}]`,
        Ia = "\\ud83c[\\udffb-\\udfff]",
        za = `[^${Ma}]`,
        Ra = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        qa = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        Na = "\\u200d",
        $a = `${`(?:${Ba}|${Ia})`}?`,
        Fa = `[${Da}]?`,
        ja =
          Fa +
          $a +
          ("(?:" + Na + "(?:" + [za, Ra, qa].join("|") + ")" + Fa + $a + ")*"),
        Ha = `(?:${[`${za}${Ba}?`, Ba, Ra, qa, Oa].join("|")}\n)`,
        Wa = RegExp(`${Ia}(?=${Ia})|${Ha}${ja}`, "g"),
        Va = RegExp(`[${[Na, Ma, Pa, La, Da].join("")}]`);
      function Ga(e) {
        return Va.test(e);
      }
      function Xa(e) {
        return Ga(e)
          ? (function (e) {
              return e.match(Wa) || [];
            })(e)
          : (function (e) {
              return e.split("");
            })(e);
      }
      function Ya(e, t = "") {
        return (
          (e = (function (e) {
            return null == e ? "" : String(e);
          })(e)),
          e && xa(e) && !t && Ga(e) ? Xa(e) : e.split(t)
        );
      }
      function Ua(e, t) {
        const n = document.createElement(e);
        return t
          ? (Object.keys(t).forEach((e) => {
              const i = t[e],
                r = xa(i) ? i.trim() : i;
              null !== r &&
                "" !== r &&
                ("children" === e ? n.append(...Ta(r)) : n.setAttribute(e, r));
            }),
            n)
          : n;
      }
      var Qa = {
        splitClass: "",
        lineClass: "line",
        wordClass: "word",
        charClass: "char",
        types: ["lines", "words", "chars"],
        absolute: !1,
        tagName: "div",
      };
      function Ka(e, t) {
        const n = Sa((t = ya(Qa, t)).types),
          i = t.tagName,
          r = e.nodeValue,
          o = document.createDocumentFragment();
        let s = [],
          a = [];
        return (
          /^\s/.test(r) && o.append(" "),
          (s = (function (e, t = " ") {
            return (e ? String(e) : "").trim().replace(/\s+/g, " ").split(t);
          })(r).reduce((e, r, s, l) => {
            let c, u;
            return (
              n.chars &&
                (u = Ya(r).map((e) => {
                  const n = Ua(i, {
                    class: `${t.splitClass} ${t.charClass}`,
                    style: "display: inline-block;",
                    children: e,
                  });
                  return (Aa(n).isChar = !0), (a = [...a, n]), n;
                })),
              n.words || n.lines
                ? ((c = Ua(i, {
                    class: `${t.wordClass} ${t.splitClass}`,
                    style:
                      "display: inline-block; " +
                      (n.words && t.absolute ? "position: relative;" : ""),
                    children: n.chars ? u : r,
                  })),
                  (Aa(c).isWord = !0),
                  (Aa(c).isWordStart = !0),
                  (Aa(c).isWordEnd = !0),
                  o.appendChild(c))
                : u.forEach((e) => {
                    o.appendChild(e);
                  }),
              s < l.length - 1 && o.append(" "),
              n.words ? e.concat(c) : e
            );
          }, [])),
          /\s$/.test(r) && o.append(" "),
          e.replaceWith(o),
          { words: s, chars: a }
        );
      }
      function Za(e, t) {
        const n = e.nodeType,
          i = { words: [], chars: [] };
        if (!/(1|3|11)/.test(n)) return i;
        if (3 === n && /\S/.test(e.nodeValue)) return Ka(e, t);
        const r = Ta(e.childNodes);
        if (r.length && ((Aa(e).isSplit = !0), !Aa(e).isRoot)) {
          (e.style.display = "inline-block"), (e.style.position = "relative");
          const t = e.nextSibling,
            n = e.previousSibling,
            i = e.textContent || "",
            r = t ? t.textContent : " ",
            o = n ? n.textContent : " ";
          (Aa(e).isWordEnd = /\s$/.test(i) || /^\s/.test(r)),
            (Aa(e).isWordStart = /^\s/.test(i) || /\s$/.test(o));
        }
        return r.reduce((e, n) => {
          const { words: i, chars: r } = Za(n, t);
          return { words: [...e.words, ...i], chars: [...e.chars, ...r] };
        }, i);
      }
      function Ja(e) {
        Aa(e).isWord
          ? e.replaceWith(...e.childNodes)
          : Ta(e.children).forEach((e) => Ja(e));
      }
      function el(e, t, n) {
        const i = Sa(t.types),
          r = t.tagName,
          o = e.getElementsByTagName("*"),
          s = [];
        let a,
          l,
          c,
          u = [],
          d = null,
          p = [];
        Aa(e).nodes = o;
        const f = e.parentElement,
          h = e.nextElementSibling,
          m = document.createDocumentFragment(),
          g = window.getComputedStyle(e),
          v = g.textAlign,
          y = 0.2 * parseFloat(g.fontSize);
        return (
          t.absolute &&
            ((c = {
              left: e.offsetLeft,
              top: e.offsetTop,
              width: e.offsetWidth,
            }),
            (l = e.offsetWidth),
            (a = e.offsetHeight),
            (Aa(e).cssWidth = e.style.width),
            (Aa(e).cssHeight = e.style.height)),
          Ta(o).forEach((r) => {
            const o = r.parentElement === e,
              {
                width: a,
                height: l,
                top: c,
                left: p,
              } = (function (e, t, n, i) {
                if (!n.absolute) return { top: t ? e.offsetTop : null };
                const r = e.offsetParent,
                  [o, s] = i;
                let a = 0,
                  l = 0;
                if (r && r !== document.body) {
                  const e = r.getBoundingClientRect();
                  (a = e.x + o), (l = e.y + s);
                }
                const {
                  width: c,
                  height: u,
                  x: d,
                  y: p,
                } = e.getBoundingClientRect();
                return { width: c, height: u, top: p + s - l, left: d + o - a };
              })(r, o, t, n);
            /^br$/i.test(r.nodeName) ||
              (i.lines &&
                o &&
                ((null === d || c - d >= y) && ((d = c), s.push((u = []))),
                u.push(r)),
              t.absolute &&
                ((Aa(r).top = c),
                (Aa(r).left = p),
                (Aa(r).width = a),
                (Aa(r).height = l)));
          }),
          f && f.removeChild(e),
          i.lines &&
            ((p = s.map((e) => {
              const n = Ua(r, {
                class: `${t.splitClass} ${t.lineClass}`,
                style: `display: block; text-align: ${v}; width: 100%;`,
              });
              Aa(n).isLine = !0;
              const i = { height: 0, top: 1e4 };
              return (
                m.appendChild(n),
                e.forEach((e, t, r) => {
                  const { isWordEnd: o, top: s, height: a } = Aa(e),
                    l = r[t + 1];
                  (i.height = Math.max(i.height, a)),
                    (i.top = Math.min(i.top, s)),
                    n.appendChild(e),
                    o && Aa(l).isWordStart && n.append(" ");
                }),
                t.absolute && ((Aa(n).height = i.height), (Aa(n).top = i.top)),
                n
              );
            })),
            i.words || Ja(m),
            e.replaceChildren(m)),
          t.absolute &&
            ((e.style.width = `${e.style.width || l}px`),
            (e.style.height = `${a}px`),
            Ta(o).forEach((e) => {
              const { isLine: t, top: n, left: i, width: r, height: o } = Aa(e),
                s = Aa(e.parentElement),
                a = !t && s.isLine;
              (e.style.top = `${a ? n - s.top : n}px`),
                (e.style.left = t
                  ? `${c.left}px`
                  : i - (a ? c.left : 0) + "px"),
                (e.style.height = `${o}px`),
                (e.style.width = t ? `${c.width}px` : `${r}px`),
                (e.style.position = "absolute");
            })),
          f && (h ? f.insertBefore(e, h) : f.appendChild(e)),
          p
        );
      }
      let tl = ya(Qa, {});
      class nl {
        static get defaults() {
          return tl;
        }
        static set defaults(e) {
          tl = ya(tl, wa(e));
        }
        static setDefaults(e) {
          return (tl = ya(tl, wa(e))), Qa;
        }
        static revert(e) {
          Ea(e).forEach((e) => {
            const { isSplit: t, html: n } = Aa(e);
            t &&
              ((e.innerHTML = n || ""),
              (Aa(e).isSplit = !1),
              (Aa(e).html = null));
          });
        }
        static create(e, t) {
          return new nl(e, t);
        }
        constructor(e, t) {
          (this.isSplit = !1),
            (this.settings = ya(tl, wa(t))),
            (this.elements = Ea(e) || []),
            this.revert(),
            this.elements.forEach((e) => {
              Aa(e).html = e.innerHTML;
            }),
            this.split();
        }
        split(e) {
          this.revert(),
            (this.lines = []),
            (this.words = []),
            (this.chars = []);
          const t = [window.pageXOffset, window.pageYOffset];
          void 0 !== e && (this.settings = ya(this.settings, wa(e)));
          const n = Sa(this.settings.types);
          n.none ||
            (this.elements.forEach((e) => {
              Aa(e).isRoot = !0;
              const { words: t, chars: n } = Za(e, this.settings);
              (this.words = [...this.words, ...t]),
                (this.chars = [...this.chars, ...n]);
            }),
            this.elements.forEach((e) => {
              if (n.lines || this.settings.absolute) {
                const n = el(e, this.settings, t);
                this.lines = [...this.lines, ...n];
              }
            }),
            (this.isSplit = !0),
            window.scrollTo(t[0], t[1]),
            this.elements.forEach((e) => {
              Ta(Aa(e).nodes).forEach(ka), (Aa(e).nodes = null);
            }));
        }
        revert() {
          this.elements.forEach((e) => {
            const { isSplit: t, html: n, cssWidth: i, cssHeight: r } = Aa(e);
            t &&
              ((e.innerHTML = n),
              (e.style.width = i || ""),
              (e.style.height = r || ""),
              (Aa(e).isSplit = !1));
          }),
            this.isSplit &&
              ((this.lines = null),
              (this.words = null),
              (this.chars = null),
              (this.isSplit = !1));
        }
      }
      const il = {
          Android: function () {
            return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function () {
            return (
              navigator.userAgent.match(/IEMobile/i) ||
              navigator.userAgent.match(/WPDesktop/i)
            );
          },
          any: function () {
            return (
              il.Android() ||
              il.BlackBerry() ||
              il.iOS() ||
              il.Opera() ||
              il.Windows()
            );
          },
        },
        rl = window.performance,
        ol = (() => {
          const [e] = rl.getEntriesByType("navigation");
          if (!e) return 1500;
          const t = e.workerStart > 0 ? e.responseEnd - e.workerStart : 0;
          return Math.max(Math.round((t / 1e3) * 1e3), 1500);
        })();
      class sl {
        constructor(e) {
          (this.text = new nl(e, { types: "words,chars" })),
            (this.tlTitleReveal = Ci.timeline()),
            (this.words = this.text.words),
            (this.chars = this.text.chars),
            this.initEvents(),
            this.tlTitleReveal.set(this.words, {
              opacity: 0,
              y: "105%",
              rotate: -10,
            });
        }
        hide() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return Ci.timeline({ defaults: { delay: e, force3D: !0 } }).to(
            this.words,
            { opacity: 0, y: "105%", "--clip": "100%" }
          );
        }
        in() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return Ci.timeline({
            defaults: { duration: 1, ease: "power2", delay: e, force3D: !0 },
          }).to(this.words, {
            opacity: 1,
            y: 0,
            rotate: 0,
            ease: "power2",
            "--clip": "0%",
            stagger: 0.1,
          });
        }
        out() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return Ci.timeline({
            defaults: { duration: 1, ease: "power2", delay: e, force3D: !0 },
          }).to(this.words, {
            opacity: 1,
            y: "-105%",
            rotate: 0,
            ease: "power2",
            "--clip": "100%",
            stagger: 0.1,
          });
        }
        initEvents() {
          window.addEventListener("resize", () => {
            il.any() ||
              ((this.words = []),
              (this.chars = []),
              this.text.split(),
              (this.words = this.text.words),
              (this.chars = this.text.chars)),
              Ci.set(this.words, { autoAlpha: 1, "--clip": "0%" });
          });
        }
      }
      class al {
        constructor(e) {
          (this.text = new nl(e, { types: "lines" })),
            (this.tlTitleReveal = Ci.timeline()),
            (this.lines = this.text.lines),
            this.initEvents(),
            this.tlTitleReveal.set(this.lines, { opacity: 0, y: "105%" });
        }
        hide() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return Ci.timeline({ defaults: { delay: e } }).to(this.lines, {
            opacity: 0,
            y: "105%",
            "--clip": "100%",
          });
        }
        in() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return Ci.timeline({
            defaults: { duration: 1, ease: "power2", delay: e, force3D: !0 },
          }).to(this.lines, {
            opacity: 1,
            y: 0,
            rotate: 0,
            ease: "power2",
            "--clip": "0%",
            stagger: 0.1,
          });
        }
        out() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return Ci.timeline({
            defaults: { duration: 1, ease: "power2", delay: e, force3D: !0 },
          }).to(this.lines, {
            opacity: 1,
            y: "-105%",
            rotate: 0,
            ease: "power2",
            "--clip": "100%",
            stagger: 0.1,
          });
        }
        initEvents() {
          window.addEventListener("resize", () => {
            il.any() ||
              ((this.lines = []),
              this.text.split(),
              (this.lines = this.text.lines)),
              Ci.set(this.lines, { autoAlpha: 1, "--clip": "0%" });
          });
        }
      }
      class ll {
        constructor(e) {
          (this.text = new nl(e, { types: "words" })),
            (this.words = this.text.words),
            (this.tlTitleReveal = Ci.timeline()),
            this.initEvents(),
            this.tlTitleReveal.set(this.words, {
              opacity: 0,
              rotateX: -40,
              rotateY: 13,
            });
        }
        hide() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return Ci.timeline({ defaults: { delay: e } }).to(this.words, {
            opacity: 0,
            rotateX: -40,
            rotateY: 13,
          });
        }
        out() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return Ci.timeline({
            defaults: { duration: 1, ease: "power2", delay: e },
          }).to(this.words, {
            opacity: 0,
            rotateX: -40,
            rotateY: 13,
            ease: "power2",
            stagger: 0.08,
          });
        }
        in() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return Ci.timeline({
            defaults: { duration: 1, ease: "power2", delay: e },
          }).to(this.words, {
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            ease: "power2",
            stagger: 0.08,
          });
        }
        initEvents() {
          window.addEventListener("resize", () => {
            il.any() ||
              ((this.words = []),
              this.text.split(),
              (this.words = this.text.words),
              Ci.set(this.words, { autoAlpha: 1 }));
          });
        }
      }
      const cl = (e) => {
          Ci.set(e, { autoAlpha: 0 });
          const t = new IntersectionObserver(
            (e, t) => {
              for (const n of e)
                if (n.isIntersecting) {
                  const { target: e } = n,
                    i = parseFloat(e.dataset.animationDelay) || 0,
                    r = new sl(e);
                  requestAnimationFrame(() => {
                    r.hide(),
                      Ci.to(e, {
                        autoAlpha: 1,
                        duration: 0.05,
                        onComplete: () => {
                          requestAnimationFrame(() => {
                            r.in(i);
                          });
                        },
                      });
                  }),
                    t.unobserve(e);
                }
            },
            { threshold: 0.7, rootMargin: "0px", once: !0 }
          );
          t.observe(e);
        },
        ul = (e) => {
          Ci.set(e, { autoAlpha: 0 });
          const t = new IntersectionObserver(
            (e, t) => {
              for (const n of e)
                if (n.isIntersecting) {
                  const { target: e } = n,
                    i = parseFloat(e.dataset.animationDelay) || 0,
                    r = new al(e);
                  requestAnimationFrame(() => {
                    r.hide(),
                      Ci.to(e, {
                        autoAlpha: 1,
                        duration: 0.05,
                        onComplete: () => {
                          requestAnimationFrame(() => {
                            r.in(i);
                          });
                        },
                      });
                  }),
                    t.unobserve(e);
                }
            },
            { threshold: 0.7, rootMargin: "0px", once: !0 }
          );
          t.observe(e);
        };
      function dl(e, t, n) {
        return Math.max(e, Math.min(t, n));
      }
      class pl {
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.lerp)
            (this.value =
              ((n = this.value),
              (i = this.to),
              (r = 60 * this.lerp),
              (o = e),
              (function (e, t, n) {
                return (1 - n) * e + n * t;
              })(n, i, 1 - Math.exp(-r * o)))),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (t = !0));
          else {
            this.currentTime += e;
            const n = dl(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            const i = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * i;
          }
          var n, i, r, o;
          this.onUpdate?.(this.value, t), t && this.stop();
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          {
            lerp: n = 0.1,
            duration: i = 1,
            easing: r = (e) => e,
            onStart: o,
            onUpdate: s,
          }
        ) {
          (this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = i),
            (this.easing = r),
            (this.currentTime = 0),
            (this.isRunning = !0),
            o?.(),
            (this.onUpdate = s);
        }
      }
      class fl {
        constructor({ wrapper: e, content: t, autoResize: n = !0 } = {}) {
          if (((this.wrapper = e), (this.content = t), n)) {
            const e = (function (e) {
              let t;
              return function () {
                let n = arguments,
                  i = this;
                clearTimeout(t),
                  (t = setTimeout(function () {
                    e.apply(i, n);
                  }, 250));
              };
            })(this.resize);
            this.wrapper !== window &&
              ((this.wrapperResizeObserver = new ResizeObserver(e)),
              this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(e)),
              this.contentResizeObserver.observe(this.content);
          }
          this.resize();
        }
        destroy() {
          this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect();
        }
        resize = () => {
          this.onWrapperResize(), this.onContentResize();
        };
        onWrapperResize = () => {
          this.wrapper === window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          (this.scrollHeight = this.content.scrollHeight),
            (this.scrollWidth = this.content.scrollWidth);
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      }
      class hl {
        constructor() {
          this.events = {};
        }
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, i = n.length; e < i; e++) n[e](...t);
        }
        on(e, t) {
          return (
            this.events[e]?.push(t) || (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }
      class ml {
        constructor(
          e,
          {
            wheelMultiplier: t = 1,
            touchMultiplier: n = 2,
            normalizeWheel: i = !1,
          }
        ) {
          (this.element = e),
            (this.wheelMultiplier = t),
            (this.touchMultiplier = n),
            (this.normalizeWheel = i),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new hl()),
            this.element.addEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          this.emitter.destroy(),
            this.element.removeEventListener("wheel", this.onWheel, {
              passive: !1,
            }),
            this.element.removeEventListener("touchstart", this.onTouchStart, {
              passive: !1,
            }),
            this.element.removeEventListener("touchmove", this.onTouchMove, {
              passive: !1,
            }),
            this.element.removeEventListener("touchend", this.onTouchEnd, {
              passive: !1,
            });
        }
        onTouchStart = (e) => {
          const { clientX: t, clientY: n } = e.targetTouches
            ? e.targetTouches[0]
            : e;
          (this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
        };
        onTouchMove = (e) => {
          const { clientX: t, clientY: n } = e.targetTouches
              ? e.targetTouches[0]
              : e,
            i = -(t - this.touchStart.x) * this.touchMultiplier,
            r = -(n - this.touchStart.y) * this.touchMultiplier;
          (this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: i, y: r }),
            this.emitter.emit("scroll", { deltaX: i, deltaY: r, event: e });
        };
        onTouchEnd = (e) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n } = e;
          this.normalizeWheel &&
            ((t = dl(-100, t, 100)), (n = dl(-100, n, 100))),
            (t *= this.wheelMultiplier),
            (n *= this.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: t, deltaY: n, event: e });
        };
      }
      class gl {
        constructor({
          wrapper: e = window,
          content: t = document.documentElement,
          wheelEventsTarget: n = e,
          eventsTarget: i = n,
          smoothWheel: r = !0,
          smoothTouch: o = !1,
          syncTouch: s = !1,
          syncTouchLerp: a = 0.075,
          touchInertiaMultiplier: l = 35,
          duration: c,
          easing: u = (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
          lerp: d = !c && 0.1,
          infinite: p = !1,
          orientation: f = "vertical",
          gestureOrientation: h = "vertical",
          touchMultiplier: m = 1,
          wheelMultiplier: g = 1,
          normalizeWheel: v = !1,
          autoResize: y = !0,
        } = {}) {
          (window.lenisVersion = "1.0.33"),
            (e !== document.documentElement && e !== document.body) ||
              (e = window),
            (this.options = {
              wrapper: e,
              content: t,
              wheelEventsTarget: n,
              eventsTarget: i,
              smoothWheel: r,
              smoothTouch: o,
              syncTouch: s,
              syncTouchLerp: a,
              touchInertiaMultiplier: l,
              duration: c,
              easing: u,
              lerp: d,
              infinite: p,
              gestureOrientation: h,
              orientation: f,
              touchMultiplier: m,
              wheelMultiplier: g,
              normalizeWheel: v,
              autoResize: y,
            }),
            (this.animate = new pl()),
            (this.emitter = new hl()),
            (this.dimensions = new fl({
              wrapper: e,
              content: t,
              autoResize: y,
            })),
            this.toggleClass("lenis", !0),
            (this.velocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isSmooth = s || r || o),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              "scroll",
              this.onNativeScroll,
              { passive: !1 }
            ),
            (this.virtualScroll = new ml(i, {
              touchMultiplier: m,
              wheelMultiplier: g,
              normalizeWheel: v,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll);
        }
        destroy() {
          this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              "scroll",
              this.onNativeScroll,
              { passive: !1 }
            ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.toggleClass("lenis", !1),
            this.toggleClass("lenis-smooth", !1),
            this.toggleClass("lenis-scrolling", !1),
            this.toggleClass("lenis-stopped", !1),
            this.toggleClass("lenis-locked", !1);
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        setScroll(e) {
          this.isHorizontal
            ? (this.rootElement.scrollLeft = e)
            : (this.rootElement.scrollTop = e);
        }
        onVirtualScroll = ({ deltaX: e, deltaY: t, event: n }) => {
          if (n.ctrlKey) return;
          const i = n.type.includes("touch"),
            r = n.type.includes("wheel");
          if (
            (this.options.smoothTouch || this.options.syncTouch) &&
            i &&
            "touchstart" === n.type
          )
            return void this.reset();
          const o = 0 === e && 0 === t,
            s =
              ("vertical" === this.options.gestureOrientation && 0 === t) ||
              ("horizontal" === this.options.gestureOrientation && 0 === e);
          if (o || s) return;
          let a = n.composedPath();
          if (
            ((a = a.slice(0, a.indexOf(this.rootElement))),
            a.find(
              (e) =>
                e.hasAttribute?.("data-lenis-prevent") ||
                (i && e.hasAttribute?.("data-lenis-prevent-touch")) ||
                (r && e.hasAttribute?.("data-lenis-prevent-wheel")) ||
                e.classList?.contains("lenis")
            ))
          )
            return;
          if (this.isStopped || this.isLocked) return void n.preventDefault();
          if (
            ((this.isSmooth =
              ((this.options.smoothTouch || this.options.syncTouch) && i) ||
              (this.options.smoothWheel && r)),
            !this.isSmooth)
          )
            return (this.isScrolling = !1), void this.animate.stop();
          n.preventDefault();
          let l = t;
          "both" === this.options.gestureOrientation
            ? (l = Math.abs(t) > Math.abs(e) ? t : e)
            : "horizontal" === this.options.gestureOrientation && (l = e);
          const c = i && this.options.syncTouch,
            u = i && "touchend" === n.type && Math.abs(l) > 5;
          u && (l = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + l, {
              programmatic: !1,
              ...(c
                ? { lerp: u ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            });
        };
        resize() {
          this.dimensions.resize();
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        onNativeScroll = () => {
          if (!this.__preventNextScrollEvent && !this.isScrolling) {
            const e = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.velocity = 0),
              (this.direction = Math.sign(this.animatedScroll - e)),
              this.emit();
          }
        };
        reset() {
          (this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            this.animate.stop();
        }
        start() {
          (this.isStopped = !1), this.reset();
        }
        stop() {
          (this.isStopped = !0), this.animate.stop(), this.reset();
        }
        raf(e) {
          const t = e - (this.time || e);
          (this.time = e), this.animate.advance(0.001 * t);
        }
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: i = !1,
            duration: r = this.options.duration,
            easing: o = this.options.easing,
            lerp: s = !r && this.options.lerp,
            onComplete: a = null,
            force: l = !1,
            programmatic: c = !0,
          } = {}
        ) {
          if ((!this.isStopped && !this.isLocked) || l) {
            if (["top", "left", "start"].includes(e)) e = 0;
            else if (["bottom", "right", "end"].includes(e)) e = this.limit;
            else {
              let n;
              if (
                ("string" == typeof e
                  ? (n = document.querySelector(e))
                  : e?.nodeType && (n = e),
                n)
              ) {
                if (this.options.wrapper !== window) {
                  const e = this.options.wrapper.getBoundingClientRect();
                  t -= this.isHorizontal ? e.left : e.top;
                }
                const i = n.getBoundingClientRect();
                e = (this.isHorizontal ? i.left : i.top) + this.animatedScroll;
              }
            }
            if ("number" == typeof e) {
              if (
                ((e += t),
                (e = Math.round(e)),
                this.options.infinite
                  ? c && (this.targetScroll = this.animatedScroll = this.scroll)
                  : (e = dl(0, e, this.limit)),
                n)
              )
                return (
                  (this.animatedScroll = this.targetScroll = e),
                  this.setScroll(this.scroll),
                  this.reset(),
                  void a?.(this)
                );
              if (!c) {
                if (e === this.targetScroll) return;
                this.targetScroll = e;
              }
              this.animate.fromTo(this.animatedScroll, e, {
                duration: r,
                easing: o,
                lerp: s,
                onStart: () => {
                  i && (this.isLocked = !0), (this.isScrolling = !0);
                },
                onUpdate: (e, t) => {
                  (this.isScrolling = !0),
                    (this.velocity = e - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = e),
                    this.setScroll(this.scroll),
                    c && (this.targetScroll = e),
                    t || this.emit(),
                    t &&
                      (this.reset(),
                      this.emit(),
                      a?.(this),
                      (this.__preventNextScrollEvent = !0),
                      requestAnimationFrame(() => {
                        delete this.__preventNextScrollEvent;
                      }));
                },
              });
            }
          }
        }
        get rootElement() {
          return this.options.wrapper === window
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          return this.isHorizontal
            ? this.rootElement.scrollLeft
            : this.rootElement.scrollTop;
        }
        get scroll() {
          return this.options.infinite
            ? ((this.animatedScroll % (e = this.limit)) + e) % e
            : this.animatedScroll;
          var e;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isSmooth() {
          return this.__isSmooth;
        }
        set isSmooth(e) {
          this.__isSmooth !== e &&
            ((this.__isSmooth = e), this.toggleClass("lenis-smooth", e));
        }
        get isScrolling() {
          return this.__isScrolling;
        }
        set isScrolling(e) {
          this.__isScrolling !== e &&
            ((this.__isScrolling = e), this.toggleClass("lenis-scrolling", e));
        }
        get isStopped() {
          return this.__isStopped;
        }
        set isStopped(e) {
          this.__isStopped !== e &&
            ((this.__isStopped = e), this.toggleClass("lenis-stopped", e));
        }
        get isLocked() {
          return this.__isLocked;
        }
        set isLocked(e) {
          this.__isLocked !== e &&
            ((this.__isLocked = e), this.toggleClass("lenis-locked", e));
        }
        get className() {
          let e = "lenis";
          return (
            this.isStopped && (e += " lenis-stopped"),
            this.isLocked && (e += " lenis-locked"),
            this.isScrolling && (e += " lenis-scrolling"),
            this.isSmooth && (e += " lenis-smooth"),
            e
          );
        }
        toggleClass(e, t) {
          this.rootElement.classList.toggle(e, t),
            this.emitter.emit("className change", this);
        }
      }
      let vl;
      Ci.registerPlugin(Ws);
      let yl = null;
      Ci.registerPlugin(Ws);
      const xl = (e, t) => Math.floor(Math.random() * (t - e + 1)) + e;
      Ci.registerPlugin(Ws);
      var bl = n(842);
      var wl = class {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (
            ((this.Engine = bl.Engine),
            (this.Render = bl.Render),
            (this.Runner = bl.Runner),
            (this.Composite = bl.Composite),
            (this.Bodies = bl.Bodies),
            (this.MouseConstraint = bl.MouseConstraint),
            (this.Mouse = bl.Mouse),
            (this.World = bl.World),
            (this.Events = bl.Events),
            !t.container)
          )
            throw new Error("Container element is required");
          (this.container = t.container),
            (this.width = this.container.offsetWidth),
            (this.height = this.container.offsetHeight),
            (this.duplicate = t.duplicate),
            (this.isSafari = /^((?!chrome|android).)*safari/i.test(
              navigator.userAgent
            )),
            (this.isSafariDesktop =
              this.isSafari && !/iPhone|iPad|iPod/.test(navigator.userAgent)),
            (this.isFirefox =
              navigator.userAgent.toLowerCase().indexOf("firefox") > -1),
            (this.isAndroid = /Android/i.test(navigator.userAgent)),
            (this.pixelRatio = window.devicePixelRatio || 1),
            (this.engine = this.Engine.create({
              gravity: { x: 0, y: 0.5 },
              enableSleeping: !0,
              constraintIterations:
                this.isSafariDesktop || this.isFirefox ? 1 : 2,
              positionIterations: this.isSafariDesktop
                ? 3
                : this.isFirefox
                ? 4
                : 6,
              velocityIterations:
                this.isSafariDesktop || this.isFirefox ? 2 : 4,
            })),
            (this.world = this.engine.world),
            (this.render = this.Render.create({
              canvas: this.container,
              engine: this.engine,
              options: {
                width: this.width,
                height: this.height,
                wireframes: !1,
                background: "transparent",
                pixelRatio: this.pixelRatio,
                showSleeping: !1,
              },
            })),
            Object.assign(this.render.canvas.style, {
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              touchAction: this.isSafariDesktop ? "" : "none",
            }),
            (this.callback = t.callback || (() => {}));
          (async () => {
            await this.setupSimulation(e), this.callback();
          })();
        }
        setupSimulation(e) {
          this.Render.run(this.render),
            (this.runner = this.Runner.create({
              isFixed: !0,
              delta:
                this.isSafariDesktop || this.isFirefox ? 1e3 / 30 : 1e3 / 60,
            })),
            this.Runner.run(this.runner, this.engine),
            this.createBoundaries(),
            this.preloadAndCreateBodies(e),
            this.addMouseControl(),
            this.setupResizeHandler();
        }
        createBoundaries() {
          const e = 60,
            t = { isStatic: !0, render: { visible: !1 } },
            n = [
              [this.width / 2, -e / 2, this.width + 2 * e, e],
              [this.width / 2, this.height + e / 2, this.width + 2 * e, e],
              [-e / 2, this.height / 2, e, this.height + 2 * e],
              [this.width + e / 2, this.height / 2, e, this.height + 2 * e],
            ].map((e) => {
              let [n, i, r, o] = e;
              return this.Bodies.rectangle(n, i, r, o, t);
            });
          this.Composite.add(this.world, n);
        }
        extractContours(e, t) {
          if (this.isSafariDesktop || this.isFirefox)
            return void this.extractContoursSafariDesktop(e, t);
          const n = document.createElement("canvas"),
            i = n.getContext("2d");
          (n.width = e.width), (n.height = e.height), i.drawImage(e, 0, 0);
          const r = i.getImageData(0, 0, n.width, n.height).data;
          let o = [];
          for (let e = 0; e < n.height; e++)
            for (let t = 0; t < n.width; t++) {
              r[4 * (e * n.width + t) + 3] > 20 && o.push({ x: t, y: e });
            }
          t(this.simplifyPoints(o));
        }
        extractContoursSafariDesktop(e, t) {
          try {
            const n = document.createElement("canvas"),
              i = n.getContext("2d", { willReadFrequently: !0, alpha: !0 });
            if (!i) return void this.createFallbackShape(t);
            const r = 256,
              o = Math.min(r / e.width, r / e.height);
            (n.width = Math.floor(e.width * o)),
              (n.height = Math.floor(e.height * o)),
              (i.imageSmoothingEnabled = !1),
              (i.globalCompositeOperation = "source-over");
            try {
              i.drawImage(e, 0, 0, n.width, n.height),
                setTimeout(() => {
                  try {
                    const e = i.getImageData(0, 0, n.width, n.height);
                    this.processImageDataSafari(e, n, t);
                  } catch (e) {
                    console.warn("Safari desktop image data read failed:", e),
                      this.createFallbackShape(t);
                  }
                }, 50);
            } catch (e) {
              console.warn("Safari desktop image draw failed:", e),
                this.createFallbackShape(t);
            }
          } catch (e) {
            console.error("Safari desktop contour extraction failed:", e),
              this.createFallbackShape(t);
          }
        }
        processImageDataSafari(e, t, n) {
          const i = e.data;
          let r = [];
          for (let e = 0; e < t.height; e += 6)
            for (let n = 0; n < t.width; n += 6) {
              i[4 * (e * t.width + n) + 3] > 50 && r.push({ x: n, y: e });
            }
          if (r.length < 3) return void this.createFallbackShape(n);
          n(this.simplifyPoints(r, 8));
        }
        createFallbackShape(e) {
          e([
            { x: 0, y: 0 },
            { x: 50, y: 0 },
            { x: 50, y: 50 },
            { x: 0, y: 50 },
          ]);
        }
        preloadAndCreateBodies(e) {
          const t = e.map(
            (e) =>
              new Promise((t) => {
                const n = new Image();
                (n.onload = () => t({ path: e, img: n })), (n.src = e);
              })
          );
          Promise.all(t).then((e) => {
            e.forEach((e) => {
              let { path: t, img: n } = e;
              this.extractContours(n, (e) => {
                if (0 === e.length) return;
                let n = 0.5;
                const i = e.map((e) => ({ x: e.x * n, y: e.y * n }));
                for (let e = 0; e < this.duplicate; e++) {
                  const e = 100 + Math.random() * (this.width - 200),
                    r = Math.random() * (this.height - 2),
                    o = this.Bodies.fromVertices(e, r, [i], {
                      render: { sprite: { texture: t, xScale: n, yScale: n } },
                      restitution: 0.5,
                      friction: 0.1,
                      frictionAir: 0.001,
                      density: 0.001,
                    });
                  this.Composite.add(this.world, o);
                }
              });
            }),
              this.callback();
          });
        }
        simplifyPoints(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          if (e.length < 3) return e;
          function n(e, t, n) {
            let i = t.x - e.x,
              r = t.y - e.y;
            return (
              Math.abs(r * n.x - i * n.y + t.x * e.y - t.y * e.x) /
              Math.sqrt(i * i + r * r)
            );
          }
          return (function i(r, o) {
            let s = 0,
              a = r;
            for (let t = r + 1; t < o; t++) {
              let i = n(e[r], e[o], e[t]);
              i > s && ((a = t), (s = i));
            }
            if (s > t) {
              return [...i(r, a), ...i(a, o)];
            }
            return [e[r]];
          })(0, e.length - 1);
        }
        addMouseControl() {
          if (!this.render.canvas) return;
          const e = this.Mouse.create(this.render.canvas);
          e.pixelRatio = window.devicePixelRatio || 1;
          const t = this.MouseConstraint.create(this.engine, {
            mouse: e,
            constraint: {
              stiffness: this.isAndroid ? 0.05 : 0.2,
              render: { visible: !1 },
            },
          });
          if (
            (this.Composite.add(this.world, t),
            (this.render.mouse = e),
            (this.mouseConstraint = t),
            this.render.canvas.addEventListener(
              "touchstart",
              (e) => e.preventDefault(),
              { passive: !1 }
            ),
            this.render.canvas.addEventListener(
              "touchmove",
              (e) => e.preventDefault(),
              { passive: !1 }
            ),
            this.render.canvas.addEventListener(
              "touchend",
              (e) => e.preventDefault(),
              { passive: !1 }
            ),
            this.isAndroid &&
              ((this.activeTouch = null),
              this.render.canvas.addEventListener(
                "touchstart",
                (t) => {
                  const n = t.changedTouches[0];
                  this.activeTouch = n.identifier;
                  const i = this.getTouchPosition(t, this.activeTouch);
                  (e.position.x = i.x),
                    (e.position.y = i.y),
                    (e.button = 0),
                    (e.sourceEvents.mousedown = { clientX: i.x, clientY: i.y });
                },
                { passive: !1 }
              ),
              this.render.canvas.addEventListener(
                "touchmove",
                (t) => {
                  if (null !== this.activeTouch) {
                    const n = this.getTouchPosition(t, this.activeTouch);
                    (e.position.x = n.x),
                      (e.position.y = n.y),
                      (e.sourceEvents.mousemove = {
                        clientX: n.x,
                        clientY: n.y,
                      });
                  }
                },
                { passive: !1 }
              ),
              this.render.canvas.addEventListener(
                "touchend",
                (t) => {
                  if (null !== this.activeTouch) {
                    const n = this.getTouchPosition(t, this.activeTouch);
                    (e.position.x = n.x),
                      (e.position.y = n.y),
                      (e.button = -1),
                      (e.sourceEvents.mouseup = { clientX: n.x, clientY: n.y }),
                      (this.activeTouch = null);
                  }
                },
                { passive: !1 }
              ),
              (this.getTouchPosition = (t, n) => {
                const i =
                    Array.from(t.changedTouches).find(
                      (e) => e.identifier === n
                    ) || t.changedTouches[0],
                  r = this.render.canvas.getBoundingClientRect();
                return {
                  x: (i.clientX - r.left) * (e.pixelRatio || 1),
                  y: (i.clientY - r.top) * (e.pixelRatio || 1),
                };
              })),
            this.Events.on(t, "startdrag", (e) => {
              console.log("Dragging started", e.body);
            }),
            this.Events.on(t, "enddrag", (e) => {
              console.log("Dragging ended");
            }),
            this.isSafariDesktop)
          ) {
            const e = document.querySelector(".page-header--home--hero"),
              t = () => {
                this.render.canvas.style.pointerEvents = "auto";
              },
              n = () => {
                setTimeout(() => {
                  this.render.canvas.style.pointerEvents = "none";
                }, 1e3);
              };
            e.addEventListener("mousedown", t, { passive: !0 }),
              e.addEventListener("touchstart", t, { passive: !0 }),
              e.addEventListener("mouseup", n, { passive: !0 }),
              e.addEventListener("mouseleave", n, { passive: !0 }),
              e.addEventListener("touchend", n, { passive: !0 }),
              e.addEventListener("touchcancel", n, { passive: !0 }),
              (this.render.canvas.style.pointerEvents = "none");
          }
        }
        setupResizeHandler() {
          new ResizeObserver((e) => {
            for (const t of e) {
              if (
                null === this.render ||
                void 0 === this.render ||
                null === this.render.canvas ||
                void 0 === this.render.canvas
              )
                continue;
              (this.width = t.contentRect.width),
                (this.height = t.contentRect.height),
                Object.assign(this.render.canvas, {
                  width: this.width * this.pixelRatio,
                  height: this.height * this.pixelRatio,
                }),
                Object.assign(this.render.canvas.style, {
                  width: `${this.width}px`,
                  height: `${this.height}px`,
                }),
                Object.assign(this.render.bounds.max, {
                  x: this.width,
                  y: this.height,
                });
              this.Composite.allBodies(this.world)
                .filter((e) => e.isStatic)
                .forEach((e) => this.Composite.remove(this.world, e)),
                this.createBoundaries(),
                this.Render.lookAt(this.render, {
                  min: { x: 0, y: 0 },
                  max: { x: this.width, y: this.height },
                });
            }
          }).observe(this.container);
        }
        stop() {
          this.Render.stop(this.render), this.Runner.stop(this.runner);
        }
      };
      function Sl(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function _l(e = {}, t = {}) {
        Object.keys(t).forEach((n) => {
          void 0 === e[n]
            ? (e[n] = t[n])
            : Sl(t[n]) &&
              Sl(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              _l(e[n], t[n]);
        });
      }
      const Tl = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector() {
          return null;
        },
        querySelectorAll() {
          return [];
        },
        getElementById() {
          return null;
        },
        createEvent() {
          return { initEvent() {} };
        },
        createElement() {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
              return [];
            },
          };
        },
        createElementNS() {
          return {};
        },
        importNode() {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function Cl() {
        const e = "undefined" != typeof document ? document : {};
        return _l(e, Tl), e;
      }
      const El = {
        document: Tl,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle() {
          return {
            getPropertyValue() {
              return "";
            },
          };
        },
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia() {
          return {};
        },
        requestAnimationFrame(e) {
          return "undefined" == typeof setTimeout
            ? (e(), null)
            : setTimeout(e, 0);
        },
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function Al() {
        const e = "undefined" != typeof window ? window : {};
        return _l(e, El), e;
      }
      class kl extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get() {
                    return t;
                  },
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function Ml(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...Ml(e)) : t.push(e);
          }),
          t
        );
      }
      function Pl(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function Ll(e, t) {
        const n = Al(),
          i = Cl();
        let r = [];
        if (!t && e instanceof kl) return e;
        if (!e) return new kl(r);
        if ("string" == typeof e) {
          const n = e.trim();
          if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
            let e = "div";
            0 === n.indexOf("<li") && (e = "ul"),
              0 === n.indexOf("<tr") && (e = "tbody"),
              (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
              0 === n.indexOf("<tbody") && (e = "table"),
              0 === n.indexOf("<option") && (e = "select");
            const t = i.createElement(e);
            t.innerHTML = n;
            for (let e = 0; e < t.childNodes.length; e += 1)
              r.push(t.childNodes[e]);
          } else
            r = (function (e, t) {
              if ("string" != typeof e) return [e];
              const n = [],
                i = t.querySelectorAll(e);
              for (let e = 0; e < i.length; e += 1) n.push(i[e]);
              return n;
            })(e.trim(), t || i);
        } else if (e.nodeType || e === n || e === i) r.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof kl) return e;
          r = e;
        }
        return new kl(
          (function (e) {
            const t = [];
            for (let n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(r)
        );
      }
      Ll.fn = kl.prototype;
      const Dl = "resize scroll".split(" ");
      function Ol(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              Dl.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : Ll(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      Ol("click"),
        Ol("blur"),
        Ol("focus"),
        Ol("focusin"),
        Ol("focusout"),
        Ol("keyup"),
        Ol("keydown"),
        Ol("keypress"),
        Ol("submit"),
        Ol("change"),
        Ol("mousedown"),
        Ol("mousemove"),
        Ol("mouseup"),
        Ol("mouseenter"),
        Ol("mouseleave"),
        Ol("mouseout"),
        Ol("mouseover"),
        Ol("touchstart"),
        Ol("touchend"),
        Ol("touchmove"),
        Ol("resize"),
        Ol("scroll");
      const Bl = {
        addClass: function (...e) {
          const t = Ml(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = Ml(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = Ml(e.map((e) => e.split(" ")));
          return (
            Pl(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = Ml(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (const t in e)
                (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, n, i, r] = e;
          function o(e) {
            const t = e.target;
            if (!t) return;
            const r = e.target.dom7EventData || [];
            if ((r.indexOf(e) < 0 && r.unshift(e), Ll(t).is(n))) i.apply(t, r);
            else {
              const e = Ll(t).parents();
              for (let t = 0; t < e.length; t += 1)
                Ll(e[t]).is(n) && i.apply(e[t], r);
            }
          }
          function s(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
            r || (r = !1);
          const a = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (n)
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: i,
                    proxyListener: o,
                  }),
                  t.addEventListener(e, o, r);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: i, proxyListener: s }),
                  t.addEventListener(e, s, r);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, n, i, r] = e;
          "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
            r || (r = !1);
          const o = t.split(" ");
          for (let e = 0; e < o.length; e += 1) {
            const t = o[e];
            for (let e = 0; e < this.length; e += 1) {
              const o = this[e];
              let s;
              if (
                (!n && o.dom7Listeners
                  ? (s = o.dom7Listeners[t])
                  : n && o.dom7LiveListeners && (s = o.dom7LiveListeners[t]),
                s && s.length)
              )
                for (let e = s.length - 1; e >= 0; e -= 1) {
                  const n = s[e];
                  (i && n.listener === i) ||
                  (i &&
                    n.listener &&
                    n.listener.dom7proxy &&
                    n.listener.dom7proxy === i)
                    ? (o.removeEventListener(t, n.proxyListener, r),
                      s.splice(e, 1))
                    : i ||
                      (o.removeEventListener(t, n.proxyListener, r),
                      s.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = Al(),
            n = e[0].split(" "),
            i = e[1];
          for (let r = 0; r < n.length; r += 1) {
            const o = n[r];
            for (let n = 0; n < this.length; n += 1) {
              const r = this[n];
              if (t.CustomEvent) {
                const n = new t.CustomEvent(o, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (r.dom7EventData = e.filter((e, t) => t > 0)),
                  r.dispatchEvent(n),
                  (r.dom7EventData = []),
                  delete r.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function n(i) {
                i.target === this &&
                  (e.call(this, i), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = Al();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = Al(),
              t = Cl(),
              n = this[0],
              i = n.getBoundingClientRect(),
              r = t.body,
              o = n.clientTop || r.clientTop || 0,
              s = n.clientLeft || r.clientLeft || 0,
              a = n === e ? e.scrollY : n.scrollTop,
              l = n === e ? e.scrollX : n.scrollLeft;
            return { top: i.top + a - o, left: i.left + l - s };
          }
          return null;
        },
        css: function (e, t) {
          const n = Al();
          let i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t];
              return this;
            }
            if (this[0])
              return n.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, n) => {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = Al(),
            n = Cl(),
            i = this[0];
          let r, o;
          if (!i || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (r = Ll(e), o = 0; o < r.length; o += 1)
              if (r[o] === i) return !0;
            return !1;
          }
          if (e === n) return i === n;
          if (e === t) return i === t;
          if (e.nodeType || e instanceof kl) {
            for (r = e.nodeType ? [e] : e, o = 0; o < r.length; o += 1)
              if (r[o] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return Ll([]);
          if (e < 0) {
            const n = t + e;
            return Ll(n < 0 ? [] : [this[n]]);
          }
          return Ll([this[e]]);
        },
        append: function (...e) {
          let t;
          const n = Cl();
          for (let i = 0; i < e.length; i += 1) {
            t = e[i];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const i = n.createElement("div");
                for (i.innerHTML = t; i.firstChild; )
                  this[e].appendChild(i.firstChild);
              } else if (t instanceof kl)
                for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = Cl();
          let n, i;
          for (n = 0; n < this.length; n += 1)
            if ("string" == typeof e) {
              const r = t.createElement("div");
              for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1)
                this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]);
            } else if (e instanceof kl)
              for (i = 0; i < e.length; i += 1)
                this[n].insertBefore(e[i], this[n].childNodes[0]);
            else this[n].insertBefore(e, this[n].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                Ll(this[0].nextElementSibling).is(e)
                ? Ll([this[0].nextElementSibling])
                : Ll([])
              : this[0].nextElementSibling
              ? Ll([this[0].nextElementSibling])
              : Ll([])
            : Ll([]);
        },
        nextAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return Ll([]);
          for (; n.nextElementSibling; ) {
            const i = n.nextElementSibling;
            e ? Ll(i).is(e) && t.push(i) : t.push(i), (n = i);
          }
          return Ll(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && Ll(t.previousElementSibling).is(e)
                ? Ll([t.previousElementSibling])
                : Ll([])
              : t.previousElementSibling
              ? Ll([t.previousElementSibling])
              : Ll([]);
          }
          return Ll([]);
        },
        prevAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return Ll([]);
          for (; n.previousElementSibling; ) {
            const i = n.previousElementSibling;
            e ? Ll(i).is(e) && t.push(i) : t.push(i), (n = i);
          }
          return Ll(t);
        },
        parent: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? Ll(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return Ll(t);
        },
        parents: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            let i = this[n].parentNode;
            for (; i; )
              e ? Ll(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          }
          return Ll(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? Ll([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e]);
          }
          return Ll(t);
        },
        children: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].children;
            for (let n = 0; n < i.length; n += 1)
              (e && !Ll(i[n]).is(e)) || t.push(i[n]);
          }
          return Ll(t);
        },
        filter: function (e) {
          return Ll(Pl(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(Bl).forEach((e) => {
        Object.defineProperty(Ll.fn, e, { value: Bl[e], writable: !0 });
      });
      var Il = Ll;
      function zl(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function Rl() {
        return Date.now();
      }
      function ql(e, t) {
        void 0 === t && (t = "x");
        const n = Al();
        let i, r, o;
        const s = (function (e) {
          const t = Al();
          let n;
          return (
            t.getComputedStyle && (n = t.getComputedStyle(e, null)),
            !n && e.currentStyle && (n = e.currentStyle),
            n || (n = e.style),
            n
          );
        })(e);
        return (
          n.WebKitCSSMatrix
            ? ((r = s.transform || s.webkitTransform),
              r.split(",").length > 6 &&
                (r = r
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (o = new n.WebKitCSSMatrix("none" === r ? "" : r)))
            : ((o =
                s.MozTransform ||
                s.OTransform ||
                s.MsTransform ||
                s.msTransform ||
                s.transform ||
                s
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (i = o.toString().split(","))),
          "x" === t &&
            (r = n.WebKitCSSMatrix
              ? o.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (r = n.WebKitCSSMatrix
              ? o.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          r || 0
        );
      }
      function Nl(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function $l() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (
            null != r &&
            ((n = r),
            !("undefined" != typeof window && void 0 !== window.HTMLElement
              ? n instanceof HTMLElement
              : n && (1 === n.nodeType || 11 === n.nodeType)))
          ) {
            const n = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, i = n.length; t < i; t += 1) {
              const i = n[t],
                o = Object.getOwnPropertyDescriptor(r, i);
              void 0 !== o &&
                o.enumerable &&
                (Nl(e[i]) && Nl(r[i])
                  ? r[i].__swiper__
                    ? (e[i] = r[i])
                    : $l(e[i], r[i])
                  : !Nl(e[i]) && Nl(r[i])
                  ? ((e[i] = {}),
                    r[i].__swiper__ ? (e[i] = r[i]) : $l(e[i], r[i]))
                  : (e[i] = r[i]));
            }
          }
        }
        var n;
        return e;
      }
      function Fl(e, t, n) {
        e.style.setProperty(t, n);
      }
      function jl(e) {
        let { swiper: t, targetPosition: n, side: i } = e;
        const r = Al(),
          o = -t.translate;
        let s,
          a = null;
        const l = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          r.cancelAnimationFrame(t.cssModeFrameID);
        const c = n > o ? "next" : "prev",
          u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          d = () => {
            (s = new Date().getTime()), null === a && (a = s);
            const e = Math.max(Math.min((s - a) / l, 1), 0),
              c = 0.5 - Math.cos(e * Math.PI) / 2;
            let p = o + c * (n - o);
            if ((u(p, n) && (p = n), t.wrapperEl.scrollTo({ [i]: p }), u(p, n)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [i]: p });
                }),
                void r.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = r.requestAnimationFrame(d);
          };
        d();
      }
      let Hl, Wl, Vl;
      function Gl() {
        return (
          Hl ||
            (Hl = (function () {
              const e = Al(),
                t = Cl();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const n = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          Hl
        );
      }
      function Xl(e) {
        return (
          void 0 === e && (e = {}),
          Wl ||
            (Wl = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const n = Gl(),
                i = Al(),
                r = i.navigator.platform,
                o = t || i.navigator.userAgent,
                s = { ios: !1, android: !1 },
                a = i.screen.width,
                l = i.screen.height,
                c = o.match(/(Android);?[\s\/]+([\d.]+)?/);
              let u = o.match(/(iPad).*OS\s([\d_]+)/);
              const d = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !u && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                f = "Win32" === r;
              let h = "MacIntel" === r;
              return (
                !u &&
                  h &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${a}x${l}`) >= 0 &&
                  ((u = o.match(/(Version)\/([\d.]+)/)),
                  u || (u = [0, 1, "13_0_0"]),
                  (h = !1)),
                c && !f && ((s.os = "android"), (s.android = !0)),
                (u || p || d) && ((s.os = "ios"), (s.ios = !0)),
                s
              );
            })(e)),
          Wl
        );
      }
      function Yl() {
        return (
          Vl ||
            (Vl = (function () {
              const e = Al();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          Vl
        );
      }
      var Ul = {
        on(e, t, n) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          const r = n ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][r](t);
            }),
            i
          );
        },
        once(e, t, n) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          function r() {
            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var n = arguments.length, o = new Array(n), s = 0; s < n; s++)
              o[s] = arguments[s];
            t.apply(i, o);
          }
          return (r.__emitterProxy = t), i.on(e, r, n);
        },
        onAny(e, t) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof e) return n;
          const i = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off(e, t) {
          const n = this;
          return !n.eventsListeners || n.destroyed
            ? n
            : n.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach((i, r) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(r, 1);
                    });
              }),
              n)
            : n;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, n, i;
          for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
            o[s] = arguments[s];
          "string" == typeof o[0] || Array.isArray(o[0])
            ? ((t = o[0]), (n = o.slice(1, o.length)), (i = e))
            : ((t = o[0].events), (n = o[0].data), (i = o[0].context || e)),
            n.unshift(i);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(i, [t, ...n]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(i, n);
                  });
            }),
            e
          );
        },
      };
      var Ql = {
        updateSize: function () {
          const e = this;
          let t, n;
          const i = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : i[0].clientWidth),
            (n =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : i[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (n =
                n -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          const i = e.params,
            { $wrapperEl: r, size: o, rtlTranslate: s, wrongRTL: a } = e,
            l = e.virtual && i.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            u = r.children(`.${e.params.slideClass}`),
            d = l ? e.virtual.slides.length : u.length;
          let p = [];
          const f = [],
            h = [];
          let m = i.slidesOffsetBefore;
          "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
          let g = i.slidesOffsetAfter;
          "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            y = e.slidesGrid.length;
          let x = i.spaceBetween,
            b = -m,
            w = 0,
            S = 0;
          if (void 0 === o) return;
          "string" == typeof x &&
            x.indexOf("%") >= 0 &&
            (x = (parseFloat(x.replace("%", "")) / 100) * o),
            (e.virtualSize = -x),
            s
              ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            i.centeredSlides &&
              i.cssMode &&
              (Fl(e.wrapperEl, "--swiper-centered-offset-before", ""),
              Fl(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const _ = i.grid && i.grid.rows > 1 && e.grid;
          let T;
          _ && e.grid.initSlides(d);
          const C =
            "auto" === i.slidesPerView &&
            i.breakpoints &&
            Object.keys(i.breakpoints).filter(
              (e) => void 0 !== i.breakpoints[e].slidesPerView
            ).length > 0;
          for (let r = 0; r < d; r += 1) {
            T = 0;
            const s = u.eq(r);
            if (
              (_ && e.grid.updateSlide(r, s, d, t), "none" !== s.css("display"))
            ) {
              if ("auto" === i.slidesPerView) {
                C && (u[r].style[t("width")] = "");
                const o = getComputedStyle(s[0]),
                  a = s[0].style.transform,
                  l = s[0].style.webkitTransform;
                if (
                  (a && (s[0].style.transform = "none"),
                  l && (s[0].style.webkitTransform = "none"),
                  i.roundLengths)
                )
                  T = e.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0);
                else {
                  const e = n(o, "width"),
                    t = n(o, "padding-left"),
                    i = n(o, "padding-right"),
                    r = n(o, "margin-left"),
                    a = n(o, "margin-right"),
                    l = o.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) T = e + r + a;
                  else {
                    const { clientWidth: n, offsetWidth: o } = s[0];
                    T = e + t + i + r + a + (o - n);
                  }
                }
                a && (s[0].style.transform = a),
                  l && (s[0].style.webkitTransform = l),
                  i.roundLengths && (T = Math.floor(T));
              } else
                (T = (o - (i.slidesPerView - 1) * x) / i.slidesPerView),
                  i.roundLengths && (T = Math.floor(T)),
                  u[r] && (u[r].style[t("width")] = `${T}px`);
              u[r] && (u[r].swiperSlideSize = T),
                h.push(T),
                i.centeredSlides
                  ? ((b = b + T / 2 + w / 2 + x),
                    0 === w && 0 !== r && (b = b - o / 2 - x),
                    0 === r && (b = b - o / 2 - x),
                    Math.abs(b) < 0.001 && (b = 0),
                    i.roundLengths && (b = Math.floor(b)),
                    S % i.slidesPerGroup == 0 && p.push(b),
                    f.push(b))
                  : (i.roundLengths && (b = Math.floor(b)),
                    (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                      e.params.slidesPerGroup ==
                      0 && p.push(b),
                    f.push(b),
                    (b = b + T + x)),
                (e.virtualSize += T + x),
                (w = T),
                (S += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, o) + g),
            s &&
              a &&
              ("slide" === i.effect || "coverflow" === i.effect) &&
              r.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
            i.setWrapperSize &&
              r.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
            _ && e.grid.updateWrapperSize(T, p, t),
            !i.centeredSlides)
          ) {
            const t = [];
            for (let n = 0; n < p.length; n += 1) {
              let r = p[n];
              i.roundLengths && (r = Math.floor(r)),
                p[n] <= e.virtualSize - o && t.push(r);
            }
            (p = t),
              Math.floor(e.virtualSize - o) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - o);
          }
          if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
            const n = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
            u.filter((e, t) => !i.cssMode || t !== u.length - 1).css({
              [n]: `${x}px`,
            });
          }
          if (i.centeredSlides && i.centeredSlidesBounds) {
            let e = 0;
            h.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
              (e -= i.spaceBetween);
            const t = e - o;
            p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
          }
          if (i.centerInsufficientSlides) {
            let e = 0;
            if (
              (h.forEach((t) => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0);
              }),
              (e -= i.spaceBetween),
              e < o)
            ) {
              const t = (o - e) / 2;
              p.forEach((e, n) => {
                p[n] = e - t;
              }),
                f.forEach((e, n) => {
                  f[n] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: u,
              snapGrid: p,
              slidesGrid: f,
              slidesSizesGrid: h,
            }),
            i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
          ) {
            Fl(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
              Fl(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - h[h.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              n = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + n));
          }
          if (
            (d !== c && e.emit("slidesLengthChange"),
            p.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            f.length !== y && e.emit("slidesGridLengthChange"),
            i.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
          ) {
            const t = `${i.containerModifierClass}backface-hidden`,
              n = e.$el.hasClass(t);
            d <= i.maxBackfaceHiddenSlides
              ? n || e.$el.addClass(t)
              : n && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [],
            i = t.virtual && t.params.virtual.enabled;
          let r,
            o = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const s = (e) =>
            i
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || Il([])).each((e) => {
                n.push(e);
              });
            else
              for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const e = t.activeIndex + r;
                if (e > t.slides.length && !i) break;
                n.push(s(e));
              }
          else n.push(s(t.activeIndex));
          for (r = 0; r < n.length; r += 1)
            if (void 0 !== n[r]) {
              const e = n[r].offsetHeight;
              o = e > o ? e : o;
            }
          (o || 0 === o) && t.$wrapperEl.css("height", `${o}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let n = 0; n < t.length; n += 1)
            t[n].swiperSlideOffset = e.isHorizontal()
              ? t[n].offsetLeft
              : t[n].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            n = t.params,
            { slides: i, rtlTranslate: r, snapGrid: o } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let s = -e;
          r && (s = e),
            i.removeClass(n.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < i.length; e += 1) {
            const a = i[e];
            let l = a.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
            const c =
                (s + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + n.spaceBetween),
              u =
                (s - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (a.swiperSlideSize + n.spaceBetween),
              d = -(s - l),
              p = d + t.slidesSizesGrid[e];
            ((d >= 0 && d < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (d <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(a),
              t.visibleSlidesIndexes.push(e),
              i.eq(e).addClass(n.slideVisibleClass)),
              (a.progress = r ? -c : c),
              (a.originalProgress = r ? -u : u);
          }
          t.visibleSlides = Il(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let { progress: r, isBeginning: o, isEnd: s } = t;
          const a = o,
            l = s;
          0 === i
            ? ((r = 0), (o = !0), (s = !0))
            : ((r = (e - t.minTranslate()) / i), (o = r <= 0), (s = r >= 1)),
            Object.assign(t, { progress: r, isBeginning: o, isEnd: s }),
            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            o && !a && t.emit("reachBeginning toEdge"),
            s && !l && t.emit("reachEnd toEdge"),
            ((a && !o) || (l && !s)) && t.emit("fromEdge"),
            t.emit("progress", r);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: n,
              $wrapperEl: i,
              activeIndex: r,
              realIndex: o,
            } = e,
            s = e.virtual && n.virtual.enabled;
          let a;
          t.removeClass(
            `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
          ),
            (a = s
              ? e.$wrapperEl.find(
                  `.${n.slideClass}[data-swiper-slide-index="${r}"]`
                )
              : t.eq(r)),
            a.addClass(n.slideActiveClass),
            n.loop &&
              (a.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass)
                : i
                    .children(
                      `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slideNextClass);
          n.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(n.slideNextClass));
          let c = a
            .prevAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slidePrevClass);
          n.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
            n.loop &&
              (l.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass)
                : i
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass),
              c.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)
                : i
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: i,
              snapGrid: r,
              params: o,
              activeIndex: s,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            u = e;
          if (void 0 === u) {
            for (let e = 0; e < i.length; e += 1)
              void 0 !== i[e + 1]
                ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                  ? (u = e)
                  : n >= i[e] && n < i[e + 1] && (u = e + 1)
                : n >= i[e] && (u = e);
            o.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
          }
          if (r.indexOf(n) >= 0) c = r.indexOf(n);
          else {
            const e = Math.min(o.slidesPerGroupSkip, u);
            c = e + Math.floor((u - e) / o.slidesPerGroup);
          }
          if ((c >= r.length && (c = r.length - 1), u === s))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const d = parseInt(
            t.slides.eq(u).attr("data-swiper-slide-index") || u,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: d,
            previousIndex: s,
            activeIndex: u,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== d && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            n = t.params,
            i = Il(e).closest(`.${n.slideClass}`)[0];
          let r,
            o = !1;
          if (i)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === i) {
                (o = !0), (r = e);
                break;
              }
          if (!i || !o)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  Il(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = r),
            n.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      var Kl = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: n,
            translate: i,
            $wrapperEl: r,
          } = this;
          if (t.virtualTranslate) return n ? -i : i;
          if (t.cssMode) return i;
          let o = ql(r[0], e);
          return n && (o = -o), o || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            {
              rtlTranslate: i,
              params: r,
              $wrapperEl: o,
              wrapperEl: s,
              progress: a,
            } = n;
          let l,
            c = 0,
            u = 0;
          n.isHorizontal() ? (c = i ? -e : e) : (u = e),
            r.roundLengths && ((c = Math.floor(c)), (u = Math.floor(u))),
            r.cssMode
              ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -c : -u)
              : r.virtualTranslate ||
                o.transform(`translate3d(${c}px, ${u}px, 0px)`),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? c : u);
          const d = n.maxTranslate() - n.minTranslate();
          (l = 0 === d ? 0 : (e - n.minTranslate()) / d),
            l !== a && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, i, r) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === i && (i = !0);
          const o = this,
            { params: s, wrapperEl: a } = o;
          if (o.animating && s.preventInteractionOnTransition) return !1;
          const l = o.minTranslate(),
            c = o.maxTranslate();
          let u;
          if (
            ((u = i && e > l ? l : i && e < c ? c : e),
            o.updateProgress(u),
            s.cssMode)
          ) {
            const e = o.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -u;
            else {
              if (!o.support.smoothScroll)
                return (
                  jl({
                    swiper: o,
                    targetPosition: -u,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -u, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (o.setTransition(0),
                o.setTranslate(u),
                n &&
                  (o.emit("beforeTransitionStart", t, r),
                  o.emit("transitionEnd")))
              : (o.setTransition(t),
                o.setTranslate(u),
                n &&
                  (o.emit("beforeTransitionStart", t, r),
                  o.emit("transitionStart")),
                o.animating ||
                  ((o.animating = !0),
                  o.onTranslateToWrapperTransitionEnd ||
                    (o.onTranslateToWrapperTransitionEnd = function (e) {
                      o &&
                        !o.destroyed &&
                        e.target === this &&
                        (o.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          o.onTranslateToWrapperTransitionEnd
                        ),
                        o.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          o.onTranslateToWrapperTransitionEnd
                        ),
                        (o.onTranslateToWrapperTransitionEnd = null),
                        delete o.onTranslateToWrapperTransitionEnd,
                        n && o.emit("transitionEnd"));
                    }),
                  o.$wrapperEl[0].addEventListener(
                    "transitionend",
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  o.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    o.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function Zl(e) {
        let { swiper: t, runCallbacks: n, direction: i, step: r } = e;
        const { activeIndex: o, previousIndex: s } = t;
        let a = i;
        if (
          (a || (a = o > s ? "next" : o < s ? "prev" : "reset"),
          t.emit(`transition${r}`),
          n && o !== s)
        ) {
          if ("reset" === a) return void t.emit(`slideResetTransition${r}`);
          t.emit(`slideChangeTransition${r}`),
            "next" === a
              ? t.emit(`slideNextTransition${r}`)
              : t.emit(`slidePrevTransition${r}`);
        }
      }
      var Jl = {
        slideTo: function (e, t, n, i, r) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "number" != typeof e && "string" != typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const o = this;
          let s = e;
          s < 0 && (s = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: u,
            activeIndex: d,
            rtlTranslate: p,
            wrapperEl: f,
            enabled: h,
          } = o;
          if (
            (o.animating && a.preventInteractionOnTransition) ||
            (!h && !i && !r)
          )
            return !1;
          const m = Math.min(o.params.slidesPerGroupSkip, s);
          let g = m + Math.floor((s - m) / o.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1),
            (d || a.initialSlide || 0) === (u || 0) &&
              n &&
              o.emit("beforeSlideChangeStart");
          const v = -l[g];
          if ((o.updateProgress(v), a.normalizeSlideIndex))
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                n = Math.floor(100 * c[e]),
                i = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= n && t < i - (i - n) / 2
                  ? (s = e)
                  : t >= n && t < i && (s = e + 1)
                : t >= n && (s = e);
            }
          if (o.initialized && s !== d) {
            if (!o.allowSlideNext && v < o.translate && v < o.minTranslate())
              return !1;
            if (
              !o.allowSlidePrev &&
              v > o.translate &&
              v > o.maxTranslate() &&
              (d || 0) !== s
            )
              return !1;
          }
          let y;
          if (
            ((y = s > d ? "next" : s < d ? "prev" : "reset"),
            (p && -v === o.translate) || (!p && v === o.translate))
          )
            return (
              o.updateActiveIndex(s),
              a.autoHeight && o.updateAutoHeight(),
              o.updateSlidesClasses(),
              "slide" !== a.effect && o.setTranslate(v),
              "reset" !== y && (o.transitionStart(n, y), o.transitionEnd(n, y)),
              !1
            );
          if (a.cssMode) {
            const e = o.isHorizontal(),
              n = p ? v : -v;
            if (0 === t) {
              const t = o.virtual && o.params.virtual.enabled;
              t &&
                ((o.wrapperEl.style.scrollSnapType = "none"),
                (o._immediateVirtual = !0)),
                (f[e ? "scrollLeft" : "scrollTop"] = n),
                t &&
                  requestAnimationFrame(() => {
                    (o.wrapperEl.style.scrollSnapType = ""),
                      (o._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!o.support.smoothScroll)
                return (
                  jl({
                    swiper: o,
                    targetPosition: n,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
            }
            return !0;
          }
          return (
            o.setTransition(t),
            o.setTranslate(v),
            o.updateActiveIndex(s),
            o.updateSlidesClasses(),
            o.emit("beforeTransitionStart", t, i),
            o.transitionStart(n, y),
            0 === t
              ? o.transitionEnd(n, y)
              : o.animating ||
                ((o.animating = !0),
                o.onSlideToWrapperTransitionEnd ||
                  (o.onSlideToWrapperTransitionEnd = function (e) {
                    o &&
                      !o.destroyed &&
                      e.target === this &&
                      (o.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        o.onSlideToWrapperTransitionEnd
                      ),
                      o.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        o.onSlideToWrapperTransitionEnd
                      ),
                      (o.onSlideToWrapperTransitionEnd = null),
                      delete o.onSlideToWrapperTransitionEnd,
                      o.transitionEnd(n, y));
                  }),
                o.$wrapperEl[0].addEventListener(
                  "transitionend",
                  o.onSlideToWrapperTransitionEnd
                ),
                o.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  o.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, i) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "string" == typeof e)
          ) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const r = this;
          let o = e;
          return r.params.loop && (o += r.loopedSlides), r.slideTo(o, t, n, i);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            { animating: r, enabled: o, params: s } = i;
          if (!o) return i;
          let a = s.slidesPerGroup;
          "auto" === s.slidesPerView &&
            1 === s.slidesPerGroup &&
            s.slidesPerGroupAuto &&
            (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : a;
          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return s.rewind && i.isEnd
            ? i.slideTo(0, e, t, n)
            : i.slideTo(i.activeIndex + l, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            {
              params: r,
              animating: o,
              snapGrid: s,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = i;
          if (!c) return i;
          if (r.loop) {
            if (o && r.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const d = u(l ? i.translate : -i.translate),
            p = s.map((e) => u(e));
          let f = s[p.indexOf(d) - 1];
          if (void 0 === f && r.cssMode) {
            let e;
            s.forEach((t, n) => {
              d >= t && (e = n);
            }),
              void 0 !== e && (f = s[e > 0 ? e - 1 : e]);
          }
          let h = 0;
          if (
            (void 0 !== f &&
              ((h = a.indexOf(f)),
              h < 0 && (h = i.activeIndex - 1),
              "auto" === r.slidesPerView &&
                1 === r.slidesPerGroup &&
                r.slidesPerGroupAuto &&
                ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0)))),
            r.rewind && i.isBeginning)
          ) {
            const r =
              i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1;
            return i.slideTo(r, e, t, n);
          }
          return i.slideTo(h, e, t, n);
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          const r = this;
          let o = r.activeIndex;
          const s = Math.min(r.params.slidesPerGroupSkip, o),
            a = s + Math.floor((o - s) / r.params.slidesPerGroup),
            l = r.rtlTranslate ? r.translate : -r.translate;
          if (l >= r.snapGrid[a]) {
            const e = r.snapGrid[a];
            l - e > (r.snapGrid[a + 1] - e) * i &&
              (o += r.params.slidesPerGroup);
          } else {
            const e = r.snapGrid[a - 1];
            l - e <= (r.snapGrid[a] - e) * i && (o -= r.params.slidesPerGroup);
          }
          return (
            (o = Math.max(o, 0)),
            (o = Math.min(o, r.slidesGrid.length - 1)),
            r.slideTo(o, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: n } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let r,
            o = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (r = parseInt(
              Il(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? o < e.loopedSlides - i / 2 ||
                  o > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (o = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    zl(() => {
                      e.slideTo(o);
                    }))
                  : e.slideTo(o)
                : o > e.slides.length - i
                ? (e.loopFix(),
                  (o = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  zl(() => {
                    e.slideTo(o);
                  }))
                : e.slideTo(o);
          } else e.slideTo(o);
        },
      };
      var ec = {
        loopCreate: function () {
          const e = this,
            t = Cl(),
            { params: n, $wrapperEl: i } = e,
            r = i.children().length > 0 ? Il(i.children()[0].parentNode) : i;
          r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
          let o = r.children(`.${n.slideClass}`);
          if (n.loopFillGroupWithBlank) {
            const e = n.slidesPerGroup - (o.length % n.slidesPerGroup);
            if (e !== n.slidesPerGroup) {
              for (let i = 0; i < e; i += 1) {
                const e = Il(t.createElement("div")).addClass(
                  `${n.slideClass} ${n.slideBlankClass}`
                );
                r.append(e);
              }
              o = r.children(`.${n.slideClass}`);
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = o.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > o.length && (e.loopedSlides = o.length);
          const s = [],
            a = [];
          o.each((t, n) => {
            const i = Il(t);
            n < e.loopedSlides && a.push(t),
              n < o.length && n >= o.length - e.loopedSlides && s.push(t),
              i.attr("data-swiper-slide-index", n);
          });
          for (let e = 0; e < a.length; e += 1)
            r.append(Il(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (let e = s.length - 1; e >= 0; e -= 1)
            r.prepend(Il(s[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: n,
            loopedSlides: i,
            allowSlidePrev: r,
            allowSlideNext: o,
            snapGrid: s,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -s[t] - e.getTranslate();
          if (t < i) {
            (l = n.length - 3 * i + t), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= n.length - i) {
            (l = -n.length + t + i), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = r), (e.allowSlideNext = o), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: n } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            n.removeAttr("data-swiper-slide-index");
        },
      };
      function tc(e) {
        const t = this,
          n = Cl(),
          i = Al(),
          r = t.touchEventsData,
          { params: o, touches: s, enabled: a } = t;
        if (!a) return;
        if (t.animating && o.preventInteractionOnTransition) return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = Il(l.target);
        if ("wrapper" === o.touchEventsTarget && !c.closest(t.wrapperEl).length)
          return;
        if (
          ((r.isTouchEvent = "touchstart" === l.type),
          !r.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!r.isTouchEvent && "button" in l && l.button > 0) return;
        if (r.isTouched && r.isMoved) return;
        !!o.noSwipingClass &&
          "" !== o.noSwipingClass &&
          l.target &&
          l.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (c = Il(e.path[0]));
        const u = o.noSwipingSelector
            ? o.noSwipingSelector
            : `.${o.noSwipingClass}`,
          d = !(!l.target || !l.target.shadowRoot);
        if (
          o.noSwiping &&
          (d
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(n) {
                    if (!n || n === Cl() || n === Al()) return null;
                    n.assignedSlot && (n = n.assignedSlot);
                    const i = n.closest(e);
                    return i || n.getRootNode
                      ? i || t(n.getRootNode().host)
                      : null;
                  })(t)
                );
              })(u, c[0])
            : c.closest(u)[0])
        )
          return void (t.allowClick = !0);
        if (o.swipeHandler && !c.closest(o.swipeHandler)[0]) return;
        (s.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (s.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const p = s.currentX,
          f = s.currentY,
          h = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
          m = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
        if (h && (p <= m || p >= i.innerWidth - m)) {
          if ("prevent" !== h) return;
          e.preventDefault();
        }
        if (
          (Object.assign(r, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (s.startX = p),
          (s.startY = f),
          (r.touchStartTime = Rl()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          o.threshold > 0 && (r.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          c.is(r.focusableElements) &&
            ((e = !1), "SELECT" === c[0].nodeName && (r.isTouched = !1)),
            n.activeElement &&
              Il(n.activeElement).is(r.focusableElements) &&
              n.activeElement !== c[0] &&
              n.activeElement.blur();
          const i = e && t.allowTouchMove && o.touchStartPreventDefault;
          (!o.touchStartForcePreventDefault && !i) ||
            c[0].isContentEditable ||
            l.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !o.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", l);
      }
      function nc(e) {
        const t = Cl(),
          n = this,
          i = n.touchEventsData,
          { params: r, touches: o, rtlTranslate: s, enabled: a } = n;
        if (!a) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
          return void (
            i.startMoving &&
            i.isScrolling &&
            n.emit("touchMoveOpposite", l)
          );
        if (i.isTouchEvent && "touchmove" !== l.type) return;
        const c =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          u = "touchmove" === l.type ? c.pageX : l.pageX,
          d = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (o.startX = u), void (o.startY = d);
        if (!n.allowTouchMove)
          return (
            Il(l.target).is(i.focusableElements) || (n.allowClick = !1),
            void (
              i.isTouched &&
              (Object.assign(o, {
                startX: u,
                startY: d,
                currentX: u,
                currentY: d,
              }),
              (i.touchStartTime = Rl()))
            )
          );
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
          if (n.isVertical()) {
            if (
              (d < o.startY && n.translate <= n.maxTranslate()) ||
              (d > o.startY && n.translate >= n.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (u < o.startX && n.translate <= n.maxTranslate()) ||
            (u > o.startX && n.translate >= n.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          Il(l.target).is(i.focusableElements)
        )
          return (i.isMoved = !0), void (n.allowClick = !1);
        if (
          (i.allowTouchCallbacks && n.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (o.currentX = u), (o.currentY = d);
        const p = o.currentX - o.startX,
          f = o.currentY - o.startY;
        if (
          n.params.threshold &&
          Math.sqrt(p ** 2 + f ** 2) < n.params.threshold
        )
          return;
        if (void 0 === i.isScrolling) {
          let e;
          (n.isHorizontal() && o.currentY === o.startY) ||
          (n.isVertical() && o.currentX === o.startX)
            ? (i.isScrolling = !1)
            : p * p + f * f >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
              (i.isScrolling = n.isHorizontal()
                ? e > r.touchAngle
                : 90 - e > r.touchAngle));
        }
        if (
          (i.isScrolling && n.emit("touchMoveOpposite", l),
          void 0 === i.startMoving &&
            ((o.currentX === o.startX && o.currentY === o.startY) ||
              (i.startMoving = !0)),
          i.isScrolling)
        )
          return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (n.allowClick = !1),
          !r.cssMode && l.cancelable && l.preventDefault(),
          r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
          i.isMoved ||
            (r.loop && !r.cssMode && n.loopFix(),
            (i.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating &&
              n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (i.allowMomentumBounce = !1),
            !r.grabCursor ||
              (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
              n.setGrabCursor(!0),
            n.emit("sliderFirstMove", l)),
          n.emit("sliderMove", l),
          (i.isMoved = !0);
        let h = n.isHorizontal() ? p : f;
        (o.diff = h),
          (h *= r.touchRatio),
          s && (h = -h),
          (n.swipeDirection = h > 0 ? "prev" : "next"),
          (i.currentTranslate = h + i.startTranslate);
        let m = !0,
          g = r.resistanceRatio;
        if (
          (r.touchReleaseOnEdges && (g = 0),
          h > 0 && i.currentTranslate > n.minTranslate()
            ? ((m = !1),
              r.resistance &&
                (i.currentTranslate =
                  n.minTranslate() -
                  1 +
                  (-n.minTranslate() + i.startTranslate + h) ** g))
            : h < 0 &&
              i.currentTranslate < n.maxTranslate() &&
              ((m = !1),
              r.resistance &&
                (i.currentTranslate =
                  n.maxTranslate() +
                  1 -
                  (n.maxTranslate() - i.startTranslate - h) ** g)),
          m && (l.preventedByNestedSwiper = !0),
          !n.allowSlideNext &&
            "next" === n.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !n.allowSlidePrev &&
            "prev" === n.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          n.allowSlidePrev ||
            n.allowSlideNext ||
            (i.currentTranslate = i.startTranslate),
          r.threshold > 0)
        ) {
          if (!(Math.abs(h) > r.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (o.startX = o.currentX),
              (o.startY = o.currentY),
              (i.currentTranslate = i.startTranslate),
              void (o.diff = n.isHorizontal()
                ? o.currentX - o.startX
                : o.currentY - o.startY)
            );
        }
        r.followFinger &&
          !r.cssMode &&
          (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
            r.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
          n.params.freeMode &&
            r.freeMode.enabled &&
            n.freeMode &&
            n.freeMode.onTouchMove(),
          n.updateProgress(i.currentTranslate),
          n.setTranslate(i.currentTranslate));
      }
      function ic(e) {
        const t = this,
          n = t.touchEventsData,
          {
            params: i,
            touches: r,
            rtlTranslate: o,
            slidesGrid: s,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          n.allowTouchCallbacks && t.emit("touchEnd", l),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        i.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = Rl(),
          u = c - n.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            u < 300 &&
              c - n.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((n.lastClickTime = Rl()),
          zl(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            0 === r.diff ||
            n.currentTranslate === n.startTranslate)
        )
          return (
            (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
          );
        let d;
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (d = i.followFinger
            ? o
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          i.cssMode)
        )
          return;
        if (t.params.freeMode && i.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: d });
        let p = 0,
          f = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < s.length;
          e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== s[e + t]
            ? d >= s[e] && d < s[e + t] && ((p = e), (f = s[e + t] - s[e]))
            : d >= s[e] && ((p = e), (f = s[s.length - 1] - s[s.length - 2]));
        }
        let h = null,
          m = null;
        i.rewind &&
          (t.isBeginning
            ? (m =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (h = 0));
        const g = (d - s[p]) / f,
          v = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (u > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (g >= i.longSwipesRatio
              ? t.slideTo(i.rewind && t.isEnd ? h : p + v)
              : t.slideTo(p)),
            "prev" === t.swipeDirection &&
              (g > 1 - i.longSwipesRatio
                ? t.slideTo(p + v)
                : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio
                ? t.slideTo(m)
                : t.slideTo(p));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(p + v)
              : t.slideTo(p)
            : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + v),
              "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
        }
      }
      function rc() {
        const e = this,
          { params: t, el: n } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: r, snapGrid: o } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = r),
          (e.allowSlideNext = i),
          e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
      }
      function oc(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function sc() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
        if (!i) return;
        let r;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const o = e.maxTranslate() - e.minTranslate();
        (r = 0 === o ? 0 : (e.translate - e.minTranslate()) / o),
          r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let ac = !1;
      function lc() {}
      const cc = (e, t) => {
        const n = Cl(),
          {
            params: i,
            touchEvents: r,
            el: o,
            wrapperEl: s,
            device: a,
            support: l,
          } = e,
          c = !!i.nested,
          u = "on" === t ? "addEventListener" : "removeEventListener",
          d = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== r.start ||
            !l.passiveListener ||
            !i.passiveListeners
          ) && { passive: !0, capture: !1 };
          o[u](r.start, e.onTouchStart, t),
            o[u](
              r.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: c } : c
            ),
            o[u](r.end, e.onTouchEnd, t),
            r.cancel && o[u](r.cancel, e.onTouchEnd, t);
        } else
          o[u](r.start, e.onTouchStart, !1),
            n[u](r.move, e.onTouchMove, c),
            n[u](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) &&
          o[u]("click", e.onClick, !0),
          i.cssMode && s[u]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[d](
                a.ios || a.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                rc,
                !0
              )
            : e[d]("observerUpdate", rc, !0);
      };
      var uc = {
        attachEvents: function () {
          const e = this,
            t = Cl(),
            { params: n, support: i } = e;
          (e.onTouchStart = tc.bind(e)),
            (e.onTouchMove = nc.bind(e)),
            (e.onTouchEnd = ic.bind(e)),
            n.cssMode && (e.onScroll = sc.bind(e)),
            (e.onClick = oc.bind(e)),
            i.touch && !ac && (t.addEventListener("touchstart", lc), (ac = !0)),
            cc(e, "on");
        },
        detachEvents: function () {
          cc(this, "off");
        },
      };
      const dc = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var pc = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: n,
              loopedSlides: i = 0,
              params: r,
              $el: o,
            } = e,
            s = r.breakpoints;
          if (!s || (s && 0 === Object.keys(s).length)) return;
          const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in s ? s[a] : void 0) || e.originalParams,
            c = dc(e, r),
            u = dc(e, l),
            d = r.enabled;
          c && !u
            ? (o.removeClass(
                `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              u &&
              (o.addClass(`${r.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === r.grid.fill)) &&
                o.addClass(`${r.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const n = r[t] && r[t].enabled,
                i = l[t] && l[t].enabled;
              n && !i && e[t].disable(), !n && i && e[t].enable();
            });
          const p = l.direction && l.direction !== r.direction,
            f = r.loop && (l.slidesPerView !== r.slidesPerView || p);
          p && n && e.changeDirection(), $l(e.params, l);
          const h = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            d && !h ? e.disable() : !d && h && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            f &&
              n &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - i + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
            return;
          let i = !1;
          const r = Al(),
            o = "window" === t ? r.innerHeight : n.clientHeight,
            s = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: o * t, point: e };
              }
              return { value: e, point: e };
            });
          s.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < s.length; e += 1) {
            const { point: o, value: a } = s[e];
            "window" === t
              ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = o)
              : a <= n.clientWidth && (i = o);
          }
          return i || "max";
        },
      };
      var fc = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: n,
              rtl: i,
              $el: r,
              device: o,
              support: s,
            } = e,
            a = (function (e, t) {
              const n = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && n.push(t + i);
                      })
                    : "string" == typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !s.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: i },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: o.android },
                { ios: o.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { "watch-progress": n.watchSlidesProgress },
              ],
              n.containerModifierClass
            );
          t.push(...a), r.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      var hc = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function mc(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          const i = Object.keys(n)[0],
            r = n[i];
          "object" == typeof r && null !== r
            ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                !0 === e[i] &&
                (e[i] = { auto: !0 }),
              i in e && "enabled" in r
                ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                  "object" != typeof e[i] ||
                    "enabled" in e[i] ||
                    (e[i].enabled = !0),
                  e[i] || (e[i] = { enabled: !1 }),
                  $l(t, n))
                : $l(t, n))
            : $l(t, n);
        };
      }
      const gc = {
          eventsEmitter: Ul,
          update: Ql,
          translate: Kl,
          transition: {
            setTransition: function (e, t) {
              const n = this;
              n.params.cssMode || n.$wrapperEl.transition(e),
                n.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const n = this,
                { params: i } = n;
              i.cssMode ||
                (i.autoHeight && n.updateAutoHeight(),
                Zl({
                  swiper: n,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const n = this,
                { params: i } = n;
              (n.animating = !1),
                i.cssMode ||
                  (n.setTransition(0),
                  Zl({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: Jl,
          loop: ec,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const n =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (n.style.cursor = "move"),
                (n.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: uc,
          breakpoints: pc,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: n } = e,
                { slidesOffsetBefore: i } = n;
              if (i) {
                const t = e.slides.length - 1,
                  n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > n;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: fc,
          images: {
            loadImage: function (e, t, n, i, r, o) {
              const s = Al();
              let a;
              function l() {
                o && o();
              }
              Il(e).parent("picture")[0] || (e.complete && r)
                ? l()
                : t
                ? ((a = new s.Image()),
                  (a.onload = l),
                  (a.onerror = l),
                  i && (a.sizes = i),
                  n && (a.srcset = n),
                  t && (a.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                const i = e.imagesToLoad[n];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        vc = {};
      class yc {
        constructor() {
          let e, t;
          for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
            i[r] = arguments[r];
          if (
            (1 === i.length &&
            i[0].constructor &&
            "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
              ? (t = i[0])
              : ([e, t] = i),
            t || (t = {}),
            (t = $l({}, t)),
            e && !t.el && (t.el = e),
            t.el && Il(t.el).length > 1)
          ) {
            const e = [];
            return (
              Il(t.el).each((n) => {
                const i = $l({}, t, { el: n });
                e.push(new yc(i));
              }),
              e
            );
          }
          const o = this;
          (o.__swiper__ = !0),
            (o.support = Gl()),
            (o.device = Xl({ userAgent: t.userAgent })),
            (o.browser = Yl()),
            (o.eventsListeners = {}),
            (o.eventsAnyListeners = []),
            (o.modules = [...o.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              o.modules.push(...t.modules);
          const s = {};
          o.modules.forEach((e) => {
            e({
              swiper: o,
              extendParams: mc(t, s),
              on: o.on.bind(o),
              once: o.once.bind(o),
              off: o.off.bind(o),
              emit: o.emit.bind(o),
            });
          });
          const a = $l({}, hc, s);
          return (
            (o.params = $l({}, a, vc, t)),
            (o.originalParams = $l({}, o.params)),
            (o.passedParams = $l({}, t)),
            o.params &&
              o.params.on &&
              Object.keys(o.params.on).forEach((e) => {
                o.on(e, o.params.on[e]);
              }),
            o.params && o.params.onAny && o.onAny(o.params.onAny),
            (o.$ = Il),
            Object.assign(o, {
              enabled: o.params.enabled,
              el: e,
              classNames: [],
              slides: Il(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal() {
                return "horizontal" === o.params.direction;
              },
              isVertical() {
                return "vertical" === o.params.direction;
              },
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: o.params.allowSlideNext,
              allowSlidePrev: o.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (o.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (o.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  o.support.touch || !o.params.simulateTouch
                    ? o.touchEventsTouch
                    : o.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: o.params.focusableElements,
                lastClickTime: Rl(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: o.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            o.emit("_swiper"),
            o.params.init && o.init(),
            o
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = n.minTranslate(),
            r = (n.maxTranslate() - i) * e + i;
          n.translateTo(r, void 0 === t ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((n) => {
            const i = e.getSlideClasses(n);
            t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: n,
            slides: i,
            slidesGrid: r,
            slidesSizesGrid: o,
            size: s,
            activeIndex: a,
          } = this;
          let l = 1;
          if (n.centeredSlides) {
            let e,
              t = i[a].swiperSlideSize;
            for (let n = a + 1; n < i.length; n += 1)
              i[n] &&
                !e &&
                ((t += i[n].swiperSlideSize), (l += 1), t > s && (e = !0));
            for (let n = a - 1; n >= 0; n -= 1)
              i[n] &&
                !e &&
                ((t += i[n].swiperSlideSize), (l += 1), t > s && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < i.length; e += 1) {
              (t ? r[e] + o[e] - r[a] < s : r[e] - r[a] < s) && (l += 1);
            }
          else
            for (let e = a - 1; e >= 0; e -= 1) {
              r[a] - r[e] < s && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: n } = e;
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let r;
          n.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (i(), e.params.autoHeight && e.updateAutoHeight())
              : ((r =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                r || i()),
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const n = this,
            i = n.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (n.$el
                .removeClass(`${n.params.containerModifierClass}${i}`)
                .addClass(`${n.params.containerModifierClass}${e}`),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              n.emit("changeDirection"),
              t && n.update()),
            n
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "rtl"))
              : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const n = Il(e || t.params.el);
          if (!(e = n[0])) return !1;
          e.swiper = t;
          const i = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let r = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = Il(e.shadowRoot.querySelector(i()));
              return (t.children = (e) => n.children(e)), t;
            }
            return n.children ? n.children(i()) : Il(n).children(i());
          })();
          if (0 === r.length && t.params.createElements) {
            const e = Cl().createElement("div");
            (r = Il(e)),
              (e.className = t.params.wrapperClass),
              n.append(e),
              n.children(`.${t.params.slideClass}`).each((e) => {
                r.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: n,
              el: e,
              $wrapperEl: r,
              wrapperEl: r[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
              wrongRTL: "-webkit-box" === r.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const n = this,
            { params: i, $el: r, $wrapperEl: o, slides: s } = n;
          return (
            void 0 === n.params ||
              n.destroyed ||
              (n.emit("beforeDestroy"),
              (n.initialized = !1),
              n.detachEvents(),
              i.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                r.removeAttr("style"),
                o.removeAttr("style"),
                s &&
                  s.length &&
                  s
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              n.emit("destroy"),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e);
              }),
              !1 !== e &&
                ((n.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(n)),
              (n.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          $l(vc, e);
        }
        static get extendedDefaults() {
          return vc;
        }
        static get defaults() {
          return hc;
        }
        static installModule(e) {
          yc.prototype.__modules__ || (yc.prototype.__modules__ = []);
          const t = yc.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => yc.installModule(e)), yc)
            : (yc.installModule(e), yc);
        }
      }
      Object.keys(gc).forEach((e) => {
        Object.keys(gc[e]).forEach((t) => {
          yc.prototype[t] = gc[e][t];
        });
      }),
        yc.use([
          function (e) {
            let { swiper: t, on: n, emit: i } = e;
            const r = Al();
            let o = null,
              s = null;
            const a = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              l = () => {
                t && !t.destroyed && t.initialized && i("orientationchange");
              };
            n("init", () => {
              t.params.resizeObserver && void 0 !== r.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((o = new ResizeObserver((e) => {
                    s = r.requestAnimationFrame(() => {
                      const { width: n, height: i } = t;
                      let r = n,
                        o = i;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: n,
                          contentRect: i,
                          target: s,
                        } = e;
                        (s && s !== t.el) ||
                          ((r = i ? i.width : (n[0] || n).inlineSize),
                          (o = i ? i.height : (n[0] || n).blockSize));
                      }),
                        (r === n && o === i) || a();
                    });
                  })),
                  o.observe(t.el))
                : (r.addEventListener("resize", a),
                  r.addEventListener("orientationchange", l));
            }),
              n("destroy", () => {
                s && r.cancelAnimationFrame(s),
                  o && o.unobserve && t.el && (o.unobserve(t.el), (o = null)),
                  r.removeEventListener("resize", a),
                  r.removeEventListener("orientationchange", l);
              });
          },
          function (e) {
            let { swiper: t, extendParams: n, on: i, emit: r } = e;
            const o = [],
              s = Al(),
              a = function (e, t) {
                void 0 === t && (t = {});
                const n = new (s.MutationObserver || s.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void r("observerUpdate", e[0]);
                    const t = function () {
                      r("observerUpdate", e[0]);
                    };
                    s.requestAnimationFrame
                      ? s.requestAnimationFrame(t)
                      : s.setTimeout(t, 0);
                  }
                );
                n.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  o.push(n);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) a(e[t]);
                  }
                  a(t.$el[0], { childList: t.params.observeSlideChildren }),
                    a(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              i("destroy", () => {
                o.forEach((e) => {
                  e.disconnect();
                }),
                  o.splice(0, o.length);
              });
          },
        ]);
      var xc = yc;
      function bc(e, t, n, i) {
        const r = Cl();
        return (
          e.params.createElements &&
            Object.keys(i).forEach((o) => {
              if (!n[o] && !0 === n.auto) {
                let s = e.$el.children(`.${i[o]}`)[0];
                s ||
                  ((s = r.createElement("div")),
                  (s.className = i[o]),
                  e.$el.append(s)),
                  (n[o] = s),
                  (t[o] = s);
              }
            }),
          n
        );
      }
      function wc(e) {
        let { swiper: t, extendParams: n, on: i, emit: r } = e;
        function o(e) {
          let n;
          return (
            e &&
              ((n = Il(e)),
              t.params.uniqueNavElements &&
                "string" == typeof e &&
                n.length > 1 &&
                1 === t.$el.find(e).length &&
                (n = t.$el.find(e))),
            n
          );
        }
        function s(e, n) {
          const i = t.params.navigation;
          e &&
            e.length > 0 &&
            (e[n ? "addClass" : "removeClass"](i.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
            t.params.watchOverflow &&
              t.enabled &&
              e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
        }
        function a() {
          if (t.params.loop) return;
          const { $nextEl: e, $prevEl: n } = t.navigation;
          s(n, t.isBeginning && !t.params.rewind),
            s(e, t.isEnd && !t.params.rewind);
        }
        function l(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), r("navigationPrev"));
        }
        function c(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), r("navigationNext"));
        }
        function u() {
          const e = t.params.navigation;
          if (
            ((t.params.navigation = bc(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !e.nextEl && !e.prevEl)
          )
            return;
          const n = o(e.nextEl),
            i = o(e.prevEl);
          n && n.length > 0 && n.on("click", c),
            i && i.length > 0 && i.on("click", l),
            Object.assign(t.navigation, {
              $nextEl: n,
              nextEl: n && n[0],
              $prevEl: i,
              prevEl: i && i[0],
            }),
            t.enabled ||
              (n && n.addClass(e.lockClass), i && i.addClass(e.lockClass));
        }
        function d() {
          const { $nextEl: e, $prevEl: n } = t.navigation;
          e &&
            e.length &&
            (e.off("click", c),
            e.removeClass(t.params.navigation.disabledClass)),
            n &&
              n.length &&
              (n.off("click", l),
              n.removeClass(t.params.navigation.disabledClass));
        }
        n({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          i("init", () => {
            !1 === t.params.navigation.enabled ? p() : (u(), a());
          }),
          i("toEdge fromEdge lock unlock", () => {
            a();
          }),
          i("destroy", () => {
            d();
          }),
          i("enable disable", () => {
            const { $nextEl: e, $prevEl: n } = t.navigation;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              ),
              n &&
                n[t.enabled ? "removeClass" : "addClass"](
                  t.params.navigation.lockClass
                );
          }),
          i("click", (e, n) => {
            const { $nextEl: i, $prevEl: o } = t.navigation,
              s = n.target;
            if (
              t.params.navigation.hideOnClick &&
              !Il(s).is(o) &&
              !Il(s).is(i)
            ) {
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === s || t.pagination.el.contains(s))
              )
                return;
              let e;
              i
                ? (e = i.hasClass(t.params.navigation.hiddenClass))
                : o && (e = o.hasClass(t.params.navigation.hiddenClass)),
                r(!0 === e ? "navigationShow" : "navigationHide"),
                i && i.toggleClass(t.params.navigation.hiddenClass),
                o && o.toggleClass(t.params.navigation.hiddenClass);
            }
          });
        const p = () => {
          t.$el.addClass(t.params.navigation.navigationDisabledClass), d();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.$el.removeClass(t.params.navigation.navigationDisabledClass),
              u(),
              a();
          },
          disable: p,
          update: a,
          init: u,
          destroy: d,
        });
      }
      function Sc(e) {
        return (
          void 0 === e && (e = ""),
          `.${e
            .trim()
            .replace(/([\.:!\/])/g, "\\$1")
            .replace(/ /g, ".")}`
        );
      }
      function _c(e) {
        let { swiper: t, extendParams: n, on: i, emit: r } = e;
        const o = "swiper-pagination";
        let s;
        n({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${o}-bullet`,
            bulletActiveClass: `${o}-bullet-active`,
            modifierClass: `${o}-`,
            currentClass: `${o}-current`,
            totalClass: `${o}-total`,
            hiddenClass: `${o}-hidden`,
            progressbarFillClass: `${o}-progressbar-fill`,
            progressbarOppositeClass: `${o}-progressbar-opposite`,
            clickableClass: `${o}-clickable`,
            lockClass: `${o}-lock`,
            horizontalClass: `${o}-horizontal`,
            verticalClass: `${o}-vertical`,
            paginationDisabledClass: `${o}-disabled`,
          },
        }),
          (t.pagination = { el: null, $el: null, bullets: [] });
        let a = 0;
        function l() {
          return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            !t.pagination.$el ||
            0 === t.pagination.$el.length
          );
        }
        function c(e, n) {
          const { bulletActiveClass: i } = t.params.pagination;
          e[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`);
        }
        function u() {
          const e = t.rtl,
            n = t.params.pagination;
          if (l()) return;
          const i =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            o = t.pagination.$el;
          let u;
          const d = t.params.loop
            ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((u = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )),
                u > i - 1 - 2 * t.loopedSlides && (u -= i - 2 * t.loopedSlides),
                u > d - 1 && (u -= d),
                u < 0 && "bullets" !== t.params.paginationType && (u = d + u))
              : (u = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            "bullets" === n.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            const i = t.pagination.bullets;
            let r, l, d;
            if (
              (n.dynamicBullets &&
                ((s = i
                  .eq(0)
                  [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                o.css(
                  t.isHorizontal() ? "width" : "height",
                  s * (n.dynamicMainBullets + 4) + "px"
                ),
                n.dynamicMainBullets > 1 &&
                  void 0 !== t.previousIndex &&
                  ((a += u - (t.previousIndex - t.loopedSlides || 0)),
                  a > n.dynamicMainBullets - 1
                    ? (a = n.dynamicMainBullets - 1)
                    : a < 0 && (a = 0)),
                (r = Math.max(u - a, 0)),
                (l = r + (Math.min(i.length, n.dynamicMainBullets) - 1)),
                (d = (l + r) / 2)),
              i.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${n.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              o.length > 1)
            )
              i.each((e) => {
                const t = Il(e),
                  i = t.index();
                i === u && t.addClass(n.bulletActiveClass),
                  n.dynamicBullets &&
                    (i >= r &&
                      i <= l &&
                      t.addClass(`${n.bulletActiveClass}-main`),
                    i === r && c(t, "prev"),
                    i === l && c(t, "next"));
              });
            else {
              const e = i.eq(u),
                o = e.index();
              if ((e.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                const e = i.eq(r),
                  s = i.eq(l);
                for (let e = r; e <= l; e += 1)
                  i.eq(e).addClass(`${n.bulletActiveClass}-main`);
                if (t.params.loop)
                  if (o >= i.length) {
                    for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                      i.eq(i.length - e).addClass(
                        `${n.bulletActiveClass}-main`
                      );
                    i.eq(i.length - n.dynamicMainBullets - 1).addClass(
                      `${n.bulletActiveClass}-prev`
                    );
                  } else c(e, "prev"), c(s, "next");
                else c(e, "prev"), c(s, "next");
              }
            }
            if (n.dynamicBullets) {
              const r = Math.min(i.length, n.dynamicMainBullets + 4),
                o = (s * r - s) / 2 - d * s,
                a = e ? "right" : "left";
              i.css(t.isHorizontal() ? a : "top", `${o}px`);
            }
          }
          if (
            ("fraction" === n.type &&
              (o.find(Sc(n.currentClass)).text(n.formatFractionCurrent(u + 1)),
              o.find(Sc(n.totalClass)).text(n.formatFractionTotal(d))),
            "progressbar" === n.type)
          ) {
            let e;
            e = n.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            const i = (u + 1) / d;
            let r = 1,
              s = 1;
            "horizontal" === e ? (r = i) : (s = i),
              o
                .find(Sc(n.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${s})`)
                .transition(t.params.speed);
          }
          "custom" === n.type && n.renderCustom
            ? (o.html(n.renderCustom(t, u + 1, d)), r("paginationRender", o[0]))
            : r("paginationUpdate", o[0]),
            t.params.watchOverflow &&
              t.enabled &&
              o[t.isLocked ? "addClass" : "removeClass"](n.lockClass);
        }
        function d() {
          const e = t.params.pagination;
          if (l()) return;
          const n =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            i = t.pagination.$el;
          let o = "";
          if ("bullets" === e.type) {
            let r = t.params.loop
              ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.loop &&
              r > n &&
              (r = n);
            for (let n = 0; n < r; n += 1)
              e.renderBullet
                ? (o += e.renderBullet.call(t, n, e.bulletClass))
                : (o += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
            i.html(o), (t.pagination.bullets = i.find(Sc(e.bulletClass)));
          }
          "fraction" === e.type &&
            ((o = e.renderFraction
              ? e.renderFraction.call(t, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            i.html(o)),
            "progressbar" === e.type &&
              ((o = e.renderProgressbar
                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
              i.html(o)),
            "custom" !== e.type && r("paginationRender", t.pagination.$el[0]);
        }
        function p() {
          t.params.pagination = bc(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: "swiper-pagination" }
          );
          const e = t.params.pagination;
          if (!e.el) return;
          let n = Il(e.el);
          0 !== n.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof e.el &&
              n.length > 1 &&
              ((n = t.$el.find(e.el)),
              n.length > 1 &&
                (n = n.filter((e) => Il(e).parents(".swiper")[0] === t.el))),
            "bullets" === e.type && e.clickable && n.addClass(e.clickableClass),
            n.addClass(e.modifierClass + e.type),
            n.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            "bullets" === e.type &&
              e.dynamicBullets &&
              (n.addClass(`${e.modifierClass}${e.type}-dynamic`),
              (a = 0),
              e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type &&
              e.progressbarOpposite &&
              n.addClass(e.progressbarOppositeClass),
            e.clickable &&
              n.on("click", Sc(e.bulletClass), function (e) {
                e.preventDefault();
                let n = Il(this).index() * t.params.slidesPerGroup;
                t.params.loop && (n += t.loopedSlides), t.slideTo(n);
              }),
            Object.assign(t.pagination, { $el: n, el: n[0] }),
            t.enabled || n.addClass(e.lockClass));
        }
        function f() {
          const e = t.params.pagination;
          if (l()) return;
          const n = t.pagination.$el;
          n.removeClass(e.hiddenClass),
            n.removeClass(e.modifierClass + e.type),
            n.removeClass(
              t.isHorizontal() ? e.horizontalClass : e.verticalClass
            ),
            t.pagination.bullets &&
              t.pagination.bullets.removeClass &&
              t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && n.off("click", Sc(e.bulletClass));
        }
        i("init", () => {
          !1 === t.params.pagination.enabled ? h() : (p(), d(), u());
        }),
          i("activeIndexChange", () => {
            (t.params.loop || void 0 === t.snapIndex) && u();
          }),
          i("snapIndexChange", () => {
            t.params.loop || u();
          }),
          i("slidesLengthChange", () => {
            t.params.loop && (d(), u());
          }),
          i("snapGridLengthChange", () => {
            t.params.loop || (d(), u());
          }),
          i("destroy", () => {
            f();
          }),
          i("enable disable", () => {
            const { $el: e } = t.pagination;
            e &&
              e[t.enabled ? "removeClass" : "addClass"](
                t.params.pagination.lockClass
              );
          }),
          i("lock unlock", () => {
            u();
          }),
          i("click", (e, n) => {
            const i = n.target,
              { $el: o } = t.pagination;
            if (
              t.params.pagination.el &&
              t.params.pagination.hideOnClick &&
              o &&
              o.length > 0 &&
              !Il(i).hasClass(t.params.pagination.bulletClass)
            ) {
              if (
                t.navigation &&
                ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                  (t.navigation.prevEl && i === t.navigation.prevEl))
              )
                return;
              const e = o.hasClass(t.params.pagination.hiddenClass);
              r(!0 === e ? "paginationShow" : "paginationHide"),
                o.toggleClass(t.params.pagination.hiddenClass);
            }
          });
        const h = () => {
          t.$el.addClass(t.params.pagination.paginationDisabledClass),
            t.pagination.$el &&
              t.pagination.$el.addClass(
                t.params.pagination.paginationDisabledClass
              ),
            f();
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.$el.removeClass(t.params.pagination.paginationDisabledClass),
              t.pagination.$el &&
                t.pagination.$el.removeClass(
                  t.params.pagination.paginationDisabledClass
                ),
              p(),
              d(),
              u();
          },
          disable: h,
          render: d,
          update: u,
          init: p,
          destroy: f,
        });
      }
      function Tc(e) {
        let { swiper: t, extendParams: n, on: i, emit: r } = e;
        n({
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        }),
          (t.lazy = {});
        let o = !1,
          s = !1;
        function a(e, n) {
          void 0 === n && (n = !0);
          const i = t.params.lazy;
          if (void 0 === e) return;
          if (0 === t.slides.length) return;
          const o =
              t.virtual && t.params.virtual.enabled
                ? t.$wrapperEl.children(
                    `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                : t.slides.eq(e),
            s = o.find(
              `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
            );
          !o.hasClass(i.elementClass) ||
            o.hasClass(i.loadedClass) ||
            o.hasClass(i.loadingClass) ||
            s.push(o[0]),
            0 !== s.length &&
              s.each((e) => {
                const s = Il(e);
                s.addClass(i.loadingClass);
                const l = s.attr("data-background"),
                  c = s.attr("data-src"),
                  u = s.attr("data-srcset"),
                  d = s.attr("data-sizes"),
                  p = s.parent("picture");
                t.loadImage(s[0], c || l, u, d, !1, () => {
                  if (null != t && t && (!t || t.params) && !t.destroyed) {
                    if (
                      (l
                        ? (s.css("background-image", `url("${l}")`),
                          s.removeAttr("data-background"))
                        : (u &&
                            (s.attr("srcset", u), s.removeAttr("data-srcset")),
                          d && (s.attr("sizes", d), s.removeAttr("data-sizes")),
                          p.length &&
                            p.children("source").each((e) => {
                              const t = Il(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          c && (s.attr("src", c), s.removeAttr("data-src"))),
                      s.addClass(i.loadedClass).removeClass(i.loadingClass),
                      o.find(`.${i.preloaderClass}`).remove(),
                      t.params.loop && n)
                    ) {
                      const e = o.attr("data-swiper-slide-index");
                      if (o.hasClass(t.params.slideDuplicateClass)) {
                        a(
                          t.$wrapperEl
                            .children(
                              `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                            )
                            .index(),
                          !1
                        );
                      } else {
                        a(
                          t.$wrapperEl
                            .children(
                              `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                            )
                            .index(),
                          !1
                        );
                      }
                    }
                    r("lazyImageReady", o[0], s[0]),
                      t.params.autoHeight && t.updateAutoHeight();
                  }
                }),
                  r("lazyImageLoad", o[0], s[0]);
              });
        }
        function l() {
          const { $wrapperEl: e, params: n, slides: i, activeIndex: r } = t,
            o = t.virtual && n.virtual.enabled,
            l = n.lazy;
          let c = n.slidesPerView;
          function u(t) {
            if (o) {
              if (
                e.children(`.${n.slideClass}[data-swiper-slide-index="${t}"]`)
                  .length
              )
                return !0;
            } else if (i[t]) return !0;
            return !1;
          }
          function d(e) {
            return o ? Il(e).attr("data-swiper-slide-index") : Il(e).index();
          }
          if (
            ("auto" === c && (c = 0),
            s || (s = !0),
            t.params.watchSlidesProgress)
          )
            e.children(`.${n.slideVisibleClass}`).each((e) => {
              a(o ? Il(e).attr("data-swiper-slide-index") : Il(e).index());
            });
          else if (c > 1) for (let e = r; e < r + c; e += 1) u(e) && a(e);
          else a(r);
          if (l.loadPrevNext)
            if (c > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
              const e = l.loadPrevNextAmount,
                t = Math.ceil(c),
                n = Math.min(r + t + Math.max(e, t), i.length),
                o = Math.max(r - Math.max(t, e), 0);
              for (let e = r + t; e < n; e += 1) u(e) && a(e);
              for (let e = o; e < r; e += 1) u(e) && a(e);
            } else {
              const t = e.children(`.${n.slideNextClass}`);
              t.length > 0 && a(d(t));
              const i = e.children(`.${n.slidePrevClass}`);
              i.length > 0 && a(d(i));
            }
        }
        function c() {
          const e = Al();
          if (!t || t.destroyed) return;
          const n = t.params.lazy.scrollingElement
              ? Il(t.params.lazy.scrollingElement)
              : Il(e),
            i = n[0] === e,
            r = i ? e.innerWidth : n[0].offsetWidth,
            s = i ? e.innerHeight : n[0].offsetHeight,
            a = t.$el.offset(),
            { rtlTranslate: u } = t;
          let d = !1;
          u && (a.left -= t.$el[0].scrollLeft);
          const p = [
            [a.left, a.top],
            [a.left + t.width, a.top],
            [a.left, a.top + t.height],
            [a.left + t.width, a.top + t.height],
          ];
          for (let e = 0; e < p.length; e += 1) {
            const t = p[e];
            if (t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= s) {
              if (0 === t[0] && 0 === t[1]) continue;
              d = !0;
            }
          }
          const f = !(
            "touchstart" !== t.touchEvents.start ||
            !t.support.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          d
            ? (l(), n.off("scroll", c, f))
            : o || ((o = !0), n.on("scroll", c, f));
        }
        i("beforeInit", () => {
          t.params.lazy.enabled &&
            t.params.preloadImages &&
            (t.params.preloadImages = !1);
        }),
          i("init", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
          }),
          i("scroll", () => {
            t.params.freeMode &&
              t.params.freeMode.enabled &&
              !t.params.freeMode.sticky &&
              l();
          }),
          i("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
          }),
          i("transitionStart", () => {
            t.params.lazy.enabled &&
              (t.params.lazy.loadOnTransitionStart ||
                (!t.params.lazy.loadOnTransitionStart && !s)) &&
              (t.params.lazy.checkInView ? c() : l());
          }),
          i("transitionEnd", () => {
            t.params.lazy.enabled &&
              !t.params.lazy.loadOnTransitionStart &&
              (t.params.lazy.checkInView ? c() : l());
          }),
          i("slideChange", () => {
            const {
              lazy: e,
              cssMode: n,
              watchSlidesProgress: i,
              touchReleaseOnEdges: r,
              resistanceRatio: o,
            } = t.params;
            e.enabled && (n || (i && (r || 0 === o))) && l();
          }),
          i("destroy", () => {
            t.$el &&
              t.$el
                .find(`.${t.params.lazy.loadingClass}`)
                .removeClass(t.params.lazy.loadingClass);
          }),
          Object.assign(t.lazy, { load: l, loadInSlide: a });
      }
      var Cc = n(90),
        Ec = n.n(Cc);
      Ci.registerPlugin(Ws);
      const Ac = [
          {
            name: "initPageLoading",
            fn: function () {
              let e = new sl(
                  document.querySelectorAll(
                    '[class*="page-header"] [data-animation="hero"]'
                  )
                ),
                t = new ll(
                  document.querySelectorAll(
                    '[class*="page-header"] [data-animation="heroWords"]'
                  )
                ),
                n = document.querySelectorAll(
                  '[class*="page-header"] [data-animation="heroWordsLoaded"]'
                ),
                i = document.getElementById("main-wrap"),
                r = document.querySelector("header"),
                o = document.querySelector(".scrollbar"),
                s = document.querySelector('[class*="page-header"] .layer-btn'),
                a = document.querySelectorAll(
                  '[class*="page-header"] .layer-1, [class*="page-header"] .layer-2,[class*="page-header"] .layer-3,[class*="page-header"] .layer-4'
                ),
                l = document.querySelector(".shape-overlays"),
                c = document.querySelector('[class*="page-content"]'),
                u = document.querySelector("canvas#world"),
                d = document.querySelector("footer");
              const p = document.querySelector(
                "#cmplz-cookiebanner-container .banner-a"
              );
              function f() {
                requestAnimationFrame(() => {
                  (i.style.cssText =
                    "opacity: 1; will-change: opacity; transition: opacity 0.4s ease;"),
                    e.in(),
                    t.in(),
                    Ci.timeline({
                      onComplete: () => {
                        va()
                          ? document
                              .querySelector("body")
                              .classList.add("isSafari")
                          : ((() => {
                              vl = new gl({
                                lerp: 0.1,
                                easing: (e) =>
                                  1 === e ? 1 : 1 - Math.pow(2, -10 * e),
                                smoothWheel: !0,
                              });
                              const e = document.getElementById("thumb"),
                                t = e.getBoundingClientRect().height;
                              vl.on("scroll", (n) => {
                                let {
                                  scroll: i,
                                  limit: r,
                                  velocity: o,
                                  direction: s,
                                  progress: a,
                                } = n;
                                document.documentElement.setAttribute(
                                  "data-scroll",
                                  `${i.targetScroll}`
                                );
                                let l = 0.0167 * window.innerWidth;
                                (e.style.transform = `translate3d(0,${
                                  a * (window.innerHeight - (t + 2 * l))
                                }px,0)`),
                                  Ws.update();
                              });
                              const n = (e) => {
                                vl.raf(e), requestAnimationFrame(n);
                              };
                              requestAnimationFrame(n),
                                e.addEventListener(
                                  "pointerdown",
                                  function (e) {
                                    yl = e.offsetY;
                                  },
                                  !1
                                ),
                                window.addEventListener(
                                  "pointermove",
                                  function (e) {
                                    if (!yl) return;
                                    e.preventDefault();
                                    const n =
                                      ((i = yl),
                                      (r = window.innerHeight - (t - yl)),
                                      (o = 0),
                                      ((e.clientY - i) * (vl.limit - o)) /
                                        (r - i) +
                                        o);
                                    var i, r, o;
                                    vl.scrollTo(n, { immediate: !0 });
                                  },
                                  !1
                                ),
                                window.addEventListener(
                                  "pointerup",
                                  function () {
                                    yl = null;
                                  },
                                  !1
                                ),
                                window.addEventListener(
                                  "DOMContentLoaded",
                                  (e) => {
                                    vl.scrollTo(0, { immediate: !0 });
                                  }
                                );
                            })(),
                            vl.stop(),
                            /MSIE|Trident|Edg/i.test(navigator.userAgent) &&
                              document
                                .querySelector("body")
                                .classList.add("isMicrosoft")),
                          window.scrollTo(0, 0),
                          document.body.classList.remove("no-scroll");
                      },
                    })
                      .to([l, d, a], { autoAlpha: 1, duration: 0.1 }, "+=0")
                      .to(c, { autoAlpha: 1, duration: 0.5 }, "-=0.1");
                });
              }
              setTimeout(() => {
                requestAnimationFrame(() => {
                  t.hide(),
                    window.scrollTo(0, 0),
                    document.body.classList.add("no-scroll"),
                    p &&
                      ((p.style.opacity = 0), (p.style.visibility = "hidden")),
                    (function () {
                      if (
                        "undefined" != typeof document &&
                        void 0 !== document.fonts
                      )
                        try {
                          if ("loaded" === document.fonts.status)
                            return void document.documentElement.classList.add(
                              "font-loaded"
                            );
                          document.fonts.ready
                            .then(() => {
                              document.documentElement.classList.add(
                                "font-loaded"
                              );
                            })
                            .catch(() => {
                              document.documentElement.classList.add(
                                "font-loaded"
                              );
                            }),
                            document.fonts.load('16px "Tusker Grotesk"');
                        } catch (e) {
                          document.documentElement.classList.add("font-loaded");
                        }
                      else
                        setTimeout(() => {
                          document.documentElement.classList.add("font-loaded");
                        }, 0);
                    })(),
                    Ci.timeline().set([r, a, s, l, c, d, o, n, u], {
                      autoAlpha: 0,
                    });
                });
              }, 0);
              let h = ol / 1e3;
              console.log(h),
                (function () {
                  requestAnimationFrame(() => {
                    Ci.delayedCall(0.1, f);
                  });
                })(h);
            },
          },
        ],
        kc = [
          {
            name: "menu",
            fn: function () {
              const e = document.querySelector("[data-menu-button]"),
                t = document.getElementById("main-menu"),
                n = document.querySelector(".scrollbar"),
                i = document.querySelector("#logo"),
                r = document.getElementById("header"),
                o = document.getElementById("mobile-menu"),
                s = o.querySelector(".button-close"),
                a = document.querySelector("body"),
                l = document.querySelector('[class*="page-header"]'),
                c = document.querySelector('[class*="page-content"]'),
                u = document.querySelector("footer"),
                d = o.querySelectorAll(
                  '[class*="main-links"] ul li a span>span'
                ),
                p = o.querySelectorAll('[class*="main-links"] .social ul li'),
                f = o.querySelector('[class*="footer"]'),
                h =
                  (document.querySelector("#logo .banner .day span"),
                  document.querySelector("#logo .banner .data .year em"),
                  document.querySelector("#logo .banner .data .month"),
                  new Date()),
                m =
                  (h.getDate().toString().padStart(2, "0"),
                  h.getFullYear().toString().slice(-2),
                  h.getMonth(),
                  document.querySelector('[data-action="reload"]')),
                g = o.querySelector('[class*="layer-btn"] .image'),
                v = document.getElementById("cmplz-cookiebanner-container"),
                y = document.getElementById("cmplz-manage-consent"),
                x = document.querySelector('[class*="lightbox-video"]'),
                b = document.querySelector('[class*="lightbox-video"] video');
              document.querySelector(
                '[class*="page-content"] .final-bg [class*="layer-btn"] .image'
              ),
                Ci.timeline({ repeat: -1 }).to([g], {
                  rotation: 360,
                  duration: 20,
                  ease: "none",
                });
              let w = !1;
              Ci.to(r, {
                scrollTrigger: {
                  trigger: r,
                  start: "top center",
                  end: "bottom 30px",
                  scrub: 0.1,
                  onLeave: () => {
                    i.classList.add("active");
                  },
                  onEnterBack: () => {
                    i.classList.remove("active");
                  },
                },
              }),
                Ws.create({
                  trigger: u,
                  start: "top top+=20%",
                  onEnter: () => {
                    i.classList.add("hide");
                  },
                  onLeaveBack: () => {
                    i.classList.remove("hide");
                  },
                }),
                Ci.to(r, {
                  scrollTrigger: {
                    trigger: r,
                    start: "top center",
                    end: "bottom 30px",
                    scrub: 0.1,
                    onLeave: () => {
                      i.classList.add("active");
                    },
                    onEnterBack: () => {
                      i.classList.remove("active");
                    },
                  },
                });
              const S = (e) =>
                  e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1,
                _ = document.querySelector(".shape-overlays"),
                T = new (class {
                  constructor(e) {
                    (this.elm = e),
                      (this.path = e.querySelectorAll("path")),
                      (this.numPoints = 4),
                      (this.duration = 800),
                      (this.delayPointsArray = []),
                      (this.delayPointsMax = 180),
                      (this.delayPerPath = 70),
                      (this.timeStart = Date.now()),
                      (this.isOpened = !1),
                      (this.isAnimating = !1);
                  }
                  toggle() {
                    this.isAnimating = !0;
                    const e = Math.random() * Math.PI * 2;
                    for (var t = 0; t < this.numPoints; t++) {
                      const n = (t / (this.numPoints - 1)) * Math.PI * 2;
                      this.delayPointsArray[t] =
                        ((Math.sin(n + e) + 1) / 2) * this.delayPointsMax;
                    }
                    !1 === this.isOpened ? this.open() : this.close();
                  }
                  open() {
                    (this.isOpened = !0),
                      this.elm.classList.add("is-opened"),
                      (this.timeStart = Date.now()),
                      this.renderLoop();
                  }
                  close() {
                    (this.isOpened = !1),
                      this.elm.classList.remove("is-opened"),
                      (this.timeStart = Date.now()),
                      this.renderLoop();
                  }
                  updatePath(e) {
                    const t = [];
                    for (var n = 0; n < this.numPoints; n++)
                      t[n] =
                        100 *
                        S(
                          Math.min(
                            Math.max(e - this.delayPointsArray[n], 0) /
                              this.duration,
                            1
                          )
                        );
                    let i = "";
                    i += this.isOpened ? `M 0 0 V ${t[0]} ` : `M 0 ${t[0]} `;
                    for (n = 0; n < this.numPoints - 1; n++) {
                      const e = ((n + 1) / (this.numPoints - 1)) * 100,
                        r = e - ((1 / (this.numPoints - 1)) * 100) / 2;
                      i += `C ${r} ${t[n]} ${r} ${t[n + 1]} ${e} ${t[n + 1]} `;
                    }
                    return (i += this.isOpened ? "V 0 H 0" : "V 100 H 0"), i;
                  }
                  render() {
                    if (this.isOpened)
                      for (var e = 0; e < this.path.length; e++)
                        this.path[e].setAttribute(
                          "d",
                          this.updatePath(
                            Date.now() -
                              (this.timeStart + this.delayPerPath * e)
                          )
                        );
                    else
                      for (e = 0; e < this.path.length; e++)
                        this.path[e].setAttribute(
                          "d",
                          this.updatePath(
                            Date.now() -
                              (this.timeStart +
                                this.delayPerPath * (this.path.length - e - 1))
                          )
                        );
                  }
                  renderLoop() {
                    this.render(),
                      Date.now() - this.timeStart <
                      this.duration +
                        this.delayPerPath * (this.path.length - 1) +
                        this.delayPointsMax
                        ? requestAnimationFrame(() => {
                            this.renderLoop();
                          })
                        : (this.isAnimating = !1);
                  }
                })(_),
                C = va()
                  ? "power1.in"
                  : Xi.create("custom", "0.25, 0.1, 0.25, 1.0");
              e.addEventListener("click", () => {
                if (w) return;
                w = !0;
                let r = document.querySelectorAll(
                  ".lightbox.active, .popup.active"
                );
                v &&
                  ((v.style.opacity = 0),
                  (v.style.visibility = "hidden"),
                  (y.style.opacity = 0),
                  (y.style.visibility = "hidden")),
                  r.length > 0 &&
                    r.forEach((e) => {
                      e.classList.remove("active");
                    }),
                  x &&
                    (x.setAttribute("data-visible", "false"),
                    b.pause(),
                    (b.currentTime = 0)),
                  Ci.timeline({ onComplete: () => (w = !1) })
                    .set([l, c, u, e, t], { autoAlpha: 0 })
                    .set([i, n], { opacity: 0 })
                    .add(
                      (o.setAttribute("aria-expanded", "true"),
                      void a.classList.add("no-scroll"))
                    )
                    .add(T.toggle())
                    .to(
                      d,
                      { duration: 1, ease: C, y: 0, opacity: 1, stagger: 0.05 },
                      "+=0.8"
                    )
                    .to(p, { duration: 1, ease: C, opacity: 1, stagger: 0.05 })
                    .to(s, { duration: 0.5, ease: C, opacity: 1 })
                    .to(
                      f,
                      { duration: 0.5, ease: "power2.in", opacity: 1 },
                      "-=0.8"
                    );
              }),
                s.addEventListener("click", () => {
                  if (!w) {
                    if (((w = !0), T.isAnimating)) return !1;
                    Ci.timeline({ onComplete: () => (w = !1) })
                      .add(
                        (o.setAttribute("aria-expanded", "false"),
                        void a.classList.remove("no-scroll"))
                      )
                      .set(l, { autoAlpha: 1 })
                      .set(c, { autoAlpha: 1 })
                      .set(u, { autoAlpha: 1 })
                      .set(e, { autoAlpha: 1 })
                      .to(p, {
                        duration: 1,
                        ease: C,
                        opacity: 0,
                        stagger: 0.05,
                      })
                      .to(f, {
                        duration: 0.5,
                        ease: "power2.in",
                        opacity: 0,
                        onComplete: () => {
                          f.classList.remove("animate");
                        },
                      })
                      .to(d, {
                        duration: 0.8,
                        ease: C,
                        y: 100,
                        opacity: 0,
                        stagger: -0.05,
                        onStart: () => {
                          T.toggle();
                        },
                        onComplete: () => {
                          Ci.set(i, { opacity: 1, ease: C }),
                            Ci.set(t, { autoAlpha: 1, ease: C }),
                            Ci.set(n, { opacity: 1, ease: C }),
                            v &&
                              ((v.style.opacity = 1),
                              (v.style.visibility = "visible"),
                              (y.style.opacity = 1),
                              (y.style.visibility = "visible"));
                        },
                      })
                      .to(s, { duration: 0.5, ease: C, opacity: 0 });
                  }
                }),
                m.addEventListener("click", (e) => {
                  e.preventDefault(), location.reload();
                }),
                document.querySelectorAll("[data-year]").forEach((e) => {
                  e.innerHTML = new Date().getFullYear();
                });
              const E = window.matchMedia(
                "(hover: hover) and (pointer: fine)"
              ).matches;
              window.addEventListener("resize", () => {
                E && document.getElementById("resize").classList.add("visible");
              });
            },
          },
        ],
        Mc = [
          {
            name: "marqueeScrollClassic",
            fn: function () {
              if (!document.querySelector("#marquee")) return;
              let e = document.querySelector(
                '#marquee [class*="marquee-container"] [class*="marquee--inner"]'
              );
              const t = Array.from(e.children);
              t.length;
              let n = e.scrollWidth;
              const i = e.parentElement.offsetWidth;
              for (; n < 2 * i; )
                t.forEach((t) => {
                  e.appendChild(t.cloneNode(!0));
                }),
                  (n = e.scrollWidth);
              Ci.set(e, { x: 0 }),
                Ci.to(e, {
                  x: "-=" + e.scrollWidth / 2,
                  duration: 30,
                  ease: "none",
                  repeat: -1,
                  modifiers: {
                    x: Ci.utils.unitize(
                      (t) => parseFloat(t) % (e.scrollWidth / 2)
                    ),
                  },
                });
            },
          },
          {
            name: "moveClouds",
            fn: function () {
              let e = document.querySelector('[class*="page-header"]');
              Ci.to("[class*='page-header'] .layer-1", {
                x: "-=10%",
                scrollTrigger: { trigger: e, start: "top top", scrub: !0 },
              }),
                Ci.to(
                  "[class*='page-header'] .layer-2, [class*='page-header'] .layer-3",
                  {
                    x: "-=50%",
                    scrollTrigger: { trigger: e, start: "top top", scrub: !0 },
                  }
                ),
                Ci.to("[class*='page-header'] .layer-4", {
                  x: "-=20%",
                  scrollTrigger: { trigger: e, start: "top top", scrub: !0 },
                });
            },
          },
          {
            name: "btnMove",
            fn: function () {
              const e = document.querySelector(
                  '[class*="page-header"] [class*="layer-btn"] .move'
                ),
                t = document.querySelector(
                  '#intro [class*="layer-btn"] .btn .move'
                ),
                n = document.querySelector(
                  '[class*="page-content"] .after-circle-clip [class*="layer-btn"] .move'
                ),
                i = document.querySelector(
                  '[class*="page-content"] .final-bg [class*="layer-btn"] .image'
                );
              Ci.timeline({ repeat: -1 }).to([e, t, n, i], {
                rotation: 360,
                duration: 20,
                ease: "none",
              });
            },
          },
        ],
        Pc = [],
        Lc = [
          {
            name: "logoAnimation",
            fn: function () {
              let e = document.getElementById("logo"),
                t = document.querySelector("header"),
                n = Ci.utils.toArray("section[data-bg='dark']");
              Ci.to(t, {
                scrollTrigger: {
                  trigger: t,
                  start: "top center",
                  end: "bottom 30px",
                  scrub: 0.1,
                  onLeave: () => {
                    e.classList.add("active");
                  },
                  onEnterBack: () => {
                    e.classList.remove("active");
                  },
                },
              }),
                n.forEach((t, n) => {
                  Ci.to(t, {
                    scrollTrigger: {
                      trigger: t,
                      start: "top center",
                      end: "bottom center",
                      scrub: 0.1,
                      onEnter: () => {
                        e.className += " changing";
                      },
                      onEnterBack: () => {
                        e.className += " changing";
                      },
                      onLeave: () => {
                        e.classList.remove("changing");
                      },
                      onLeaveBack: () => {
                        e.classList.remove("changing");
                      },
                    },
                  });
                });
            },
          },
          {
            name: "popup",
            fn: function () {
              let e = document.querySelectorAll("[class*='popup']"),
                t = document.querySelectorAll(
                  "a[data-popup-id], [class*='btn'][data-popup-id]"
                );
              e.forEach((e) => {
                let t = e.querySelector(".close");
                e.getAttribute("data-popup-id");
                t.addEventListener("click", () => {
                  e.classList.remove("active"), void 0 !== vl && vl.start();
                });
              }),
                t.forEach((e) => {
                  e.addEventListener("click", () => {
                    void 0 !== vl && vl.stop();
                    const t = e.getAttribute("data-popup-id");
                    document
                      .querySelector(`[class*='popup'][data-popup-id='${t}']`)
                      .classList.add("active");
                  });
                });
            },
          },
          {
            name: "lightboxVideo",
            fn: function () {
              if (!document.querySelector("[class*='lightbox-video']")) return;
              const e = document.querySelector(
                  '[class*="page-header"] [class*="layer-btn"][data-video]'
                ),
                t = document.querySelector('[class*="lightbox-video"]'),
                n = document.querySelector(
                  '[class*="lightbox-video"] [class*="close"]'
                ),
                i = document.querySelector(
                  '[class*="lightbox-video"] [class*="controls--play"]'
                ),
                r = document.querySelector(
                  '[class*="lightbox-video"] [class*="controls--stop"]'
                ),
                o = document.querySelector('[class*="lightbox-video"] video'),
                s = document.querySelector(
                  '[class*="page-content"] section#intro'
                ),
                a = () => {
                  o.paused
                    ? (o.play(),
                      r.classList.add("active"),
                      i.classList.remove("active"))
                    : (o.pause(),
                      r.classList.remove("active"),
                      i.classList.add("active"));
                };
              e.addEventListener("click", () => {
                if (o.classList.contains("lazy")) {
                  for (var e in o.children) {
                    var n = o.children[e];
                    "string" == typeof n.tagName &&
                      "SOURCE" === n.tagName &&
                      (n.src = n.dataset.src);
                  }
                  o.load(), o.classList.remove("lazy");
                }
                t.setAttribute("data-visible", "true"), o.play();
              }),
                n.addEventListener("click", () => {
                  t.setAttribute("data-visible", "false"),
                    o.pause(),
                    (o.currentTime = 0);
                }),
                i.addEventListener("click", a),
                r.addEventListener("click", a),
                t.addEventListener("mouseenter", () => {
                  n.classList.add("active"),
                    o.paused
                      ? i.classList.add("active")
                      : r.classList.add("active");
                }),
                t.addEventListener("mouseleave", () => {
                  i.classList.remove("active"),
                    r.classList.remove("active"),
                    n.classList.remove("active");
                }),
                Ci.to(s, {
                  scrollTrigger: {
                    trigger: s,
                    start: "top top",
                    end: "top 10%",
                    scrub: 0.1,
                    onLeave: () => {
                      t.classList.add("move");
                    },
                    onEnterBack: () => {
                      t.classList.remove("move");
                    },
                  },
                });
            },
          },
          {
            name: "initAnimationsHeading",
            fn: () => {
              const e = document.querySelectorAll('[data-animation="split"]');
              for (let t = 0; t < e.length; t++) cl(e[t]);
            },
          },
          {
            name: "initAnimationsLines",
            fn: () => {
              const e = document.querySelectorAll('[data-animation="lines"]');
              for (let t = 0; t < e.length; t++) ul(e[t]);
            },
          },
          {
            name: "circleClip",
            fn: function () {
              const e = document.querySelector("section.layers"),
                t = document.getElementById("intro");
              if (e && t) {
                const n = Ci.utils.toArray(".circle-clip .panel").length,
                  i = document.querySelector("section.layers .layer-1"),
                  r = document.querySelector("section.layers .layer-2"),
                  o = document.querySelector("section.layers .layer-3"),
                  s = document.querySelector("section.layers .layer-4"),
                  a = document.querySelector("section.layers .layer-5");
                let l = document.querySelectorAll(
                    "section.after-circle-clip .wrapimage-element img"
                  )[1],
                  c = document.querySelectorAll(
                    "section.circle-clip .wrapimage-element img"
                  )[1];
                const u = t.offsetHeight;
                (e.style.top = u + "px"),
                  Ci.timeline({
                    scrollTrigger: {
                      trigger: ".circle-clip",
                      start: "top top",
                      end: "+=" + (100 * n + 1) + "%",
                      scrub: !0,
                      pin: !0,
                      onEnter: () => {
                        setTimeout(async () => {
                          Ec().loader.unveil(l), Ec().loader.unveil(c);
                        }, 1e3);
                      },
                    },
                  }).to(".circle-clip", {
                    clipPath: "circle(71% at 50% 50%)",
                    duration: 1 / n,
                  }),
                  Ci.to(i, {
                    y: "+=220%",
                    x: "-=50%",
                    scale: () => 1.2,
                    ease: "none",
                    scrollTrigger: {
                      trigger: e,
                      start: "top center",
                      end: "bottom center",
                      scrub: !0,
                    },
                  }),
                  Ci.to(r, {
                    y: "+=250%",
                    x: "-=30%",
                    scale: () => 1.4,
                    ease: "none",
                    scrollTrigger: {
                      trigger: e,
                      start: "top center",
                      end: "bottom center",
                      scrub: !0,
                    },
                  }),
                  Ci.to(o, {
                    y: "+=250%",
                    x: "+=50%",
                    scale: () => 1.2,
                    ease: "none",
                    scrollTrigger: {
                      trigger: e,
                      start: "top center",
                      end: "bottom center",
                      scrub: !0,
                    },
                  }),
                  Ci.to(s, {
                    y: "+=300%",
                    x: "+=150%",
                    scale: () => 1.4,
                    ease: "none",
                    scrollTrigger: {
                      trigger: e,
                      start: "top center",
                      end: "bottom center",
                      scrub: !0,
                    },
                  }),
                  Ci.to(a, {
                    y: "-=50%",
                    scale: () => 1.4,
                    ease: "none",
                    scrollTrigger: {
                      trigger: e,
                      start: "top center",
                      end: "bottom center",
                      scrub: !0,
                    },
                  });
              }
            },
          },
          {
            name: "changeBg",
            fn: function () {
              let e = document.querySelector(
                'section.after-circle-clip [class*="layer-btn"]'
              );
              if (e) {
                let t = document.querySelectorAll(
                    "section.after-circle-clip .wrapimage-element img, section.circle-clip .wrapimage-element img"
                  ),
                  n = 1;
                const i = () => {
                  n < t.length / 2 ? n++ : (n = 1),
                    t.forEach((e) => {
                      let i = e.getAttribute("data-order");
                      e.classList.remove("active"),
                        t.forEach((e) => {
                          let t = e.getAttribute("data-order");
                          if (
                            (e.classList.contains("lazyloaded") ||
                              t != n + 1 ||
                              Ec().loader.unveil(e),
                            t == n)
                          ) {
                            e.classList.add("active");
                            let t = e.getAttribute("data-overlay");
                            e.parentNode.parentNode.style.backgroundColor = t;
                          }
                        }),
                        i == n && e.classList.add("active");
                    });
                };
                e.addEventListener("click", i);
              }
            },
          },
          {
            name: "moveCards",
            fn: function () {
              if (zc) {
                const e = Ci.utils.toArray(".stackingcards .card-element"),
                  t = Ci.utils.toArray(
                    ".stackingcards .card-element:not(.starter)"
                  ),
                  n = document.querySelector(
                    ".stackingcards .card-element.starter"
                  );
                let i = Ic ? 0 : 0.1 * window.innerHeight;
                e.forEach((e, t) => {
                  Ci.set(e, {
                    rotationZ: t % 2 == 0 ? 1 * t + "deg" : -1 * t + "deg",
                    ease: "none",
                  });
                });
                const r = Ci.timeline({
                  scrollTrigger: {
                    trigger: ".stackingcards",
                    start: `top+=${i} top`,
                    pin: !0,
                    scrub: 1,
                    end: "+=" + 100 * (e.length + 1) + "5",
                    markers: !1,
                  },
                });
                t.forEach((e, t) => {
                  r.to(e, {
                    xPercent: t % 2 == 0 ? -125 : 125,
                    duration: 1,
                    ease: "none",
                    onStart: () =>
                      Ci.to(e, { rotationZ: "0deg", ease: "power2" }),
                    onReverseComplete: () =>
                      Ci.to(e, {
                        rotationZ: t % 2 == 0 ? 1 * t + "deg" : -1 * t + "deg",
                        ease: "power2",
                      }),
                  });
                }),
                  r.to(n, {
                    onStart: () =>
                      Ci.to(n, { rotationZ: "0deg", ease: "power2" }),
                    onReverseComplete: () =>
                      Ci.to(n, { rotationZ: t.length + "deg", ease: "power2" }),
                  });
              }
            },
          },
          {
            name: "marqueeTitle",
            fn: function () {
              let e = document.querySelector(".marquee-title .title-image");
              Ci.set(e, { yPercent: -45, rotateZ: "5deg" }),
                Ci.to(e, {
                  yPercent: 0,
                  rotateZ: "0deg",
                  ease: "none",
                  scrollTrigger: {
                    trigger: ".marquee-title",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                  },
                });
            },
          },
          {
            name: "marqueeScrolling",
            fn: function () {
              let e = 1;
              const t = document.querySelectorAll(
                  ".marquee-scrolling .marquee"
                ),
                n = Ci.timeline({
                  repeat: -1,
                  yoyo: !1,
                  onReverseComplete() {
                    this.totalTime(this.rawTime() + 10 * this.duration());
                  },
                });
              t.forEach((e) => {
                n.to(
                  e,
                  {
                    xPercent: "true" === e.dataset.reversed ? -100 : 100,
                    repeat: 0,
                    ease: "linear",
                    duration: 12,
                  },
                  "<"
                );
              }),
                Ws.create({
                  onUpdate(t) {
                    t.direction !== e && (e *= -1),
                      n.timeScale((12 * t.getVelocity()) / 5e4),
                      Ci.to(n, { timeScale: e });
                  },
                });
            },
          },
          {
            name: "transitionOut",
            fn: function () {
              let e = "";
              (e = document.querySelectorAll(
                'a[href^="' + window.location.origin + '"]:not([href*="#"]'
              )),
                document.querySelector("main");
              const t = document.getElementById("cmplz-cookiebanner-container"),
                n = document.getElementById("cmplz-manage-consent");
              e.forEach((e) => {
                e.addEventListener("click", function (e) {
                  e.preventDefault();
                  let i = this.getAttribute("href");
                  t &&
                    ((t.style.opacity = 0),
                    (t.style.visibility = "hidden"),
                    (n.style.opacity = 0),
                    (n.style.visibility = "hidden")),
                    Ci.to("#leave-page", {
                      duration: 0.6,
                      height: "100%",
                      ease: "cubic-bezier(.77, 0, .175, 1)",
                    }),
                    setTimeout(function () {
                      window.location = i;
                    }, 700);
                });
              }),
                (window.onpageshow = function (e) {
                  e.persisted && window.location.reload();
                });
            },
          },
          {
            name: "cursor",
            fn: () => {
              const e = document.querySelector(".cursor--circle--small"),
                t = e.querySelector(".default"),
                n = e.querySelector(".click"),
                i = e.querySelector(".grab"),
                r = e.querySelector(".default-hover"),
                o = e.querySelector(".click-hover");
              let s,
                a,
                l = !1,
                c = !1,
                u = !1,
                d = !1,
                p = !1,
                f = !1;
              const h = document.querySelectorAll(
                '[class*="lightbox"] .close, [class*="lightbox"] [class*="controls"], .controls [class*="selector"], .controls .add,  .filtr-item a, .middle-links a, a[class*="simple"],.swiper-pagination-clickable .swiper-pagination-bullet, button[class*="button-close"], [class*="social"] a, [class*="button-wrapper"], [data-popup-id], [class*="btn"], a[href*="/"],a[href*=".html"],a[href*="mailto:"],a[href*=".com"],a[href*=".it"], a[href*="javascript"], #thumb, #theme-mode-light, #theme-mode-dark, [class*="action"]'
              );
              function m(e) {
                [t, n, i, r, o].forEach((e) => {
                  e && (e.style.display = "none");
                }),
                  e && (e.style.display = "block");
              }
              function g() {
                m(t);
              }
              function v() {
                clearTimeout(s),
                  clearInterval(a),
                  c && (c = !1),
                  (s = setTimeout(() => {
                    (c = !0),
                      (l = !1),
                      (a = setInterval(() => {
                        c
                          ? (m(l ? (d ? r : t) : d ? o : n), (l = !l))
                          : clearInterval(a);
                      }, 700));
                  }, 4e3));
              }
              function y() {
                m(i);
              }
              return (
                g(),
                document.addEventListener("mousemove", (t) => {
                  u ||
                    ((e.style.top = `${t.clientY}px`),
                    (e.style.left = `${t.clientX}px`)),
                    d ? m(r) : g(),
                    p && ((f = !0), m(n)),
                    v();
                }),
                document.addEventListener("mousedown", (e) => {
                  (p = !0), (f = !1), m(d ? o : n);
                }),
                document.addEventListener("mouseup", (e) => {
                  (p = !1), f && (f = !1), d ? m(r) : g();
                }),
                h.forEach((e) => {
                  e.addEventListener("mouseenter", () => {
                    (d = !0), m(r);
                  }),
                    e.addEventListener("mouseleave", () => {
                      (d = !1), g();
                    });
                }),
                {
                  showGrabCursor: y,
                  setIsGrabbing: (e) => {
                    (u = e), e ? y() : d ? m(r) : g();
                  },
                }
              );
            },
          },
          {
            name: "menuTitle",
            fn: function () {
              let e = document.querySelector(".menu-title .title-image");
              Ci.set(e, { yPercent: 0, rotateZ: "0deg" }),
                Ci.to(e, {
                  yPercent: -10,
                  rotateZ: "5deg",
                  ease: "none",
                  scrollTrigger: {
                    trigger: ".menu-title",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                  },
                });
            },
          },
          {
            name: "menuCards",
            fn: function () {
              const e = Ci.utils.toArray(".menu-wrap [class*='menu-element']"),
                t = document.querySelector(
                  ".final-bg .wrapimage-element img:first-of-type"
                );
              e.forEach((e, n) => {
                Ci.set(e, { scale: () => 0.9 }),
                  n > 0 && Ci.set(e.querySelector(".info"), { height: 0 }),
                  Ci.to(e, {
                    scale: () => 1,
                    ease: "none",
                    scrollTrigger: {
                      trigger: e,
                      start: "top center",
                      end: "bottom center",
                      scrub: !0,
                    },
                    onComplete: () => {
                      e.classList.add("hovered"),
                        t &&
                          (t.classList.contains("lazyloaded") ||
                            lazySizes.loader.unveil(t));
                    },
                    onReverseComplete: () => {
                      e.classList.remove("hovered");
                    },
                  });
              });
            },
          },
          {
            name: "carouselCases",
            fn: function () {
              if (window.matchMedia("(max-width: 1199px)").matches)
                new xc("[class*='carousel-cases']", {
                  modules: [wc, _c, Tc],
                  slidesPerView: 2,
                  spaceBetween: 20,
                  speed: 1e3,
                  preloadImages: !0,
                  lazy: {
                    loadPrevNext: !0,
                    loadPrevNextAmount: 2,
                    loadOnTransitionStart: !0,
                  },
                  speed: 800,
                  pagination: {
                    el: ".carousel-cases .swiper-pagination",
                    clickable: !0,
                  },
                  breakpoints: {
                    1200: { slidesPerView: 3, enabled: !1 },
                    768: { slidesPerView: 2, effect: !1, spaceBetween: 20 },
                    300: { slidesPerView: 1, effect: !1, spaceBetween: 16 },
                  },
                });
            },
          },
          {
            name: "pinningHorizontalScroll",
            fn: function () {
              if (!document.querySelector("#section-pin")) return;
              let e = document.querySelector("#section-pin"),
                t = Ci.utils.toArray("#section-pin .image-wrapper");
              const n = t[0].offsetWidth;
              let i = window.matchMedia("(min-width: 1200px)"),
                r = window.matchMedia("(max-width: 1199px)").matches
                  ? 0
                  : 0.06 * window.innerHeight;
              if (i.matches && e) {
                Ci.to(e, {
                  x: () => -n * (t.length - 3) + "px",
                  ease: "none",
                  scrollTrigger: {
                    trigger: "#section-to-pin",
                    start: `top+=${r} top`,
                    end: "+=" + 100 * (t.length - 2) + "5",
                    pin: !0,
                    scrub: !0,
                  },
                });
              }
            },
          },
          {
            name: "waterScroll",
            fn: function () {
              const e = document.querySelector("#water-bg .pattern"),
                t = document.querySelector("#water-bg-down .pattern");
              Ci.to(e, {
                x: "-=1000",
                scrollTrigger: {
                  trigger: "#water-bg",
                  start: "bottom bottom",
                  scrub: !0,
                },
              }),
                Ci.to(t, {
                  x: "-=1000",
                  scrollTrigger: {
                    trigger: "#water-bg-down",
                    start: "bottom bottom",
                    scrub: !0,
                  },
                });
            },
          },
          {
            name: "carouselChallenges",
            fn: function () {
              if (window.matchMedia("(max-width: 1199px)").matches)
                new xc("[class*='carousel-challenges']", {
                  modules: [_c, Tc],
                  slidesPerView: 2,
                  spaceBetween: 20,
                  speed: 1e3,
                  preloadImages: !0,
                  lazy: {
                    loadPrevNext: !0,
                    loadPrevNextAmount: 2,
                    loadOnTransitionStart: !0,
                  },
                  speed: 800,
                  pagination: {
                    el: ".carousel-challenges .swiper-pagination",
                    clickable: !0,
                  },
                  breakpoints: {
                    1200: { slidesPerView: 3, enabled: !1 },
                    768: {
                      slidesPerView: "auto",
                      effect: !1,
                      spaceBetween: 50,
                    },
                    300: {
                      slidesPerView: "auto",
                      effect: !1,
                      spaceBetween: 20,
                    },
                  },
                });
            },
          },
          {
            name: "randomBg",
            fn: function () {
              if (!document.querySelector("section.final-bg")) return;
              let e = document.querySelector(
                  'section.final-bg [class*="layer-btn"]'
                ),
                t = document.querySelectorAll(
                  "section.final-bg .wrapimage-element img"
                ),
                n = 1,
                i = t.length;
              e.addEventListener("click", () => {
                let e = n;
                do {
                  n = xl(1 == e ? 2 : 1, i);
                } while (n == e);
                t.forEach((e) => {
                  let t = e.getAttribute("data-order");
                  e.classList.remove("active"),
                    t == n &&
                      (e.classList.contains("lazyloaded") ||
                        Ec().loader.unveil(e),
                      e.classList.add("active"));
                });
              });
            },
          },
          {
            name: "moveCloudsFinal",
            fn: function () {
              if (!document.querySelector("section.clouds")) return;
              let e = document.querySelector("section.clouds"),
                t = document.querySelector("footer").offsetHeight;
              Ci.to(e.querySelector(".layer-1"), {
                x: "-=10%",
                scrollTrigger: {
                  trigger: e,
                  start: "top-=200px top",
                  end: "bottom+=" + t / 3 + "px center",
                  scrub: !0,
                },
              }),
                Ci.to(
                  [e.querySelector(".layer-2"), e.querySelector(".layer-3")],
                  {
                    x: "-=50%",
                    scrollTrigger: { trigger: e, start: "top top", scrub: !0 },
                  }
                ),
                Ci.to(e.querySelector(".layer-4"), {
                  x: "-=20%",
                  scrollTrigger: { trigger: e, start: "top top", scrub: !0 },
                });
            },
          },
          {
            name: "layerBtnHover",
            fn: () => {
              document.querySelectorAll('[class*="layer-btn"]').forEach((e) => {
                ("ontouchstart" in window || navigator.maxTouchPoints > 0) &&
                  (e.addEventListener("touchstart", () => {
                    e.classList.add("hovered");
                  }),
                  e.addEventListener("touchend", () => {
                    setTimeout(() => {
                      e.classList.remove("hovered");
                    }, 300);
                  }));
              });
            },
          },
        ],
        Dc = async (e) => {
          for (const t of e)
            try {
              await t.fn(), console.log(`✓ ${t.name} loaded`);
            } catch (e) {
              console.error(`× ${t.name} failed:`, e);
            }
        };
      async function Oc() {
        const e = performance.now();
        try {
          console.log("Loading critical features..."),
            await Dc(Ac),
            console.log("Loading primary features..."),
            await Dc(kc),
            setTimeout(async () => {
              console.log("Loading secondary features..."), await Dc(Mc);
            }, 100),
            "requestIdleCallback" in window
              ? requestIdleCallback(async () => {
                  console.log("Loading non-critical features..."), await Dc(Pc);
                })
              : setTimeout(async () => {
                  console.log("Loading non-critical features..."), await Dc(Pc);
                }, 300),
            "requestIdleCallback" in window
              ? requestIdleCallback(async () => {
                  console.log("Loading other features..."), await Dc(Lc);
                })
              : setTimeout(async () => {
                  console.log("Loading non-critical features..."), await Dc(Lc);
                }, 500);
          const t = performance.now();
          console.log(`Total initialization time: ${Math.round(t - e)}ms`);
        } catch (e) {
          console.error("Critical initialization error:", e);
        }
      }
      "loading" === document.readyState
        ? document.addEventListener("DOMContentLoaded", Oc)
        : setTimeout(() => Oc(), 0),
        window.addEventListener("load", () => {
          setTimeout(() => {
            window.requestIdleCallback
              ? requestIdleCallback(() => {
                  Bc();
                })
              : setTimeout(() => {
                  Bc();
                }, 1);
          }, 2e3);
        });
      function Bc() {
        const e = document.getElementById("world"),
          t = document.querySelectorAll(
            '[class*="page-header"] [data-animation="heroWords"]'
          ),
          n = document.querySelectorAll(
            '[class*="page-header"] [data-animation="heroWords"]'
          ),
          i = document.querySelectorAll(
            '[class*="page-header"] [data-animation="heroWordsLoaded"]'
          ),
          r = document.querySelector(".scrollbar"),
          o = document.querySelector("header"),
          s = document.querySelector('[class*="page-header"] .layer-btn'),
          a = document.querySelector("#cmplz-cookiebanner-container .banner-a");
        (e.style.position = "absolute"),
          (e.style.width = "100%"),
          (e.style.height = "100%"),
          (e.style.zIndex = "1"),
          Ci.set("canvas#world", { autoAlpha: 1, duration: 1, ease: "power2" });
        const l = new ll(t),
          c = window.matchMedia("(max-width: 480px)").matches,
          u = window.matchMedia("(max-width: 991px)").matches,
          d = window.matchMedia("(max-width: 1199px)").matches,
          p = window.matchMedia(
            "(min-width: 1200px) and (max-width: 1600px)"
          ).matches,
          f = window.matchMedia(
            "(min-width: 1601px) and (max-width: 1920px)"
          ).matches;
        let h, m;
        let g;
        g = c
          ? { suffix: "mobile", duplicate: 1 }
          : u
          ? { suffix: "large", duplicate: 1 }
          : d
          ? { suffix: "large", duplicate: 1 }
          : p
          ? { suffix: "notebook", duplicate: 1 }
          : f
          ? { suffix: "", duplicate: 1 }
          : { suffix: "", duplicate: 2 };
        let v = "";
        v = "../wp-content/themes/fra-portfolio/dist/";
        (h = Array.from({ length: 36 }, (e, t) => {
          const n = t + 1;
          let i = g.suffix ? `-${g.suffix}` : "";
          return `${v}images/object/items/menu-object-${n}${i}-clean.png`;
        })),
          (m = g.duplicate),
          l.out(200);
        new wl(h, {
          container: e,
          duplicate: m,
          callback: () => {
            requestAnimationFrame(() => {
              l.out(200),
                requestAnimationFrame(() => {
                  const e = new ll(i);
                  requestAnimationFrame(() => {
                    Ci.set(n, { autoAlpha: 0, display: "none" }),
                      requestAnimationFrame(() => {
                        Ci.set([o, i, r, s], { autoAlpha: 1, duration: 0.4 }),
                          requestAnimationFrame(() => {
                            e.in(),
                              void 0 !== vl && vl.start(),
                              requestAnimationFrame(() => {
                                a &&
                                  Ci.to(a, {
                                    autoAlpha: 1,
                                    duration: 1,
                                    ease: "power2",
                                    delay: 2,
                                  });
                              });
                          });
                      });
                  });
                });
            });
          },
        });
      }
      ({
        metrics: {},
        init() {
          const e = new PerformanceObserver((e) => {
              for (const t of e.getEntries())
                "navigation" === t.entryType &&
                  (this.metrics.navigationTiming = {
                    pageLoadTime: Math.round(t.loadEventEnd),
                    domContentLoaded: Math.round(t.domContentLoadedEventEnd),
                    firstByte: Math.round(t.responseStart),
                    domInteractive: Math.round(t.domInteractive),
                    domComplete: Math.round(t.domComplete),
                  });
            }),
            t = new PerformanceObserver((e) => {
              for (const t of e.getEntries())
                this.metrics.paintTiming || (this.metrics.paintTiming = {}),
                  (this.metrics.paintTiming[t.name] = Math.round(t.startTime));
            }),
            n = new PerformanceObserver((e) => {
              const t = e.getEntries(),
                n = t[t.length - 1];
              this.metrics.lcp = Math.round(n.startTime);
            }),
            i = new PerformanceObserver((e) => {
              for (const t of e.getEntries())
                this.metrics.fid = Math.round(t.processingStart - t.startTime);
            }),
            r = new PerformanceObserver((e) => {
              let t = 0;
              for (const n of e.getEntries())
                n.hadRecentInput || (t += n.value);
              this.metrics.cls = Math.round(1e3 * t) / 1e3;
            });
          try {
            e.observe({ entryTypes: ["navigation"] }),
              t.observe({ entryTypes: ["paint"] }),
              n.observe({ entryTypes: ["largest-contentful-paint"] }),
              i.observe({ entryTypes: ["first-input"] }),
              r.observe({ entryTypes: ["layout-shift"] });
          } catch (e) {
            console.warn("Performance API not fully supported:", e);
          }
          window.addEventListener("load", () => {
            setTimeout(() => this.logMetrics(), 1e3);
          });
        },
        logMetrics() {
          console.group("📊 Performance Metrics"),
            this.metrics.navigationTiming &&
              console.log("Navigation Timing:", {
                "Page Load": `${this.metrics.navigationTiming.pageLoadTime}ms`,
                "DOM Content Loaded": `${this.metrics.navigationTiming.domContentLoaded}ms`,
                "Time to First Byte": `${this.metrics.navigationTiming.firstByte}ms`,
                "DOM Interactive": `${this.metrics.navigationTiming.domInteractive}ms`,
                "DOM Complete": `${this.metrics.navigationTiming.domComplete}ms`,
              }),
            this.metrics.paintTiming &&
              console.log("Paint Timing:", {
                "First Paint": `${this.metrics.paintTiming["first-paint"]}ms`,
                "First Contentful Paint": `${this.metrics.paintTiming["first-contentful-paint"]}ms`,
              }),
            this.metrics.lcp &&
              console.log("Largest Contentful Paint:", `${this.metrics.lcp}ms`),
            this.metrics.fid &&
              console.log("First Input Delay:", `${this.metrics.fid}ms`),
            this.metrics.cls &&
              console.log("Cumulative Layout Shift:", this.metrics.cls),
            console.groupEnd();
        },
      }.init());
      let Ic = window.matchMedia("(max-width: 1199px)").matches,
        zc = window.matchMedia("(min-width: 1200px)").matches;
    })();
})();
