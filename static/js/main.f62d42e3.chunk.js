(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,function(e,t,a){e.exports=a(36)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),i=(a(26),a(6)),c=a(7),s=a(11),m=a(8),u=a(12),d=a(39),h=(a(27),a(28),a(16)),p=a.n(h),f=a(17),E=a.n(f),g=a(18),y=a.n(g),b=function(){var e=[p.a,E.a,y.a][Math.floor(3*Math.random())];return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:e,alt:"header"}))},v=a(38),w=(a(29),[{name:"start",path:"/",exact:!0},{name:"products",path:"/products"},{name:"contact",path:"/contact"},{name:"admin",path:"/admin"}]),k=function(){var e=w.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(v.a,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},x=a(41),j=a(19),I=function(e){return r.a.createElement("article",{style:{marginTop:40}},r.a.createElement("h3",{style:{marginBottom:3,textTransform:"uppercase"}},e.title),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},e.author),r.a.createElement("p",{style:{fontSize:15}},e.text))},L=[{id:1,title:"What is the string theory",author:"Jon Snow",text:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClinton, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consenter, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the uncountable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Minibus Bonum et Malory" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amen..", comes from a line in section 1.10.32'},{id:2,title:"What is the fermi paradox?",author:"David Jan",text:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'},{id:3,title:"dark matter and dark energy",author:"Jacob Bergson",text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}],C=function(){var e=L.map(function(e){return r.a.createElement(I,Object.assign({key:e.id},e))});return r.a.createElement("div",{className:"home"},e)},S=a(13),O=(a(33),["car","bike","motorcycle"]),T=function(){var e=O.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(S.a,{to:"/product/".concat(e)},e))});return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"ProductListPage"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},B=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},N=function(e){var t=e.match;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Product page"),r.a.createElement(B,{id:t.params.id}),r.a.createElement(S.a,{to:"/products"},"Return to Products List."))},M=(a(34),a(42)),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",isEmpty:!0},a.handleChange=function(e){e.target.value.length>0?a.setState({value:e.target.value,isEmpty:!1}):a.setState({value:e.target.value,isEmpty:!0})},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:"",isEmpty:!0})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Write to us!"),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange,placeholder:"Enter the message"}),r.a.createElement("button",null,"Send")),r.a.createElement(M.a,{when:!this.state.isEmpty,message:"You have an unfinished form. Do you really want to leave this website?"}))}}]),t}(r.a.Component),J=a(40),P=function(){return r.a.createElement(j.a,{render:function(){return r.a.createElement(J.a,{to:"./login"})}})},z=function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Email or username"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("button",null,"Sing in"))},D=function(){return r.a.createElement("div",null,"This page does not exist!")},R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(j.a,{path:"/",exact:!0,component:C}),r.a.createElement(j.a,{path:"/products",component:T}),r.a.createElement(j.a,{path:"/product/:id",component:N}),r.a.createElement(j.a,{path:"/contact",component:F}),r.a.createElement(j.a,{path:"/admin",component:P}),r.a.createElement(j.a,{path:"/login",component:z}),r.a.createElement(j.a,{component:D})))},W=(a(35),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Footer"),r.a.createElement(j.a,{path:"/",exact:!0,render:function(e){return r.a.createElement("p",null,"You are on ",r.a.createElement("span",null,"the main page!"))}}),r.a.createElement(j.a,{path:"/:page",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"You are on ",r.a.createElement("span",null,"the ",e.match.url," page!")))}}))}),Y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(b,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(k,null)),r.a.createElement("section",{className:"page"},r.a.createElement(R,null))),r.a.createElement("footer",null,r.a.createElement(W,null))))}}]),t}(n.Component);l.a.render(r.a.createElement(Y,null),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.f62d42e3.chunk.js.map