var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire2156;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var c={id:e,exports:{}};return t[e]=c,o.call(c.exports,c,c.exports),c.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire2156=o);var c=o.register;c("8iqII",function(e,t){let n=document.querySelector(".js-modal-open"),o=document.querySelector(".js-modal-close"),c=document.querySelector(".js-backdrop");function r(){c.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",d),c.removeEventListener("click",i)}function d(e){"Escape"===e.code&&r()}function i(e){e.target===c&&r()}n.addEventListener("click",function(){c.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",d),c.addEventListener("click",i)}),o.addEventListener("click",r)}),c("bUb57",function(e,t){let n=document.querySelector(".js-home-link"),o=document.querySelector(".js-about-link"),c=document.querySelector(".js-products-link"),r=document.querySelector(".js-contacts-link"),d=document.querySelector(".about-container"),i=document.querySelector(".products-container"),s=document.querySelector(".contacts-container");d?o.classList.add("header-active-link"):i?c.classList.add("header-active-link"):s?r.classList.add("header-active-link"):n.classList.add("header-active-link")}),o("8iqII"),o("bUb57");
//# sourceMappingURL=products.5ca4fb0b.js.map
