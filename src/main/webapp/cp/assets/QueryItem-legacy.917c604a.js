System.register(["./vendor-legacy.5297913d.js"],(function(e){"use strict";var l,t,a,n,u,o,d,r,i,s,p,c,m,v,y,f,b,g,h,V,k,_,x,S,$,w,I,U,q,C;return{setters:[function(e){l=e.r,t=e.al,a=e.g,n=e.t,u=e.S,o=e.m,d=e.o,r=e.j,i=e.w,s=e.n,p=e.J,c=e.y,m=e.q,v=e.A,y=e.k,f=e.F,b=e.am,g=e.u,h=e.i,V=e.an,k=e.ao,_=e.D,x=e.x,S=e.ap,$=e.I,w=e.aq,I=e.ac,U=e.ar,q=e.as,C=e.at}],execute:function(){const j="ujcms_column_settings",O=l({}),J=l(function(){const e=localStorage.getItem(j);return e?JSON.parse(e):{}}()),A=(e,l)=>{for(let t=0,a=e.length;t<a;)-1===l.findIndex((l=>l.title===e[t].title))?(e.splice(t,1),a-=1):t+=1;return l.forEach((l=>{-1===e.findIndex((e=>e.title===l.title))&&e.push({...l})})),e},E=e=>(J[e]||(J[e]=[]),t(J,e)),N=(e("b",a({props:{name:{type:String,required:!0}},setup(e){const l=e,{name:a}=n(l),g=E(a.value),h=(e=>(O[e]||(O[e]=[]),t(O,e)))(a.value);u(g,(()=>{localStorage.setItem(j,JSON.stringify(J))}),{deep:!0});const V=()=>{g.value=A([],h.value)};return(e,l)=>{const t=o("el-icon"),a=o("el-tooltip"),n=o("el-button"),u=o("el-dropdown-item"),h=o("el-checkbox"),k=o("el-dropdown-menu"),_=o("el-dropdown");return d(),r(_,{class:"align-middle",trigger:"click","hide-on-click":!1},{dropdown:i((()=>[s(k,null,{default:i((()=>[s(u,null,{default:i((()=>[s(n,{onClick:V,type:"text"},{default:i((()=>[p(c(e.$t("table.columnsReset")),1)])),_:1})])),_:1}),(d(!0),m(f,null,v(y(g),((e,l)=>(d(),r(u,{key:e.title,divided:0===l},{default:i((()=>[s(h,{modelValue:e.display,"onUpdate:modelValue":l=>e.display=l},{default:i((()=>[p(c(e.title),1)])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["divided"])))),128))])),_:1})])),default:i((()=>[s(a,{content:e.$t("table.columnsSetting"),placement:"top"},{default:i((()=>[s(t,{class:"text-base"},{default:i((()=>[s(y(b))])),_:1})])),_:1},8,["content"])])),_:1})}}})),e("c",a({name:"ColumnList",props:{name:{type:String,required:!0}},setup(e,{slots:l}){var t,a;const{name:u}=n(e),{t:o}=g(),d=null!==(t=null===(a=l.default)||void 0===a?void 0:a.call(l))&&void 0!==t?t:[],r=e=>"selection"===(null==e?void 0:e.type)?o("table.selection"):null==e?void 0:e.label,i=d.map((e=>{var l;return{title:r(e.props),display:"none"!==(null===(l=e.props)||void 0===l?void 0:l.display)}}));((e,l)=>{O[e]=l,J[e]||(J[e]=[]);const t=J[e];A(t,l)})(u.value,i);const s=E(u.value);return{columns:h((()=>d.filter((e=>{const l=s.value.find((l=>r(e.props)===l.title));return!l||l.display})).map((e=>({...e,key:r(e.props)}))).sort(((e,l)=>{let t=s.value.findIndex((l=>l.title===r(e)));t<0&&(t=d.findIndex((l=>r(l)===r(e))));let a=s.value.findIndex((e=>e.title===r(l)));return a<0&&(a=d.findIndex((e=>r(e)===r(l)))),t-a}))))}},render(){return this.columns}})),a({name:"QueryInput",props:{inputs:{type:Array,required:!0},name:{type:String,required:!0}},setup(e){const{inputs:l,name:t}=n(e);return{input:h((()=>l.value.find((e=>e.props.name===t.value))))}},render(){return this.input}})),D={class:"flex"},F={class:"space-y-1"},L=(e("_",a({props:{params:{type:Object,required:!0}},emits:{search:null,reset:null},setup(e){var l,t;const a=e,{params:u}=n(a),b=V();k("params",u);const g=_([]),q=_([]);q.value=null!==(l=null===(t=b.default)||void 0===t?void 0:t.call(b))&&void 0!==l?l:[],g.value=q.value.map((e=>{var l,t;return{label:null===(l=e.props)||void 0===l?void 0:l.label,name:null===(t=e.props)||void 0===t?void 0:t.name}}));const[C]=g.value,j=_([C.name]),O=h((()=>g.value.filter((e=>!j.value.includes(e.name))))),J=()=>{Object.keys(u.value).forEach((e=>{j.value.includes(e)||-1!==j.value.findIndex((l=>l.split(",").includes(e)))||delete u.value[e]}))};return(e,l)=>{const t=o("el-button"),a=o("el-option"),n=o("el-select"),u=o("el-button-group");return d(),m("form",D,[x("div",F,[(d(!0),m(f,null,v(j.value,((e,u)=>(d(),m("div",{key:e,class:"flex"},[s(t,{icon:y(0==u?I:U),onClick:e=>(e=>{if(0===e){const[e]=O.value;j.value[j.value.length]=e.name}else j.value.splice(e,1),J()})(u),disabled:u<=0&&y(O).length<=0,circle:""},null,8,["icon","onClick","disabled"]),s(n,{modelValue:j.value[u],"onUpdate:modelValue":e=>j.value[u]=e,onChange:l[0]||(l[0]=e=>J()),class:"w-36"},{default:i((()=>[(d(!0),m(f,null,v(g.value.filter((e=>e.name===j.value[u]||y(O).includes(e))),(e=>(d(),r(a,{key:e.name,label:e.label,value:e.name},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"]),s(N,{inputs:q.value,name:j.value[u]},null,8,["inputs","name"])])))),128))]),x("div",null,[s(u,{class:"ml-2"},{default:i((()=>[s(t,{"native-type":"submit",icon:y(S),onClick:l[1]||(l[1]=$((l=>e.$emit("search")),["prevent"]))},{default:i((()=>[p(c(e.$t("search")),1)])),_:1},8,["icon"]),s(t,{icon:y(w),onClick:l[2]||(l[2]=l=>e.$emit("reset"))},{default:i((()=>[p(c(e.$t("reset")),1)])),_:1},8,["icon"])])),_:1})])])}}})),{key:0,class:"inline-block"});e("a",a({props:{label:{type:String,required:!0},name:{type:String,required:!0},type:{type:String},options:{type:Object}},setup(e){const l=e,t=q("params"),{name:a}=n(l),[u,p]=a.value.split(","),c=_(u),b=_(p);return(l,n)=>{const u=o("el-input-number"),p=o("el-date-picker"),g=o("el-option"),h=o("el-select"),V=o("el-input");return C(l.$slots,"default",{},(()=>["number"===e.type?(d(),m("div",L,[s(u,{modelValue:y(t)[c.value],"onUpdate:modelValue":n[0]||(n[0]=e=>y(t)[c.value]=e),placeholder:l.$t("begin.number"),class:"w-48"},null,8,["modelValue","placeholder"]),s(u,{modelValue:y(t)[b.value],"onUpdate:modelValue":n[1]||(n[1]=e=>y(t)[b.value]=e),placeholder:l.$t("end.number"),class:"w-48"},null,8,["modelValue","placeholder"])])):"date"===e.type?(d(),r(p,{key:1,modelValue:y(t)[y(a)],"onUpdate:modelValue":n[2]||(n[2]=e=>y(t)[y(a)]=e),type:"daterange","start-placeholder":l.$t("begin.date"),"end-placeholder":l.$t("end.date"),class:"w-96"},null,8,["modelValue","start-placeholder","end-placeholder"])):"datetime"===e.type?(d(),r(p,{key:2,modelValue:y(t)[y(a)],"onUpdate:modelValue":n[3]||(n[3]=e=>y(t)[y(a)]=e),type:"datetimerange","start-placeholder":l.$t("begin.date"),"end-placeholder":l.$t("end.date"),class:"w-96"},null,8,["modelValue","start-placeholder","end-placeholder"])):e.options?(d(),r(h,{key:3,modelValue:y(t)[y(a)],"onUpdate:modelValue":n[4]||(n[4]=e=>y(t)[y(a)]=e),multiple:"",class:"w-96"},{default:i((()=>[(d(!0),m(f,null,v(e.options,(e=>(d(),r(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])):(d(),r(V,{key:4,modelValue:y(t)[y(a)],"onUpdate:modelValue":n[5]||(n[5]=e=>y(t)[y(a)]=e),class:"w-96"},null,8,["modelValue"]))]))}}}))}}}));