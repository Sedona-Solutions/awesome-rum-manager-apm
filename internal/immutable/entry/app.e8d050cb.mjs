import{S as C,i as q,s as U,a as j,e as d,c as z,b as E,d as h,f as P,g,h as w,j as W,o as F,k as G,l as H,m as J,n as A,p as m,q as K,r as M,u as Q,v as y,w as D,x as k,y as v,z as I,A as R,B as L}from"../chunks/index.59240857.mjs";const X="modulepreload",Y=function(o,e){return new URL(o,e).href},O={},p=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Y(f,i),f in O)return;O[f]=!0;const t=f.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(!!i)for(let l=r.length-1;l>=0;l--){const u=r[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${a}`))return;const s=document.createElement("link");if(s.rel=t?"stylesheet":X,t||(s.as="script",s.crossOrigin=""),s.href=f,document.head.appendChild(s),t)return new Promise((l,u)=>{s.addEventListener("load",l),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},ie={};function Z(o){let e,n,i;var r=o[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return r&&(e=k(r,f(o)),o[12](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,a){e&&R(e,t,a),E(t,n,a),i=!0},p(t,a){const _={};if(a&8&&(_.data=t[3]),a&4&&(_.form=t[2]),r!==(r=t[1][0])){if(e){y();const s=e;h(s.$$.fragment,1,0,()=>{L(s,1)}),P()}r?(e=k(r,f(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){o[12](null),t&&w(n),e&&L(e,t)}}}function $(o){let e,n,i;var r=o[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[x]},$$scope:{ctx:t}}}}return r&&(e=k(r,f(o)),o[11](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,a){e&&R(e,t,a),E(t,n,a),i=!0},p(t,a){const _={};if(a&8&&(_.data=t[3]),a&8215&&(_.$$scope={dirty:a,ctx:t}),r!==(r=t[1][0])){if(e){y();const s=e;h(s.$$.fragment,1,0,()=>{L(s,1)}),P()}r?(e=k(r,f(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){o[11](null),t&&w(n),e&&L(e,t)}}}function x(o){let e,n,i;var r=o[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return r&&(e=k(r,f(o)),o[10](e)),{c(){e&&v(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,a){e&&R(e,t,a),E(t,n,a),i=!0},p(t,a){const _={};if(a&16&&(_.data=t[4]),a&4&&(_.form=t[2]),r!==(r=t[1][1])){if(e){y();const s=e;h(s.$$.fragment,1,0,()=>{L(s,1)}),P()}r?(e=k(r,f(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(_)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){o[10](null),t&&w(n),e&&L(e,t)}}}function T(o){let e,n=o[6]&&V(o);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);n&&n.l(r),r.forEach(w),this.h()},h(){A(e,"id","svelte-announcer"),A(e,"aria-live","assertive"),A(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,r){E(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=V(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function V(o){let e;return{c(){e=K(o[7])},l(n){e=M(n,o[7])},m(n,i){E(n,e,i)},p(n,i){i&128&&Q(e,n[7])},d(n){n&&w(e)}}}function ee(o){let e,n,i,r,f;const t=[$,Z],a=[];function _(l,u){return l[1][1]?0:1}e=_(o),n=a[e]=t[e](o);let s=o[5]&&T(o);return{c(){n.c(),i=j(),s&&s.c(),r=d()},l(l){n.l(l),i=z(l),s&&s.l(l),r=d()},m(l,u){a[e].m(l,u),E(l,i,u),s&&s.m(l,u),E(l,r,u),f=!0},p(l,[u]){let b=e;e=_(l),e===b?a[e].p(l,u):(y(),h(a[b],1,1,()=>{a[b]=null}),P(),n=a[e],n?n.p(l,u):(n=a[e]=t[e](l),n.c()),g(n,1),n.m(i.parentNode,i)),l[5]?s?s.p(l,u):(s=T(l),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null)},i(l){f||(g(n),f=!0)},o(l){h(n),f=!1},d(l){a[e].d(l),l&&w(i),s&&s.d(l),l&&w(r)}}}function te(o,e,n){let{stores:i}=e,{page:r}=e,{constructors:f}=e,{components:t=[]}=e,{form:a}=e,{data_0:_=null}=e,{data_1:s=null}=e;W(i.page.notify);let l=!1,u=!1,b=null;F(()=>{const c=i.page.subscribe(()=>{l&&(n(6,u=!0),n(7,b=document.title||"untitled page"))});return n(5,l=!0),c});function N(c){D[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function S(c){D[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function B(c){D[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return o.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,r=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,a=c.form),"data_0"in c&&n(3,_=c.data_0),"data_1"in c&&n(4,s=c.data_1)},o.$$.update=()=>{o.$$.dirty&768&&i.page.set(r)},[t,f,a,_,s,l,u,b,i,r,N,S,B]}class re extends C{constructor(e){super(),q(this,e,te,ee,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const se=[()=>p(()=>import("../chunks/0.7e2c717d.mjs"),["../chunks/0.7e2c717d.mjs","../chunks/_layout.80300deb.mjs","./_layout.svelte.345e7924.mjs","../chunks/index.59240857.mjs","../chunks/BootstrapIcon.d7b521ae.mjs","../chunks/singletons.94f0ee21.mjs","../chunks/stores.2a49b1d3.mjs","../assets/_layout.f112309b.css"],import.meta.url),()=>p(()=>import("../chunks/1.b7e57952.mjs"),["../chunks/1.b7e57952.mjs","./error.svelte.37c58904.mjs","../chunks/index.59240857.mjs","../chunks/stores.2a49b1d3.mjs","../chunks/singletons.94f0ee21.mjs"],import.meta.url),()=>p(()=>import("../chunks/2.6339a93c.mjs"),["../chunks/2.6339a93c.mjs","./_page.svelte.dc5952d2.mjs","../chunks/index.59240857.mjs","../assets/_page.35045d8f.css"],import.meta.url),()=>p(()=>import("../chunks/3.d53c443d.mjs"),["../chunks/3.d53c443d.mjs","./metrics-page.svelte.f1364a5b.mjs","../chunks/index.59240857.mjs"],import.meta.url),()=>p(()=>import("../chunks/4.17a28615.mjs"),["../chunks/4.17a28615.mjs","./orders-page.svelte.f1364a5b.mjs","../chunks/index.59240857.mjs"],import.meta.url),()=>p(()=>import("../chunks/5.968b896c.mjs"),["../chunks/5.968b896c.mjs","../chunks/_page.666521bc.mjs","../chunks/rum.repository.cebe5599.mjs","./products-(list)-page.svelte.d145c4a4.mjs","../chunks/index.59240857.mjs","../chunks/singletons.94f0ee21.mjs","../chunks/BootstrapIcon.d7b521ae.mjs","../chunks/navigation.950f81f0.mjs","../assets/_page.40a9ca74.css"],import.meta.url),()=>p(()=>import("../chunks/6.a768742d.mjs"),["../chunks/6.a768742d.mjs","../chunks/_page.7952dda9.mjs","../chunks/index.dd167fef.mjs","../chunks/control.e7f5239e.mjs","../chunks/rum.repository.cebe5599.mjs","./products-_id_-page.svelte.0bd0ad49.mjs","../chunks/index.59240857.mjs","../chunks/singletons.94f0ee21.mjs","../chunks/types.6e0b20c4.mjs","../chunks/BootstrapIcon.d7b521ae.mjs","../chunks/navigation.950f81f0.mjs","../assets/_page.d395f440.css"],import.meta.url),()=>p(()=>import("../chunks/7.5c3358ef.mjs"),["../chunks/7.5c3358ef.mjs","../chunks/_page.52a17023.mjs","../chunks/index.dd167fef.mjs","../chunks/control.e7f5239e.mjs","../chunks/rum.repository.cebe5599.mjs","./products-_id_-edit-page.svelte.22768f4e.mjs","../chunks/index.59240857.mjs","../chunks/singletons.94f0ee21.mjs","../chunks/types.6e0b20c4.mjs","../chunks/BootstrapIcon.d7b521ae.mjs","../chunks/navigation.950f81f0.mjs","../chunks/create-form.e718eb86.mjs","../assets/_page.2925024a.css"],import.meta.url),()=>p(()=>import("../chunks/8.7a061313.mjs"),["../chunks/8.7a061313.mjs","./products-create-page.svelte.5e82dcb6.mjs","../chunks/index.59240857.mjs","../chunks/singletons.94f0ee21.mjs","../chunks/types.6e0b20c4.mjs","../chunks/BootstrapIcon.d7b521ae.mjs","../chunks/navigation.950f81f0.mjs","../chunks/rum.repository.cebe5599.mjs","../chunks/create-form.e718eb86.mjs","../assets/_page.2925024a.css"],import.meta.url)],oe=[],ae={"/":[2],"/metrics":[3],"/orders":[4],"/products/(list)":[5],"/products/create":[8],"/products/[id]":[6],"/products/[id]/edit":[7]},le={handleError:({error:o})=>{console.error(o)}};export{ae as dictionary,le as hooks,ie as matchers,se as nodes,re as root,oe as server_loads};
