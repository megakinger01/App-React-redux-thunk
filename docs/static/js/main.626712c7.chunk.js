(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(30),s=a.n(n),i=a(19),r=a(17),o=a(8),l=a(10),j=a(26);a(155),a(69);j.a.initializeApp({apiKey:"AIzaSyD28fPzNL613WJadgsAFI7VkfpL3AuKgWM",authDomain:"react-app-cursos-9c29b.firebaseapp.com",databaseURL:"https://react-app-cursos-9c29b.firebaseio.com",projectId:"react-app-cursos-9c29b",storageBucket:"react-app-cursos-9c29b.appspot.com",messagingSenderId:"949408227388",appId:"1:949408227388:web:cb08accfeb42fbad432339"});j.a.firestore;var u=new j.a.auth.GoogleAuthProvider,d=a(32),b=a(7),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(i.a)(t,2),n=a[0],s=a[1],r=function(){s(e)},o=function(e){var t=e.target;s(Object(b.a)(Object(b.a)({},n),{},Object(d.a)({},t.name,t.value)))};return[n,o,r]},h=a(28),p=a.n(h),O=a(40),x=a(27),f=a.n(x),g="[Auth] login",v="[Auth] logout",N="[UI] set Error ",y="[UI] remove Error ",w="[UI] Start loading",A="[UI] Finish loading",E="[ASIDE] mostrar aside",_="[ASIDE] ocultar aside",I=function(e){return{type:N,payload:e}},k=function(){return{type:A}},S=function(e,t){return function(a){a({type:w}),j.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;console.log(t),a(C(t.uid,t.displayName)),a(k())})).catch((function(e){console.log(e),a(k()),f.a.fire("Error",e.message,"error")}))}},C=function(e,t){return{type:g,payload:{uid:e,displayName:t}}},P=function(){return{type:v}},D=a(1),U=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})).loading,a=m({email:"",password:""}),c=Object(i.a)(a,2),n=c[0],s=c[1],o=n.email,d=n.password;return Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)("h3",{className:"mt-3",children:"App"}),Object(D.jsx)("div",{className:"row",children:Object(D.jsxs)("div",{className:"pb-3",children:[Object(D.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(S(o,d))},children:[Object(D.jsx)("label",{className:"form-label",children:"Email"}),Object(D.jsx)("input",{className:"form-control mb-2",value:o,name:"email",onChange:s,type:"text"}),Object(D.jsx)("label",{className:"form-label",children:"Password"}),Object(D.jsx)("input",{className:"form-control mb-2",value:d,name:"password",onChange:s,type:"password"}),Object(D.jsx)("div",{className:"d-grid gap-2 col-8 mx-auto mt-2",children:Object(D.jsx)("button",{type:"submit",className:"btn btn-primary",disabled:t,children:"Ingresar"})})]}),Object(D.jsx)("hr",{}),Object(D.jsx)("div",{className:"d-grid gap-2 col-8 mx-auto mt-2 mb-2",children:Object(D.jsxs)("button",{type:"submit",onClick:function(){e((function(e){j.a.auth().signInWithPopup(u).then((function(t){var a=t.user;e(C(a.uid,a.displayName))}))}))},className:"btn btn-primary",children:["Inicia con",Object(D.jsx)("img",{className:"google-icon mx-2",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})]})}),Object(D.jsxs)("div",{className:"d-flex align-items-center ",children:[Object(D.jsx)("span",{className:"",children:"\xbfNo tienes cuenta?"}),Object(D.jsx)(r.b,{to:"/auth/register",className:"link mx-2",children:"reg\xedstrate"})]})]})})]})},L=function(){return Object(D.jsx)("div",{children:Object(D.jsx)("div",{className:"container ",children:Object(D.jsxs)("div",{className:"row  mx-3 row_login",children:[Object(D.jsx)("div",{className:" col-12 col-sm-12 col-md-6 bg_img_login",children:Object(D.jsx)("h3",{className:"mt-3 img_title_login",children:" Inicia sesi\xf3n  "})}),Object(D.jsx)("div",{className:" col-12 col-sm-12 col-md-6  form_login_cont",children:Object(D.jsx)(U,{})})]})})})},R=a(43),W=a.n(R),z=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})).msgError,a=m({name:"",lastName:"",email:"",email2:"",password:"",password2:""}),c=Object(i.a)(a,2),n=c[0],s=c[1],o=n.name,u=n.lastName,d=n.email,b=n.email2,h=n.password,x=n.password2,g=function(){return 0===o.trim().length?(e(I("el nombre es requerido")),!1):0===u.trim().length?(e(I("el apellido es requerido")),!1):W.a.isEmail(d)&&W.a.isEmail(b)?d!==b?(e(I("email debe ser igual")),!1):!(h!==x||h.length<4)||(e(I("password incorrecto")),!1):(e(I("email no es correcto")),!1)};return Object(D.jsx)("div",{className:"container",children:Object(D.jsx)("div",{className:"row d-flex justify-content-center",children:Object(D.jsxs)("div",{className:"col-8  border rounded-3 mt-5 p-3",children:[Object(D.jsx)("h3",{children:"Registro"}),t&&Object(D.jsx)("div",{className:"alert alert-danger  alert_span",children:t}),Object(D.jsxs)("form",{onSubmit:function(t){t.preventDefault(),g()&&(e(function(e,t,a){return function(c){j.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(O.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.user,e.next=3,n.updateProfile({displayName:a});case 3:c(C(n.uid,n.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),f.a.fire("Error",e.message,"error")}))}}(d,h,o)),f.a.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500}))},children:[Object(D.jsxs)("div",{className:"d-flex justify-content-center ",children:[Object(D.jsx)("input",{className:"form-control m-2",onChange:s,value:o,name:"name",placeholder:"Nombre",type:"text"}),Object(D.jsx)("input",{className:"form-control m-2",onChange:s,value:u,name:"lastName",placeholder:"Apellido",type:"text"})]}),Object(D.jsxs)("div",{className:"d-flex justify-content-center x",children:[Object(D.jsx)("input",{className:"form-control m-2",onChange:s,value:d,name:"email",placeholder:"email",type:"text"}),Object(D.jsx)("input",{className:"form-control m-2",onChange:s,value:b,name:"email2",placeholder:"confirma email",type:"text"})]}),Object(D.jsxs)("div",{className:"d-flex justify-content-center ",children:[Object(D.jsx)("input",{className:"form-control m-2",onChange:s,value:h,name:"password",placeholder:"contrase\xf1a",type:"password"}),Object(D.jsx)("input",{className:"form-control m-2",onChange:s,value:x,name:"password2",placeholder:"confirma contrase\xf1a",type:"password"})]}),Object(D.jsx)("div",{className:"d-grid gap-2 col-4 mx-auto mt-3",children:Object(D.jsx)("button",{className:"btn btn-primary btn-sm",children:"Registrate"})})]}),Object(D.jsx)("hr",{}),Object(D.jsxs)("div",{className:"d-flex align-items-center justify-content-center",children:[Object(D.jsx)("span",{children:"Ya tengo cuenta"}),Object(D.jsx)(r.b,{to:"/auth/login",className:"link mx-2",children:"Inicia sesi\xf3n"})]})]})})})},B=function(){return Object(D.jsx)("header",{})},F=function(){return Object(D.jsx)("footer",{className:"fixed-bottom"})},G=function(){return Object(D.jsxs)("div",{children:[Object(D.jsx)(B,{}),Object(D.jsxs)(o.d,{children:[Object(D.jsx)(o.b,{exact:!0,path:"/auth/login",component:L}),Object(D.jsx)(o.b,{exact:!0,path:"/auth/register",component:z}),Object(D.jsx)(o.a,{to:"/auth/login"})]}),Object(D.jsx)(F,{})]})},J=[{title:"Home",path:"/home",icon:Object(D.jsx)("i",{className:"bi bi-house-door"}),cName:"nav-text"},{title:" QR",path:"/archivo",icon:Object(D.jsx)("i",{className:"bi bi-record2"}),cName:"nav-text"},{title:"Scan",path:"/portafolio",icon:Object(D.jsx)("i",{className:"bi bi-upc-scan"}),cName:"nav-text"},{title:"pendiente",path:"/pendiente",icon:Object(D.jsx)("i",{className:"bi bi-calendar2-plus"}),cName:"nav-text"},{title:"Estadistica",path:"/estadistica",icon:Object(D.jsx)("i",{className:"bi bi-graph-up"}),cName:"nav-text"},{title:"Imagenes",path:"/imagenes",icon:Object(D.jsx)("i",{className:"bi bi-card-image"}),cName:"nav-text"}],q=function(){var e=Object(l.b)();return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("nav",{className:"aside-menu",children:Object(D.jsxs)("ul",{className:"nav-text",children:[Object(D.jsx)("li",{className:"",children:Object(D.jsx)(r.b,{to:"#",className:"link_aside",children:Object(D.jsx)("i",{className:"bi bi-arrow-left-circle",onClick:function(){e({type:_})}})})}),Object(D.jsx)("ul",{children:J.map((function(e,t){return Object(D.jsx)("li",{className:e.cName,children:Object(D.jsxs)(r.b,{className:"link_aside",to:e.path,children:[e.icon,Object(D.jsx)("span",{className:"span_title",children:e.title})]})},t)}))})]})})})},H=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.login})).name,a=Object(l.c)((function(e){return e.aside})).showAside;return Object(D.jsxs)("div",{children:[Object(D.jsxs)("ul",{className:"nav align-items-center justify-content-between nav_style",children:[Object(D.jsxs)("li",{className:"nav-item d-flex",children:[Object(D.jsx)("h3",{children:Object(D.jsx)("i",{className:"bi bi-card-list icon_app mx-4",onClick:function(){e({type:E})}})}),Object(D.jsxs)("h3",{children:["Hola, ",Object(D.jsx)("span",{className:"user_nav",children:t})]})]}),Object(D.jsx)("li",{className:"nav-item",children:Object(D.jsx)("button",{className:"btn btn-outline-primary m-3",onClick:function(){e(function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.auth().signOut();case 2:t(P());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"logout"})})]}),a&&Object(D.jsx)(q,{})]})},K=a(33),M=function(e){var t=e.isAuthenticated,a=e.component,c=Object(K.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",c.location.pathname),Object(D.jsx)(o.b,Object(b.a)(Object(b.a)({},c),{},{component:function(e){return t?Object(D.jsx)(a,Object(b.a)({},e)):Object(D.jsx)(o.a,{to:"/auth/login"})}}))},T=function(e){var t=e.isAuthenticated,a=e.component,c=Object(K.a)(e,["isAuthenticated","component"]);return Object(D.jsx)(o.b,Object(b.a)(Object(b.a)({},c),{},{component:function(e){return t?Object(D.jsx)(o.a,{to:"/"}):Object(D.jsx)(a,Object(b.a)({},e))}}))},V=function(){var e=Object(l.b)(),t=Object(c.useState)(!0),a=Object(i.a)(t,2),n=a[0],s=a[1],u=Object(c.useState)(!1),d=Object(i.a)(u,2),b=d[0],m=d[1];return Object(c.useEffect)((function(){j.a.auth().onAuthStateChanged((function(t){(null===t||void 0===t?void 0:t.uid)?(e(C(t.uid,t.displayName)),m(!0)):m(!1),s(!1)}))}),[e,s,m]),n?Object(D.jsx)("h1",{children:"Espere...."}):Object(D.jsx)("div",{children:Object(D.jsx)(r.a,{children:Object(D.jsx)("div",{className:"",children:Object(D.jsxs)(o.d,{children:[Object(D.jsx)(T,{isAuthenticated:b,path:"/auth",component:G}),Object(D.jsx)(M,{isAuthenticated:b,exact:!0,path:"/",component:H}),Object(D.jsx)(o.a,{to:"/auth/login"})]})})})})},X=function(){return Object(D.jsx)("div",{children:Object(D.jsx)(V,{})})},Y=a(20),Q=a(59),Z={},$={loading:!1,msgError:null},ee={showAside:!0},te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.d,ae=Object(Y.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(b.a)(Object(b.a)({},e),{},{uid:t.payload.uid,name:t.payload.displayName});case v:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(b.a)(Object(b.a)({},e),{},{msgError:t.payload});case y:return Object(b.a)(Object(b.a)({},e),{},{msgError:null});case w:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case A:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});default:return e}},aside:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{showAside:!0};case _:return{showAside:!1};default:return e}}}),ce=Object(Y.e)(ae,te(Object(Y.a)(Q.a))),ne=function(){return Object(D.jsx)(l.a,{store:ce,children:Object(D.jsx)(X,{})})};a(152),a(153);s.a.render(Object(D.jsx)(ne,{}),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.626712c7.chunk.js.map