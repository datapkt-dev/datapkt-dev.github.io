import{_ as g,u as f,a as y,b as x,r as d,o as a,c as n,d as e,w as p,v,e as i,t as k,p as I,f as S,g as _}from"./index-UZytPPgG.js";const u=r=>(I("data-v-dec00c97"),r=r(),S(),r),V={class:"content-page"},w=u(()=>e("div",{class:"content-title"}," 個人資料 ",-1)),U={class:"content-body"},N={class:"home-top"},B={class:"form-div"},C=u(()=>e("label",{for:""},[e("small",{class:"text-danger"},"*"),_(" 頭像")],-1)),D={class:"input-group"},R=["src"],T=u(()=>e("label",{for:""},[e("small",{class:"text-danger"},"*"),_(" 電子郵件")],-1)),$={class:"input-group"},E=u(()=>e("label",{for:""},[e("small",{class:"text-danger"},"*"),_(" 姓名")],-1)),H={class:"input-group"},J=u(()=>e("label",{for:""},[e("small",{class:"text-danger"},"*"),_(" 手機")],-1)),M={class:"input-group"},O=["disabled"],j=["disabled"],q=["disabled"],z={key:3},A={key:4,class:"btn btn-primary"},F={__name:"profile",setup(r){f(),y(),x(),d(1);const l=d({name:"",email:"",picture:""});localStorage.getItem("user")&&(l.value=JSON.parse(localStorage.getItem("user")));const o=d(!1),m=d(!1),b=d(60),h=()=>{o.value=!0;let c=60;const t=setInterval(()=>{c--,b.value=c,c==0&&(clearInterval(t),m.value=!0)},1e3)};return(c,t)=>(a(),n("div",V,[w,e("div",U,[e("div",N,[e("div",null,[e("div",B,[e("div",null,[C,e("div",null,[e("div",D,[e("img",{src:l.value.picture,alt:"",style:{width:"100px",height:"100px","border-radius":"50%"}},null,8,R)])])]),e("div",null,[T,e("div",null,[e("div",$,[p(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>l.value.email=s),readonly:""},null,512),[[v,l.value.email]])])])]),e("div",null,[E,e("div",null,[e("div",H,[p(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=s=>l.value.name=s),readonly:""},null,512),[[v,l.value.name]])])])]),e("div",null,[J,e("div",null,[e("div",M,[e("div",null,[p(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=s=>l.value.phone=s),placeholder:"輸入手機號碼",disabled:o.value},null,8,O),[[v,l.value.phone]])]),o.value==!1?(a(),n("button",{key:0,class:"btn btn-outline-primary",onClick:t[3]||(t[3]=s=>h())}," 發送驗證碼 ")):i("",!0),o.value?(a(),n("div",{key:1,disabled:!m.value},"沒有收到嗎?",8,j)):i("",!0),o.value?(a(),n("button",{key:2,class:"btn btn-outline-primary",onClick:t[4]||(t[4]=s=>h()),disabled:!m.value}," 重發驗證碼 "+k(b.value),9,q)):i("",!0),o.value?(a(),n("div",z,[p(e("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=s=>l.value.phone=s),placeholder:"輸入驗證碼"},null,512),[[v,l.value.phone]])])):i("",!0),o.value?(a(),n("button",A," 立即驗證 ")):i("",!0)])])])])])])])]))}},K=g(F,[["__scopeId","data-v-dec00c97"]]);export{K as default};