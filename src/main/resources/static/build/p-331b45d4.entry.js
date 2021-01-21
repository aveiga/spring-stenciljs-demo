import{r as t,h as s,g as e,a as o}from"./p-d0c2bff4.js";import{A as i}from"./p-97c69f30.js";import{m as n,a as r,s as a,b as h,c,d as l,e as u,f as p,g as d,h as f,i as g,j as m,k as y,l as b,n as w,o as P,p as v}from"./p-9b6a9315.js";const O=class{constructor(s){t(this,s)}render(){return s("div",null,s("header",null,s("h1",null,"Stencil App Starter")),s("main",null,s("stencil-router",null,s("stencil-route-switch",{scrollTopOffset:0},s("stencil-route",{url:"/",component:"app-home",exact:!0}),s("stencil-route",{url:"/profile/:name",component:"app-profile"})))))}};O.style="header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}";const j=class{constructor(s){t(this,s),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const s=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!s)return this.previousMatch=this.match,this.match=n(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!r(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?s(this.component,Object.assign({},t)):void 0}get el(){return e(this)}static get watchers(){return{location:["computeMatch"]}}};i.injectProps(j,["location","history","historyType","routeViewsUpdated"]),j.style="stencil-route.inactive{display:none}";const k=t=>"STENCIL-ROUTE"===t.tagName,S=class{constructor(s){t(this,s),this.group=((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[],this.queue=o(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let s=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(k).map(((e,o)=>{const i=n(t.pathname,{path:e.url,exact:e.exact,strict:!0});return i&&-1===s&&(s=o),{el:e,match:i}})),-1===s)return;if(this.activeIndex===s)return void(this.subscribers[s].el.match=this.subscribers[s].match);this.activeIndex=s;const e=this.subscribers[this.activeIndex];this.scrollTopOffset&&(e.el.scrollTopOffset=this.scrollTopOffset),e.el.group=this.group,e.el.match=e.match,e.el.componentUpdated=t=>{this.queue.write((()=>{this.subscribers.forEach(((t,s)=>{if(t.el.componentUpdated=void 0,s===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"}))})),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return s("slot",null)}get el(){return e(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};i.injectProps(S,["location","routeViewsUpdated"]);const T=(t,...s)=>{t||console.warn(...s)},x=()=>{let t,s=[];return{setPrompt:s=>(T(null==t,"A history supports only one prompt at a time"),t=s,()=>{t===s&&(t=null)}),confirmTransitionTo:(s,e,o,i)=>{if(null!=t){const n="function"==typeof t?t(s,e):t;"string"==typeof n?"function"==typeof o?o(n,i):(T(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),i(!0)):i(!1!==n)}else i(!0)},appendListener:t=>{let e=!0;const o=(...s)=>{e&&t(...s)};return s.push(o),()=>{e=!1,s=s.filter((t=>t!==o))}},notifyListeners:(...t)=>{s.forEach((s=>s(...t)))}}},L=(t,s="scrollPositions")=>{let e=new Map;const o=(s,o)=>{if(e.set(s,o),a(t,"sessionStorage")){const s=[];e.forEach(((t,e)=>{s.push([e,t])})),t.sessionStorage.setItem("scrollPositions",JSON.stringify(s))}};if(a(t,"sessionStorage")){const o=t.sessionStorage.getItem(s);e=o?new Map(JSON.parse(o)):e}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:o,get:t=>e.get(t),has:t=>e.has(t),capture:s=>{o(s,[t.scrollX,t.scrollY])}}},U={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+P(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:P,decodePath:u},slash:{encodePath:u,decodePath:u}},H=(t,s)=>{const e=0==t.pathname.indexOf(s)?"/"+t.pathname.slice(s.length):t.pathname;return Object.assign({},t,{pathname:e})},A={browser:(t,s={})=>{let e=!1;const o=t.history,i=t.location,n=t.navigator,r=h(t),a=!c(n),w=L(t),P=null!=s.forceRefresh&&s.forceRefresh,v=null!=s.getUserConfirmation?s.getUserConfirmation:y,O=null!=s.keyLength?s.keyLength:6,j=s.basename?l(u(s.basename)):"",k=()=>{try{return t.history.state||{}}catch(t){return{}}},S=t=>{t=t||{};const{key:s,state:e}=t,{pathname:o,search:n,hash:r}=i;let a=o+n+r;return T(!j||f(a,j),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+j+'".'),j&&(a=g(a,j)),p(a,e,s||d(O))},U=x(),H=t=>{w.capture(D.location.key),Object.assign(D,t),D.location.scrollPosition=w.get(D.location.key),D.length=o.length,U.notifyListeners(D.location,D.action)},A=t=>{b(n,t)||M(S(t.state))},E=()=>{M(S(k()))},M=t=>{if(e)e=!1,H();else{const s="POP";U.confirmTransitionTo(t,s,v,(e=>{e?H({action:s,location:t}):C(t)}))}},C=t=>{let s=_.indexOf(D.location.key),o=_.indexOf(t.key);-1===s&&(s=0),-1===o&&(o=0);const i=s-o;i&&(e=!0,V(i))},R=S(k());let _=[R.key],B=0,Y=!1;const N=t=>j+m(t),V=t=>{o.go(t)},q=s=>{B+=s,1===B?(t.addEventListener("popstate",A),a&&t.addEventListener("hashchange",E)):0===B&&(t.removeEventListener("popstate",A),a&&t.removeEventListener("hashchange",E))},D={length:o.length,action:"POP",location:R,createHref:N,push:(t,s)=>{T(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const e="PUSH",n=p(t,s,d(O),D.location);U.confirmTransitionTo(n,e,v,(t=>{if(!t)return;const s=N(n),{key:a,state:h}=n;if(r)if(o.pushState({key:a,state:h},"",s),P)i.href=s;else{const t=_.indexOf(D.location.key),s=_.slice(0,-1===t?0:t+1);s.push(n.key),_=s,H({action:e,location:n})}else T(void 0===h,"Browser history cannot push state in browsers that do not support HTML5 history"),i.href=s}))},replace:(t,s)=>{T(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const e="REPLACE",n=p(t,s,d(O),D.location);U.confirmTransitionTo(n,e,v,(t=>{if(!t)return;const s=N(n),{key:a,state:h}=n;if(r)if(o.replaceState({key:a,state:h},"",s),P)i.replace(s);else{const t=_.indexOf(D.location.key);-1!==t&&(_[t]=n.key),H({action:e,location:n})}else T(void 0===h,"Browser history cannot replace state in browsers that do not support HTML5 history"),i.replace(s)}))},go:V,goBack:()=>V(-1),goForward:()=>V(1),block:(t="")=>{const s=U.setPrompt(t);return Y||(q(1),Y=!0),()=>(Y&&(Y=!1,q(-1)),s())},listen:t=>{const s=U.appendListener(t);return q(1),()=>{q(-1),s()}},win:t};return D},hash:(t,s={})=>{let e=!1,o=null,i=0,n=!1;const r=t.location,a=t.history,h=w(t.navigator),c=null!=s.keyLength?s.keyLength:6,{getUserConfirmation:b=y,hashType:P="slash"}=s,O=s.basename?l(u(s.basename)):"",{encodePath:j,decodePath:k}=U[P],S=()=>{const t=r.href,s=t.indexOf("#");return-1===s?"":t.substring(s+1)},L=t=>{const s=r.href.indexOf("#");r.replace(r.href.slice(0,s>=0?s:0)+"#"+t)},H=()=>{let t=k(S());return T(!O||f(t,O),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+O+'".'),O&&(t=g(t,O)),p(t,void 0,d(c))},A=x(),E=t=>{Object.assign(D,t),D.length=a.length,A.notifyListeners(D.location,D.action)},M=()=>{const t=S(),s=j(t);if(t!==s)L(s);else{const t=H(),s=D.location;if(!e&&v(s,t))return;if(o===m(t))return;o=null,C(t)}},C=t=>{if(e)e=!1,E();else{const s="POP";A.confirmTransitionTo(t,s,b,(e=>{e?E({action:s,location:t}):R(t)}))}},R=t=>{let s=N.lastIndexOf(m(D.location)),o=N.lastIndexOf(m(t));-1===s&&(s=0),-1===o&&(o=0);const i=s-o;i&&(e=!0,V(i))},_=S(),B=j(_);_!==B&&L(B);const Y=H();let N=[m(Y)];const V=t=>{T(h,"Hash history go(n) causes a full page reload in this browser"),a.go(t)},q=(t,s)=>{i+=s,1===i?t.addEventListener("hashchange",M):0===i&&t.removeEventListener("hashchange",M)},D={length:a.length,action:"POP",location:Y,createHref:t=>"#"+j(O+m(t)),push:(t,s)=>{T(void 0===s,"Hash history cannot push state; it is ignored");const e="PUSH",i=p(t,void 0,d(c),D.location);A.confirmTransitionTo(i,e,b,(t=>{if(!t)return;const s=m(i),n=j(O+s);if(S()!==n){o=s,(t=>{r.hash=t})(n);const t=N.lastIndexOf(m(D.location)),a=N.slice(0,-1===t?0:t+1);a.push(s),N=a,E({action:e,location:i})}else T(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),E()}))},replace:(t,s)=>{T(void 0===s,"Hash history cannot replace state; it is ignored");const e="REPLACE",i=p(t,void 0,d(c),D.location);A.confirmTransitionTo(i,e,b,(t=>{if(!t)return;const s=m(i),n=j(O+s);S()!==n&&(o=s,L(n));const r=N.indexOf(m(D.location));-1!==r&&(N[r]=s),E({action:e,location:i})}))},go:V,goBack:()=>V(-1),goForward:()=>V(1),block:(s="")=>{const e=A.setPrompt(s);return n||(q(t,1),n=!0),()=>(n&&(n=!1,q(t,-1)),e())},listen:s=>{const e=A.appendListener(s);return q(t,1),()=>{q(t,-1),e()}},win:t};return D}},E=class{constructor(s){t(this,s),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const s=this.history.win.document.getElementById(t.scrollToId);if(s)return s.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=o(this,"isServer"),this.queue=o(this,"queue")}componentWillLoad(){this.history=A[this.historyType](this.el.ownerDocument.defaultView),this.history.listen((t=>{t=H(t,this.root),this.location=t})),this.location=H(this.history.location,this.root)}scrollTo(t){const s=this.history;if(null!=t&&!this.isServer&&s)return"POP"===s.action&&Array.isArray(s.location.scrollPosition)?this.queue.write((()=>{s&&s.location&&Array.isArray(s.location.scrollPosition)&&s.win.scrollTo(s.location.scrollPosition[0],s.location.scrollPosition[1])})):this.queue.write((()=>{s.win.scrollTo(0,t)}))}render(){if(this.location&&this.history)return s(i.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},s("slot",null))}get el(){return e(this)}};export{O as app_root,j as stencil_route,S as stencil_route_switch,E as stencil_router}