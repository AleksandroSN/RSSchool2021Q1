(()=>{"use strict";var __webpack_modules__={919:()=>{eval("\n;// CONCATENATED MODULE: ./js/utils/animalDict.js\nconst animals = {\r\n  gorilla: {\r\n    img: './assets/img/map-gorilla.jpg',\r\n    title: 'Gorilla',\r\n    text: 'The broadcast comes from the Democratic Republic of the Congo in a forest area. Watch their life and life together',\r\n    href: './zoos/gorilla.html',\r\n  },\r\n  eagle: {\r\n    img: './assets/img/map-eagle.jpg',\r\n    title: 'Eagle',\r\n    text: 'The broadcast is from an island near Los Angeles. Watch their real life',\r\n    href: './zoos/eagle.html',\r\n  },\r\n  panda: {\r\n    img: './assets/img/map-panda.jpg',\r\n    title: 'Panda',\r\n    text: 'The broadcast comes from the mountainous regions of central China: Sichuan and Tibet. See their real life together',\r\n    href: './zoos.html',\r\n  },\r\n  crocodile: {\r\n    img: './assets/img/map-crocodile.jpg',\r\n    title: 'Alligator',\r\n    text: 'The broadcast is from Florida. See their real life',\r\n    href: './zoos/crocy.html',\r\n  },\r\n};\r\n\n;// CONCATENATED MODULE: ./js/utils/newAnimal.js\n\r\n\r\nfunction createAnimalCard(container, animal) {\r\n  const fragment = document.createDocumentFragment();\r\n\r\n  const img = document.createElement('img');\r\n  img.alt = animals[animal].title;\r\n  img.src = animals[animal].img;\r\n  img.classList.add('sixth-screen__tooltip-image');\r\n\r\n  const h3 = document.createElement('h3');\r\n  h3.textContent = animals[animal].title;\r\n  h3.classList.add('sixth-screen__tooltip-title', 'map-mode--title');\r\n\r\n  const p = document.createElement('p');\r\n  p.textContent = animals[animal].text;\r\n  p.classList.add('sixth-screen__tooltip-text', 'map-mode--text');\r\n\r\n  const a = document.createElement('a');\r\n  a.href = animals[animal].href;\r\n  a.textContent = 'Watch now ->';\r\n  a.classList.add('sixth-screen__tooltip-lnk', 'map-mode--link');\r\n\r\n  fragment.appendChild(img);\r\n  fragment.appendChild(h3);\r\n  fragment.appendChild(p);\r\n  fragment.appendChild(a);\r\n  container.appendChild(fragment);\r\n}\r\n\n;// CONCATENATED MODULE: ./js/index.js\n\r\n\r\nconst tooltipIndex = document.querySelector('.sixth-screen__tooltip-container');\r\nconst mapIndex = document.querySelector('.sixth-screen__map');\r\nconst animalPins = document.querySelectorAll('.sixth-screen__map-pin');\r\nconst mapSlider = document.querySelector('.sixth-screen__slider');\r\n\r\nmapIndex.addEventListener('click', (evt) => {\r\n  if (evt.target.id || evt.target.tagName === 'use') {\r\n    animalPins.forEach((pin) => pin.classList.remove('active'));\r\n    const topParent = evt.path.find((el) => el.classList.contains('sixth-screen__map-pin'));\r\n    const animal = topParent.id;\r\n    tooltipIndex.innerHTML = '';\r\n    createAnimalCard(tooltipIndex, animal);\r\n    topParent.classList.add('active');\r\n  }\r\n});\r\n\r\nmapSlider.addEventListener('click', (evt) => {\r\n  if (evt.target.id || evt.target.tagName === 'use') {\r\n    const topParent = evt.path.find((el) => el.classList.contains('sixth-screen__slider-item'));\r\n    const animal = topParent.id;\r\n    tooltipIndex.innerHTML = '';\r\n    createAnimalCard(tooltipIndex, animal);\r\n  }\r\n});\r\n\r\nconst feedbackBtn = document.querySelector('.thifth-screen__testimonials-btn');\r\nconst overlay = document.querySelector('.overlay');\r\nconst body = document.querySelector('body');\r\nconst feedbackWrapper = document.querySelector('.feedback');\r\nconst feedbackForm = document.querySelector('#feedback-form');\r\nconst inputName = document.querySelector('#feedback-name__input');\r\nconst inputEmail = document.querySelector('#feedback-email__input');\r\nconst inputText = document.querySelector('#feedback-text__input');\r\nconst inputSubmit = document.querySelector('.feedback-btn');\r\n\r\nconst checkValidity = () => {\r\n  if (\r\n    inputName.validity.valid &&\r\n    inputEmail.validity.valid &&\r\n    inputText.textLength !== 0 &&\r\n    inputText.textLength <= 280\r\n  ) {\r\n    inputSubmit.classList.add('feedback-btn--success');\r\n  } else {\r\n    inputSubmit.classList.remove('feedback-btn--success');\r\n  }\r\n};\r\n\r\nconst closePopup = () => {\r\n  overlay.classList.remove('overlay-show');\r\n  feedbackWrapper.classList.remove('feedback-show');\r\n  body.classList.remove('scroll-block');\r\n  inputSubmit.classList.remove('feedback-btn--success');\r\n  feedbackForm.reset();\r\n};\r\n\r\ninputName.addEventListener('input', () => {\r\n  checkValidity();\r\n});\r\ninputEmail.addEventListener('input', () => {\r\n  checkValidity();\r\n});\r\ninputText.addEventListener('input', () => {\r\n  checkValidity();\r\n});\r\n\r\nfeedbackBtn.addEventListener('click', () => {\r\n  overlay.classList.add('overlay-show');\r\n  feedbackWrapper.classList.add('feedback-show');\r\n  body.classList.add('scroll-block');\r\n});\r\n\r\noverlay.addEventListener('click', closePopup);\r\n\r\nfeedbackForm.addEventListener('submit', (evt) => {\r\n  evt.preventDefault();\r\n  alert(`Thanks for your feedback, ${inputName.value}`);\r\n  closePopup();\r\n});\r\n\r\nconst burgerMenu = document.querySelector('.header-burger__svg');\r\nconst headerNav = document.querySelector('.header-nav');\r\n\r\nburgerMenu.addEventListener('click', () => {\r\n  headerNav.classList.toggle('header-nav--show');\r\n  body.classList.toggle('scroll-block');\r\n});\r\n\r\nconst navSlider = document.querySelector('.third-screen__navigation');\r\nconst sliderContainer = document.querySelector('.third-screen__carousel');\r\nconst navItems = document.querySelectorAll('.carousel-card');\r\n\r\nnavItems.forEach((card) => {\r\n  const item = card;\r\n  item.style.transform = 'translateX(0)';\r\n});\r\nlet step = 0;\r\n\r\nfunction shuffle(array) {\r\n  for (let i = array.length - 1; i > 0; i -= 1) {\r\n    const j = Math.floor(Math.random() * (i + 1));\r\n    [array[i], array[j]] = [array[j], array[i]];\r\n  }\r\n}\r\n\r\nfunction cloneSliderItemInTheEnd(container) {\r\n  const navItemsTemp = Array(...navItems);\r\n  shuffle(navItemsTemp);\r\n  const fragment = document.createDocumentFragment();\r\n  navItemsTemp.forEach((x) => {\r\n    const clone = x.cloneNode(true);\r\n    fragment.appendChild(clone);\r\n  });\r\n  container.append(fragment);\r\n}\r\nfunction cloneSliderItemInTheBegin(container) {\r\n  const navItemsTemp = Array(...navItems);\r\n  shuffle(navItemsTemp);\r\n  const fragment = document.createDocumentFragment();\r\n  navItemsTemp.forEach((x) => {\r\n    const clone = x.cloneNode(true);\r\n    fragment.appendChild(clone);\r\n  });\r\n  container.prepend(fragment);\r\n}\r\n\r\ncloneSliderItemInTheBegin(sliderContainer);\r\ncloneSliderItemInTheEnd(sliderContainer);\r\n\r\nconst navItemsModify = document.querySelectorAll('.carousel-card');\r\nsliderContainer.style.width = `${17 * 328}px`; // width for 30 slide-items\r\n// 368px -> width slider item + gap\r\nnavSlider.addEventListener('click', (evt) => {\r\n  const navArrow = evt.target.closest('.navigation-arrow');\r\n  if (navArrow.classList.contains('arrow--left')) {\r\n    step += 3;\r\n    navItemsModify.forEach((card) => {\r\n      const item = card;\r\n      item.style.transform = `translateX(${368 * step}px)`;\r\n    });\r\n    if (step >= 0) {\r\n      step = 0;\r\n      navItemsModify.forEach((card) => {\r\n        const item = card;\r\n        item.style.transform = 'translateX(0px)';\r\n      });\r\n    }\r\n  } else if (navArrow.classList.contains('arrow--right')) {\r\n    step -= 3;\r\n    navItemsModify.forEach((card) => {\r\n      const item = card;\r\n      item.style.transform = `translateX(${368 * step}px)`;\r\n    });\r\n    if (step <= -15) {\r\n      step = 0;\r\n      navItemsModify.forEach((card) => {\r\n        const item = card;\r\n        item.style.transform = 'translateX(0px)';\r\n      });\r\n    }\r\n  }\r\n});\r\n\r\nlet startPos = 0;\r\nconst navTimeoutSlideContainer = document.querySelector('.thifth-screen__reviews-slider');\r\nconst navTimeoutSlideBtnsCon = document.querySelector('.thifth-screen__reviews-slider-nav');\r\nconst navTimeoutSlideItems = document.querySelectorAll('.thifth-screen__reviews-slider__item');\r\nconst navTimeoutSliderBtns = document.querySelectorAll('#thifth-screen__reviews-slider-btn');\r\nconst navTimeoutSlideItemsWidth = document.querySelector('.thifth-screen__reviews-slider__item')\r\n  .offsetWidth;\r\nconst gap = 40;\r\n\r\nconst widthMovedItem = navTimeoutSlideItemsWidth + gap;\r\n\r\nfunction moveItem(item, pos) {\r\n  item.style.transform = `translateX(${widthMovedItem * pos}px)`;\r\n}\r\n\r\nfunction nextSlide() {\r\n  startPos -= 1;\r\n  if (startPos <= -4) {\r\n    startPos = 0;\r\n  }\r\n  moveItem(navTimeoutSlideContainer, startPos);\r\n}\r\n\r\nnavTimeoutSlideBtnsCon.addEventListener('click', (evt) => {\r\n  const navArrow = evt.target.closest('.navigation-arrow');\r\n  if (navArrow.classList.contains('arrow--left')) {\r\n    console.log(startPos);\r\n    startPos += 1;\r\n    if (startPos >= 0) {\r\n      startPos = 0;\r\n    }\r\n    moveItem(navTimeoutSlideContainer, startPos);\r\n  } else if (navArrow.classList.contains('arrow--right')) {\r\n    console.log(startPos);\r\n    nextSlide();\r\n  }\r\n});\r\n\r\nlet autoInterval = null;\r\nfunction startSlider() {\r\n  clearInterval(autoInterval);\r\n  autoInterval = setInterval(nextSlide, 10000);\r\n}\r\nstartSlider();\r\n\r\nfunction pauseSlider(items, pause = 10000) {\r\n  items.forEach((item) => {\r\n    item.addEventListener('click', () => {\r\n      clearInterval(autoInterval);\r\n      setTimeout(startSlider, pause);\r\n    });\r\n  });\r\n}\r\n\r\npauseSlider(navTimeoutSlideItems);\r\npauseSlider(navTimeoutSliderBtns);\r\n\n\n//# sourceURL=webpack:///./js/index.js_+_2_modules?")}},__webpack_module_cache__={},inProgress,createStylesheet,findStylesheet,oldTags,newTags,applyHandler;function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=__webpack_module_cache__[e]={exports:{}};try{var t={id:e,module:n,factory:__webpack_modules__[e],require:__webpack_require__};__webpack_require__.i.forEach((function(e){e(t)})),n=t.module,t.factory.call(n.exports,n,n.exports,t.require)}catch(e){throw n.error=e,e}return n.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.i=[],__webpack_require__.hu=e=>e+"."+__webpack_require__.h()+".hot-update.js",__webpack_require__.miniCssF=e=>{},__webpack_require__.hmrF=()=>"index."+__webpack_require__.h()+".hot-update.json",__webpack_require__.h=()=>"1c06c3983c5aa2ebb489",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),inProgress={},__webpack_require__.l=(e,r,n,t)=>{if(inProgress[e])inProgress[e].push(r);else{var a,o;if(void 0!==n)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var s=i[c];if(s.getAttribute("src")==e){a=s;break}}a||(o=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.src=e),inProgress[e]=[r];var d=(r,n)=>{a.onerror=a.onload=null,clearTimeout(l);var t=inProgress[e];if(delete inProgress[e],a.parentNode&&a.parentNode.removeChild(a),t&&t.forEach((e=>e(n))),r)return r(n)},l=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),o&&document.head.appendChild(a)}},(()=>{var e,r,n,t,a={},o=__webpack_require__.c,i=[],c=[],s="idle";function d(e){s=e;for(var r=0;r<c.length;r++)c[r].call(null,e)}function l(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return l(e)}))}function _(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return d("check"),__webpack_require__.hmrM().then((function(t){if(!t)return d(f()?"ready":"idle"),null;d("prepare");var a=[];return r=[],n=[],Promise.all(Object.keys(__webpack_require__.hmrC).reduce((function(e,r){return __webpack_require__.hmrC[r](t.c,t.r,t.m,e,n,a),e}),[])).then((function(){return l((function(){return e?p(e):(d("ready"),a)}))}))}))}function u(e){return"ready"!==s?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):p(e)}function p(e){e=e||{},f();var r=n.map((function(r){return r(e)}));n=void 0;var a,o=r.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return d("abort"),Promise.resolve().then((function(){throw o[0]}));d("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),d("apply");var i=function(e){a||(a=e)},c=[];return r.forEach((function(e){if(e.apply){var r=e.apply(i);if(r)for(var n=0;n<r.length;n++)c.push(r[n])}})),a?(d("fail"),Promise.resolve().then((function(){throw a}))):t?p(e).then((function(e){return c.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(d("idle"),Promise.resolve(c))}function f(){if(t)return n||(n=[]),Object.keys(__webpack_require__.hmrI).forEach((function(e){t.forEach((function(r){__webpack_require__.hmrI[e](r,n)}))})),t=void 0,!0}__webpack_require__.hmrD=a,__webpack_require__.i.push((function(p){var f,m,h,v=p.module,b=function(n,t){var a=o[t];if(!a)return n;var c=function(r){if(a.hot.active){if(o[r]){var c=o[r].parents;-1===c.indexOf(t)&&c.push(t)}else i=[t],e=r;-1===a.children.indexOf(r)&&a.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),i=[];return n(r)},_=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&"e"!==u&&Object.defineProperty(c,u,_(u));return c.e=function(e){return function(e){switch(s){case"ready":return d("prepare"),r.push(e),l((function(){d("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},c}(p.require,p.id);v.hot=(f=p.id,m=v,h={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==f,_requireSelf:function(){i=m.parents.slice(),e=f,__webpack_require__(f)},active:!0,accept:function(e,r,n){if(void 0===e)h._selfAccepted=!0;else if("function"==typeof e)h._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)h._acceptedDependencies[e[t]]=r||function(){},h._acceptedErrorHandlers[e[t]]=n;else h._acceptedDependencies[e]=r||function(){},h._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)h._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)h._declinedDependencies[e[r]]=!0;else h._declinedDependencies[e]=!0},dispose:function(e){h._disposeHandlers.push(e)},addDisposeHandler:function(e){h._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=h._disposeHandlers.indexOf(e);r>=0&&h._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":n=[],Object.keys(__webpack_require__.hmrI).forEach((function(e){__webpack_require__.hmrI[e](f,n)})),d("ready");break;case"ready":Object.keys(__webpack_require__.hmrI).forEach((function(e){__webpack_require__.hmrI[e](f,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(f)}},check:_,apply:u,status:function(e){if(!e)return s;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var r=c.indexOf(e);r>=0&&c.splice(r,1)},data:a[f]},e=void 0,h),v.parents=i,v.children=[],i=[],p.require=b})),__webpack_require__.hmrC={},__webpack_require__.hmrI={}})(),(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e+"../"})(),createStylesheet=(e,r,n,t)=>{var a=document.createElement("link");return a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=c,a.parentNode.removeChild(a),t(s)}},a.href=r,document.head.appendChild(a),a},findStylesheet=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var a=(i=n[t]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===r))return i}var o=document.getElementsByTagName("style");for(t=0;t<o.length;t++){var i;if((a=(i=o[t]).getAttribute("data-href"))===e||a===r)return i}},oldTags=[],newTags=[],applyHandler=e=>({dispose:()=>{for(var e=0;e<oldTags.length;e++){var r=oldTags[e];r.parentNode&&r.parentNode.removeChild(r)}oldTags.length=0},apply:()=>{for(var e=0;e<newTags.length;e++)newTags[e].rel="stylesheet";newTags.length=0}}),__webpack_require__.hmrC.miniCss=(e,r,n,t,a,o)=>{a.push(applyHandler),e.forEach((e=>{var r=__webpack_require__.miniCssF(e),n=__webpack_require__.p+r;const a=findStylesheet(r,n);a&&t.push(new Promise(((r,t)=>{var o=createStylesheet(e,n,(()=>{o.as="style",o.rel="preload",r()}),t);oldTags.push(a),newTags.push(o)})))}))},(()=>{var e,r,n,t,a={826:0},o={};function i(e){return new Promise(((r,n)=>{o[e]=r;var t=__webpack_require__.p+__webpack_require__.hu(e),a=new Error;__webpack_require__.l(t,(r=>{if(o[e]){o[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading hot update chunk "+e+" failed.\n("+t+": "+i+")",a.name="ChunkLoadError",a.type=t,a.request=i,n(a)}}))}))}function c(o){function i(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var a=t.pop(),o=a.id,i=a.chain,s=__webpack_require__.c[o];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:o};if(s.hot._main)return{type:"unaccepted",chain:i,moduleId:o};for(var d=0;d<s.parents.length;d++){var l=s.parents[d],_=__webpack_require__.c[l];if(_){if(_.hot._declinedDependencies[o])return{type:"declined",chain:i.concat([l]),moduleId:o,parentId:l};-1===r.indexOf(l)&&(_.hot._acceptedDependencies[o]?(n[l]||(n[l]=[]),c(n[l],[o])):(delete n[l],r.push(l),t.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function c(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}__webpack_require__.f&&delete __webpack_require__.f.jsonpHmr,e=void 0;var s={},d=[],l={},_=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var u in r)if(__webpack_require__.o(r,u)){var p,f=r[u],m=!1,h=!1,v=!1,b="";switch((p=f?i(u):{type:"disposed",moduleId:u}).chain&&(b="\nUpdate propagation: "+p.chain.join(" -> ")),p.type){case"self-declined":o.onDeclined&&o.onDeclined(p),o.ignoreDeclined||(m=new Error("Aborted because of self decline: "+p.moduleId+b));break;case"declined":o.onDeclined&&o.onDeclined(p),o.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+p.moduleId+" in "+p.parentId+b));break;case"unaccepted":o.onUnaccepted&&o.onUnaccepted(p),o.ignoreUnaccepted||(m=new Error("Aborted because "+u+" is not accepted"+b));break;case"accepted":o.onAccepted&&o.onAccepted(p),h=!0;break;case"disposed":o.onDisposed&&o.onDisposed(p),v=!0;break;default:throw new Error("Unexception type "+p.type)}if(m)return{error:m};if(h)for(u in l[u]=f,c(d,p.outdatedModules),p.outdatedDependencies)__webpack_require__.o(p.outdatedDependencies,u)&&(s[u]||(s[u]=[]),c(s[u],p.outdatedDependencies[u]));v&&(c(d,[p.moduleId]),l[u]=_)}r=void 0;for(var g,w=[],y=0;y<d.length;y++){var k=d[y],q=__webpack_require__.c[k];q&&q.hot._selfAccepted&&l[k]!==_&&!q.hot._selfInvalidated&&w.push({module:k,require:q.hot._requireSelf,errorHandler:q.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete a[e]})),n=void 0;for(var r,t=d.slice();t.length>0;){var o=t.pop(),i=__webpack_require__.c[o];if(i){var c={},l=i.hot._disposeHandlers;for(y=0;y<l.length;y++)l[y].call(null,c);for(__webpack_require__.hmrD[o]=c,i.hot.active=!1,delete __webpack_require__.c[o],delete s[o],y=0;y<i.children.length;y++){var _=__webpack_require__.c[i.children[y]];_&&((e=_.parents.indexOf(o))>=0&&_.parents.splice(e,1))}}}for(var u in s)if(__webpack_require__.o(s,u)&&(i=__webpack_require__.c[u]))for(g=s[u],y=0;y<g.length;y++)r=g[y],(e=i.children.indexOf(r))>=0&&i.children.splice(e,1)},apply:function(e){for(var r in l)__webpack_require__.o(l,r)&&(__webpack_require__.m[r]=l[r]);for(var n=0;n<t.length;n++)t[n](__webpack_require__);for(var a in s)if(__webpack_require__.o(s,a)){var i=__webpack_require__.c[a];if(i){g=s[a];for(var c=[],_=[],u=[],p=0;p<g.length;p++){var f=g[p],m=i.hot._acceptedDependencies[f],h=i.hot._acceptedErrorHandlers[f];if(m){if(-1!==c.indexOf(m))continue;c.push(m),_.push(h),u.push(f)}}for(var v=0;v<c.length;v++)try{c[v].call(null,g)}catch(r){if("function"==typeof _[v])try{_[v](r,{moduleId:a,dependencyId:u[v]})}catch(n){o.onErrored&&o.onErrored({type:"accept-error-handler-errored",moduleId:a,dependencyId:u[v],error:n,originalError:r}),o.ignoreErrored||(e(n),e(r))}else o.onErrored&&o.onErrored({type:"accept-errored",moduleId:a,dependencyId:u[v],error:r}),o.ignoreErrored||e(r)}}}for(var b=0;b<w.length;b++){var y=w[b],k=y.module;try{y.require(k)}catch(r){if("function"==typeof y.errorHandler)try{y.errorHandler(r,{moduleId:k,module:__webpack_require__.c[k]})}catch(n){o.onErrored&&o.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:n,originalError:r}),o.ignoreErrored||(e(n),e(r))}else o.onErrored&&o.onErrored({type:"self-accept-errored",moduleId:k,error:r}),o.ignoreErrored||e(r)}}return d}}}self.webpackHotUpdate=(e,n,a)=>{for(var i in n)__webpack_require__.o(n,i)&&(r[i]=n[i]);a&&t.push(a),o[e]&&(o[e](),o[e]=void 0)},__webpack_require__.hmrI.jsonp=function(e,a){r||(r={},t=[],n=[],a.push(c)),__webpack_require__.o(r,e)||(r[e]=__webpack_require__.m[e])},__webpack_require__.hmrC.jsonp=function(o,s,d,l,_,u){_.push(c),e={},n=s,r=d.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],o.forEach((function(r){__webpack_require__.o(a,r)&&void 0!==a[r]&&(l.push(i(r)),e[r]=!0)})),__webpack_require__.f&&(__webpack_require__.f.jsonpHmr=function(r,n){e&&!__webpack_require__.o(e,r)&&__webpack_require__.o(a,r)&&void 0!==a[r]&&(n.push(i(r)),e[r]=!0)})},__webpack_require__.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(__webpack_require__.p+__webpack_require__.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})();var __webpack_exports__=__webpack_require__(919)})();