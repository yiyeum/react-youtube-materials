(this["webpackJsonpreact-youtube-materials"]=this["webpackJsonpreact-youtube-materials"]||[]).push([[0],{64:function(e,t,a){e.exports=a(77)},69:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),o=(a(69),a(14)),m=a(10),i=a(37),u=a(25),s=a(19),E=a(110),b=a(102),d=a(108),f=a(4),v=Object(f.a)({root:{border:"3px dashed tomato"}})((function(e){var t=e.classes,a=Object(n.useState)({fullName:"",age:0}),l=Object(s.a)(a,2),c=l[0],o=l[1],m=function(e){o(Object(u.a)(Object(u.a)({},c),{},Object(i.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{m:5,className:t.root},r.a.createElement(E.a,{m:5},r.a.createElement(b.a,{variant:"h6"},"Please fill the form")),r.a.createElement(E.a,{m:5},r.a.createElement(d.a,{label:"Full Name",value:c.fullName,name:"fullName",onChange:m,fullWidth:!0})),r.a.createElement(E.a,{m:5},r.a.createElement(d.a,{type:"number",label:"Age",value:c.age,name:"age",onChange:m,fullWidth:!0}))),r.a.createElement(E.a,{m:5,p:5,className:t.root},r.a.createElement(E.a,{mb:3},r.a.createElement(b.a,{variant:"h6"},"Form state")),r.a.createElement(b.a,null,"Full name: ",c.fullName),r.a.createElement(b.a,null,"Age: ",c.age)))})),g=Object(f.a)({link:{backgroundColor:"#212121",color:"#ffffff",lineHeight:"1.4",textDecoration:"none",fontSize:20,borderRadius:"2px","&:hover":{backgroundColor:"#424141"}}})((function(e){var t=e.classes;return r.a.createElement(E.a,{p:6},r.a.createElement(b.a,{variant:"h4"},"React Materials"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{className:t.link,to:"/form"},"Form - useState")),r.a.createElement("li",null,r.a.createElement(o.b,{className:t.link,to:"/stopwatch"},"Stopwatch - useEffect")),r.a.createElement("li",null,r.a.createElement(o.b,{className:t.link,to:"/context"},"Boxes - useContext")),r.a.createElement("li",null,r.a.createElement(o.b,{className:t.link,to:"/reducer"},"Task - useReducer"))))})),h=a(104),p=a(105),j=Object(f.a)({root:{width:"200px",border:"3px dashed #ffd5ce",margin:"0 auto"}})((function(e){var t=e.classes,a=Object(n.useState)(0),l=Object(s.a)(a,2),c=l[0],m=l[1],i=Object(n.useState)(!1),u=Object(s.a)(i,2),d=u[0],f=u[1];return Object(n.useEffect)((function(){if(d){var e=setInterval((function(){m((function(e){return e+.1}))}),100);return function(){return clearInterval(e)}}}),[d]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{m:1},r.a.createElement(o.b,{to:"/"},r.a.createElement(h.a,null,"Back to Home"))),r.a.createElement(E.a,{m:5,className:t.root},r.a.createElement(p.a,{container:!0,justify:"center"},r.a.createElement(p.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement(b.a,{variant:"h3",style:{textAlign:"center"}},c.toFixed(1))),r.a.createElement(p.a,{item:!0},d?r.a.createElement(h.a,{onClick:function(){return f(!1)}},"Pause"):r.a.createElement(h.a,{onClick:function(){return f(!0)}},"Start"),r.a.createElement(h.a,{onClick:function(){m(0),f(!1)}},"Stop")))))})),O=Object(f.a)({root:{border:"2px solid #b9b9b9",width:600,padding:30}})((function(e){var t=e.classes;return r.a.createElement(E.a,{className:t.root},r.a.createElement(b.a,{variant:"body1",color:"primary"},"Box1"),r.a.createElement(x,null))})),x=Object(f.a)({root:{border:"2px solid #b9b9b9",width:300,margin:"0 auto",padding:30}})((function(e){var t=e.classes,a=Object(n.useContext)(P);return r.a.createElement(E.a,{className:t.root},r.a.createElement(b.a,{variant:"body1",color:"primary"},"Box2"),r.a.createElement(b.a,{variant:"body2",color:"textPrimary"},a.userName),r.a.createElement(k,null))})),y=Object(f.a)({root:{border:"2px solid #b9b9b9",width:70,margin:"0 auto",padding:5}})((function(e){var t=e.classes,a=Object(n.useContext)(P);return r.a.createElement(E.a,{className:t.root},r.a.createElement(b.a,{variant:"body1",color:"primary"},"Box4"),r.a.createElement(b.a,{variant:"body2",color:"textPrimary"},a.userName))})),k=Object(f.a)({root:{border:"2px solid #b9b9b9",width:150,margin:"0 auto",padding:15}})((function(e){var t=e.classes,a=Object(n.useContext)(P);return r.a.createElement(E.a,{className:t.root},r.a.createElement(b.a,{variant:"body1",color:"primary"},"Box3"),r.a.createElement(b.a,{variant:"body2",color:"textPrimary"},a.userName),r.a.createElement(E.a,{mb:2},r.a.createElement("button",{onClick:function(){return a.setUserName("King")}},"click")),r.a.createElement(y,null))})),N=function(){var e=Object(n.useContext)(I);return r.a.createElement(E.a,{m:5},e.state.list.length>0&&e.state.list.map((function(e){return r.a.createElement(B,{key:e.id,item:e})})))},C=a(106),w=a(54),S=a.n(w),B=function(e){var t=e.item,a=Object(n.useContext)(I);return r.a.createElement(p.a,{container:!0},r.a.createElement(p.a,{item:!0,md:3},r.a.createElement(b.a,{variant:"body1",color:"textPrimary"},t.name)),r.a.createElement(p.a,{item:!0,md:2},r.a.createElement(b.a,{variant:"body1",color:"textSecondary"},t.tag)),r.a.createElement(p.a,{item:!0,md:2},r.a.createElement(C.a,{size:"small","aria-label":"delete",onClick:function(){return a.dispatch({type:"delete",id:t.id})}},r.a.createElement(S.a,null))))},P=Object(n.createContext)({userName:"",setUserName:function(){}}),F=function(){var e=Object(n.useState)("Andrew"),t=Object(s.a)(e,2),a=t[0],l=t[1];return r.a.createElement(P.Provider,{value:{userName:a,setUserName:l}},r.a.createElement(E.a,{m:1},r.a.createElement(o.b,{to:"/"},r.a.createElement(h.a,null,"Back to Home"))),r.a.createElement(E.a,{m:5},r.a.createElement(O,null)))},A=a(44),H=a(107),R={list:[]},W={state:R,dispatch:function(){return null}},z=function(e,t){switch(t.type){case"save":return{list:[].concat(Object(A.a)(e.list),[{id:t.id,name:t.list,tag:t.tag}])};case"delete":return{list:Object(A.a)(e.list.filter((function(e){return e.id!==t.id})))}}},I=Object(n.createContext)(W),T=function(){var e=Object(n.useReducer)(z,R),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({item:"",tag:""}),m=Object(s.a)(c,2),i=m[0],b=m[1];return r.a.createElement(I.Provider,{value:{state:a,dispatch:l}},r.a.createElement(E.a,{m:1},r.a.createElement(o.b,{to:"/"},r.a.createElement(h.a,null,"Back to Home"))),r.a.createElement(E.a,{m:5},r.a.createElement(p.a,{container:!0},r.a.createElement(p.a,{item:!0,md:2},r.a.createElement(d.a,{label:"Task",value:i.item,onChange:function(e){b(Object(u.a)(Object(u.a)({},i),{},{item:e.target.value}))}})),r.a.createElement(p.a,{item:!0,md:5},r.a.createElement(d.a,{label:"Tag",value:i.tag,onChange:function(e){b(Object(u.a)(Object(u.a)({},i),{},{tag:e.target.value}))}})))),r.a.createElement(E.a,{m:5},r.a.createElement(h.a,{variant:"contained",size:"small",color:"primary",onClick:function(){var e=i.item.trim(),t=i.tag.trim();e.length>0&&t.length>0&&(l({type:"save",id:Object(H.a)(i),list:i.item,tag:i.tag}),b({item:"",tag:""}))}},"Save")),r.a.createElement(N,null))};var U=function(){return r.a.createElement(o.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0},r.a.createElement(g,null)),r.a.createElement(m.a,{path:"/form"},r.a.createElement(v,null)),r.a.createElement(m.a,{path:"/stopwatch"},r.a.createElement(j,null)),r.a.createElement(m.a,{path:"/context"},r.a.createElement(F,null)),r.a.createElement(m.a,{path:"/reducer"},r.a.createElement(T,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.a56bfa46.chunk.js.map