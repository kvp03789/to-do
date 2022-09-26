(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var a=t(81),r=t.n(a),i=t(645),o=t.n(i),s=t(667),c=t.n(s),d=new URL(t(224),t.b),l=o()(r()),p=c()(d);l.push([n.id,"@font-face {\n    font-family: 'OpenSans';\n    src: url("+p+");\n    font-style: normal;\n    font-weight: 400;\n}\n\n* {\n  font-family: 'OpenSans';\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(239, 239, 239, 0.635);\n}\n\nheader {\n    height: 125px;\n    width: 100%;\n    background-color: rgba(239, 239, 239, 0.635);\n    border-bottom: 2px solid rgb(91, 246, 1);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    /* margin-left: 20px;\n    margin-right: 20px; */\n}\n\n.header-image {\n    height: 100px;\n    width: auto;\n}\n\n.header-menu-icon {\n    height: 40px;\n    width: auto;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.container {\n    display: flex;\n}\n\nmain {\n  display: flex;\n}\n\n.sidebar {\n    height: 100vh;\n    width: 350px;\n    background-color: white;\n    font-family: 'OpenSans';\n    font-size: 1.2rem;\n}\n\n.home {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: flex-start;\n    justify-content: center;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: flex-start;\n    justify-content: center;\n    padding-left: 15px;\n    padding-right: 15px;\n}\n\n.sub-title {\n    display: flex;\n    gap: 20px;\n    height: auto;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 7px;\n    padding-left: 15px;\n}\n\n.sub-title:hover {\n    background-color: #c6c6c6;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.sub-title2 {\n  display: flex;\n  gap: 20px;\n  height: auto;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 7px;\n  padding-left: 15px;\n}\n\n.home-svg {\n    height: 25px;\n    width: auto;\n}\n\n.plus-svg {\n    height: 25px;\n    width: auto;\n}\n\n.sidebar h2 {\n  border-bottom: 2px solid black;\n}\n\n.content {\n    height: 100vh;\n    width: 100%;\n    padding-left: 50px;\n    padding-right: 50px;\n    margin-right: 50px;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: center;\n}\n\n.form-div {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.form-div div {\n  display: flex;\n  align-items: center;\n}\n\n#name{\n  height: 40px;\n  font-family: 'OpenSans';\n  font-size: 1rem;\n  padding-left: 15px;\n}\n\n.form-buttons-div {\n  justify-content: center;\n  gap: 10px;\n}\n\n#add-button {\n  background-color: rgb(10, 240, 10);\n  color: white;\n  font-weight: 800;\n  height: 30px;\n  width: 75px;\n  font-family: 'OpenSans';\n  border: none;\n  border-radius: 3px;\n}\n\n#cancel-button {\n  background-color: red;\n  color: white;\n  font-weight: 800;\n  height: 30px;\n  width: 75px;\n  font-family: 'OpenSans';\n  border: none;\n  border-radius: 3px;\n}\n\n.project-list-item {\n  font-family: 'OpenSans';\n  display: flex;\n  gap: 20px;\n  height: auto;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 7px;\n  padding-left: 15px;\n}\n\n.project-list-item:hover {\n  background-color: rgb(148, 250, 177);\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.project-list-item img {\n  height: 25px;\n  width: auto;\n}\n\n.title-block {\n  width: 100%;\n  height: 100px;\n  background-color: rgb(12, 230, 12);\n  font-family: 'OpenSans';\n  margin: 20px;\n  padding-left: 15px;\n}\n\n.title {\n  color: white;\n}\n\n.left {\n  display: flex;\n  justify-content: flex-start;\n  gap: 15px;\n  flex: 0 0 100px;\n}\n\n/* .right:hover {\n  background-color: #c6c6c672;\n} */\n\n.task-button-div {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  gap: 50px;\n  height: 60px;\n  padding-left: 40px;\n}\n\n.task-button-div:hover {\n  background-color: #ffffff;\n  cursor: pointer;\n  border-radius: 5px;\n}\n\n.task-button-span {\n  font-family: 'OpenSans';\n  font-size: 1.2rem;\n}\n\n.star-svg {\n  height: 25px;\n  width: auto;\n}\n\n.task-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  width: 100%;\n}\n\n.new-task-item {\n  width: 100%;\n  height: 60px;\n  border: 1px solid black;\n  background-color: rgba(0, 0, 0, 0);\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.task-title-span, .task-date-span {\n  font-family: 'OpenSans';\n  font-size: 1.2rem;\n}\n\n.date-div {\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.task-right, .task-left {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  justify-content: center;\n}\n\n.new-task-form-div {\n  background-color: white;\n  height: 200px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}\n\n.new-task-form-div input {\n  width: 100%;\n}\n\n.hidden {\n    display: none;\n}\n\nlabel {\n  display: block;\n  font-weight: 800;\n}\n\n.dots-svg {\n    height: 25px;\n    width: 25px;\n}\n\n.options-menu {\n  height: 80px;\n  width: 80px;\n  font-family: 'OpenSans';\n  font-size: 1.2rem;\n  background-color: white;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  position:relative; \n  right: 75px;\n  bottom: 50px;\n}\n\n.option-item {\n  width: 100%;\n  padding: 5px;\n  text-align: center;\n}\n\n.option-item:hover {\n  background-color: #c6c6c6;\n  cursor: pointer;\n  \n}\n\n\n/* TOGGLE SWITCH */\n/* The switch - the box around the slider */\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n  \n  /* Hide default HTML checkbox */\n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  /* The slider */\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n  }\n  \n  input:checked + .slider {\n    background-color: #262728;\n  }\n  \n  input:focus + .slider {\n    box-shadow: 0 0 1px #2c2d2d;\n  }\n  \n  input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n  \n  /* Rounded sliders */\n  .slider.round {\n    border-radius: 34px;\n  }\n  \n  .slider.round:before {\n    border-radius: 50%;\n  }\n\n  .selected {\n    background-color: #c6c6c6;\n    border-radius: 5px;\n  }\n\n  .filled {\n    filter: invert(84%) sepia(66%) saturate(1882%) hue-rotate(355deg) brightness(99%) contrast(103%);\n    fill: #ffee00;\n  }",""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);a&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},o=[],s=0;s<n.length;s++){var c=n[s],d=a.base?c[0]+a.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,a);a.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=a(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var s=t(i[o]);e[s].references--}for(var c=a(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},224:(n,e,t)=>{n.exports=t.p+"ceb05254cedfa895b512.ttf"}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),r=t.n(a),i=t(569),o=t.n(i),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h={all:{tasks:[]},today:{tasks:[]},thisWeek:{tasks:[]},important:{tasks:[]},projects:{tasks:[],get getTasks(){return this.tasks}}},g=function(){const n=document.querySelector(".content");for(;n.firstChild;)n.firstChild.remove()},x=t.p+"365f3e7f182c9f913994.svg",b=t.p+"2500f612ad4630b14fbb.svg",v=t.p+"b254db15a65e85097053.svg",y=t.p+"4c5d8bc1d4e75cc502ed.svg",k=t.p+"e7f4b5b259c909518ea3.svg",w=function(n,e,t){document.querySelector(".task-container");const a=document.querySelector(".content"),r=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),s=document.createElement("input");s.setAttribute("type","radio");const c=document.createElement("span"),d=document.createElement("div"),l=document.createElement("span"),p=new Image,u=new Image,m=new Image;p.setAttribute("id","important-star"),u.src=b,p.src=y,m.src=k,c.classList.add("task-title-span"),d.classList.add(".date-div"),l.classList.add(".task-date-span"),r.classList.add("new-task-item"),d.classList.add("date-div"),p.classList.add("star-svg"),u.classList.add("dots-svg"),o.classList.add("task-right"),i.classList.add("task-left"),c.innerText=n,l.innerText=t;const f=document.createElement("div"),h=document.createElement("div"),g=document.createElement("div");f.classList.add("options-menu"),h.classList.add("option-item"),g.classList.add("option-item"),f.classList.add("hidden"),h.innerText="Edit",g.innerText="Delete",f.append(h,g),d.append(l),o.append(d,p,u,f),i.append(s,c),r.append(i,o),a.append(r),E(),L()},E=function(){document.querySelector("#important-star").addEventListener("click",(n=>{n.target.src===y?n.target.src=k:n.target.src=y}))},L=function(){document.querySelector(".dots-svg").addEventListener("click",(n=>{document.querySelector(".options-menu").classList.toggle("hidden")}))},S=function(n,e){const t=document.querySelector(".task-container"),a=document.createElement("div"),r=(document.createElement("form"),document.createElement("label")),i=document.createElement("label"),o=document.createElement("label"),s=document.createElement("input"),c=document.createElement("input"),d=document.createElement("input"),l=document.createElement("div"),p=document.createElement("button"),u=document.createElement("button");r.innerText="Title:",i.innerText="Details(optional):",o.innerText="Date:",p.innerText="Add",u.innerText="Cancel",a.classList.add("new-task-form-div"),p.setAttribute("id","add-button"),u.setAttribute("id","cancel-button"),d.setAttribute("type","date"),p.setAttribute("type","submit"),r.append(s),i.append(c),o.append(d),l.append(p,u),a.append(r,i,o,l),t.append(a),p.addEventListener("click",(e=>{let t=s.value;e.preventDefault(),a.classList.add("hidden"),new Date(2022,8,22),n.createTask(String(t),"very important",d.value,!1),w(String(t),0,d.value),h.projects.tasks.forEach((n=>{n.taskList.forEach((n=>{var e;e=n.date,(new Date).toDateString()==new Date(e).toDateString()&&h.today.tasks.push(n)}))})),h.projects.tasks.forEach((n=>{n.taskList.forEach((n=>{!0===n.important&&h.important.tasks.push(n)}))}))}))},T=function(n){document.querySelector(".new-task-form-div");const e=document.querySelector(".content"),t=document.createElement("div"),a=document.createElement("div"),r=document.createElement("h1");a.classList.add("title-block"),r.classList.add("title"),r.innerText=`${n.title}`;const i=document.createElement("div"),o=new Image,s=document.createElement("span");o.src=v,i.classList.add("task-button-div"),o.classList.add("plus-svg"),i.classList.add("task-button-span"),s.innerText="Add Task",t.classList.add("task-container"),i.append(o,s),a.append(r),e.append(a,t,i),i.addEventListener("click",(()=>{S(n)}))},j={value:0,array:[],counter:0,dataVal:0,getValue(){return this.value},setValue(n){this.value=n}};new Date(2022,8,22),new Date,console.log(h),function(){const n=document.querySelector(".hamburger"),e=document.querySelector(".sidebar");document.querySelector(".switch"),n.addEventListener("click",(n=>{e.classList.toggle("hidden")}))}(),function(){const n=document.querySelector("#all-title"),e=document.querySelector("#today-title"),t=document.querySelector("#week-title"),a=document.querySelector("#important-title"),r=document.querySelector("#add-project"),i=document.querySelector(".form-div"),o=document.querySelector("#name"),s=document.querySelector("#cancel-button"),c=document.querySelector("#add-button"),d=(document.querySelector(".home"),document.getElementsByClassName("sub-title"));for(let n=0;n<d.length;n++)d[n].addEventListener("click",(n=>{let e=document.getElementsByClassName("selected");e.length>0&&(e[0].className=e[0].className.replace("selected","")),n.target.classList.add("selected")}));n.addEventListener("click",(()=>{g(),function(){const n=document.createElement("div");n.classList.add(".task-container");const e=document.querySelector(".content"),t=document.createElement("div"),a=document.createElement("h1");t.classList.add("title-block"),a.classList.add("title"),a.innerText="All Tasks",t.append(a),e.append(t,n)}(),h.projects.tasks.forEach((n=>{n.taskList.forEach((n=>{w(String(n.name),String(n.details),n.date)}))}))})),e.addEventListener("click",(()=>{g(),function(){const n=document.querySelector(".content"),e=document.createElement("div"),t=document.createElement("h1");e.classList.add("title-block"),t.classList.add("title"),t.innerText="Today's Tasks",e.append(t),n.append(e)}(),h.today.tasks.forEach((n=>{w(String(n.name),String(n.details),n.date)}))})),t.addEventListener("click",(()=>{g(),function(){const n=document.querySelector(".content"),e=document.createElement("div"),t=document.createElement("h1");e.classList.add("title-block"),t.classList.add("title"),t.innerText="This Week's Tasks",e.append(t),n.append(e)}()})),a.addEventListener("click",(()=>{g(),function(){const n=document.querySelector(".content"),e=document.createElement("div"),t=document.createElement("h1");e.classList.add("title-block"),t.classList.add("title"),t.innerText="Important Tasks",e.append(t),n.append(e)}(),h.important.tasks.forEach((n=>{w(String(n.name),String(n.details),n.date)}))})),r.addEventListener("click",(()=>{i.classList.remove("hidden")})),s.addEventListener("click",(()=>{i.classList.add("hidden")})),c.addEventListener("click",(n=>{n.preventDefault();let e=String(o.value);j.setValue(e);var t;t=(n=>{const e=[];return{title:n,taskList:e,createTask:(n,t,a,r)=>{e.push({name:n,details:t,date:a,important:r})},deleteTask:function(n){e.forEach((t=>{t.name===n&&e.splice(`${e.indexOf(t)}`,1)}))}}})(e),h.projects.tasks.push(t),o.value="",i.classList.add("hidden"),function(){const n=document.querySelector(".projects-list"),e=document.createElement("div");e.classList.add("project-list-item"),e.setAttribute("data-index",String(j.counter)),j.counter++;const t=new Image;t.src=x;const a=document.createElement("span"),r=new Image;r.src=b;const i=document.createElement("div");i.classList.add("left");const o=document.createElement("div");o.classList.add("right");let s=String(j.getValue());a.innerText=s,j.array.push(s),i.append(t,a),o.append(r),e.append(i,o),n.append(e),e.addEventListener("click",(n=>{g(),0===h.projects.tasks[j.array.indexOf(`${s}`)].taskList.length?(T(h.projects.tasks[j.array.indexOf(`${s}`)]),j.dataVal=n.target.dataset.index):(g(),T(h.projects.tasks[j.array.indexOf(`${s}`)]),h.projects.tasks[j.array.indexOf(`${s}`)].taskList.forEach((n=>{w(String(n.name),String(n.details),n.date)})))}))}()}))}()})()})();