import{i as l}from"./other-C5DKn4-I.js";import{u,f as i,g as n,q as V,_ as p}from"./common-DV61cPE2.js";import"./vendor-fCq96TsU.js";const m=""+new URL("../assets/code-bg-D9skOJ9I.png",import.meta.url).href,h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADhUExURf///////////////////////////0dwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////0uxjokAAABLdFJOU+av4DE6AQoArnRz5Z7Ex4g523mtF9alNqsqtWuJehDjYhxTDgUE4XinNUp9uwub3jugnQ+RqD1cKxPULYAzURROuOIZZj/asHJl2IwBloMAAAFqSURBVFjD7dnpTsJAEADgKaW1VlBuBUVUCooHnqiI4n2+/wMZ291tS0lqujOJJjM/p8yXwC7s7AALBAGMEqJW6eCs6ohY21j9RbG9XpAFzt7F1X0CNR8hFktbqeZmMV5yvOvF0YcczERuOw1dmS0B4yiK3vUTL4CdNHQ5WXMaQa1DwEFhP0Qv5zzO8vYB3kP0Nvk0w0L5ZecKLQSZJyP7lpKfxbVCq2LxNDb8iUBLCnWChKOB5gWaZ5RRKrQRJBoaqClQU6GVIFHRQO2OT3RshdbqP4l6TedgavtoO/Ij3WwBtJpap13PLUPZ7cXOqG5X+xC1ni1uJhhllFHPndMWZYi30SREh4AV/YlEB4AXI4l+IqJfEp0iokWJjm/wUFct1CuaOvTCfTqefiwixMuAv6aMMkqHErSSFE0vSXtOcpEgufLw3ZTR/4CSDLtIxnIkA0S8UadBPJQlGR/TDLppRvI0fx5wh/K30W+t2bJvKRewXQAAAABJRU5ErkJggg==",E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACuUExURf///////////////////////////0dwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4w4PKQAAAA6dFJOU+YGoi1KEboAdOOoxAVmm3M14dTl2BNRcs3aQnhqzOQnhg9eoJI/ELdSAdJIOAKELiWvWGWBTSih2XaucbhsAAABnklEQVRYw+3Y526DMBAAYKfQNoEEkjaze++9+/4vVppAMOZWpIsqpb4/ICM+IeEbstlcQpjVQ4OoH6dtXTTomSwSXTQy0+iqopMZ2lFFZ6ZpetSjHvWoRz3q0b9Ar08ux6cfi6F3o71DEn34fbMXLoA2zrLlVodAn2avtkIx2librh884uiLwVQEbXzmD3Zx9NZgKozm35nFEY4e32AqiJamuSJ+1E4LUSHUMp/vqX0aIiqAWubGOr35EbWO4iaQUbBaQwkTSlNQdVHKBHMfUh2UNOGCAqhVlDaRKlVXKyhjYqWvptooZ6L11FUtlDXxIu2oJcqbROWvqnNUYFLtpKIWqMQke5St5jffEpNufJaaX2OJyXTTUnWDMrkWjamkyfZ9WKVNfpiAVMYUTCh1lTMlY4+rsqZolqqqvCkb0GxVYAqnvlKVmNJRMtzOM0piiufT96m6f6F9LPc1flM+lvvvR50eXVm0ncZGIyZRUKKJ0YpeUKBdoxdRgb4qov0CHSqicYEOtvTQdP6jztXUpF3u08Fw1FSITten6ZLQH9iMoij01E5dAAAAAElFTkSuQmCC",o=a=>(Vue.pushScopeId("data-v-90597bc4"),a=a(),Vue.popScopeId(),a),_={id:"MyCard"},v={class:"header"},U={class:"content"},f={class:"qrcode"},C=o(()=>Vue.createElementVNode("img",{class:"qrcode-bg",src:m,alt:""},null,-1)),q=["src"],g=o(()=>Vue.createElementVNode("span",{class:"name"},"ZZZZZZZZZZ",-1)),k=o(()=>Vue.createElementVNode("span",{class:"notice"},"抖音扫一扫，立即关注我",-1)),N={class:"footer"},B=o(()=>Vue.createElementVNode("div",{class:"wrapper"},[Vue.createElementVNode("img",{src:h,alt:""})],-1)),O=o(()=>Vue.createElementVNode("span",null,"扫一扫",-1)),R=[B,O],S=o(()=>Vue.createElementVNode("div",{class:"wrapper"},[Vue.createElementVNode("img",{src:E,alt:""})],-1)),T=o(()=>Vue.createElementVNode("span",null,"保存",-1)),w=[S,T],M=Vue.defineComponent({name:"MyCard",__name:"MyCard",setup(a){const A=VueRouter.useRouter(),c=u(),e=Vue.reactive({isSharing:!1,okText:"",showSharePassword:!1,shareToFriend:!1,shareType:-1,showDouyinCode:!1});return Vue.watch(()=>e.shareType,r=>{if(r!==-1)switch(e.showSharePassword=!0,r){case 2:case 3:return e.okText="去微信粘贴";case 4:case 5:return e.okText="去QQ粘贴";case 8:return e.okText="去微博粘贴"}}),(r,t)=>{const d=Vue.resolveComponent("dy-back");return Vue.openBlock(),Vue.createElementBlock("div",_,[Vue.createElementVNode("div",v,[Vue.createVNode(d,{mode:"light",onClick:Vue.unref(A).back},null,8,["onClick"]),Vue.createElementVNode("img",{class:"share",src:l,onClick:t[0]||(t[0]=s=>e.isSharing=!0)})]),Vue.createElementVNode("div",U,[Vue.createElementVNode("div",f,[C,Vue.createElementVNode("img",{class:"avatar",src:Vue.unref(i)(Vue.unref(c).userinfo.cover_url[0].url_list[0]),alt:""},null,8,q)]),g,k]),Vue.createElementVNode("div",N,[Vue.createElementVNode("div",{class:"btn",onClick:t[1]||(t[1]=(...s)=>Vue.unref(n)&&Vue.unref(n)(...s))},R),Vue.createElementVNode("div",{class:"btn",onClick:t[2]||(t[2]=(...s)=>Vue.unref(n)&&Vue.unref(n)(...s))},w)]),Vue.createVNode(V,{value:e.isSharing,"onUpdate:value":t[3]||(t[3]=s=>e.isSharing=s),mode:"qrcode",ref:"share","page-id":"MyCard"},null,8,["value"])])}}}),F=p(M,[["__scopeId","data-v-90597bc4"]]);export{F as default};
