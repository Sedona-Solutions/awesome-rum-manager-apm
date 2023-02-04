import{a1 as fr,S as vr,i as mr,s as pr,k as h,q as le,a as C,w as yr,l as A,m as O,r as ue,h as S,c as H,x as br,n as u,b as St,H as l,y as hr,a2 as Ar,f as Er,t as _r,z as Sr,$ as gr,D as wr,G as ar}from"../../../../chunks/shared-fa10f55a.js";import{T as Vt}from"../../../../chunks/types-6e0b20c4.js";import{B as Or}from"../../../../chunks/BootstrapIcon-52726957.js";import{e as ze,w as Dr}from"../../../../chunks/singletons-6a4e9829.js";import{P as Tr}from"../../../../chunks/public-d332d5c3.js";ze.disable_scroll_handling;const kr=ze.goto;ze.invalidate;ze.invalidateAll;ze.preload_data;ze.preload_code;ze.before_navigate;ze.after_navigate;function Pr(e,...t){const r=e.subscribe(...t);return r.unsubscribe?()=>r.unsubscribe():r}function We(e){let t;return Pr(e,r=>t=r)(),t}class Ir extends Error{constructor(t,r){super(t),this.name="FelteSubmitError",this.response=r}}function Nr(e,t){return Object.keys(e).some(n=>t(e[n]))}function wt(e,t){return Object.keys(e||{}).reduce((n,s)=>Object.assign(Object.assign({},n),{[s]:t(e[s])}),{})}function D(e){return Object.prototype.toString.call(e)==="[object Object]"}function Te(e){return Object.keys(e||{}).reduce((t,r)=>Object.assign(Object.assign({},t),{[r]:D(e[r])?Te(e[r]):Array.isArray(e[r])?[...e[r]]:e[r]}),{})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Lr(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r}function xr(e){return function(t){if(D(t)){const r=ke(t,e);return Lr(r,["key"])}return e}}function ke(e,t){return wt(e,r=>D(r)?ke(r,t):Array.isArray(r)?r.map(xr(t)):t)}function Me(...e){const t=e.pop(),r=e.shift();if(typeof r=="string")return r;const n=Te(r);if(e.length===0)return n;for(const s of e){if(!s)continue;if(typeof s=="string")return s;let i=t(n,s);if(typeof i<"u")return i;const o=Array.from(new Set(Object.keys(n).concat(Object.keys(s))));for(const f of o)if(i=t(n[f],s[f]),typeof i<"u")n[f]=i;else if(D(s[f])&&D(n[f]))n[f]=Me(n[f],s[f],t);else if(Array.isArray(s[f]))n[f]=s[f].map((_,g)=>{if(!D(_))return _;const m=Array.isArray(n[f])?n[f][g]:n[f];return Me(m,_,t)});else if(D(s[f])){const _=ke(Te(s[f]),void 0);n[f]=Me(_,s[f],t)}else typeof s[f]<"u"&&(n[f]=s[f])}return n}function Fr(e,t){if(!(D(e)&&D(t))){if(Array.isArray(t)){if(t.some(D))return;const r=Array.isArray(e)?e:[];return t.map((n,s)=>{var i;return(i=r[s])!==null&&i!==void 0?i:n})}if(typeof e<"u")return e}}function er(...e){return Me(...e,Fr)}function or(...e){return Me(...e,()=>{})}function qe(e,t,r){const n=i=>String.prototype.split.call(t,i).filter(Boolean).reduce((o,f)=>o!=null?o[f]:o,e),s=n(/[,[\]]+?/)||n(/[,[\].]+?/);return s===void 0||s===e?r:s}function at(e,t,r){e&&(e=Te(e)),D(e)||(e={});const n=Array.isArray(t)?t:t.match(/[^.[\]]+/g)||[],s=n[n.length-1];if(!s)return e;let i=e;for(let o=0;o<n.length-1;o++){const f=n[o];if(!i[f]||!D(i[f])&&!Array.isArray(i[f])){const _=n[o+1];isNaN(Number(_))?i[f]={}:i[f]=[]}i=i[f]}return i[s]=r(i[s]),e}function $(e,t,r){return at(e,t,()=>r)}function nt(e,t){if(!e||Object(e)!==e)return;typeof e<"u"&&(e=Te(e));const r=Array.isArray(t)?t:t.toString().match(/[^.[\]]+/g)||[],n=r.length===1?e:qe(e,r.slice(0,-1).join("."));return Array.isArray(n)?n.splice(Number(r[r.length-1]),1):n==null||delete n[r[r.length-1]],e}function it(e,t){return Nr(e,r=>D(r)?it(r,t):Array.isArray(r)?r.length===0||r.every(n=>typeof n=="string")?t(r):r.some(n=>D(n)?it(n,t):t(n)):t(r))}function Ve(e){return(e==null?void 0:e.nodeName)==="INPUT"}function Ur(e){return(e==null?void 0:e.nodeName)==="TEXTAREA"}function et(e){return(e==null?void 0:e.nodeName)==="SELECT"}function Ot(e){return(e==null?void 0:e.nodeName)==="FIELDSET"}function de(e){return Ve(e)||Ur(e)||et(e)}function tr(e){return e.nodeType===Node.ELEMENT_NODE}function ce(e,t){return t??(de(e)?e.name:"")}function xt(e){let t=e;for(;t&&t.nodeName!=="FORM";){if(t.hasAttribute("data-felte-ignore"))return!0;t=t.parentElement}return!1}function Br(e,t){if(!(D(e)||D(t))){if(e===null||e==="")return t;if(t===null||t===""||!t)return e;if(!(!e||!t)){if(Array.isArray(e)){if(!Array.isArray(t))return[...e,t];const r=[],n=Math.max(t.length,e.length);for(let s=0;s<n;s++){let i=e[s],o=t[s];!D(i)&&!D(o)?(Array.isArray(i)||(i=[i]),Array.isArray(o)||(o=[o]),r.push(...i,...o)):r.push(Ze([i??{},o??{}]))}return r.filter(Boolean)}return Array.isArray(t)||(t=[t]),[e,...t].reduce((r,n)=>r.concat(n),[]).filter(Boolean)}}}function Ze(e){return Me(...e,Br)}function $r(e,t){return t?(Array.isArray(t)?t:[t]).map(n=>n(e)):[]}function Ft(e,t){return t?Array.isArray(t)?t.reduce((r,n)=>n(r),e):t(e):e}function lr(e=8){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let r="";for(let n=0;n<e;n++)r+=t.charAt(Math.floor(Math.random()*t.length));return r}function gt(e,t,{onInit:r,onEnd:n}={}){let s;return(...i)=>{s||r==null||r(),s&&clearTimeout(s),s=setTimeout(()=>{e.apply(this,i),s=void 0,n==null||n()},t)}}function Ut(e){if(de(e))return[e];if(e.childElementCount===0)return[];const t=new Set;for(const r of e.children){if(de(r)&&t.add(r),Ot(r))for(const n of r.elements)de(n)&&t.add(n);r.childElementCount>0&&Ut(r).forEach(n=>t.add(n))}return Array.from(t)}function ur(e){for(const t of e.elements)!de(t)&&!Ot(t)||e.hasAttribute("data-felte-keep-on-remove")&&!t.hasAttribute("data-felte-keep-on-remove")&&(t.dataset.felteKeepOnRemove=e.dataset.felteKeepOnRemove)}function cr(e){return e.type.match(/^(number|range)$/)?e.value?+e.value:void 0:e.value}function rr(e){var t;let r={},n={};for(const s of e.elements){if(Ot(s)&&ur(s),!de(s)||!s.name)continue;const i=ce(s);if(Ve(s)){if(s.type==="checkbox"){if(typeof qe(r,i)>"u"){if(Array.from(e.querySelectorAll(`[name="${s.name}"]`)).filter(_=>de(_)?i===ce(_):!1).length===1){r=$(r,i,s.checked),n=$(n,i,!1);continue}r=$(r,i,s.checked?[s.value]:[]),n=$(n,i,!1);continue}Array.isArray(qe(r,i))&&s.checked&&(r=at(r,i,f=>[...f,s.value]));continue}if(s.type==="radio"){if(qe(r,i))continue;r=$(r,i,s.checked?s.value:void 0),n=$(n,i,!1);continue}if(s.type==="file"){r=$(r,i,s.multiple?Array.from(s.files||[]):(t=s.files)===null||t===void 0?void 0:t[0]),n=$(n,i,!1);continue}}else if(et(s)){if(!s.multiple)r=$(r,i,s.value);else{const _=Array.from(s.options).filter(g=>g.selected).map(g=>g.value);r=$(r,i,_)}n=$(n,i,!1);continue}const o=cr(s);r=$(r,i,o),n=$(n,i,!1)}return{defaultData:r,defaultTouched:n}}function jr(e,t){var r;if(!de(e))return;const n=t;if(Ve(e)){if(e.type==="checkbox"){const s=n;if(typeof s>"u"||typeof s=="boolean"){e.checked=!!s;return}Array.isArray(s)&&(s.includes(e.value)?e.checked=!0:e.checked=!1);return}if(e.type==="radio"){const s=n;e.value===s?e.checked=!0:e.checked=!1;return}if(e.type==="file"){e.files=null,e.value="";return}}else if(et(e)){if(e.multiple){if(Array.isArray(n)){e.value=String((r=n[0])!==null&&r!==void 0?r:"");const i=n.map(o=>String(o));for(const o of e.options)i.includes(o.value)?o.selected=!0:o.selected=!1}}else{e.value=String(n??"");for(const i of e.options)i.value===String(n)?i.selected=!0:i.selected=!1}return}e.value=String(n??"")}function Et(e,t){for(const r of e.elements){if(Ot(r)&&ur(r),!de(r)||!r.name)continue;const n=ce(r);jr(r,qe(t,n))}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function dr(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r}function Re(e,t){return wt(e,r=>D(r)?Re(r,t):Array.isArray(r)?r.length===0||r.every(n=>typeof n=="string")?t:r.map(n=>{const s=Re(n,t);return dr(s,["key"])}):t)}function Ce(e){return e?wt(e,t=>D(t)?Ce(t):Array.isArray(t)?t.length===0||t.every(r=>typeof r=="string")?t:t.map(r=>{if(!D(r))return r;const n=Ce(r);return n.key||(n.key=lr()),n}):t):{}}function st(e){return e?wt(e,t=>D(t)?Ce(t):Array.isArray(t)?t.length===0||t.every(r=>typeof r=="string")?t:t.map(r=>{if(!D(r))return r;const n=Ce(r);return dr(n,["key"])}):t):{}}function Wr(){class e extends CustomEvent{constructor(s){super("feltesuccess",{detail:s})}}class t extends CustomEvent{constructor(s){super("felteerror",{detail:s,cancelable:!0})}setErrors(s){this.preventDefault(),this.errors=s}}class r extends Event{constructor(){super("feltesubmit",{cancelable:!0})}handleSubmit(s){this.onSubmit=s}handleError(s){this.onError=s}handleSuccess(s){this.onSuccess=s}}return{createErrorEvent:n=>new t(n),createSubmitEvent:()=>new r,createSuccessEvent:n=>new e(n)}}function Rr(e){if(e)return async function(){let r=new FormData(e);const n=new URL(e.action),s=e.method.toLowerCase()==="get"?"get":n.searchParams.get("_method")||e.method;let i=e.enctype;e.querySelector('input[type="file"]')&&(i="multipart/form-data"),(s==="get"||i==="application/x-www-form-urlencoded")&&(r=new URLSearchParams(r));let o;s==="get"?(r.forEach((_,g)=>{n.searchParams.append(g,_)}),o={method:s,headers:{Accept:"application/json"}}):o={method:s,body:r,headers:Object.assign(Object.assign({},i!=="multipart/form-data"&&{"Content-Type":i}),{Accept:"application/json"})};const f=await window.fetch(n.toString(),o);if(f.ok)return f;throw new Ir("An error occurred while submitting the form",f)}}function _t(e,t,r,n){return at(e,t,s=>(typeof s<"u"&&!Array.isArray(s)||(s||(s=[]),typeof n>"u"?s.push(r):s.splice(n,0,r)),s))}function qr(e,t,r,n){return at(e,t,s=>(!s||!Array.isArray(s)||([s[r],s[n]]=[s[n],s[r]]),s))}function Cr(e,t,r,n){return at(e,t,s=>(!s||!Array.isArray(s)||s.splice(n,0,s.splice(r,1)[0]),s))}function nr(e){return typeof e=="function"}function He(e){return(r,n)=>{if(typeof r=="string"){const s=r;e(i=>{const o=nr(n)?n(qe(i,s)):n;return $(i,s,o)})}else e(s=>nr(r)?r(s):r)}}function Hr({stores:e,config:t,validateErrors:r,validateWarnings:n,_getCurrentExtenders:s}){var i;let o,f=Ce((i=t.initialValues)!==null&&i!==void 0?i:{});const{data:_,touched:g,errors:m,warnings:k,isDirty:N,isSubmitting:j,interacted:W}=e,P=He(_.update),Z=He(g.update),T=He(m.update),V=He(k.update);function fe(c){P(E=>{const p=c(E);return o&&Et(o,p),p})}const F=(c,E,p)=>{He(fe)(c,E),typeof c=="string"&&p&&Z(c,!0)};function Q(c,E,p){const I=D(E)?Re(E,!1):!1,K=D(I)?ke(I,[]):[];E=D(E)?Object.assign(Object.assign({},E),{key:lr()}):E,m.update(U=>_t(U,c,K,p)),k.update(U=>_t(U,c,K,p)),g.update(U=>_t(U,c,I,p)),_.update(U=>{const pe=_t(U,c,E,p);return setTimeout(()=>o&&Et(o,pe)),pe})}function M(c){m.update(c),k.update(c),g.update(c),_.update(E=>{const p=c(E);return setTimeout(()=>o&&Et(o,p)),p})}function z(c){M(E=>nt(E,c))}function ae(c,E,p){M(I=>qr(I,c,E,p))}function ge(c,E,p){M(I=>Cr(I,c,E,p))}function Ne(c){const E=qe(f,c),p=D(E)?Re(E,!1):!1,I=D(p)?ke(p,[]):[];_.update(K=>{const U=$(K,c,E);return o&&Et(o,U),U}),g.update(K=>$(K,c,p)),m.update(K=>$(K,c,I)),k.update(K=>$(K,c,I))}const y=He(j.update),q=He(N.update),we=He(W.update);async function ve(){const c=We(_);g.set(Re(c,!0)),W.set(null);const E=await r(c);return await n(c),E}function Pe(){F(Te(f)),Z(c=>ke(c,!1)),W.set(null),N.set(!1)}function R(c){return async function(p){var I,K,U,pe,Ie,ye,Ae;const{createErrorEvent:$e,createSubmitEvent:je,createSuccessEvent:Ee}=Wr(),Oe=je();o==null||o.dispatchEvent(Oe);const d=(K=(I=Oe.onError)!==null&&I!==void 0?I:c==null?void 0:c.onError)!==null&&K!==void 0?K:t.onError,a=(pe=(U=Oe.onSuccess)!==null&&U!==void 0?U:c==null?void 0:c.onSuccess)!==null&&pe!==void 0?pe:t.onSuccess,v=(Ae=(ye=(Ie=Oe.onSubmit)!==null&&Ie!==void 0?Ie:c==null?void 0:c.onSubmit)!==null&&ye!==void 0?ye:t.onSubmit)!==null&&Ae!==void 0?Ae:Rr(o);if(!v||(p==null||p.preventDefault(),Oe.defaultPrevented))return;j.set(!0),W.set(null);const b=st(We(_)),X=await r(b,c==null?void 0:c.validate),Le=await n(b,c==null?void 0:c.warn);if(Le&&k.set(or(ke(b,[]),Le)),g.set(Re(b,!0)),X&&(g.set(Re(X,!0)),it(X,G=>Array.isArray(G)?G.length>=1:!!G))){await new Promise(G=>setTimeout(G)),s().forEach(G=>{var _e;return(_e=G.onSubmitError)===null||_e===void 0?void 0:_e.call(G,{data:b,errors:X})}),j.set(!1);return}const te={setFields:F,setData:P,setTouched:Z,setErrors:T,setWarnings:V,unsetField:z,addField:Q,resetField:Ne,reset:Pe,setInitialValues:ee.setInitialValues,moveField:ge,swapFields:ae,form:o,controls:o&&Array.from(o.elements).filter(de),config:Object.assign(Object.assign({},t),c)};try{const B=await v(b,te);o==null||o.dispatchEvent(Ee(Object.assign({response:B},te))),await(a==null?void 0:a(B,te))}catch(B){const G=$e(Object.assign({error:B},te));if(o==null||o.dispatchEvent(G),!d&&!G.defaultPrevented)throw B;if(!d&&!G.errors)return;const _e=G.errors||await(d==null?void 0:d(B,te));_e&&(g.set(Re(_e,!0)),m.set(_e),await new Promise(re=>setTimeout(re)),s().forEach(re=>{var Se;return(Se=re.onSubmitError)===null||Se===void 0?void 0:Se.call(re,{data:b,errors:We(m)})}))}finally{j.set(!1)}}}const ee={setData:P,setFields:F,setTouched:Z,setErrors:T,setWarnings:V,setIsSubmitting:y,setIsDirty:q,setInteracted:we,validate:ve,reset:Pe,unsetField:z,resetField:Ne,addField:Q,swapFields:ae,moveField:ge,createSubmitHandler:R,handleSubmit:R(),setInitialValues:c=>{f=Ce(c)}};return{public:ee,private:{_setFormNode(c){o=c},_getInitialValues:()=>f}}}function Mr({helpers:e,stores:t,config:r,extender:n,createSubmitHandler:s,handleSubmit:i,_setFormNode:o,_getInitialValues:f,_setCurrentExtenders:_,_getCurrentExtenders:g}){const{setFields:m,setTouched:k,reset:N,setInitialValues:j}=e,{addValidator:W,addTransformer:P,validate:Z}=e,{data:T,errors:V,warnings:fe,touched:F,isSubmitting:Q,isDirty:M,interacted:z,isValid:ae,isValidating:ge}=t;function Ne(y){y.requestSubmit||(y.requestSubmit=i);function q(d){return function(a){return a({form:y,stage:d,controls:Array.from(y.elements).filter(de),data:T,errors:V,warnings:fe,touched:F,isValid:ae,isValidating:ge,isSubmitting:Q,isDirty:M,interacted:z,config:r,addValidator:W,addTransformer:P,setFields:m,validate:Z,reset:N,createSubmitHandler:s,handleSubmit:i})}}_(n.map(q("MOUNT"))),y.noValidate=!!r.validate;const{defaultData:we,defaultTouched:ve}=rr(y);o(y),j(or(Te(we),f())),m(f()),F.set(ve);function Pe(d){const a=ce(d),v=Array.from(y.querySelectorAll(`[name="${d.name}"]`)).filter(b=>de(b)?a===ce(b):!1);if(v.length!==0)return v.length===1?T.update(b=>$(b,ce(d),d.checked)):T.update(b=>$(b,ce(d),v.filter(Ve).filter(X=>X.checked).map(X=>X.value)))}function R(d){const a=y.querySelectorAll(`[name="${d.name}"]`),v=Array.from(a).find(b=>Ve(b)&&b.checked);T.update(b=>$(b,ce(d),v==null?void 0:v.value))}function ee(d){var a;const v=Array.from((a=d.files)!==null&&a!==void 0?a:[]);T.update(b=>$(b,ce(d),d.multiple?v:v[0]))}function me(d){if(!d.multiple)T.update(a=>$(a,ce(d),d.value));else{const a=Array.from(d.options).filter(v=>v.selected).map(v=>v.value);T.update(v=>$(v,ce(d),a))}}function c(d){const a=d.target;if(!a||!de(a)||et(a)||xt(a)||["checkbox","radio","file"].includes(a.type)||!a.name)return;M.set(!0);const v=cr(a);z.set(a.name),T.update(b=>$(b,ce(a),v))}function E(d){const a=d.target;if(!(!a||!de(a)||xt(a))&&a.name)if(k(ce(a),!0),z.set(a.name),(et(a)||["checkbox","radio","file","hidden"].includes(a.type))&&M.set(!0),a.type==="hidden"&&T.update(v=>$(v,ce(a),a.value)),et(a))me(a);else if(Ve(a))a.type==="checkbox"?Pe(a):a.type==="radio"?R(a):a.type==="file"&&ee(a);else return}function p(d){const a=d.target;!a||!de(a)||xt(a)||a.name&&(k(ce(a),!0),z.set(a.name))}function I(d){d.preventDefault(),N()}const K={childList:!0,subtree:!0};function U(d){let a=We(T),v=We(F),b=We(V),X=We(fe);for(const Le of d.reverse()){if(Le.hasAttribute("data-felte-keep-on-remove")&&Le.dataset.felteKeepOnRemove!=="false")continue;const te=/.*(\[[0-9]+\]|\.[0-9]+)\.[^.]+$/;let B=ce(Le);const G=We(F);if(te.test(B)){const re=B.split(".").slice(0,-1).join("."),Se=qe(G,re);D(Se)&&Object.keys(Se).length<=1&&(B=re)}a=nt(a,B),v=nt(v,B),b=nt(b,B),X=nt(X,B)}T.set(a),F.set(v),V.set(b),fe.set(X)}const pe=gt(()=>{g().forEach(v=>{var b;return(b=v.destroy)===null||b===void 0?void 0:b.call(v)}),_(n.map(q("UPDATE")));const{defaultData:d,defaultTouched:a}=rr(y);T.update(v=>er(v,d)),F.update(v=>er(v,a)),e.setFields(We(T))},0);let Ie=[];const ye=gt(()=>{g().forEach(d=>{var a;return(a=d.destroy)===null||a===void 0?void 0:a.call(d)}),_(n.map(q("UPDATE"))),U(Ie),Ie=[]},0);function Ae(d){Array.from(d.addedNodes).some(v=>tr(v)?de(v)?!0:Ut(v).length>0:!1)&&pe()}function $e(d){for(const a of d.removedNodes){if(!tr(a))continue;const v=Ut(a);v.length!==0&&(Ie.push(...v),ye())}}function je(d){for(const a of d)a.type==="childList"&&(a.addedNodes.length>0&&Ae(a),a.removedNodes.length>0&&$e(a))}const Ee=new MutationObserver(je);Ee.observe(y,K),y.addEventListener("input",c),y.addEventListener("change",E),y.addEventListener("focusout",p),y.addEventListener("submit",i),y.addEventListener("reset",I);const Oe=V.subscribe(d=>{for(const a of y.elements){if(!de(a)||!a.name)continue;const v=qe(d,ce(a)),b=Array.isArray(v)?v.join(`
`):typeof v=="string"?v:void 0;b!==a.dataset.felteValidationMessage&&(b?(a.dataset.felteValidationMessage=b,a.setAttribute("aria-invalid","true")):(delete a.dataset.felteValidationMessage,a.removeAttribute("aria-invalid")))}});return{destroy(){Ee.disconnect(),y.removeEventListener("input",c),y.removeEventListener("change",E),y.removeEventListener("focusout",p),y.removeEventListener("submit",i),y.removeEventListener("reset",I),Oe(),g().forEach(d=>{var a;return(a=d.destroy)===null||a===void 0?void 0:a.call(d)})}}}return{form:Ne}}function zr(e){const t={aborted:!1,priority:e};return{signal:t,abort(){t.aborted=!0}}}function Kr(e,t){if(D(e))return!t||D(t)&&Object.keys(t).length===0?ke(e,null):void 0;if(Array.isArray(e)){if(e.some(D))return;const r=Array.isArray(t)?t:[];return e.map((n,s)=>{const i=r[s];return Array.isArray(i)&&i.length===0?null:n&&i||null})}return Array.isArray(t)&&t.length===0?null:Array.isArray(t)?e?t:null:e&&t?[t]:null}function Xr(e,t){if(D(e))return!t||D(t)&&Object.keys(t).length===0?ke(e,null):void 0;if(Array.isArray(e)){if(e.some(D))return;const r=Array.isArray(t)?t:[];return e.map((n,s)=>{const i=r[s];return Array.isArray(i)&&i.length===0?null:i||null})}return Array.isArray(t)&&t.length===0?null:Array.isArray(t)?t:t?[t]:null}function Gr([e,t]){return Me(t,e,Kr)}function Jr([e,t]){return Me(t,e,Xr)}function Qr(e){return function(r,n,s){const i=Array.isArray(r)?r:[r],o=new Array(i.length),f=e(s),_=f.set,g=f.subscribe;let m;function k(){m=i.map((j,W)=>j.subscribe(P=>{o[W]=P,_(n(o))}))}function N(){m==null||m.forEach(j=>j())}return f.subscribe=function(W){const P=g(W);return()=>{P()}},[f,k,N]}}function Yr(e,t){var r,n,s,i,o,f,_,g,m;const k=Qr(e),N=t.initialValues=t.initialValues?Ce(Ft(Te(t.initialValues),t.transform)):{},j=Re(st(N),!1),W=e(j),P=e(0),[Z,T,V]=k([W,P],([L,w])=>it(L,J=>!!J)&&w>=1,!1);delete Z.set,delete Z.update;function fe(L){let w;return async function(J,se,oe,xe=!1){if(!oe||!J)return;let be=se&&Object.keys(se).length>0?se:ke(J,[]);const Fe=zr(xe);if((!(w!=null&&w.signal.priority)||xe)&&(w==null||w.abort(),w=Fe),w.signal.priority&&!xe)return;P.update(De=>De+1);const Ue=$r(J,oe);return Ue.forEach(async De=>{const rt=await De;Fe.signal.aborted||(be=Ze([be,rt]),L.set(be))}),await Promise.all(Ue),w=void 0,P.update(De=>De-1),be}}let F=ke(j,[]);const Q=e(N),M=ke(j,[]),z=e(M),ae=e(Te(M)),[ge,Ne,y]=k([z,ae],Ze,Te(M)),q=ke(j,[]),we=e(q),ve=e(Te(q)),[Pe,R,ee]=k([we,ve],Ze,Te(q)),[me,c,E]=k([ge,W],Gr,Te(M)),[p,I,K]=k([Pe,W],Jr,Te(q));let U=!1;const[pe,Ie,ye]=k(ge,([L])=>{var w;return U?!it(L,ne=>Array.isArray(ne)?ne.length>=1:!!ne):(U=!0,!t.validate&&!(!((w=t.debounced)===null||w===void 0)&&w.validate))},!t.validate&&!(!((r=t.debounced)===null||r===void 0)&&r.validate));delete pe.set,delete pe.update;const Ae=e(!1),$e=e(!1),je=e(null),Ee=fe(z),Oe=fe(we),d=fe(ae),a=fe(ve),v=gt(d,(o=(s=(n=t.debounced)===null||n===void 0?void 0:n.validateTimeout)!==null&&s!==void 0?s:(i=t.debounced)===null||i===void 0?void 0:i.timeout)!==null&&o!==void 0?o:300,{onInit:()=>{P.update(L=>L+1)},onEnd:()=>{P.update(L=>L-1)}}),b=gt(a,(m=(_=(f=t.debounced)===null||f===void 0?void 0:f.warnTimeout)!==null&&_!==void 0?_:(g=t.debounced)===null||g===void 0?void 0:g.timeout)!==null&&m!==void 0?m:300);async function X(L,w){var ne;const J=st(L),se=Ee(J,F,w??t.validate,!0);if(w)return se;const oe=d(J,F,(ne=t.debounced)===null||ne===void 0?void 0:ne.validate,!0);return Ze(await Promise.all([se,oe]))}async function Le(L,w){var ne;const J=st(L),se=Oe(J,F,w??t.warn,!0);if(w)return se;const oe=a(J,F,(ne=t.debounced)===null||ne===void 0?void 0:ne.warn,!0);return Ze(await Promise.all([se,oe]))}let te=M,B=q;function G(){const L=Q.subscribe(oe=>{var xe,be;const Fe=st(oe);Ee(Fe,F,t.validate),Oe(Fe,F,t.warn),v(Fe,F,(xe=t.debounced)===null||xe===void 0?void 0:xe.validate),b(Fe,F,(be=t.debounced)===null||be===void 0?void 0:be.warn)}),w=W.subscribe(oe=>{F=ke(oe,[])}),ne=ge.subscribe(oe=>{te=oe}),J=Pe.subscribe(oe=>{B=oe});Ne(),Ie(),R(),c(),I(),T();function se(){L(),E(),y(),ee(),K(),ye(),V(),w(),ne(),J()}return se}function _e(L){z.set(L(te)),ae.set({})}function re(L){we.set(L(B)),ve.set({})}function Se(L){_e(()=>L)}function tt(L){re(()=>L)}return me.set=Se,me.update=_e,p.set=tt,p.update=re,{data:Q,errors:me,warnings:p,touched:W,isValid:pe,isSubmitting:Ae,isDirty:$e,isValidating:Z,interacted:je,validateErrors:X,validateWarnings:Le,cleanup:t.preventStoreStart?()=>{}:G(),start:G}}function Zr(e,t){var r,n;(r=e.extend)!==null&&r!==void 0||(e.extend=[]),(n=e.debounced)!==null&&n!==void 0||(e.debounced={}),e.validate&&!Array.isArray(e.validate)&&(e.validate=[e.validate]),e.debounced.validate&&!Array.isArray(e.debounced.validate)&&(e.debounced.validate=[e.debounced.validate]),e.transform&&!Array.isArray(e.transform)&&(e.transform=[e.transform]),e.warn&&!Array.isArray(e.warn)&&(e.warn=[e.warn]),e.debounced.warn&&!Array.isArray(e.debounced.warn)&&(e.debounced.warn=[e.debounced.warn]);function s(R,{debounced:ee,level:me}={debounced:!1,level:"error"}){var c;const E=me==="error"?"validate":"warn";(c=e.debounced)!==null&&c!==void 0||(e.debounced={});const p=ee?e.debounced:e;p[E]?p[E]=[...p[E],R]:p[E]=[R]}function i(R){e.transform?e.transform=[...e.transform,R]:e.transform=[R]}const o=Array.isArray(e.extend)?e.extend:[e.extend];let f=[];const _=()=>f,g=R=>{f=R},{isSubmitting:m,isValidating:k,data:N,errors:j,warnings:W,touched:P,isValid:Z,isDirty:T,cleanup:V,start:fe,validateErrors:F,validateWarnings:Q,interacted:M}=Yr(t.storeFactory,e),z=N.update,ae=N.set,ge=R=>z(ee=>Ce(Ft(R(ee),e.transform))),Ne=R=>ae(Ce(Ft(R,e.transform)));N.update=ge,N.set=Ne;const y=Hr({extender:o,config:e,addValidator:s,addTransformer:i,validateErrors:F,validateWarnings:Q,_getCurrentExtenders:_,stores:{data:N,errors:j,warnings:W,touched:P,isValid:Z,isValidating:k,isSubmitting:m,isDirty:T,interacted:M}}),{createSubmitHandler:q,handleSubmit:we}=y.public;f=o.map(R=>R({stage:"SETUP",errors:j,warnings:W,touched:P,data:N,isDirty:T,isValid:Z,isValidating:k,isSubmitting:m,interacted:M,config:e,addValidator:s,addTransformer:i,setFields:y.public.setFields,reset:y.public.reset,validate:y.public.validate,handleSubmit:we,createSubmitHandler:q}));const ve=Object.assign({config:e,stores:{data:N,touched:P,errors:j,warnings:W,isSubmitting:m,isValidating:k,isValid:Z,isDirty:T,interacted:M},createSubmitHandler:q,handleSubmit:we,helpers:Object.assign(Object.assign({},y.public),{addTransformer:i,addValidator:s}),extender:o,_getCurrentExtenders:_,_setCurrentExtenders:g},y.private),{form:Pe}=Mr(ve);return Object.assign({data:N,errors:j,warnings:W,touched:P,isValid:Z,isSubmitting:m,isValidating:k,isDirty:T,interacted:M,form:Pe,cleanup:V,startStores:fe},y.public)}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Vr(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r}function en(e){const t=Zr(e??{},{storeFactory:Dr}),{cleanup:r,startStores:n}=t,s=Vr(t,["cleanup","startStores"]);return fr(r),s}function sr(e,t,r){const n=e.slice();return n[1]=t[r][0],n[2]=t[r][1],n}function ir(e){let t,r=e[2]+"",n;return{c(){t=h("option"),n=le(r),this.h()},l(s){t=A(s,"OPTION",{});var i=O(t);n=ue(i,r),i.forEach(S),this.h()},h(){t.__value=e[1],t.value=t.__value},m(s,i){St(s,t,i),l(t,n)},p:wr,d(s){s&&S(t)}}}function tn(e){let t,r,n,s,i,o,f,_,g,m,k,N,j,W,P,Z,T,V,fe,F,Q,M,z,ae,ge,Ne,y,q,we,ve,Pe,R,ee,me,c,E,p,I,K,U,pe,Ie,ye,Ae,$e,je,Ee,Oe,d,a,v,b,X,Le,te,B,G,_e,re,Se,tt,L,w,ne,J,se,oe,xe,be,Fe,Ue,De,rt,Ge,Dt,Tt,Ke,kt,Je,Xe,Pt,ot,It,Bt;o=new Or({props:{class:"me-1",icon:"arrow-left-square",width:"24",height:"24"}});let Qe=Object.entries(Vt),he=[];for(let x=0;x<Qe.length;x+=1)he[x]=ir(sr(e,Qe,x));return{c(){t=h("div"),r=h("h1"),n=le("Add a new rum"),s=C(),i=h("a"),yr(o.$$.fragment),f=le(`
    Back to the list`),_=C(),g=h("div"),m=h("form"),k=h("div"),N=h("label"),j=le("Name"),W=C(),P=h("input"),Z=C(),T=h("div"),V=h("label"),fe=le("Type"),F=C(),Q=h("select");for(let x=0;x<he.length;x+=1)he[x].c();M=C(),z=h("div"),ae=h("label"),ge=le("Alcohol level"),Ne=C(),y=h("div"),q=h("input"),we=C(),ve=h("span"),Pe=le("°"),R=C(),ee=h("div"),me=h("label"),c=le("Volume"),E=C(),p=h("div"),I=h("input"),K=C(),U=h("span"),pe=le("cl"),Ie=C(),ye=h("div"),Ae=h("label"),$e=le("Distillery"),je=C(),Ee=h("input"),Oe=C(),d=h("div"),a=h("label"),v=le("Origin"),b=C(),X=h("input"),Le=C(),te=h("div"),B=h("label"),G=le("Price"),_e=C(),re=h("div"),Se=h("span"),tt=le("€"),L=C(),w=h("input"),ne=C(),J=h("div"),se=h("label"),oe=le("Stock"),xe=C(),be=h("input"),Fe=C(),Ue=h("div"),De=h("label"),rt=le("Description "),Ge=h("span"),Dt=le("(Optional)"),Tt=C(),Ke=h("textarea"),kt=C(),Je=h("div"),Xe=h("button"),Pt=le("Save"),this.h()},l(x){t=A(x,"DIV",{class:!0});var Be=O(t);r=A(Be,"H1",{});var ie=O(r);n=ue(ie,"Add a new rum"),ie.forEach(S),s=H(Be),i=A(Be,"A",{class:!0,href:!0});var Ye=O(i);br(o.$$.fragment,Ye),f=ue(Ye,`
    Back to the list`),Ye.forEach(S),Be.forEach(S),_=H(x),g=A(x,"DIV",{class:!0});var $t=O(g);m=A($t,"FORM",{class:!0});var Y=O(m);k=A(Y,"DIV",{class:!0});var lt=O(k);N=A(lt,"LABEL",{for:!0,class:!0});var jt=O(N);j=ue(jt,"Name"),jt.forEach(S),W=H(lt),P=A(lt,"INPUT",{type:!0,class:!0,name:!0,id:!0,placeholder:!0}),lt.forEach(S),Z=H(Y),T=A(Y,"DIV",{class:!0});var ut=O(T);V=A(ut,"LABEL",{for:!0,class:!0});var Wt=O(V);fe=ue(Wt,"Type"),Wt.forEach(S),F=H(ut),Q=A(ut,"SELECT",{class:!0,id:!0,name:!0});var Rt=O(Q);for(let Lt=0;Lt<he.length;Lt+=1)he[Lt].l(Rt);Rt.forEach(S),ut.forEach(S),M=H(Y),z=A(Y,"DIV",{class:!0});var ct=O(z);ae=A(ct,"LABEL",{for:!0,class:!0});var qt=O(ae);ge=ue(qt,"Alcohol level"),qt.forEach(S),Ne=H(ct),y=A(ct,"DIV",{class:!0});var dt=O(y);q=A(dt,"INPUT",{class:!0,type:!0,id:!0,name:!0}),we=H(dt),ve=A(dt,"SPAN",{class:!0});var Ct=O(ve);Pe=ue(Ct,"°"),Ct.forEach(S),dt.forEach(S),ct.forEach(S),R=H(Y),ee=A(Y,"DIV",{class:!0});var ft=O(ee);me=A(ft,"LABEL",{for:!0,class:!0});var Ht=O(me);c=ue(Ht,"Volume"),Ht.forEach(S),E=H(ft),p=A(ft,"DIV",{class:!0});var vt=O(p);I=A(vt,"INPUT",{class:!0,type:!0,id:!0,name:!0}),K=H(vt),U=A(vt,"SPAN",{class:!0});var Mt=O(U);pe=ue(Mt,"cl"),Mt.forEach(S),vt.forEach(S),ft.forEach(S),Ie=H(Y),ye=A(Y,"DIV",{class:!0});var mt=O(ye);Ae=A(mt,"LABEL",{for:!0,class:!0});var zt=O(Ae);$e=ue(zt,"Distillery"),zt.forEach(S),je=H(mt),Ee=A(mt,"INPUT",{class:!0,type:!0,id:!0,name:!0}),mt.forEach(S),Oe=H(Y),d=A(Y,"DIV",{class:!0});var pt=O(d);a=A(pt,"LABEL",{for:!0,class:!0});var Kt=O(a);v=ue(Kt,"Origin"),Kt.forEach(S),b=H(pt),X=A(pt,"INPUT",{class:!0,type:!0,id:!0,name:!0}),pt.forEach(S),Le=H(Y),te=A(Y,"DIV",{class:!0});var yt=O(te);B=A(yt,"LABEL",{for:!0,class:!0});var Xt=O(B);G=ue(Xt,"Price"),Xt.forEach(S),_e=H(yt),re=A(yt,"DIV",{class:!0});var bt=O(re);Se=A(bt,"SPAN",{class:!0});var Gt=O(Se);tt=ue(Gt,"€"),Gt.forEach(S),L=H(bt),w=A(bt,"INPUT",{class:!0,type:!0,id:!0,name:!0}),bt.forEach(S),yt.forEach(S),ne=H(Y),J=A(Y,"DIV",{class:!0});var ht=O(J);se=A(ht,"LABEL",{for:!0,class:!0});var Jt=O(se);oe=ue(Jt,"Stock"),Jt.forEach(S),xe=H(ht),be=A(ht,"INPUT",{class:!0,type:!0,id:!0,name:!0}),ht.forEach(S),Fe=H(Y),Ue=A(Y,"DIV",{class:!0});var At=O(Ue);De=A(At,"LABEL",{for:!0,class:!0});var Nt=O(De);rt=ue(Nt,"Description "),Ge=A(Nt,"SPAN",{class:!0});var Qt=O(Ge);Dt=ue(Qt,"(Optional)"),Qt.forEach(S),Nt.forEach(S),Tt=H(At),Ke=A(At,"TEXTAREA",{class:!0,id:!0,name:!0}),O(Ke).forEach(S),At.forEach(S),kt=H(Y),Je=A(Y,"DIV",{class:!0});var Yt=O(Je);Xe=A(Yt,"BUTTON",{class:!0,type:!0});var Zt=O(Xe);Pt=ue(Zt,"Save"),Zt.forEach(S),Yt.forEach(S),Y.forEach(S),$t.forEach(S),this.h()},h(){u(i,"class","btn btn-primary"),u(i,"href",ar+"/rums"),u(t,"class","container d-flex justify-content-between"),u(N,"for","name"),u(N,"class","form-label"),u(P,"type","text"),u(P,"class","form-control"),u(P,"name","name"),u(P,"id","name"),P.required=!0,u(P,"placeholder","Name of rum"),u(k,"class","col-12"),u(V,"for","type"),u(V,"class","form-label"),u(Q,"class","form-select"),u(Q,"id","type"),u(Q,"name","type"),Q.required=!0,u(T,"class","col-12"),u(ae,"for","alcoholLevel"),u(ae,"class","form-label"),u(q,"class","form-control"),u(q,"type","number"),u(q,"id","alcoholLevel"),u(q,"name","alcoholLevel"),q.required=!0,u(ve,"class","input-group-text"),u(y,"class","input-group"),u(z,"class","col-6"),u(me,"for","bottleSize"),u(me,"class","form-label"),u(I,"class","form-control"),u(I,"type","number"),u(I,"id","bottleSize"),u(I,"name","bottleSize"),I.required=!0,u(U,"class","input-group-text"),u(p,"class","input-group"),u(ee,"class","col-6"),u(Ae,"for","distillery"),u(Ae,"class","form-label"),u(Ee,"class","form-control"),u(Ee,"type","text"),u(Ee,"id","distillery"),u(Ee,"name","distillery"),u(ye,"class","col-6"),u(a,"for","origin"),u(a,"class","form-label"),u(X,"class","form-control"),u(X,"type","text"),u(X,"id","origin"),u(X,"name","origin"),u(d,"class","col-6"),u(B,"for","price"),u(B,"class","form-label"),u(Se,"class","input-group-text"),u(w,"class","form-control"),u(w,"type","number"),u(w,"id","price"),u(w,"name","price"),w.required=!0,u(re,"class","input-group"),u(te,"class","col-6"),u(se,"for","stock"),u(se,"class","form-label"),u(be,"class","form-control"),u(be,"type","number"),u(be,"id","stock"),u(be,"name","stock"),u(J,"class","col-6"),u(Ge,"class","text-muted"),u(De,"for","description"),u(De,"class","form-label"),u(Ke,"class","form-control"),u(Ke,"id","description"),u(Ke,"name","description"),u(Ue,"class","col-12"),u(Xe,"class","btn btn-primary btn-lg"),u(Xe,"type","submit"),u(Je,"class","text-end mt-5"),u(m,"class","row needs-validation"),u(g,"class","m-5")},m(x,Be){St(x,t,Be),l(t,r),l(r,n),l(t,s),l(t,i),hr(o,i,null),l(i,f),St(x,_,Be),St(x,g,Be),l(g,m),l(m,k),l(k,N),l(N,j),l(k,W),l(k,P),l(m,Z),l(m,T),l(T,V),l(V,fe),l(T,F),l(T,Q);for(let ie=0;ie<he.length;ie+=1)he[ie].m(Q,null);l(m,M),l(m,z),l(z,ae),l(ae,ge),l(z,Ne),l(z,y),l(y,q),l(y,we),l(y,ve),l(ve,Pe),l(m,R),l(m,ee),l(ee,me),l(me,c),l(ee,E),l(ee,p),l(p,I),l(p,K),l(p,U),l(U,pe),l(m,Ie),l(m,ye),l(ye,Ae),l(Ae,$e),l(ye,je),l(ye,Ee),l(m,Oe),l(m,d),l(d,a),l(a,v),l(d,b),l(d,X),l(m,Le),l(m,te),l(te,B),l(B,G),l(te,_e),l(te,re),l(re,Se),l(Se,tt),l(re,L),l(re,w),l(m,ne),l(m,J),l(J,se),l(se,oe),l(J,xe),l(J,be),l(m,Fe),l(m,Ue),l(Ue,De),l(De,rt),l(De,Ge),l(Ge,Dt),l(Ue,Tt),l(Ue,Ke),l(m,kt),l(m,Je),l(Je,Xe),l(Xe,Pt),ot=!0,It||(Bt=Ar(e[0].call(null,m)),It=!0)},p(x,[Be]){if(Be&0){Qe=Object.entries(Vt);let ie;for(ie=0;ie<Qe.length;ie+=1){const Ye=sr(x,Qe,ie);he[ie]?he[ie].p(Ye,Be):(he[ie]=ir(Ye),he[ie].c(),he[ie].m(Q,null))}for(;ie<he.length;ie+=1)he[ie].d(1);he.length=Qe.length}},i(x){ot||(Er(o.$$.fragment,x),ot=!0)},o(x){_r(o.$$.fragment,x),ot=!1},d(x){x&&S(t),Sr(o),x&&S(_),x&&S(g),gr(he,x),It=!1,Bt()}}}function rn(e){const{form:t}=en({initialValues:{alcoholLevel:40,bottleSize:70},onSubmit:async r=>{const n=`${Tr}/rums`;fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(s=>{console.log(s),kr(ar+"/rums")})}});return[t]}class un extends vr{constructor(t){super(),mr(this,t,rn,tn,pr,{})}}export{un as default};
