"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[114],{4114:function(e,n,s){s.r(n),s.d(n,{default:function(){return b}});var t=s(2791),i=s(6871),a=s(2548),c=s(885),r=s(9789),l=s(2380),d=s(4569),o=s.n(d),h=s(184),u=function(){var e=(0,l.X)((function(e){return e.cards})),n=(e.cards,e.activeCard),s=(0,i.s0)(),a=(0,t.useState)({}),d=(0,c.Z)(a,2),u=d[0],f=d[1],j=(0,r.B)().setIsConfirm,x=(0,i.UO)().id;(0,t.useEffect)((function(){n?f(n.airline[0]):o().get("https://api.instantwebtools.net/v1/passenger/".concat(x)).then((function(e){var n=e.data;n?f(n.airline[0]):s("/")})).catch((function(e){console.log(e)}))}),[]);return(0,h.jsx)("div",{className:"info",onClick:function(e){var n=e.target;!n.classList.contains("info__button-close")&&n.closest(".info__body")||s("/redramka")},children:u.name&&(0,h.jsxs)("div",{className:"info__body",children:[(0,h.jsx)("img",{src:u.logo,alt:u.name}),(0,h.jsxs)("article",{className:"info__article",children:[(0,h.jsxs)("h2",{children:["Name: ",(0,h.jsx)("span",{children:u.name||"Undefined"})]}),(0,h.jsxs)("p",{children:["Country: ",(0,h.jsx)("span",{children:u.country||"Undefined"})]}),(0,h.jsxs)("p",{children:["Established: ",(0,h.jsx)("span",{children:u.established||"Undefined"})]}),(0,h.jsxs)("p",{children:["Slogan: ",(0,h.jsx)("span",{children:u.slogan||"Undefined"})]}),(0,h.jsxs)("p",{children:["Head quaters: ",(0,h.jsx)("span",{children:u.head_quaters||"Undefined"})]}),(0,h.jsxs)("p",{children:["Website:"," ",(0,h.jsx)("a",{href:"http://".concat(u.website),target:"_blank",children:u.website||"Undefined"})]})]}),(0,h.jsx)("button",{className:"info__button-delete",onClick:function(){j(!0)},children:"Delete"}),(0,h.jsx)("button",{className:"info__button-close",children:"\u2718"})]})})},f=t.memo(u),j=t.lazy((function(){return s.e(202).then(s.bind(s,4202))})),x=function(){return(0,h.jsxs)(i.Z5,{children:[(0,h.jsx)(i.AW,{path:"/redramka",element:(0,h.jsx)(t.Suspense,{fallback:"",children:(0,h.jsx)(j,{})}),children:(0,h.jsx)(i.AW,{path:"card/:id",element:(0,h.jsx)(f,{})})}),(0,h.jsx)(i.AW,{path:"*",element:(0,h.jsx)(a.Z,{})})]})},m=t.memo(x),p=function(){return(0,h.jsx)(m,{})},b=t.memo(p)}}]);
//# sourceMappingURL=114.617a5a25.chunk.js.map