import{S as M,i as P,s as Q,q as v,a as S,k as E,r as d,c as $,l as k,m as x,h,n as q,b as m,H as L,B as A,Q as U}from"../../../../chunks/index-86ae4048.js";import{r as g}from"../../../../chunks/rhum-6c7b4e73.js";import{c as H}from"../../../../chunks/shared-23917130.js";function B(o,l,s){const n=o.slice();return n[1]=l[s],n}function I(o){let l,s,n=o[1].name+"",f;return{c(){l=E("li"),s=E("a"),f=v(n),this.h()},l(c){l=k(c,"LI",{});var i=x(l);s=k(i,"A",{href:!0});var _=x(s);f=d(_,n),_.forEach(h),i.forEach(h),this.h()},h(){q(s,"href",H+"/rhums/"+o[1].id)},m(c,i){m(c,l,i),L(l,s),L(s,f)},p:A,d(c){c&&h(l)}}}function j(o){let l,s,n,f,c,i,_,y,u,p=o[0],a=[];for(let e=0;e<p.length;e+=1)a[e]=I(B(o,p,e));return{c(){l=v("base path :"),s=v(H),n=S(),f=E("h1"),c=v("List "),i=E("a"),_=v("Create"),y=S(),u=E("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){l=d(e,"base path :"),s=d(e,H),n=$(e),f=k(e,"H1",{});var r=x(f);c=d(r,"List "),i=k(r,"A",{class:!0,href:!0});var t=x(i);_=d(t,"Create"),t.forEach(h),r.forEach(h),y=$(e),u=k(e,"UL",{});var b=x(u);for(let C=0;C<a.length;C+=1)a[C].l(b);b.forEach(h),this.h()},h(){q(i,"class","btn btn-primary"),q(i,"href","/rhums/create")},m(e,r){m(e,l,r),m(e,s,r),m(e,n,r),m(e,f,r),L(f,c),L(f,i),L(i,_),m(e,y,r),m(e,u,r);for(let t=0;t<a.length;t+=1)a[t].m(u,null)},p(e,[r]){if(r&1){p=e[0];let t;for(t=0;t<p.length;t+=1){const b=B(e,p,t);a[t]?a[t].p(b,r):(a[t]=I(b),a[t].c(),a[t].m(u,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=p.length}},i:A,o:A,d(e){e&&h(l),e&&h(s),e&&h(n),e&&h(f),e&&h(y),e&&h(u),U(a,e)}}}function w(o){return[g]}class G extends M{constructor(l){super(),P(this,l,w,j,Q,{})}}export{G as default};
