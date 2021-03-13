(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(8),r=(n(0),n(172)),i={id:"style-guide",title:"Style Guide",sidebar_label:"Style Guide",slug:"/style-guide"},s={unversionedId:"main/style-guide",id:"main/style-guide",isDocsHomePage:!1,title:"Style Guide",description:"AgileTs isn't bound to any specific Style-Guide, but there are some you may get inspired from.",source:"@site/docs/main/StyleGuide.md",slug:"/style-guide",permalink:"/documents/docs/style-guide",editUrl:"https://github.com/sid-r-singh/documentation/tree/develop/docs/main/StyleGuide.md",version:"current",lastUpdatedAt:1615629686,formattedLastUpdatedAt:"3/13/2021",sidebar_label:"Style Guide",sidebar:"docs",previous:{title:"Installation",permalink:"/documents/docs/installation"},next:{title:"Contributing",permalink:"/documents/docs/contributing"}},c=[{value:"\ud83d\ude80 Inspiration 1",id:"-inspiration-1",children:[]},{value:"\ud83d\udcc1 api",id:"-api",children:[{value:"\ud83d\udcdd index.ts",id:"-indexts",children:[]}]},{value:"\ud83d\udcc1 entities",id:"-entities",children:[{value:"\ud83d\udcdd index.ts",id:"-indexts-1",children:[]},{value:"\ud83d\udcdd .action.ts",id:"-actionts",children:[]},{value:"\ud83d\udcdd .controller.ts",id:"-controllerts",children:[]},{value:"\ud83d\udcdd .interface.ts",id:"-interfacets",children:[]},{value:"\ud83d\udcdd .route.ts",id:"-routets",children:[]}]},{value:"\ud83d\udcdd app.ts",id:"-appts",children:[]},{value:"\ud83d\udcdd index.ts",id:"-indexts-2",children:[]},{value:"\ud83d\ude80 Inspiration 2",id:"-inspiration-2",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},"\u2139\ufe0f"),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"AgileTs isn't bound to any specific Style-Guide"),", but there are some you may get inspired from."))),Object(r.b)("p",null,"To give you an idea of possible structures for applications using AgileTs as a state management framework,\nwe have prepared some inspiration guides for you.\nFeel free to choose one of them and adapt it to your needs."),Object(r.b)("h2",{id:"-inspiration-1"},"\ud83d\ude80 Inspiration 1"),Object(r.b)("p",null,"In this Style-Guide, we have a so-called ",Object(r.b)("inlineCode",{parentName:"p"},"core")," at the top-level of our ",Object(r.b)("inlineCode",{parentName:"p"},"src")," folder beside our UI-Components.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"core")," is thought to be the brain of our application and should contain all business logic\nand logic in general, that isn't specifically bound to a Component.\nThis outsourcing of our logic makes our code more decoupled,\nportable, and above all easy testable."),Object(r.b)("p",null,"Below you can see where our ",Object(r.b)("inlineCode",{parentName:"p"},"core")," should be located."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js",metastring:'{3} title="MyApp"',"{3}":!0,title:'"MyApp"'},"my-app\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 core\n\u2502   \u2514\u2500\u2500 render\n.\n")),Object(r.b)("p",null,"To represent the ",Object(r.b)("inlineCode",{parentName:"p"},"core")," for a better understanding visual, I use one of a TODO application.\nThis application has two main ",Object(r.b)("a",{parentName:"p",href:"#%F0%9F%93%81-entities"},"Entities"),", that can be handled by AgileTs.\nThe ",Object(r.b)("strong",{parentName:"p"},"User")," and of course the ",Object(r.b)("strong",{parentName:"p"},"TODO-Item"),". These two parts are mapped in our ",Object(r.b)("inlineCode",{parentName:"p"},"core"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js",metastring:'title="TodoList-Core"',title:'"TodoList-Core"'},"core\n\u2502\u2500\u2500 api\n\u2502   \u251c\u2500\u2500 index.ts\n\u2502\u2500\u2500 entities\n\u2502  \u2514\u2500\u2500 todo\n\u2502  |    \u251c\u2500\u2500 index.ts\n\u2502  |    \u2514\u2500\u2500 todo.actions.ts\n|  |    \u2514\u2500\u2500 todo.controller.ts\n|  |    \u2514\u2500\u2500 todo.interface.ts\n|  |    \u2514\u2500\u2500 todo.routes.ts\n\u2502  \u2514\u2500\u2500 user\n\u2502       \u251c\u2500\u2500 index.ts\n\u2502       \u2514\u2500\u2500 user.actions.ts\n|       \u2514\u2500\u2500 user.controller.ts\n|       \u2514\u2500\u2500 user.interface.ts\n|       \u2514\u2500\u2500 user.routes.ts\n|\u2500\u2500 app.ts\n|\u2500\u2500 index.ts\n.\n")),Object(r.b)("p",null,"Each property that you can find in the above shown graph, is described in detail below \u2b07\ufe0f."),Object(r.b)("h2",{id:"-api"},"\ud83d\udcc1 api"),Object(r.b)("p",null,"Our Todo-List has to communicate to a ",Object(r.b)("strong",{parentName:"p"},"Backend"),", therefore we need something that creates http/s requests for us.\nI am using the ",Object(r.b)("a",{parentName:"p",href:"/documents/docs/api"},"AgileTs API")," but you can use whatever you want."),Object(r.b)("h3",{id:"-indexts"},"\ud83d\udcdd index.ts"),Object(r.b)("p",null,"To make simple rest calls possible, we initialize our api class here.\nThese defined API instance gets mainly used in the ",Object(r.b)("a",{parentName:"p",href:"#%F0%9F%93%9D-.routes.ts"},"route")," section of an Entity."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},"import API from '@agile-ts/api';\n\nconst api = new API({\n    baseURL: 'http://localhost:5000',\n    timeout: 10000,\n    options: {\n        credentials: undefined,\n    },\n});\n\nexport default api;\n\n")),Object(r.b)("h2",{id:"-entities"},"\ud83d\udcc1 entities"),Object(r.b)("p",null,"Our ",Object(r.b)("inlineCode",{parentName:"p"},"core")," consists of several entities, which exist apart from each other, having their own independent existence. Each\nEntity manages its Data separately by doing rest calls or mutating States. This separation makes our ",Object(r.b)("inlineCode",{parentName:"p"},"core")," more\nstructured, readable, and improves maintainability."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"For instance:")," ",Object(r.b)("br",null),"\nA ",Object(r.b)("em",{parentName:"p"},"User Entity")," should only treat the whole logic of the User and shouldn't do rest calls for the ",Object(r.b)("em",{parentName:"p"},"Todo Entity"),"."),Object(r.b)("h3",{id:"-indexts-1"},"\ud83d\udcdd index.ts"),Object(r.b)("p",null,"Here we just export all ",Object(r.b)("a",{parentName:"p",href:"#%F0%9F%93%9D-.action.ts"},"actions"),", ",Object(r.b)("a",{parentName:"p",href:"#%F0%9F%93%9D-.routes.ts"},"routes"),", ",Object(r.b)("a",{parentName:"p",href:"#%F0%9F%93%9D-.interface.ts"},"interfaces")," and\nthe ",Object(r.b)("a",{parentName:"p",href:"#%F0%9F%93%9D-.controller.ts"},"controller"),". To properly import them in our UI-Layer later."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts in \ud83d\udcc1todo"',title:'"index.ts',in:!0,'\ud83d\udcc1todo"':!0},'import * as actions from "./todo.actions";\nimport * as controller from "./todo.controller";\nimport * as routes from "./todo.routes";\nimport * as interfaces from "./todo.interface";\n\nexport default {\n    ...actions,\n    ...controller,\n    ...routes,\n    ...interfaces,\n};\n')),Object(r.b)("h3",{id:"-actionts"},"\ud83d\udcdd .action.ts"),Object(r.b)("p",null,"An action is any piece of code that modifies our ",Object(r.b)("inlineCode",{parentName:"p"},"State"),".\nIn principle, actions always happen in response to an event. For example, a button got clicked."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"For instance:")," ",Object(r.b)("br",null),"\nThe creation of a Todo-Item in the UI-Layer triggers the ",Object(r.b)("inlineCode",{parentName:"p"},"addTodo")," action, which then mutates our State and makes rest calls."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo.action.ts in \ud83d\udcc1todo"',title:'"todo.action.ts',in:!0,'\ud83d\udcc1todo"':!0},"import {TodoInterface} from './todo.interface';\nimport {ADD_TODO} from './todo.routes';\nimport {TODOS} from './todo.controller';\n\nexport const addTodo = async (userId: string, description: string): Promise<void> => {\n    // Rest Call\n    const response = await ADD_TODO({description: description, userId: userId});\n\n    // Add Todo to Collection\n    TODOS.collect(todo, userId);\n};\n\n// ..\n\n")),Object(r.b)("h3",{id:"-controllerts"},"\ud83d\udcdd .controller.ts"),Object(r.b)("p",null,"The Controller of an Entity holds and controls States, Collections, .. for that Entity.\nThese Agile Sub Instances might get modified by ",Object(r.b)("a",{parentName:"p",href:"#%F0%9F%93%9D-.action.ts"},"actions")," or bound to a Component in the UI-Layer."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo.controller.ts in \ud83d\udcc1todo"',title:'"todo.controller.ts',in:!0,'\ud83d\udcc1todo"':!0},"import {App} from '../../app';\nimport {TodoInterface} from './todo.interface';\nimport {CURRENT_USER} from '../user'\n\n// Holds all existing TODO's\nexport const TODOS = App.createCollection<TodoInterface>()();\n\n// Holds all TODO's that belong to the current logged in USER\nexport const USER_TODOS = App.createComputed(() => {\n    return TodosCollection.getGroup(CURRENT_USER.value.id).output;\n});\n")),Object(r.b)("h3",{id:"-interfacets"},"\ud83d\udcdd .interface.ts"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},"\u2139\ufe0f"),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"interface")," section can be ignored by non ",Object(r.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"Typescript")," users!"))),Object(r.b)("p",null,"If you are a ",Object(r.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"Typescript")," user, you properly want to create an interface for your entity.\nThese interfaces belonging to this entity should be defined here."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"For instance")," ",Object(r.b)("br",null),"\nIn case of the TODO-Entity, it contains a ",Object(r.b)("em",{parentName:"p"},"TodoInterface"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo.interface.ts in \ud83d\udcc1todo"',title:'"todo.interface.ts',in:!0,'\ud83d\udcc1todo"':!0},"export interface TodoInterface {\n    id: string\n    userId: string\n    description: string\n    creationDate: string\n}\n")),Object(r.b)("h3",{id:"-routets"},"\ud83d\udcdd .route.ts"),Object(r.b)("p",null,"To communicate to our server, we have to create ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"rest calls"),".\nFor better maintainability, these rest calls are provided here in function shape\nand should only be used in ",Object(r.b)("a",{parentName:"p",href:"#%F0%9F%93%9D-.action.ts"},"actions")," of the Entity.\nIt's not recommended calling them from outside the corresponding Entity."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo.route.ts in \ud83d\udcc1todo"',title:'"todo.route.ts',in:!0,'\ud83d\udcc1todo"':!0},'import {TodoInterface} from "./todo.interface";\nimport api from "../../api";\n\ninterface AddTodoPayloadInterface {\n    description: string,\n    userId: string\n}\n\nexport const ADD_TODO = async (payload: AddTodoPayloadInterface): Promise<TodoInterface> => {\n    const response = await api.post(\'todos\', payload);\n    return response.data.body.todo;\n}\n\n// ..\n\n')),Object(r.b)("h2",{id:"-appts"},"\ud83d\udcdd app.ts"),Object(r.b)("p",null,"In this file, we create our main ",Object(r.b)("inlineCode",{parentName:"p"},"Agile Instance")," and configure it to meet our needs.\nFor example, we determine here with which UI framework AgileTs works together.\nStates, Collections, etc. then can be created with help of this Instance.\n",Object(r.b)("strong",{parentName:"p"},"It's not recommended having multiple ",Object(r.b)("inlineCode",{parentName:"strong"},"Agile Instances")," in one Application!!")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.ts"',title:'"app.ts"'},'import {Agile} from "@agile-ts/core";\nimport reactIntegration from "@agile-ts/react";\n\nexport const App = new Agile({logJobs: true}).use(reactIntegration);\n')),Object(r.b)("h2",{id:"-indexts-2"},"\ud83d\udcdd index.ts"),Object(r.b)("p",null,"Here we export our ",Object(r.b)("inlineCode",{parentName:"p"},"core")," entities so that each entity can be reached without any detours.\nFor instance, we might import the ",Object(r.b)("inlineCode",{parentName:"p"},"core")," in our UI-Layer.\nThere we than just import our ",Object(r.b)("inlineCode",{parentName:"p"},"core")," and mutate each entity from it like ",Object(r.b)("inlineCode",{parentName:"p"},"core.todo.addTodo(/* */)"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},'import todo from "./controllers/todo";\nimport user from "./controllers/user";\nimport {globalBind} from "@agile-ts/core";\n\nconst core = {\n    todo: todo,\n    user: user,\n};\n\n// For better debugging you might want our core global (Don\'t do that in PRODUCTION!!)\nglobalBind("__core__", core);\n\nexport default core;\n')),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("br",null),Object(r.b)("h2",{id:"-inspiration-2"},"\ud83d\ude80 Inspiration 2"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},"\u2139\ufe0f"),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"There is no second Inspiration yet, but feel free to share your own 'style guide' inspiration here. Every contribution\nis welcome. :D"))))}d.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,m=p["".concat(i,".").concat(u)]||p[u]||b[u]||r;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);