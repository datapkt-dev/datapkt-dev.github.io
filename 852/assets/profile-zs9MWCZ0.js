import{_ as C,u as I,a as $,b as w,c as U,r as c,o,d as n,e as t,f as u,g as l,w as y,v as m,h as a,t as N,p as B,i as D}from"./index-J4qenc36.js";const s=h=>(B("data-v-939ccb5b"),h=h(),D(),h),H={class:"content-page"},R=s(()=>t("div",{class:"content-title"}," 個人資料 ",-1)),P={class:"content-body"},T={class:"home-top"},A={class:"form-div"},E=s(()=>t("label",{for:""},"審核狀態",-1)),J={key:0,class:"text-danger"},M={key:1,class:"text-warning"},O={key:2,class:"text-success"},j=s(()=>t("label",{for:""},[t("small",{class:"text-danger"},"*"),a(" 頭像")],-1)),q={class:"input-group"},z=["src"],F=s(()=>t("label",{for:""},"電子郵件",-1)),G={class:"input-group"},K=s(()=>t("label",{for:""},[t("small",{class:"text-danger"},"*"),a(" 身分")],-1)),L={class:"input-group"},Q={class:"radiobox",for:"radio-identity-1"},W=["checked"],X=s(()=>t("div",null,null,-1)),Y={class:"radiobox",for:"radio-identity-2"},Z=["checked"],tt=s(()=>t("div",null,null,-1)),et={key:0},st=s(()=>t("label",{for:""},[t("small",{class:"text-danger"},"*"),a(" 物業編號")],-1)),ot=s(()=>t("div",null,[t("div",{class:"input-group"},[t("input",{type:"text",readonly:""})])],-1)),nt=[st,ot],lt={key:1},it=s(()=>t("label",{for:""},[t("small",{class:"text-danger"},"*"),a(" 牌照")],-1)),dt=s(()=>t("div",null,[t("div",{class:"input-group"},[t("input",{type:"text",readonly:""})])],-1)),at=[it,dt],ut={key:2},rt=s(()=>t("label",{for:""},[t("small",{class:"text-danger"},"*"),a(" 真實姓名")],-1)),ct={class:"input-group"},_t={key:3},vt=s(()=>t("label",{for:""},[t("small",{class:"text-danger"},"*"),a(" 身分證")],-1)),pt=s(()=>t("div",null,[t("div",{class:"input-group"},[t("input",{type:"text",readonly:""})])],-1)),ht=[vt,pt],yt={key:4},mt=s(()=>t("label",{for:""},[t("small",{class:"text-danger"},"*"),a(" 上傳身分證照片")],-1)),bt=s(()=>t("div",null,[t("div",{class:"input-group"},[t("input",{type:"file",readonly:""})])],-1)),ft=[mt,bt],gt={key:5},xt=s(()=>t("label",{for:""},[t("small",{class:"text-danger"},"*"),a(" 公司/單位")],-1)),kt=s(()=>t("div",null,[t("div",{class:"input-group"},[t("input",{type:"text",readonly:""})])],-1)),Vt=[xt,kt],St={key:6},Ct=s(()=>t("label",{for:""},[t("small",{class:"text-danger"},"*"),a(" 連絡電話"),t("br"),a("(顯示租屋)")],-1)),It=s(()=>t("div",null,[t("div",{class:"input-group"},[t("input",{type:"text",readonly:""})])],-1)),$t=[Ct,It],wt={key:7},Ut=s(()=>t("label",{for:""},[t("small",{class:"text-danger"},"*"),a(" whatsapp")],-1)),Nt=s(()=>t("div",null,[t("div",{class:"input-group"},[t("input",{type:"text",readonly:""})])],-1)),Bt=[Ut,Nt],Dt={key:8},Ht=s(()=>t("label",{for:""},[t("small",{class:"text-danger"},"*"),a(" 地址")],-1)),Rt=s(()=>t("div",null,[t("div",{class:"input-group"},[t("input",{type:"text",readonly:""})])],-1)),Pt=[Ht,Rt],Tt=s(()=>t("label",{for:""},[t("small",{class:"text-danger"},"*"),a(" 手機")],-1)),At={class:"input-group"},Et=["disabled"],Jt=["disabled"],Mt=["disabled"],Ot=["disabled"],jt={key:3},qt=["disabled"],zt={key:5},Ft=s(()=>t("span",{class:"text-success"},"已驗證",-1)),Gt=[Ft],Kt={key:0,class:"home-top mt-1"},Lt={class:"text-center"},Qt={__name:"profile",setup(h){I(),$(),w();const i=U();c(1);const v=c({name:"",email:"",picture:""});localStorage.getItem("user")&&(v.value=JSON.parse(localStorage.getItem("user")));const _=c(!1),b=c(!1),k=c(60),V=()=>{_.value=!0;let p=60;const e=setInterval(()=>{p--,k.value=p,p==0&&(clearInterval(e),b.value=!0)},1e3)},f=p=>{i.setAccountVerify(p)},g=c(""),x=c(""),S=()=>{i.setPhoneVerify(!0)},r=c(0);return(p,e)=>(o(),n("div",H,[R,t("div",P,[t("div",T,[t("div",null,[t("div",A,[t("div",null,[E,t("div",null,[u(i).accountVerify==0?(o(),n("div",J,"未送審")):l("",!0),u(i).accountVerify==1?(o(),n("div",M,"審核中")):l("",!0),u(i).accountVerify==2?(o(),n("div",O,"已審核")):l("",!0)])]),t("div",null,[j,t("div",null,[t("div",q,[t("img",{src:v.value.picture,alt:"",style:{width:"100px",height:"100px","border-radius":"50%"}},null,8,z)])])]),t("div",null,[F,t("div",null,[t("div",G,[y(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=d=>v.value.email=d),readonly:""},null,512),[[m,v.value.email]])])])]),t("div",null,[K,t("div",null,[t("div",L,[t("label",Q,[t("input",{type:"radio",name:"radio-identity",id:"radio-identity-1",value:"0",onClick:e[1]||(e[1]=d=>r.value=0),checked:r.value==0},null,8,W),X,a(" 房東 ")]),t("label",Y,[t("input",{type:"radio",name:"radio-identity",id:"radio-identity-2",value:"1",onClick:e[2]||(e[2]=d=>r.value=1),checked:r.value==1},null,8,Z),tt,a(" 代理 ")])])])]),String(r.value).match(/1/)?(o(),n("div",et,nt)):l("",!0),String(r.value).match(/1/)?(o(),n("div",lt,at)):l("",!0),String(r.value).match(/0|1/)?(o(),n("div",ut,[rt,t("div",null,[t("div",ct,[y(t("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=d=>v.value.name=d),readonly:""},null,512),[[m,v.value.name]])])])])):l("",!0),String(r.value).match(/0|1/)?(o(),n("div",_t,ht)):l("",!0),String(r.value).match(/0|1/)?(o(),n("div",yt,ft)):l("",!0),String(r.value).match(/1/)?(o(),n("div",gt,Vt)):l("",!0),String(r.value).match(/0/)?(o(),n("div",St,$t)):l("",!0),String(r.value).match(/0|1/)?(o(),n("div",wt,Bt)):l("",!0),String(r.value).match(/0|1/)?(o(),n("div",Dt,Pt)):l("",!0),t("div",null,[Tt,t("div",null,[t("div",At,[t("div",null,[y(t("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=d=>g.value=d),placeholder:"輸入手機號碼",disabled:_.value||u(i).phoneVerify},null,8,Et),[[m,g.value]])]),_.value==!1&&!u(i).phoneVerify?(o(),n("button",{key:0,class:"btn btn-outline-primary",onClick:e[5]||(e[5]=d=>V()),disabled:g.value==""}," 發送驗證碼 ",8,Jt)):l("",!0),_.value&&!u(i).phoneVerify?(o(),n("div",{key:1,disabled:!b.value},"沒有收到嗎?",8,Mt)):l("",!0),_.value&&!u(i).phoneVerify?(o(),n("button",{key:2,class:"btn btn-outline-primary",onClick:e[6]||(e[6]=d=>V()),disabled:!b.value}," 重發驗證碼 "+N(k.value),9,Ot)):l("",!0),_.value&&!u(i).phoneVerify?(o(),n("div",jt,[y(t("input",{type:"text","onUpdate:modelValue":e[7]||(e[7]=d=>x.value=d),placeholder:"輸入驗證碼"},null,512),[[m,x.value]])])):l("",!0),_.value&&!u(i).phoneVerify?(o(),n("button",{key:4,class:"btn btn-primary",disabled:x.value=="",onClick:e[8]||(e[8]=d=>S())}," 立即驗證 ",8,qt)):l("",!0),u(i).phoneVerify?(o(),n("div",zt,Gt)):l("",!0)])])])])])]),u(i).phoneVerify?(o(),n("div",Kt,[t("div",Lt,[u(i).accountVerify==0?(o(),n("button",{key:0,class:"btn btn-primary",onClick:e[9]||(e[9]=d=>f(1))},"送審")):l("",!0),u(i).accountVerify==2?(o(),n("button",{key:1,class:"btn btn-primary",onClick:e[10]||(e[10]=d=>f(1))},"儲存並重新送審")):l("",!0),u(i).accountVerify==1?(o(),n("button",{key:2,class:"btn btn-light",onClick:e[11]||(e[11]=d=>f(2))}," 測試用按鈕 (轉成 已審核)")):l("",!0)])])):l("",!0)])]))}},Xt=C(Qt,[["__scopeId","data-v-939ccb5b"]]);export{Xt as default};