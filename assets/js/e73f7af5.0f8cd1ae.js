(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(8),r=(a(0),a(172)),l=a(202),c=a(203),i={id:"react",title:"React",sidebar_label:"React",slug:"/quick-start/react"},s={unversionedId:"quick_start/react",id:"quick_start/react",isDocsHomePage:!1,title:"React",description:"In this guide, you learn how to integrate and use AgileTs in a React Project. I promise you, it's pretty easy \ud83d\ude03. We",source:"@site/docs/quick_start/React.md",slug:"/quick-start/react",permalink:"/documents/docs/quick-start/react",editUrl:"https://github.com/sid-r-singh/documentation/tree/develop/docs/quick_start/React.md",version:"current",lastUpdatedAt:1615629686,formattedLastUpdatedAt:"3/13/2021",sidebar_label:"React",sidebar:"docs",previous:{title:"Contributing",permalink:"/documents/docs/contributing"},next:{title:"Vue",permalink:"/documents/docs/quick-start/vue"}},p=[{value:"\ud83d\udd3d Installation",id:"-installation",children:[{value:"\ud83d\udcc1 <code>@agile-ts/core</code>",id:"-agile-tscore",children:[]},{value:"\ud83d\udcc2 <code>@agile-ts/react</code>",id:"-agile-tsreact",children:[]},{value:"\ud83d\ude80 <code>create-react-app</code>",id:"-create-react-app",children:[]}]},{value:"\ud83d\udca1 Create first State",id:"-create-first-state",children:[{value:"\u2753 What is a State",id:"-what-is-a-state",children:[]},{value:"\ud83d\udd34 Live Example",id:"-live-example",children:[]},{value:"\ud83d\udcbb Important Code Snippets",id:"-important-code-snippets",children:[]}]},{value:"\ud83d\udca1 Create first Collection",id:"-create-first-collection",children:[{value:"\u2753 What is a Collection",id:"-what-is-a-collection",children:[]},{value:"\ud83d\udd34 Live Example",id:"-live-example-1",children:[]},{value:"\ud83d\udcbb Important Code Snippets",id:"-important-code-snippets-1",children:[]}]},{value:"\ud83d\udd0d More",id:"-more",children:[]}],u={toc:p};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this guide, you learn how to integrate and use AgileTs in a React Project. I promise you, it's pretty easy \ud83d\ude03. We\nrecommend proceeding from top to bottom because some sections build on each other."),Object(r.b)("h2",{id:"-installation"},"\ud83d\udd3d Installation"),Object(r.b)("p",null,"To properly use AgileTs in a React Application, we have to install two packages. On the one side, the ",Object(r.b)("inlineCode",{parentName:"p"},"core")," package and an AgileTs Integration for React on the other site."),Object(r.b)("h3",{id:"-agile-tscore"},"\ud83d\udcc1 ",Object(r.b)("inlineCode",{parentName:"h3"},"@agile-ts/core")),Object(r.b)(l.a,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install @agile-ts/core \n"))),Object(r.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @agile-ts/core\n")))),Object(r.b)("p",null,"Let's begin with the ",Object(r.b)("inlineCode",{parentName:"p"},"core")," package, which acts as the brain of AgileTs\nand manages all our ",Object(r.b)("a",{parentName:"p",href:"/documents/docs/core/state"},"States"),",\n",Object(r.b)("a",{parentName:"p",href:"/documents/docs/core/collection"},"Collections"),", ..\nIt is the only essential package for using AgileTs."),Object(r.b)("h3",{id:"-agile-tsreact"},"\ud83d\udcc2 ",Object(r.b)("inlineCode",{parentName:"h3"},"@agile-ts/react")),Object(r.b)(l.a,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npm install @agile-ts/react \n"))),Object(r.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @agile-ts/react\n")))),Object(r.b)("p",null,"Besides the ",Object(r.b)("inlineCode",{parentName:"p"},"core")," package, we install a React Integration.\nIt is like an interface to React and provides useful Functions\nlike ",Object(r.b)("a",{parentName:"p",href:"/documents/docs/react/hooks#useagile"},Object(r.b)("inlineCode",{parentName:"a"},"useAgile")),"\nto bind our States to a React Component."),Object(r.b)("h3",{id:"-create-react-app"},"\ud83d\ude80 ",Object(r.b)("inlineCode",{parentName:"h3"},"create-react-app")),Object(r.b)(l.a,{defaultValue:"javascript",values:[{label:"Javascript",value:"javascript"},{label:"Typescript",value:"typescript"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"javascript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"}," npx create-react-app my-app --template agile\n"))),Object(r.b)(c.a,{value:"typescript",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"}," npx create-react-app my-app --template agile-typescript\n")))),Object(r.b)("p",null,"In case you start your project from scratch, feel free to use the ",Object(r.b)("inlineCode",{parentName:"p"},"react-template")," for AgileTs. This template will automatically\ngenerate a fully functional react-app with AgileTs installed."),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("br",null),Object(r.b)("h2",{id:"-create-first-state"},"\ud83d\udca1 Create first State"),Object(r.b)("h3",{id:"-what-is-a-state"},"\u2753 What is a State"),Object(r.b)("p",null,"States hold  ",Object(r.b)("em",{parentName:"p"},"information")," we need to remember at a later point in time.\nSuch information might be the current theme or the logged-in user.\nIn AgileTs a State gets created with the help\nof an instantiated ",Object(r.b)("a",{parentName:"p",href:"/documents/docs/core/agile-instance"},"Agile Instance")," often called ",Object(r.b)("inlineCode",{parentName:"p"},"App"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const MY_FIRST_STATE = App.createState("Hello World");\n')),Object(r.b)("p",null,"After a successful instantiation of our State, we can dynamically and easily manipulate its value."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'MY_FIRST_STATE.set("Hello There"); // Set State Value to "Hello There"\nMY_FIRST_STATE.undo(); // Undo latest change\nMY_FIRST_STATE.is("Hello World"); // Check if State has a specific Value\nMY_FIRST_STATE.persist(); // Persist State Value into Storage\n')),Object(r.b)("h3",{id:"-live-example"},"\ud83d\udd34 Live Example"),Object(r.b)("p",null,"In the following snippet we will create our first AgileTs ",Object(r.b)("a",{parentName:"p",href:"/documents/docs/core/state"},"State")," which has the initial\nvalue ",Object(r.b)("inlineCode",{parentName:"p"},"Hello World"),". Next to the ",Object(r.b)("inlineCode",{parentName:"p"},"Hello World")," output, we have provided a button that incrementally raises a number and attaches\nit to the ",Object(r.b)("inlineCode",{parentName:"p"},"Hello World")," State. In case you have any further questions, take a look into the ",Object(r.b)("a",{parentName:"p",href:"#-important-code-snippets"},"Important Code Snippets")," Section, or join our awesome ",Object(r.b)("a",{parentName:"p",href:"https://discord.gg/T9GzreAwPH"},"Community Discord")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"// Let's start by creating an Agile Instance\nconst App = new Agile();\n\n// Now we are able to build our first State which has the intial value \"Hello World\"\nconst MY_FIRST_STATE = App.createState(\"Hello World\");\nlet helloWorldCount = 0;\n\nconst RandomComponent = () => {\n    // With the 'useAgile' Hook we bind our just created State to the 'RandomComponent'\n    const myFirstState = useAgile(MY_FIRST_STATE);\n\n    return (\n        <div>\n            <p>{myFirstState}</p>\n            <button\n                onClick={() => {\n                    // Here we just update our State Value\n                    MY_FIRST_STATE.set(`Hello World ${++helloWorldCount}`);\n                }}\n            >\n                Update State\n            </button>\n        </div>\n    );\n}\n\nrender(<RandomComponent/>);\n")),Object(r.b)("p",null,"To find out more about States, checkout our ",Object(r.b)("a",{parentName:"p",href:"/documents/docs/core/state"},"State")," docs."),Object(r.b)("h3",{id:"-important-code-snippets"},"\ud83d\udcbb Important Code Snippets"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const App = new Agile();\n")),Object(r.b)("p",null,"Before we can create any State, we have to instantiate an AgileTs Instance. Such an Instance holds and manages\nall our States, Collections, .. Be aware that you should avoid having multiple Agile Instances in one application!"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const MY_FIRST_STATE = App.createState("Hello World");\n')),Object(r.b)("p",null,"With the help of our previously instantiate AgileTs Instance, we can create our first State. Our State got the initial value ",Object(r.b)("inlineCode",{parentName:"p"},"'Hello World'"),", which we passed as first property."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const myFirstState = useAgile(MY_FIRST_STATE);\n")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/documents/docs/react/hooks#useagile"},Object(r.b)("inlineCode",{parentName:"a"},"useAgile"))," is React Hook to bind our State to a specific React\nComponent. This binding is necessary to rerender the Component whenever our State mutates. For instance, if its value changes.\n",Object(r.b)("inlineCode",{parentName:"p"},"useAgile")," returns the current ",Object(r.b)("inlineCode",{parentName:"p"},"output")," of the State, so in our case 'Hello World'. Be aware that React Hooks can only be used in React Components!\nFor class component users we have created the ",Object(r.b)("a",{parentName:"p",href:"/documents/docs/react/AgileHOC"},"AgileHOC"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"MY_FIRST_STATE.set(`Hello World ${++helloWorldCount}`);\n")),Object(r.b)("p",null,"To bring some life into our small application, we update the State with the help of the ",Object(r.b)("inlineCode",{parentName:"p"},"set")," function and pass our desired new\nvalue as first property."),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("br",null),Object(r.b)("h2",{id:"-create-first-collection"},"\ud83d\udca1 Create first Collection"),Object(r.b)("h3",{id:"-what-is-a-collection"},"\u2753 What is a Collection"),Object(r.b)("p",null,"A Collection is like an array of object-shaped data following the same pattern. A use case might be to store a flexible todo list or the messages of a chat. It gets created with the help of an\ninstantiated ",Object(r.b)("a",{parentName:"p",href:"/documents/docs/core/agile-instance"},"Agile Instance")," often called ",Object(r.b)("inlineCode",{parentName:"p"},"App"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const MY_COLLECTION = App.createCollection();\n")),Object(r.b)("p",null,"After a successful instantiation of our Collection, we can dynamically and easily manipulate its value."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'TODOS.collect({id: "id1", todo: "Clean Bathroom"}); // Add new Data\nTODOS.update("id1", {todo: "Clean Room"}); // Update already collected Data\nTODOS.remove("id1").everywhere(); // Remove Data at \'id1\'\nTODOS.persist(); // Persist Collection Value into Storage\n')),Object(r.b)("p",null,"Be aware that each collected data has to be in object shape and needs a unique primary key like an ",Object(r.b)("inlineCode",{parentName:"p"},"id"),". Each collected data is automatically\ntransformed into a new State, representing the value it was collected as. A so-called Item has the same\nfunctionalities as a normal State."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"MY_COLLECTION.getItem('id1').patch({todo: \"Clean Bathroom\"})\n")),Object(r.b)("p",null,"Besides Items, a Collection consists primarily of Groups, which allows us to split the Collection into multiple individual sections without\nlosing redundant behavior. Each Item will be added to the ",Object(r.b)("inlineCode",{parentName:"p"},"default")," Group, which represents the default Collection pattern.  But a Group doesn't store the Item itself. It only holds the primary keys of the data it represents."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const USER_TODOS = TODOS.createGroup("user-todos", ["id1", "id2"]); // TODOS of a specifc User\nconst TODAY_TODOS = TODOS.createGroup("today-todos", ["id3", "id2", "id5"]); // TODOS for Today\n')),Object(r.b)("h3",{id:"-live-example-1"},"\ud83d\udd34 Live Example"),Object(r.b)("p",null,"In the code snippet below, we create a basic Todo ",Object(r.b)("a",{parentName:"p",href:"/documents/docs/core/collection"},"Collection"),". To\nfeet it with new todos, we have a text input and an ",Object(r.b)("inlineCode",{parentName:"p"},"add")," button in the UI layer.\nNext to each singe todo, you can find a ",Object(r.b)("inlineCode",{parentName:"p"},"remove")," button,\nwhich removes the todo from our Collection. In case you have any further questions,\ntake a look into the ",Object(r.b)("a",{parentName:"p",href:"#-important-code-snippets"},"Important Code Snippets")," Section, or join our awesome ",Object(r.b)("a",{parentName:"p",href:"https://discord.gg/T9GzreAwPH"},"Community Discord")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},"// Let's start by creating our Agile Instance \nconst App = new Agile();\n\n// Now we are able to build our first Collection\nconst TODOS = App.createCollection({\n  initialData: [{id: 1, name: \"Clean Bathroom\"}]\n}).persist('todos');\n\nconst RandomComponent = () => {\n    // With the 'useAgile' Hook we bind our first Collection to the 'RandomComponent'\n    const todos = useAgile(TODOS);\n\n    // Current Input of Name Form\n    const [currentInput, setCurrentInput] = React.useState(\"\");\n\n    return (\n        <div>\n            <h3>Simple TODOS</h3>\n            <input type=\"text\" name=\"name\" value={currentInput} onChange={(event) => {\n                setCurrentInput(event.target.value);\n            }}/>\n            <button onClick={() => {\n              if(currentInput === '') return;\n                \n              // Add new Todo to the Collection based on the current Input\n              TODOS.collect({id: generateId(), name: currentInput});\n              setCurrentInput('');\n            }}>\n                Add\n            </button>\n            {\n                todos.map((value) =>\n                    <div key={value.id} style={{marginBottom: 10}}>\n                        <div>{value.name}</div>\n                        <button style={{margin: 0}}  onClick={() => {\n                         // Remove Item at specific primary Key\n                         TODOS.remove(value.id).everywhere();\n                       }}>\n                        Remove\n                      </button>\n                    </div>\n                )\n            }\n        </div>\n    );\n}\n\nrender(<RandomComponent/>);\n")),Object(r.b)("p",null,"To find out more about Collections, checkout our ",Object(r.b)("a",{parentName:"p",href:"/documents/docs/core/collection"},"Collection"),"\ndocs."),Object(r.b)("h3",{id:"-important-code-snippets-1"},"\ud83d\udcbb Important Code Snippets"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const MY_FIRST_COLLECTION = App.createCollection({\n  initialData: [{id: 1, name: "Clean Bathroom"}]\n}).persist();\n')),Object(r.b)("p",null,"To create our first Collection, we need the previously instantiated Instance of AgileTs. Then we can bring our\nfirst Collection to life, which got the initial Item ",Object(r.b)("inlineCode",{parentName:"p"},'{id: 1, name: "Clean Bathroom"}'),". Besides the creation, we store the\nCollection in the ",Object(r.b)("inlineCode",{parentName:"p"},"localStorage"),"\nwith the help of the ",Object(r.b)("inlineCode",{parentName:"p"},"persist")," function."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const myFirstCollection = useAgile(MY_FIRST_COLLECTION);\n")),Object(r.b)("p",null,"Here we use the ",Object(r.b)("a",{parentName:"p",href:"/documents/docs/react/hooks#useagile"},Object(r.b)("inlineCode",{parentName:"a"},"useAgile"))," React Hook to bind our Collection to the\nReact Component. In the case of a Collection, it returns the ",Object(r.b)("inlineCode",{parentName:"p"},"default")," Group value in array shape."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"}," MY_FIRST_COLLECTION.collect({id: generateId(), name: currentInput});\n")),Object(r.b)("p",null,"To add new Data to our Collection, we use the ",Object(r.b)("inlineCode",{parentName:"p"},"collect")," function.\nIn our case the ",Object(r.b)("em",{parentName:"p"},"currentInput")," with a random Id as primaryKey."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"TODOS.remove(value.id).everywhere();\n")),Object(r.b)("p",null,"In case we have done a todo, of course, we want to remove it.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"remove")," function helps us to reach this goal.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"everywhere()")," tag means that the Item will be removed from the whole Collection."),Object(r.b)("h2",{id:"-more"},"\ud83d\udd0d More"),Object(r.b)("p",null,"AgileTs got your attention, and you want to learn more. Don't hesitate to check out the docs below."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/documents/docs/core"},"core")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/documents/docs/react"},"react"))))}b.isMDXComponent=!0},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||r;return a?o.a.createElement(m,c(c({ref:t},s),{},{components:a})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<r;s++)l[s]=a[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},173:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},195:function(e,t,a){"use strict";var n=a(0),o=a(196);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},196:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},202:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(195),l=a(173),c=a(66),i=a.n(c);var s=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,u=e.values,b=e.groupId,d=e.className,m=Object(r.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,f=Object(n.useState)(c),g=f[0],j=f[1],v=n.Children.toArray(e.children),y=[];if(null!=b){var C=h[b];null!=C&&C!==g&&u.some((function(e){return e.value===C}))&&j(C)}var T=function(e){var t=e.target,a=y.indexOf(t),n=v[a].props.value;j(n),null!=b&&(O(b,n),setTimeout((function(){var e,a,n,o,r,l,c,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,r=e.right,l=window,c=l.innerHeight,s=l.innerWidth,a>=0&&r<=s&&o<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i.a.tabItemActive),setTimeout((function(){return t.classList.remove(i.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,a;switch(e.keyCode){case p:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case s:var o=y.indexOf(e.target)-1;a=y[o]||y[y.length-1]}null===(t=a)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},d)},u.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:N,onFocus:T,onClick:T},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},203:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);