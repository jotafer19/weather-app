(() => {
  "use strict";
  var t =
      /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,
    e =
      /\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,
    n = /[^-+\dA-Z]/g;
  var r = {
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
    o = {
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
    c = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      return String(t).padStart(e, "0");
    },
    a = function (t) {
      var e = t.y,
        n = t.m,
        r = t.d,
        o = t._,
        c = t.dayName,
        a = t.short,
        u = void 0 !== a && a,
        i = new Date(),
        d = new Date();
      d.setDate(d[o + "Date"]() - 1);
      var s = new Date();
      return (
        s.setDate(s[o + "Date"]() + 1),
        i[o + "FullYear"]() === e &&
        i[o + "Month"]() === n &&
        i[o + "Date"]() === r
          ? u
            ? "Tdy"
            : "Today"
          : d[o + "FullYear"]() === e &&
              d[o + "Month"]() === n &&
              d[o + "Date"]() === r
            ? u
              ? "Ysd"
              : "Yesterday"
            : s[o + "FullYear"]() === e &&
                s[o + "Month"]() === n &&
                s[o + "Date"]() === r
              ? u
                ? "Tmw"
                : "Tomorrow"
              : c
      );
    },
    u = function (t) {
      var e = new Date(t.getFullYear(), t.getMonth(), t.getDate());
      e.setDate(e.getDate() - ((e.getDay() + 6) % 7) + 3);
      var n = new Date(e.getFullYear(), 0, 4);
      n.setDate(n.getDate() - ((n.getDay() + 6) % 7) + 3);
      var r = e.getTimezoneOffset() - n.getTimezoneOffset();
      e.setHours(e.getHours() - r);
      var o = (e - n) / 6048e5;
      return 1 + Math.floor(o);
    },
    i = function (t) {
      var e = t.getDay();
      return 0 === e && (e = 7), e;
    },
    d = function (t) {
      return (String(t).match(e) || [""])
        .pop()
        .replace(n, "")
        .replace(/GMT\+0000/g, "UTC");
    };
  function s() {
    const t = document.querySelector("#loading"),
      e = document.querySelector("#content");
    (t.style.display = "none"), (e.style.display = "block");
  }
  function m(t) {
    const e = [],
      n = new Date(t.current.last_updated).getHours(),
      r = t.forecast.forecastday[0].hour,
      o = t.forecast.forecastday[1].hour;
    for (let t = 0; t < r.length; t++)
      t > n &&
        e.push({
          time: r[t].time,
          temperature: Math.round(r[t].temp_c),
          condition: r[t].condition.text,
          conditionIcon: `https://${r[t].condition.icon.slice(2)}`,
        });
    for (let t = 0; t < o.length; t++)
      t <= n &&
        e.push({
          time: o[t].time,
          temperature: Math.round(o[t].temp_c),
          condition: o[t].condition.text,
          conditionIcon: `https://${o[t].condition.icon.slice(2)}`,
        });
    return e;
  }
  function l(t) {
    const e = document.createElement("div");
    e.classList.add("weather-per-hour");
    const n = document.createElement("div"),
      r = new Image(),
      o = document.createElement("div"),
      c = document.createElement("span");
    c.classList.add("number");
    const a = document.createElement("span");
    a.classList.add("unit"), o.append(c, a);
    let u = new Date(t.time).getHours();
    return (
      1 === u.toString().length && (u = `0${u}`),
      (n.textContent = `${u}:00`),
      (r.src = t.conditionIcon),
      (c.textContent = t.temperature),
      (a.textContent = "°C"),
      "fahrenheit" ===
        document.querySelector(".temperature-units.active").value &&
        ((c.textContent = Math.round((9 * Number(t.temperature)) / 5 + 32)),
        (a.textContent = "°F ")),
      e.append(n, r, o),
      e
    );
  }
  function y(e) {
    (document.querySelector("input + span").textContent = ""),
      e &&
        (async function (t) {
          const e = `http://api.weatherapi.com/v1/forecast.json?key=73b76e4355924104b6c103812232611&q=${t}&days=3`;
          try {
            !(function () {
              const t = document.querySelector("#loading"),
                e = document.querySelector("#content");
              (t.style.display = "block"), (e.style.display = "none");
            })();
            const t = await fetch(e, { mode: "cors" });
            if (!t.ok) throw new Error("Location not found");
            const n = await t.json();
            return s(), n;
          } catch (t) {
            return (
              (document.querySelector("input + span").textContent = t),
              document.querySelector("form").reset(),
              s(),
              null
            );
          }
        })(e).then((e) => {
          if (!e) return;
          !(function () {
            const t = document.querySelector(".hourly-data.active"),
              e = document.querySelector(".dot.active"),
              n = document.querySelector(".show-hourly"),
              r = document.querySelector(".dots-container");
            t.classList.toggle("active"),
              e.classList.toggle("active"),
              [...n.children][0].classList.toggle("active"),
              [...r.children][0].classList.toggle("active");
          })(),
            (function () {
              const t = document.querySelector(".two-days-forecast");
              "" === t.textContent || t.replaceChildren();
            })(),
            m(e);
          const n = (function (t) {
            return {
              date: t.current.last_updated,
              currentLocation: t.location.name,
              currentCountry: t.location.country,
              currentTemperature: Math.round(t.current.temp_c),
              maxTemperature: t.forecast.forecastday[0].day.maxtemp_c,
              minTemperature: t.forecast.forecastday[0].day.mintemp_c,
              currentFeelsTemperature: Math.round(t.current.feelslike_c),
              currentCondition: t.current.condition.text,
              currentConditionIcon: t.current.condition.icon,
              currentWindSpeed: Math.round(t.current.wind_kph),
              currentPrecipitation: t.current.precip_mm,
              currentHumidity: t.current.humidity,
            };
          })(e);
          var s;
          (s = (function (e) {
            return (function (e, n, s, m) {
              if (
                (1 !== arguments.length ||
                  "string" != typeof e ||
                  /\d/.test(e) ||
                  ((n = e), (e = void 0)),
                (e = e || 0 === e ? e : new Date()) instanceof Date ||
                  (e = new Date(e)),
                isNaN(e))
              )
                throw TypeError("Invalid date");
              var l = (n = String(r[n] || n || r.default)).slice(0, 4);
              ("UTC:" !== l && "GMT:" !== l) ||
                ((n = n.slice(4)), (s = !0), "GMT:" === l && (m = !0));
              var y = function () {
                  return s ? "getUTC" : "get";
                },
                f = function () {
                  return e[y() + "Date"]();
                },
                h = function () {
                  return e[y() + "Day"]();
                },
                p = function () {
                  return e[y() + "Month"]();
                },
                g = function () {
                  return e[y() + "FullYear"]();
                },
                C = function () {
                  return e[y() + "Hours"]();
                },
                v = function () {
                  return e[y() + "Minutes"]();
                },
                S = function () {
                  return e[y() + "Seconds"]();
                },
                M = function () {
                  return e[y() + "Milliseconds"]();
                },
                T = function () {
                  return s ? 0 : e.getTimezoneOffset();
                },
                x = function () {
                  return u(e);
                },
                D = {
                  d: function () {
                    return f();
                  },
                  dd: function () {
                    return c(f());
                  },
                  ddd: function () {
                    return o.dayNames[h()];
                  },
                  DDD: function () {
                    return a({
                      y: g(),
                      m: p(),
                      d: f(),
                      _: y(),
                      dayName: o.dayNames[h()],
                      short: !0,
                    });
                  },
                  dddd: function () {
                    return o.dayNames[h() + 7];
                  },
                  DDDD: function () {
                    return a({
                      y: g(),
                      m: p(),
                      d: f(),
                      _: y(),
                      dayName: o.dayNames[h() + 7],
                    });
                  },
                  m: function () {
                    return p() + 1;
                  },
                  mm: function () {
                    return c(p() + 1);
                  },
                  mmm: function () {
                    return o.monthNames[p()];
                  },
                  mmmm: function () {
                    return o.monthNames[p() + 12];
                  },
                  yy: function () {
                    return String(g()).slice(2);
                  },
                  yyyy: function () {
                    return c(g(), 4);
                  },
                  h: function () {
                    return C() % 12 || 12;
                  },
                  hh: function () {
                    return c(C() % 12 || 12);
                  },
                  H: function () {
                    return C();
                  },
                  HH: function () {
                    return c(C());
                  },
                  M: function () {
                    return v();
                  },
                  MM: function () {
                    return c(v());
                  },
                  s: function () {
                    return S();
                  },
                  ss: function () {
                    return c(S());
                  },
                  l: function () {
                    return c(M(), 3);
                  },
                  L: function () {
                    return c(Math.floor(M() / 10));
                  },
                  t: function () {
                    return C() < 12 ? o.timeNames[0] : o.timeNames[1];
                  },
                  tt: function () {
                    return C() < 12 ? o.timeNames[2] : o.timeNames[3];
                  },
                  T: function () {
                    return C() < 12 ? o.timeNames[4] : o.timeNames[5];
                  },
                  TT: function () {
                    return C() < 12 ? o.timeNames[6] : o.timeNames[7];
                  },
                  Z: function () {
                    return m ? "GMT" : s ? "UTC" : d(e);
                  },
                  o: function () {
                    return (
                      (T() > 0 ? "-" : "+") +
                      c(
                        100 * Math.floor(Math.abs(T()) / 60) +
                          (Math.abs(T()) % 60),
                        4,
                      )
                    );
                  },
                  p: function () {
                    return (
                      (T() > 0 ? "-" : "+") +
                      c(Math.floor(Math.abs(T()) / 60), 2) +
                      ":" +
                      c(Math.floor(Math.abs(T()) % 60), 2)
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
                    return x();
                  },
                  WW: function () {
                    return c(x());
                  },
                  N: function () {
                    return i(e);
                  },
                };
              return n.replace(t, function (t) {
                return t in D ? D[t]() : t.slice(1, t.length - 1);
              });
            })(new Date(e), "dddd, mmmm dS, yyyy, HH:MM");
          })(n.date)),
            (document.querySelector("#date").textContent = s),
            (function (t) {
              const e = document.querySelector("#city"),
                n = document.querySelector("#country"),
                r = document.querySelector(".temperature-units.active"),
                o = document.querySelector("#current-temperature .number"),
                c = document.querySelector("#current-temperature .unit"),
                a = document.querySelector("#current-condition-icon"),
                u = document.querySelector("#current-condition"),
                i = document.querySelector(".info .number"),
                d = document.querySelector(".info .unit"),
                s = document.querySelector("#wind-speed-info"),
                m = document.querySelector("#precipitations-info"),
                l = document.querySelector("#humidity-info");
              (e.textContent = t.currentLocation),
                (n.textContent = t.currentCountry),
                (o.textContent = t.currentTemperature),
                (c.textContent = "°C"),
                (a.src = t.currentConditionIcon),
                (u.textContent = t.currentCondition),
                (i.textContent = t.currentFeelsTemperature),
                (d.textContent = "°C"),
                (s.textContent = `${t.currentWindSpeed} km/h`),
                (m.textContent = `${t.currentPrecipitation} mm`),
                (l.textContent = `${t.currentHumidity}%`),
                "fahrenheit" === r.value &&
                  ((o.textContent = Math.round(
                    (9 * Number(t.currentTemperature)) / 5 + 32,
                  )),
                  (i.textContent = Math.round(
                    (9 * Number(t.currentFeelsTemperature)) / 5 + 32,
                  )),
                  (c.textContent = "°F"),
                  (d.textContent = "°F "));
            })(n),
            (function (t) {
              const e = document.querySelector("[data-info-one]"),
                n = document.querySelector("[data-info-two]"),
                r = document.querySelector("[data-info-three]");
              e.replaceChildren(), n.replaceChildren(), r.replaceChildren();
              const o = t.slice(0, 8),
                c = t.slice(8, 16),
                a = t.slice(16, 24);
              o.forEach((t) => {
                e.appendChild(l(t));
              }),
                c.forEach((t) => {
                  n.appendChild(l(t));
                }),
                a.forEach((t) => {
                  r.appendChild(l(t));
                });
            })(m(e));
          const y = (function (t) {
            const e = t.forecast.forecastday.slice(1),
              n = [];
            return (
              e.forEach((t) => {
                n.push({
                  time: t.date,
                  temperature: t.day.avgtemp_c,
                  maxTemp: t.day.maxtemp_c,
                  minTemp: t.day.mintemp_c,
                  conditionIcon: `https://${t.day.condition.icon.slice(2)}`,
                  rainChance: t.day.daily_chance_of_rain,
                  humidity: t.day.avghumidity,
                });
              }),
              n
            );
          })(e);
          y.forEach((t) => {
            !(function (t) {
              const e = document.querySelector(".two-days-forecast"),
                n = document.createElement("div");
              n.classList.add("daily-forecast");
              const r = document.createElement("div");
              r.classList.add("weekday");
              const o = new Image(),
                c = document.createElement("div");
              c.classList.add("daily-forecast-temperature");
              const a = document.createElement("div");
              a.classList.add("forecast-max-temp");
              const u = document.createElement("span");
              u.classList.add("number");
              const i = document.createElement("span");
              i.classList.add("unit");
              const d = document.createElement("div");
              d.classList.add("forecast-min-temp");
              const s = document.createElement("span");
              s.classList.add("number");
              const m = document.createElement("span");
              m.classList.add("unit");
              const l = document.createElement("div");
              l.classList.add("forecast-rain");
              const y = document.createElement("div");
              y.classList.add("forecast-humidity"),
                a.append(u, i),
                d.append(s, m),
                (r.textContent = [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ][new Date(t.time).getDay()]),
                (o.src = t.conditionIcon),
                (u.textContent = `${Math.round(t.maxTemp)}`),
                (i.textContent = "°C"),
                (s.textContent = `${Math.round(t.minTemp)}`),
                (m.textContent = "°C"),
                (l.textContent = `${t.rainChance}%`),
                (y.textContent = `${t.humidity}%`),
                "fahrenheit" ===
                  document.querySelector(".temperature-units.active").value &&
                  ((u.textContent = Math.round(
                    (9 * Number(t.maxTemp)) / 5 + 32,
                  )),
                  (s.textContent = Math.round(
                    (9 * Number(t.minTemp)) / 5 + 32,
                  )),
                  (i.textContent = "°F"),
                  (m.textContent = "°F")),
                c.append(a, d),
                n.append(r, o, c, l, y),
                e.appendChild(n);
            })(t);
          }),
            document.querySelector("form").reset();
        });
  }
  function f(t) {
    const e = document.querySelector(".hourly-data.active"),
      n = document.querySelector(".dot.active"),
      r = document.querySelector(".show-hourly"),
      o = document.querySelector(".dots-container"),
      c = [...r.children].indexOf(e);
    let a;
    t.target.classList.contains("move-weather")
      ? ("prev" === t.target.dataset.move && (a = c - 1),
        "next" === t.target.dataset.move && (a = c + 1),
        a >= [...r.children].length && (a = 0),
        a < 0 && (a = [...r.children].length - 1))
      : t.target.classList.contains("dot") &&
        (a = [...o.children].indexOf(t.target)),
      e.classList.toggle("active"),
      n.classList.toggle("active"),
      [...r.children][a].classList.toggle("active"),
      [...o.children][a].classList.toggle("active");
  }
  const h = document.querySelector("form"),
    p = document.querySelector("#search-location"),
    g = document.querySelector("input"),
    C = document.querySelectorAll(".temperature-units"),
    v = document.querySelectorAll(".move-weather"),
    S = document.querySelectorAll(".dot");
  h.addEventListener("submit", (t) => {
    t.preventDefault();
  }),
    document.addEventListener("DOMContentLoaded", () => {
      y("madrid");
    }),
    p.addEventListener("click", () => {
      y(g.value);
    }),
    v.forEach((t) => {
      t.addEventListener("click", (t) => {
        f(t);
      });
    }),
    S.forEach((t) => {
      t.addEventListener("click", (t) => {
        f(t);
      });
    }),
    C.forEach((t) => {
      t.addEventListener("click", (t) => {
        !(function (t) {
          if (t.target.classList.contains("active")) return;
          const e = document.querySelector(".temperature-units.active");
          document.querySelectorAll(".number").forEach((e) => {
            if ("fahrenheit" === t.target.value) {
              const t = Math.round((9 * Number(e.textContent)) / 5 + 32);
              (e.textContent = t), (e.nextElementSibling.textContent = "°F");
            } else {
              const t = Math.round((5 * (Number(e.textContent) - 32)) / 9);
              (e.textContent = t), (e.nextElementSibling.textContent = "°C");
            }
          }),
            e.classList.toggle("active"),
            t.target.classList.toggle("active");
        })(t);
      });
    });
})();
//# sourceMappingURL=main.js.map
