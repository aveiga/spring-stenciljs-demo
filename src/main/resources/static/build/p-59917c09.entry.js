import{r as t,h as s,g as i}from"./p-d0c2bff4.js";import{A as h}from"./p-97c69f30.js";import{m as a,q as r}from"./p-9b6a9315.js";const e=class{constructor(s){t(this,s),this.unsubscribe=()=>{},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=a(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(t){var s,i;if(!r(t)&&this.history&&this.url&&this.root)return t.preventDefault(),this.history.push((i=this.root,"/"==(s=this.url).charAt(0)&&"/"==i.charAt(i.length-1)?i.slice(0,i.length-1)+s:i+s))}render(){let t={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(t.class[this.anchorClass]=!0),"a"===this.custom&&(t=Object.assign({},t,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),s(this.custom,Object.assign({},t),s("slot",null))}get el(){return i(this)}static get watchers(){return{location:["computeMatch"]}}};h.injectProps(e,["history","location","root"]);export{e as stencil_route_link}