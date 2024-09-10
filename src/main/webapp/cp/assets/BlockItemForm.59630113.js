var D=Object.defineProperty,H=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var w=(t,d,o)=>d in t?D(t,d,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[d]=o,v=(t,d)=>{for(var o in d||(d={}))S.call(d,o)&&w(t,o,d[o]);if(U)for(var o of U(d))W.call(d,o)&&w(t,o,d[o]);return t},C=(t,d)=>H(t,M(d));import{c as j}from"./config.b59763c6.js";import{g as R,h as z,i as G,f as J}from"./content.4349420b.js";import{_ as K}from"./DialogForm.42204124.js";import{a as L}from"./BaseUpload.2f2e7916.js";import{g as O,t as P,D as h,i as Q,L as X,m as V,o as i,j as b,w as n,n as m,q as N,A as Y,F as T,v as c,k as r}from"./vendor.6c10456e.js";const te=O({props:{modelValue:{type:Boolean,required:!0},beanId:{required:!0},beanIds:{type:Array,required:!0},blockId:{type:Number},articleId:{type:Number},title:{type:String},description:{type:String}},emits:{"update:modelValue":null,finished:null},setup(t){const d=t,{blockId:o}=P(d),g=h(),y=h(),k=h([]),s=Q(()=>k.value.find(a=>{var u;return a.id===((u=g.value)!=null?u:o==null?void 0:o.value)}));return X(async()=>{k.value=await j()}),(a,u)=>{const F=V("el-option"),A=V("el-select"),p=V("el-form-item"),I=V("el-input");return i(),b(K,{name:a.$t("menu.content.blockItem"),queryBean:r(R),createBean:r(z),updateBean:r(G),deleteBean:r(J),beanId:t.beanId,beanIds:t.beanIds,focus:y.value,initValues:()=>({blockId:r(o),articleId:t.articleId,title:t.title,description:t.description}),toValues:e=>C(v({},e),{articleTitle:e.article.title,articleId:e.article.id}),perms:"blockItem","model-value":t.modelValue,"onUpdate:modelValue":u[1]||(u[1]=e=>a.$emit("update:modelValue",e)),onFinished:u[2]||(u[2]=e=>a.$emit("finished")),onBeanChange:u[3]||(u[3]=e=>g.value=e.blockId)},{default:n(({values:e,isEdit:f})=>{var B,q,$;return[m(p,{prop:"blockId",label:a.$t("blockItem.block"),rules:{required:!0,message:()=>a.$t("v.required")}},{default:n(()=>[m(A,{modelValue:e.blockId,"onUpdate:modelValue":l=>e.blockId=l,class:"w-full",onChange:u[0]||(u[0]=l=>g.value=l),disabled:""},{default:n(()=>[(i(!0),N(T,null,Y(k.value,l=>(i(),N(T,{key:l.id},[f||l.enabled?(i(),b(F,{key:0,label:l.name,value:l.id,disabled:!l.enabled},null,8,["label","value","disabled"])):c("",!0)],64))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"]),m(p,{prop:"title",label:a.$t("blockItem.title"),rules:{required:!0,message:()=>a.$t("v.required")}},{default:n(()=>[m(I,{modelValue:e.title,"onUpdate:modelValue":l=>e.title=l,ref_key:"focus",ref:y,maxlength:"150"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"]),f?(i(),b(p,{key:0,label:a.$t("blockItem.articleId")},{default:n(()=>[m(I,{modelValue:e.articleId,"onUpdate:modelValue":l=>e.articleId=l,disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])):c("",!0),f?(i(),b(p,{key:1,label:a.$t("blockItem.articleTitle")},{default:n(()=>[m(I,{modelValue:e.articleTitle,"onUpdate:modelValue":l=>e.articleTitle=l,disabled:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])):c("",!0),((B=r(s))==null?void 0:B.withDescription)?(i(),b(p,{key:2,prop:"description",label:a.$t("blockItem.description"),rules:{required:!0,message:()=>a.$t("v.required")}},{default:n(()=>[m(I,{modelValue:e.description,"onUpdate:modelValue":l=>e.description=l,type:"textarea",rows:5,maxlength:"1000"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","rules"])):c("",!0),((q=r(s))==null?void 0:q.withImage)?(i(),b(p,{key:3,prop:"image",label:a.$t("blockItem.image"),rules:{required:!0,message:()=>a.$t("v.required")}},{default:n(()=>[m(r(L),{modelValue:e.image,"onUpdate:modelValue":l=>e.image=l,width:r(s).imageWidth,height:r(s).imageHeight,mode:"manual"},null,8,["modelValue","onUpdate:modelValue","width","height"])]),_:2},1032,["label","rules"])):c("",!0),(($=r(s))==null?void 0:$.withMobileImage)?(i(),b(p,{key:4,prop:"mobileImage",label:a.$t("blockItem.mobileImage"),rules:{required:!0,message:()=>a.$t("v.required")}},{default:n(()=>[m(r(L),{modelValue:e.mobileImage,"onUpdate:modelValue":l=>e.mobileImage=l,width:r(s).mobileImageWidth,height:r(s).mobileImageHeight,mode:"manual"},null,8,["modelValue","onUpdate:modelValue","width","height"])]),_:2},1032,["label","rules"])):c("",!0)]}),_:1},8,["name","queryBean","createBean","updateBean","deleteBean","beanId","beanIds","focus","initValues","toValues","model-value"])}}});export{te as _};
