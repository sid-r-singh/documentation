(window.webpackJsonp=window.webpackJsonp||[]).push([[69,8],{182:function(e,t,a){var r=a(175),n=r.Agile,o=r.generateId,c=a(184),l=c.AgileHOC,i=c.useAgile,s=c.useEvent,u=c.useWatcher,m=a(204).toast,d="https://github.com/sid-r-singh",p={copyright:"Created with \ud83d\udc9c in Germany     |    Copyright \xa9 "+(new Date).getFullYear()+' <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DevBenno">BennoDev</a>',meta:{title:"Spacy State Manager",image:"/img/meta.png",description:"AgileTs is a global open source State and Logic Framework, which makes State Management fast, easy and overall fun.",color:"#6c69a0"},domain:"https://sidrana.dev",githubOrgUrl:d,githubUrl:d+"/",githubDocsUrl:d+"/documentation",npmCoreUrl:"https://www.npmjs.com/package/@agile-ts/core",discordUrl:"https://discord.gg/T9GzreAwPH",stackoverflowUrl:"https://stackoverflow.com/questions/tagged/agile-ts",twitterUrl:"https://twitter.com/AgileFramework",version:"0.0.1",announcementBarContent:'If you like AgileTs, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/agile-ts/agile">GitHub</a> \ud83c\udf89 !\ufe0f',liveCodeScope:{Agile:n,useAgile:i,useEvent:s,useWatcher:u,AgileHOC:l,generateId:o,toast:m}},g={title:"AgileTs",tagline:"AgileTs is a global, simple, spacy State and Logic Framework",url:p.domain,baseUrlIssueBanner:!1,baseUrl:"/documentation/",onBrokenLinks:"throw",favicon:"img/favicon.ico",organizationName:"AgileTs",projectName:"agilets",themes:["@docusaurus/theme-live-codeblock"],plugins:["docusaurus-plugin-sass"],customFields:Object.assign({},p),themeConfig:{hideableSidebar:!0,algolia:{apiKey:"6b7b98565bb82e16996fd185f378d618",indexName:"agile-ts"},colorMode:{defaultMode:"dark",disableSwitch:!1,respectPrefersColorScheme:!1},announcementBar:{id:"github-star",content:p.announcementBarContent,backgroundColor:"#9c9abf"},prism:{theme:a(209),darkTheme:a(210)},navbar:{title:" ",hideOnScroll:!0,logo:{alt:"My Site Logo",src:"img/logo.svg"},items:[{label:"Get Started",position:"left",items:[{label:"Installation",to:"/docs/installation/"},{label:"React",to:"/docs/quick-start/react/"},{label:"Style Guide",to:"/docs/style-guide/"},{label:"Examples",to:"/docs/examples/"}]},{label:"Community",position:"left",items:[{label:"GitHub",href:p.githubUrl},{label:"Discord",href:p.discordUrl},{label:"Stack Overflow",href:p.stackoverflowUrl},{label:"Twitter",href:p.twitterUrl}]},{label:"Documentation",position:"left",to:"docs/introduction/"}]},footer:{copyright:p.copyright,style:"dark",links:[{title:"Docs",items:[{label:"Get Started",to:"docs/introduction"}]},{title:"Community",items:[{label:"Stack Overflow",href:p.stackoverflowUrl},{label:"Discord",href:p.discordUrl},{label:"Twitter",href:p.twitterUrl}]},{title:"More",items:[{label:"Blog",to:"/blog/"},{label:"GitHub",href:p.githubUrl}]}]},googleAnalytics:{trackingID:"UA-189394644-1",anonymizeIP:!0}},presets:[["@docusaurus/preset-classic",{docs:{path:"docs",admonitions:{icons:"emoji"},sidebarPath:189,editUrl:p.githubDocsUrl+"/tree/develop",showLastUpdateAuthor:!1,showLastUpdateTime:!0,remarkPlugins:[[a(211),{sync:!0}]]},blog:{showReadingTime:!0,editUrl:p.githubDocsUrl+"/tree/develop"},theme:{customCss:[38]}}]]};e.exports=Object.assign({},g)},185:function(e,t,a){"use strict";var r={};a.r(r),a.d(r,"THEME_TYPE",(function(){return k})),a.d(r,"THEME",(function(){return v})),a.d(r,"ASTRONAUT_DARK",(function(){return y}));var n={};a.r(n),a.d(n,"toggleTheme",(function(){return E})),a.d(n,"toggleAstronautColor",(function(){return _})),a.d(n,"mutateThemeCssProperties",(function(){return w})),a.d(n,"assignDefaultCssProperties",(function(){return C}));var o={};a.r(o),a.d(o,"GET_GITHUB_STATS",(function(){return A})),a.d(o,"GET_NPM_DOWNLOADS_IN_RANGE",(function(){return L}));var c={};a.r(c),a.d(c,"NPM_DOWNLOADS",(function(){return U})),a.d(c,"GITHUB_STARS",(function(){return I})),a.d(c,"GITHUB_FORKS",(function(){return P}));var l={};a.r(l),a.d(l,"getGithubStats",(function(){return F})),a.d(l,"getNPMDownloads",(function(){return G}));var i=a(175),s=a(184),u=a.n(s),m=a(187),d=new i.Agile({logConfig:{active:Object(m.a)(),level:i.Logger.level.WARN}}).integrate(u.a),p={black:"#18191a",blackLight:"#202026",blackLighter:"#2a2a32",white:"#ffffff",whiteDark:"#e6e6fd",whiteDarker:"#c5c5e9",purpleLightest:"#9C9ABF",purpleLighter:"#8481AF",purpleLight:"#7C79AA",purple:"#6C69A0",purpleDark:"#5F5C92",purpleDarker:"#5A578A",purpleDarkest:"#4A4872",orange:"#EE8030",green:"#00CCB1",greenDark:"#00B89F",red:"#FF6262",redDark:"#DE5B5B",yellow:"#FEEC4C",grayDarkest:"#262630",grayDark:"#3c3c4c"},g={12:".75rem",14:".875rem",16:"1rem",18:"1.125rem",20:"1.25rem",24:"1.5rem",28:"1.75rem",30:"1.875rem",32:"2rem",36:"2.25rem",40:"2.5rem",48:"3rem",56:"3.5rem",64:"4rem",72:"4.5rem"},f=Object.assign({},g,{small:g[14],body:g[16],large:g[20],display:g[48],displaySmall:g[24],displayLarge:g[72]}),b={themes:{dark:{fontSizes:f,primitiveColors:p,colors:{primary:p.purpleLight,primary_2:p.purpleLighter,on_primary:p.black,background:p.black,background_2:p.blackLight,background_3:p.blackLighter,on_background:p.white,on_background_2:p.purpleLightest,on_background_3:p.purpleLight,surface:p.grayDarkest,surface_2:p.grayDark,on_surface:p.white,on_surface_2:p.purpleLightest,on_surface_3:p.purpleLighter,success:p.green,on_success:p.black,error:p.red,on_error:p.black}},light:{fontSizes:f,primitiveColors:p,colors:{primary:p.purpleDark,primary_2:p.purpleDarker,on_primary:p.white,background:p.white,background_2:p.whiteDark,background_3:p.whiteDarker,on_background:p.black,on_background_2:p.purpleDarkest,on_background_3:p.purpleDarker,surface:p.whiteDark,surface_2:p.whiteDarker,on_surface:p.black,on_surface_2:p.purpleDarkest,on_surface_3:p.purpleDarker,success:p.greenDark,on_success:p.white,error:p.redDark,on_error:p.white}}},primitiveColors:p,fontSizes:f},h=a(182),k=d.createState(h.themeConfig.colorMode.defaultMode).persist("theme").watch("mutateColor",(function(e){v.set(b.themes[e])})),v=d.createState(b.themes[k.value]).watch("mutateColor",(function(e){w(e)})),y=d.createState(!1),E=function(e){k.set(e?"dark":"light")},_=function(e){y.set(e)},w=function(e){document.documentElement.style.setProperty("--ifm-background-color",e.colors.background),document.documentElement.style.setProperty("--ifm-background-color-light",e.colors.background_2),document.documentElement.style.setProperty("--ifm-background-color-lighter",e.colors.background_3),document.documentElement.style.setProperty("--ifm-font-color-base",e.colors.on_background)},C=function(e){w(e),document.documentElement.style.setProperty("--ifm-color-primary",e.primitiveColors.purple),document.documentElement.style.setProperty("--ifm-color-primary-dark",e.primitiveColors.purpleDark),document.documentElement.style.setProperty("--ifm-color-primary-darker",e.primitiveColors.purpleDarker),document.documentElement.style.setProperty("--ifm-color-primary-darkest",e.primitiveColors.purpleDarkest),document.documentElement.style.setProperty("--ifm-color-primary-light",e.primitiveColors.purpleLight),document.documentElement.style.setProperty("--ifm-color-primary-lighter",e.primitiveColors.purpleLighter),document.documentElement.style.setProperty("--ifm-color-primary-lightest",e.primitiveColors.purpleLightest)},O=Object.assign({},n,r),N=a(179),j=a(180),T=a.n(j),D=a(212),S=new(a.n(D).a)({timeout:1e4,options:{credentials:void 0}}),A=function(){var e=Object(N.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.with({baseURL:"https://api.github.com"}).get("repos/agile-ts/agile");case 2:return t=e.sent,e.abrupt("return",{stars:t.data.stargazers_count||0,forks:t.data.forks_count||0});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(N.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.with({baseURL:"https://api.npmjs.org"}).get("downloads/point/"+t+"/@agile-ts/core");case 2:return a=e.sent,e.abrupt("return",a.data.downloads||0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=d.createState(0).persist("npm-downloads"),I=d.createState(0).persist("github-stars"),P=d.createState(0).persist("github-forks"),B=function(e){return e.toISOString().slice(0,10)},x=function(e,t){for(var a,r=[];e<t;)r.push(B(e)+":"+B(((a=e).setMonth(a.getMonth()+1),a)));return r},F=function(){var e=Object(N.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:return t=e.sent,I.set(t.stars),P.set(t.forks),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(N.a)(T.a.mark((function e(t,a){var r,n,o,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t&&(t=new Date("2020-08-24")),void 0===a&&(a=new Date),r=x(t,a),n=r.pop(),e.next=6,Promise.all(r.map((function(e){return L(e)})).concat(L(n)));case 6:return o=e.sent,c=o.reduce((function(e,t){return e+t}),0),U.set(c),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),M=a(190),H={ui:O,stats:Object.assign({},l,c,o,M)};Object(i.globalBind)("__core__",H);t.a=H},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(0),n=a.n(r),o=a(23),c=a(177),l=a(174);function i(e){var t=e.title,a=e.description,r=e.keywords,i=e.image,s=Object(l.useTitleFormatter)(t),u=Object(c.a)(i,{absolute:!0});return n.a.createElement(o.a,null,t&&n.a.createElement("title",null,s),t&&n.a.createElement("meta",{property:"og:title",content:s}),a&&n.a.createElement("meta",{name:"description",content:a}),a&&n.a.createElement("meta",{property:"og:description",content:a}),r&&n.a.createElement("meta",{name:"keywords",content:Array.isArray(r)?r.join(","):r}),i&&n.a.createElement("meta",{property:"og:image",content:u}),i&&n.a.createElement("meta",{name:"twitter:image",content:u}),i&&n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},187:function(e,t,a){"use strict";function r(e){for(var t=e.length,a=null,r=0;0!==t;)r=Math.floor(Math.random()*t),a=e[t-=1],e[t]=e[r],e[r]=a;return e}function n(){return!1}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},188:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(382),c=a(2),l=a(61),i=a.n(l),s=a(173);t.a=function(e){var t=e.to,a=e.className,r=Object(c.k)();return n.a.createElement("button",{className:Object(s.a)(i.a.ButtonContainer,a),onClick:function(){t.startsWith("http")?window.open(t,"_blank"):r.push(t)}},n.a.createElement(o.b,{className:i.a.GithubIcon}),n.a.createElement("div",null,"GITHUB"))}},189:function(e,t){e.exports={docs:[{type:"category",label:"AgileTs",collapsed:!1,items:["main/introduction","main/installation","main/style-guide","main/contributing"]},{type:"category",label:"Quick Start",collapsed:!1,items:["quick_start/react","quick_start/vue"]},{type:"category",label:"Packages",items:[{type:"category",label:"core",items:["packages/core/introduction","packages/core/installation",{type:"category",label:"Features",items:[{type:"category",label:"Agile Instance",items:["packages/core/features/agile-instance/introduction","packages/core/features/agile-instance/properties","packages/core/features/agile-instance/methods"]},{type:"category",label:"State",items:["packages/core/features/state/introduction","packages/core/features/state/properties","packages/core/features/state/methods"]},{type:"category",label:"Collection",items:["packages/core/features/collection/introduction","packages/core/features/collection/methods","packages/core/features/collection/properties",{type:"category",label:"Group",items:["packages/core/features/collection/group/introduction","packages/core/features/collection/group/methods","packages/core/features/collection/group/properties"]},{type:"category",label:"Selector",items:["packages/core/features/collection/selector/introduction","packages/core/features/collection/selector/methods","packages/core/features/collection/selector/properties"]}]},{type:"category",label:"Computed",items:["packages/core/features/computed/introduction","packages/core/features/computed/methods","packages/core/features/computed/properties"]},{type:"category",label:"Event",items:["packages/core/features/event/introduction","packages/core/features/event/methods"]},{type:"category",label:"Storage",items:["packages/core/features/storage/introduction","packages/core/features/storage/methods"]},{type:"category",label:"Integration",items:["packages/core/features/integration/introduction","packages/core/features/integration/methods"]}]}]},{type:"category",label:"api",items:["packages/api/introduction","packages/api/installation"]},{type:"category",label:"multieditor",items:["packages/multieditor/introduction","packages/multieditor/installation"]},{type:"category",label:"react",items:["packages/react/introduction","packages/react/installation",{type:"category",label:"Features",items:["packages/react/features/hooks","packages/react/features/agileHOC"]}]}]},{type:"category",label:"Examples",items:["examples/introduction",{type:"category",label:"react",items:["examples/react/all"]},{type:"category",label:"react-native",items:["examples/react-native/all"]}]},"interfaces"]}},190:function(e,t){},191:function(e,t,a){"use strict";var r=a(3),n=a(0),o=a.n(n),c=a(173),l=a(205),i=a(208),s=a(198),u=a(199),m=a(200),d=a(216),p=a(206),g=a(57),f=a.n(g),b=a(16),h=a(201),k=a(2),v=a(185),y="right",E=a(58),_=a.n(E),w=a(382),C=function(e){var t=e.className,a=Object(b.default)().siteConfig;return o.a.createElement("div",{className:Object(c.a)(t,_.a.IconContainer)},o.a.createElement(w.b,{className:_.a.Icon,onClick:function(){window.open(a.customFields.githubUrl,"_blank")}}),o.a.createElement(w.a,{className:_.a.Icon,onClick:function(){window.open(a.customFields.discordUrl,"_blank")}}))},O=a(213),N=a(59),j=a.n(N);var T=function(e){var t=Object(n.useState)("scrollbar2000")[0];return function(e){window.onscroll=function(){var t=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById(e).style.width=t+"%"}}(t),o.a.createElement("div",{className:j.a.ProgressbarContainer},o.a.createElement("div",{className:j.a.Progressbar,id:t}))};t.a=function(){var e=Object(b.default)().siteConfig,t=e.themeConfig.navbar.items,a=Object(n.useState)(!1),g=a[0],E=a[1],_=Object(n.useState)(!1),w=_[0],N=_[1],j=Object(m.a)(),D=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:y)})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:y)}))}}(t),S=D.leftItems,A=D.rightItems,L=Object(s.a)(),U=L.isDarkTheme,I=L.setLightTheme,P=L.setDarkTheme,B=Object(k.k)();Object(u.a)(g);var x=Object(n.useCallback)((function(){E(!0)}),[]),F=Object(n.useCallback)((function(){E(!1)}),[]),G=Object(n.useCallback)((function(e){e.target.checked?(P(),v.a.ui.toggleTheme(!0)):(I(),v.a.ui.toggleTheme(!1))}),[I,P]);return Object(n.useEffect)((function(){j===m.b.desktop&&E(!1)}),[j]),o.a.createElement("nav",{className:Object(c.a)("navbar","navbar--fixed-top",{"navbar-sidebar--show":g})},o.a.createElement("div",{className:Object(c.a)("navbar__inner",f.a.InnerContainer)},o.a.createElement("div",{className:"navbar__items"},o.a.createElement(p.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),o.a.createElement("a",{className:Object(c.a)("navbar__brand",f.a.BrandText),onClick:function(){return B.push("/")}},e.title),S.map((function(e,t){return o.a.createElement(d.a,Object(r.a)({},e,{key:t}))}))),o.a.createElement("div",{className:"navbar__items navbar__items--right"},A.map((function(e,t){return o.a.createElement(d.a,Object(r.a)({},e,{key:t}))})),o.a.createElement(C,{className:f.a.displayOnlyInLargeViewport}),o.a.createElement(i.a,{"aria-label":"Dark mode toggle",checked:U,onChange:G}),o.a.createElement(l.a,{handleSearchBarToggle:N,isSearchBarExpanded:w})),o.a.createElement(O.a,null,(function(){return o.a.createElement(T,null)}))),null!=t&&0!==t.length&&o.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:x,onKeyDown:x},o.a.createElement(h.a,null)),o.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:F}),o.a.createElement("div",{className:"navbar-sidebar"},o.a.createElement("div",{className:"navbar-sidebar__brand"},o.a.createElement("a",{className:Object(c.a)("navbar__brand",f.a.BrandText),href:"/"},e.title),o.a.createElement(C,null)),o.a.createElement("div",{className:"navbar-sidebar__items"},o.a.createElement("div",{className:"menu"},o.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){return o.a.createElement(d.a,Object(r.a)({mobile:!0},e,{onClick:F,key:t}))})))))))}},192:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(173),c=a(16),l=a(60),i=a.n(l),s=a(188),u=a(3),m=a(177),d=a(62),p=a.n(d),g=function(e){var t=e.href,a=e.to,r=e.label,o=Object(m.a)(null!=t?t:"",{forcePrependBaseUrl:void 0}),c=Object(m.a)(null!=a?a:"");return n.a.createElement("a",Object(u.a)({className:p.a.LinkText},null!=t?{href:o,rel:"noopener noreferrer",target:"_blank"}:{href:c},e),r)};t.a=function(){var e=Object(c.default)().siteConfig,t=e.themeConfig.footer,a=t.copyright,r=t.links,l=void 0===r?[]:r;return!!e.themeConfig.footer?n.a.createElement("footer",{className:Object(o.a)("footer",i.a.Container)},n.a.createElement("div",{className:i.a.InnerContainer},n.a.createElement("div",{className:i.a.ContentContainer},n.a.createElement("div",{className:i.a.FooterLeft},n.a.createElement("div",{className:i.a.BrandContainer},n.a.createElement("img",{className:i.a.BrandImage,alt:"AgileTs Logo",height:35,width:35,src:"/img/logo.svg",title:e.tagline}),n.a.createElement("div",{className:i.a.BrandText},"AgileTs")),n.a.createElement("div",{className:i.a.Tagline},e.tagline),n.a.createElement(s.a,{className:i.a.GithubButton,to:e.customFields.githubUrl})),n.a.createElement("div",{className:i.a.FooterRight},l.map((function(e,t){var a;return n.a.createElement("div",{className:i.a.SectionContainer,key:t},null!=e.title&&n.a.createElement("li",{className:i.a.LinkItemTitle},e.title),null===(a=e.items)||void 0===a?void 0:a.map((function(e){var t;return n.a.createElement("ul",{className:i.a.LinkItemContainer,key:null!==(t=e.href)&&void 0!==t?t:e.to},n.a.createElement(g,e))})))})))),n.a.createElement("div",{className:i.a.BottomContainer},n.a.createElement("div",{className:i.a.CopyrightText,dangerouslySetInnerHTML:{__html:a}})))):null}},194:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(173),c=a(176),l=a(24),i=a(63),s=a.n(i);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var m=function(){var e=Object(r.useRef)(null),t=Object(l.useLocation)();return Object(r.useEffect)((function(){t.hash||u(e.current)}),[t.pathname]),n.a.createElement("div",{ref:e},n.a.createElement("a",{href:"#main",className:s.a.skipToContent,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},n.a.createElement(c.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},d=a(207),p=a(191),g=a(192),f=a(215),b=a(3),h=a(23),k=a(16),v=a(177);function y(e){var t=e.locale,a=e.version,r=e.tag,o=t;return n.a.createElement(h.a,null,o&&n.a.createElement("meta",{name:"docsearch:language",content:o}),a&&n.a.createElement("meta",{name:"docsearch:version",content:a}),r&&n.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var E=a(186),_=a(174);function w(){var e=Object(k.default)().i18n,t=e.defaultLocale,a=e.locales,r=Object(_.useAlternatePageUtils)();return n.a.createElement(h.a,null,a.map((function(e){return n.a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),n.a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function C(e){var t=e.permalink,a=Object(k.default)().siteConfig.url,r=function(){var e=Object(k.default)().siteConfig.url,t=Object(l.useLocation)().pathname;return e+Object(v.a)(t)}(),o=t?""+a+t:r;return n.a.createElement(h.a,null,n.a.createElement("meta",{property:"og:url",content:o}),n.a.createElement("link",{rel:"canonical",href:o}))}function O(e){var t=Object(k.default)(),a=t.siteConfig,r=t.i18n,o=r.currentLocale,c=r.localeConfigs,l=a.favicon,i=a.themeConfig,s=i.image,u=i.metadatas,m=e.title,d=e.description,p=e.image,g=e.keywords,f=e.searchMetadatas,O=Object(v.a)(l),N=o,j=c[o].direction;return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,null,n.a.createElement("html",{lang:N,dir:j}),l&&n.a.createElement("link",{rel:"shortcut icon",href:O})),n.a.createElement(E.a,{title:m,description:d,keywords:g,image:p||s}),n.a.createElement(C,null),n.a.createElement(w,null),n.a.createElement(y,Object(b.a)({tag:_.DEFAULT_SEARCH_TAG,locale:o},f)),n.a.createElement(h.a,null,u.map((function(e,t){return n.a.createElement("meta",Object(b.a)({key:"metadata_"+t},e))}))))}var N=a(214);a(64);t.a=function(e){var t=e.children,a=e.noFooter,r=e.wrapperClassName;return Object(N.a)(),n.a.createElement(f.a,null,n.a.createElement(O,e),n.a.createElement(m,null),n.a.createElement(d.a,null),n.a.createElement(p.a,null),n.a.createElement("div",{className:Object(o.a)("main-wrapper",r)},t),!a&&n.a.createElement(g.a,null))}},243:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(194),c=a(176);t.default=function(){return n.a.createElement(o.a,{title:"Page Not Found"},n.a.createElement("main",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--6 col--offset-3"},n.a.createElement("h1",{className:"hero__title"},n.a.createElement(c.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.a.createElement("p",null,n.a.createElement(c.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.a.createElement("p",null,n.a.createElement(c.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);