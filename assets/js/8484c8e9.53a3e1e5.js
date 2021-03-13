(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(172)),s={id:"properties",title:"Properties",sidebar_label:"Properties",slug:"/core/state/properties"},o={unversionedId:"packages/core/features/state/properties",id:"packages/core/features/state/properties",isDocsHomePage:!1,title:"Properties",description:"Here useful properties of the State are listed.",source:"@site/docs/packages/core/features/state/Properties.md",slug:"/core/state/properties",permalink:"documentation/docs/core/state/properties",editUrl:"https://github.com/sid-r-singh/documentation/tree/develop/docs/packages/core/features/state/Properties.md",version:"current",lastUpdatedAt:1615653881,formattedLastUpdatedAt:"3/13/2021",sidebar_label:"Properties",sidebar:"docs",previous:{title:"Introduction",permalink:"documentation/docs/core/state"},next:{title:"Methods",permalink:"documentation/docs/core/state/methods"}},l=[{value:"<code>agileInstance</code>",id:"agileinstance",children:[]},{value:"<code>key</code>",id:"key",children:[]},{value:"<code>valueType</code>",id:"valuetype",children:[]},{value:"<code>isSet</code>",id:"isset",children:[]},{value:"<code>isPlaceholder</code>",id:"isplaceholder",children:[]},{value:"<code>initialStateValue</code>",id:"initialstatevalue",children:[]},{value:"<code>value</code>",id:"value",children:[]},{value:"<code>previousStateValue</code>",id:"previousstatevalue",children:[]},{value:"<code>nextStateValue</code>",id:"nextstatevalue",children:[]},{value:"<code>isPersisted</code>",id:"ispersisted",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},"\u2757\ufe0f"),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Here useful properties of the ",Object(i.b)("inlineCode",{parentName:"p"},"State")," are listed."))),Object(i.b)("h2",{id:"agileinstance"},Object(i.b)("inlineCode",{parentName:"h2"},"agileInstance")),Object(i.b)("p",null,"Agile Instance to which the State belongs"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"MY_STATE.agileInstance(); // Returns a Agile Instance\n")),Object(i.b)("p",null,"Note that it is stored as a function in the State, to avoid endless deep classes."),Object(i.b)("h2",{id:"key"},Object(i.b)("inlineCode",{parentName:"h2"},"key")),Object(i.b)("p",null,"Current key/name of the State.\nIt is used to uniquely identify the State.\nBesides getting the ",Object(i.b)("inlineCode",{parentName:"p"},"key"),", we can also assign a new ",Object(i.b)("inlineCode",{parentName:"p"},"key")," with help of this property."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"MY_STATE.key = \"myCoolState\";\nMY_STATE.key; // Returns 'myCoolState'\n")),Object(i.b)("h2",{id:"valuetype"},Object(i.b)("inlineCode",{parentName:"h2"},"valueType")),Object(i.b)("p",null,"Current type of the value."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},"MY_STATE.type(String);\nMY_STATE.valueType; // Returns 'string'\n")),Object(i.b)("p",null,"This property is only useful if you are using Javascript,\nbecause for Typescript there are better solutions, like generic types."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'App.createState<string>("see generic types are sick");\n')),Object(i.b)("h2",{id:"isset"},Object(i.b)("inlineCode",{parentName:"h2"},"isSet")),Object(i.b)("p",null,"If the current State Value differ from the initial State Value."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:"{2,4}","{2,4}":!0},'const MY_STATE = App.createState("jeff");\nMY_STATE.isSet; // Returns false\nMY_STATE.set("frank");\nMY_STATE.isSet; // Returns true\n')),Object(i.b)("h2",{id:"isplaceholder"},Object(i.b)("inlineCode",{parentName:"h2"},"isPlaceholder")),Object(i.b)("p",null,"If the State is a placeholder."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"MY_STATE.isPlaceholder; // Returns 'false'\n")),Object(i.b)("p",null,"For instance, it might be a placeholder if it hasn't been instantiated yet, but AgileTs needs to hold a reference to it.\nThis is the case if we bind a maybe not existing Group with the ",Object(i.b)("inlineCode",{parentName:"p"},"getGroupWithReference")," function to a Component.\nThen AgileTs creates a placeholder Group for us, to ensure that the Component rerender whenever\nthe real Group got created."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'const myGroup = useAgile(MY_COLLECTION.getGroupWithReference("group1")); // Causes rerender if Group got created\nconst myGroup2 = useAgile(MY_COLLECTION.getGroup("group2")); // Doesn\'t Causes rerender if Group got created\n')),Object(i.b)("h2",{id:"initialstatevalue"},Object(i.b)("inlineCode",{parentName:"h2"},"initialStateValue")),Object(i.b)("p",null,"The first Value which got firstly assigned to the State."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:"{4}","{4}":!0},'const MY_STATE = App.createState("jeff");\nMY_STATE.set("frank");\nMY_STATE.set("hans");\nMY_STATE.initialStateValue; // Returns \'jeff\'\n')),Object(i.b)("h2",{id:"value"},Object(i.b)("inlineCode",{parentName:"h2"},"value")),Object(i.b)("p",null,"The current Value of the State.\nBesides getting the ",Object(i.b)("inlineCode",{parentName:"p"},"value"),", we can also assign a new ",Object(i.b)("inlineCode",{parentName:"p"},"value")," with help of this property."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},"MY_STATE.value = \"myCoolValue\";\nMY_STATE.value; // Returns 'myCoolValue'\n")),Object(i.b)("h2",{id:"previousstatevalue"},Object(i.b)("inlineCode",{parentName:"h2"},"previousStateValue")),Object(i.b)("p",null,"The State Value, which has been assigned to the State, before the current active Value."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts"},'const MY_STATE = App.createState("hello");\nMY_STATE.set("bye");\nMY_STATE.previousState; // Returns \'hello\'\n')),Object(i.b)("h2",{id:"nextstatevalue"},Object(i.b)("inlineCode",{parentName:"h2"},"nextStateValue")),Object(i.b)("p",null,"The State Value, which will be assigned to the State as next.\nOften this is the current Value, because AgileTs is pretty fast in assigning new Values \ud83d\ude80."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},"MY_STATE.set(1);\nMY_STATE.nextStateValue; // Returns '1'\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"nextStateValue")," will be used as next value, if we ingest the State without any specific new value into the runtime."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},"const MY_ARRAY = App.State([1, 2, 3]);\nMY_ARRAY.nextState.push(4);\nMY_ARRAY.ingest(); \nMY_STATE.value; // Returns '[1, 2, 3, 4]'\n")),Object(i.b)("h2",{id:"ispersisted"},Object(i.b)("inlineCode",{parentName:"h2"},"isPersisted")),Object(i.b)("p",null,"If the State Value got successfully persisted into an external Storage like the ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/de/docs/Web/API/Window/localStorage"},"Local Storage"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:"{1,3}","{1,3}":!0},"MY_STATE.isPersisted; // Returns 'false'\nMY_STATE.persist(); \nMY_STATE.isPersisted; // Returns 'true'\n")))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(h,o(o({ref:t},c),{},{components:n})):r.a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);