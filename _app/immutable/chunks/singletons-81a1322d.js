import{w as u}from"./index-9b3b7788.js";import{b as g,v as _}from"./shared-23917130.js";const E="sveltekit:scroll",R="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function k(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function A(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function h(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function I(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=h(e)}}function y(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,o=!n||!!a||v(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:o,target:a}}function x(e){let t=null,n=null,a=null,o=null,r=e;for(;r&&r!==document.documentElement;)n===null&&(n=l(r,"preload-code")),a===null&&(a=l(r,"preload-data")),t===null&&(t=l(r,"noscroll")),o===null&&(o=l(r,"reload")),r=h(r);return{preload_code:d[n??"off"],preload_data:d[a??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function p(e){const t=u(e);let n=!0;function a(){n=!0,t.update(s=>s)}function o(s){n=!1,t.set(s)}function r(s){let i;return t.subscribe(c=>{(i===void 0||n&&c!==i)&&s(i=c)})}return{notify:a,set:o,subscribe:r}}function b(){const{set:e,subscribe:t}=u(!1);let n;async function a(){clearTimeout(n);const o=await fetch(`${g}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const s=(await o.json()).version!==_;return s&&(e(!0),clearTimeout(n)),s}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:a}}function v(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function S(e){e.client}const T={url:p({}),page:p({}),navigating:u(null),updated:b()};export{R as I,f as P,E as S,y as a,x as b,A as c,S as d,I as f,k as g,v as i,T as s};
