"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[653],{9653:function(n,e,s){s.r(e),s.d(e,{default:function(){return m}});var t=s(885),r=s(2791),a=s(6871),i=s(4222),c=s(2380),o=s(9295),d=s(5861),l=s(7757),u=s.n(l),f=s(4569),h=s.n(f);var p=s(184),x=function(){var n=(0,c.X)((function(n){return n.cards})),e=(n.cards,n.activeCard,(0,a.s0)()),s=(0,i.B)().setIsConfirm,l=function(n){var e=(0,c.X)((function(n){return n.cards})),s=(e.cards,e.activeCard),o=(0,r.useState)({}),l=(0,t.Z)(o,2),f=l[0],p=l[1],x=(0,a.s0)(),m=(0,i.B)().setIsError,j=function(){var e=(0,d.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().get("https://api.instantwebtools.net/v1/passenger/".concat(n)).then((function(n){var e=n.data;e?p(e.airline[0]):x("/")})).catch((function(n){console.log(n),m(!0),x("/redramka")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){s?p(s.airline[0]):j()}),[]),[f]}((0,a.UO)().id),f=(0,t.Z)(l,1)[0];return(0,p.jsx)(o.Z,{timeout:4e3,classNames:"info",in:!!f.name,unmountOnExit:!0,mountOnEnter:!0,children:(0,p.jsx)("div",{className:"info",onClick:function(n){var s=n.target;!s.classList.contains("info__button-close")&&s.closest(".info__body")||e("/redramka")},children:(0,p.jsxs)("div",{className:"info__body",children:[(0,p.jsx)("img",{src:f.logo,alt:f.name}),(0,p.jsxs)("article",{className:"info__article",children:[(0,p.jsxs)("h2",{children:["Name: ",(0,p.jsx)("span",{children:f.name||"Undefined"})]}),(0,p.jsxs)("p",{children:["Country: ",(0,p.jsx)("span",{children:f.country||"Undefined"})]}),(0,p.jsxs)("p",{children:["Established: ",(0,p.jsx)("span",{children:f.established||"Undefined"})]}),(0,p.jsxs)("p",{children:["Slogan: ",(0,p.jsx)("span",{children:f.slogan||"Undefined"})]}),(0,p.jsxs)("p",{children:["Head quaters: ",(0,p.jsx)("span",{children:f.head_quaters||"Undefined"})]}),(0,p.jsxs)("p",{children:["Website:"," ",(0,p.jsx)("a",{href:"http://".concat(f.website),target:"_blank",children:f.website||"Undefined"})]})]}),(0,p.jsx)("button",{className:"info__button-delete",onClick:function(){s(!0)},children:"Delete"}),(0,p.jsx)("button",{className:"info__button-close",children:"\u2718"})]})})})},m=r.memo(x)}}]);
//# sourceMappingURL=653.1989b35f.chunk.js.map