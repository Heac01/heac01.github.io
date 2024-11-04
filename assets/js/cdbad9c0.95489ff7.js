"use strict";(self.webpackChunkheac_framework_docs=self.webpackChunkheac_framework_docs||[]).push([[7860],{8664:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=s(7624),n=s(2172),a=s(6788);const o={},c="Progress Stat",i={id:"HF-Stats/Stats/Progress-Stat/Progress-Stat",title:"Progress Stat",description:"A Progress Stat is a subclass of Stat Base that doesn't have a Value Sets Manager.",source:"@site/docs/01-HF-Stats/04-Stats/03-Progress-Stat/03-Progress-Stat.md",sourceDirName:"01-HF-Stats/04-Stats/03-Progress-Stat",slug:"/HF-Stats/Stats/Progress-Stat/",permalink:"/docs/HF-Stats/Stats/Progress-Stat/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"hfstatsSidebar",previous:{title:"Values",permalink:"/docs/HF-Stats/Stats/Complex-Stat/Values"},next:{title:"Value",permalink:"/docs/HF-Stats/Stats/Progress-Stat/Value"}},l={},d=[];function u(t){const e={admonition:"admonition",br:"br",h1:"h1",p:"p",strong:"strong",...(0,n.M)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"progress-stat",children:"Progress Stat"}),"\n",(0,r.jsxs)(e.p,{children:["A Progress Stat is a subclass of Stat Base that doesn't have a Value Sets Manager.",(0,r.jsx)(e.br,{}),"\n","It can have a ",(0,r.jsx)(e.strong,{children:"Regeneration"})," (an increase or decrease over time), that can be paused / unpaused."]}),"\n",(0,r.jsx)(e.p,{children:"It is typically used for Stats that fluctuate within boundaries and don't need additional details about their value (e.g. Health, Mana, Stamina, etc.)."}),"\n",(0,r.jsx)(e.p,{children:'To create a Progress Stat, you can right click in the Content browser and select "HF Stats -> Progress Stat"...'}),"\n",(0,r.jsx)("img",{src:"/img/doc/HF-Stats/HFStatsProgressStat.jpg"}),"\n",(0,r.jsx)(e.p,{children:'Or use the "Progress Stat" class.'}),"\n",(0,r.jsx)("img",{src:"/img/doc/HF-Stats/CreateProgressStat.jpg"}),"\n",(0,r.jsxs)(e.admonition,{type:"info",children:[(0,r.jsx)(e.p,{children:'All Progress Stat specific functions can be called directly from the StatsComponent (and therefore the Owner Actor), in which case they\'ll be named\r\n"Progress Stat + Function Name".'}),(0,r.jsx)("img",{src:"/img/doc/HF-Stats/ProgressStatFromStatsComponent.jpg"})]}),"\n","\n","\n",(0,r.jsx)(a.c,{})]})}function h(t={}){const{wrapper:e}={...(0,n.M)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},6788:(t,e,s)=>{s.d(e,{c:()=>f});s(1504);var r=s(5456),n=s(9940),a=s(867),o=s(8136),c=s(4357),i=s(6448);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=s(7624);function u(t){let{href:e,children:s}=t;return(0,d.jsx)(a.c,{href:e,className:(0,r.c)("card padding--lg",l.cardContainer),children:s})}function h(t){let{href:e,icon:s,title:n,description:a}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(i.c,{as:"h2",className:(0,r.c)("text--truncate",l.cardTitle),title:n,children:[s," ",n]}),a&&(0,d.jsx)("p",{className:(0,r.c)("text--truncate",l.cardDescription),title:a,children:a})]})}function m(t){let{item:e}=t;const s=(0,n.Gw)(e);return s?(0,d.jsx)(h,{href:s,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,c.G)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function g(t){let{item:e}=t;const s=(0,o.c)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n._4)(e.docId??void 0);return(0,d.jsx)(h,{href:e.href,icon:s,title:e.label,description:e.description??r?.description})}function p(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(g,{item:e});case"category":return(0,d.jsx)(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function S(t){let{className:e}=t;const s=(0,n.wt)();return(0,d.jsx)(f,{items:s.items,className:e})}function f(t){const{items:e,className:s}=t;if(!e)return(0,d.jsx)(S,{...t});const a=(0,n.ML)(e);return(0,d.jsx)("section",{className:(0,r.c)("row",s),children:a.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(p,{item:t})},e)))})}},2172:(t,e,s)=>{s.d(e,{I:()=>c,M:()=>o});var r=s(1504);const n={},a=r.createContext(n);function o(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:o(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);