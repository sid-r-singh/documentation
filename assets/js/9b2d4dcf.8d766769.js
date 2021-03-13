(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(8),r=(n(0),n(172)),i={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/react"},c={unversionedId:"packages/react/introduction",id:"packages/react/introduction",isDocsHomePage:!1,title:"Introduction",description:"Use AgileTs with React and React-Native",source:"@site/docs/packages/react/Introduction.md",slug:"/react",permalink:"/documents/docs/react",editUrl:"https://github.com/sid-r-singh/documentation/tree/develop/docs/packages/react/Introduction.md",version:"current",lastUpdatedAt:1615629686,formattedLastUpdatedAt:"3/13/2021",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Installation",permalink:"/documents/docs/multieditor/installation"},next:{title:"Installation",permalink:"/documents/docs/react/installation"}},s=[{value:"\u2753 <code>react</code>",id:"-react",children:[{value:"\ud83d\udc06 Functional Component",id:"-functional-component",children:[]},{value:"\ud83e\udd96 Class Component",id:"\ud83e\udd96-class-component",children:[]}]},{value:"\ud83d\ude80 Quick Links",id:"-quick-links",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Use AgileTs with React and React-Native"))),Object(r.b)("br",null),Object(r.b)("a",{href:"https://github.com/agile-ts/agile"},Object(r.b)("img",{src:"https://img.shields.io/github/license/agile-ts/agile.svg?label=license&style=flat&colorA=293140&colorB=4a4872",alt:"GitHub License"})),Object(r.b)("a",{href:"https://npm.im/@agile-ts/react"},Object(r.b)("img",{src:"https://img.shields.io/npm/v/@agile-ts/react.svg?label=npm&style=flat&colorA=293140&colorB=4a4872",alt:"npm version"})),Object(r.b)("a",{href:"https://npm.im/@agile-ts/react"},Object(r.b)("img",{src:"https://img.shields.io/bundlephobia/min/@agile-ts/react.svg?label=minified%20size&style=flat&colorA=293140&colorB=4a4872",alt:"npm minified size"})),Object(r.b)("a",{href:"https://npm.im/@agile-ts/react"},Object(r.b)("img",{src:"https://img.shields.io/npm/dt/@agile-ts/react.svg?label=downloads&style=flat&colorA=293140&colorB=4a4872",alt:"npm total downloads"})),Object(r.b)("h2",{id:"-react"},"\u2753 ",Object(r.b)("inlineCode",{parentName:"h2"},"react")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"react")," package is an Integration of AgileTs into React.\nIts main task is to bind States to React Components.\nThis binding ensures that AgileTs rerender the Component, whenever a bound State mutates.\nIt also offers some other useful functions that optimize the workflow with AgileTs in a React Environment."),Object(r.b)("p",null,"A distinction is made between ",Object(r.b)("inlineCode",{parentName:"p"},"Functional")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Class")," Components,\nas we prefer using ",Object(r.b)("inlineCode",{parentName:"p"},"React Hooks")," in Functional Components.\nBut Hooks aren't supported in Class Components, so we came across other solutions,\nto offer the same features there too."),Object(r.b)("h3",{id:"-functional-component"},"\ud83d\udc06 Functional Component"),Object(r.b)("p",null,"In Function Components we recommend using AgileTs Hooks like ",Object(r.b)("inlineCode",{parentName:"p"},"useAgile"),",\nwhich allows us to bind any State to our React Component"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"// -- myComponent.jsx ------------------------------------------\n\n// Binds MY_FIRST_STATE to myComponent\nconst myFirstState = useAgile(MY_FIRST_STATE);\n")),Object(r.b)("p",null,"To find out more about ",Object(r.b)("inlineCode",{parentName:"p"},"useAgile"),", and other Hooks provided by AgileTs,\ncheckout the AgileTs Hook ",Object(r.b)("a",{parentName:"p",href:"/documents/docs/react/hooks"},"docs"),"."),Object(r.b)("h3",{id:"\ud83e\udd96-class-component"},"\ud83e\udd96 Class Component"),Object(r.b)("p",null,"In Class Component we currently only support the ",Object(r.b)("inlineCode",{parentName:"p"},"AgileHOC"),",\nwhich helps us binding States to our Component.\nIt is a Higher order Component that gets wrapped around our React Component."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"// -- myComponent.jsx ------------------------------------------\n\n// Binds MY_FIRST_STATE to myComponent\nexport default AgileHOC(myComponent, [MY_FIRST_STATE]);\n")),Object(r.b)("p",null,"To find out more AgileTs in Class Components,\ncheckout the AgileHOC ",Object(r.b)("a",{parentName:"p",href:"/documents/docs/react/AgileHOC"},"docs"),"."),Object(r.b)("h2",{id:"-quick-links"},"\ud83d\ude80 Quick Links"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/documents/docs/react/hooks#useagile"},"useAgile")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/documents/docs/react/hooks#useevent"},"useEvent")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/documents/docs/react/AgileHOC"},"AgileHOC"))))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||r;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);