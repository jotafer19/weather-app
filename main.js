(() => {
  "use strict";
  var e = {
      127: (e, t, n) => {
        n.d(t, { Z: () => u });
        var r = n(537),
          o = n.n(r),
          a = n(645),
          c = n.n(a)()(o());
        c.push([
          e.id,
          "// extracted by mini-css-extract-plugin\nexport {};",
          "",
          {
            version: 3,
            sources: ["webpack://./src/components/modules/style.css"],
            names: [],
            mappings: "AAAA;QACQ,CAAA",
            sourcesContent: [
              "// extracted by mini-css-extract-plugin\nexport {};",
            ],
            sourceRoot: "",
          },
        ]);
        const u = c;
      },
      645: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {",
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var c = {};
              if (r)
                for (var u = 0; u < this.length; u++) {
                  var i = this[u][0];
                  null != i && (c[i] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var d = [].concat(e[s]);
                (r && c[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  n &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = n))
                      : (d[2] = n)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      537: (e) => {
        e.exports = function (e) {
          var t = e[1],
            n = e[3];
          if (!n) return t;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r,
                ),
              a = "/*# ".concat(o, " */");
            return [t].concat([a]).join("\n");
          }
          return [t].join("\n");
        };
      },
      379: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, c = [], u = 0; u < e.length; u++) {
            var i = e[u],
              s = r.base ? i[0] + r.base : i[0],
              d = a[s] || 0,
              m = "".concat(s, " ").concat(d);
            a[s] = d + 1;
            var l = n(m),
              y = {
                css: i[1],
                media: i[2],
                sourceMap: i[3],
                supports: i[4],
                layer: i[5],
              };
            if (-1 !== l) t[l].references++, t[l].updater(y);
            else {
              var f = o(y, r);
              (r.byIndex = u),
                t.splice(u, 0, { identifier: m, updater: f, references: 1 });
            }
            c.push(m);
          }
          return c;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var c = 0; c < a.length; c++) {
              var u = n(a[c]);
              t[u].references--;
            }
            for (var i = r(e, o), s = 0; s < a.length; s++) {
              var d = n(a[s]);
              0 === t[d].references && (t[d].updater(), t.splice(d, 1));
            }
            a = i;
          };
        };
      },
      569: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      var e =
          /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,
        t =
          /\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,
        r = /[^-+\dA-Z]/g;
      var o = {
          default: "ddd mmm dd yyyy HH:MM:ss",
          shortDate: "m/d/yy",
          paddedShortDate: "mm/dd/yyyy",
          mediumDate: "mmm d, yyyy",
          longDate: "mmmm d, yyyy",
          fullDate: "dddd, mmmm d, yyyy",
          shortTime: "h:MM TT",
          mediumTime: "h:MM:ss TT",
          longTime: "h:MM:ss TT Z",
          isoDate: "yyyy-mm-dd",
          isoTime: "HH:MM:ss",
          isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
          isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
          expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z",
        },
        a = {
          dayNames: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          monthNames: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
        },
        c = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return String(e).padStart(t, "0");
        },
        u = function (e) {
          var t = e.y,
            n = e.m,
            r = e.d,
            o = e._,
            a = e.dayName,
            c = e.short,
            u = void 0 !== c && c,
            i = new Date(),
            s = new Date();
          s.setDate(s[o + "Date"]() - 1);
          var d = new Date();
          return (
            d.setDate(d[o + "Date"]() + 1),
            i[o + "FullYear"]() === t &&
            i[o + "Month"]() === n &&
            i[o + "Date"]() === r
              ? u
                ? "Tdy"
                : "Today"
              : s[o + "FullYear"]() === t &&
                  s[o + "Month"]() === n &&
                  s[o + "Date"]() === r
                ? u
                  ? "Ysd"
                  : "Yesterday"
                : d[o + "FullYear"]() === t &&
                    d[o + "Month"]() === n &&
                    d[o + "Date"]() === r
                  ? u
                    ? "Tmw"
                    : "Tomorrow"
                  : a
          );
        },
        i = function (e) {
          var t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
          t.setDate(t.getDate() - ((t.getDay() + 6) % 7) + 3);
          var n = new Date(t.getFullYear(), 0, 4);
          n.setDate(n.getDate() - ((n.getDay() + 6) % 7) + 3);
          var r = t.getTimezoneOffset() - n.getTimezoneOffset();
          t.setHours(t.getHours() - r);
          var o = (t - n) / 6048e5;
          return 1 + Math.floor(o);
        },
        s = function (e) {
          var t = e.getDay();
          return 0 === t && (t = 7), t;
        },
        d = function (e) {
          return (String(e).match(t) || [""])
            .pop()
            .replace(r, "")
            .replace(/GMT\+0000/g, "UTC");
        };
      function m() {
        const e = document.querySelector("#loading"),
          t = document.querySelector("#content");
        (e.style.display = "none"), (t.style.display = "block");
      }
      function l(e) {
        const t = [],
          n = new Date(e.current.last_updated).getHours(),
          r = e.forecast.forecastday[0].hour,
          o = e.forecast.forecastday[1].hour;
        for (let e = 0; e < r.length; e++)
          e > n &&
            t.push({
              time: r[e].time,
              temperature: Math.round(r[e].temp_c),
              condition: r[e].condition.text,
              conditionIcon: `https://${r[e].condition.icon.slice(2)}`,
            });
        for (let e = 0; e < o.length; e++)
          e <= n &&
            t.push({
              time: o[e].time,
              temperature: Math.round(o[e].temp_c),
              condition: o[e].condition.text,
              conditionIcon: `https://${o[e].condition.icon.slice(2)}`,
            });
        return t;
      }
      function y(e) {
        const t = document.createElement("div");
        t.classList.add("weather-per-hour");
        const n = document.createElement("div"),
          r = new Image(),
          o = document.createElement("div"),
          a = document.createElement("span");
        a.classList.add("number");
        const c = document.createElement("span");
        c.classList.add("unit"), o.append(a, c);
        let u = new Date(e.time).getHours();
        return (
          1 === u.toString().length && (u = `0${u}`),
          (n.textContent = `${u}:00`),
          (r.src = e.conditionIcon),
          (a.textContent = e.temperature),
          (c.textContent = "°C"),
          "fahrenheit" ===
            document.querySelector(".temperature-units.active").value &&
            ((a.textContent = Math.round((9 * Number(e.temperature)) / 5 + 32)),
            (c.textContent = "°F ")),
          t.append(n, r, o),
          t
        );
      }
      function f(t) {
        (document.querySelector("input + span").textContent = ""),
          t &&
            (async function (e) {
              const t = `http://api.weatherapi.com/v1/forecast.json?key=73b76e4355924104b6c103812232611&q=${e}&days=3`;
              try {
                !(function () {
                  const e = document.querySelector("#loading"),
                    t = document.querySelector("#content");
                  (e.style.display = "block"), (t.style.display = "none");
                })();
                const e = await fetch(t, { mode: "cors" });
                if (!e.ok) throw new Error("Location not found");
                const n = await e.json();
                return m(), n;
              } catch (e) {
                return (
                  (document.querySelector("input + span").textContent = e),
                  document.querySelector("form").reset(),
                  m(),
                  null
                );
              }
            })(t).then((t) => {
              if (!t) return;
              !(function () {
                const e = document.querySelector(".hourly-data.active"),
                  t = document.querySelector(".dot.active"),
                  n = document.querySelector(".show-hourly"),
                  r = document.querySelector(".dots-container");
                e.classList.toggle("active"),
                  t.classList.toggle("active"),
                  [...n.children][0].classList.toggle("active"),
                  [...r.children][0].classList.toggle("active");
              })(),
                (function () {
                  const e = document.querySelector(".two-days-forecast");
                  "" === e.textContent || e.replaceChildren();
                })(),
                l(t);
              const n = (function (e) {
                return {
                  date: e.current.last_updated,
                  currentLocation: e.location.name,
                  currentCountry: e.location.country,
                  currentTemperature: Math.round(e.current.temp_c),
                  maxTemperature: e.forecast.forecastday[0].day.maxtemp_c,
                  minTemperature: e.forecast.forecastday[0].day.mintemp_c,
                  currentFeelsTemperature: Math.round(e.current.feelslike_c),
                  currentCondition: e.current.condition.text,
                  currentConditionIcon: e.current.condition.icon,
                  currentWindSpeed: Math.round(e.current.wind_kph),
                  currentPrecipitation: e.current.precip_mm,
                  currentHumidity: e.current.humidity,
                };
              })(t);
              var r;
              (r = (function (t) {
                return (function (t, n, r, m) {
                  if (
                    (1 !== arguments.length ||
                      "string" != typeof t ||
                      /\d/.test(t) ||
                      ((n = t), (t = void 0)),
                    (t = t || 0 === t ? t : new Date()) instanceof Date ||
                      (t = new Date(t)),
                    isNaN(t))
                  )
                    throw TypeError("Invalid date");
                  var l = (n = String(o[n] || n || o.default)).slice(0, 4);
                  ("UTC:" !== l && "GMT:" !== l) ||
                    ((n = n.slice(4)), (r = !0), "GMT:" === l && (m = !0));
                  var y = function () {
                      return r ? "getUTC" : "get";
                    },
                    f = function () {
                      return t[y() + "Date"]();
                    },
                    p = function () {
                      return t[y() + "Day"]();
                    },
                    h = function () {
                      return t[y() + "Month"]();
                    },
                    v = function () {
                      return t[y() + "FullYear"]();
                    },
                    g = function () {
                      return t[y() + "Hours"]();
                    },
                    C = function () {
                      return t[y() + "Minutes"]();
                    },
                    x = function () {
                      return t[y() + "Seconds"]();
                    },
                    M = function () {
                      return t[y() + "Milliseconds"]();
                    },
                    S = function () {
                      return r ? 0 : t.getTimezoneOffset();
                    },
                    T = function () {
                      return i(t);
                    },
                    b = {
                      d: function () {
                        return f();
                      },
                      dd: function () {
                        return c(f());
                      },
                      ddd: function () {
                        return a.dayNames[p()];
                      },
                      DDD: function () {
                        return u({
                          y: v(),
                          m: h(),
                          d: f(),
                          _: y(),
                          dayName: a.dayNames[p()],
                          short: !0,
                        });
                      },
                      dddd: function () {
                        return a.dayNames[p() + 7];
                      },
                      DDDD: function () {
                        return u({
                          y: v(),
                          m: h(),
                          d: f(),
                          _: y(),
                          dayName: a.dayNames[p() + 7],
                        });
                      },
                      m: function () {
                        return h() + 1;
                      },
                      mm: function () {
                        return c(h() + 1);
                      },
                      mmm: function () {
                        return a.monthNames[h()];
                      },
                      mmmm: function () {
                        return a.monthNames[h() + 12];
                      },
                      yy: function () {
                        return String(v()).slice(2);
                      },
                      yyyy: function () {
                        return c(v(), 4);
                      },
                      h: function () {
                        return g() % 12 || 12;
                      },
                      hh: function () {
                        return c(g() % 12 || 12);
                      },
                      H: function () {
                        return g();
                      },
                      HH: function () {
                        return c(g());
                      },
                      M: function () {
                        return C();
                      },
                      MM: function () {
                        return c(C());
                      },
                      s: function () {
                        return x();
                      },
                      ss: function () {
                        return c(x());
                      },
                      l: function () {
                        return c(M(), 3);
                      },
                      L: function () {
                        return c(Math.floor(M() / 10));
                      },
                      t: function () {
                        return g() < 12 ? a.timeNames[0] : a.timeNames[1];
                      },
                      tt: function () {
                        return g() < 12 ? a.timeNames[2] : a.timeNames[3];
                      },
                      T: function () {
                        return g() < 12 ? a.timeNames[4] : a.timeNames[5];
                      },
                      TT: function () {
                        return g() < 12 ? a.timeNames[6] : a.timeNames[7];
                      },
                      Z: function () {
                        return m ? "GMT" : r ? "UTC" : d(t);
                      },
                      o: function () {
                        return (
                          (S() > 0 ? "-" : "+") +
                          c(
                            100 * Math.floor(Math.abs(S()) / 60) +
                              (Math.abs(S()) % 60),
                            4,
                          )
                        );
                      },
                      p: function () {
                        return (
                          (S() > 0 ? "-" : "+") +
                          c(Math.floor(Math.abs(S()) / 60), 2) +
                          ":" +
                          c(Math.floor(Math.abs(S()) % 60), 2)
                        );
                      },
                      S: function () {
                        return ["th", "st", "nd", "rd"][
                          f() % 10 > 3
                            ? 0
                            : (((f() % 100) - (f() % 10) != 10) * f()) % 10
                        ];
                      },
                      W: function () {
                        return T();
                      },
                      WW: function () {
                        return c(T());
                      },
                      N: function () {
                        return s(t);
                      },
                    };
                  return n.replace(e, function (e) {
                    return e in b ? b[e]() : e.slice(1, e.length - 1);
                  });
                })(new Date(t), "dddd, mmmm dS, yyyy, HH:MM");
              })(n.date)),
                (document.querySelector("#date").textContent = r),
                (function (e) {
                  const t = document.querySelector("#city"),
                    n = document.querySelector("#country"),
                    r = document.querySelector(".temperature-units.active"),
                    o = document.querySelector("#current-temperature .number"),
                    a = document.querySelector("#current-temperature .unit"),
                    c = document.querySelector("#current-condition-icon"),
                    u = document.querySelector("#current-condition"),
                    i = document.querySelector(".info .number"),
                    s = document.querySelector(".info .unit"),
                    d = document.querySelector("#wind-speed-info"),
                    m = document.querySelector("#precipitations-info"),
                    l = document.querySelector("#humidity-info");
                  (t.textContent = e.currentLocation),
                    (n.textContent = e.currentCountry),
                    (o.textContent = e.currentTemperature),
                    (a.textContent = "°C"),
                    (c.src = e.currentConditionIcon),
                    (u.textContent = e.currentCondition),
                    (i.textContent = e.currentFeelsTemperature),
                    (s.textContent = "°C"),
                    (d.textContent = `${e.currentWindSpeed} km/h`),
                    (m.textContent = `${e.currentPrecipitation} mm`),
                    (l.textContent = `${e.currentHumidity}%`),
                    "fahrenheit" === r.value &&
                      ((o.textContent = Math.round(
                        (9 * Number(e.currentTemperature)) / 5 + 32,
                      )),
                      (i.textContent = Math.round(
                        (9 * Number(e.currentFeelsTemperature)) / 5 + 32,
                      )),
                      (a.textContent = "°F"),
                      (s.textContent = "°F "));
                })(n),
                (function (e) {
                  const t = document.querySelector("[data-info-one]"),
                    n = document.querySelector("[data-info-two]"),
                    r = document.querySelector("[data-info-three]");
                  t.replaceChildren(), n.replaceChildren(), r.replaceChildren();
                  const o = e.slice(0, 8),
                    a = e.slice(8, 16),
                    c = e.slice(16, 24);
                  o.forEach((e) => {
                    t.appendChild(y(e));
                  }),
                    a.forEach((e) => {
                      n.appendChild(y(e));
                    }),
                    c.forEach((e) => {
                      r.appendChild(y(e));
                    });
                })(l(t));
              const m = (function (e) {
                const t = e.forecast.forecastday.slice(1),
                  n = [];
                return (
                  t.forEach((e) => {
                    n.push({
                      time: e.date,
                      temperature: e.day.avgtemp_c,
                      maxTemp: e.day.maxtemp_c,
                      minTemp: e.day.mintemp_c,
                      conditionIcon: `https://${e.day.condition.icon.slice(2)}`,
                      rainChance: e.day.daily_chance_of_rain,
                      humidity: e.day.avghumidity,
                    });
                  }),
                  n
                );
              })(t);
              m.forEach((e) => {
                !(function (e) {
                  const t = document.querySelector(".two-days-forecast"),
                    n = document.createElement("div");
                  n.classList.add("daily-forecast");
                  const r = document.createElement("div");
                  r.classList.add("weekday");
                  const o = new Image(),
                    a = document.createElement("div");
                  a.classList.add("daily-forecast-temperature");
                  const c = document.createElement("div");
                  c.classList.add("forecast-max-temp");
                  const u = document.createElement("span");
                  u.classList.add("number");
                  const i = document.createElement("span");
                  i.classList.add("unit");
                  const s = document.createElement("div");
                  s.classList.add("forecast-min-temp");
                  const d = document.createElement("span");
                  d.classList.add("number");
                  const m = document.createElement("span");
                  m.classList.add("unit");
                  const l = document.createElement("div");
                  l.classList.add("forecast-rain");
                  const y = document.createElement("div");
                  y.classList.add("forecast-humidity"),
                    c.append(u, i),
                    s.append(d, m),
                    (r.textContent = [
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ][new Date(e.time).getDay()]),
                    (o.src = e.conditionIcon),
                    (u.textContent = `${Math.round(e.maxTemp)}`),
                    (i.textContent = "°C"),
                    (d.textContent = `${Math.round(e.minTemp)}`),
                    (m.textContent = "°C"),
                    (l.textContent = `${e.rainChance}%`),
                    (y.textContent = `${e.humidity}%`),
                    "fahrenheit" ===
                      document.querySelector(".temperature-units.active")
                        .value &&
                      ((u.textContent = Math.round(
                        (9 * Number(e.maxTemp)) / 5 + 32,
                      )),
                      (d.textContent = Math.round(
                        (9 * Number(e.minTemp)) / 5 + 32,
                      )),
                      (i.textContent = "°F"),
                      (m.textContent = "°F")),
                    a.append(c, s),
                    n.append(r, o, a, l, y),
                    t.appendChild(n);
                })(e);
              }),
                document.querySelector("form").reset();
            });
      }
      function p(e) {
        const t = document.querySelector(".hourly-data.active"),
          n = document.querySelector(".dot.active"),
          r = document.querySelector(".show-hourly"),
          o = document.querySelector(".dots-container"),
          a = [...r.children].indexOf(t);
        let c;
        e.target.classList.contains("move-weather")
          ? ("prev" === e.target.dataset.move && (c = a - 1),
            "next" === e.target.dataset.move && (c = a + 1),
            c >= [...r.children].length && (c = 0),
            c < 0 && (c = [...r.children].length - 1))
          : e.target.classList.contains("dot") &&
            (c = [...o.children].indexOf(e.target)),
          t.classList.toggle("active"),
          n.classList.toggle("active"),
          [...r.children][c].classList.toggle("active"),
          [...o.children][c].classList.toggle("active");
      }
      var h = n(379),
        v = n.n(h),
        g = n(795),
        C = n.n(g),
        x = n(569),
        M = n.n(x),
        S = n(565),
        T = n.n(S),
        b = n(216),
        D = n.n(b),
        q = n(589),
        L = n.n(q),
        E = n(127),
        w = {};
      (w.styleTagTransform = L()),
        (w.setAttributes = T()),
        (w.insert = M().bind(null, "head")),
        (w.domAPI = C()),
        (w.insertStyleElement = D()),
        v()(E.Z, w),
        E.Z && E.Z.locals && E.Z.locals;
      const N = document.querySelector("form"),
        A = document.querySelector("#search-location"),
        H = document.querySelector("input"),
        F = document.querySelectorAll(".temperature-units"),
        _ = document.querySelectorAll(".move-weather"),
        I = document.querySelectorAll(".dot");
      N.addEventListener("submit", (e) => {
        e.preventDefault();
      }),
        document.addEventListener("DOMContentLoaded", () => {
          f("madrid");
        }),
        A.addEventListener("click", () => {
          f(H.value);
        }),
        _.forEach((e) => {
          e.addEventListener("click", (e) => {
            p(e);
          });
        }),
        I.forEach((e) => {
          e.addEventListener("click", (e) => {
            p(e);
          });
        }),
        F.forEach((e) => {
          e.addEventListener("click", (e) => {
            !(function (e) {
              if (e.target.classList.contains("active")) return;
              const t = document.querySelector(".temperature-units.active");
              document.querySelectorAll(".number").forEach((t) => {
                if ("fahrenheit" === e.target.value) {
                  const e = Math.round((9 * Number(t.textContent)) / 5 + 32);
                  (t.textContent = e),
                    (t.nextElementSibling.textContent = "°F");
                } else {
                  const e = Math.round((5 * (Number(t.textContent) - 32)) / 9);
                  (t.textContent = e),
                    (t.nextElementSibling.textContent = "°C");
                }
              }),
                t.classList.toggle("active"),
                e.target.classList.toggle("active");
            })(e);
          });
        });
    })();
})();
//# sourceMappingURL=main.js.map
