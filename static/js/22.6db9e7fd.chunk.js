(this.webpackJsonpkisaan_network_challenge=this.webpackJsonpkisaan_network_challenge||[]).push([[22],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_loading",(function(){return g}));var i=n(2),o=n(29),r=n(9),a=(n(20),n(17)),s=(n(26),n(22)),c=n(159),l=n(160),d=function(e){var t=Object(a.a)(),n=Object(a.a)(),i=Object(a.a)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(e).easing("ease-in-out").duration(200).addAnimation([n,i])},u=function(e){var t=Object(a.a)(),n=Object(a.a)(),i=Object(a.a)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(e).easing("ease-in-out").duration(200).addAnimation([n,i])},p=function(e){var t=Object(a.a)(),n=Object(a.a)(),i=Object(a.a)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(e).easing("ease-in-out").duration(200).addAnimation([n,i])},f=function(e){var t=Object(a.a)(),n=Object(a.a)(),i=Object(a.a)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(e).easing("ease-in-out").duration(200).addAnimation([n,i])},g=function(){function e(e){var t=this;Object(o.k)(this,e),this.presented=!1,this.mode=Object(o.d)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){t.dismiss(void 0,s.a)},Object(s.e)(this.el),this.didPresent=Object(o.e)(this,"ionLoadingDidPresent",7),this.willPresent=Object(o.e)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(o.e)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(o.e)(this,"ionLoadingDidDismiss",7)}return e.prototype.componentWillLoad=function(){if(void 0===this.spinner){var e=Object(o.d)(this);this.spinner=r.b.get("loadingSpinner",r.b.get("spinner","ios"===e?"lines":"crescent"))}},e.prototype.present=function(){return Object(i.a)(this,void 0,void 0,(function(){var e=this;return Object(i.c)(this,(function(t){switch(t.label){case 0:return[4,Object(s.f)(this,"loadingEnter",d,p,void 0)];case 1:return t.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return e.dismiss()}),this.duration+10)),[2]}}))}))},e.prototype.dismiss=function(e,t){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(s.g)(this,e,t,"loadingLeave",u,f)},e.prototype.onDidDismiss=function(){return Object(s.h)(this.el,"ionLoadingDidDismiss")},e.prototype.onWillDismiss=function(){return Object(s.h)(this.el,"ionLoadingWillDismiss")},e.prototype.render=function(){var e,t=this.message,n=this.spinner,i=Object(o.d)(this);return Object(o.i)(o.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(c.b)(this.cssClass)),(e={},e[i]=!0,e["loading-translucent"]=this.translucent,e))},Object(o.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(o.i)("div",{class:"loading-wrapper",role:"dialog"},n&&Object(o.i)("div",{class:"loading-spinner"},Object(o.i)("ion-spinner",{name:n})),t&&Object(o.i)("div",{class:"loading-content",innerHTML:Object(l.a)(t)})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-ios, .spinner-circles.sc-ion-loading-ios, .spinner-crescent.sc-ion-loading-ios, .spinner-dots.sc-ion-loading-ios, .spinner-lines.sc-ion-loading-ios, .spinner-lines-small.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600,#666);--backdrop-opacity:var(--ion-backdrop-opacity,0.3);color:var(--ion-text-color,#000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:700}.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-ios + .loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"},enumerable:!0,configurable:!0}),e}()},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c}));var i=n(2),o=function(e,t){return null!==t.closest(e)},r=function(e){var t;return"string"===typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0},a=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},s=/^[a-z][a-z0-9+\-.]*:/,c=function(e,t,n){return Object(i.a)(void 0,void 0,void 0,(function(){var o;return Object(i.c)(this,(function(i){return null!=e&&"#"!==e[0]&&!s.test(e)&&(o=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,o.push(e,n)]):[2,!1]}))}))}},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=function(e){try{if("string"!==typeof e||""===e)return e;var t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,s.forEach((function(e){for(var n=t.querySelectorAll(e),i=n.length-1;i>=0;i--){var a=n[i];a.parentNode?a.parentNode.removeChild(a):t.removeChild(a);for(var s=r(a),c=0;c<s.length;c++)o(s[c])}}));for(var i=r(t),a=0;a<i.length;a++)o(i[a]);var c=document.createElement("div");c.appendChild(t);var l=c.querySelector("div");return null!==l?l.innerHTML:c.innerHTML}catch(d){return console.error(d),""}},o=function e(t){if(!t.nodeType||1===t.nodeType){for(var n=t.attributes.length-1;n>=0;n--){var i=t.attributes.item(n),o=i.name;if(a.includes(o.toLowerCase())){var s=i.value;null!=s&&s.toLowerCase().includes("javascript:")&&t.removeAttribute(o)}else t.removeAttribute(o)}var c=r(t);for(n=0;n<c.length;n++)e(c[n])}},r=function(e){return null!=e.children?e.children:e.childNodes},a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=22.6db9e7fd.chunk.js.map