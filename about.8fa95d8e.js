var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire2156;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var c={id:e,exports:{}};return t[e]=c,o.call(c.exports,c,c.exports),c.exports}var d=Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequire2156=o);var c=o.register;c("ktcBa",function(e,t){document.addEventListener("DOMContentLoaded",function(){if(window.location.hostname.endsWith("github.io")){let e=document.createElement("base");e.setAttribute("href","https://feraxoft.github.io/feraxoft/"),document.head.appendChild(e)}})}),c("8iqII",function(e,t){let n=document.querySelector(".js-modal-open"),o=document.querySelector(".js-modal-close"),c=document.querySelector(".js-backdrop");function d(){c.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",i),c.removeEventListener("click",r)}function i(e){"Escape"===e.code&&d()}function r(e){e.target===c&&d()}n.addEventListener("click",function(){c.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",i),c.addEventListener("click",r)}),o.addEventListener("click",d)}),c("bUb57",function(e,t){let n=document.querySelector(".js-home-link"),o=document.querySelector(".js-about-link"),c=document.querySelector(".js-products-link"),d=document.querySelector(".js-contacts-link"),i=document.querySelector(".about-container"),r=document.querySelector(".products-container"),s=document.querySelector(".contacts-container");i?o.classList.add("header-active-link"):r?c.classList.add("header-active-link"):s?d.classList.add("header-active-link"):n.classList.add("header-active-link")}),o("ktcBa"),o("8iqII"),o("bUb57");
//# sourceMappingURL=about.8fa95d8e.js.map
