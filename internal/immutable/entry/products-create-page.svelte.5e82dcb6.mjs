import{S as Pt,i as Bt,s as $t,k as l,q as p,a as i,y as kt,l as a,m as s,r as v,h as r,c as u,z as Ot,n as t,b as Ie,D as e,A as Ut,V as qt,g as zt,d as Rt,B as jt,L as Ft,F as Ct}from"../chunks/index.59240857.mjs";import{e as Tt}from"../chunks/singletons.94f0ee21.mjs";import{T as wt}from"../chunks/types.6e0b20c4.mjs";import{B as Ht}from"../chunks/BootstrapIcon.d7b521ae.mjs";import{g as Mt}from"../chunks/navigation.950f81f0.mjs";import{R as Xt}from"../chunks/rum.repository.cebe5599.mjs";import{c as Gt}from"../chunks/create-form.e718eb86.mjs";function Nt(g,c,_){const b=g.slice();return b[1]=c[_][0],b[2]=c[_][1],b}function St(g){let c,_=g[2]+"",b;return{c(){c=l("option"),b=p(_),this.h()},l(x){c=a(x,"OPTION",{});var h=s(c);b=v(h,_),h.forEach(r),this.h()},h(){c.__value=g[1],c.value=c.__value},m(x,h){Ie(x,c,h),e(c,b)},p:Ct,d(x){x&&r(c)}}}function Jt(g){let c,_,b,x,h,R,Le,ne,Ae,ie,j,n,A,F,De,Ve,I,we,D,C,Ne,Se,y,Te,V,H,Pe,Be,w,L,$e,le,ke,Oe,N,M,Ue,qe,S,T,ze,ae,Re,je,P,X,Fe,Ce,G,He,B,J,Me,Xe,K,Ge,$,Q,Je,Ke,k,re,Qe,We,O,Ye,U,W,Ze,et,Y,tt,q,z,lt,se,at,rt,Z,st,oe,ee,ot,ue,ct,ut;R=new Ht({props:{icon:"arrow-left",size:18}});let ce=Object.entries(wt),m=[];for(let o=0;o<ce.length;o+=1)m[o]=St(Nt(g,ce,o));return{c(){c=l("div"),_=l("h1"),b=p("Add a new rum"),x=i(),h=l("a"),kt(R.$$.fragment),Le=i(),ne=l("span"),Ae=p("Back"),ie=i(),j=l("div"),n=l("form"),A=l("div"),F=l("label"),De=p("Name"),Ve=i(),I=l("input"),we=i(),D=l("div"),C=l("label"),Ne=p("Type"),Se=i(),y=l("select");for(let o=0;o<m.length;o+=1)m[o].c();Te=i(),V=l("div"),H=l("label"),Pe=p("Alcohol level"),Be=i(),w=l("div"),L=l("input"),$e=i(),le=l("span"),ke=p("°"),Oe=i(),N=l("div"),M=l("label"),Ue=p("Volume"),qe=i(),S=l("div"),T=l("input"),ze=i(),ae=l("span"),Re=p("cl"),je=i(),P=l("div"),X=l("label"),Fe=p("Distillery"),Ce=i(),G=l("input"),He=i(),B=l("div"),J=l("label"),Me=p("Origin"),Xe=i(),K=l("input"),Ge=i(),$=l("div"),Q=l("label"),Je=p("Price"),Ke=i(),k=l("div"),re=l("span"),Qe=p("€"),We=i(),O=l("input"),Ye=i(),U=l("div"),W=l("label"),Ze=p("Stock"),et=i(),Y=l("input"),tt=i(),q=l("div"),z=l("label"),lt=p("Description "),se=l("span"),at=p("(Optional)"),rt=i(),Z=l("textarea"),st=i(),oe=l("div"),ee=l("button"),ot=p("Save"),this.h()},l(o){c=a(o,"DIV",{class:!0});var E=s(c);_=a(E,"H1",{});var f=s(_);b=v(f,"Add a new rum"),f.forEach(r),x=u(E),h=a(E,"A",{class:!0,href:!0});var te=s(h);Ot(R.$$.fragment,te),Le=u(te),ne=a(te,"SPAN",{});var dt=s(ne);Ae=v(dt,"Back"),dt.forEach(r),te.forEach(r),E.forEach(r),ie=u(o),j=a(o,"DIV",{class:!0});var ft=s(j);n=a(ft,"FORM",{class:!0});var d=s(n);A=a(d,"DIV",{class:!0});var de=s(A);F=a(de,"LABEL",{for:!0,class:!0});var pt=s(F);De=v(pt,"Name"),pt.forEach(r),Ve=u(de),I=a(de,"INPUT",{type:!0,class:!0,name:!0,id:!0,placeholder:!0}),de.forEach(r),we=u(d),D=a(d,"DIV",{class:!0});var fe=s(D);C=a(fe,"LABEL",{for:!0,class:!0});var vt=s(C);Ne=v(vt,"Type"),vt.forEach(r),Se=u(fe),y=a(fe,"SELECT",{class:!0,id:!0,name:!0});var mt=s(y);for(let it=0;it<m.length;it+=1)m[it].l(mt);mt.forEach(r),fe.forEach(r),Te=u(d),V=a(d,"DIV",{class:!0});var pe=s(V);H=a(pe,"LABEL",{for:!0,class:!0});var ht=s(H);Pe=v(ht,"Alcohol level"),ht.forEach(r),Be=u(pe),w=a(pe,"DIV",{class:!0});var ve=s(w);L=a(ve,"INPUT",{class:!0,type:!0,id:!0,name:!0,step:!0}),$e=u(ve),le=a(ve,"SPAN",{class:!0});var _t=s(le);ke=v(_t,"°"),_t.forEach(r),ve.forEach(r),pe.forEach(r),Oe=u(d),N=a(d,"DIV",{class:!0});var me=s(N);M=a(me,"LABEL",{for:!0,class:!0});var bt=s(M);Ue=v(bt,"Volume"),bt.forEach(r),qe=u(me),S=a(me,"DIV",{class:!0});var he=s(S);T=a(he,"INPUT",{class:!0,type:!0,id:!0,name:!0}),ze=u(he),ae=a(he,"SPAN",{class:!0});var Et=s(ae);Re=v(Et,"cl"),Et.forEach(r),he.forEach(r),me.forEach(r),je=u(d),P=a(d,"DIV",{class:!0});var _e=s(P);X=a(_e,"LABEL",{for:!0,class:!0});var yt=s(X);Fe=v(yt,"Distillery"),yt.forEach(r),Ce=u(_e),G=a(_e,"INPUT",{class:!0,type:!0,id:!0,name:!0}),_e.forEach(r),He=u(d),B=a(d,"DIV",{class:!0});var be=s(B);J=a(be,"LABEL",{for:!0,class:!0});var gt=s(J);Me=v(gt,"Origin"),gt.forEach(r),Xe=u(be),K=a(be,"INPUT",{class:!0,type:!0,id:!0,name:!0}),be.forEach(r),Ge=u(d),$=a(d,"DIV",{class:!0});var Ee=s($);Q=a(Ee,"LABEL",{for:!0,class:!0});var xt=s(Q);Je=v(xt,"Price"),xt.forEach(r),Ke=u(Ee),k=a(Ee,"DIV",{class:!0});var ye=s(k);re=a(ye,"SPAN",{class:!0});var It=s(re);Qe=v(It,"€"),It.forEach(r),We=u(ye),O=a(ye,"INPUT",{class:!0,type:!0,id:!0,name:!0}),ye.forEach(r),Ee.forEach(r),Ye=u(d),U=a(d,"DIV",{class:!0});var ge=s(U);W=a(ge,"LABEL",{for:!0,class:!0});var Lt=s(W);Ze=v(Lt,"Stock"),Lt.forEach(r),et=u(ge),Y=a(ge,"INPUT",{class:!0,type:!0,id:!0,name:!0}),ge.forEach(r),tt=u(d),q=a(d,"DIV",{class:!0});var xe=s(q);z=a(xe,"LABEL",{for:!0,class:!0});var nt=s(z);lt=v(nt,"Description "),se=a(nt,"SPAN",{class:!0});var At=s(se);at=v(At,"(Optional)"),At.forEach(r),nt.forEach(r),rt=u(xe),Z=a(xe,"TEXTAREA",{class:!0,id:!0,name:!0}),s(Z).forEach(r),xe.forEach(r),st=u(d),oe=a(d,"DIV",{class:!0});var Dt=s(oe);ee=a(Dt,"BUTTON",{class:!0,type:!0});var Vt=s(ee);ot=v(Vt,"Save"),Vt.forEach(r),Dt.forEach(r),d.forEach(r),ft.forEach(r),this.h()},h(){t(h,"class","btn btn-secondary d-flex align-items-center gap-1"),t(h,"href",Tt+"/products"),t(c,"class","container d-flex justify-content-between align-items-center"),t(F,"for","name"),t(F,"class","form-label svelte-ax6twl"),t(I,"type","text"),t(I,"class","form-control"),t(I,"name","name"),t(I,"id","name"),I.required=!0,t(I,"placeholder","Name of rum"),t(A,"class","col-12"),t(C,"for","type"),t(C,"class","form-label svelte-ax6twl"),t(y,"class","form-select"),t(y,"id","type"),t(y,"name","type"),y.required=!0,t(D,"class","col-12"),t(H,"for","alcoholLevel"),t(H,"class","form-label svelte-ax6twl"),t(L,"class","form-control"),t(L,"type","number"),t(L,"id","alcoholLevel"),t(L,"name","alcoholLevel"),t(L,"step",".01"),L.required=!0,t(le,"class","input-group-text"),t(w,"class","input-group"),t(V,"class","col-6"),t(M,"for","bottleSize"),t(M,"class","form-label svelte-ax6twl"),t(T,"class","form-control"),t(T,"type","number"),t(T,"id","bottleSize"),t(T,"name","bottleSize"),T.required=!0,t(ae,"class","input-group-text"),t(S,"class","input-group"),t(N,"class","col-6"),t(X,"for","distillery"),t(X,"class","form-label svelte-ax6twl"),t(G,"class","form-control"),t(G,"type","text"),t(G,"id","distillery"),t(G,"name","distillery"),t(P,"class","col-6"),t(J,"for","origin"),t(J,"class","form-label svelte-ax6twl"),t(K,"class","form-control"),t(K,"type","text"),t(K,"id","origin"),t(K,"name","origin"),t(B,"class","col-6"),t(Q,"for","price"),t(Q,"class","form-label svelte-ax6twl"),t(re,"class","input-group-text"),t(O,"class","form-control"),t(O,"type","number"),t(O,"id","price"),t(O,"name","price"),O.required=!0,t(k,"class","input-group"),t($,"class","col-6"),t(W,"for","stock"),t(W,"class","form-label svelte-ax6twl"),t(Y,"class","form-control"),t(Y,"type","number"),t(Y,"id","stock"),t(Y,"name","stock"),t(U,"class","col-6"),t(se,"class","text-muted"),t(z,"for","description"),t(z,"class","form-label svelte-ax6twl"),t(Z,"class","form-control"),t(Z,"id","description"),t(Z,"name","description"),t(q,"class","col-12"),t(ee,"class","btn btn-primary btn-lg"),t(ee,"type","submit"),t(oe,"class","text-end mt-5 aa"),t(n,"class","row needs-validation"),t(j,"class","mx-5 my-3 p-4 card shadow")},m(o,E){Ie(o,c,E),e(c,_),e(_,b),e(c,x),e(c,h),Ut(R,h,null),e(h,Le),e(h,ne),e(ne,Ae),Ie(o,ie,E),Ie(o,j,E),e(j,n),e(n,A),e(A,F),e(F,De),e(A,Ve),e(A,I),e(n,we),e(n,D),e(D,C),e(C,Ne),e(D,Se),e(D,y);for(let f=0;f<m.length;f+=1)m[f].m(y,null);e(n,Te),e(n,V),e(V,H),e(H,Pe),e(V,Be),e(V,w),e(w,L),e(w,$e),e(w,le),e(le,ke),e(n,Oe),e(n,N),e(N,M),e(M,Ue),e(N,qe),e(N,S),e(S,T),e(S,ze),e(S,ae),e(ae,Re),e(n,je),e(n,P),e(P,X),e(X,Fe),e(P,Ce),e(P,G),e(n,He),e(n,B),e(B,J),e(J,Me),e(B,Xe),e(B,K),e(n,Ge),e(n,$),e($,Q),e(Q,Je),e($,Ke),e($,k),e(k,re),e(re,Qe),e(k,We),e(k,O),e(n,Ye),e(n,U),e(U,W),e(W,Ze),e(U,et),e(U,Y),e(n,tt),e(n,q),e(q,z),e(z,lt),e(z,se),e(se,at),e(q,rt),e(q,Z),e(n,st),e(n,oe),e(oe,ee),e(ee,ot),ue=!0,ct||(ut=qt(g[0].call(null,n)),ct=!0)},p(o,[E]){if(E&0){ce=Object.entries(wt);let f;for(f=0;f<ce.length;f+=1){const te=Nt(o,ce,f);m[f]?m[f].p(te,E):(m[f]=St(te),m[f].c(),m[f].m(y,null))}for(;f<m.length;f+=1)m[f].d(1);m.length=ce.length}},i(o){ue||(zt(R.$$.fragment,o),ue=!0)},o(o){Rt(R.$$.fragment,o),ue=!1},d(o){o&&r(c),jt(R),o&&r(ie),o&&r(j),Ft(m,o),ct=!1,ut()}}}function Kt(g){const{form:c}=Gt({initialValues:{alcoholLevel:40,bottleSize:70},onSubmit:async _=>{const b=await new Xt().create(_);console.log(b),Mt(`${Tt}/products`)}});return[c]}class al extends Pt{constructor(c){super(),Bt(this,c,Kt,Jt,$t,{})}}export{al as default};
