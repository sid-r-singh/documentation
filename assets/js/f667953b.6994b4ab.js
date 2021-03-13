(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(172)),i={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/core/agile-instance"},c={unversionedId:"packages/core/features/agile-instance/introduction",id:"packages/core/features/agile-instance/introduction",isDocsHomePage:!1,title:"Introduction",description:"WIP docs!",source:"@site/docs/packages/core/features/agile-instance/Introduction.md",slug:"/core/agile-instance",permalink:"/documentation/docs/core/agile-instance",editUrl:"https://github.com/sid-r-singh/documentation/tree/develop/docs/packages/core/features/agile-instance/Introduction.md",version:"current",lastUpdatedAt:1615632085,formattedLastUpdatedAt:"3/13/2021",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Installation",permalink:"/documentation/docs/core/installation"},next:{title:"Properties",permalink:"/documentation/docs/core/agile-instance/properties"}},l=[{value:"\ud83d\udced Props",id:"-props",children:[{value:"<code>config</code>",id:"config",children:[]}]},{value:"\ud83d\udfe6 Typescript",id:"\ud83d\udfe6-typescript",children:[]},{value:"\ud83d\uddfa Where to instantiate?",id:"-where-to-instantiate",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"WIP docs!"))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Agile Class")," is the foundation of AgileTs. Everything related to AgileTs depends on this class in different ways."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const App = new Agile();\n")),Object(o.b)("p",null,"It can be seen as your application store, which manages each ",Object(o.b)("inlineCode",{parentName:"p"},"Agile Sub Instance")," (ASI).\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"Agile Class")," doesn't contain these ASI's internally, but each ASI includes a reference to the main ",Object(o.b)("inlineCode",{parentName:"p"},"Agile Class"),".\nFor instance, to pass something into the ",Object(o.b)("inlineCode",{parentName:"p"},"runtime"),".\nHere are some Agile Sub Instances (ASI):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/docs/core/state"},"State"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-ts"},' const MY_STATE = App.createState("Hello there");\n'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/docs/core/collection"},"Collection"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const MY_COLLECTION = App.createCollection();\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/docs/core/computed"},"Computed"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const MY_COMPUTED = App.createComputed(() => {});\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/documentation/docs/core/event"},"Event"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const MY_EVENT = App.createEvent();\n")))),Object(o.b)("p",null,"These ASI's are created with the help of an ",Object(o.b)("inlineCode",{parentName:"p"},"Agile Instance")," and get automatically bound to it.\nIn summary, the main tasks of an instantiated ",Object(o.b)("inlineCode",{parentName:"p"},"Agile Class")," (Agile Instance) are to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"manage Agile Sub Instances, like ",Object(o.b)("a",{parentName:"li",href:"/documentation/docs/core/state"},"States"),", .."),Object(o.b)("li",{parentName:"ul"},"ingest changes into the Runtime"),Object(o.b)("li",{parentName:"ul"},"trigger rerender on Integrations like ",Object(o.b)("a",{parentName:"li",href:"/documentation/docs/react"},"React")),Object(o.b)("li",{parentName:"ul"},"store values in any ",Object(o.b)("a",{parentName:"li",href:"/documentation/docs/core/storage"},"Storage"))),Object(o.b)("p",null,"Be aware that each application using AgileTs needs at least one ",Object(o.b)("inlineCode",{parentName:"p"},"Agile Instance"),",\nbut also shouldn't have more, because multiple ",Object(o.b)("inlineCode",{parentName:"p"},"Agile Instance")," in one application might cause trouble."),Object(o.b)("h2",{id:"-props"},"\ud83d\udced Props"),Object(o.b)("h3",{id:"config"},Object(o.b)("inlineCode",{parentName:"h3"},"config")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Agile Class")," takes an optional configuration object as its only parameter."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const App = new Agile({\n    logConfig: {\n        active: true,\n    },\n    localStorage: false\n});\n")),Object(o.b)("p",null,"Here is a Typescript Interface for quick reference, however\neach property will be explained in more detail below."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"export interface CreateAgileConfigInterface {\n  logConfig?: CreateLoggerConfigInterface;\n  waitForMount?: boolean;\n  localStorage?: boolean;\n}\n")),Object(o.b)("h4",{id:"logconfig"},Object(o.b)("inlineCode",{parentName:"h4"},"logConfig")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"logConfig")," configures the Logger of AgileTs.\nThe Agile Logger simply logs important events in the console, like warnings or errors,\nbut it also logs runtime events if this is desired."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const App = new Agile({\n  logConfig: {\n    level: Logger.level.ERROR, // print only errors\n    active: true,\n  },\n});\n")),Object(o.b)("p",null,"To find out more about possible configuration options, checkout the ",Object(o.b)("a",{parentName:"p",href:"/documentation/docs/interfaces#createloggerconfig"},"CreateLoggerConfigInterface"),"."),Object(o.b)("h4",{id:"localstorage"},Object(o.b)("inlineCode",{parentName:"h4"},"localStorage")),Object(o.b)("p",null,"Defines whether AgileTs should create an interface to the ",Object(o.b)("inlineCode",{parentName:"p"},"localStorage")," for us or not.\nIf we have decided to use the ",Object(o.b)("a",{parentName:"p",href:"https://www.w3schools.com/html/html5_webstorage.asp"},"Local Storage"),", each Agile Sub Instance we\npersist (",Object(o.b)("inlineCode",{parentName:"p"},".persist()"),"), gets stored into the ",Object(o.b)("inlineCode",{parentName:"p"},"localStorage")," by default."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const App = new Agile({\n  localStorage: false // default true\n});\n")),Object(o.b)("p",null,"Of course, we aren't limited to the ",Object(o.b)("inlineCode",{parentName:"p"},"localStorage"),".\nWe can also create Interfaces to nearly any ",Object(o.b)("a",{parentName:"p",href:"/documentation/docs/core/storage"},"Storage")," we want.\nFor instance, that is necessary in a Mobile Environment,\nsince there the ",Object(o.b)("inlineCode",{parentName:"p"},"localStorage")," doesn't exists. With ",Object(o.b)("inlineCode",{parentName:"p"},"App.registerStorage()")," we can register our own new ",Object(o.b)("a",{parentName:"p",href:"/documentation/docs/core/storage"},"Storage")," in AgileTs."),Object(o.b)("h4",{id:"waitformount"},Object(o.b)("inlineCode",{parentName:"h4"},"waitForMount")),Object(o.b)("p",null,"This flag declares wether AgileTs should wait until unmounted\ncomponents get mounted before rerendering them."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"const App = new Agile({\n  waitForMount: false // default true\n});\n")),Object(o.b)("h2",{id:"\ud83d\udfe6-typescript"},"\ud83d\udfe6 Typescript"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Agile Class")," is almost 100% typesafe."),Object(o.b)("h2",{id:"-where-to-instantiate"},"\ud83d\uddfa Where to instantiate?"),Object(o.b)("p",null,"We can instantiate the ",Object(o.b)("inlineCode",{parentName:"p"},"Agile Class")," where ever we want.\nDirectly in our Component, in a separate file, or on paper.\nIt doesn't matter as long as we can work with it.\nThere are a few ",Object(o.b)("a",{parentName:"p",href:"/documentation/docs/style-guide"},"Style Guides"),"\nwhich might help you with such hard decision."))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);