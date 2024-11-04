"use strict";(self.webpackChunkheac_framework_docs=self.webpackChunkheac_framework_docs||[]).push([[8008],{3068:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=t(7624),n=t(2172);const l={},r="Value Type",i={id:"HF-Stats/Stats/Complex-Stat/Value-Sets-Manager/Value-Type",title:"Value Type",description:"A Value Types is a Gameplay Tag tied to a Value that's determines by its ID Values.",source:"@site/docs/01-HF-Stats/04-Stats/02-Complex-Stat/01-Value-Sets-Manager/03-Value-Type.md",sourceDirName:"01-HF-Stats/04-Stats/02-Complex-Stat/01-Value-Sets-Manager",slug:"/HF-Stats/Stats/Complex-Stat/Value-Sets-Manager/Value-Type",permalink:"/docs/HF-Stats/Stats/Complex-Stat/Value-Sets-Manager/Value-Type",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"hfstatsSidebar",previous:{title:"Value Set",permalink:"/docs/HF-Stats/Stats/Complex-Stat/Value-Sets-Manager/Value-Set"},next:{title:"ID Value",permalink:"/docs/HF-Stats/Stats/Complex-Stat/Value-Sets-Manager/ID-Value"}},o={},c=[{value:"Add Value Types",id:"add-value-types",level:2},{value:"Get",id:"get",level:2}];function d(e){const a={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"value-type",children:"Value Type"}),"\n",(0,s.jsxs)(a.p,{children:["A ",(0,s.jsx)("span",{class:"ValueType",children:(0,s.jsx)(a.strong,{children:"Value Types"})})," is a ",(0,s.jsx)(a.strong,{children:"Gameplay Tag"})," tied to a ",(0,s.jsx)(a.strong,{children:"Value"})," that's determines by its ",(0,s.jsx)("span",{class:"IDValue",children:(0,s.jsx)(a.strong,{children:"ID Values"})}),"."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)("span",{class:"ValueType",children:(0,s.jsx)(a.strong,{children:"Value Types"})})," exist within ",(0,s.jsx)("span",{class:"ValueSet",children:(0,s.jsx)(a.strong,{children:"Value Sets"})}),"."]}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsx)(a.p,{children:'While strictly speaking, "Value Type" refers to the Gameplay Tag itself, it is also used to refer to the association\r\nof the Gameplay Tag and the Value.'})}),"\n",(0,s.jsxs)(a.p,{children:['Internally, it is also referred to as "',(0,s.jsx)("span",{class:"ValueType",children:(0,s.jsx)(a.strong,{children:"Tagged Value"})}),'" to differentiate it from the Gameplay Tag.']}),"\n",(0,s.jsx)("img",{src:"/img/doc/HF-Stats/TaggedValue.jpg"}),"\n",(0,s.jsx)(a.p,{children:'You can find the "ValueType" Gameplay Tags in HF.Stat.ValueType.'}),"\n",(0,s.jsx)("img",{src:"/img/doc/HF-Stats/ValueTypeTags.jpg"}),"\n",(0,s.jsx)(a.admonition,{type:"info",children:(0,s.jsx)(a.p,{children:"Base, Equipment and Value Influence are built-in Gameplay Tags that come with the Plugin."})}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"https://docs.unrealengine.com/5.3/en-US/using-gameplay-tags-in-unreal-engine/",children:"Learn more about gameplay tags"}),"."]})}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)("span",{class:"ValueType",children:(0,s.jsx)(a.strong,{children:"Value Type"})})," can hold ",(0,s.jsx)("span",{class:"IDValue",children:(0,s.jsx)(a.strong,{children:"ID Values"})})," that will determine its ",(0,s.jsx)(a.strong,{children:"ID Values Total"}),",\r\ndepending on the ",(0,s.jsx)("span",{class:"ValueSet",children:(0,s.jsx)(a.strong,{children:"Value Set"})})," it is in."]}),"\n",(0,s.jsxs)(a.p,{children:["A ",(0,s.jsx)("span",{class:"ValueSet",children:(0,s.jsx)(a.strong,{children:"Regular"})})," or a ",(0,s.jsx)("span",{class:"ValueSet",children:(0,s.jsx)(a.strong,{children:"Multiplier"})})," Value Set will ",(0,s.jsx)(a.strong,{children:"add"}),"\r\n",(0,s.jsx)("span",{class:"ValueType",children:(0,s.jsx)(a.strong,{children:"Value Types"})})," together, but a ",(0,s.jsx)("span",{class:"ValueSet",children:(0,s.jsx)(a.strong,{children:"Super Multiplier"})})," will ",(0,s.jsx)(a.strong,{children:"multiply"})," them together.",(0,s.jsx)(a.br,{}),"\n",(0,s.jsx)(a.a,{href:"Value-Set",children:"Learn more about Value Sets"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"add-value-types",children:"Add Value Types"}),"\n",(0,s.jsx)(a.p,{children:'You can create a new Value Type by adding a new Gameplay Tag starting with "HF.Stat.ValueType." in your Gameplay Tags Manager.'}),"\n",(0,s.jsx)("img",{src:"/img/doc/HF-Stats/AddPerkGameplayTag.jpg"}),"\n",(0,s.jsx)(a.admonition,{type:"note",children:(0,s.jsx)(a.p,{children:'In this image, by clicking "Add New Tag", I\'ll be adding the "Perk" gameplay tag to my Value Types.'})}),"\n",(0,s.jsx)(a.p,{children:"Once done, you'll be able to use this Gameplay Tag whenever you're prompted for a Value Type."}),"\n",(0,s.jsx)("img",{src:"/img/doc/HF-Stats/UsePerkGameplayTag.jpg"}),"\n",(0,s.jsx)(a.h2,{id:"get",children:"Get"}),"\n",(0,s.jsxs)(a.p,{children:["You can get the value of a Value Type with ",(0,s.jsx)("span",{class:"function",children:"GetValueType()"}),"."]}),"\n",(0,s.jsx)("img",{src:"/img/doc/HF-Stats/GetValueTypeValue.jpg"})]})}function p(e={}){const{wrapper:a}={...(0,n.M)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2172:(e,a,t)=>{t.d(a,{I:()=>i,M:()=>r});var s=t(1504);const n={},l=s.createContext(n);function r(e){const a=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(l.Provider,{value:a},e.children)}}}]);