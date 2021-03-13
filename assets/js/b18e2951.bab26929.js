(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(172)),i=n(202),c=n(203),l={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/react/installation"},s={unversionedId:"packages/react/installation",id:"packages/react/installation",isDocsHomePage:!1,title:"Installation",description:"The react package can be installed over npm.",source:"@site/docs/packages/react/Installation.md",slug:"/react/installation",permalink:"/docs/react/installation",editUrl:"https://github.com/agile-ts/documentation/tree/develop/docs/packages/react/Installation.md",version:"current",lastUpdatedAt:1615625487,formattedLastUpdatedAt:"3/13/2021",sidebar_label:"Installation",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/react"},next:{title:"React Hooks",permalink:"/docs/react/hooks"}},b=[],u={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"react")," package can be installed over ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),"."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Be aware that this is no standalone package!"))),Object(o.b)(i.a,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm install @agile-ts/react \n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @agile-ts/react\n")))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"react")," package is an extension of AgileTs and doesn't work without the ",Object(o.b)("a",{parentName:"p",href:"/docs/core"},Object(o.b)("inlineCode",{parentName:"a"},"core")," package"),",\nwhich functions as the brain of AgileTs and is indispensable.\nUnfortunately, we can't combine each ",Object(o.b)("inlineCode",{parentName:"p"},"core")," with ",Object(o.b)("inlineCode",{parentName:"p"},"react")," version.\nTherefore, we have created a table which shows which versions fit together without restrictions."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"@agile-ts/react"),Object(o.b)("th",{parentName:"tr",align:null},"@agile-ts/core"),Object(o.b)("th",{parentName:"tr",align:null},"NPM Version"),Object(o.b)("th",{parentName:"tr",align:null},"Supported React versions"),Object(o.b)("th",{parentName:"tr",align:null},"Supports hook based components"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"v0.0.7+"),Object(o.b)("td",{parentName:"tr",align:null},"v0.0.7+"),Object(o.b)("td",{parentName:"tr",align:null},"v6+"),Object(o.b)("td",{parentName:"tr",align:null},"16.8+"),Object(o.b)("td",{parentName:"tr",align:null},"Yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"v0.0.6"),Object(o.b)("td",{parentName:"tr",align:null},"v0.0.3 - v0.0.6"),Object(o.b)("td",{parentName:"tr",align:null},"v6+"),Object(o.b)("td",{parentName:"tr",align:null},"16.8+"),Object(o.b)("td",{parentName:"tr",align:null},"Yes")))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Other Versions aren't supported anymore")))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},195:function(e,t,n){"use strict";var a=n(0),r=n(196);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},196:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},202:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(195),i=n(173),c=n(66),l=n.n(c);var s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=Object(o.a)(),f=d.tabGroupChoices,v=d.setTabGroupChoices,O=Object(a.useState)(c),g=O[0],j=O[1],h=a.Children.toArray(e.children),y=[];if(null!=p){var N=f[p];null!=N&&N!==g&&u.some((function(e){return e.value===N}))&&j(N)}var w=function(e){var t=e.target,n=y.indexOf(t),a=h[n].props.value;j(a),null!=p&&(v(p,a),setTimeout((function(){var e,n,a,r,o,i,c,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,c=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=c&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},k=function(e){var t,n;switch(e.keyCode){case b:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case s:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:k,onFocus:w,onClick:w},n)}))),t?Object(a.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},203:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);