(()=>{var e={};e.id=888,e.ids=[888],e.modules={6415:e=>{e.exports={header:"styles_header__7sfJ0",content:"styles_content__9X7OX",logo:"styles_logo__t64BP",loginButton:"styles_loginButton__j6lEx",nav:"styles_nav__Ewldv",link:"styles_link___WqYd"}},9605:(e,s,t)=>{"use strict";t.d(s,{h:()=>l});var r=t(997),i=t(1649),a=t(6415),n=t.n(a),o=t(1664),c=t.n(o);function l(){let{data:e,status:s}=(0,i.useSession)();return r.jsx("header",{className:n().header,children:(0,r.jsxs)("section",{className:n().content,children:[(0,r.jsxs)("nav",{className:n().nav,children:[r.jsx(c(),{href:"/",children:(0,r.jsxs)("h1",{className:n().logo,children:["DuoTask",r.jsx("span",{children:"+"})]})}),e?.user&&r.jsx(c(),{href:"/dashboard",className:n().link,children:"Meu Painel"})]}),"loading"===s?r.jsx(r.Fragment,{}):e?(0,r.jsxs)("button",{className:n().loginButton,onClick:()=>(0,i.signOut)(),children:["Ol\xe1 ",e?.user?.name]}):r.jsx("button",{className:n().loginButton,onClick:()=>(0,i.signIn)("google"),children:"Acessar"})]})})}},5143:(e,s,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.r(s),t.d(s,{default:()=>l});var i=t(997);t(6764);var a=t(9605),n=t(1649),o=t(371),c=e([o]);function l({Component:e,pageProps:s}){return(0,i.jsxs)(n.SessionProvider,{session:s.session,children:[i.jsx(a.h,{}),i.jsx(e,{...s})]})}o=(c.then?(await c)():c)[0],(0,o.m)(),r()}catch(e){r(e)}})},371:(e,s,t)=>{"use strict";t.a(e,async(e,r)=>{try{let o;t.d(s,{h:()=>d,m:()=>u});var i=t(3745),a=t(1492),n=e([i,a]);[i,a]=n.then?(await n)():n;let c={apiKey:"AIzaSyD6VeNcGMHOQIoLXi7FSEemw7-AhjUDySM",authDomain:"duotask-plus.firebaseapp.com",projectId:"duotask-plus",storageBucket:"duotask-plus.appspot.com",messagingSenderId:"803071142357",appId:"803071142357:web:9d26cf888633ac9dc4b55c"},l=null,u=()=>{o||(o=(0,i.initializeApp)(c),console.log("Firebase inicializado com sucesso!"))},d=()=>{if(!o)throw console.error("Firebase app not initialized"),Error("Firebase app not initialized");return l||(l=(0,a.getFirestore)(o)),l};r()}catch(e){r(e)}})},6764:()=>{},1649:e=>{"use strict";e.exports=require("next-auth/react")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},3745:e=>{"use strict";e.exports=import("firebase/app")},1492:e=>{"use strict";e.exports=import("firebase/firestore")}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[348,664],()=>t(5143));module.exports=r})();