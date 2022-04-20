"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[202],{4202:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var s=n(885),r=n(2791),i=n(7462);function o(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,a(e,t)}function l(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var u=n(4164),d=!1,p=r.createContext(null),f="unmounted",m="exited",h="entering",x="entered",E="exiting",v=function(e){function t(t,n){var s;s=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return s.appearStatus=null,t.in?i?(r=m,s.appearStatus=h):r=x:r=t.unmountOnExit||t.mountOnEnter?f:m,s.state={status:r},s.nextCallback=null,s}c(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===f?{status:m}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==h&&n!==x&&(t=h):n!==h&&n!==x||(t=E)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,s=this.props.timeout;return e=t=n=s,null!=s&&"number"!==typeof s&&(e=s.exit,t=s.enter,n=void 0!==s.appear?s.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===h?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===m&&this.setState({status:f})},n.performEnter=function(e){var t=this,n=this.props.enter,s=this.context?this.context.isMounting:e,r=this.props.nodeRef?[s]:[u.findDOMNode(this),s],i=r[0],o=r[1],a=this.getTimeouts(),c=s?a.appear:a.enter;!e&&!n||d?this.safeSetState({status:x},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:h},(function(){t.props.onEntering(i,o),t.onTransitionEnd(c,(function(){t.safeSetState({status:x},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:u.findDOMNode(this);t&&!d?(this.props.onExit(s),this.safeSetState({status:E},(function(){e.props.onExiting(s),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:m},(function(){e.props.onExited(s)}))}))}))):this.safeSetState({status:m},(function(){e.props.onExited(s)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,t.nextCallback=null,e(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this),s=null==e&&!this.props.addEndListener;if(n&&!s){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],o=r[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===f)return null;var t=this.props,n=t.children,s=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,o(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(p.Provider,{value:null},"function"===typeof n?n(e,s):r.cloneElement(r.Children.only(n),s))},t}(r.Component);function N(){}v.contextType=p,v.propTypes={},v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:N,onEntering:N,onEntered:N,onExit:N,onExiting:N,onExited:N},v.UNMOUNTED=f,v.EXITED=m,v.ENTERING=h,v.ENTERED=x,v.EXITING=E;var C=v,b=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return s=t,void((n=e).classList?n.classList.remove(s):"string"===typeof n.className?n.className=l(n.className,s):n.setAttribute("class",l(n.className&&n.className.baseVal||"",s)));var n,s}))},g=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var s=t.resolveArguments(e,n),r=s[0],i=s[1];t.removeClasses(r,"exit"),t.addClass(r,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var s=t.resolveArguments(e,n),r=s[0],i=s[1]?"appear":"enter";t.addClass(r,i,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var s=t.resolveArguments(e,n),r=s[0],i=s[1]?"appear":"enter";t.removeClasses(r,i),t.addClass(r,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,s="string"===typeof n,r=s?""+(s&&n?n+"-":"")+e:n[e];return{baseClassName:r,activeClassName:s?r+"-active":n[e+"Active"],doneClassName:s?r+"-done":n[e+"Done"]}},t}c(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var s=this.getClassNames(t)[n+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&r&&(s+=" "+r),"active"===n&&e&&e.scrollTop,s&&(this.appliedClasses[t][n]=s,function(e,t){e&&t&&t.split(" ").forEach((function(t){return s=t,void((n=e).classList?n.classList.add(s):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,s)||("string"===typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))}(e,s))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],s=n.base,r=n.active,i=n.done;this.appliedClasses[t]={},s&&b(e,s),r&&b(e,r),i&&b(e,i)},n.render=function(){var e=this.props,t=(e.classNames,o(e,["classNames"]));return r.createElement(C,(0,i.Z)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(r.Component);g.defaultProps={classNames:""},g.propTypes={};var j=g,y=n(184),k=function(e){var t=e.isLoading;return(0,y.jsx)(j,{in:t,classNames:"loading",timeout:800,unmountOnExit:!0,mountOnEnter:!0,children:(0,y.jsx)("div",{className:"loading",children:(0,y.jsx)("div",{className:"loading__body",children:(0,y.jsx)("p",{children:"Loading...."})})})})};function O(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function S(e,t,n){return null!=n[t]?n[t]:e.props[t]}function _(e,t,n){var s=O(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var s,r=Object.create(null),i=[];for(var o in e)o in t?i.length&&(r[o]=i,i=[]):i.push(o);var a={};for(var c in t){if(r[c])for(s=0;s<r[c].length;s++){var l=r[c][s];a[r[c][s]]=n(l)}a[c]=n(c)}for(s=0;s<i.length;s++)a[i[s]]=n(i[s]);return a}(t,s);return Object.keys(i).forEach((function(o){var a=i[o];if((0,r.isValidElement)(a)){var c=o in t,l=o in s,u=t[o],d=(0,r.isValidElement)(u)&&!u.props.in;!l||c&&!d?l||!c||d?l&&c&&(0,r.isValidElement)(u)&&(i[o]=(0,r.cloneElement)(a,{onExited:n.bind(null,a),in:u.props.in,exit:S(a,"exit",e),enter:S(a,"enter",e)})):i[o]=(0,r.cloneElement)(a,{in:!1}):i[o]=(0,r.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:S(a,"exit",e),enter:S(a,"enter",e)})}})),i}var T=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},L=function(e){function t(t,n){var s,r=(s=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(s));return s.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},s}c(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,s,i=t.children,o=t.handleExited;return{children:t.firstRender?(n=e,s=o,O(n.children,(function(e){return(0,r.cloneElement)(e,{onExited:s.bind(null,e),in:!0,appear:S(e,"appear",n),enter:S(e,"enter",n),exit:S(e,"exit",n)})}))):_(e,i,o),firstRender:!1}},n.handleExited=function(e,t){var n=O(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,i.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,s=o(e,["component","childFactory"]),i=this.state.contextValue,a=T(this.state.children).map(n);return delete s.appear,delete s.enter,delete s.exit,null===t?r.createElement(p.Provider,{value:i},a):r.createElement(p.Provider,{value:i},r.createElement(t,s,a))},t}(r.Component);L.propTypes={},L.defaultProps={component:"div",childFactory:function(e){return e}};var R=L,A=n(2380),D=n(9789),I=function(){var e=(0,A.X)((function(e){return e.cards})).isSuccess,t=(0,D.B)().setIsSuccess;return(0,y.jsx)(j,{in:e,timeout:500,classNames:"success",unmountOnExit:!0,mountOnEnter:!0,children:(0,y.jsxs)("div",{className:"success",onClick:function(){t(!1)},children:[(0,y.jsx)("h1",{children:"Success"}),(0,y.jsx)("p",{children:"You have successfully deleted the card"})]})})},M=(0,r.memo)(I),V=n(6871),P=function(){var e=(0,A.X)((function(e){return e.cards})),t=e.isConfirm,n=e.activeCardId,s=(0,D.B)(),r=s.setIsConfirm,i=s.deleteCardFunction,o=(0,V.UO)().id,a=(0,V.s0)();return(0,y.jsx)(j,{in:t,timeout:500,classNames:"confirm",unmountOnExit:!0,mountOnEnter:!0,children:(0,y.jsx)("div",{className:"confirm",children:(0,y.jsxs)("div",{className:"confirm__body",children:[(0,y.jsx)("p",{children:"Are you sure you want to delete the card?"}),(0,y.jsxs)("div",{className:"confirm__buttons",children:[(0,y.jsx)("button",{onClick:function(){i(n),r(!1),o&&a(-1)},disabled:!t,children:"Yes"}),(0,y.jsx)("button",{onClick:function(){r(!1)},disabled:!t,children:"No"})]})]})})})},U=r.memo(P),w=n(3504),X=function(e){var t=e.name,n=e.trips,s=e.id,r=(0,D.B)().setIsConfirm,i=(0,A.X)((function(e){return e.cards})).cards;return(0,y.jsxs)("div",{className:"card",children:[(0,y.jsx)(w.rU,{to:i.find((function(e){return e._id===s}))?"card/".concat(s):"#",children:(0,y.jsx)("div",{className:"card__body",children:(0,y.jsxs)("div",{className:"card__info",children:[(0,y.jsxs)("h2",{children:["Name: ",t]}),(0,y.jsxs)("p",{children:["Trips: ",n]})]})})}),(0,y.jsx)("button",{className:"card__button",onClick:function(){return r(!0)},children:"\u2718"})]})},F=function(){var e=(0,A.X)((function(e){return e.cards})).isError,t=(0,D.B)().setIsError;return(0,y.jsx)(j,{in:e,timeout:500,classNames:"error-card",unmountOnExit:!0,mountOnEnter:!0,children:(0,y.jsx)("div",{className:"error-card",children:(0,y.jsxs)("div",{className:"error-card__body",children:[(0,y.jsx)("h2",{className:"error-card__title",children:"Error"}),(0,y.jsx)("div",{className:"error-card__title",children:"Some error has occurred"}),(0,y.jsx)("button",{className:"error-card__button",onClick:function(){return t(!1)},children:"\u2718"})]})})})},B=r.memo(F);var Z=function(){var e=(0,V.UO)().id,t=(0,A.X)((function(e){return e.cards})),n=t.isLoading,i=t.cards,o=t.isConfirm,a=t.isError,c=(0,D.B)(),l=c.setId,u=c.setIsConfirm,d=function(e){var t=(0,r.useState)(""),n=(0,s.Z)(t,2),i=n[0],o=n[1];return(0,r.useEffect)((function(){document.body.setAttribute("data-".concat(e),i)}),[i]),[o]}("fixed"),p=(0,s.Z)(d,1)[0];return(0,r.useEffect)((function(){p(o||a||e?"true":"")}),[o,a,e]),(0,y.jsxs)("div",{className:"cards-list",children:[(0,y.jsx)(B,{}),(0,y.jsx)(k,{isLoading:n}),(0,y.jsx)(M,{}),(0,y.jsx)(U,{}),(0,y.jsx)("div",{className:"cards-list__body",children:(0,y.jsx)(R,{component:"ul",children:i.map((function(e){var t=e._id,n=e.trips,s=e.name;return(0,y.jsx)(j,{timeout:500,classNames:"item",children:(0,y.jsx)("li",{className:"item",onClick:function(e){l(t),e.target.classList.contains("card__button")&&u(!0)},children:(0,y.jsx)(X,{id:t,trips:n,name:s})})},t)}))})}),(0,y.jsx)(j,{timeout:500,classNames:"info",in:!!e,children:(0,y.jsx)(V.j3,{})})]})},$=r.memo(Z)}}]);
//# sourceMappingURL=202.e8259313.chunk.js.map