(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=n(0);function m(e){return e.toUTCString().slice(-12,-4)}var d=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={currentTime:new Date},e.timerId=0,e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){var t=new Date;window.console.info(m(t)),e.setState({currentTime:t})}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=e.name,n=this.props.name;t!==n&&window.console.debug("Renamed from ".concat(t," to ").concat(n))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.currentTime,t=this.props.name;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:m(e)})]})}}]),n}(l.Component);n(13);function v(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=0,e.mouseClickHandler=function(t){0===t.button&&e.setState({hasClock:!0}),2===t.button&&e.setState({hasClock:!1})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:v()})}),3300),document.oncontextmenu=function(e){e.preventDefault()},document.addEventListener("mouseup",this.mouseClickHandler)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("mouseup",this.mouseClickHandler)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.hasClock;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"React clock"}),n&&Object(u.jsx)(d,{name:t})]})}}]),n}(l.Component);o.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a30bcdbd.chunk.js.map