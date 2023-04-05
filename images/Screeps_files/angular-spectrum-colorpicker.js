!function(e,n){"use strict";var o=e.module("angularSpectrumColorpicker",[]);!function(n){o.directive("spectrumColorpicker",function(){return{restrict:"EA",require:"ngModel",scope:{fallbackValue:"=",disabled:"=?",format:"=?",options:"=?",triggerId:"@?",palette:"=?",onChange:"&?",onShow:"&?",onHide:"&?",onMove:"&?",onBeforeShow:"&?",onChangeOptions:"=?",onShowOptions:"=?",onHideOptions:"=?",onMoveOptions:"=?"},replace:!0,templateUrl:"directive.html",link:function(n,o,t,i){function r(e){var o=e;return o&&(o=e.toString(n.format)),o}function c(o){e.isFunction(n.onChange)&&n.onChange({color:o})}function a(o){var t=n.fallbackValue;o?t=r(o):e.isUndefined(n.fallbackValue)&&(t=o),i.$setViewValue(t),c(t)}var l=o.find("input"),u=function(){return l.spectrum("toggle"),!1},s={color:i.$viewValue},d={};e.forEach({change:"onChange",move:"onMove",hide:"onHide",show:"onShow"},function(o,t){var i=n[o+"Options"];d[t]=function(t){return(!i||i.update)&&function(e){n.$evalAsync(function(){a(e)})}(t),"change"!==o&&e.isFunction(n[o])?n[o]({color:r(t)}):null}}),e.isFunction(n.onBeforeShow)&&(d.beforeShow=function(e){return n.onBeforeShow({color:r(e)})}),n.palette&&(d.palette=n.palette);var p=e.extend({},s,n.options,d);n.triggerId&&e.element(document.body).on("click","#"+n.triggerId,u),i.$render=function(){l.spectrum("set",i.$viewValue||""),c(i.$viewValue)},p.color&&(l.spectrum("set",p.color||""),a(p.color)),l.spectrum(p),n.$on("$destroy",function(){n.triggerId&&e.element(document.body).off("click","#"+n.triggerId,u)}),o.on("$destroy",function(){l.spectrum("destroy")}),e.isDefined(p.disabled)&&(n.disabled=!!p.disabled),n.$watch("disabled",function(e){l.spectrum(e?"disable":"enable")}),n.$watch("palette",function(e){l.spectrum("option","palette",e)},!0)}}})}(),e.module("angularSpectrumColorpicker").run(["$templateCache",function(e){e.put("directive.html",'<span><input class="input-small"></span>')}])}(window.angular);