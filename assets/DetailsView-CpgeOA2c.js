import{c as g,d as c,o,a as l,b as e,e as x,t as i,T as k,F as w,_ as y,u as L,g as A,f as t,h as a,w as r,A as C,i as B,j as b,R as f,k as I,C as $,l as z}from"./index-DOuxDOCY.js";/**
 * @license lucide-vue-next v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=g("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=g("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),V={class:"modal fade",id:"contactModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},M={class:"modal-dialog"},j={class:"modal-content"},R={class:"modal-body"},T=c({__name:"AdContactButton",props:{contact:{}},setup(m){return(n,s)=>(o(),l(w,null,[s[2]||(s[2]=e("button",{type:"button",class:"btn btn-primary align-self-sm-end px-5 py-2","data-bs-toggle":"modal","data-bs-target":"#contactModal"}," Kapcsolatfelvétel ",-1)),(o(),x(k,{to:"body"},[e("div",V,[e("div",M,[e("div",j,[s[0]||(s[0]=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-5",id:"exampleModalLabel"},"Kapcsolat"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),e("div",R,[e("p",null,"E-mail: "+i(n.contact.email),1),e("p",null,"Telefon: "+i(n.contact.parsedPhoneNumbers.join(", ")),1)]),s[1]||(s[1]=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Bezárás ")],-1))])])])]))],64))}}),E={class:"overflow-hidden rounded-4 d-grid image-gallery gap-3"},F=["src"],H=c({__name:"AdImageGallery",props:{image:{}},setup(m){return(n,s)=>(o(),l("div",E,[e("img",{src:n.image,alt:"...",class:"img-fluid object-fit-cover w-100",width:"240"},null,8,F),s[0]||(s[0]=e("div",null,null,-1)),s[1]||(s[1]=e("div",null,null,-1)),s[2]||(s[2]=e("div",null,null,-1))]))}}),K=y(H,[["__scopeId","data-v-35175f72"]]),q={key:0,class:"loading"},G={key:1,class:"error"},P={key:2,class:"p-3 container-xl"},S={class:"row mb-3"},Q={class:"col-4 d-flex"},U={class:"col-8"},J={key:0,class:"d-grid gap-3"},O={class:"card ad-details overflow-y-auto"},W=["src"],X={key:0,class:"card-text d-flex align-items-center gap-1"},Y={placeholder:"Description",class:"shadow-primary rounded-3 border-none p-3 ad-description flex-fill"},Z={key:1,class:"error"},ee=c({__name:"DetailsView",setup(m){const n=B(),{isPending:s,isError:v,data:d,error:h}=L({queryKey:["ads","details",Number(n.params.id)],queryFn:({queryKey:u})=>A(u[2])});return(u,p)=>{var _;return t(s)?(o(),l("div",q,"Loading...")):t(v)?(o(),l("div",G,i((_=t(h))==null?void 0:_.message),1)):(o(),l("div",P,[e("header",S,[e("div",Q,[a(t(f),{to:"/",class:"btn btn-secondary d-inline-flex align-items-center px-3"},{default:r(()=>[a(t(D),{size:24}),p[0]||(p[0]=b("Vissza"))]),_:1})]),e("div",U,[a(I,{title:"Részletek"})])]),t(d)?(o(),l("div",J,[a(K,{image:t(d).image},null,8,["image"]),e("div",O,[e("img",{src:t(d).image,alt:"...",class:"img-fluid object-fit-cover card-image w-100 d-sm-none",width:"240"},null,8,W),a(t(f),{to:"/",class:"d-sm-none position-absolute btn btn-secondary mobile-back-button"},{default:r(()=>[a(t(N),{size:32})]),_:1}),a(C,{ad:t(d)},{default:r(()=>[t(d).favourite?(o(),l("p",X,[a(t($),{size:18}),b(" "+i(new Date(t(d).favourite.createdAt).toLocaleDateString("hu-HU")),1)])):z("",!0),e("p",Y,i(t(d).description),1),a(T,{contact:t(d).contact},null,8,["contact"])]),_:1},8,["ad"])])])):(o(),l("div",Z,"Nem található"))]))}}}),se=y(ee,[["__scopeId","data-v-1850f76d"]]);export{se as default};