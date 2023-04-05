!function(n,t){"use strict";var e,a,r,i,o=1,s="-add",u="-remove",l="ng-",c="ng-animate",f="$$ngAnimateChildren";void 0===n.ontransitionend&&void 0!==n.onwebkittransitionend?("-webkit-",e="WebkitTransition",a="webkitTransitionEnd transitionend"):(e="transition",a="transitionend"),void 0===n.onanimationend&&void 0!==n.onwebkitanimationend?("-webkit-",r="WebkitAnimation",i="webkitAnimationEnd animationend"):(r="animation",i="animationend");var m="Duration",d="TimingFunction",v="PlayState",p=r+"Delay",h=r+m,$=e+"Delay",g=e+m,C=t.$$minErr("ng");function y(n,t,e){if(!n)throw C("areq","Argument '{0}' is {1}",t||"?",e||"required");return n}function D(n,t){return n||t?n?t?(Y(n)&&(n=n.join(" ")),Y(t)&&(t=t.join(" ")),n+" "+t):n:t:""}function b(n,t,e){var a="";return n=Y(n)?n:n&&en(n)&&n.length?n.split(/\s+/):[],X(n,function(n,r){n&&n.length>0&&(a+=r>0?" ":"",a+=e?t+n:n+t)}),a}function A(n){if(!n[0])return n;for(var t=0;t<n.length;t++){var e=n[t];if(e.nodeType===o)return e}}function k(n){return function(t,e){e.addClass&&(!function(n,t,e){X(t,function(t){n.addClass(t,e)})}(n,t,e.addClass),e.addClass=null),e.removeClass&&(!function(n,t,e){X(t,function(t){n.removeClass(t,e)})}(n,t,e.removeClass),e.removeClass=null)}}function w(n){if(!(n=n||{}).$$prepared){var t=n.domOperation||on;n.domOperation=function(){n.$$domOperationFired=!0,t(),t=on},n.$$prepared=!0}return n}function T(n,t){S(n,t),j(n,t)}function S(n,t){t.from&&(n.css(t.from),t.from=null)}function j(n,t){t.to&&(n.css(t.to),t.to=null)}function x(n,t,e){var a=t.options||{},r=e.options||{},i=(a.addClass||"")+" "+(r.addClass||""),o=(a.removeClass||"")+" "+(r.removeClass||""),l=function(n,t,e){var a={};n=i(n),t=i(t),X(t,function(n,t){a[t]=1}),e=i(e),X(e,function(n,t){a[t]=1===a[t]?null:-1});var r={addClass:"",removeClass:""};function i(n){en(n)&&(n=n.split(" "));var t={};return X(n,function(n){n.length&&(t[n]=!0)}),t}return X(a,function(t,e){var a,i;1===t?(a="addClass",i=!n[e]||n[e+u]):-1===t&&(a="removeClass",i=n[e]||n[e+s]),i&&(r[a].length&&(r[a]+=" "),r[a]+=e)}),r}(n.attr("class"),i,o);r.preparationClasses&&(a.preparationClasses=M(r.preparationClasses,a.preparationClasses),delete r.preparationClasses);var c=a.domOperation!==on?a.domOperation:null;return G(a,r),c&&(a.domOperation=c),l.addClass?a.addClass=l.addClass:a.addClass=null,l.removeClass?a.removeClass=l.removeClass:a.removeClass=null,t.addClass=a.addClass,t.removeClass=a.removeClass,a}function O(n){return n instanceof rn?n[0]:n}function P(n,t){var e=t?"-"+t+"s":"";return F(n,[$,e]),[$,e]}function N(n,t){var e=t?"paused":"",a=r+v;return F(n,[a,e]),[a,e]}function F(n,t){var e=t[0],a=t[1];n.style[e]=a}function M(n,t){return n?t?n+" "+t:n:t}var E=["$interpolate",function(n){return{link:function(t,e,a){var r=a.ngAnimateChildren;function i(n){n="on"===n||"true"===n,e.data(f,n)}en(r)&&0===r.length?e.data(f,!0):(i(n(r)(t)),a.$observe("ngAnimateChildren",i))}}}],I="$$animateCss",R=1e3,q=3,L=1.5,H={transitionDuration:g,transitionDelay:$,transitionProperty:e+"Property",animationDuration:h,animationDelay:p,animationIterationCount:r+"IterationCount"},B={transitionDuration:g,transitionDelay:$,animationDuration:h,animationDelay:p};function J(n,t){return[t?p:$,n+"s"]}function K(n,t,e){var a=Object.create(null),r=n.getComputedStyle(t)||{};return X(e,function(n,t){var e=r[n];if(e){var i=e.charAt(0);("-"===i||"+"===i||i>=0)&&(e=function(n){var t=0,e=n.split(/\s*,\s*/);return X(e,function(n){"s"===n.charAt(n.length-1)&&(n=n.substring(0,n.length-1)),n=parseFloat(n)||0,t=t?Math.max(n,t):n}),t}(e)),0===e&&(e=null),a[t]=e}}),a}function Q(n){return 0===n||null!=n}function U(n,t){var a=e,r=n+"s";return t?a+=m:r+=" linear all",[a,r]}function W(){var n=Object.create(null);return{flush:function(){n=Object.create(null)},count:function(t){var e=n[t];return e?e.total:0},get:function(t){var e=n[t];return e&&e.value},put:function(t,e){n[t]?n[t].total++:n[t]={total:1,value:e}}}}function V(n,t,e){X(e,function(e){n[e]=Z(n[e])?n[e]:t.style.getPropertyValue(e)})}var z,G,X,Y,Z,_,nn,tn,en,an,rn,on,sn=["$animateProvider",function(n){var t=W(),o=W();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(n,c,f,m,v,p,$,g){var C=k(c),y=0;function D(n,t){var e="$$ngAnimateParentKey",a=n.parentNode;return(a[e]||(a[e]=++y))+"-"+n.getAttribute("class")+"-"+t}var A=[];function x(n){A.push(n),$.waitUntilQuiet(function(){t.flush(),o.flush();for(var n=v(),e=0;e<A.length;e++)A[e](n);A.length=0})}function M(e,a,r){var i=function(e,a,r,i){var o=t.get(r);return o||"infinite"===(o=K(n,e,i)).animationIterationCount&&(o.animationIterationCount=1),t.put(r,o),o}(e,0,r,H),o=i.animationDelay,s=i.transitionDelay;return i.maxDelay=o&&s?Math.max(o,s):o||s,i.maxDuration=Math.max(i.animationDuration*i.animationIterationCount,i.transitionDuration),i}return function(v,$){var y=$||{};y.$$prepared||(y=w(z(y)));var A={},k=O(v);if(!k||!k.parentNode||!g.enabled())return Mn();var E,H,W,G,Z,_,nn,tn,en,an,rn=[],sn=v.attr("class"),un=function(n){var t={};return n&&(n.to||n.from)&&(t.to=n.to,t.from=n.from),t}(y),ln=[];if(0===y.duration||!p.animations&&!p.transitions)return Mn();var cn=y.event&&Y(y.event)?y.event.join(" "):y.event,fn="",mn="";cn&&y.structural?fn=b(cn,l,!0):cn&&(fn=cn),y.addClass&&(mn+=b(y.addClass,s)),y.removeClass&&(mn.length&&(mn+=" "),mn+=b(y.removeClass,u)),y.applyClassesEarly&&mn.length&&C(v,y);var dn,vn,pn,hn=[fn,mn].join(" ").trim(),$n=sn+" "+hn,gn=b(hn,"-active"),Cn=un.to&&Object.keys(un.to).length>0;if(!((y.keyframeStyle||"").length>0)&&!Cn&&!hn)return Mn();if(y.stagger>0){var yn=parseFloat(y.stagger);vn={transitionDelay:yn,animationDelay:yn,transitionDuration:0,animationDuration:0}}else dn=D(k,$n),vn=function(e,a,r,i){var s;if(t.count(r)>0&&!(s=o.get(r))){var u=b(a,"-stagger");c.addClass(e,u),(s=K(n,e,i)).animationDuration=Math.max(s.animationDuration,0),s.transitionDuration=Math.max(s.transitionDuration,0),c.removeClass(e,u),o.put(r,s)}return s||{}}(k,hn,dn,B);if(y.$$skipPreparationClasses||c.addClass(v,hn),y.transitionStyle){var Dn=[e,y.transitionStyle];F(k,Dn),rn.push(Dn)}if(y.duration>=0){pn=k.style[e].length>0;var bn=U(y.duration,pn);F(k,bn),rn.push(bn)}if(y.keyframeStyle){var An=[r,y.keyframeStyle];F(k,An),rn.push(An)}var kn=vn?y.staggerIndex>=0?y.staggerIndex:t.count(dn):0,wn=0===kn;wn&&!y.skipBlocking&&P(k,9999);var Tn=M(k,0,dn),Sn=Tn.maxDelay;_=Math.max(Sn,0),tn=Tn.maxDuration;var jn,xn={};if(xn.hasTransitions=Tn.transitionDuration>0,xn.hasAnimations=Tn.animationDuration>0,xn.hasTransitionAll=xn.hasTransitions&&"all"===Tn.transitionProperty,xn.applyTransitionDuration=Cn&&(xn.hasTransitions&&!xn.hasTransitionAll||xn.hasAnimations&&!xn.hasTransitions),xn.applyAnimationDuration=y.duration&&xn.hasAnimations,xn.applyTransitionDelay=Q(y.delay)&&(xn.applyTransitionDuration||xn.hasTransitions),xn.applyAnimationDelay=Q(y.delay)&&xn.hasAnimations,xn.recalculateTimingStyles=mn.length>0,(xn.applyTransitionDuration||xn.applyAnimationDuration)&&(tn=y.duration?parseFloat(y.duration):tn,xn.applyTransitionDuration&&(xn.hasTransitions=!0,Tn.transitionDuration=tn,pn=k.style[e+"Property"].length>0,rn.push(U(tn,pn))),xn.applyAnimationDuration&&(xn.hasAnimations=!0,Tn.animationDuration=tn,rn.push(function(n){return[h,n+"s"]}(tn)))),0===tn&&!xn.recalculateTimingStyles)return Mn();null!=y.delay&&("boolean"!=typeof y.delay&&(jn=parseFloat(y.delay),_=Math.max(jn,0)),xn.applyTransitionDelay&&rn.push(J(jn)),xn.applyAnimationDelay&&rn.push(J(jn,!0)));return null==y.duration&&Tn.transitionDuration>0&&(xn.recalculateTimingStyles=xn.recalculateTimingStyles||wn),nn=_*R,en=tn*R,y.skipBlocking||(xn.blockTransition=Tn.transitionDuration>0,xn.blockKeyframeAnimation=Tn.animationDuration>0&&vn.animationDelay>0&&0===vn.animationDuration),y.from&&(y.cleanupStyles&&V(A,k,Object.keys(y.from)),S(v,y)),xn.blockTransition||xn.blockKeyframeAnimation?Fn(tn):y.skipBlocking||P(k,!1),{$$willAnimate:!0,end:On,start:function(){if(!E)return G=new f(Z={end:On,cancel:Pn,resume:null,pause:null}),x(In),G}};function On(){Nn()}function Pn(){Nn(!0)}function Nn(n){if(!(E||W&&H)){E=!0,H=!1,y.$$skipPreparationClasses||c.removeClass(v,hn),c.removeClass(v,gn),N(k,!1),P(k,!1),X(rn,function(n){k.style[n[0]]=""}),C(v,y),T(v,y),Object.keys(A).length&&X(A,function(n,t){n?k.style.setProperty(t,n):k.style.removeProperty(t)}),y.onDone&&y.onDone(),ln&&ln.length&&v.off(ln.join(" "),En);var t=v.data(I);t&&(m.cancel(t[0].timer),v.removeData(I)),G&&G.complete(!n)}}function Fn(n){xn.blockTransition&&P(k,n),xn.blockKeyframeAnimation&&N(k,!!n)}function Mn(){return G=new f({end:On,cancel:Pn}),x(on),Nn(),{$$willAnimate:!1,start:function(){return G},end:On}}function En(n){n.stopPropagation();var t=n.originalEvent||n,e=t.$manualTimeStamp||Date.now(),a=parseFloat(t.elapsedTime.toFixed(q));Math.max(e-an,0)>=nn&&a>=tn&&(W=!0,Nn())}function In(){if(!E)if(k.parentNode){var n=function(n){if(W)H&&n&&(H=!1,Nn());else if(H=!n,Tn.animationDuration){var t=N(k,H);H?rn.push(t):function(n,t){var e=n.indexOf(t);t>=0&&n.splice(e,1)}(rn,t)}},t=kn>0&&(Tn.transitionDuration&&0===vn.transitionDuration||Tn.animationDuration&&0===vn.animationDuration)&&Math.max(vn.animationDelay,vn.transitionDelay);t?m(o,Math.floor(t*kn*R),!1):o(),Z.resume=function(){n(!0)},Z.pause=function(){n(!1)}}else Nn();function o(){if(!E){if(Fn(!1),X(rn,function(n){var t=n[0],e=n[1];k.style[t]=e}),C(v,y),c.addClass(v,gn),xn.recalculateTimingStyles){if($n=k.className+" "+hn,dn=D(k,$n),Tn=M(k,0,dn),Sn=Tn.maxDelay,_=Math.max(Sn,0),0===(tn=Tn.maxDuration))return void Nn();xn.hasTransitions=Tn.transitionDuration>0,xn.hasAnimations=Tn.animationDuration>0}if(xn.applyAnimationDelay&&(Sn="boolean"!=typeof y.delay&&Q(y.delay)?parseFloat(y.delay):Sn,_=Math.max(Sn,0),Tn.animationDelay=Sn,jn=J(Sn,!0),rn.push(jn),k.style[jn[0]]=jn[1]),nn=_*R,en=tn*R,y.easing){var n,t=y.easing;xn.hasTransitions&&(n=e+d,rn.push([n,t]),k.style[n]=t),xn.hasAnimations&&(n=r+d,rn.push([n,t]),k.style[n]=t)}Tn.transitionDuration&&ln.push(a),Tn.animationDuration&&ln.push(i),an=Date.now();var o=nn+L*en,u=an+o,l=v.data(I)||[],f=!0;if(l.length){var p=l[0];(f=u>p.expectedEndTime)?m.cancel(p.timer):l.push(Nn)}if(f){var h=m(s,o,!1);l[0]={timer:h,expectedEndTime:u},l.push(Nn),v.data(I,l)}ln.length&&v.on(ln.join(" "),En),y.to&&(y.cleanupStyles&&V(A,k,Object.keys(y.to)),j(v,y))}}function s(){var n=v.data(I);if(n){for(var t=1;t<n.length;t++)n[t]();v.removeData(I)}}}}}]}],un=["$$animationProvider",function(n){n.drivers.push("$$animateCssDriver");var t="ng-animate-shim",e="ng-anchor",a="ng-anchor-out",r="ng-anchor-in";this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(n,i,o,s,u,l,c){if(!u.animations&&!u.transitions)return on;var f=c[0].body,m=O(s),d=rn(function(n){return n.parentNode&&11===n.parentNode.nodeType}(m)||f.contains(m)?m:f);return function(i){return i.from&&i.to?function(i,s,u,l){var c=h(i),m=h(s),$=[];if(X(l,function(i){var s=function(i,s,u){var l=rn(O(s).cloneNode(!0)),c=v(C(l));s.addClass(t),u.addClass(t),l.addClass(e),d.append(l);var m,h=function(){var t=n(l,{addClass:a,delay:!0,from:g(s)});return t.$$willAnimate?t:null}();if(!h&&!(m=y()))return D();var $=h||m;return{start:function(){var n,t=$.start();return t.done(function(){if(t=null,!m&&(m=y()))return(t=m.start()).done(function(){t=null,D(),n.complete()}),t;D(),n.complete()}),n=new o({end:e,cancel:e});function e(){t&&t.end()}}};function g(n){var t={},e=O(n).getBoundingClientRect();return X(["width","height","top","left"],function(n){var a=e[n];switch(n){case"top":a+=f.scrollTop;break;case"left":a+=f.scrollLeft}t[n]=Math.floor(a)+"px"}),t}function C(n){return n.attr("class")||""}function y(){var t=v(C(u)),e=p(t,c),i=p(c,t),o=n(l,{to:g(u),addClass:r+" "+e,removeClass:a+" "+i,delay:!0});return o.$$willAnimate?o:null}function D(){l.remove(),s.removeClass(t),u.removeClass(t)}}(0,i.out,i.in);s&&$.push(s)}),!c&&!m&&0===$.length)return;return{start:function(){var n=[];c&&n.push(c.start()),m&&n.push(m.start()),X($,function(t){n.push(t.start())});var t=new o({end:e,cancel:e});return o.all(n,function(n){t.complete(n)}),t;function e(){X(n,function(n){n.end()})}}}}(i.from,i.to,i.classes,i.anchors):h(i)};function v(n){return n.replace(/\bng-\S+\b/g,"")}function p(n,t){return en(n)&&(n=n.split(" ")),en(t)&&(t=t.split(" ")),n.filter(function(n){return-1===t.indexOf(n)}).join(" ")}function h(t){var e=t.element,a=t.options||{};t.structural&&(a.event=t.event,a.structural=!0,a.applyClassesEarly=!0,"leave"===t.event&&(a.onDone=a.domOperation)),a.preparationClasses&&(a.event=M(a.event,a.preparationClasses));var r=n(e,a);return r.$$willAnimate?r:null}}]}],ln=["$animateProvider",function(n){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(t,e,a){var r=k(a);return function(a,i,o,s){var u=!1;3===arguments.length&&tn(o)&&(s=o,o=null),s=w(s),o||(o=a.attr("class")||"",s.addClass&&(o+=" "+s.addClass),s.removeClass&&(o+=" "+s.removeClass));var l,c,f,m,d,v=s.addClass,p=s.removeClass,h=function(e){e=Y(e)?e:e.split(" ");for(var a=[],r={},i=0;i<e.length;i++){var o=e[i],s=n.$$registeredAnimations[o];s&&!r[o]&&(a.push(t.get(s)),r[o]=!0)}return a}(o);h.length&&("leave"===i?(m="leave",f="afterLeave"):(m="before"+i.charAt(0).toUpperCase()+i.substr(1),f=i),"enter"!==i&&"move"!==i&&(l=y(a,i,s,h,m)),c=y(a,i,s,h,f));if(l||c)return{$$willAnimate:!0,end:function(){return d?d.end():(g(),(d=new e).complete(!0)),d},start:function(){if(d)return d;var n;d=new e;var t=[];return l&&t.push(function(t){n=l(t)}),t.length?t.push(function(n){$(),n(!0)}):$(),c&&t.push(function(t){n=c(t)}),d.setHost({end:function(){r()},cancel:function(){r(!0)}}),e.chain(t,a),d;function a(n){g(),d.complete(n)}function r(t){u||((n||on)(t),a(t))}}};function $(){s.domOperation(),r(a,s)}function g(){u=!0,$(),T(a,s)}function C(n,t,a,r,i){var o=[];return X(r,function(r){var s=r[i];s&&o.push(function(){var r,i,o=!1,u=function(n){o||(o=!0,(i||on)(n),r.complete(!n))};return r=new e({end:function(){u()},cancel:function(){u(!0)}}),i=function(n,t,a,r,i){var o;switch(a){case"animate":o=[t,r.from,r.to,i];break;case"setClass":o=[t,v,p,i];break;case"addClass":o=[t,v,i];break;case"removeClass":o=[t,p,i];break;default:o=[t,i]}o.push(r);var s=n.apply(n,o);if(s)if(nn(s.start)&&(s=s.start()),s instanceof e)s.done(i);else if(nn(s))return s;return on}(s,n,t,a,function(n){u(!1===n)}),r})}),o}function y(n,t,a,r,i){var o,s,u=C(n,t,a,r,i);0===u.length&&("beforeSetClass"===i?(o=C(n,"removeClass",a,r,"beforeRemoveClass"),s=C(n,"addClass",a,r,"beforeAddClass")):"setClass"===i&&(o=C(n,"removeClass",a,r,"removeClass"),s=C(n,"addClass",a,r,"addClass")),o&&(u=u.concat(o)),s&&(u=u.concat(s)));if(0!==u.length)return function(n){var t=[];return u.length&&X(u,function(n){t.push(n())}),t.length?e.all(t,n):n(),function(n){X(t,function(t){n?t.cancel():t.end()})}}}}}]}],cn=["$$animationProvider",function(n){n.drivers.push("$$animateJsDriver"),this.$get=["$$animateJs","$$AnimateRunner",function(n,t){return function(n){if(n.from&&n.to){var a=e(n.from),r=e(n.to);if(!a&&!r)return;return{start:function(){var n=[];a&&n.push(a.start()),r&&n.push(r.start()),t.all(n,function(n){e.complete(n)});var e=new t({end:i(),cancel:i()});return e;function i(){return function(){X(n,function(n){n.end()})}}}}}return e(n)};function e(t){var e=t.element,a=t.event,r=t.options,i=t.classes;return n(e,a,i,r)}}]}],fn="data-ng-animate",mn="$ngAnimatePin",dn=["$animateProvider",function(t){var e=1,a=2,r=" ",i=this.rules={skip:[],cancel:[],join:[]};function c(n,t){if(n&&t){var e=function(n){if(!n)return null;var t=n.split(r),e=Object.create(null);return X(t,function(n){e[n]=!0}),e}(t);return n.split(r).some(function(n){return e[n]})}}function m(n,t,e,a){return i[n].some(function(n){return n(t,e,a)})}function d(n,t){var e=(n.addClass||"").length>0,a=(n.removeClass||"").length>0;return t?e&&a:e||a}i.join.push(function(n,t,e){return!t.structural&&d(t)}),i.skip.push(function(n,t,e){return!t.structural&&!d(t)}),i.skip.push(function(n,t,e){return"leave"===e.event&&t.structural}),i.skip.push(function(n,t,e){return e.structural&&e.state===a&&!t.structural}),i.cancel.push(function(n,t,e){return e.structural&&t.structural}),i.cancel.push(function(n,t,e){return e.state===a&&t.structural}),i.cancel.push(function(n,t,e){if(e.structural)return!1;var a=t.addClass,r=t.removeClass,i=e.addClass,o=e.removeClass;return!(an(a)&&an(r)||an(i)&&an(o))&&(c(a,o)||c(r,i))}),this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(r,i,c,v,p,h,$,g,C,D){var S=new p,j=new p,P=null;var N=i.$watch(function(){return 0===g.totalPendingRequests},function(n){n&&(N(),i.$$postDigest(function(){i.$$postDigest(function(){null===P&&(P=!0)})}))}),F=Object.create(null),E=t.classNameFilter(),I=E?function(n){return E.test(n)}:function(){return!0},R=k(C);function q(n,t){return x(n,t,{})}var L=n.Node.prototype.contains||function(n){return this===n||!!(16&this.compareDocumentPosition(n))};function H(n,t,e){var a=A(t);return n.filter(function(n){return!(n.node===a&&(!e||n.callback===e))})}function B(n,t){"close"!==n||t[0].parentNode||J.off(t)}var J={on:function(n,t,e){var a=A(t);F[n]=F[n]||[],F[n].push({node:a,callback:e}),rn(t).on("$destroy",function(){S.get(a)||J.off(n,t,e)})},off:function(n,t,e){if(1!==arguments.length||en(arguments[0])){var a=F[n];a&&(F[n]=1===arguments.length?null:H(a,t,e))}else for(var r in t=arguments[0],F)F[r]=H(F[r],t)},pin:function(n,t){y(_(n),"element","not an element"),y(_(t),"parentElement","not an element"),n.data(mn,t)},push:function(n,t,p,g){return(p=p||{}).domOperation=g,function(n,t,p){var g,C,y=z(p);(n=function(n){if(n instanceof rn)switch(n.length){case 0:return n;case 1:if(n[0].nodeType===o)return n;break;default:return rn(A(n))}if(n.nodeType===o)return rn(n)}(n))&&(g=O(n),C=n.parent());y=w(y);var D=new $,k=function(){var n=!1;return function(t){n?t():i.$$postDigest(function(){n=!0,t()})}}();Y(y.addClass)&&(y.addClass=y.addClass.join(" "));y.addClass&&!en(y.addClass)&&(y.addClass=null);Y(y.removeClass)&&(y.removeClass=y.removeClass.join(" "));y.removeClass&&!en(y.removeClass)&&(y.removeClass=null);y.from&&!tn(y.from)&&(y.from=null);y.to&&!tn(y.to)&&(y.to=null);if(!g)return cn(),D;var N=[g.className,y.addClass,y.removeClass].join(" ");if(!I(N))return cn(),D;var E=["enter","move","leave"].indexOf(t)>=0,H=v[0].hidden,J=!P||H||j.get(g),W=!J&&S.get(g)||{},V=!!W.state;J||V&&W.state===e||(J=!function(n,t,e){var a,r=rn(v[0].body),i=Q(n,r)||"HTML"===n[0].nodeName,s=Q(n,c),u=!1,l=j.get(O(n)),m=rn.data(n[0],mn);m&&(t=m);t=O(t);for(;t&&(s||(s=Q(t,c)),t.nodeType===o);){var d=S.get(t)||{};if(!u){var p=j.get(t);if(!0===p&&!1!==l){l=!0;break}!1===p&&(l=!1),u=d.structural}if(an(a)||!0===a){var h=rn.data(t,f);Z(h)&&(a=h)}if(u&&!1===a)break;if(i||(i=Q(t,r)),i&&s)break;t=s||!(m=rn.data(t,mn))?t.parentNode:O(m)}return(!u||a)&&!0!==l&&s&&i}(n,C));if(J)return H&&ln(D,t,"start"),cn(),H&&ln(D,t,"close"),D;E&&function(n){var t=O(n).querySelectorAll("["+fn+"]");X(t,function(n){var t=parseInt(n.getAttribute(fn),10),r=S.get(n);if(r)switch(t){case a:r.runner.end();case e:S.remove(n)}})}(n);var G={structural:E,element:n,event:t,addClass:y.addClass,removeClass:y.removeClass,close:cn,options:y,runner:D};if(V){var _=m("skip",n,G,W);if(_)return W.state===a?(cn(),D):(x(n,W,G),W.runner);var nn=m("cancel",n,G,W);if(nn)if(W.state===a)W.runner.end();else{if(!W.structural)return x(n,W,G),W.runner;W.close()}else{var on=m("join",n,G,W);if(on){if(W.state!==a)return function(n,t,e){var a="";t&&(a=b(t,l,!0)),e.addClass&&(a=M(a,b(e.addClass,s))),e.removeClass&&(a=M(a,b(e.removeClass,u))),a.length&&(e.preparationClasses=a,n.addClass(a))}(n,E?t:null,y),t=G.event=W.event,y=x(n,W,G),W.runner;q(n,G)}}}else q(n,G);var sn=G.structural;sn||(sn="animate"===G.event&&Object.keys(G.options.to||{}).length>0||d(G));if(!sn)return cn(),K(n),D;var un=(W.counter||0)+1;return G.counter=un,U(n,e,G),i.$$postDigest(function(){var e=S.get(g),r=!e;e=e||{};var i=(n.parent()||[]).length>0&&("animate"===e.event||e.structural||d(e));if(r||e.counter!==un||!i)return r&&(R(n,y),T(n,y)),(r||E&&e.event!==t)&&(y.domOperation(),D.end()),void(i||K(n));t=!e.structural&&d(e,!0)?"setClass":e.event,U(n,a);var o=h(n,t,e.options);D.setHost(o),ln(D,t,"start",{}),o.done(function(e){cn(!e);var a=S.get(g);a&&a.counter===un&&K(O(n)),ln(D,t,"close",{})})}),D;function ln(t,e,a,i){k(function(){var t=function(n,t,e){var a=O(t),r=O(n),i=[],o=F[e];return o&&X(o,function(n){L.call(n.node,a)?i.push(n.callback):"leave"===e&&L.call(n.node,r)&&i.push(n.callback)}),i}(C,n,e);t.length?r(function(){X(t,function(t){t(n,a,i)}),B(a,n)}):B(a,n)}),t.progress(e,a,i)}function cn(t){!function(n,t){t.preparationClasses&&(n.removeClass(t.preparationClasses),t.preparationClasses=null),t.activeClasses&&(n.removeClass(t.activeClasses),t.activeClasses=null)}(n,y),R(n,y),T(n,y),y.domOperation(),D.complete(!t)}}(n,t,p)},enabled:function(n,t){var e=arguments.length;if(0===e)t=!!P;else if(_(n)){var a=O(n);1===e?t=!j.get(a):j.put(a,!t)}else t=P=!!n;return t}};return J;function K(n){var t=O(n);t.removeAttribute(fn),S.remove(t)}function Q(n,t){return O(n)===O(t)}function U(n,t,e){(e=e||{}).state=t;var a=O(n);a.setAttribute(fn,t);var r=S.get(a),i=r?G(r,e):e;S.put(a,i)}}]}],vn=["$animateProvider",function(n){var t="ng-animate-ref",e=this.drivers=[],a="$$animationRunner";function r(n){return n.data(a)}this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(n,i,o,s,u,l){var f=[],m=k(n);return function(d,v,p){p=w(p);var h=["enter","move","leave"].indexOf(v)>=0,$=new s({end:function(){A()},cancel:function(){A(!0)}});if(!e.length)return A(),$;!function(n,t){n.data(a,t)}(d,$);var g,C=D(d.attr("class"),D(p.addClass,p.removeClass)),y=p.tempClasses;return y&&(C+=" "+y,p.tempClasses=null),h&&(g="ng-"+v+"-prepare",n.addClass(d,g)),f.push({element:d,classes:C,event:v,structural:h,options:p,beforeStart:function(){d.addClass(c),y&&n.addClass(d,y);g&&(n.removeClass(d,g),g=null)},close:A}),d.on("$destroy",b),f.length>1?$:(i.$$postDigest(function(){var n=[];X(f,function(t){r(t.element)?n.push(t):t.close()}),f.length=0;var a=function(n){var e=[],a={};X(n,function(n,r){var i=n.element,o=O(i),s=n.event,u=["enter","move"].indexOf(s)>=0,l=n.structural?function(n){var e="["+t+"]",a=n.hasAttribute(t)?[n]:n.querySelectorAll(e),r=[];return X(a,function(n){var e=n.getAttribute(t);e&&e.length&&r.push(n)}),r}(o):[];if(l.length){var c=u?"to":"from";X(l,function(n){var e=n.getAttribute(t);a[e]=a[e]||{},a[e][c]={animationID:r,element:rn(n)}})}else e.push(n)});var r={},i={};return X(a,function(t,a){var o=t.from,s=t.to;if(o&&s){var u=n[o.animationID],l=n[s.animationID],c=o.animationID.toString();if(!i[c]){var f=i[c]={structural:!0,beforeStart:function(){u.beforeStart(),l.beforeStart()},close:function(){u.close(),l.close()},classes:function(n,t){n=n.split(" "),t=t.split(" ");for(var e=[],a=0;a<n.length;a++){var r=n[a];if("ng-"!==r.substring(0,3))for(var i=0;i<t.length;i++)if(r===t[i]){e.push(r);break}}return e.join(" ")}(u.classes,l.classes),from:u,to:l,anchors:[]};f.classes.length?e.push(f):(e.push(u),e.push(l))}i[c].anchors.push({out:o.element,in:s.element})}else{var m=o?o.animationID:s.animationID,d=m.toString();r[d]||(r[d]=!0,e.push(n[m]))}}),e}(n),i=[];X(a,function(n){i.push({domNode:O(n.from?n.from.element:n.element),fn:function(){n.beforeStart();var t,a=n.close;if(r(n.anchors?n.from.element||n.to.element:n.element)){var i=function(n){for(var t=e.length-1;t>=0;t--){var a=e[t],r=o.get(a),i=r(n);if(i)return i}}(n);i&&(t=i.start)}if(t){var s=t();s.done(function(n){a(!n)}),function(n,t){n.from&&n.to?(e(n.from.element),e(n.to.element)):e(n.element);function e(n){var e=r(n);e&&e.setHost(t)}}(n,s)}else a()}})}),l(function(n){var t,e={children:[]},a=new u;for(t=0;t<n.length;t++){var r=n[t];a.put(r.domNode,n[t]={domNode:r.domNode,fn:r.fn,children:[]})}for(t=0;t<n.length;t++)i(n[t]);return function(n){var t,e=[],a=[];for(t=0;t<n.children.length;t++)a.push(n.children[t]);var r=a.length,i=0,o=[];for(t=0;t<a.length;t++){var s=a[t];r<=0&&(r=i,i=0,e.push(o),o=[]),o.push(s.fn),s.children.forEach(function(n){i++,a.push(n)}),r--}return o.length&&e.push(o),e}(e);function i(n){if(n.processed)return n;n.processed=!0;var t,r=n.domNode,o=r.parentNode;for(a.put(r,n);o;){if(t=a.get(o)){t.processed||(t=i(t));break}o=o.parentNode}return(t||e).children.push(n),n}}(i))}),$);function b(){var n=r(d);!n||"leave"===v&&p.$$domOperationFired||n.end()}function A(t){d.off("$destroy",b),function(n){n.removeData(a)}(d),m(d,p),T(d,p),p.domOperation(),y&&n.removeClass(d,y),d.removeClass(c),$.complete(!t)}}}]}];t.module("ngAnimate",[],function(){on=t.noop,z=t.copy,G=t.extend,rn=t.element,X=t.forEach,Y=t.isArray,en=t.isString,tn=t.isObject,an=t.isUndefined,Z=t.isDefined,nn=t.isFunction,_=t.isElement}).directive("ngAnimateSwap",["$animate","$rootScope",function(n,t){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(t,e,a,r,i){var o,s;t.$watchCollection(a.ngAnimateSwap||a.for,function(a){o&&n.leave(o),s&&(s.$destroy(),s=null),(a||0===a)&&(s=t.$new(),i(s,function(t){o=t,n.enter(t,null,e)}))})}}}]).directive("ngAnimateChildren",E).factory("$$rAFScheduler",["$$rAF",function(n){var t,e;function a(n){t=t.concat(n),r()}return t=a.queue=[],a.waitUntilQuiet=function(t){e&&e(),e=n(function(){e=null,t(),r()})},a;function r(){if(t.length){for(var a=t.shift(),i=0;i<a.length;i++)a[i]();e||n(function(){e||r()})}}}]).provider("$$animateQueue",dn).provider("$$animation",vn).provider("$animateCss",sn).provider("$$animateCssDriver",un).provider("$$animateJs",ln).provider("$$animateJsDriver",cn)}(window,window.angular);