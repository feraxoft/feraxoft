!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequire2156;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequire2156=r);var i=r.register;i("hp7O9",function(e,t){let o=document.querySelector(".js-modal-open"),r=document.querySelector(".js-modal-close"),i=document.querySelector(".js-backdrop");function a(){i.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",s),i.removeEventListener("click",n)}function s(e){"Escape"===e.code&&a()}function n(e){e.target===i&&a()}o.addEventListener("click",function(){i.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",s),i.addEventListener("click",n)}),r.addEventListener("click",a)}),i("i8Q71",function(e,t){r("4hvgF");let o=document.querySelector(".js-home-link"),i=document.querySelector(".js-about-link"),a=document.querySelector(".js-products-link"),s=document.querySelector(".js-contacts-link"),n=document.querySelector(".about-container"),l=document.querySelector(".products-container"),c=document.querySelector(".contacts-container");n?i.classList.add("header-active-link"):l?a.classList.add("header-active-link"):c?s.classList.add("header-active-link"):o.classList.add("header-active-link")}),i("4hvgF",function(e,t){document.addEventListener("DOMContentLoaded",function(){if(window.location.hostname.endsWith("github.io")){let e=document.querySelector(".js-header-logo"),t=document.querySelector(".js-home-link");e&&e.setAttribute("href","/feraxoft"),t&&t.setAttribute("href","/feraxoft")}})}),r("hp7O9"),r("i8Q71");class a{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let s={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},n=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},l=async(e,t,o={})=>{let r=await fetch(s.origin+e,{method:"POST",headers:o,body:t}),i=await r.text(),n=new a(r.status,i);if(r.ok)return n;throw n},c=(e,t,o)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o||"string"!=typeof o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},d=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},u=e=>e.webdriver||!e.languages||0===e.languages.length,m=()=>new a(451,"Unavailable For Headless Browser"),h=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},f=e=>!e.list?.length||!e.watchVariable,p=(e,t)=>e instanceof FormData?e.get(t):e[t],b=(e,t)=>{if(f(e))return!1;h(e.list,e.watchVariable);let o=p(t,e.watchVariable);return"string"==typeof o&&e.list.includes(o)},g=()=>new a(403,"Forbidden"),v=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a string"},y=async(e,t,o)=>{let r=Number(await o.get(e)||0);return t-Date.now()+r},w=async(e,t,o)=>{if(!t.throttle||!o)return!1;v(t.throttle,t.id);let r=t.id||e;return await y(r,t.throttle,o)>0||(await o.set(r,Date.now().toString()),!1)},k=()=>new a(429,"Too Many Requests");var j=async(e,t,o,r)=>{let i=n(r),a=i.publicKey||s.publicKey,h=i.blockHeadless||s.blockHeadless,f=s.storageProvider||i.storageProvider,p={...s.blockList,...i.blockList},v={...s.limitRate,...i.limitRate};return h&&u(navigator)?Promise.reject(m()):(c(a,e,t),d(o),o&&b(p,o))?Promise.reject(g()):await w(location.pathname,v,f)?Promise.reject(k()):l("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:a,service_id:e,template_id:t,template_params:o}),{"Content-type":"application/json"})};document.querySelector(".contacts-form").addEventListener("submit",function(e){e.preventDefault();let t=e.target;j("service_sjub4p4","template_aqc7han",{userName:t.elements.name.value,userEmail:t.elements.email.value,userMessage:t.elements.message.value},{publicKey:"RCbRpHCE5ZYDG6Ivp"}).then(()=>{t.reset()},e=>{console.log(e.text)})})}();
//# sourceMappingURL=contacts.afe74927.js.map
