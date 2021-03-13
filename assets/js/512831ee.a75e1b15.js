(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(3),r=n(8),a=(n(0),n(172)),o={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/multieditor"},l={unversionedId:"packages/multieditor/introduction",id:"packages/multieditor/introduction",isDocsHomePage:!1,title:"Introduction",description:"WIP Package!",source:"@site/docs/packages/multieditor/Introduction.md",slug:"/multieditor",permalink:"/docs/multieditor",editUrl:"https://github.com/agile-ts/documentation/tree/develop/docs/packages/multieditor/Introduction.md",version:"current",lastUpdatedAt:1615625487,formattedLastUpdatedAt:"3/13/2021",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/api/installation"},next:{title:"Installation",permalink:"/docs/multieditor/installation"}},c=[{value:"\u2753 <code>multieditor</code>",id:"-multieditor",children:[{value:"\u23f0 Short Example",id:"-short-example",children:[]},{value:"\u26f3\ufe0f Sandbox",id:"\ufe0f-sandbox",children:[]}]}],s={toc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"WIP Package!"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Simple Form Manager")),Object(a.b)("br",null),Object(a.b)("a",{href:"https://github.com/agile-ts/agile"},Object(a.b)("img",{src:"https://img.shields.io/github/license/agile-ts/agile.svg?label=license&style=flat&colorA=293140&colorB=4a4872",alt:"GitHub License"})),Object(a.b)("a",{href:"https://npm.im/@agile-ts/multieditor"},Object(a.b)("img",{src:"https://img.shields.io/npm/v/@agile-ts/multieditor.svg?label=npm&style=flat&colorA=293140&colorB=4a4872",alt:"npm version"})),Object(a.b)("a",{href:"https://npm.im/@agile-ts/multieditor"},Object(a.b)("img",{src:"https://img.shields.io/bundlephobia/min/@agile-ts/multieditor.svg?label=minified%20size&style=flat&colorA=293140&colorB=4a4872",alt:"npm minified size"})),Object(a.b)("a",{href:"https://npm.im/@agile-ts/multieditor"},Object(a.b)("img",{src:"https://img.shields.io/npm/dt/@agile-ts/multieditor.svg?label=downloads&style=flat&colorA=293140&colorB=4a4872",alt:"npm total downloads"})),Object(a.b)("h2",{id:"-multieditor"},"\u2753 ",Object(a.b)("inlineCode",{parentName:"h2"},"multieditor")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"multieditor")," package is an extension for AgileTs, that makes creating reliable forms easy."),Object(a.b)("h3",{id:"-short-example"},"\u23f0 Short Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},'// Let\'s create our first MultiEditor\nconst multiEditor = new MultiEditor(editor => ({\n  data: {\n    id: "myId", // Inital Id\n    email: undefined, // Inital Email\n    name: undefined, // Inital Name\n  },\n  onSubmit: async (data) => {\n    console.log("Submitted ", data);  // <-------------------------------------------    \n  },                                                                  //            |\n  fixedProperties: ["id"], // Properties that always get passed as data into the onSubmit function\n  validateMethods: {\n    email: editor.Validator().string().email().required(), // Email is requiered, a string and follows the Email regex\n    name: editor.Validator().string().max(10).min(2).required(), // Name is required, a string, has to be shorter than 10 and longer than 2 chars\n  },\n  editableProperties: ["email", "name"], // Properties that can be edited\n}));\n\n// Lets update the requiered properties to validate the Editor\nmultiEditor.setValue("email", "test@test.com");\nmultiEditor.setValue("name", "Jeff");\n\n// Now we can submit the Editor and see what the onSubmit will log\nmultiEditor.submit();\n// Submited {\n//   id: "myId",\n//   name: "Jeff",\n//   email: "test@test.com"\n// }\n')),Object(a.b)("h3",{id:"\ufe0f-sandbox"},"\u26f3\ufe0f Sandbox"),Object(a.b)("p",null,"Test the MultiEditor Extension yourself, it's only one click away. Just select your preferred Framework below."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://codesandbox.io/s/multieditor-yxt4x"},"React")),Object(a.b)("li",{parentName:"ul"},"Vue (coming soon)"),Object(a.b)("li",{parentName:"ul"},"Angular (coming soon)")))}d.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return p}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(n),b=i,p=m["".concat(o,".").concat(b)]||m[b]||u[b]||a;return n?r.a.createElement(p,l(l({ref:t},s),{},{components:n})):r.a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);