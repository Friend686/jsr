!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.JSR=t()}(this,function(){"use strict";function e(e,t,i){return!E[e]&&(E[e]=i,E[e](),setTimeout(function(){E[e]=!1},t),!0)}function t(e,t,i){e.addEventListener(t,i)}function i(e,n,s){e instanceof Array?e.forEach(function(e){e instanceof Array?i(e,n,s):t(e,n,s)}):t(e,n,s)}function n(e){var t=e.toString().split(".");return t[1]?t[1].length:0}function s(e){var t=this.config.min;return(e-t)/(this.config.max-t)}function r(e){var t=this.config.step,i=Math.pow(10,this.stepDecimals);return e=Math.round(e/t)*t,Math.round(e*i)/i}function o(e){var t=this.config.min;return e=(this.config.max-t)*e+t,r.call(this,e)}function l(){var e=this.config.min,t=this.config.max;return this.config.step/(t-e)}function u(e){var t=this.stepRatio,i=Math.pow(10,this.stepRatioDecimals);return e=Math.round(e/t)*t,Math.round(e*i)/i}function a(e){var t=1,i=0;return this.values.forEach(function(n,s){var r=Math.abs(n-e);r<t&&(i=s,t=r)}),i}function c(e,t,i,n){var s=t[e],r=s.count,o=[];if(r<=0)return o;i[e]=i[e]||[];for(var l=0;l<r;l+=1){var u,a=document.createElement("div");(u=a.classList).add.apply(u,I(s.classes)),i[e].push(a),o.push(a)}return s.children.length>0&&s.children.forEach(function(s){for(var o=0;o<r;o+=1)!function(r){c(s,t,i,n).forEach(function(o){n[s]=void 0===n[s]?0:n[s]+1,o.dataset.jsrId=n[s];for(var l in t[s].attributes)o.setAttribute(l,t[s].attributes[l]);i[e][r].appendChild(o)})}(o)}),o}function h(e,t){for(var i in e)1!==e[i].length||t[i].alwaysArray||(e[i]=e[i][0])}function d(e){var t=this,i=[];return this.values.forEach(function(n,s){n===t.values[e]&&i.push(s)}),i}function f(e){return!!e&&"object"==typeof e}function g(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"!==t&&"[object Date]"!==t}function v(e){return Array.isArray(e)?[]:{}}function m(e,t){return t&&!0===t.clone&&V(e)?y(v(e),e,t):e}function p(e,t,i){var n=e.slice();return t.forEach(function(t,s){void 0===n[s]?n[s]=m(t,i):V(t)?n[s]=y(e[s],t,i):-1===e.indexOf(t)&&n.push(m(t,i))}),n}function b(e,t,i){var n={};return V(e)&&Object.keys(e).forEach(function(t){n[t]=m(e[t],i)}),Object.keys(t).forEach(function(s){V(t[s])&&e[s]?n[s]=y(e[s],t[s],i):n[s]=m(t[s],i)}),n}function y(e,t,i){var n=Array.isArray(t),s=Array.isArray(e),r=i||{arrayMerge:p};return n===s?n?(r.arrayMerge||p)(e,t,i):b(e,t,i):m(t,i)}function M(){return this.values.filter(function(e){return void 0!==e}).length===this.config.values.length}function k(e,t){this.mergedLabels.push(t),this.labels[e].appendChild(this.labels[t])}function w(){var e=this;this.mergedLabels.forEach(function(t){e.labelsParent.appendChild(e.labels[t])}),this.mergedLabels=[]}function _(){var e=this.labels;w.call(this);for(var t=0,i=t+1;i<e.length;)e[t].getBoundingClientRect().right+5>=e[i].getBoundingClientRect().left?(k.call(this,t,i),i+=1):(t+=1,i+=1);this.minMax[0].getBoundingClientRect().right+5>=this.labels[0].getBoundingClientRect().left?this.minMax[0].style.opacity="0":this.minMax[0].style.opacity="1",this.labels[this.labels.length-1].getBoundingClientRect().right+5>=this.minMax[1].getBoundingClientRect().left?this.minMax[1].style.opacity="0":this.minMax[1].style.opacity="1"}function x(e,t,i){var s=this.labels[e];if(this.config.step<1){var r=n(t),o=n(this.config.step)-r;if(o>0){var l=t.toString().split(".");t=l[0]+"."+(l[1]||0)+Array(o).join("0")}}s.innerHTML=this.formatter?this.formatter(t):t,this.values[e]=i;var u=s.getBoundingClientRect();s.style.left="calc("+100*i+"% - "+u.width/2+"px)",M.call(this)&&_.call(this);var a=this.modules.renderer.body.root.getBoundingClientRect();(u=s.getBoundingClientRect()).right>a.right&&(s.style.left="calc(100% - "+u.width+"px)"),u.left<a.left&&(s.style.left="0")}var E={},S=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},R=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),I=function(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)},C=function(){function t(){S(this,t),this.logger=null,this.config={min:0,max:0,step:0},this.modules={},this.values=[],this.valueInMove=[],this.stepRatio=0,this.stepRatioDecimals=0}return R(t,[{key:"_setValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!this.config.enabled)return null;t=null===t?a.call(this,e):parseInt(t),i&&(e=this.valueInMove[t]+e),null!==this.limit.min&&e<this.limit.min&&(e=this.limit.min),null!==this.limit.max&&e>this.limit.max&&(e=this.limit.max),void 0!==this.values[t-1]&&e<this.values[t-1]&&(e=this.values[t-1]),void 0!==this.values[t+1]&&e>this.values[t+1]&&(e=this.values[t+1]);var n=u.call(this,e);n!==this.values[t]&&(this.values[t]=n,this.modules.renderer.setSliderValue(n,t),this.modules.eventizer.trigger("core/value:update",t,o.call(this,n),n))}},{key:"_bindEvents",value:function(){var t=this,i=this.modules.eventizer;i.register("view/slider:mousedown",function(e,i){t.logger.debug("JSR: Slider mousedown."),t.logger.debug(e),i.forEach(function(e){t.valueInMove[e]=t.values[e]})}),i.register("view/slider:mousemove",function(i,n,s){e("slider-mousemove",10,function(){t.logger.debug("JSR: Slider mousemove."),t.logger.debug(i),t._setValue(s,n,!0)})}),i.register("view/slider:mouseup",function(e){t.logger.debug("JSR: Slider mouseup."),t.logger.debug(e)}),i.register("view/rail:click",function(e,i){t.logger.debug("JSR: Rail clicked."),t.logger.debug(e),t._setValue(i)}),i.register("view/root:arrow",function(e,i,n){var s=t.values[i]+(e.shiftKey?.05:e.ctrlKey?10*t.stepRatio:t.stepRatio)*n;t._setValue(s,i)}),i.register("view/bar:mousedown",function(e,i){t.logger.debug("JSR: Bar mousedown."),t.logger.debug(e),t.valueInMove[i]=t.values[i],t.valueInMove[i+1]=t.values[i+1]}),i.register("view/bar:mousemove",function(i,n,s){e("bar-mousemove",10,function(){t.logger.debug("JSR: Bar mousemove."),t.logger.debug(i),t._setValue(s,n,!0),t._setValue(s,n+1,!0)})}),i.register("view/bar:mouseup",function(e){t.logger.debug("JSR: Bar mouseup."),t.logger.debug(e)})}},{key:"build",value:function(e){var t=e.config,i=e.modules,s=e.logger;this.config=t,this.logger=s,this.modules=i,this.limit={},this.setLimit("min",this.config.limit.min,!0),this.setLimit("max",this.config.limit.max,!0),this.stepDecimals=n(this.config.step),this.stepRatio=l.call(this),this.stepRatioDecimals=n(this.stepRatio)}},{key:"init",value:function(e,t){var i=this;this.modules.renderer.appendRoot(e[0]),t.forEach(function(e,t){e=s.call(i,e),i._setValue(e,t)}),this._bindEvents(),this.logger.info("JSR: Core initiated.")}},{key:"getValue",value:function(e){var t=this.values[e];return o.call(this,t)}},{key:"setValue",value:function(e,t){this._setValue(e,t)}},{key:"setLimit",value:function(e,t){var i=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(null===t||void 0===t)this.limit[e]="min"===e?0:1;else{if(this.limit[e]=s.call(this,t),this.limit[e]<0?this.limit[e]=0:this.limit[e]>1&&(this.limit[e]=1),n)return;if(this.values.forEach(function(e,t){i._setValue(e,t)}),this.config.limit.show){var r=this.modules.renderer.body.limitBar;r.style.left=100*this.limit.min+"%",r.style.right=100*(1-this.limit.max)+"%"}}}}]),t}(),L=function(e,t){var i={};return c(t,e,i,{}),h(i,e),i},j=function(){function e(){S(this,e),this.logger=null,this.config={},this.modules={},this.temp={sliderInMove:null,sliderClickX:0,barInMove:null,barClickX:0},this.values=[],this.body={},this.bodyStructure={root:{classes:["jsr"],children:["railOuter"],count:1},railOuter:{classes:["jsr_rail-outer"],children:["rail"],count:1},rail:{classes:["jsr_rail"],children:["bars","sliders","limitBar"],count:1},sliders:{classes:["jsr_slider"],children:[],attributes:{tabindex:0},count:2,alwaysArray:!0},bars:{classes:["jsr_bar"],children:[],count:1,alwaysArray:!0},limitBar:{classes:["jsr_bar","jsr_bar--limit"],children:[],count:1}}}return R(e,[{key:"_bindEvents",value:function(){var e=this,t=this.modules.eventizer;i(this.body.sliders,"click",function(e){e.stopPropagation()}),i(this.body.sliders,"mousedown",function(i){i.stopPropagation(),e.temp.sliderInMove=parseInt(i.target.dataset.jsrId),e.temp.sliderClickX=i.clientX;var n=d.call(e,e.temp.sliderInMove);n.length>1&&(e.temp.sliderInMove=n),t.trigger("view/slider:mousedown",i,n)}),i(document,"mousemove",function(i){if(i.stopPropagation(),null!==e.temp.sliderInMove){e.temp.sliderInMove instanceof Array&&(i.clientX<e.temp.sliderClickX?e.temp.sliderInMove=e.temp.sliderInMove[0]:e.temp.sliderInMove=e.temp.sliderInMove.pop()),e.body.sliders[e.temp.sliderInMove].focus();var n=(i.clientX-e.temp.sliderClickX)/e.body.railOuter.offsetWidth;t.trigger("view/slider:mousemove",i,e.temp.sliderInMove,n)}}),i(document,"mouseup",function(i){null!==e.temp.sliderInMove&&(t.trigger("view/slider:mouseup",i,e.temp.sliderInMove),e.temp.sliderInMove=null)}),this.body.bars&&(i(this.body.bars,"click",function(t){e.temp.barClickX!==t.clientX&&t.stopPropagation()}),i(this.body.bars,"mousedown",function(i){e.temp.barInMove=parseInt(i.target.dataset.jsrId),e.temp.barClickX=i.clientX,t.trigger("view/bar:mousedown",i,e.temp.barInMove)}),i(document,"mousemove",function(i){if(null!==e.temp.barInMove){var n=(i.clientX-e.temp.barClickX)/e.body.railOuter.offsetWidth;t.trigger("view/bar:mousemove",i,e.temp.barInMove,n)}}),i(document,"mouseup",function(i){null!==e.temp.barInMove&&(t.trigger("view/bar:mouseup",i,e.temp.barInMove),e.temp.barInMove=null)})),i(this.body.railOuter,"click",function(i){var n=(i.clientX-e.body.railOuter.getBoundingClientRect().left)/e.body.railOuter.offsetWidth;t.trigger("view/rail:click",i,n)}),i(this.body.root,"keydown",function(e){var i=e.target.dataset.jsrId,n={37:-1,38:1,39:1,40:-1}[e.keyCode.toString()];if(!n)return!1;e.preventDefault(),t.trigger("view/root:arrow",e,i,n)})}},{key:"_updateBars",value:function(e,t){if(this.body.bars){var i=this.body.bars[e-1],n=this.body.bars[e];i&&(i.style.right=100*(1-t)+"%"),n&&(n.style.left=100*t+"%")}}},{key:"build",value:function(e){var t=e.modules,i=e.logger,n=e.config;this.modules=t,this.logger=i,this.config=n,this.bodyStructure.sliders.count=this.config.sliders||1,this.bodyStructure.bars.count=this.bodyStructure.sliders.count-1,this.body=L(this.bodyStructure,"root"),this._bindEvents(),this.modules.eventizer.trigger("modules/renderer:builded")}},{key:"appendRoot",value:function(e){e.parentNode.insertBefore(this.body.root,e.nextSibling),this.modules.eventizer.trigger("modules/renderer:rootAppended")}},{key:"setSliderValue",value:function(e,t){var i=this.body.sliders[t],n=100*e+"%";this.logger.debug("JSR: Slider no. "+t+" set to value: "+e+"."),this.values[t]=e,i.style.left=n,this._updateBars(t,e)}},{key:"structure",get:function(){return this.bodyStructure}}]),e}(),A=function(){function e(t){S(this,e),this.callback=t,this.enabled=!0}return R(e,[{key:"disable",value:function(){this.enabled=!1}},{key:"enable",value:function(){this.enabled=!0}},{key:"trigger",value:function(){this.enabled&&this.callback.apply(this,arguments)}}]),e}(),B=function(){function e(){S(this,e),this.store={}}return R(e,[{key:"_createNewStore",value:function(e){this.store[e]||(this.store[e]=[])}},{key:"_addListener",value:function(e,t){this._createNewStore(e);var i=new A(t);return this.store[e].push(i),i}},{key:"_dispatchEvent",value:function(e){if(!this.store[e])return!1;for(var t=this.store[e].length,i=arguments.length,n=Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];for(var r=0;r<t;r+=1){var o;(o=this.store[e][r]).trigger.apply(o,n)}}},{key:"register",value:function(e,t){return this._addListener(e,t)}},{key:"trigger",value:function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];this._dispatchEvent.apply(this,[e].concat(i))}}]),e}(),z={debug:0,info:1,warn:2,error:3,disable:4},J=function(){function e(){S(this,e),this.level=1}return R(e,[{key:"setLevel",value:function(e){this.level=z[e]}},{key:"debug",value:function(){var e;this.level>0||(e=console).log.apply(e,arguments)}},{key:"log",value:function(){var e;this.level>1||(e=console).log.apply(e,arguments)}},{key:"info",value:function(){var e;this.level>1||(e=console).info.apply(e,arguments)}},{key:"warn",value:function(){var e;this.level>2||(e=console).warn.apply(e,arguments)}},{key:"error",value:function(){var e;this.level>3||(e=console).error.apply(e,arguments)}}]),e}(),O=function(){function e(){S(this,e),this.input=null}return R(e,[{key:"_bindEvents",value:function(){var e=this;this.modules.eventizer.register("core/value:update",function(t,i){e.inputs[t].value=i,e.modules.eventizer.trigger("input/value:update",e.inputs[t],i),e.logger.debug("JSR: Input "+t+" updated with value "+i)})}},{key:"build",value:function(e,t){var i=e.config,n=e.modules,s=e.logger;this.inputs=t.inputs,this.logger=s,this.config=i,this.modules=n,this._bindEvents()}}]),e}(),V=function(e){return f(e)&&g(e)};y.all=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("first argument should be an array with at least two elements");return e.reduce(function(e,i){return y(e,i,t)})};var X=y,P=function(){function e(){S(this,e),this.labels=[],this.minMax=[],this.values=[],this.labelsParent=null,this.mergedLabels=[]}return R(e,[{key:"_bindEvents",value:function(){var e=this;i(this.labels,"click",function(e){e.stopPropagation()}),this.modules.eventizer.register("core/value:update",function(t,i,n){e.values[t]=[i,n],x.call(e,t,i,n)}),i(this.labels,"mousedown",function(t){var i=new MouseEvent("mousedown",t);e.modules.renderer.body.sliders[t.target.dataset.jsrId].dispatchEvent(i)})}},{key:"_parseMinMax",value:function(){this.minMax[0].innerHTML=this.formatter?this.formatter(this.config.min):this.config.min,this.minMax[1].innerHTML=this.formatter?this.formatter(this.config.max):this.config.max,this.minMax[0].style.left="0%",this.minMax[1].style.right="0%",this.config.labels.minMax||(this.minMax[0].style.display="none",this.minMax[1].style.display="none")}},{key:"build",value:function(e){var t=this,i=e.config,n=e.modules,s=e.logger,r={labels:{minMax:!0,formatter:null}};this.logger=s,this.config=X(r,i),this.modules=n,this.formatter=this.config.labels.formatter,this.modules.renderer.structure.labels={classes:["jsr_label"],children:[],count:this.config.sliders,alwaysArray:!0},this.modules.renderer.structure.rail.children.push("labels"),this.modules.renderer.structure.labelsMinMax={classes:["jsr_label","jsr_label--minmax"],children:[],count:2},this.modules.renderer.structure.rail.children.push("labelsMinMax"),this.modules.eventizer.register("modules/renderer:builded",function(){t.labels=t.modules.renderer.body.labels,t.labelsParent=t.labels[0].parentNode,t.minMax=t.modules.renderer.body.labelsMinMax,t._parseMinMax(),t._bindEvents()})}}]),e}(),T=function(){function e(){S(this,e)}return R(e,[{key:"_bindEvents",value:function(){var e=this,t=[this.modules.renderer.body.sliders];this.modules.renderer.body.labels&&t.push(this.modules.renderer.body.labels),i(t,"touchstart",function(t){document.documentElement.classList.add("jsr_lockscreen"),t=t.targetTouches.item(0);var i=new MouseEvent("mousedown",t);e.modules.renderer.body.sliders[t.target.dataset.jsrId].dispatchEvent(i)}),i(t,"touchmove",function(e){e=e.targetTouches.item(0);var t=new MouseEvent("mousemove",e);document.dispatchEvent(t)}),i(document,"touchend",function(e){document.documentElement.classList.remove("jsr_lockscreen"),e=e.targetTouches.item(0);var t=new MouseEvent("mouseup",e);document.dispatchEvent(t)})}},{key:"build",value:function(e){var t=e.config,i=e.modules,n=e.logger;this.logger=n,this.config=t,this.modules=i,this._bindEvents()}}]),e}(),N=function(){function e(){S(this,e)}return R(e,[{key:"_bindEvents",value:function(){var e=this;this.inputs.map(function(e){return e.id}).forEach(function(t,i){var n=document.querySelector('label[for="'+t+'"]');n&&n.addEventListener("click",function(){e.modules.renderer.body.sliders[i].focus()})})}},{key:"build",value:function(e,t){var i=e.config,n=e.modules,s=e.logger;this.logger=s,this.config=i,this.modules=n,this.inputs=t.inputs,this._bindEvents()}}]),e}(),W=function(){function t(){S(this,t)}return R(t,[{key:"_bindEvents",value:function(){var t=this,i=Math.random();window.addEventListener("resize",function(){e("grid-resize-"+i,50,function(){t.logger.debug("JSR: Canvas resized."),t._setWidth(),t._render()})})}},{key:"_setWidth",value:function(){this.canvas.width=this.modules.renderer.body.railOuter.offsetWidth}},{key:"_getNumberOfLines",value:function(){return Math.round(100)}},{key:"_render",value:function(){var e=this.canvas.width,t=this.config.grid.height,i=this.context,n=this._getNumberOfLines(),s=1/n;i.clearRect(0,0,e,t),i.beginPath(),i.lineWidth=1,i.fillStyle=i.strokeStyle=this.config.grid.color,i.font=this.config.grid.fontSize+"px "+this.config.grid.fontFamily,i.textBaseline="top";for(var r=0;r<=n;r+=1){var o=r*s*e;if(o=Math.round(100*o)/100,i.moveTo(o,0),i.lineTo(o,t),r%10==0){i.textAlign=0===r?"left":r===n?"right":"center";var l=(this.config.max-this.config.min)*(r/n)+this.config.min;this.config.labels&&this.config.labels.formatter&&(l=this.config.labels.formatter(l)),i.fillText(l.toString(),r*s*e,t+this.config.grid.textPadding)}}i.closePath(),i.stroke()}},{key:"build",value:function(e){var t=this,i=e.config,n=e.modules,s=e.logger,r={grid:{color:"rgba(0, 0, 0, 0.3)",height:10,fontSize:10,fontFamily:"sans-serif",textPadding:5}};this.logger=s,this.config=X(r,i),this.modules=n,this.canvas=document.createElement("canvas"),this.canvas.classList.add("jsr_canvas"),this.canvas.height=this.config.grid.height+this.config.grid.fontSize+this.config.grid.textPadding,this.context=this.canvas.getContext("2d"),this.modules.eventizer.register("modules/renderer:rootAppended",function(){t.modules.renderer.body.railOuter.appendChild(t.canvas),t._setWidth(),t._render()}),this._bindEvents()}}]),t}();return function(){function e(t){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};S(this,e);var s={log:"error",min:0,max:100,step:1,enabled:!0,limit:{show:!1},modules:{eventizer:B,core:C,labels:P,grid:W,renderer:j,touchSupport:T,inputUpdater:O,htmlLabels:N}};this.config=X(s,n,{arrayMerge:function(e,t){return t}}),this.specificConfig={inputUpdater:{},htmlLabels:{}},this.logger=new J,this.logger.setLevel(this.config.log),t=[].concat(t),this.inputs=t.map(function(e){return"string"==typeof e?document.querySelector(e):e});var r=this._validate({inputs:t});if(r)return r.forEach(function(e){i.logger.error(e)}),{};this.modules={};for(var o in this.config.modules)this.config.modules[o]&&(this.modules[o]=new this.config.modules[o]);this.specificConfig.inputUpdater.inputs=this.inputs,this.specificConfig.htmlLabels.inputs=this.inputs,this._buildModules(),this._init()}return R(e,[{key:"_validate",value:function(e){var t=[];return this.config.sliders!==this.config.values.length&&t.push("JSR: Number of sliders isn't equal to number of values."),this.inputs.length!==this.config.values.length&&t.push("JSR: Number of inputs isn't equal to number of values."),this.inputs.forEach(function(i,n){i||t.push("JSR: Input "+e.inputs[n]+" not found.")}),!!t.length&&t}},{key:"_buildModules",value:function(){for(var e in this.modules){var t=this.modules[e].build;t?(t.call(this.modules[e],{modules:this.modules,logger:this.logger,config:this.config},this.specificConfig[e]||{}),this.logger.info("JSR: Module "+e+" builded.")):this.logger.info("JSR: Module "+e+" skipped. No .build() method.")}}},{key:"_init",value:function(){this.inputs.forEach(function(e){e.style.display="none"}),this.modules.core.init(this.inputs,this.config.values)}},{key:"addEventListener",value:function(e,t){var i={update:"input/value:update"};return this.modules.eventizer.register(i[e],t),this}},{key:"setValue",value:function(e,t){return this.modules.core.setValue(e,t),this}},{key:"setLimit",value:function(e,t){return this.modules.core.setLimit(e,t),this}},{key:"disable",value:function(){return this.config.enabled=!1,this.modules.renderer.body.root.classList.add("jsr--disabled"),this}},{key:"enable",value:function(){return this.config.enabled=!0,this.modules.renderer.body.root.classList.remove("jsr--disabled"),this}}]),e}()});
