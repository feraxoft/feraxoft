var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire2156;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var d={id:e,exports:{}};return n[e]=d,t.call(d.exports,d,d.exports),d.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequire2156=t),(0,t.register)("8iqII",function(e,n){let o=document.querySelector(".js-modal-open"),t=document.querySelector(".js-modal-close"),d=document.querySelector(".js-backdrop");function i(){d.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",r),d.removeEventListener("click",c)}function r(e){"Escape"===e.code&&i()}function c(e){e.target===d&&i()}o.addEventListener("click",function(){d.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",r),d.addEventListener("click",c)}),t.addEventListener("click",i)}),t("8iqII");
//# sourceMappingURL=products.02e4bd86.js.map
