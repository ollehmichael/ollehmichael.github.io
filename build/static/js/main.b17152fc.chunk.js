(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{160:function(e,t,n){},161:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(37),r=n.n(a),s=(n(160),n(54)),i=n(11),o=(n(161),n(6)),u=n(18),j=Object(u.b)({key:"global/is_logged_in",default:!1}),l=Object(u.b)({key:"global/CurrentUser",default:{username:"",isAdmin:!1,accessToken:""}}),b=Object(u.b)({key:"global/Notification",default:void 0}),d=n(24),h=n(83),O=n(19),f=n.n(O),p=n(77),v=n(114),m=n.n(v),x="https://ollehmichael.github.io";var g={GET:function(){var e=Object(p.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),POST:function(){var e=Object(p.a)(f.a.mark((function e(t,n,c){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t,n,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),POST_NO_AUTH:function(){var e=Object(p.a)(f.a.mark((function e(t,n,c){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t,n,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}()};function w(e,t,n){return new Promise((function(c,a){m.a.post("".concat(x).concat(e),t,{cancelToken:n}).then((function(e){200===e.status?c(e.data):a(e.data)})).catch((function(e){a(e)}))}))}function k(e,t){var n=y.getJWT();return new Promise((function(c,a){m.a.get("".concat(x).concat(e),{cancelToken:t,headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){200===e.status?c(e.data):a(e.data)})).catch((function(e){a(e)}))}))}function T(e,t,n){var c=y.getJWT();return new Promise((function(a,r){m.a.post("".concat(x).concat(e),{cancelToken:n,postbody:t,headers:{Authorization:"Bearer ".concat(c)}}).then((function(e){200===e.status?a(e.data):r(e.data)})).catch((function(e){r(e)}))}))}var y=new(function(){function e(){Object(d.a)(this,e),this.jwt=void 0,this.jwt=void 0}return Object(h.a)(e,[{key:"signIn",value:function(e){this.jwt=e}},{key:"signOut",value:function(){this.jwt=void 0}},{key:"getJWT",value:function(){return this.jwt}}]),e}()),I=n(200),S=n(7);var A=function(){var e=Object(u.e)(j),t=Object(u.e)(l),n=Object(u.e)(b),a=Object(c.useState)(""),r=Object(o.a)(a,2),s=r[0],i=r[1],d=Object(c.useState)(""),h=Object(o.a)(d,2),O=h[0],f=h[1],p=Object(c.useState)(void 0),v=Object(o.a)(p,2),m=v[0],x=v[1],w=Object(c.useState)(void 0),k=Object(o.a)(w,2),T=k[0],A=k[1];function J(){var c=s.trim(),a=function(e){return e.trim()}(O);(function(e,t){x(void 0),A(void 0);var n=!1;e&&e.length||(n=!0,x("Please input username"));t&&t.length||(n=!0,A("Please input password"));return!n})(c,a)&&function(e,t,n){return g.POST_NO_AUTH("/auth/signin",{username:e,password:t},n)}(s,a).then((function(c){c&&c.accessToken?(y.signIn(c.accessToken),e(!0),t({username:c.username,isAdmin:c.isAdmin,accessToken:c.accessToken}),localStorage.setItem("emsd",JSON.stringify(c))):n({title:"Login Error",message:"Invalid response: ".concat(JSON.stringify(c)),level:2})})).catch((function(e){n({title:"Network error",message:"Failed to send login request: ".concat(JSON.stringify(e)),level:2})}))}return Object(S.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(S.jsxs)(I.a,{className:"LoginForm",style:{display:"flex",flexDirection:"column",alignItems:"baseline"},onSubmit:function(e){e.preventDefault(),J()},children:[Object(S.jsx)("label",{children:"Username"}),Object(S.jsx)(I.a.Input,{value:s,onChange:function(e){return i(e.target.value)},error:m}),Object(S.jsx)("label",{children:"Password"}),Object(S.jsx)(I.a.Input,{type:"password",value:O,onChange:function(e){return f(e.target.value)},error:T}),Object(S.jsx)(I.a.Button,{onClick:function(e){e.preventDefault(),J()},children:"Login"})]})})},J=function(e){var t=e.path,n=e.exact,c=Object(u.c)(j),a=Object(o.a)(c,2),r=a[0],s=a[1];return!r||""!==y.getJWT()&&void 0!==y.getJWT()?r?Object(S.jsx)(i.b,{path:t,exact:n,children:e.children}):Object(S.jsx)(i.b,{path:t,exact:n,children:Object(S.jsx)(A,{})}):(s(!1),Object(S.jsx)(i.b,{path:t,exact:n,children:Object(S.jsx)(A,{})}))},P=n(201);var N=function(){var e=Object(i.g)().pathname,t=e?e.split("/"):"",n=t.length>1?t[1]:"";return Object(S.jsx)("div",{children:Object(S.jsxs)(P.a,{pointing:!0,secondary:!0,children:[Object(S.jsx)(P.a.Item,{as:s.b,to:"/",name:"HOME",active:""===n}),Object(S.jsx)(P.a.Item,{as:s.b,to:"/about",name:"ABOUT",n:!0,active:"about-me"===n}),Object(S.jsx)(P.a.Item,{as:s.b,to:"/resume",name:"RESUME",active:"projects"===n}),Object(S.jsx)(P.a.Item,{as:s.b,to:"/projects",name:"PROJECTS",active:"projects"===n}),Object(S.jsx)(P.a.Item,{as:s.b,to:"/contact",name:"CONTACT",active:"contact-me"===n})]})})},C=function(){return Object(S.jsx)("div",{children:"Main Page"})},E=function(){return Object(S.jsx)("div",{children:"Projects"})},W=function(){return Object(S.jsx)("div",{children:"Contact Michael"})},B=function(){return Object(S.jsx)("div",{children:"About Me"})};var U=function(){var e=Object(u.d)(j);return function(){var e=Object(u.e)(j),t=Object(u.e)(l);Object(c.useEffect)((function(){var n=localStorage.getItem("emsd");if(n&&""!==n){var c=JSON.parse(n);e(!0),t({username:c.username,isAdmin:c.isAdmin,accessToken:c.accessToken}),y.signIn(c.accessToken)}}),[t,e])}(),Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(s.a,{children:[e&&Object(S.jsx)(N,{}),Object(S.jsxs)(i.d,{children:[Object(S.jsx)(J,{path:"/",exact:!0,children:Object(S.jsx)(C,{})}),Object(S.jsx)(J,{path:"/about-me",exact:!0,children:Object(S.jsx)(B,{})}),Object(S.jsx)(J,{path:"/projects",exact:!0,children:Object(S.jsx)(E,{})}),Object(S.jsx)(J,{path:"/contact-me",exact:!0,children:Object(S.jsx)(W,{})}),Object(S.jsx)(i.a,{to:"/"})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(S.jsx)(u.a,{children:Object(S.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[188,1,2]]]);
//# sourceMappingURL=main.b17152fc.chunk.js.map