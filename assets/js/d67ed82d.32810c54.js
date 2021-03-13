(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(172)),o=n(202),l=n(203),c={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/multieditor/installation"},s={unversionedId:"packages/multieditor/installation",id:"packages/multieditor/installation",isDocsHomePage:!1,title:"Installation",description:"The multieditor package can be installed over npm.",source:"@site/docs/packages/multieditor/Installation.md",slug:"/multieditor/installation",permalink:"/documentation/docs/multieditor/installation",editUrl:"https://github.com/sid-r-singh/documentation/tree/develop/docs/packages/multieditor/Installation.md",version:"current",lastUpdatedAt:1615654292,formattedLastUpdatedAt:"3/13/2021",sidebar_label:"Installation",sidebar:"docs",previous:{title:"Introduction",permalink:"/documentation/docs/multieditor"},next:{title:"Introduction",permalink:"/documentation/docs/react"}},u=[],b={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"multieditor")," package can be installed over ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),"."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Be aware that this is no standalone package!"))),Object(i.b)(o.a,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install @agile-ts/multieditor \n"))),Object(i.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @agile-ts/multieditor\n")))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"multieditor")," package is an extension of AgileTs and doesn't work without the ",Object(i.b)("a",{parentName:"p",href:"/documentation/docs/core"},Object(i.b)("inlineCode",{parentName:"a"},"core")," package"),",\nwhich functions as the brain of AgileTs and is indispensable.\nUnfortunately, we can't combine each ",Object(i.b)("inlineCode",{parentName:"p"},"core")," with ",Object(i.b)("inlineCode",{parentName:"p"},"multieditor")," version.\nTherefore, we have created a table which shows which versions fit together without restrictions."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"@agile-ts/multieditor"),Object(i.b)("th",{parentName:"tr",align:null},"@agile-ts/core"),Object(i.b)("th",{parentName:"tr",align:null},"NPM Version"),Object(i.b)("th",{parentName:"tr",align:null},"Supported React versions"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"v0.0.7+"),Object(i.b)("td",{parentName:"tr",align:null},"v0.0.7+"),Object(i.b)("td",{parentName:"tr",align:null},"v6+"),Object(i.b)("td",{parentName:"tr",align:null},"16.8+")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"v0.0.6"),Object(i.b)("td",{parentName:"tr",align:null},"v0.0.3 - v0.0.6"),Object(i.b)("td",{parentName:"tr",align:null},"v6+"),Object(i.b)("td",{parentName:"tr",align:null},"16.8+")))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Other Versions aren't supported anymore")))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},195:function(e,t,n){"use strict";var a=n(0),r=n(196);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},196:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},202:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(195),o=n(173),l=n(66),c=n.n(l);var s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,b=e.values,p=e.groupId,d=e.className,m=Object(i.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,O=Object(a.useState)(l),g=O[0],j=O[1],h=a.Children.toArray(e.children),y=[];if(null!=p){var N=f[p];null!=N&&N!==g&&b.some((function(e){return e.value===N}))&&j(N)}var w=function(e){var t=e.target,n=y.indexOf(t),a=h[n].props.value;j(a),null!=p&&(v(p,a),setTimeout((function(){var e,n,a,r,i,o,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},k=function(e){var t,n;switch(e.keyCode){case u:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case s:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:k,onFocus:w,onClick:w},n)}))),t?Object(a.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},203:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);