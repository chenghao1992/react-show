webpackJsonp([1],{292:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(5),u=(o(a),n(43)),c=n(324),s=o(c),r=n(321),f=function(e,t){return console.log("state:",e),console.log("ownProps:",t),l({test1:"我是从container里面传值过来的",test2:e.defaultPage.b},e.defaultPage,{testFunc:function(e){console.log(e)}})},i=function(e,t){return{changeStatus:function(){console.log("点击了改变状态"),e((0,r.changeStatus)("测试改变状态"))},changeTest1:function(t){e((0,r.changeTest1)(t))},testFetch:function(){e((0,r.testFetch)())}}},d=(0,u.connect)(f,i)(s.default);t.default=d},293:function(e,t,n){var o,l;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var l=typeof o;if("string"===l||"number"===l)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===l)for(var u in o)a.call(o,u)&&o[u]&&e.push(u)}}return e.join(" ")}var a={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=n:(o=[],void 0!==(l=function(){return n}.apply(t,o))&&(e.exports=l))}()},297:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={};o.get=function(e,t,n,o){if(t){var l=[];Object.keys(t).forEach(function(e){return l.push(e+"="+t[e])}),-1===e.search(/\?/)?e+="?"+l.join("&"):e+="&"+l.join("&")}fetch(e,{method:"GET"}).then(function(e){console.log("response:",e),console.log("ok:",e.ok),console.log("status:",e.status),console.log("statusText:",e.statusText),console.log("type:",e.type),e.ok?e.json().then(function(e){n(e)}):401===e.status?(console.log("请求失败"),o()):o()},function(){console.log("请求失败"),o()})},o.post=function(e,t,n,o){fetch(e,{method:"POST",mode:"cors",headers:{token:n},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){o(e)}).done()},t.default=o},302:function(e,t,n){var o=n(314);"string"==typeof o&&(o=[[e.i,o,""]]);n(74)(o,{});o.locals&&(e.exports=o.locals)},314:function(e,t,n){t=e.exports=n(75)(void 0),t.push([e.i,"._12mAxyE3YCpBazZKgLD8nv{font-size:30px}._1cZjyff1Ky7mOl5I8dX9Ey{color:red}.font_w{font-weight:600}.I1uCfuANnkBU3-p2LDvyB{color:#549ee3}[data-role=default-link]{color:#f4a460}",""]),t.locals={font_30:"_12mAxyE3YCpBazZKgLD8nv",c_red:"_1cZjyff1Ky7mOl5I8dX9Ey _12mAxyE3YCpBazZKgLD8nv",link:"I1uCfuANnkBU3-p2LDvyB"}},321:function(e,t,n){"use strict";function o(){return console.log("fetch"),function(e){a.default.get("https://www.reddit.com/r/frontend.json",{name:"ch",age:24},function(t){console.log("data:",t),e({type:"asyncTest",data:t})},function(){console.log("请求出错了")})}}Object.defineProperty(t,"__esModule",{value:!0}),t.changeTest1=t.changeStatus=void 0,t.testFetch=o;var l=n(297),a=function(e){return e&&e.__esModule?e:{default:e}}(l);t.changeStatus=function(e){return{type:"changeStatus",status:e}},t.changeTest1=function(e){return{type:"changeTest1",a:e}}},324:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(5),a=o(l),u=n(34),c=n(293),s=o(c),r=n(302),f=o(r),i=function(e){var t=e.test2,n=e.children,o=e.changeStatus,l=e.changeTest1,c=e.test1,r=e.testFunc,i=(e.a,e.testFetch),d=e.name,p=void 0===d?"defaultValue":d,g=e.list,h=void 0===g?[]:g;return console.log("list:",h),a.default.createElement("div",null,"defaultPage",a.default.createElement("p",{style:{fontSize:"20px",color:"red"},onClick:function(){return r(1111)}},c," 点我吧"),a.default.createElement("h1",null,n),a.default.createElement("em",{onClick:o},t,",点击改变状态"),a.default.createElement("h2",{onClick:function(){return l("改变后的a的值")}},"点击改变a的值"),a.default.createElement(u.Link,{to:"/me"},"me",n),a.default.createElement("div",{onClick:i,style:{cursor:"pointer"}},"点击测试异步请求111"),a.default.createElement("div",null,a.default.createElement("strong",null,p),a.default.createElement("ul",null,h.map(function(e,t){return a.default.createElement("li",{key:t},e.data.title)}))),a.default.createElement("div",{className:f.default.c_red},"测试css Modules样式继承"),a.default.createElement("div",{className:(0,s.default)("font_w",f.default.c_red)},"测试css Modules全局样式"),a.default.createElement("div",{className:f.default.link},"测试less变量"),a.default.createElement("div",{className:f.default.link,"data-role":"default-link"},"测试覆盖样式1111222"),a.default.createElement("h2",null,"node 启动11133322222"))};t.default=i}});