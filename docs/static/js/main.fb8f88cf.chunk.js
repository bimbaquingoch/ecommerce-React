(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{152:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(17),i=a.n(r),s=a(13),l=a(199),o=a(202),d=a(43),j=a(107),m=a.n(j),b=a(203),u=a(25),h=a(3),x=Object(c.createContext)(),O=function(e){var t=e.reducer,a=e.initialState,n=e.children;return Object(h.jsx)(x.Provider,{value:Object(c.useReducer)(t,a),children:n})},p=function(){return Object(c.useContext)(x)},g=a(106),f=a.n(g),v=a(87),y=(v.a.initializeApp({apiKey:"AIzaSyACXrZzGCdQcLV8AZCrOEHLDtvn2wGmyd4",authDomain:"calidad-ecommerce.firebaseapp.com",projectId:"calidad-ecommerce",storageBucket:"calidad-ecommerce.appspot.com",messagingSenderId:"782794406271",appId:"1:782794406271:web:4f9de1e4db36810036c24a",measurementId:"G-TSV5FX38NQ"}),v.a.auth()),N=a(88),_=a(42),C="ADD_TO_BASKET",S="REMOVE_ITEM",w="SET_USER",k="EMPTY_BASKET",I=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.precio+e}),0)},A=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(_.a)(Object(_.a)({},e),{},{basket:[].concat(Object(N.a)(e.basket),[t.item])});case"REMOVE_ITEM":var a=e.basket.findIndex((function(e){return e.id===t.id})),c=Object(N.a)(e.basket);return a>=0?c.splice(a,1):console.log("no se puede eliminar el producto"),Object(_.a)(Object(_.a)({},e),{},{basket:c});case"SET_USER":return Object(_.a)(Object(_.a)({},e),{},{user:t.user});case"EMPTY_BASKET":return Object(_.a)(Object(_.a)({},e),{},{basket:t.basket});default:return e}},E=a(20),T=a(27),W=a.n(T),R=(a(97),function(){var e=p(),t=Object(s.a)(e,2),a=t[0],c=a.basket,n=a.user,r=t[1],i=Object(E.f)();return Object(h.jsx)(l.a,{position:"static",children:Object(h.jsxs)(o.a,{children:[Object(h.jsxs)("div",{className:"eco-whats",children:[Object(h.jsx)(u.b,{accessKey:"a",title:"(Alt+A)=HOME",exact:{exact:!0},className:"navbar-brand",to:"/ecommerce-React/",children:Object(h.jsx)(d.a,{variant:"h6",children:"Ecommerce"})}),Object(h.jsxs)("a",{accessKey:"w",title:"(Alt+W)=Ask for Help",className:"btn btn-success",href:"https://api.whatsapp.com/send/?phone=593963766640&text=Hola!%20Me%20Interesan%20sus%20productos.&app_absent=0",target:"_blank",rel:"noreferrer",children:[Object(h.jsx)(f.a,{}),Object(h.jsx)("strong",{className:"whats",children:"Ask for Help"})]})]}),Object(h.jsx)("h3",{children:n?"Bienvenido":" "}),Object(h.jsxs)("div",{className:"header-navbar__buttons",children:[n?Object(h.jsx)(u.b,{exact:{exact:!0},to:"/ecommerce-React/login",accessKey:"s",title:"(Alt+S)=Sign Out",className:"btn btn-secondary",onClick:function(){n&&(y.signOut(),r({type:k,basket:[]}),r({type:w,user:null}),i.push("/ecommerce-React/")),W()({title:"Sign Out",text:"Good bye",icon:"success",button:"OK",timer:"2000"})},children:Object(h.jsx)("strong",{children:"Sign Out"})}):Object(h.jsx)(u.b,{exact:{exact:!0},to:"/ecommerce-React/login",accessKey:"s",title:"(Alt+S)=Sign in",className:"btn btn-secondary",children:Object(h.jsx)("strong",{children:"Sign In"})}),Object(h.jsx)(u.b,{className:"btn btn-outline",accessKey:"c",title:"(Alt+C)=Go to Cart",exact:{exact:!0},to:"/ecommerce-React/paycart",children:Object(h.jsx)(b.a,{badgeContent:null===c||void 0===c?void 0:c.length,color:"secondary",children:Object(h.jsx)(m.a,{fontSize:"large",color:"primary"})})})]})]})})}),q=(a(152),function(e){var t=e.setFiltro,a=Object(c.useState)([""]),n=Object(s.a)(a,2),r=n[0],i=n[1],l=function(e){var t=e.target;i(t.value)};return Object(h.jsxs)("form",{className:"btns-filtro",onSubmit:function(e){e.preventDefault(),t([r])},children:[Object(h.jsx)("button",{className:"btn btn-primary btn-lg animate__fadeInUp",onClick:l,type:"submit",id:"jewelery",value:"jewelery",name:"jewelery",children:"Jewelery"}),Object(h.jsx)("button",{className:"btn btn-primary btn-lg animate__fadeInUp",onClick:l,type:"submit",id:"electronics",value:"electronics",name:"electronics",children:"Electronics"}),Object(h.jsx)("button",{className:"btn btn-primary btn-lg animate__fadeInUp",onClick:l,type:"submit",id:"menClotes",value:"men's clothing",name:"menClothes",children:"Men's"}),Object(h.jsx)("button",{className:"btn btn-primary btn-lg animate__fadeInUp",onClick:l,type:"submit",id:"womenClotes",value:"women's clothing",name:"womenClothes",children:"Women's"})]})}),B=a(206),F=a(204),P=a(207),U=a(205),D=a(110),K=a.n(D),M=a(109),z=a.n(M),V=a(86),L=a.n(V),Y=a(108),G=function(){var e=Object(Y.a)(L.a.mark((function e(t){var a,c,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://fakestoreapi.com/products/",e.next=3,fetch("https://fakestoreapi.com/products/");case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,n=c.map((function(e){return{categoria:e.category,desc:e.description,id:e.id,img:e.image,precio:e.price,titulo:e.title}})),e.abrupt("return",n.filter((function(e){return e.categoria===t[0]})));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=a(34),J=a.n(H),$=function(){return Object(h.jsxs)("div",{className:"card-content animate__animated",children:[Object(h.jsx)("br",{}),Object(h.jsx)(H.SkeletonTheme,{color:"#2d3556",highlightColor:"#38c9e5",children:Object(h.jsx)(J.a,{variant:"rect",width:230,height:48})}),Object(h.jsx)("br",{}),Object(h.jsx)(H.SkeletonTheme,{color:"#2d3556",highlightColor:"#38c9e5",children:Object(h.jsx)(J.a,{variant:"rect",width:200,height:200})}),Object(h.jsx)("h2",{className:"card-content__precio",children:Object(h.jsx)(H.SkeletonTheme,{color:"#2d3556",highlightColor:"#38c9e5",children:Object(h.jsx)(J.a,{variant:"rect",width:125,height:48})})}),Object(h.jsxs)(F.a,{className:"card-content__icons",disableSpacing:!0,children:[Object(h.jsx)(U.a,{"aria-label":"add to cart",children:Object(h.jsx)(H.SkeletonTheme,{color:"#2d3556",highlightColor:"#38c9e5",children:Object(h.jsx)(J.a,{animation:"wave",variant:"circle",width:50,height:50})})}),Object(h.jsx)(U.a,{children:Object(h.jsx)(H.SkeletonTheme,{color:"#2d3556",highlightColor:"#38c9e5",children:Object(h.jsx)(J.a,{animation:"wave",variant:"circle",width:50,height:50})})})]})]})},Q=a(59),Z=a.n(Q),X=(a(157),function(e){var t=function(e){var t=Object(c.useState)({data:[],loading:!0}),a=Object(s.a)(t,2),n=a[0],r=a[1];return Object(c.useEffect)((function(){G(e).then((function(e){r({data:e,loading:!1})}))}),[e]),n}(e.filtro),a=t.data,n=t.loading,r=Object(c.useState)(!1),i=Object(s.a)(r,2),l=i[0],o=i[1],j=function(){o(!l)},m=p(),b=Object(s.a)(m,2)[1];return Object(h.jsx)(h.Fragment,{children:n?Object(h.jsx)($,{}):a.map((function(e){var t=e.id,a=e.titulo,c=e.img,n=e.precio,r=e.desc;return Object(h.jsxs)("section",{className:"card card-content animate__animated animate__flipInY",children:[Object(h.jsx)(B.a,{className:"card-title card-content__header",title:a,"aria-label":a}),Object(h.jsx)("img",{className:"card-img-top card-content__img",src:c,alt:a}),Object(h.jsx)("h2",{className:"card-content__precio",children:Z.a.formatMoney(n)}),Object(h.jsxs)(F.a,{className:"card-content__icons",disableSpacing:!0,children:[Object(h.jsx)(U.a,{"aria-label":"add to cart",onClick:function(){!function(e,t,a,c){W()({title:"Add to cart",text:"Are you sure add to cart?",icon:"info",buttons:["NO","YES"]}).then((function(n){n&&(b({type:C,item:{id:e,titulo:t,img:a,precio:c}}),W()({title:"Added",text:"Product added successfully",icon:"success",timer:"2000"}))}))}(t,a,c,n)},children:Object(h.jsx)(z.a,{fontSize:"large",color:"primary"})}),Object(h.jsx)(U.a,{className:"btn btn-outline-primary",onClick:j,"aria-expanded":l,"aria-label":"show more",children:Object(h.jsx)(K.a,{fontSize:"large",color:"primary"})})]}),Object(h.jsx)(P.a,{in:l,timeout:"auto",unmountOnExit:!0,children:Object(h.jsxs)("div",{className:"card-text card-content__descripcion",children:[Object(h.jsx)("h3",{children:"Description:"}),Object(h.jsx)(d.a,{paragraph:!0,children:r})]})})]},t)}))})}),ee=(a(158),a(159),function(){var e=Object(c.useState)(["men's clothing"]),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(h.jsxs)("main",{children:[Object(h.jsx)("section",{className:"btn-categorias",children:Object(h.jsx)(q,{setFiltro:n})}),Object(h.jsx)("section",{className:"cards-products",children:a.map((function(e){return Object(h.jsx)(X,{filtro:a},e)}))})]})}),te=a(111),ae=a.n(te),ce=function(e){var t=[e.product],a=p(),c=Object(s.a)(a,2)[1];return Object(h.jsx)(h.Fragment,{children:t.map((function(e){var t=e.id,a=e.titulo,n=e.img,r=e.precio;return Object(h.jsxs)("section",{className:"card-content animate__animated animate__flipInY",children:[Object(h.jsx)(B.a,{className:"card-content__header",title:a,"aria-label":a}),Object(h.jsx)("img",{className:"card-content__img",src:n,alt:a}),Object(h.jsxs)(F.a,{className:"card-content__icons",disableSpacing:!0,children:[Object(h.jsx)(U.a,{accessKey:"q",title:"(Alt+Q)=Delete item","aria-label":"add to cart",onClick:function(){return function(e){W()({title:"Delete",text:"Do you want delete this product?",icon:"warning",buttons:["NO","YES"]}).then((function(t){t&&(c({type:S,id:e}),W()({title:"Deleted",text:"Product deleted successfully",icon:"success",timer:"2000"}))}))}(t)},children:Object(h.jsx)(ae.a,{fontSize:"large",color:"secondary"})}),Object(h.jsx)("h2",{className:"card-content__precio",children:Z.a.formatMoney(r)})]})]},t)}))})},ne=function(){var e=p(),t=Object(s.a)(e,1)[0],a=t.basket,c=t.user;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h2",{className:"animate__fadeInUp",children:["Total products: ",null===a||void 0===a?void 0:a.length]}),Object(h.jsxs)("div",{className:"total-pagar",children:[Object(h.jsx)("h2",{className:"animate__fadeInUp",children:Z.a.formatMoney(I(a))}),c?Object(h.jsx)(u.b,{className:"btn btn-danger animate__fadeInUp",to:"/ecommerce-React/paypage",children:Object(h.jsx)("strong",{children:"Checkout"})}):Object(h.jsx)(u.b,{className:"btn btn-danger animate__fadeInUp",to:"/ecommerce-React/login",onClick:function(){W()({title:"Sign In",text:"Plese Sign In to pay",icon:"warning",button:"OK",timer:"3000"})},children:Object(h.jsx)("strong",{children:"Checkout"})})]})]})},re=(a(160),function(){return Object(h.jsxs)("div",{className:"card card-vacio animate__animated animate__fadeInUp",children:[Object(h.jsx)("h2",{className:"card-title card-vacio__header",children:"Empty Cart"}),Object(h.jsx)("img",{className:"card-vacio__gif",src:"https://media.giphy.com/media/m6aIggqT7oB4A/giphy.gif",alt:"gif cart empty"}),Object(h.jsx)(u.b,{className:"button-link",to:"/ecommerce-React/",children:Object(h.jsx)("p",{className:"btn btn-outline-primary card-text card-vacio__parrafo",children:"Shop NOW!"})})]})}),ie=(a(161),function(){var e=p(),t=Object(s.a)(e,1)[0].basket;return Object(h.jsx)(h.Fragment,{children:0===t.length?Object(h.jsx)(re,{}):Object(h.jsxs)("main",{children:[Object(h.jsxs)("section",{className:"title-pagecart",children:[Object(h.jsx)("h1",{className:"animate__fadeInUp",children:"Shopping Cart"}),Object(h.jsx)(ne,{basket:t})]}),Object(h.jsx)("section",{className:"cards-products",children:null===t||void 0===t?void 0:t.map((function(e){return Object(h.jsx)(ce,{product:e},e.id)}))})]})})}),se=a(221),le=a(211),oe=a(217),de=a(212),je=a(218),me=a(75),be=a.n(me),ue=a(208),he=a(209);a(99);function xe(){return Object(h.jsx)("div",{className:"text-center p-3",children:Object(h.jsxs)("a",{className:"text-copy",href:"https://github.com/bimbaquingoch/ecommerce-React",target:"_blank",rel:"noreferrer",children:["\xa9 2021 Copyright: ",Object(h.jsx)("strong",{children:" bimbaquingoch"})]})})}var Oe=Object(ue.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),pe=function(){var e=Oe(),t=Object(c.useState)(""),a=Object(s.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),o=l[0],j=l[1],m=Object(E.f)();return Object(h.jsxs)(he.a,{component:"main",maxWidth:"xs",children:[Object(h.jsxs)("div",{className:e.paper,children:[Object(h.jsx)(se.a,{className:e.avatar,children:Object(h.jsx)(be.a,{})}),Object(h.jsx)(d.a,{className:"form-title",component:"h1",variant:"h5",children:"Sign in"}),Object(h.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(h.jsx)(oe.a,{className:"form-control",value:n,onChange:function(e){var t=e.target;return r(t.value)},variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(h.jsx)(oe.a,{className:"form-control",value:o,onChange:function(e){var t=e.target;return j(t.value)},margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",variant:"filled"}),Object(h.jsx)(le.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){e.preventDefault(),y.signInWithEmailAndPassword(n,o).then((function(){m.push("/ecommerce-React/"),W()({title:"Welcome! ".concat(n),text:"Sign In successfully",icon:"success",button:"OK",timer:"3000"})})).catch((function(e){return W()({title:"Sign In",text:e.message,icon:"warning",button:"OK"})}))},children:"Sign In"}),Object(h.jsx)(de.a,{container:!0,children:Object(h.jsx)(de.a,{item:!0,children:Object(h.jsx)(u.b,{to:"register",children:"Don't have an account? Sign Up"})})})]})]}),Object(h.jsx)(je.a,{mt:8,children:Object(h.jsx)(xe,{})})]})};function ge(){return Object(h.jsx)("div",{className:"text-center p-3",children:Object(h.jsxs)("a",{className:"text-copy",href:"https://github.com/bimbaquingoch/ecommerce-React",target:"_blank",rel:"noreferrer",children:["\xa9 2021 Copyright: ",Object(h.jsx)("strong",{children:" bimbaquingoch"})]})})}var fe=Object(ue.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function ve(){var e=fe(),t=Object(c.useState)(""),a=Object(s.a)(t,2),n=a[0],r=a[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),o=l[0],j=l[1],m=Object(c.useState)(""),b=Object(s.a)(m,2),x=b[0],O=b[1],p=Object(c.useState)(""),g=Object(s.a)(p,2),f=g[0],v=g[1],N=Object(E.f)();return Object(h.jsxs)(he.a,{component:"main",maxWidth:"xs",children:[Object(h.jsxs)("div",{className:e.paper,children:[Object(h.jsx)(se.a,{className:e.avatar,children:Object(h.jsx)(be.a,{})}),Object(h.jsx)(d.a,{className:"form-title",component:"h1",variant:"h5",children:"Sign up"}),Object(h.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(h.jsxs)(de.a,{container:!0,spacing:2,children:[Object(h.jsx)(de.a,{item:!0,xs:12,sm:6,children:Object(h.jsx)(oe.a,{className:"form-control",variant:"filled",value:n,onChange:function(e){var t=e.target;return r(t.value)},autoComplete:"fname",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),Object(h.jsx)(de.a,{item:!0,xs:12,sm:6,children:Object(h.jsx)(oe.a,{className:"form-control",value:o,onChange:function(e){var t=e.target;return j(t.value)},variant:"filled",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})}),Object(h.jsx)(de.a,{item:!0,xs:12,children:Object(h.jsx)(oe.a,{className:"form-control",value:x,onChange:function(e){var t=e.target;return O(t.value)},variant:"filled",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(h.jsx)(de.a,{item:!0,xs:12,children:Object(h.jsx)(oe.a,{className:"form-control",value:f,onChange:function(e){var t=e.target;return v(t.value)},variant:"filled",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})})]}),Object(h.jsx)(le.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){e.preventDefault(),y.createUserWithEmailAndPassword(x,f).then((function(e){e&&(N.push("/"),W()({title:"Sign Up",text:"Sign up successfully",icon:"success",button:"OK",timer:"2000"}))})).catch((function(e){return W()({title:e.message,icon:"error"})}))},children:"Sign Up"}),Object(h.jsx)(de.a,{container:!0,justifyContent:"flex-end",children:Object(h.jsx)(de.a,{item:!0,children:Object(h.jsx)(u.b,{to:"login",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(h.jsx)(je.a,{mt:5,children:Object(h.jsx)(ge,{})})]})}var ye=a(112),Ne=a.n(ye),_e=a(113),Ce=a.n(_e),Se=a(114),we=a.n(Se),ke=a(115),Ie=a.n(ke),Ae=(a(163),function(){return Object(h.jsxs)("footer",{className:"footer footer-content  animate__fadeInUp",children:[Object(h.jsxs)("div",{className:"content-icons",children:[Object(h.jsx)("a",{href:"https://www.linkedin.com/in/bryan-imbaquingo-almagro-636a90168/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(Ne.a,{fontSize:"large"})}),Object(h.jsx)("a",{href:"https://github.com/bimbaquingoch",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(Ce.a,{fontSize:"large"})}),Object(h.jsx)("a",{href:"https://www.instagram.com/bryandresimba/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(we.a,{fontSize:"large"})}),Object(h.jsx)("a",{href:"https://twitter.com/bryandresimba",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(Ie.a,{fontSize:"large"})})]}),Object(h.jsxs)("div",{className:"text-copy text-center",children:["\xa9 2021 Copyright:",Object(h.jsx)("a",{className:"text-copy",href:"https://github.com/bimbaquingoch/ecommerce-React",target:"_blank",rel:"noreferrer",children:"bimbaquingoch"})]})]})}),Ee=a(64),Te=a(165),We=a(222),Re=a(216),qe=a(220),Be=a(213),Fe=a(219);function Pe(){return Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)(d.a,{variant:"h6",gutterBottom:!0,children:"Shipping address"}),Object(h.jsxs)(de.a,{container:!0,spacing:3,children:[Object(h.jsx)(de.a,{item:!0,xs:12,sm:6,children:Object(h.jsx)(oe.a,{required:!0,id:"firstName",name:"firstName",label:"First name",fullWidth:!0,autoComplete:"given-name"})}),Object(h.jsx)(de.a,{item:!0,xs:12,sm:6,children:Object(h.jsx)(oe.a,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0,autoComplete:"family-name"})}),Object(h.jsx)(de.a,{item:!0,xs:12,children:Object(h.jsx)(oe.a,{required:!0,id:"address1",name:"address1",label:"Address line 1",fullWidth:!0,autoComplete:"shipping address-line1"})}),Object(h.jsx)(de.a,{item:!0,xs:12,children:Object(h.jsx)(oe.a,{id:"address2",name:"address2",label:"Address line 2",fullWidth:!0,autoComplete:"shipping address-line2"})}),Object(h.jsx)(de.a,{item:!0,xs:12,sm:6,children:Object(h.jsx)(oe.a,{required:!0,id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"shipping address-level2"})}),Object(h.jsx)(de.a,{item:!0,xs:12,sm:6,children:Object(h.jsx)(oe.a,{id:"state",name:"state",label:"State/Province/Region",fullWidth:!0})}),Object(h.jsx)(de.a,{item:!0,xs:12,sm:6,children:Object(h.jsx)(oe.a,{required:!0,id:"zip",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"shipping postal-code"})}),Object(h.jsx)(de.a,{item:!0,xs:12,sm:6,children:Object(h.jsx)(oe.a,{required:!0,id:"country",name:"country",label:"Country",fullWidth:!0,autoComplete:"shipping country"})}),Object(h.jsx)(de.a,{item:!0,xs:12,children:Object(h.jsx)(Be.a,{control:Object(h.jsx)(Fe.a,{color:"secondary",name:"saveAddress",value:"yes"}),label:"Use this address for payment details"})})]})]})}function Ue(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{variant:"h6",gutterBottom:!0,children:"Payment method"}),Object(h.jsxs)(de.a,{container:!0,spacing:3,children:[Object(h.jsx)(de.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(oe.a,{required:!0,id:"cardName",label:"Name on card",fullWidth:!0,autoComplete:"cc-name"})}),Object(h.jsx)(de.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(oe.a,{required:!0,id:"cardNumber",label:"Card number",fullWidth:!0,autoComplete:"cc-number"})}),Object(h.jsx)(de.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(oe.a,{required:!0,id:"expDate",label:"Expiry date",fullWidth:!0,autoComplete:"cc-exp"})}),Object(h.jsx)(de.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(oe.a,{required:!0,id:"cvv",label:"CVV",helperText:"Last three digits on signature strip",fullWidth:!0,autoComplete:"cc-csc"})}),Object(h.jsx)(de.a,{item:!0,xs:12,children:Object(h.jsx)(Be.a,{control:Object(h.jsx)(Fe.a,{color:"secondary",name:"saveCard",value:"yes"}),label:"Remember credit card details for next time"})})]})]})}var De=a(210),Ke=a(214),Me=a(215),ze=[{name:"Product 1",desc:"A nice thing",price:"$9.99"},{name:"Product 2",desc:"Another thing",price:"$3.45"},{name:"Product 3",desc:"Something else",price:"$6.51"},{name:"Product 4",desc:"Best thing of all",price:"$14.11"},{name:"Shipping",desc:"",price:"Free"}],Ve=["1 Material-UI Drive","Reactville","Anytown","99999","USA"],Le=[{name:"Card type",detail:"Visa"},{name:"Card holder",detail:"Mr John Smith"},{name:"Card number",detail:"xxxx-xxxx-xxxx-1234"},{name:"Expiry date",detail:"04/2024"}],Ye=Object(ue.a)((function(e){return{listItem:{padding:e.spacing(1,0)},total:{fontWeight:700},title:{marginTop:e.spacing(2)}}}));function Ge(){var e=Ye();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(h.jsxs)(De.a,{disablePadding:!0,children:[ze.map((function(t){return Object(h.jsxs)(Ke.a,{className:e.listItem,children:[Object(h.jsx)(Me.a,{primary:t.name,secondary:t.desc}),Object(h.jsx)(d.a,{variant:"body2",children:t.price})]},t.name)})),Object(h.jsxs)(Ke.a,{className:e.listItem,children:[Object(h.jsx)(Me.a,{primary:"Total"}),Object(h.jsx)(d.a,{variant:"subtitle1",className:e.total,children:"$34.06"})]})]}),Object(h.jsxs)(de.a,{container:!0,spacing:2,children:[Object(h.jsxs)(de.a,{item:!0,xs:12,sm:6,children:[Object(h.jsx)(d.a,{variant:"h6",gutterBottom:!0,className:e.title,children:"Shipping"}),Object(h.jsx)(d.a,{gutterBottom:!0,children:"John Smith"}),Object(h.jsx)(d.a,{gutterBottom:!0,children:Ve.join(", ")})]}),Object(h.jsxs)(de.a,{item:!0,container:!0,direction:"column",xs:12,sm:6,children:[Object(h.jsx)(d.a,{variant:"h6",gutterBottom:!0,className:e.title,children:"Payment details"}),Object(h.jsx)(de.a,{container:!0,children:Le.map((function(e){return Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)(de.a,{item:!0,xs:6,children:Object(h.jsx)(d.a,{gutterBottom:!0,children:e.name})}),Object(h.jsx)(de.a,{item:!0,xs:6,children:Object(h.jsx)(d.a,{gutterBottom:!0,children:e.detail})})]},e.name)}))})]})]})]})}function He(){return Object(h.jsx)("div",{className:"text-center p-3",children:Object(h.jsxs)("a",{className:"text-copy",href:"https://github.com/bimbaquingoch/ecommerce-React",target:"_blank",rel:"noreferrer",children:["\xa9 2021 Copyright: ",Object(h.jsx)("strong",{children:" bimbaquingoch"})]})})}var Je=Object(ue.a)((function(e){return{appBar:{position:"relative"},layout:Object(Ee.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(Ee.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),$e=["Shipping address","Payment details","Review your order"];function Qe(e){switch(e){case 0:return Object(h.jsx)(Pe,{});case 1:return Object(h.jsx)(Ue,{});case 2:return Object(h.jsx)(Ge,{});default:throw new Error("Unknown step")}}var Ze=function(){var e=Je(),t=n.a.useState(0),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("main",{className:e.layout,children:[Object(h.jsxs)(Te.a,{className:e.paper,children:[Object(h.jsx)(d.a,{component:"h1",variant:"h4",align:"center",children:"Checkout"}),Object(h.jsx)(We.a,{activeStep:c,className:e.stepper,children:$e.map((function(e){return Object(h.jsx)(Re.a,{children:Object(h.jsx)(qe.a,{children:e})},e)}))}),Object(h.jsx)(n.a.Fragment,{children:c===$e.length?Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)(d.a,{variant:"h5",gutterBottom:!0,children:"Thank you for your order."}),Object(h.jsx)(d.a,{variant:"subtitle1",children:"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped."})]}):Object(h.jsxs)(n.a.Fragment,{children:[Qe(c),Object(h.jsxs)("div",{className:e.buttons,children:[0!==c&&Object(h.jsx)(le.a,{onClick:function(){r(c-1)},className:e.button,children:"Back"}),Object(h.jsx)(le.a,{variant:"contained",color:"primary",onClick:function(){r(c+1)},className:e.button,children:c===$e.length-1?"Place order":"Next"})]})]})})]}),Object(h.jsx)(He,{})]})})},Xe=function(){var e=p(),t=Object(s.a)(e,2),a=t[0].user,n=t[1];return Object(c.useEffect)((function(){y.onAuthStateChanged((function(e){e&&n({type:w,user:e})}))}),[n,a]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(u.a,{children:[Object(h.jsx)(R,{}),Object(h.jsxs)(E.c,{children:[Object(h.jsx)(E.a,{path:"/ecommerce-React/register",children:Object(h.jsx)(ve,{})}),Object(h.jsx)(E.a,{path:"/ecommerce-React/paycart",children:Object(h.jsx)(ie,{})}),Object(h.jsx)(E.a,{path:"/ecommerce-React/paypage",children:Object(h.jsx)(Ze,{})}),Object(h.jsx)(E.a,{path:"/ecommerce-React/login",children:Object(h.jsx)(pe,{})}),Object(h.jsx)(E.a,{path:"/ecommerce-React/",children:Object(h.jsx)(ee,{})})]})]}),Object(h.jsx)(Ae,{})]})};i.a.render(Object(h.jsx)(O,{initialState:{basket:[],user:null},reducer:A,children:Object(h.jsx)(Xe,{})}),document.getElementById("root"))},97:function(e,t,a){},99:function(e,t,a){}},[[164,1,2]]]);
//# sourceMappingURL=main.fb8f88cf.chunk.js.map