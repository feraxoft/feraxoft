!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},i=e.parcelRequire2156;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in s){var i=s[e];delete s[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},e.parcelRequire2156=i);var r=i.register;r("hp7O9",function(e,t){let s=document.querySelector(".js-modal-open"),i=document.querySelector(".js-modal-close"),r=document.querySelector(".js-backdrop");function o(){r.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",a),r.removeEventListener("click",n)}function a(e){"Escape"===e.code&&o()}function n(e){e.target===r&&o()}s.addEventListener("click",function(){r.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",a),r.addEventListener("click",n)}),i.addEventListener("click",o)}),r("i8Q71",function(e,t){let s=document.querySelector(".js-home-link"),i=document.querySelector(".js-about-link"),r=document.querySelector(".js-products-link"),o=document.querySelector(".js-contacts-link"),a=document.querySelector(".about-container"),n=document.querySelector(".products-container"),l=document.querySelector(".contacts-container");a?i.classList.add("header-active-link"):n?r.classList.add("header-active-link"):l?o.classList.add("header-active-link"):s.classList.add("header-active-link")}),i("hp7O9"),i("i8Q71");class o{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let a={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},n=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},l=async(e,t,s={})=>{let i=await fetch(a.origin+e,{method:"POST",headers:s,body:t}),r=await i.text(),n=new o(i.status,r);if(i.ok)return n;throw n},c=(e,t,s)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||"string"!=typeof s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},d=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},u=e=>e.webdriver||!e.languages||0===e.languages.length,m=()=>new o(451,"Unavailable For Headless Browser"),h=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},p=e=>!e.list?.length||!e.watchVariable,y=(e,t)=>e instanceof FormData?e.get(t):e[t],v=(e,t)=>{if(p(e))return!1;h(e.list,e.watchVariable);let s=y(t,e.watchVariable);return"string"==typeof s&&e.list.includes(s)},f=()=>new o(403,"Forbidden"),b=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a string"},g=async(e,t,s)=>{let i=Number(await s.get(e)||0);return t-Date.now()+i},w=async(e,t,s)=>{if(!t.throttle||!s)return!1;b(t.throttle,t.id);let i=t.id||e;return await g(i,t.throttle,s)>0||(await s.set(i,Date.now().toString()),!1)},L=()=>new o(429,"Too Many Requests");var k=async(e,t,s,i)=>{let r=n(i),o=r.publicKey||a.publicKey,h=r.blockHeadless||a.blockHeadless,p=a.storageProvider||r.storageProvider,y={...a.blockList,...r.blockList},b={...a.limitRate,...r.limitRate};return h&&u(navigator)?Promise.reject(m()):(c(o,e,t),d(s),s&&v(y,s))?Promise.reject(f()):await w(location.pathname,b,p)?Promise.reject(L()):l("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:o,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"})};let j=document.querySelector(".contacts-form"),S=document.querySelector(".js-contacts-btn"),q=document.querySelector(".js-contacts-success"),T=document.querySelector(".js-contacts-error");j.addEventListener("submit",function(e){e.preventDefault(),S.innerHTML='<span class="loader"></span>';let t=e.target;k("service_sjub4p4","template_aqc7han",{userName:t.elements.name.value,userEmail:t.elements.email.value,userMessage:t.elements.message.value},{publicKey:"RCbRpHCE5ZYDG6Ivp"}).then(()=>{t.reset(),T.classList.contains("visually-hidden")||T.classList.add("visually-hidden"),S.classList.add("visually-hidden"),q.classList.remove("visually-hidden")},e=>{S.innerHTML="<span>Send</span>",T.classList.remove("visually-hidden"),console.log(e.text)})})}();
//# sourceMappingURL=contacts.747c63f1.js.map
