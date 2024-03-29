/*!
 * Vue-Lazyload.js v1.2.6
 * (c) 2018 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.VueLazyload = e()
}(this, function() {
    "use strict";

    function t(t) {
        return t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }

    function e(t) {
        t = t || {};
        var e = arguments.length,
            i = 0;
        if (1 === e) return t;
        for (; ++i < e;) {
            var o = arguments[i];
            g(t) && (t = o), r(o) && n(t, o)
        }
        return t
    }

    function n(t, n) {
        m(t, n);
        for (var o in n)
            if ("__proto__" !== o && i(n, o)) {
                var a = n[o];
                r(a) ? ("undefined" === L(t[o]) && "function" === L(a) && (t[o] = a), t[o] = e(t[o] || {}, a)) : t[o] = a
            }
        return t
    }

    function r(t) {
        return "object" === L(t) || "function" === L(t)
    }

    function i(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function o(t, e) {
        if (t.length) {
            var n = t.indexOf(e);
            return n > -1 ? t.splice(n, 1) : void 0
        }
    }

    function a(t, e) {
        for (var n = !1, r = 0, i = t.length; r < i; r++)
            if (e(t[r])) {
                n = !0;
                break
            }
        return n
    }

    function s(t, e) {
        if ("IMG" === t.tagName && t.getAttribute("data-srcset")) {
            var n = t.getAttribute("data-srcset"),
                r = [],
                i = t.parentNode,
                o = i.offsetWidth * e,
                a = void 0,
                s = void 0,
                u = void 0;
            n = n.trim().split(","), n.map(function(t) {
                t = t.trim(), a = t.lastIndexOf(" "), -1 === a ? (s = t, u = 999998) : (s = t.substr(0, a), u = parseInt(t.substr(a + 1, t.length - a - 2), 10)), r.push([u, s])
            }), r.sort(function(t, e) {
                if (t[0] < e[0]) return -1;
                if (t[0] > e[0]) return 1;
                if (t[0] === e[0]) {
                    if (-1 !== e[1].indexOf(".webp", e[1].length - 5)) return 1;
                    if (-1 !== t[1].indexOf(".webp", t[1].length - 5)) return -1
                }
                return 0
            });
            for (var l = "", d = void 0, c = r.length, h = 0; h < c; h++)
                if (d = r[h], d[0] >= o) {
                    l = d[1];
                    break
                }
            return l
        }
    }

    function u(t, e) {
        for (var n = void 0, r = 0, i = t.length; r < i; r++)
            if (e(t[r])) {
                n = t[r];
                break
            }
        return n
    }

    function l() {
        if (!E) return !1;
        var t = !0,
            e = document;
        try {
            var n = e.createElement("object");
            n.type = "image/webp", n.style.visibility = "hidden", n.innerHTML = "!", e.body.appendChild(n), t = !n.offsetWidth, e.body.removeChild(n)
        } catch (e) {
            t = !1
        }
        return t
    }

    function d(t, e) {
        var n = null,
            r = 0;
        return function() {
            if (!n) {
                var i = Date.now() - r,
                    o = this,
                    a = arguments,
                    s = function() {
                        r = Date.now(), n = !1, t.apply(o, a)
                    };
                i >= e ? s() : n = setTimeout(s, e)
            }
        }
    }

    function c(t) {
        return null !== t && "object" === (void 0 === t ? "undefined" : p(t))
    }

    function h(t) {
        if (!(t instanceof Object)) return [];
        if (Object.keys) return Object.keys(t);
        var e = [];
        for (var n in t) t.hasOwnProperty(n) && e.push(n);
        return e
    }

    function f(t) {
        for (var e = t.length, n = [], r = 0; r < e; r++) n.push(t[r]);
        return n
    }

    function v() {}
    var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        b = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        y = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, n, r) {
                return n && t(e.prototype, n), r && t(e, r), e
            }
        }(),
        g = function(t) {
            return null == t || "function" != typeof t && "object" !== (void 0 === t ? "undefined" : p(t))
        },
        m = function(t, e) {
            if (null === t || void 0 === t) throw new TypeError("expected first argument to be an object.");
            if (void 0 === e || "undefined" == typeof Symbol) return t;
            if ("function" != typeof Object.getOwnPropertySymbols) return t;
            for (var n = Object.prototype.propertyIsEnumerable, r = Object(t), i = arguments.length, o = 0; ++o < i;)
                for (var a = Object(arguments[o]), s = Object.getOwnPropertySymbols(a), u = 0; u < s.length; u++) {
                    var l = s[u];
                    n.call(a, l) && (r[l] = a[l])
                }
            return r
        },
        w = Object.prototype.toString,
        L = function(e) {
            var n = void 0 === e ? "undefined" : p(e);
            return "undefined" === n ? "undefined" : null === e ? "null" : !0 === e || !1 === e || e instanceof Boolean ? "boolean" : "string" === n || e instanceof String ? "string" : "number" === n || e instanceof Number ? "number" : "function" === n || e instanceof Function ? void 0 !== e.constructor.name && "Generator" === e.constructor.name.slice(0, 9) ? "generatorfunction" : "function" : void 0 !== Array.isArray && Array.isArray(e) ? "array" : e instanceof RegExp ? "regexp" : e instanceof Date ? "date" : (n = w.call(e), "[object RegExp]" === n ? "regexp" : "[object Date]" === n ? "date" : "[object Arguments]" === n ? "arguments" : "[object Error]" === n ? "error" : "[object Promise]" === n ? "promise" : t(e) ? "buffer" : "[object Set]" === n ? "set" : "[object WeakSet]" === n ? "weakset" : "[object Map]" === n ? "map" : "[object WeakMap]" === n ? "weakmap" : "[object Symbol]" === n ? "symbol" : "[object Map Iterator]" === n ? "mapiterator" : "[object Set Iterator]" === n ? "setiterator" : "[object String Iterator]" === n ? "stringiterator" : "[object Array Iterator]" === n ? "arrayiterator" : "[object Int8Array]" === n ? "int8array" : "[object Uint8Array]" === n ? "uint8array" : "[object Uint8ClampedArray]" === n ? "uint8clampedarray" : "[object Int16Array]" === n ? "int16array" : "[object Uint16Array]" === n ? "uint16array" : "[object Int32Array]" === n ? "int32array" : "[object Uint32Array]" === n ? "uint32array" : "[object Float32Array]" === n ? "float32array" : "[object Float64Array]" === n ? "float64array" : "object")
        },
        _ = e,
        E = "undefined" != typeof window,
        A = E && "IntersectionObserver" in window,
        k = {
            event: "event",
            observer: "observer"
        },
        z = function() {
            function t(t, e) {
                e = e || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
            }
            if (E) return "function" == typeof window.CustomEvent ? window.CustomEvent : (t.prototype = window.Event.prototype, t)
        }(),
        j = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return E ? window.devicePixelRatio || t : t
        },
        T = function() {
            if (E) {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("test", null, e)
                } catch (t) {}
                return t
            }
        }(),
        S = {
            on: function(t, e, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                T ? t.addEventListener(e, n, {
                    capture: r,
                    passive: !0
                }) : t.addEventListener(e, n, r)
            },
            off: function(t, e, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                t.removeEventListener(e, n, r)
            }
        },
        I = function(t, e, n) {
            var r = new Image;
            r.src = t.src, r.onload = function() {
                e({
                    naturalHeight: r.naturalHeight,
                    naturalWidth: r.naturalWidth,
                    src: r.src
                })
            }, r.onerror = function(t) {
                n(t)
            }
        },
        O = function(t, e) {
            return "undefined" != typeof getComputedStyle ? getComputedStyle(t, null).getPropertyValue(e) : t.style[e]
        },
        $ = function(t) {
            return O(t, "overflow") + O(t, "overflow-y") + O(t, "overflow-x")
        },
        x = function(t) {
            if (E) {
                if (!(t instanceof HTMLElement)) return window;
                for (var e = t; e && e !== document.body && e !== document.documentElement && e.parentNode;) {
                    if (/(scroll|auto)/.test($(e))) return e;
                    e = e.parentNode
                }
                return window
            }
        },
        H = {},
        Q = function() {
            function t(e) {
                var n = e.el,
                    r = e.src,
                    i = e.error,
                    o = e.loading,
                    a = e.bindType,
                    s = e.$parent,
                    u = e.options,
                    l = e.elRenderer;
                b(this, t), this.el = n, this.src = r, this.error = i, this.loading = o, this.bindType = a, this.attempt = 0, this.naturalHeight = 0, this.naturalWidth = 0, this.options = u, this.rect = null, this.$parent = s, this.elRenderer = l, this.performanceData = {
                    init: Date.now(),
                    loadStart: 0,
                    loadEnd: 0
                }, this.filter(), this.initState(), this.render("loading", !1)
            }
            return y(t, [{
                key: "initState",
                value: function() {
                    "dataset" in this.el ? this.el.dataset.src = this.src : this.el.setAttribute("data-src", this.src), this.state = {
                        error: !1,
                        loaded: !1,
                        rendered: !1
                    }
                }
            }, {
                key: "record",
                value: function(t) {
                    this.performanceData[t] = Date.now()
                }
            }, {
                key: "update",
                value: function(t) {
                    var e = t.src,
                        n = t.loading,
                        r = t.error,
                        i = this.src;
                    this.src = e, this.loading = n, this.error = r, this.filter(), i !== this.src && (this.attempt = 0, this.initState())
                }
            }, {
                key: "getRect",
                value: function() {
                    this.rect = this.el.getBoundingClientRect()
                }
            }, {
                key: "checkInView",
                value: function() {
                    return this.getRect(), this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop && this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0
                }
            }, {
                key: "filter",
                value: function() {
                    var t = this;
                    h(this.options.filter).map(function(e) {
                        t.options.filter[e](t, t.options)
                    })
                }
            }, {
                key: "renderLoading",
                value: function(t) {
                    var e = this;
                    I({
                        src: this.loading
                    }, function(n) {
                        e.render("loading", !1), t()
                    }, function() {
                        t(), e.options.silent || console.warn("VueLazyload log: load failed with loading image(" + e.loading + ")")
                    })
                }
            }, {
                key: "load",
                value: function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v;
                    return this.attempt > this.options.attempt - 1 && this.state.error ? (this.options.silent || console.log("VueLazyload log: " + this.src + " tried too more than " + this.options.attempt + " times"), void e()) : this.state.loaded || H[this.src] ? (this.state.loaded = !0, e(), this.render("loaded", !0)) : void this.renderLoading(function() {
                        t.attempt++, t.record("loadStart"), I({
                            src: t.src
                        }, function(n) {
                            t.naturalHeight = n.naturalHeight, t.naturalWidth = n.naturalWidth, t.state.loaded = !0, t.state.error = !1, t.record("loadEnd"), t.render("loaded", !1), H[t.src] = 1, e()
                        }, function(e) {
                            !t.options.silent && console.error(e), t.state.error = !0, t.state.loaded = !1, t.render("error", !1)
                        })
                    })
                }
            }, {
                key: "render",
                value: function(t, e) {
                    this.elRenderer(this, t, e)
                }
            }, {
                key: "performance",
                value: function() {
                    var t = "loading",
                        e = 0;
                    return this.state.loaded && (t = "loaded", e = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3), this.state.error && (t = "error"), {
                        src: this.src,
                        state: t,
                        time: e
                    }
                }
            }, {
                key: "destroy",
                value: function() {
                    this.el = null, this.src = null, this.error = null, this.loading = null, this.bindType = null, this.attempt = 0
                }
            }]), t
        }(),
        C = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        R = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"],
        W = {
            rootMargin: "0px",
            threshold: 0
        },
        B = function(t) {
            return function() {
                function e(t) {
                    var n = t.preLoad,
                        r = t.error,
                        i = t.throttleWait,
                        o = t.preLoadTop,
                        a = t.dispatchEvent,
                        s = t.loading,
                        u = t.attempt,
                        c = t.silent,
                        h = void 0 === c || c,
                        f = t.scale,
                        v = t.listenEvents,
                        p = (t.hasbind, t.filter),
                        y = t.adapter,
                        g = t.observer,
                        m = t.observerOptions;
                    b(this, e), this.version = "1.2.6", this.mode = k.event, this.ListenerQueue = [], this.TargetIndex = 0, this.TargetQueue = [], this.options = {
                        silent: h,
                        dispatchEvent: !!a,
                        throttleWait: i || 200,
                        preLoad: n || 1.3,
                        preLoadTop: o || 0,
                        error: r || C,
                        loading: s || C,
                        attempt: u || 3,
                        scale: f || j(f),
                        ListenEvents: v || R,
                        hasbind: !1,
                        supportWebp: l(),
                        filter: p || {},
                        adapter: y || {},
                        observer: !!g,
                        observerOptions: m || W
                    }, this._initEvent(), this.lazyLoadHandler = d(this._lazyLoadHandler.bind(this), this.options.throttleWait), this.setMode(this.options.observer ? k.observer : k.event)
                }
                return y(e, [{
                    key: "config",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        _(this.options, t)
                    }
                }, {
                    key: "performance",
                    value: function() {
                        var t = [];
                        return this.ListenerQueue.map(function(e) {
                            t.push(e.performance())
                        }), t
                    }
                }, {
                    key: "addLazyBox",
                    value: function(t) {
                        this.ListenerQueue.push(t), E && (this._addListenerTarget(window), this._observer && this._observer.observe(t.el), t.$el && t.$el.parentNode && this._addListenerTarget(t.$el.parentNode))
                    }
                }, {
                    key: "add",
                    value: function(e, n, r) {
                        var i = this;
                        if (a(this.ListenerQueue, function(t) {
                                return t.el === e
                            })) return this.update(e, n), t.nextTick(this.lazyLoadHandler);
                        var o = this._valueFormatter(n.value),
                            u = o.src,
                            l = o.loading,
                            d = o.error;
                        t.nextTick(function() {
                            u = s(e, i.options.scale) || u, i._observer && i._observer.observe(e);
                            var o = Object.keys(n.modifiers)[0],
                                a = void 0;
                            o && (a = r.context.$refs[o], a = a ? a.$el || a : document.getElementById(o)), a || (a = x(e));
                            var c = new Q({
                                bindType: n.arg,
                                $parent: a,
                                el: e,
                                loading: l,
                                error: d,
                                src: u,
                                elRenderer: i._elRenderer.bind(i),
                                options: i.options
                            });
                            i.ListenerQueue.push(c), E && (i._addListenerTarget(window), i._addListenerTarget(a)), i.lazyLoadHandler(), t.nextTick(function() {
                                return i.lazyLoadHandler()
                            })
                        })
                    }
                }, {
                    key: "update",
                    value: function(e, n) {
                        var r = this,
                            i = this._valueFormatter(n.value),
                            o = i.src,
                            a = i.loading,
                            l = i.error;
                        o = s(e, this.options.scale) || o;
                        var d = u(this.ListenerQueue, function(t) {
                            return t.el === e
                        });
                        d && d.update({
                            src: o,
                            loading: a,
                            error: l
                        }), this._observer && (this._observer.unobserve(e), this._observer.observe(e)), this.lazyLoadHandler(), t.nextTick(function() {
                            return r.lazyLoadHandler()
                        })
                    }
                }, {
                    key: "remove",
                    value: function(t) {
                        if (t) {
                            this._observer && this._observer.unobserve(t);
                            var e = u(this.ListenerQueue, function(e) {
                                return e.el === t
                            });
                            e && (this._removeListenerTarget(e.$parent), this._removeListenerTarget(window), o(this.ListenerQueue, e) && e.destroy())
                        }
                    }
                }, {
                    key: "removeComponent",
                    value: function(t) {
                        t && (o(this.ListenerQueue, t), this._observer && this._observer.unobserve(t.el), t.$parent && t.$el.parentNode && this._removeListenerTarget(t.$el.parentNode), this._removeListenerTarget(window))
                    }
                }, {
                    key: "setMode",
                    value: function(t) {
                        var e = this;
                        A || t !== k.observer || (t = k.event), this.mode = t, t === k.event ? (this._observer && (this.ListenerQueue.forEach(function(t) {
                            e._observer.unobserve(t.el)
                        }), this._observer = null), this.TargetQueue.forEach(function(t) {
                            e._initListen(t.el, !0)
                        })) : (this.TargetQueue.forEach(function(t) {
                            e._initListen(t.el, !1)
                        }), this._initIntersectionObserver())
                    }
                }, {
                    key: "_addListenerTarget",
                    value: function(t) {
                        if (t) {
                            var e = u(this.TargetQueue, function(e) {
                                return e.el === t
                            });
                            return e ? e.childrenCount++ : (e = {
                                el: t,
                                id: ++this.TargetIndex,
                                childrenCount: 1,
                                listened: !0
                            }, this.mode === k.event && this._initListen(e.el, !0), this.TargetQueue.push(e)), this.TargetIndex
                        }
                    }
                }, {
                    key: "_removeListenerTarget",
                    value: function(t) {
                        var e = this;
                        this.TargetQueue.forEach(function(n, r) {
                            n.el === t && (--n.childrenCount || (e._initListen(n.el, !1), e.TargetQueue.splice(r, 1), n = null))
                        })
                    }
                }, {
                    key: "_initListen",
                    value: function(t, e) {
                        var n = this;
                        this.options.ListenEvents.forEach(function(r) {
                            return S[e ? "on" : "off"](t, r, n.lazyLoadHandler)
                        })
                    }
                }, {
                    key: "_initEvent",
                    value: function() {
                        var t = this;
                        this.Event = {
                            listeners: {
                                loading: [],
                                loaded: [],
                                error: []
                            }
                        }, this.$on = function(e, n) {
                            t.Event.listeners[e] || (t.Event.listeners[e] = []), t.Event.listeners[e].push(n)
                        }, this.$once = function(e, n) {
                            function r() {
                                i.$off(e, r), n.apply(i, arguments)
                            }
                            var i = t;
                            t.$on(e, r)
                        }, this.$off = function(e, n) {
                            if (!n) {
                                if (!t.Event.listeners[e]) return;
                                return void(t.Event.listeners[e].length = 0)
                            }
                            o(t.Event.listeners[e], n)
                        }, this.$emit = function(e, n, r) {
                            t.Event.listeners[e] && t.Event.listeners[e].forEach(function(t) {
                                return t(n, r)
                            })
                        }
                    }
                }, {
                    key: "_lazyLoadHandler",
                    value: function() {
                        var t = this,
                            e = [];
                        this.ListenerQueue.forEach(function(t, n) {
                            if (!t.state.error && t.state.loaded) return e.push(t);
                            t.checkInView() && t.load()
                        }), e.forEach(function(e) {
                            return o(t.ListenerQueue, e)
                        })
                    }
                }, {
                    key: "_initIntersectionObserver",
                    value: function() {
                        var t = this;
                        A && (this._observer = new IntersectionObserver(this._observerHandler.bind(this), this.options.observerOptions), this.ListenerQueue.length && this.ListenerQueue.forEach(function(e) {
                            t._observer.observe(e.el)
                        }))
                    }
                }, {
                    key: "_observerHandler",
                    value: function(t, e) {
                        var n = this;
                        t.forEach(function(t) {
                            t.isIntersecting && n.ListenerQueue.forEach(function(e) {
                                if (e.el === t.target) {
                                    if (e.state.loaded) return n._observer.unobserve(e.el);
                                    e.load()
                                }
                            })
                        })
                    }
                }, {
                    key: "_elRenderer",
                    value: function(t, e, n) {
                        if (t.el) {
                            var r = t.el,
                                i = t.bindType,
                                o = void 0;
                            switch (e) {
                                case "loading":
                                    o = t.loading;
                                    break;
                                case "error":
                                    o = t.error;
                                    break;
                                default:
                                    o = t.src
                            }
                            if (i ? r.style[i] = 'url("' + o + '")' : r.getAttribute("src") !== o && r.setAttribute("src", o), r.setAttribute("lazy", e), this.$emit(e, t, n), this.options.adapter[e] && this.options.adapter[e](t, this.options), this.options.dispatchEvent) {
                                var a = new z(e, {
                                    detail: t
                                });
                                r.dispatchEvent(a)
                            }
                        }
                    }
                }, {
                    key: "_valueFormatter",
                    value: function(t) {
                        var e = t,
                            n = this.options.loading,
                            r = this.options.error;
                        return c(t) && (t.src || this.options.silent || console.error("Vue Lazyload warning: miss src with " + t), e = t.src, n = t.loading || this.options.loading, r = t.error || this.options.error), {
                            src: e,
                            loading: n,
                            error: r
                        }
                    }
                }]), e
            }()
        },
        D = function(t) {
            return {
                props: {
                    tag: {
                        type: String,
                        default: "div"
                    }
                },
                render: function(t) {
                    return !1 === this.show ? t(this.tag) : t(this.tag, null, this.$slots.default)
                },
                data: function() {
                    return {
                        el: null,
                        state: {
                            loaded: !1
                        },
                        rect: {},
                        show: !1
                    }
                },
                mounted: function() {
                    this.el = this.$el, t.addLazyBox(this), t.lazyLoadHandler()
                },
                beforeDestroy: function() {
                    t.removeComponent(this)
                },
                methods: {
                    getRect: function() {
                        this.rect = this.$el.getBoundingClientRect()
                    },
                    checkInView: function() {
                        return this.getRect(), E && this.rect.top < window.innerHeight * t.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * t.options.preLoad && this.rect.right > 0
                    },
                    load: function() {
                        this.show = !0, this.state.loaded = !0, this.$emit("show", this)
                    }
                }
            }
        },
        V = function() {
            function t(e) {
                var n = e.lazy;
                b(this, t), this.lazy = n, n.lazyContainerMananger = this, this._queue = []
            }
            return y(t, [{
                key: "bind",
                value: function(t, e, n) {
                    var r = new N({
                        el: t,
                        binding: e,
                        vnode: n,
                        lazy: this.lazy
                    });
                    this._queue.push(r)
                }
            }, {
                key: "update",
                value: function(t, e, n) {
                    var r = u(this._queue, function(e) {
                        return e.el === t
                    });
                    r && r.update({
                        el: t,
                        binding: e,
                        vnode: n
                    })
                }
            }, {
                key: "unbind",
                value: function(t, e, n) {
                    var r = u(this._queue, function(e) {
                        return e.el === t
                    });
                    r && (r.clear(), o(this._queue, r))
                }
            }]), t
        }(),
        M = {
            selector: "img"
        },
        N = function() {
            function t(e) {
                var n = e.el,
                    r = e.binding,
                    i = e.vnode,
                    o = e.lazy;
                b(this, t), this.el = null, this.vnode = i, this.binding = r, this.options = {}, this.lazy = o, this._queue = [], this.update({
                    el: n,
                    binding: r
                })
            }
            return y(t, [{
                key: "update",
                value: function(t) {
                    var e = this,
                        n = t.el,
                        r = t.binding;
                    this.el = n, this.options = _({}, M, r.value), this.getImgs().forEach(function(t) {
                        e.lazy.add(t, _({}, e.binding, {
                            value: {
                                src: "dataset" in t ? t.dataset.src : t.getAttribute("data-src"),
                                error: "dataset" in t ? t.dataset.error : t.getAttribute("data-error"),
                                loading: "dataset" in t ? t.dataset.loading : t.getAttribute("data-loading")
                            }
                        }), e.vnode)
                    })
                }
            }, {
                key: "getImgs",
                value: function() {
                    return f(this.el.querySelectorAll(this.options.selector))
                }
            }, {
                key: "clear",
                value: function() {
                    var t = this;
                    this.getImgs().forEach(function(e) {
                        return t.lazy.remove(e)
                    }), this.vnode = null, this.binding = null, this.lazy = null
                }
            }]), t
        }(),
        P = function(t) {
            return {
                props: {
                    src: [String, Object],
                    tag: {
                        type: String,
                        default: "img"
                    }
                },
                render: function(t) {
                    return t(this.tag, {
                        attrs: {
                            src: this.renderSrc
                        }
                    }, this.$slots.default)
                },
                data: function() {
                    return {
                        el: null,
                        options: {
                            src: "",
                            error: "",
                            loading: "",
                            attempt: t.options.attempt
                        },
                        state: {
                            loaded: !1,
                            error: !1,
                            attempt: 0
                        },
                        rect: {},
                        renderSrc: ""
                    }
                },
                watch: {
                    src: function() {
                        this.init(), t.addLazyBox(this), t.lazyLoadHandler()
                    }
                },
                created: function() {
                    this.init(), this.renderSrc = this.options.loading
                },
                mounted: function() {
                    this.el = this.$el, t.addLazyBox(this), t.lazyLoadHandler()
                },
                beforeDestroy: function() {
                    t.removeComponent(this)
                },
                methods: {
                    init: function() {
                        var e = t._valueFormatter(this.src),
                            n = e.src,
                            r = e.loading,
                            i = e.error;
                        this.state.loaded = !1, this.options.src = n, this.options.error = i, this.options.loading = r, this.renderSrc = this.options.loading
                    },
                    getRect: function() {
                        this.rect = this.$el.getBoundingClientRect()
                    },
                    checkInView: function() {
                        return this.getRect(), E && this.rect.top < window.innerHeight * t.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * t.options.preLoad && this.rect.right > 0
                    },
                    load: function() {
                        var e = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v;
                        if (this.state.attempt > this.options.attempt - 1 && this.state.error) return t.options.silent || console.log("VueLazyload log: " + this.options.src + " tried too more than " + this.options.attempt + " times"), void n();
                        var r = this.options.src;
                        I({
                            src: r
                        }, function(t) {
                            var n = t.src;
                            e.renderSrc = n, e.state.loaded = !0
                        }, function(t) {
                            e.state.attempt++, e.renderSrc = e.options.error, e.state.error = !0
                        })
                    }
                }
            }
        };
    return {
        install: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = B(t),
                r = new n(e),
                i = new V({
                    lazy: r
                }),
                o = "2" === t.version.split(".")[0];
            t.prototype.$Lazyload = r, e.lazyComponent && t.component("lazy-component", D(r)), e.lazyImage && t.component("lazy-image", P(r)), o ? (t.directive("lazy", {
                bind: r.add.bind(r),
                update: r.update.bind(r),
                componentUpdated: r.lazyLoadHandler.bind(r),
                unbind: r.remove.bind(r)
            }), t.directive("lazy-container", {
                bind: i.bind.bind(i),
                update: i.update.bind(i),
                unbind: i.unbind.bind(i)
            })) : (t.directive("lazy", {
                bind: r.lazyLoadHandler.bind(r),
                update: function(t, e) {
                    _(this.vm.$refs, this.vm.$els), r.add(this.el, {
                        modifiers: this.modifiers || {},
                        arg: this.arg,
                        value: t,
                        oldValue: e
                    }, {
                        context: this.vm
                    })
                },
                unbind: function() {
                    r.remove(this.el)
                }
            }), t.directive("lazy-container", {
                update: function(t, e) {
                    i.update(this.el, {
                        modifiers: this.modifiers || {},
                        arg: this.arg,
                        value: t,
                        oldValue: e
                    }, {
                        context: this.vm
                    })
                },
                unbind: function() {
                    i.unbind(this.el)
                }
            }))
        }
    }
});