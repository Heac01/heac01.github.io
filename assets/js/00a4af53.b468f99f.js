"use strict";(self.webpackChunkheac_framework_docs=self.webpackChunkheac_framework_docs||[]).push([[3156],{2628:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>n,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(7624),i=t(2172);const r={},l="Value Display Format",o={id:"HF-Stats/Display/Value-Display-Format",title:"Value Display Format",description:"The Value Display Format is a UObject subclass that allows you to create a method to display the Target Value of your Stats.",source:"@site/docs/01-HF-Stats/06-Display/04-Value-Display-Format.md",sourceDirName:"01-HF-Stats/06-Display",slug:"/HF-Stats/Display/Value-Display-Format",permalink:"/docs/HF-Stats/Display/Value-Display-Format",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"hfstatsSidebar",previous:{title:"Smooth Value",permalink:"/docs/HF-Stats/Display/Smooth-Value"}},n={},c=[{value:"Create a Value Display Format",id:"create-a-value-display-format",level:2},{value:"Behavior",id:"behavior",level:2},{value:"GetDisplay()",id:"getdisplay",level:3},{value:"Prefix and Suffix",id:"prefix-and-suffix",level:3}];function d(e){const a={br:"br",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"value-display-format",children:"Value Display Format"}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.strong,{children:"Value Display Format"})," is a UObject subclass that allows you to ",(0,s.jsx)(a.strong,{children:"create a method"})," to ",(0,s.jsx)(a.strong,{children:"display the Target Value of your Stats"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"create-a-value-display-format",children:"Create a Value Display Format"}),"\n",(0,s.jsx)(a.p,{children:"You can create a blueprint class from the ValueDisplayFormat class."}),"\n",(0,s.jsx)("img",{src:"/img/doc/HF-Stats/CreateValueDisplayFormat.jpg",width:"500"}),"\n",(0,s.jsx)(a.h2,{id:"behavior",children:"Behavior"}),"\n",(0,s.jsx)(a.h3,{id:"getdisplay",children:"GetDisplay()"}),"\n",(0,s.jsxs)(a.p,{children:["Whenever a Value Display Format is used to display the value of a Stat, it will use the ",(0,s.jsx)("span",{class:"property",children:(0,s.jsx)(a.strong,{children:"GetDisplay"})})," function to\r\nconvert the float value into a string.",(0,s.jsx)(a.br,{}),"\n","By default, it will display one decimal if the value is less than 10, or no decimal if it is above 10."]}),"\n",(0,s.jsx)(a.p,{children:"By overriding GetDisplay(), you'll be able to create your own method."}),"\n",(0,s.jsx)("img",{src:"/img/doc/HF-Stats/OverrideGetDisplay.jpg"}),"\n",(0,s.jsx)(a.h3,{id:"prefix-and-suffix",children:"Prefix and Suffix"}),"\n",(0,s.jsx)(a.p,{children:"In the details panel, you can specify a prefix and suffix."}),"\n",(0,s.jsx)("img",{src:"/img/doc/HF-Stats/ValueDisplayFormatDetails.jpg"}),"\n",(0,s.jsx)(a.p,{children:"You can also override the prefix and suffix directly in the widget where you use the Value Display Format."}),"\n",(0,s.jsx)("img",{src:"/img/doc/HF-Stats/ValueDisplayFormatInWidget.jpg"})]})}function u(e={}){const{wrapper:a}={...(0,i.M)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2172:(e,a,t)=>{t.d(a,{I:()=>o,M:()=>l});var s=t(1504);const i={},r=s.createContext(i);function l(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);