var e,n,o,t;n={},o={},null==(t=(e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire2156)&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var d={id:e,exports:{}};return n[e]=d,t.call(d.exports,d,d.exports),d.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequire2156=t),(0,t.register)("hp7O9",function(e,n){let o=document.querySelector(".js-modal-open"),t=document.querySelector(".js-modal-close"),d=document.querySelector(".js-backdrop");function r(){d.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",i),d.removeEventListener("click",c)}function i(e){"Escape"===e.code&&r()}function c(e){e.target===d&&r()}o.addEventListener("click",function(){d.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",i),d.addEventListener("click",c)}),t.addEventListener("click",r)}),t("hp7O9");
//# sourceMappingURL=index.520fe5e6.js.map
