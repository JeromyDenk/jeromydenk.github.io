!(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.scrollSpy = e()) : (t.scrollSpy = e());
})(window, function () {
    return (function (t) {
        var e = {};
        function o(n) {
            if (e[n]) return e[n].exports;
            var r = (e[n] = { i: n, l: !1, exports: {} });
            return t[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
        }
        return (
            (o.m = t),
            (o.c = e),
            (o.d = function (t, e, n) {
                o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
            }),
            (o.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (o.t = function (t, e) {
                if ((1 & e && (t = o(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if ((o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var r in t)
                        o.d(
                            n,
                            r,
                            function (e) {
                                return t[e];
                            }.bind(null, r)
                        );
                return n;
            }),
            (o.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return o.d(e, "a", e), e;
            }),
            (o.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (o.p = ""),
            o((o.s = 0))
        );
    })([
        function (t, e, o) {
            t.exports = function (t, e = {}) {
                const n = new (o(1))(t, e);
                return (
                    (window.onload = function () {
                        n.onScroll();
                    }),
                    window.addEventListener("scroll", () => {
                        n.onScroll();
                    }),
                    n
                );
            };
        },
        function (t, e) {
            t.exports = class {
                constructor(t = "#navMain", e = {}) {
                    if (!t) throw new Error("First argument cannot be empty");
                    if (!("string" == typeof t || t instanceof HTMLElement)) throw new TypeError("menu can be either string or an instance of HTMLElement");
                    if ("object" != typeof e) throw new TypeError("options can only be of type object");
                    (this.menuList = t instanceof HTMLElement ? t : document.querySelector(t)),
                        (this.options = Object.assign({}, { sectionSelector: "section", targetSelector: "a", offset: 0, hrefAttribute: "href", activeClass: "active" }, e)),
                        (this.sections = document.querySelectorAll(this.options.sectionSelector));
                }
                onScroll() {
                    const t = this.getCurrentSection(),
                        e = this.getCurrentMenuItem(t);
                    e && (this.removeCurrentActive({ ignore: e }), this.setActive(e));
                }
                getCurrentSection() {
                    for (let t = 0; t < this.sections.length; t++) {
                        const e = this.sections[t],
                            o = e.offsetTop,
                            n = o + e.offsetHeight,
                            r = (document.documentElement.scrollTop || document.body.scrollTop) + this.options.offset;
                        if (r >= o && r < n) return e;
                    }
                }
                getCurrentMenuItem(t) {
                    if (!t) return;
                    const e = t.getAttribute("id");
                    return this.menuList.querySelector(`[${this.options.hrefAttribute}="#${e}"]`);
                }
                setActive(t) {
                    if (!t.classList.contains(this.options.activeClass)) {
                        this.options.activeClass
                            .trim()
                            .split(" ")
                            .forEach((e) => t.classList.add(e));
                    }
                }
                removeCurrentActive(t = { ignore: null }) {
                    const { hrefAttribute: e, targetSelector: o } = this.options;
                    this.menuList.querySelectorAll(`${o}:not([${e}="${t.ignore.getAttribute(e)}"])`).forEach((t) => {
                        this.options.activeClass
                            .trim()
                            .split(" ")
                            .forEach((e) => t.classList.remove(e));
                    });
                }
            };
        },
    ]);
});
