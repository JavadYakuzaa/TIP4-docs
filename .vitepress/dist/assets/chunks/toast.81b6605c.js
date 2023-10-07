import{d as C,ap as gt,l as Tt,c as i,U as Y,n as b,b as v,w as P,R as F,O as x,J as _,e as I,k as y,K as $,a as N,t as R,a1 as yt,a3 as Ct,aq as _t,L as z,o,r as bt,N as St,D as Q,$ as Ot,S as wt,E as Bt,a5 as Et,_ as It,h as Dt,g as j,p as Rt,m as Pt}from"./framework.af8f98c2.js";var Nt=Object.defineProperty,G=Object.getOwnPropertySymbols,Lt=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable,X=(t,e,s)=>e in t?Nt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,Z=(t,e)=>{for(var s in e||(e={}))Lt.call(e,s)&&X(t,s,e[s]);if(G)for(var s of G(e))At.call(e,s)&&X(t,s,e[s]);return t},L=t=>typeof t=="function",A=t=>typeof t=="string",tt=t=>A(t)&&t.trim().length>0,Vt=t=>typeof t=="number",T=t=>typeof t>"u",S=t=>typeof t=="object"&&t!==null,kt=t=>f(t,"tag")&&tt(t.tag),et=t=>window.TouchEvent&&t instanceof TouchEvent,st=t=>f(t,"component")&&nt(t.component),Mt=t=>L(t)||S(t),nt=t=>!T(t)&&(A(t)||Mt(t)||st(t)),q=t=>S(t)&&["height","width","right","left","top","bottom"].every(e=>Vt(t[e])),f=(t,e)=>(S(t)||L(t))&&e in t,$t=(t=>()=>t++)(0);function M(t){return et(t)?t.targetTouches[0].clientX:t.clientX}function K(t){return et(t)?t.targetTouches[0].clientY:t.clientY}var Ht=t=>{T(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},B=t=>st(t)?B(t.component):kt(t)?C({render(){return t}}):typeof t=="string"?t:gt(Tt(t)),Ft=t=>{if(typeof t=="string")return t;const e=f(t,"props")&&S(t.props)?t.props:{},s=f(t,"listeners")&&S(t.listeners)?t.listeners:{};return{component:B(t),props:e,listeners:s}},xt=()=>typeof window<"u",V=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const s=this.getHandlers(t);s.push(e),this.allHandlers[t]=s}off(t,e){const s=this.getHandlers(t);s.splice(s.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(a=>a(e))}},Ut=t=>["on","off","emit"].every(e=>f(t,e)&&L(t[e])),l;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(l||(l={}));var O;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(O||(O={}));var c;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(c||(c={}));var d="Vue-Toastification",u={type:{type:String,default:l.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},at={type:u.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},D={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:u.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},H={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},ot={transition:{type:[Object,String],default:`${d}__bounce`}},zt={position:{type:String,default:O.TOP_RIGHT},draggable:u.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:u.trueBoolean,pauseOnHover:u.trueBoolean,closeOnClick:u.trueBoolean,timeout:H.timeout,hideProgressBar:H.hideProgressBar,toastClassName:u.classNames,bodyClassName:u.classNames,icon:at.customIcon,closeButton:D.component,closeButtonClassName:D.classNames,showCloseButtonOnHover:D.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new V}},jt={id:{type:[String,Number],required:!0,default:0},type:u.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},Gt={container:{type:[Object,Function],default:()=>document.body},newestOnTop:u.trueBoolean,maxToasts:{type:Number,default:20},transition:ot.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:u.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},p={CORE_TOAST:zt,TOAST:jt,CONTAINER:Gt,PROGRESS_BAR:H,ICON:at,TRANSITION:ot,CLOSE_BUTTON:D},rt=C({name:"VtProgressBar",props:p.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${d}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function Xt(t,e){return o(),i("div",{style:Y(t.style),class:b(t.cpClass)},null,6)}rt.render=Xt;var qt=rt,it=C({name:"VtCloseButton",props:p.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?B(this.component):"button"},classes(){const t=[`${d}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),Kt=N(" × ");function Wt(t,e){return o(),v(x(t.buttonComponent),F({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:P(()=>[Kt]),_:1},16,["aria-label","class"])}it.render=Wt;var Jt=it,lt={},Yt={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Qt=y("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),Zt=[Qt];function te(t,e){return o(),i("svg",Yt,Zt)}lt.render=te;var ee=lt,ct={},se={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},ne=y("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),ae=[ne];function oe(t,e){return o(),i("svg",se,ae)}ct.render=oe;var W=ct,ut={},re={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},ie=y("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),le=[ie];function ce(t,e){return o(),i("svg",re,le)}ut.render=ce;var ue=ut,dt={},de={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},he=y("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),fe=[he];function pe(t,e){return o(),i("svg",de,fe)}dt.render=pe;var me=dt,ht=C({name:"VtIcon",props:p.ICON,computed:{customIconChildren(){return f(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return A(this.customIcon)?this.trimValue(this.customIcon):f(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return f(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:nt(this.customIcon)?B(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[l.DEFAULT]:W,[l.INFO]:W,[l.SUCCESS]:ee,[l.ERROR]:me,[l.WARNING]:ue}[this.type]},iconClasses(){const t=[`${d}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return tt(t)?t.trim():e}}});function ve(t,e){return o(),v(x(t.component),{class:b(t.iconClasses)},{default:P(()=>[N(R(t.customIconChildren),1)]),_:1},8,["class"])}ht.render=ve;var ge=ht,ft=C({name:"VtToast",components:{ProgressBar:qt,CloseButton:Jt,Icon:ge},inheritAttrs:!1,props:Object.assign({},p.CORE_TOAST,p.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${d}__toast`,`${d}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${d}__toast--rtl`),t},bodyClasses(){return[`${d}__toast-${A(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return q(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:f,getVueComponentFromObj:B,closeToast(){this.eventBus.emit(c.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:M(t),y:K(t)},this.dragStart=M(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:M(t),y:K(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,q(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),Te=["role"];function ye(t,e){const s=_("Icon"),a=_("CloseButton"),h=_("ProgressBar");return o(),i("div",{class:b(t.classes),style:Y(t.draggableStyle),onClick:e[0]||(e[0]=(...n)=>t.clickHandler&&t.clickHandler(...n)),onMouseenter:e[1]||(e[1]=(...n)=>t.hoverPause&&t.hoverPause(...n)),onMouseleave:e[2]||(e[2]=(...n)=>t.hoverPlay&&t.hoverPlay(...n))},[t.icon?(o(),v(s,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):I("v-if",!0),y("div",{role:t.accessibility.toastRole||"alert",class:b(t.bodyClasses)},[typeof t.content=="string"?(o(),i($,{key:0},[N(R(t.content),1)],2112)):(o(),v(x(t.getVueComponentFromObj(t.content)),F({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},yt(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,Te),t.closeButton?(o(),v(a,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:Ct(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):I("v-if",!0),t.timeout?(o(),v(h,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):I("v-if",!0)],38)}ft.render=ye;var Ce=ft,pt=C({name:"VtTransition",props:p.TRANSITION,emits:["leave"],methods:{hasProp:f,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function _e(t,e){return o(),v(_t,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:P(()=>[bt(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}pt.render=_e;var be=pt,mt=C({name:"VueToastification",devtools:{hide:!0},components:{Toast:Ce,VtTransition:be},props:Object.assign({},p.CORE_TOAST,p.CONTAINER,p.TRANSITION),data(){return{count:0,positions:Object.values(O),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(c.ADD,this.addToast),t.on(c.CLEAR,this.clearToasts),t.on(c.DISMISS,this.dismissToast),t.on(c.UPDATE,this.updateToast),t.on(c.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){L(t)&&(t=await t()),Ht(this.$el),t.appendChild(this.$el)},setToast(t){T(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=Ft(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),s=this.defaults.filterBeforeCreate(e,this.toastArray);s&&this.setToast(s)},dismissToast(t){const e=this.toasts[t];!T(e)&&!T(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(s=>s.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){T(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:s}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):s&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${d}__container`,t].concat(this.defaults.containerClassName)}}});function Se(t,e){const s=_("Toast"),a=_("VtTransition");return o(),i("div",null,[(o(!0),i($,null,z(t.positions,h=>(o(),i("div",{key:h},[St(a,{transition:t.defaults.transition,class:b(t.getClasses(h))},{default:P(()=>[(o(!0),i($,null,z(t.getPositionToasts(h),n=>(o(),v(s,F({key:n.id},n),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}mt.render=Se;var Oe=mt,J=(t={},e=!0)=>{const s=t.eventBus=t.eventBus||new V;e&&Bt(()=>{const n=Et(Oe,Z({},t)),r=n.mount(document.createElement("div")),g=t.onMounted;if(T(g)||g(r,n),t.shareAppContext){const m=t.shareAppContext;m===!0?console.warn(`[${d}] App to share context with was not provided.`):(n._context.components=m._context.components,n._context.directives=m._context.directives,n._context.mixins=m._context.mixins,n._context.provides=m._context.provides,n.config.globalProperties=m.config.globalProperties)}});const a=(n,r)=>{const g=Object.assign({},{id:$t(),type:l.DEFAULT},r,{content:n});return s.emit(c.ADD,g),g.id};a.clear=()=>s.emit(c.CLEAR,void 0),a.updateDefaults=n=>{s.emit(c.UPDATE_DEFAULTS,n)},a.dismiss=n=>{s.emit(c.DISMISS,n)};function h(n,{content:r,options:g},m=!1){const vt=Object.assign({},g,{content:r});s.emit(c.UPDATE,{id:n,options:vt,create:m})}return a.update=h,a.success=(n,r)=>a(n,Object.assign({},r,{type:l.SUCCESS})),a.info=(n,r)=>a(n,Object.assign({},r,{type:l.INFO})),a.error=(n,r)=>a(n,Object.assign({},r,{type:l.ERROR})),a.warning=(n,r)=>a(n,Object.assign({},r,{type:l.WARNING})),a},we=()=>{const t=()=>console.warn(`[${d}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function w(t){return xt()?Ut(t)?J({eventBus:t},!1):J(t,!0):we()}var k=Symbol("VueToastification"),U=new V,Be=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const s=w(Z({eventBus:U},e));t.provide(k,s)},Ee=t=>{const e=w(t);Q()&&Ot(k,e)},Ie=t=>{if(t)return w(t);const e=Q()?wt(k,void 0):void 0;return e||w(U)},De=Be;const Re=Object.freeze(Object.defineProperty({__proto__:null,EventBus:V,get POSITION(){return O},get TYPE(){return l},createToastInterface:w,default:De,globalEventBus:U,provideToast:Ee,toastInjectionKey:k,useToast:Ie},Symbol.toStringTag,{value:"Module"}));const Pe={name:"BDKSimpleToast",props:{text:{type:String,required:!0},collapseLength:{type:Number,default:60}},setup(t){const e=Dt(!0),s=j(()=>t.text.slice(0,t.collapseLength)),a=j(()=>t.text.length>t.collapseLength),h=()=>{e.value&&a.value?e.value=!1:closeToast()};return{isCollapsed:e,collapsedText:s,handleClick:()=>{a.value?h():closeToast()},shouldShowButton:a}}},Ne=t=>(Rt("data-v-b34f46d6"),t=t(),Pt(),t),Le={key:0,class:"toast-text-collapsed"},Ae=Ne(()=>y("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1.3em",viewBox:"0 0 512 512"},[y("path",{d:"M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"})],-1)),Ve=[Ae],ke={key:1,class:"toast-text-expanded"};function Me(t,e,s,a,h,n){return o(),i("div",null,[a.isCollapsed?(o(),i("div",Le,[N(R(a.collapsedText)+" ",1),a.shouldShowButton?(o(),i("button",{key:0,onClick:e[0]||(e[0]=(...r)=>a.handleClick&&a.handleClick(...r))},Ve)):I("",!0)])):(o(),i("div",ke,R(s.text),1))])}const E=It(Pe,[["render",Me],["__scopeId","data-v-b34f46d6"]]),{useToast:$e}=Re,Fe=(t,e)=>{const s=$e();switch(e){case 0:s.error({component:E,props:{text:t}});break;case 2:s.info({component:E,props:{text:t}});break;case 3:s.warning({component:E,props:{text:t}});break;default:s.success({component:E,props:{text:t}})}};export{E as B,De as s,Fe as t};
