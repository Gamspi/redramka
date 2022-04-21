"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[816],{9816:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r=t(885),i=t(2791),s=t(9295),c=t(184),o=function(n){var e=n.isLoading;return(0,c.jsx)(s.Z,{in:e,classNames:"loading",timeout:800,unmountOnExit:!0,mountOnEnter:!0,children:(0,c.jsx)("div",{className:"loading",children:(0,c.jsx)("div",{className:"loading__body",children:(0,c.jsx)("p",{children:"Loading...."})})})})},a=t(3366),d=t(7462);var u=t(1721),l=t(5545);function m(n,e){var t=Object.create(null);return n&&i.Children.map(n,(function(n){return n})).forEach((function(n){t[n.key]=function(n){return e&&(0,i.isValidElement)(n)?e(n):n}(n)})),t}function f(n,e,t){return null!=t[e]?t[e]:n.props[e]}function h(n,e,t){var r=m(n.children),s=function(n,e){function t(t){return t in e?e[t]:n[t]}n=n||{},e=e||{};var r,i=Object.create(null),s=[];for(var c in n)c in e?s.length&&(i[c]=s,s=[]):s.push(c);var o={};for(var a in e){if(i[a])for(r=0;r<i[a].length;r++){var d=i[a][r];o[i[a][r]]=t(d)}o[a]=t(a)}for(r=0;r<s.length;r++)o[s[r]]=t(s[r]);return o}(e,r);return Object.keys(s).forEach((function(c){var o=s[c];if((0,i.isValidElement)(o)){var a=c in e,d=c in r,u=e[c],l=(0,i.isValidElement)(u)&&!u.props.in;!d||a&&!l?d||!a||l?d&&a&&(0,i.isValidElement)(u)&&(s[c]=(0,i.cloneElement)(o,{onExited:t.bind(null,o),in:u.props.in,exit:f(o,"exit",n),enter:f(o,"enter",n)})):s[c]=(0,i.cloneElement)(o,{in:!1}):s[c]=(0,i.cloneElement)(o,{onExited:t.bind(null,o),in:!0,exit:f(o,"exit",n),enter:f(o,"enter",n)})}})),s}var x=Object.values||function(n){return Object.keys(n).map((function(e){return n[e]}))},v=function(n){function e(e,t){var r,i=(r=n.call(this,e,t)||this).handleExited.bind(function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,u.Z)(e,n);var t=e.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(n,e){var t,r,s=e.children,c=e.handleExited;return{children:e.firstRender?(t=n,r=c,m(t.children,(function(n){return(0,i.cloneElement)(n,{onExited:r.bind(null,n),in:!0,appear:f(n,"appear",t),enter:f(n,"enter",t),exit:f(n,"exit",t)})}))):h(n,s,c),firstRender:!1}},t.handleExited=function(n,e){var t=m(this.props.children);n.key in t||(n.props.onExited&&n.props.onExited(e),this.mounted&&this.setState((function(e){var t=(0,d.Z)({},e.children);return delete t[n.key],{children:t}})))},t.render=function(){var n=this.props,e=n.component,t=n.childFactory,r=(0,a.Z)(n,["component","childFactory"]),s=this.state.contextValue,c=x(this.state.children).map(t);return delete r.appear,delete r.enter,delete r.exit,null===e?i.createElement(l.Z.Provider,{value:s},c):i.createElement(l.Z.Provider,{value:s},i.createElement(e,r,c))},e}(i.Component);v.propTypes={},v.defaultProps={component:"div",childFactory:function(n){return n}};var p=v,j=t(2380),E=t(4222),b=function(){var n=(0,j.X)((function(n){return n.cards})).isSuccess,e=(0,E.B)().setIsSuccess;return(0,c.jsx)(s.Z,{in:n,timeout:200,classNames:"success",unmountOnExit:!0,mountOnEnter:!0,children:(0,c.jsxs)("div",{className:"success",onClick:function(){e(!1)},children:[(0,c.jsx)("h1",{children:"Success"}),(0,c.jsx)("p",{children:"You have successfully deleted the card"})]})})},_=(0,i.memo)(b),N=t(6871),y=function(){var n=(0,j.X)((function(n){return n.cards})),e=n.isConfirm,t=n.activeCard,r=(0,E.B)(),i=r.setIsConfirm,o=r.deleteCardFunction,a=(0,N.UO)().id,d=(0,N.s0)();return(0,c.jsx)(s.Z,{in:e,timeout:500,classNames:"confirm",unmountOnExit:!0,mountOnEnter:!0,children:(0,c.jsx)("div",{className:"confirm",children:(0,c.jsxs)("div",{className:"confirm__body",children:[(0,c.jsx)("p",{children:"Are you sure you want to delete the card?"}),(0,c.jsxs)("div",{className:"confirm__buttons",children:[(0,c.jsx)("button",{onClick:function(){o(t._id),i(!1),a&&d(-1)},disabled:!e,children:"Yes"}),(0,c.jsx)("button",{onClick:function(){i(!1)},disabled:!e,children:"No"})]})]})})})},C=i.memo(y),k=t(3504),O=function(n){var e=n.name,t=n.trips,r=n.id,i=(0,E.B)().setIsConfirm,s=(0,j.X)((function(n){return n.cards})).cards;return(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)(k.rU,{to:s.find((function(n){return n._id===r}))?"card/".concat(r):"#",children:(0,c.jsx)("div",{className:"card__body",children:(0,c.jsxs)("div",{className:"card__info",children:[(0,c.jsxs)("h2",{children:["Name: ",e]}),(0,c.jsxs)("p",{children:["Trips: ",t]})]})})}),(0,c.jsx)("button",{className:"card__button",onClick:function(){return i(!0)},children:"\u2718"})]})},g=function(){var n=(0,j.X)((function(n){return n.cards})).isError,e=(0,E.B)().setIsError;return(0,c.jsx)(s.Z,{in:n,timeout:500,classNames:"error-card",unmountOnExit:!0,mountOnEnter:!0,children:(0,c.jsx)("div",{className:"error-card",children:(0,c.jsxs)("div",{className:"error-card__body",children:[(0,c.jsx)("h2",{className:"error-card__title",children:"Error"}),(0,c.jsx)("div",{className:"error-card__title",children:"Some error has occurred"}),(0,c.jsx)("button",{className:"error-card__button",onClick:function(){return e(!1)},children:"\u2718"})]})})})},Z=i.memo(g);var S=function(){var n=(0,N.UO)().id,e=(0,j.X)((function(n){return n.cards})),t=e.isLoading,a=e.cards,d=e.isConfirm,u=e.isError,l=(0,E.B)(),m=l.setActivCard,f=(l.setIsConfirm,function(n){var e=(0,i.useState)(""),t=(0,r.Z)(e,2),s=t[0],c=t[1];return(0,i.useEffect)((function(){document.body.setAttribute("data-".concat(n),s)}),[s]),[c]}("fixed")),h=(0,r.Z)(f,1)[0];return(0,i.useEffect)((function(){h(d||u||n?"true":"")}),[d,u,n]),(0,c.jsxs)("div",{className:"cards-list",children:[(0,c.jsx)(Z,{}),(0,c.jsx)(o,{isLoading:t}),(0,c.jsx)(_,{}),(0,c.jsx)(C,{}),(0,c.jsx)("div",{className:"cards-list__body",children:(0,c.jsx)(p,{component:"ul",children:a.map((function(n){return(0,c.jsx)(s.Z,{timeout:500,classNames:"item",children:(0,c.jsx)("li",{className:"item",onClick:function(){return m(n)},children:(0,c.jsx)(O,{id:n._id,trips:n.trips,name:n.name})})},n._id)}))})}),(0,c.jsx)(N.j3,{})]})},V=i.memo(S)}}]);
//# sourceMappingURL=816.33e1182d.chunk.js.map