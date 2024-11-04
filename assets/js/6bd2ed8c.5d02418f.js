"use strict";(self.webpackChunkheac_framework_docs=self.webpackChunkheac_framework_docs||[]).push([[9820],{800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7624),s=a(2172);const l={},r="Load Default Values",o={id:"HF-Stats/StatsComponent/Load-Default-Values",title:"Load Default Values",description:"Call LoadDefaultValues()",source:"@site/docs/01-HF-Stats/03-StatsComponent/02-Load-Default-Values.md",sourceDirName:"01-HF-Stats/03-StatsComponent",slug:"/HF-Stats/StatsComponent/Load-Default-Values",permalink:"/docs/HF-Stats/StatsComponent/Load-Default-Values",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"hfstatsSidebar",previous:{title:"Create a StatsComponent",permalink:"/docs/HF-Stats/StatsComponent/Create-a-StatsComponent"},next:{title:"Add Stats",permalink:"/docs/HF-Stats/StatsComponent/Add-Stats"}},i={},u=[{value:"Call LoadDefaultValues()",id:"call-loaddefaultvalues",level:2},{value:"Default Values Name",id:"default-values-name",level:3},{value:"Using the Owner for the Row Name",id:"using-the-owner-for-the-row-name",level:3},{value:"Accessing the current Default Values Name",id:"accessing-the-current-default-values-name",level:3},{value:"Using a custom structure",id:"using-a-custom-structure",level:2}];function c(e){const t={a:"a",admonition:"admonition",br:"br",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"load-default-values",children:"Load Default Values"}),"\n",(0,n.jsx)(t.h2,{id:"call-loaddefaultvalues",children:"Call LoadDefaultValues()"}),"\n",(0,n.jsxs)(t.p,{children:["Calling ",(0,n.jsx)("span",{class:"function",children:"LoadDefaultValues()"})," on the ",(0,n.jsx)(t.strong,{children:"StatsComponent"})," will make it pull data from the\r\n",(0,n.jsx)(t.a,{href:"../Default-Values",children:"Default Values"}),"."]}),"\n",(0,n.jsx)("img",{src:"/img/doc/HF-Stats/InitializeAuthority.jpg"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["In a multiplayer environment, On BeginPlay, use ",(0,n.jsx)("span",{class:"function",children:"HasAuthority()"})," to prevent\r\n",(0,n.jsx)("span",{class:"function",children:"LoadDefaultValues()"})," from being called twice (Server and Client)."]})}),"\n",(0,n.jsx)(t.h3,{id:"default-values-name",children:"Default Values Name"}),"\n",(0,n.jsxs)(t.p,{children:["To find its ",(0,n.jsx)(t.strong,{children:"RowName"})," in the ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Default Values Composite Table"})})," of the ",(0,n.jsx)(t.strong,{children:"Default Values Manager"}),", the StatsComponent will use\r\nthe Default Values Name specified in the ",(0,n.jsx)("span",{class:"function",children:"LoadDefaultValues()"})," function."]}),"\n",(0,n.jsx)("img",{src:"/img/doc/HF-Stats/UseDefaultValuesName.jpg"}),"\n",(0,n.jsx)(t.h3,{id:"using-the-owner-for-the-row-name",children:"Using the Owner for the Row Name"}),"\n",(0,n.jsx)(t.p,{children:"You can make the Default Values Name dependent on the Owner Actor by creating a function and returning an ID from the Owner."}),"\n",(0,n.jsxs)(t.admonition,{title:"Example",type:"note",children:[(0,n.jsx)(t.p,{children:'I create a property "CharacterID" inside of my main Character class.'}),(0,n.jsx)("img",{src:"/img/doc/HF-Stats/CharacterID.jpg"}),(0,n.jsx)(t.p,{children:'Setting it to "Instance Editable" and "Expose on Spawn" will allow me to fill this property when spawning it.'}),(0,n.jsx)("img",{src:"/img/doc/HF-Stats/SpawnCharacter.jpg"}),(0,n.jsxs)(t.p,{children:["Now, I can create a function ",(0,n.jsx)("span",{class:"function",children:"GetOwnerDefaultValuesName()"})," in my StatsComponent and return CharacterID\r\nby casting to my Character class."]}),(0,n.jsx)("img",{src:"/img/doc/HF-Stats/GetDefaultValuesName.jpg"}),(0,n.jsx)(t.p,{children:"I can now use this function to load the Default Values in my StatsComponent."}),(0,n.jsx)("img",{src:"/img/doc/HF-Stats/InitializeFromOwnerBeginPlay.jpg"}),(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["When my Character is spawned, its StatsComponent will call ",(0,n.jsx)("span",{class:"function",children:"LoadDefaultValues()"})," on BeginPlay and search for\r\nthe Row returned by ",(0,n.jsx)("span",{class:"function",children:"GetDefaultValuesNameFromOwner()"}),' ("CharacterID") inside of the ',(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"Default Values\r\nComposite Table"})})," of my ",(0,n.jsx)(t.strong,{children:"Default Values Manager"}),"."]})})]}),"\n",(0,n.jsx)(t.h3,{id:"accessing-the-current-default-values-name",children:"Accessing the current Default Values Name"}),"\n",(0,n.jsx)(t.p,{children:"You can get the current Default Values Name of your StatsComponent with CurrentDefaultValuesName."}),"\n",(0,n.jsx)("img",{src:"/img/doc/HF-Stats/CurrentDefaultValuesName.jpg"}),"\n",(0,n.jsx)(t.h2,{id:"using-a-custom-structure",children:"Using a custom structure"}),"\n",(0,n.jsxs)(t.p,{children:["You can also load the default values using ",(0,n.jsx)("span",{class:"function",children:"LoadDefaultValues_FromStructure_()"}),".",(0,n.jsx)(t.br,{}),"\n","This allows you to create your own structure and use any SDV structure inside it.",(0,n.jsx)(t.br,{}),"\n","You can read more about that ",(0,n.jsx)(t.a,{href:"../Default-Values/Custom-Structure",children:"here"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2172:(e,t,a)=>{a.d(t,{I:()=>o,M:()=>r});var n=a(1504);const s={},l=n.createContext(s);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);