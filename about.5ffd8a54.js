var e,t,n,o,r;t={},n={},null==(o=(e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire2156)&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequire2156=o),(r=o.register)("hp7O9",function(e,t){let n=document.querySelector(".js-modal-open"),o=document.querySelector(".js-modal-close"),r=document.querySelector(".js-backdrop");function c(){r.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",d),r.removeEventListener("click",i)}function d(e){"Escape"===e.code&&c()}function i(e){e.target===r&&c()}n.addEventListener("click",function(){r.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",d),r.addEventListener("click",i)}),o.addEventListener("click",c)}),r("i8Q71",function(e,t){o("4hvgF");let n=document.querySelector(".js-home-link"),r=document.querySelector(".js-about-link"),c=document.querySelector(".js-products-link"),d=document.querySelector(".js-contacts-link"),i=document.querySelector(".about-container"),s=document.querySelector(".products-container"),l=document.querySelector(".contacts-container");i?r.classList.add("header-active-link"):s?c.classList.add("header-active-link"):l?d.classList.add("header-active-link"):n.classList.add("header-active-link")}),r("4hvgF",function(e,t){document.addEventListener("DOMContentLoaded",function(){if(window.location.hostname.endsWith("github.io")){let e=document.querySelector(".js-header-logo"),t=document.querySelector(".js-home-link");e&&e.setAttribute("href","/feraxoft"),t&&t.setAttribute("href","/feraxoft")}})}),o("hp7O9"),o("i8Q71");
//# sourceMappingURL=about.5ffd8a54.js.map
