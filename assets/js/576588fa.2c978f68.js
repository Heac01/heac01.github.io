"use strict";(self.webpackChunkheac_framework_docs=self.webpackChunkheac_framework_docs||[]).push([[868],{9788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=n(7624),i=n(2172);const s={},r="Position",a={id:"Universal-Camera/Infos/Position",title:"Position",description:"Six variables determine the position of the Universal Camera:",source:"@site/docs/02-Universal-Camera/04-Infos/02-Position.md",sourceDirName:"02-Universal-Camera/04-Infos",slug:"/Universal-Camera/Infos/Position",permalink:"/docs/Universal-Camera/Infos/Position",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"universalcameraSidebar",previous:{title:"Components",permalink:"/docs/Universal-Camera/Infos/Components"},next:{title:"Alternative Vectors",permalink:"/docs/Universal-Camera/Infos/Alternative-Vectors"}},l={},c=[{value:"Location Offset",id:"location-offset",level:2},{value:"Target Offset",id:"target-offset",level:3},{value:"Socket Offset",id:"socket-offset",level:3},{value:"Rotation Offset",id:"rotation-offset",level:2}];function f(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"position",children:"Position"}),"\n",(0,o.jsx)(t.p,{children:"Six variables determine the position of the Universal Camera:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Desired Location"}),"\n",(0,o.jsx)(t.li,{children:"Desired Socket Offset"}),"\n",(0,o.jsx)(t.li,{children:"Desired Target Offset"}),"\n",(0,o.jsx)(t.li,{children:"Desired Rotation (Yaw, Pitch and Roll)"}),"\n",(0,o.jsx)(t.li,{children:"Desired Rotation Offset"}),"\n",(0,o.jsx)(t.li,{children:"Desired Zoom"}),"\n"]}),"\n",(0,o.jsx)("img",{src:"/img/doc/Universal-Camera/CameraInfos.jpg"}),"\n",(0,o.jsxs)(t.p,{children:["Whenever one of these variables change, the UC will try to catch up to its new value using the ",(0,o.jsx)(t.a,{href:"/docs/Universal-Camera/Settings/Movement-Zoom",children:"Lag"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"../Inputs/Input-Functions",children:"Input Functions"})," or most of the ",(0,o.jsx)(t.a,{href:"../Features",children:"Features"}),' will modify these values, but you can also do it\r\nmanually using setter functions from the "Tools" category.']}),"\n",(0,o.jsx)("img",{src:"/img/doc/Universal-Camera/SetDesired.jpg"}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:["To modify the position of the UC, you should always use the functions provided by the UC instead of the classic Actor functions.\r\nE.g. ",(0,o.jsx)("span",{class:"function",children:"SetDesiredLocation()"})," instead of ",(0,o.jsx)("span",{class:"function",children:"SetActorLocation()"}),",\r\n",(0,o.jsx)("span",{class:"function",children:"SetDesiredRotation()"})," instead of ",(0,o.jsx)("span",{class:"function",children:"SetActorRotation()"}),",\r\n",(0,o.jsx)("span",{class:"function",children:"SetDesiredZoom()"})," instead of modifying the TargetArmLength, etc."]})}),"\n",(0,o.jsx)(t.h2,{id:"location-offset",children:"Location Offset"}),"\n",(0,o.jsxs)(t.p,{children:["Moving the Location Offset can be useful in various situations.",(0,o.jsx)(t.br,{}),"\n","For example, it can allow you to move around while following an Actor."]}),"\n",(0,o.jsx)(t.p,{children:"There are two types of Location Offsets:"}),"\n",(0,o.jsx)(t.h3,{id:"target-offset",children:"Target Offset"}),"\n",(0,o.jsxs)(t.p,{children:["Offset at start of the Spring Arm Component.",(0,o.jsx)(t.br,{}),"\n","The UC will rotate around the Target Offset location."]}),"\n",(0,o.jsx)("iframe",{width:"840",height:"472,5",src:"https://www.youtube.com/embed/P44PQzqyWKc?si=PsvIHZqhWUSrHLOm",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,o.jsx)(t.h3,{id:"socket-offset",children:"Socket Offset"}),"\n",(0,o.jsx)(t.p,{children:"Offset at end of the Spring Arm Component.\r\nThe UC will rotate around the Origin location."}),"\n",(0,o.jsx)("iframe",{width:"840",height:"472,5",src:"https://www.youtube.com/embed/p8ZAhHUHYaE?si=6Kbwbsjzca2cD89M",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,o.jsx)(t.h2,{id:"rotation-offset",children:"Rotation Offset"}),"\n",(0,o.jsx)(t.p,{children:"Similarly, the Rotation Offset will allow you to rotate while the UC Rotation is being captured (e.g. while you're following\r\nan Actor's rotations)."})]})}function d(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>r});var o=n(1504);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);