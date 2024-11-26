import{q as s}from"./other-C5DKn4-I.js";import{_ as u}from"./common-DV61cPE2.js";import"./vendor-fCq96TsU.js";const l=d=>(Vue.pushScopeId("data-v-93279c58"),d=d(),Vue.popScopeId(),d),V={id:"SystemNotice"},c=l(()=>Vue.createElementVNode("span",{class:"f16"},"通知设置",-1)),r={class:"content"},i=l(()=>Vue.createElementVNode("div",{class:"title"},"消息免打扰",-1)),m=l(()=>Vue.createElementVNode("div",{class:"sub-title"},"开启后，新通知将用黄点展示，不再展示未读数字",-1)),p={key:0,class:"row"},_=l(()=>Vue.createElementVNode("div",{class:"left"},"系统通知",-1)),N={class:"row"},E=l(()=>Vue.createElementVNode("div",{class:"left"},"运营任务",-1)),v={class:"row"},f=l(()=>Vue.createElementVNode("div",{class:"left"},"星图(任务)",-1)),h={class:"row"},w=l(()=>Vue.createElementVNode("div",{class:"left"},"成长任务",-1)),b={class:"row"},k=l(()=>Vue.createElementVNode("div",{class:"left"},"DUO来评审团",-1)),y={class:"row"},U=l(()=>Vue.createElementVNode("div",{class:"left"},"任务中心",-1)),B={class:"row"},S=l(()=>Vue.createElementVNode("div",{class:"left"},"中视频伙伴任务",-1)),C={key:2,class:"row"},g=l(()=>Vue.createElementVNode("div",{class:"left"},"直播",-1)),I={class:"row"},x=l(()=>Vue.createElementVNode("div",{class:"left"},"钱包服务",-1)),M={class:"row"},T=l(()=>Vue.createElementVNode("div",{class:"left"},"收入服务",-1)),q={class:"row"},A=l(()=>Vue.createElementVNode("div",{class:"left"},"零钱服务",-1)),F={class:"row"},H=l(()=>Vue.createElementVNode("div",{class:"left"},"抖币服务",-1)),K={class:"row"},O=l(()=>Vue.createElementVNode("div",{class:"left"},"卡券服务",-1)),R=Vue.defineComponent({name:"NoticeSetting",__name:"NoticeSetting",props:{modelValue:{type:Boolean,default(){return!1}}},setup(d){const n=VueRouter.useRoute(),e=Vue.reactive({option:!0,option1:!1,option2:!1,option3:!0,option4:!1,option5:!1,option6:!1,option7:!0,option8:!0,option9:!1,option10:!1,option11:!1,option12:!1,type:"TASK"});return Vue.onMounted(()=>{e.type=n.query.type}),(Y,o)=>{const a=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",V,[Vue.createVNode(a,null,{center:Vue.withCtx(()=>[c]),_:1}),Vue.createElementVNode("div",r,[i,m,e.type==="SYSTEM"?(Vue.openBlock(),Vue.createElementBlock("div",p,[_,Vue.createVNode(s,{modelValue:e.option,"onUpdate:modelValue":o[0]||(o[0]=t=>e.option=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])])):Vue.createCommentVNode("",!0),e.type==="TASK"?(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:1},[Vue.createElementVNode("div",N,[E,Vue.createVNode(s,{modelValue:e.option1,"onUpdate:modelValue":o[1]||(o[1]=t=>e.option1=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",v,[f,Vue.createVNode(s,{modelValue:e.option2,"onUpdate:modelValue":o[2]||(o[2]=t=>e.option2=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",h,[w,Vue.createVNode(s,{modelValue:e.option3,"onUpdate:modelValue":o[3]||(o[3]=t=>e.option3=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",b,[k,Vue.createVNode(s,{modelValue:e.option4,"onUpdate:modelValue":o[4]||(o[4]=t=>e.option4=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",y,[U,Vue.createVNode(s,{modelValue:e.option5,"onUpdate:modelValue":o[5]||(o[5]=t=>e.option5=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",B,[S,Vue.createVNode(s,{modelValue:e.option6,"onUpdate:modelValue":o[6]||(o[6]=t=>e.option6=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])])],64)):Vue.createCommentVNode("",!0),e.type==="LIVE"?(Vue.openBlock(),Vue.createElementBlock("div",C,[g,Vue.createVNode(s,{modelValue:e.option7,"onUpdate:modelValue":o[7]||(o[7]=t=>e.option7=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])])):Vue.createCommentVNode("",!0),e.type==="MONEY"?(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:3},[Vue.createElementVNode("div",I,[x,Vue.createVNode(s,{modelValue:e.option8,"onUpdate:modelValue":o[8]||(o[8]=t=>e.option8=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",M,[T,Vue.createVNode(s,{modelValue:e.option9,"onUpdate:modelValue":o[9]||(o[9]=t=>e.option9=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",q,[A,Vue.createVNode(s,{modelValue:e.option10,"onUpdate:modelValue":o[10]||(o[10]=t=>e.option10=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",F,[H,Vue.createVNode(s,{modelValue:e.option11,"onUpdate:modelValue":o[11]||(o[11]=t=>e.option11=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])]),Vue.createElementVNode("div",K,[O,Vue.createVNode(s,{modelValue:e.option12,"onUpdate:modelValue":o[12]||(o[12]=t=>e.option12=t),theme:"bootstrap",color:"success"},null,8,["modelValue"])])],64)):Vue.createCommentVNode("",!0)])])}}}),z=u(R,[["__scopeId","data-v-93279c58"]]);export{z as default};
