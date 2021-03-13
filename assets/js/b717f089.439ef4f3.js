(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),r=(n(0),n(172)),c={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/core/collection"},l={unversionedId:"packages/core/features/collection/introduction",id:"packages/core/features/collection/introduction",isDocsHomePage:!1,title:"Introduction",description:"WIP docs!",source:"@site/docs/packages/core/features/collection/Introduction.md",slug:"/core/collection",permalink:"/documentation/docs/core/collection",editUrl:"https://github.com/sid-r-singh/documentation/tree/develop/docs/packages/core/features/collection/Introduction.md",version:"current",lastUpdatedAt:1615632085,formattedLastUpdatedAt:"3/13/2021",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Methods",permalink:"/documentation/docs/core/state/methods"},next:{title:"Methods",permalink:"/documentation/docs/core/collection/methods"}},i=[{value:"\ud83d\udd28 Usage",id:"-usage",children:[]},{value:"\u26f3\ufe0f Sandbox",id:"\ufe0f-sandbox",children:[]},{value:"\ud83d\uddc2 Collection Classes",id:"-collection-classes",children:[{value:"\ud83d\udd39 Item",id:"-item",children:[]},{value:"\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66 Group",id:"-group",children:[]},{value:"\ud83d\udd2e Selector",id:"-selector",children:[]}]},{value:"\ud83d\udced Props",id:"-props",children:[{value:"<code>config</code>",id:"config",children:[]}]},{value:"\ud83d\udfe6 Typescript",id:"\ud83d\udfe6-typescript",children:[]}],s={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},"\ud83d\udd25"),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"WIP docs!"))),Object(r.b)("p",null,"A Collection holds a ",Object(r.b)("em",{parentName:"p"},"set")," of Information we need to remember at a later point in time.\nIt is designed for arrays of data objects following the same pattern.\nEach of these objects must have a ",Object(r.b)("strong",{parentName:"p"},"unique primaryKey")," to be correctly identified later.\nWe instantiate a Collection with help of an existing ",Object(r.b)("a",{parentName:"p",href:"/documentation/docs/core/agile-instance"},"Agile Instance")," often called ",Object(r.b)("inlineCode",{parentName:"p"},"App"),".\nBy doing so, the Collection is automatically bound to the Agile Instance it was created from."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const MY_COLLECTION = App.createCollection();\n")),Object(r.b)("p",null,"After we have successfully instantiated our Collection,\nwe can start working with it."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'MY_COLLECTION.collect({id: 1, name: "jeff"}); // Add Item to Collection\nMY_COLLECTION.remove(1).everywhere(); // Remove Item from Collection\nMY_COLLECTION.persist(); // Persists Collection Value into a Storage\n')),Object(r.b)("p",null,"If you want to find out more about the Collection's specific methods, check out the ",Object(r.b)("a",{parentName:"p",href:"/documentation/docs/core/collection/methods"},"Methods")," Section.\nMost methods we use to modify, mutate and access the Collection are chainable."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"MY_COLLECTION.collect({id: 1, name: \"jeff\"}).persist().removeGroup('myGroup').reset();\n")),Object(r.b)("h3",{id:"-usage"},"\ud83d\udd28 Usage"),Object(r.b)("p",null,"For instance a Collection can be used to remember a flexible array of Todo objects."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const TODOS = App.createCollection();\nTODOS.collect({id: 1, todo: "Clean bathroom"}, ["user1"]);\nTODOS.collect({id: 2, todo: "Write Agile docs"},  ["user1"]);\n// <- cleand bathroom\nTODOS.remove(1).everywhere();\n')),Object(r.b)("p",null,"In the example above, we create a simple ",Object(r.b)("inlineCode",{parentName:"p"},"TODO")," Collection.\nAfter the instantiation, we add two todos to it\nand specify that both todos remain to the ",Object(r.b)("inlineCode",{parentName:"p"},"user1")," ",Object(r.b)("a",{parentName:"p",href:"#groups"},"Group"),".\nWe do that to keep track of which todo relates to which user.\nNow that we ",Object(r.b)("inlineCode",{parentName:"p"},"cleaned our bathroom"),",\nwe remove the todo related to the id ",Object(r.b)("inlineCode",{parentName:"p"},"1")," from the Collection and all Groups (everywhere)."),Object(r.b)("h3",{id:"\ufe0f-sandbox"},"\u26f3\ufe0f Sandbox"),Object(r.b)("p",null,"Test the Collection yourself. It's only one click away. Just select your preferred Framework below."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://codesandbox.io/s/agilets-first-collection-uyi9g"},"React")),Object(r.b)("li",{parentName:"ul"},"Vue (coming soon)"),Object(r.b)("li",{parentName:"ul"},"Angular (coming soon)")),Object(r.b)("h2",{id:"-collection-classes"},"\ud83d\uddc2 Collection Classes"),Object(r.b)("p",null,"A Collection consists of several classes, all of which perform important tasks."),Object(r.b)("h3",{id:"-item"},"\ud83d\udd39 Item"),Object(r.b)("p",null,"Each Data Object we add to our Collection (for example, with the ",Object(r.b)("inlineCode",{parentName:"p"},"collect()")," method)\nautomatically becomes an ",Object(r.b)("inlineCode",{parentName:"p"},"Item")," and gets directly stored in a so-called ",Object(r.b)("inlineCode",{parentName:"p"},"data")," object in the Collection."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"{\n  99: Item(99) // has value '{id: 99, name: \"frank\"}'\n  1: Item(1)  // has value '{id: 1, name: \"jeff\"}'\n  2: Item(2) // has value '{id: 2, name: \"hans\"}'\n}\n")),Object(r.b)("p",null,"It is best not to touch the ",Object(r.b)("inlineCode",{parentName:"p"},"data")," object at all\nand use the functions provided by the Collection to mutate and get access to it instead.\nFor instance, there are many ways to access our collected Items."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("h4",{parentName:"li",id:"getitem"},Object(r.b)("inlineCode",{parentName:"h4"},"getItem()")),Object(r.b)("p",{parentName:"li"},"Returns a Item at a specific ",Object(r.b)("inlineCode",{parentName:"p"},"primary Key")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-ts"}," MY_COLLECTION.getItem(/* primary Key */); // Returns Item at the primary Key\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("h4",{parentName:"li",id:"getallitems"},Object(r.b)("inlineCode",{parentName:"h4"},"getAllItems()")),Object(r.b)("p",{parentName:"li"},"Returns all Items"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-ts"}," MY_COLLECTION.getAllItems(); // Returns '[Item(99), Item(1), Item(2)]'\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("h4",{parentName:"li",id:"getallitemvalues"},Object(r.b)("inlineCode",{parentName:"h4"},"getAllItemValues()")),Object(r.b)("p",{parentName:"li"},"Returns the values of all Items"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-ts"},' MY_COLLECTION.getAllItemValues(); // Returns (see below)\n /* [\n      {id: 99, name: "frank"}, \n      {id: 1, name: "jeff"}, \n      {id: 2, name: "hans"}\n    ]\n */\n')))),Object(r.b)("p",null,"The most remarkable thing about Items is that they are an extension of the ",Object(r.b)("inlineCode",{parentName:"p"},"State Class"),",\nwhich means they provide the same powerful features."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"MY_COLLECTION.collect({id: 1, name: \"jeff\"}); // Collect Data\nconst myItem = MY_COLLECTION.getItem(1); // Returns Item at primaryKey '1'\nmyItem.value; // Returns '{id: 1, name: \"jeff\"}'\nmyItem.patch({name: \"frank\"}); // Update property 'name' in Item\nmyItem.undo(); // Undo latest change\n")),Object(r.b)("h3",{id:"-group"},"\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66 ",Object(r.b)("a",{parentName:"h3",href:"/documentation/docs/core/collection/group"},"Group")),Object(r.b)("p",null,"Often applications need to categorize and preserve the ordering of structured data.\nIn AgileTs, Groups are the cleanest way to do so.\nThey allow us to cluster together data from a Collection as an array of ",Object(r.b)("inlineCode",{parentName:"p"},"primary Keys"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const MY_GROUP = MY_COLLECTION.createGroup("groupName", [/* initial Items */]);\n')),Object(r.b)("p",null,"A Group is an extension of the ",Object(r.b)("inlineCode",{parentName:"p"},"State Class")," and offers the same powerful features."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"MY_STATE.undo(); // Undo latest change\nMY_GROUP.reset(); // Reset Group to its intial Value\nMY_STATE.persist(); // Persist Group Value into Storage\n")),Object(r.b)("p",null,"We access the Group output with help of the ",Object(r.b)("inlineCode",{parentName:"p"},"output")," property,\nsince the ",Object(r.b)("inlineCode",{parentName:"p"},"value")," property is used to hold the ",Object(r.b)("inlineCode",{parentName:"p"},"primaryKeys"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'MY_GROUP.value; // Returns [1, 20, 5]\nMY_GROUP.output; // Returns (see below)\n/* [\n     {id: 1, name: "frank"}, \n     {id: 20, name: "jeff"}, \n     {id: 5, name: "hans"}\n    ]\n*/\n')),Object(r.b)("p",null,"For instance, we can use a Group to cluster a Post Collection into User Posts of the logged-in user."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"USERS.collect(user);\nPOSTS.collect(user.posts, user.id);\n")),Object(r.b)("p",null,"In the above code snippet, we have two Collections, one for users and another for posts.\nWe can collect posts specific to a user and group them automatically by the user's id."),Object(r.b)("h3",{id:"-selector"},"\ud83d\udd2e ",Object(r.b)("a",{parentName:"h3",href:"/documentation/docs/core/collection/selector"},"Selector")),Object(r.b)("p",null,"Sometimes we need access to one specific Item of a Collection in the long term.\nTherefore, AgileTs offers the Selector."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const MY_SELECTOR = MY_COLLECTION.createSelector("Selector name",  /* to select primary Key */);\n')),Object(r.b)("p",null,"A Selector is an extension of the ",Object(r.b)("inlineCode",{parentName:"p"},"State Class"),",\nwhich represents one specific Item of the Collection until the Item gets deleted, or we select another one."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const mySelector = MY_COLLECTION.select(1); // Returns extension of the Item at primaryKey '1'\nmySelector.patch({name: \"frank\"}); // Update property 'name' in Item\n")),Object(r.b)("p",null,"For instance, a Selector finds its use to select the currently logged-in user from a User Collection."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"USERS.select(/* current logged-in userId */);\n")),Object(r.b)("h2",{id:"-props"},"\ud83d\udced Props"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"App.createCollection(config);\n")),Object(r.b)("h3",{id:"config"},Object(r.b)("inlineCode",{parentName:"h3"},"config")),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"Collection")," takes an optional configuration object as its only parameter.\nThere are two different ways of configuring a Collection. Both have their advantages."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"1.")," The plain ",Object(r.b)("em",{parentName:"p"},"object")," way, which is notorious for its ease of use.\nHere, we configure everything in a specific object. For instance, this makes the creation of Groups pretty straightforward.\nBut on the other hand, it gives us some limitations since we aren't creating and configuring the Groups and Selectors on our own.\nThe Collection takes care of it instead."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const Collection = App.createCollection({\nkey: 'dummyCollection',\ngroup: [\"dummyGroup\"]\n})\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"2.")," The ",Object(r.b)("em",{parentName:"p"},"function")," way, where a function, which has the Collection as  first parameter, returns the configuration object.\nThis gives us more freedom in configuring Instances like Groups,\nsince we have access to the Collection and can create them on our own."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const Collection = App.createCollection((collection) => ({\nkey: \'dummyCollection\',\ngroup: {\n   dummyGroup: collection.Group(["item1", "item2"])\n }\n}))\n')))),Object(r.b)("p",null,"Here is a Typescript Interface of the configuration object for quick reference,\nhowever each property will be explained in more detail below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"export interface CreateCollectionConfigInterface<DataType = DefaultItem> {\n  groups?: { [key: string]: Group<any> } | string[];\n  selectors?: { [key: string]: Selector<any> } | string[];\n  key?: CollectionKey;\n  primaryKey?: string;\n  defaultGroupKey?: GroupKey;\n  initialData?: Array<DataType>;\n}\n")),Object(r.b)("br",null),Object(r.b)("h4",{id:"groups"},Object(r.b)("inlineCode",{parentName:"h4"},"groups")),Object(r.b)("p",null,"The initial ",Object(r.b)("a",{parentName:"p",href:"#groups"},"Groups")," of our Collection are defined with this property's help.\nThere are two different ways of doing so.\nThe first one is to pass an Array of Group names/keys,\nwhere AgileTs takes care of the Group's creation and names them after the previously passed names."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const MY_COLLECTION = App.createCollection({\n  groups: ["myGroup1", "myGroup2"]\n});\n')),Object(r.b)("p",null,"The way mentioned above has some limitations, since we can't configure the Groups on our own.\nLuckily there is a second way, where we have access to the Collection itself."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const MY_COLLECTION = App.createCollection((collection) => ({\n  key: \'dummyCollection\',\n  group: {\n    myGroup1: collection.Group(["item1", "item2"]),\n    myGroup2: collection.Group(["item5", "item2", "item6"])\n  }\n}));\n')),Object(r.b)("p",null,"With the help of the Collection, we can 'instantiate' the Groups on our own,\nwhich gives us much more freedom in configuring them."),Object(r.b)("br",null),Object(r.b)("h4",{id:"selectors"},Object(r.b)("inlineCode",{parentName:"h4"},"selectors")),Object(r.b)("p",null,"The initial ",Object(r.b)("a",{parentName:"p",href:"#selectors"},"Selectors")," of our Collection are defined with this property's help.\nAs with the ",Object(r.b)("inlineCode",{parentName:"p"},"groups")," property, there are two different ways of doing so.\nThe first one is to pass an Array of Selector names/keys,\nwhere AgileTs takes care of the Selector's creation and names them after the previously passed names."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const MY_COLLECTION = App.createCollection({\n  selectors: ["mySelector1", "mySelector2"]\n});\n')),Object(r.b)("p",null,"The way mentioned above has some limitations, since we can't configure the Selectors on our own.\nLuckily there is a second way, where we have access to the Collection which gets created."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const MY_COLLECTION = App.createCollection((collection) => ({\n  key: \'dummyCollection\',\n  selectors: {\n    mySelector1: collection.Selector("item1"),\n    mySelector2: collection.Selector("item3")\n  }\n}));\n')),Object(r.b)("p",null,"With the help of the Collection, we can 'instantiate' the Selectors on our own,\nwhich gives us much more freedom in configuring them."),Object(r.b)("br",null),Object(r.b)("h4",{id:"key"},Object(r.b)("inlineCode",{parentName:"h4"},"key")),Object(r.b)("p",null,"The name/key is an optional property that is used to identify a specific Collection.\nSuch key is pretty useful during debug sessions or if we persist our Collection,\nit automatically uses the Collection ",Object(r.b)("inlineCode",{parentName:"p"},"key")," as persist key.\nWe recommend giving each Collection a unique ",Object(r.b)("inlineCode",{parentName:"p"},"key"),", since it has only advantages."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const MY_COLLECTION = App.createCollection({\n  key: "myKey"\n});\n')),Object(r.b)("br",null),Object(r.b)("h4",{id:"primarykey"},Object(r.b)("inlineCode",{parentName:"h4"},"primaryKey")),Object(r.b)("p",null,"Defines which property's value in collected data will be selected as ",Object(r.b)("inlineCode",{parentName:"p"},"primaryKey"),".\nBy default, it is ",Object(r.b)("inlineCode",{parentName:"p"},"id"),". A ",Object(r.b)("inlineCode",{parentName:"p"},"primaryKey")," identifies a specific Item, and has to be part of each collected data."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const MY_COLLECTION = App.createCollection({\n  primaryKey: "key"\n});\nMY_COLLECTION.collect({key: 1, name: "hans"});\n//                      ^\n//                      |\n// primary Key ----------\n')),Object(r.b)("br",null),Object(r.b)("h4",{id:"defaultgroupkey"},Object(r.b)("inlineCode",{parentName:"h4"},"defaultGroupKey")),Object(r.b)("p",null,"Describes the name/key of the default ",Object(r.b)("a",{parentName:"p",href:"#group"},"Group"),".\nThe default Group represents all Items of the Collection.\nBy default, it is ",Object(r.b)("inlineCode",{parentName:"p"},"default"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const MY_COLLECTION = App.createCollection({\n  defaultGroupKey: "allItemsOfCollectionKey"\n});\n')),Object(r.b)("br",null),Object(r.b)("h4",{id:"initialdata"},Object(r.b)("inlineCode",{parentName:"h4"},"initialData")),Object(r.b)("p",null,"The initial Data of our Collection."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'const MY_COLLECTION = App.createCollection({\n  initialData: [{id: 1, name: "hans"}, {id: 2, name: "frank"}]\n});\n')),Object(r.b)("h2",{id:"\ud83d\udfe6-typescript"},"\ud83d\udfe6 Typescript"),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"Collection")," is almost 100% typesafe and takes an optional generic type for type safety\nthat has to be followed by each collected data object."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},'interface UserInterface {\n  id: number,\n  name: string\n}\nconst MY_COLLECTION = App.createState<UserInterface>();\nMY_COLLECTION.collect({id: "invalidType", animal: "Lion"}); // Error\nMY_COLLECTION.collect({id: 1, name: "hans"}); // Success\n')))}p.isMDXComponent=!0},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||r;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);