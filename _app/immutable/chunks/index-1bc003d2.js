function $(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function j(){return Object.create(null)}function y(t){t.forEach(T)}function B(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function W(t){return Object.keys(t).length===0}function L(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function st(t){let n;return L(t,e=>n=e)(),n}function lt(t,n,e){t.$$.on_destroy.push(L(n,e))}function ft(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],u=Math.max(n.dirty.length,r.length);for(let o=0;o<u;o+=1)l[o]=n.dirty[o]|r[o];return l}return n.dirty|r}return n.dirty}function _t(t,n,e,i,r,l){if(r){const u=O(n,e,i,l);t.p(u,r)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function mt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function pt(t,n,e){return t.set(e),n}let w=!1;function G(){w=!0}function J(){w=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const s=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:K(1,r,g=>n[e[g]].claim_order,s))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const l=[],u=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);o>=c;o--)u.push(n[o]);o--}for(;o>=0;o--)u.push(n[o]);l.reverse(),u.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<u.length;c++){for(;s<l.length&&u[c].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(u[c],a)}}function R(t,n){if(w){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function yt(t,n,e){w&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function xt(){return S(" ")}function bt(){return S("")}function $t(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function wt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function Y(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function vt(t,n){for(const e in n)Y(t,e,n[e])}function Nt(t,n,e){t.setAttributeNS("http://www.w3.org/1999/xlink",n,e)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){tt(t);const l=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(n(o)){const c=e(o);return c===void 0?t.splice(u,1):t[u]=c,r||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(n(o)){const c=e(o);return c===void 0?t.splice(u,1):t[u]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function D(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const l=[];for(let u=0;u<r.attributes.length;u++){const o=r.attributes[u];e[o.name]||l.push(o.name)}l.forEach(u=>r.removeAttribute(u))},()=>i(n))}function Et(t,n,e){return D(t,n,e,V)}function St(t,n,e){return D(t,n,e,X)}function nt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function kt(t){return nt(t," ")}function At(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function jt(t,n){t.value=n??""}function Ct(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Mt(t,n){return new t(n)}let p;function m(t){p=t}function q(){if(!p)throw new Error("Function called outside component initialization");return p}function Tt(t){q().$$.on_mount.push(t)}function Bt(t){q().$$.after_update.push(t)}const h=[],C=[],x=[],M=[],z=Promise.resolve();let N=!1;function F(){N||(N=!0,z.then(H))}function Lt(){return F(),z}function E(t){x.push(t)}const v=new Set;let d=0;function H(){if(d!==0)return;const t=p;do{try{for(;d<h.length;){const n=h[d];d++,m(n),et(n.$$)}}catch(n){throw h.length=0,d=0,n}for(m(null),h.length=0,d=0;C.length;)C.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];v.has(e)||(v.add(e),e())}x.length=0}while(h.length);for(;M.length;)M.pop()();N=!1,v.clear(),m(t)}function et(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const b=new Set;let _;function Ot(){_={r:0,c:[],p:_}}function Pt(){_.r||y(_.c),_=_.p}function it(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Dt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function qt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const u=t[l],o=n[l];if(o){for(const c in u)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[l]=o}else for(const c in u)r[c]=1}for(const u in i)u in e||(e[u]=void 0);return e}function zt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||E(()=>{const u=t.$$.on_mount.map(T).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...u):y(u),t.$$.on_mount=[]}),l.forEach(E)}function ct(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(h.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ht(t,n,e,i,r,l,u,o=[-1]){const c=p;m(t);const s=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:j(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};u&&u(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,g,...k)=>{const A=k.length?k[0]:g;return s.ctx&&r(s.ctx[f],s.ctx[f]=A)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](A),a&&ut(t,f)),g}):[],s.update(),a=!0,y(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){G();const f=Z(n.target);s.fragment&&s.fragment.l(f),f.forEach(U)}else s.fragment&&s.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),J(),H()}m(c)}class It{$destroy(){ct(this,1),this.$destroy=$}$on(n,e){if(!B(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Lt as A,$ as B,L as C,y as D,B as E,I as F,X as G,St as H,Nt as I,vt as J,R as K,qt as L,mt as M,ht as N,ft as O,_t as P,dt as Q,at as R,It as S,lt as T,gt as U,st as V,jt as W,$t as X,wt as Y,pt as Z,xt as a,yt as b,kt as c,Pt as d,bt as e,it as f,Ot as g,U as h,Ht as i,Bt as j,V as k,Et as l,Z as m,Y as n,Tt as o,Ct as p,S as q,nt as r,ot as s,Dt as t,At as u,Mt as v,zt as w,Ft as x,rt as y,ct as z};
