(window.webpackJsonp=window.webpackJsonp||[]).push([[11,8,69],{168:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(172),c=a(16),i=a(30),l=a(194),s=a(3),u=a(8),m=a(173),d=a(174),p=a(195),b=a(199),f=a(200),g=a(7),h=function(){return{scrollX:g.a.canUseDOM?window.pageXOffset:0,scrollY:g.a.canUseDOM?window.pageYOffset:0}},v=function(e,t){void 0===t&&(t=[]);var a=Object(r.useState)(h()),n=a[0],o=a[1],c=function(){var t=h();o(t),e&&e(t)};return Object(r.useEffect)((function(){var e={passive:!0};return window.addEventListener("scroll",c,e),function(){return window.removeEventListener("scroll",c,e)}}),t),n},k=a(181),E=a(234),y=a(206),O=function(e){return n.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),n.a.createElement("g",{fill:"#7a7a7a"},n.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},j=a(201),w=a(176),C=a(88),_=a.n(C);var N=function e(t,a){return"link"===t.type?Object(d.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function T(e){var t,a,o,c=e.item,i=e.onItemClick,l=e.collapsible,d=e.activePath,p=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),b=c.items,f=c.label,g=N(c,d),h=(a=g,o=Object(r.useRef)(a),Object(r.useEffect)((function(){o.current=a}),[a]),o.current),v=Object(r.useState)((function(){return!!l&&(!g&&c.collapsed)})),k=v[0],E=v[1],y=Object(r.useRef)(null),O=Object(r.useState)(void 0),j=O[0],w=O[1],C=function(e){var t;void 0===e&&(e=!0),w(e?(null===(t=y.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(r.useEffect)((function(){g&&!h&&k&&E(!1)}),[g,h,k]);var T=Object(r.useCallback)((function(e){e.preventDefault(),j||C(),setTimeout((function(){return E((function(e){return!e}))}),100)}),[j]);return 0===b.length?null:n.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":k}),key:f},n.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(t={"menu__link--sublist":l,"menu__link--active":l&&g},t[_.a.menuLinkText]=!l,t)),onClick:l?T:void 0,href:l?"#!":void 0},p),f),n.a.createElement("ul",{className:"menu__list",ref:y,style:{height:j},onTransitionEnd:function(){k||C(!1)}},b.map((function(e){return n.a.createElement(D,{tabIndex:k?"-1":"0",key:e.label,item:e,onItemClick:i,collapsible:l,activePath:d})}))))}function S(e){var t,a=e.item,r=e.onItemClick,o=e.activePath,c=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),i=a.href,l=a.label,d=N(a,o);return n.a.createElement("li",{className:"menu__list-item",key:l},n.a.createElement(k.a,Object(s.a)({className:Object(m.a)("menu__link",(t={"menu__link--active":d},t[_.a.menuLinkExternal]=!Object(E.a)(i),t)),to:i},Object(E.a)(i)&&{isNavLink:!0,exact:!0,onClick:r},c),l))}function D(e){switch(e.item.type){case"category":return n.a.createElement(T,e);case"link":default:return n.a.createElement(S,e)}}var A=function(e){var t,a,o=e.path,c=e.sidebar,i=e.sidebarCollapsible,l=void 0===i||i,s=e.onCollapse,u=e.isHidden,g=Object(r.useState)(!1),h=g[0],k=g[1],E=Object(d.useThemeConfig)(),C=E.navbar.hideOnScroll,N=E.hideableSidebar,T=Object(p.a)().isAnnouncementBarClosed,S=v().scrollY;Object(b.a)(h);var A=Object(f.a)();return Object(r.useEffect)((function(){A===f.b.desktop&&k(!1)}),[A]),n.a.createElement("div",{className:Object(m.a)(_.a.sidebar,(t={},t[_.a.sidebarWithHideableNavbar]=C,t[_.a.sidebarHidden]=u,t))},C&&n.a.createElement(y.a,{tabIndex:-1,className:_.a.sidebarLogo}),n.a.createElement("div",{className:Object(m.a)("menu","menu--responsive","thin-scrollbar",_.a.menu,(a={"menu--show":h},a[_.a.menuWithAnnouncementBar]=!T&&0===S,a))},n.a.createElement("button",{"aria-label":h?Object(w.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(w.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){k(!h)}},h?n.a.createElement("span",{className:Object(m.a)(_.a.sidebarMenuIcon,_.a.sidebarMenuCloseIcon)},"\xd7"):n.a.createElement(j.a,{className:_.a.sidebarMenuIcon,height:24,width:24})),n.a.createElement("ul",{className:"menu__list"},c.map((function(e){return n.a.createElement(D,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),k(!1)},collapsible:l,activePath:o})})))),N&&n.a.createElement("button",{type:"button",title:Object(w.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(w.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(m.a)("button button--secondary button--outline",_.a.collapseSidebarButton),onClick:s},n.a.createElement(O,{className:_.a.collapseSidebarButtonIcon})))},L=a(218),I=a(243),P=a(24),x=a(90),U=a.n(x);function B(e){var t,a,i,s,u,p=e.currentDocRoute,b=e.versionMetadata,f=e.children,g=Object(c.default)(),h=g.siteConfig,v=g.isClient,k=b.pluginId,E=b.permalinkToSidebar,y=b.docsSidebars,j=b.version,C=E[p.path],_=y[C],N=Object(r.useState)(!1),T=N[0],S=N[1],D=Object(r.useState)(!1),I=D[0],P=D[1],x=Object(r.useCallback)((function(){I&&P(!1),S(!T)}),[I]);return n.a.createElement(l.a,{key:v,wrapperClassName:"main-docs-wrapper",searchMetadatas:{version:j,tag:Object(d.docVersionSearchTag)(k,j)}},n.a.createElement("div",{className:U.a.docPage},_&&n.a.createElement("div",{className:Object(m.a)(U.a.docSidebarContainer,(t={},t[U.a.docSidebarContainerHidden]=T,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(U.a.docSidebarContainer)&&T&&P(!0)},role:"complementary"},n.a.createElement(A,{key:C,sidebar:_,path:p.path,sidebarCollapsible:null===(a=null===(i=h.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===a||a,onCollapse:x,isHidden:I}),I&&n.a.createElement("div",{className:U.a.collapsedDocSidebar,title:Object(w.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(w.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:x,onClick:x},n.a.createElement(O,{className:U.a.expandSidebarButtonIcon}))),n.a.createElement("main",{className:Object(m.a)(U.a.docMainContainer,(s={},s[U.a.docMainContainerEnhanced]=T,s))},n.a.createElement("div",{className:Object(m.a)("container padding-vert--lg",U.a.docItemWrapper,(u={},u[U.a.docItemWrapperEnhanced]=T,u))},n.a.createElement(o.a,{components:L.a},f)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,o=t.find((function(e){return Object(P.matchPath)(r.pathname,e)}));return o?n.a.createElement(B,{currentDocRoute:o,versionMetadata:a},Object(i.a)(t)):n.a.createElement(I.default,e)}},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=r,b=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return a?n.a.createElement(b,i(i({ref:t},s),{},{components:a})):n.a.createElement(b,i({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},182:function(e,t,a){var r=a(175),n=r.Agile,o=r.generateId,c=a(184),i=c.AgileHOC,l=c.useAgile,s=c.useEvent,u=c.useWatcher,m=a(204).toast,d="https://github.com/agile-ts",p={copyright:"Created with \ud83d\udc9c in Germany     |    Copyright \xa9 "+(new Date).getFullYear()+' <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DevBenno">BennoDev</a>',meta:{title:"Spacy State Manager",image:"/img/meta.png",description:"AgileTs is a global open source State and Logic Framework, which makes State Management fast, easy and overall fun.",color:"#6c69a0"},domain:"https://agile-ts.org",githubOrgUrl:d,githubUrl:d+"/agile",githubDocsUrl:d+"/documentation",npmCoreUrl:"https://www.npmjs.com/package/@agile-ts/core",discordUrl:"https://discord.gg/T9GzreAwPH",stackoverflowUrl:"https://stackoverflow.com/questions/tagged/agile-ts",twitterUrl:"https://twitter.com/AgileFramework",version:"0.0.1",announcementBarContent:'If you like AgileTs, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/agile-ts/agile">GitHub</a> \ud83c\udf89 !\ufe0f',liveCodeScope:{Agile:n,useAgile:l,useEvent:s,useWatcher:u,AgileHOC:i,generateId:o,toast:m}},b={title:"AgileTs",tagline:"AgileTs is a global, simple, spacy State and Logic Framework",url:p.domain,baseUrlIssueBanner:!1,baseUrl:"/",onBrokenLinks:"throw",favicon:"img/favicon.ico",organizationName:"AgileTs",projectName:"agilets",themes:["@docusaurus/theme-live-codeblock"],plugins:["docusaurus-plugin-sass"],customFields:Object.assign({},p),themeConfig:{hideableSidebar:!0,algolia:{apiKey:"6b7b98565bb82e16996fd185f378d618",indexName:"agile-ts"},colorMode:{defaultMode:"dark",disableSwitch:!1,respectPrefersColorScheme:!1},announcementBar:{id:"github-star",content:p.announcementBarContent,backgroundColor:"#9c9abf"},prism:{theme:a(209),darkTheme:a(210)},navbar:{title:" ",hideOnScroll:!0,logo:{alt:"My Site Logo",src:"img/logo.svg"},items:[{label:"Get Started",position:"left",items:[{label:"Installation",to:"/docs/installation/"},{label:"React",to:"/docs/quick-start/react/"},{label:"Style Guide",to:"/docs/style-guide/"},{label:"Examples",to:"/docs/examples/"}]},{label:"Community",position:"left",items:[{label:"GitHub",href:p.githubUrl},{label:"Discord",href:p.discordUrl},{label:"Stack Overflow",href:p.stackoverflowUrl},{label:"Twitter",href:p.twitterUrl}]},{label:"Documentation",position:"left",to:"docs/introduction/"}]},footer:{copyright:p.copyright,style:"dark",links:[{title:"Docs",items:[{label:"Get Started",to:"docs/introduction"}]},{title:"Community",items:[{label:"Stack Overflow",href:p.stackoverflowUrl},{label:"Discord",href:p.discordUrl},{label:"Twitter",href:p.twitterUrl}]},{title:"More",items:[{label:"Blog",to:"/blog/"},{label:"GitHub",href:p.githubUrl}]}]},googleAnalytics:{trackingID:"UA-189394644-1",anonymizeIP:!0}},presets:[["@docusaurus/preset-classic",{docs:{path:"docs",admonitions:{icons:"emoji"},sidebarPath:189,editUrl:p.githubDocsUrl+"/tree/develop",showLastUpdateAuthor:!1,showLastUpdateTime:!0,remarkPlugins:[[a(211),{sync:!0}]]},blog:{showReadingTime:!0,editUrl:p.githubDocsUrl+"/tree/develop"},theme:{customCss:[38]}}]]};e.exports=Object.assign({},b)},185:function(e,t,a){"use strict";var r={};a.r(r),a.d(r,"THEME_TYPE",(function(){return v})),a.d(r,"THEME",(function(){return k})),a.d(r,"ASTRONAUT_DARK",(function(){return E}));var n={};a.r(n),a.d(n,"toggleTheme",(function(){return y})),a.d(n,"toggleAstronautColor",(function(){return O})),a.d(n,"mutateThemeCssProperties",(function(){return j})),a.d(n,"assignDefaultCssProperties",(function(){return w}));var o={};a.r(o),a.d(o,"GET_GITHUB_STATS",(function(){return A})),a.d(o,"GET_NPM_DOWNLOADS_IN_RANGE",(function(){return L}));var c={};a.r(c),a.d(c,"NPM_DOWNLOADS",(function(){return I})),a.d(c,"GITHUB_STARS",(function(){return P})),a.d(c,"GITHUB_FORKS",(function(){return x}));var i={};a.r(i),a.d(i,"getGithubStats",(function(){return M})),a.d(i,"getNPMDownloads",(function(){return F}));var l=a(175),s=a(184),u=a.n(s),m=a(187),d=new l.Agile({logConfig:{active:Object(m.a)(),level:l.Logger.level.WARN}}).integrate(u.a),p={black:"#18191a",blackLight:"#202026",blackLighter:"#2a2a32",white:"#ffffff",whiteDark:"#e6e6fd",whiteDarker:"#c5c5e9",purpleLightest:"#9C9ABF",purpleLighter:"#8481AF",purpleLight:"#7C79AA",purple:"#6C69A0",purpleDark:"#5F5C92",purpleDarker:"#5A578A",purpleDarkest:"#4A4872",orange:"#EE8030",green:"#00CCB1",greenDark:"#00B89F",red:"#FF6262",redDark:"#DE5B5B",yellow:"#FEEC4C",grayDarkest:"#262630",grayDark:"#3c3c4c"},b={12:".75rem",14:".875rem",16:"1rem",18:"1.125rem",20:"1.25rem",24:"1.5rem",28:"1.75rem",30:"1.875rem",32:"2rem",36:"2.25rem",40:"2.5rem",48:"3rem",56:"3.5rem",64:"4rem",72:"4.5rem"},f=Object.assign({},b,{small:b[14],body:b[16],large:b[20],display:b[48],displaySmall:b[24],displayLarge:b[72]}),g={themes:{dark:{fontSizes:f,primitiveColors:p,colors:{primary:p.purpleLight,primary_2:p.purpleLighter,on_primary:p.black,background:p.black,background_2:p.blackLight,background_3:p.blackLighter,on_background:p.white,on_background_2:p.purpleLightest,on_background_3:p.purpleLight,surface:p.grayDarkest,surface_2:p.grayDark,on_surface:p.white,on_surface_2:p.purpleLightest,on_surface_3:p.purpleLighter,success:p.green,on_success:p.black,error:p.red,on_error:p.black}},light:{fontSizes:f,primitiveColors:p,colors:{primary:p.purpleDark,primary_2:p.purpleDarker,on_primary:p.white,background:p.white,background_2:p.whiteDark,background_3:p.whiteDarker,on_background:p.black,on_background_2:p.purpleDarkest,on_background_3:p.purpleDarker,surface:p.whiteDark,surface_2:p.whiteDarker,on_surface:p.black,on_surface_2:p.purpleDarkest,on_surface_3:p.purpleDarker,success:p.greenDark,on_success:p.white,error:p.redDark,on_error:p.white}}},primitiveColors:p,fontSizes:f},h=a(182),v=d.createState(h.themeConfig.colorMode.defaultMode).persist("theme").watch("mutateColor",(function(e){k.set(g.themes[e])})),k=d.createState(g.themes[v.value]).watch("mutateColor",(function(e){j(e)})),E=d.createState(!1),y=function(e){v.set(e?"dark":"light")},O=function(e){E.set(e)},j=function(e){document.documentElement.style.setProperty("--ifm-background-color",e.colors.background),document.documentElement.style.setProperty("--ifm-background-color-light",e.colors.background_2),document.documentElement.style.setProperty("--ifm-background-color-lighter",e.colors.background_3),document.documentElement.style.setProperty("--ifm-font-color-base",e.colors.on_background)},w=function(e){j(e),document.documentElement.style.setProperty("--ifm-color-primary",e.primitiveColors.purple),document.documentElement.style.setProperty("--ifm-color-primary-dark",e.primitiveColors.purpleDark),document.documentElement.style.setProperty("--ifm-color-primary-darker",e.primitiveColors.purpleDarker),document.documentElement.style.setProperty("--ifm-color-primary-darkest",e.primitiveColors.purpleDarkest),document.documentElement.style.setProperty("--ifm-color-primary-light",e.primitiveColors.purpleLight),document.documentElement.style.setProperty("--ifm-color-primary-lighter",e.primitiveColors.purpleLighter),document.documentElement.style.setProperty("--ifm-color-primary-lightest",e.primitiveColors.purpleLightest)},C=Object.assign({},n,r),_=a(179),N=a(180),T=a.n(N),S=a(212),D=new(a.n(S).a)({timeout:1e4,options:{credentials:void 0}}),A=function(){var e=Object(_.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.with({baseURL:"https://api.github.com"}).get("repos/agile-ts/agile");case 2:return t=e.sent,e.abrupt("return",{stars:t.data.stargazers_count||0,forks:t.data.forks_count||0});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(_.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.with({baseURL:"https://api.npmjs.org"}).get("downloads/point/"+t+"/@agile-ts/core");case 2:return a=e.sent,e.abrupt("return",a.data.downloads||0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=d.createState(0).persist("npm-downloads"),P=d.createState(0).persist("github-stars"),x=d.createState(0).persist("github-forks"),U=function(e){return e.toISOString().slice(0,10)},B=function(e,t){for(var a,r=[];e<t;)r.push(U(e)+":"+U(((a=e).setMonth(a.getMonth()+1),a)));return r},M=function(){var e=Object(_.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:return t=e.sent,P.set(t.stars),x.set(t.forks),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(_.a)(T.a.mark((function e(t,a){var r,n,o,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t&&(t=new Date("2020-08-24")),void 0===a&&(a=new Date),r=B(t,a),n=r.pop(),e.next=6,Promise.all(r.map((function(e){return L(e)})).concat(L(n)));case 6:return o=e.sent,c=o.reduce((function(e,t){return e+t}),0),I.set(c),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),H=a(190),R={ui:C,stats:Object.assign({},i,c,o,H)};Object(l.globalBind)("__core__",R);t.a=R},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(0),n=a.n(r),o=a(23),c=a(177),i=a(174);function l(e){var t=e.title,a=e.description,r=e.keywords,l=e.image,s=Object(i.useTitleFormatter)(t),u=Object(c.a)(l,{absolute:!0});return n.a.createElement(o.a,null,t&&n.a.createElement("title",null,s),t&&n.a.createElement("meta",{property:"og:title",content:s}),a&&n.a.createElement("meta",{name:"description",content:a}),a&&n.a.createElement("meta",{property:"og:description",content:a}),r&&n.a.createElement("meta",{name:"keywords",content:Array.isArray(r)?r.join(","):r}),l&&n.a.createElement("meta",{property:"og:image",content:u}),l&&n.a.createElement("meta",{name:"twitter:image",content:u}),l&&n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},187:function(e,t,a){"use strict";function r(e){for(var t=e.length,a=null,r=0;0!==t;)r=Math.floor(Math.random()*t),a=e[t-=1],e[t]=e[r],e[r]=a;return e}function n(){return!1}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},188:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(382),c=a(2),i=a(61),l=a.n(i),s=a(173);t.a=function(e){var t=e.to,a=e.className,r=Object(c.k)();return n.a.createElement("button",{className:Object(s.a)(l.a.ButtonContainer,a),onClick:function(){t.startsWith("http")?window.open(t,"_blank"):r.push(t)}},n.a.createElement(o.b,{className:l.a.GithubIcon}),n.a.createElement("div",null,"GITHUB"))}},189:function(e,t){e.exports={docs:[{type:"category",label:"AgileTs",collapsed:!1,items:["main/introduction","main/installation","main/style-guide","main/contributing"]},{type:"category",label:"Quick Start",collapsed:!1,items:["quick_start/react","quick_start/vue"]},{type:"category",label:"Packages",items:[{type:"category",label:"core",items:["packages/core/introduction","packages/core/installation",{type:"category",label:"Features",items:[{type:"category",label:"Agile Instance",items:["packages/core/features/agile-instance/introduction","packages/core/features/agile-instance/properties","packages/core/features/agile-instance/methods"]},{type:"category",label:"State",items:["packages/core/features/state/introduction","packages/core/features/state/properties","packages/core/features/state/methods"]},{type:"category",label:"Collection",items:["packages/core/features/collection/introduction","packages/core/features/collection/methods","packages/core/features/collection/properties",{type:"category",label:"Group",items:["packages/core/features/collection/group/introduction","packages/core/features/collection/group/methods","packages/core/features/collection/group/properties"]},{type:"category",label:"Selector",items:["packages/core/features/collection/selector/introduction","packages/core/features/collection/selector/methods","packages/core/features/collection/selector/properties"]}]},{type:"category",label:"Computed",items:["packages/core/features/computed/introduction","packages/core/features/computed/methods","packages/core/features/computed/properties"]},{type:"category",label:"Event",items:["packages/core/features/event/introduction","packages/core/features/event/methods"]},{type:"category",label:"Storage",items:["packages/core/features/storage/introduction","packages/core/features/storage/methods"]},{type:"category",label:"Integration",items:["packages/core/features/integration/introduction","packages/core/features/integration/methods"]}]}]},{type:"category",label:"api",items:["packages/api/introduction","packages/api/installation"]},{type:"category",label:"multieditor",items:["packages/multieditor/introduction","packages/multieditor/installation"]},{type:"category",label:"react",items:["packages/react/introduction","packages/react/installation",{type:"category",label:"Features",items:["packages/react/features/hooks","packages/react/features/agileHOC"]}]}]},{type:"category",label:"Examples",items:["examples/introduction",{type:"category",label:"react",items:["examples/react/all"]},{type:"category",label:"react-native",items:["examples/react-native/all"]}]},"interfaces"]}},190:function(e,t){},191:function(e,t,a){"use strict";var r=a(3),n=a(0),o=a.n(n),c=a(173),i=a(205),l=a(208),s=a(198),u=a(199),m=a(200),d=a(216),p=a(206),b=a(57),f=a.n(b),g=a(16),h=a(201),v=a(2),k=a(185),E="right",y=a(58),O=a.n(y),j=a(382),w=function(e){var t=e.className,a=Object(g.default)().siteConfig;return o.a.createElement("div",{className:Object(c.a)(t,O.a.IconContainer)},o.a.createElement(j.b,{className:O.a.Icon,onClick:function(){window.open(a.customFields.githubUrl,"_blank")}}),o.a.createElement(j.a,{className:O.a.Icon,onClick:function(){window.open(a.customFields.discordUrl,"_blank")}}))},C=a(213),_=a(59),N=a.n(_);var T=function(e){var t=Object(n.useState)("scrollbar2000")[0];return function(e){window.onscroll=function(){var t=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById(e).style.width=t+"%"}}(t),o.a.createElement("div",{className:N.a.ProgressbarContainer},o.a.createElement("div",{className:N.a.Progressbar,id:t}))};t.a=function(){var e=Object(g.default)().siteConfig,t=e.themeConfig.navbar.items,a=Object(n.useState)(!1),b=a[0],y=a[1],O=Object(n.useState)(!1),j=O[0],_=O[1],N=Object(m.a)(),S=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:E)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:E)}))}}(t),D=S.leftItems,A=S.rightItems,L=Object(s.a)(),I=L.isDarkTheme,P=L.setLightTheme,x=L.setDarkTheme,U=Object(v.k)();Object(u.a)(b);var B=Object(n.useCallback)((function(){y(!0)}),[]),M=Object(n.useCallback)((function(){y(!1)}),[]),F=Object(n.useCallback)((function(e){e.target.checked?(x(),k.a.ui.toggleTheme(!0)):(P(),k.a.ui.toggleTheme(!1))}),[P,x]);return Object(n.useEffect)((function(){N===m.b.desktop&&y(!1)}),[N]),o.a.createElement("nav",{className:Object(c.a)("navbar","navbar--fixed-top",{"navbar-sidebar--show":b})},o.a.createElement("div",{className:Object(c.a)("navbar__inner",f.a.InnerContainer)},o.a.createElement("div",{className:"navbar__items"},o.a.createElement(p.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),o.a.createElement("a",{className:Object(c.a)("navbar__brand",f.a.BrandText),onClick:function(){return U.push("/")}},e.title),D.map((function(e,t){return o.a.createElement(d.a,Object(r.a)({},e,{key:t}))}))),o.a.createElement("div",{className:"navbar__items navbar__items--right"},A.map((function(e,t){return o.a.createElement(d.a,Object(r.a)({},e,{key:t}))})),o.a.createElement(w,{className:f.a.displayOnlyInLargeViewport}),o.a.createElement(l.a,{"aria-label":"Dark mode toggle",checked:I,onChange:F}),o.a.createElement(i.a,{handleSearchBarToggle:_,isSearchBarExpanded:j})),o.a.createElement(C.a,null,(function(){return o.a.createElement(T,null)}))),null!=t&&0!==t.length&&o.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:B,onKeyDown:B},o.a.createElement(h.a,null)),o.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:M}),o.a.createElement("div",{className:"navbar-sidebar"},o.a.createElement("div",{className:"navbar-sidebar__brand"},o.a.createElement("a",{className:Object(c.a)("navbar__brand",f.a.BrandText),href:"/"},e.title),o.a.createElement(w,null)),o.a.createElement("div",{className:"navbar-sidebar__items"},o.a.createElement("div",{className:"menu"},o.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){return o.a.createElement(d.a,Object(r.a)({mobile:!0},e,{onClick:M,key:t}))})))))))}},192:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(173),c=a(16),i=a(60),l=a.n(i),s=a(188),u=a(3),m=a(177),d=a(62),p=a.n(d),b=function(e){var t=e.href,a=e.to,r=e.label,o=Object(m.a)(null!=t?t:"",{forcePrependBaseUrl:void 0}),c=Object(m.a)(null!=a?a:"");return n.a.createElement("a",Object(u.a)({className:p.a.LinkText},null!=t?{href:o,rel:"noopener noreferrer",target:"_blank"}:{href:c},e),r)};t.a=function(){var e=Object(c.default)().siteConfig,t=e.themeConfig.footer,a=t.copyright,r=t.links,i=void 0===r?[]:r;return!!e.themeConfig.footer?n.a.createElement("footer",{className:Object(o.a)("footer",l.a.Container)},n.a.createElement("div",{className:l.a.InnerContainer},n.a.createElement("div",{className:l.a.ContentContainer},n.a.createElement("div",{className:l.a.FooterLeft},n.a.createElement("div",{className:l.a.BrandContainer},n.a.createElement("img",{className:l.a.BrandImage,alt:"AgileTs Logo",height:35,width:35,src:"/img/logo.svg",title:e.tagline}),n.a.createElement("div",{className:l.a.BrandText},"AgileTs")),n.a.createElement("div",{className:l.a.Tagline},e.tagline),n.a.createElement(s.a,{className:l.a.GithubButton,to:e.customFields.githubUrl})),n.a.createElement("div",{className:l.a.FooterRight},i.map((function(e,t){var a;return n.a.createElement("div",{className:l.a.SectionContainer,key:t},null!=e.title&&n.a.createElement("li",{className:l.a.LinkItemTitle},e.title),null===(a=e.items)||void 0===a?void 0:a.map((function(e){var t;return n.a.createElement("ul",{className:l.a.LinkItemContainer,key:null!==(t=e.href)&&void 0!==t?t:e.to},n.a.createElement(b,e))})))})))),n.a.createElement("div",{className:l.a.BottomContainer},n.a.createElement("div",{className:l.a.CopyrightText,dangerouslySetInnerHTML:{__html:a}})))):null}},193:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.height||100;return n.a.createElement("div",{style:{height:t}})}},194:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(173),c=a(176),i=a(24),l=a(63),s=a.n(l);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var m=function(){var e=Object(r.useRef)(null),t=Object(i.useLocation)();return Object(r.useEffect)((function(){t.hash||u(e.current)}),[t.pathname]),n.a.createElement("div",{ref:e},n.a.createElement("a",{href:"#main",className:s.a.skipToContent,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},n.a.createElement(c.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},d=a(207),p=a(191),b=a(192),f=a(215),g=a(3),h=a(23),v=a(16),k=a(177);function E(e){var t=e.locale,a=e.version,r=e.tag,o=t;return n.a.createElement(h.a,null,o&&n.a.createElement("meta",{name:"docsearch:language",content:o}),a&&n.a.createElement("meta",{name:"docsearch:version",content:a}),r&&n.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var y=a(186),O=a(174);function j(){var e=Object(v.default)().i18n,t=e.defaultLocale,a=e.locales,r=Object(O.useAlternatePageUtils)();return n.a.createElement(h.a,null,a.map((function(e){return n.a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),n.a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function w(e){var t=e.permalink,a=Object(v.default)().siteConfig.url,r=function(){var e=Object(v.default)().siteConfig.url,t=Object(i.useLocation)().pathname;return e+Object(k.a)(t)}(),o=t?""+a+t:r;return n.a.createElement(h.a,null,n.a.createElement("meta",{property:"og:url",content:o}),n.a.createElement("link",{rel:"canonical",href:o}))}function C(e){var t=Object(v.default)(),a=t.siteConfig,r=t.i18n,o=r.currentLocale,c=r.localeConfigs,i=a.favicon,l=a.themeConfig,s=l.image,u=l.metadatas,m=e.title,d=e.description,p=e.image,b=e.keywords,f=e.searchMetadatas,C=Object(k.a)(i),_=o,N=c[o].direction;return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,null,n.a.createElement("html",{lang:_,dir:N}),i&&n.a.createElement("link",{rel:"shortcut icon",href:C})),n.a.createElement(y.a,{title:m,description:d,keywords:b,image:p||s}),n.a.createElement(w,null),n.a.createElement(j,null),n.a.createElement(E,Object(g.a)({tag:O.DEFAULT_SEARCH_TAG,locale:o},f)),n.a.createElement(h.a,null,u.map((function(e,t){return n.a.createElement("meta",Object(g.a)({key:"metadata_"+t},e))}))))}var _=a(214);a(64);t.a=function(e){var t=e.children,a=e.noFooter,r=e.wrapperClassName;return Object(_.a)(),n.a.createElement(f.a,null,n.a.createElement(C,e),n.a.createElement(m,null),n.a.createElement(d.a,null),n.a.createElement(p.a,null),n.a.createElement("div",{className:Object(o.a)("main-wrapper",r)},t),!a&&n.a.createElement(b.a,null))}},218:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(181),c=a(226),i=a(8),l=a(173),s=a(176),u=a(174),m=(a(68),a(69)),d=a.n(m),p=function(e){return function(t){var a,r=t.id,o=Object(i.a)(t,["id"]),c=Object(u.useThemeConfig)().navbar.hideOnScroll;return r?n.a.createElement(e,o,n.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(l.a)("anchor",(a={},a[d.a.enhancedAnchor]=!c,a)),id:r}),o.children,n.a.createElement("a",{className:"hash-link",href:"#"+r,title:Object(s.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):n.a.createElement(e,o)}},b={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?n.a.createElement(c.a,e):n.a.createElement("code",e):t},a:function(e){return n.a.createElement(o.a,e)},pre:function(e){var t=e.children;return n.a.createElement(c.a,null==t?void 0:t.props)},h1:p("h1"),h2:p("h2"),h3:p("h3"),h4:p("h4"),h5:p("h5"),h6:p("h6")};t.a=b},222:function(e,t,a){"use strict";var r=a(182),n=a.n(r),o=a(0),c=a.n(o),i=Object.assign({},Object.assign({React:c.a},c.a),n.a.customFields.liveCodeScope);t.a=i},224:function(e,t,a){"use strict";var r=a(3),n=a(0),o=a(221),c=a(173),i=a(65),l=a.n(i),s=a(193),u=a(219);t.a=function(e){var t=e.children,a=e.transformCode,i=e.theme||Object(u.a)();return n.createElement(o.d,Object(r.a)({code:t.replace(/\n$/,""),transformCode:a||function(e){return e+";"},theme:i,noInline:!0},e),n.createElement("div",{className:Object(c.a)(l.a.Header,l.a.EditorHeader)},"Live Editor"),n.createElement(o.a,{className:l.a.Editor}),n.createElement(s.a,{height:30}),n.createElement("div",{className:Object(c.a)(l.a.Header,l.a.PreviewHeader)},"Result"),n.createElement("div",{className:l.a.PreviewContainer},n.createElement(o.c,null),n.createElement(o.b,null)))}},243:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(194),c=a(176);t.default=function(){return n.a.createElement(o.a,{title:"Page Not Found"},n.a.createElement("main",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--6 col--offset-3"},n.a.createElement("h1",{className:"hero__title"},n.a.createElement(c.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.a.createElement("p",null,n.a.createElement(c.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.a.createElement("p",null,n.a.createElement(c.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);