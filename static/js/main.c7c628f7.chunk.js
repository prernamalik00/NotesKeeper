(this["webpackJsonpnotes-keeper"]=this["webpackJsonpnotes-keeper"]||[]).push([[0],{37:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(9),o=n.n(c),r=n(10),i=n(28),u=n.n(i),s=n(64);var m=function(e){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("h1",{style:{color:e.isNotes&&"hsl(198, 1%, 29%)"}},l.a.createElement(u.a,null),"Keeper App"),l.a.createElement(s.a,{className:"switch-button",style:{color:e.isNotes&&"hsl(198, 1%, 29%)"},onClick:e.toSwitch},e.isNotes?"Notes":"To-do List")))};var E=function(){const e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"@ Copyright ",e))},d=n(22),f=n.n(d);var v=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:()=>{e.toDelete(e.id)}},l.a.createElement(f.a,null)))},p=n(26),h=n(30),b=n.n(h),j=n(65),k=n(66);var O=function(e){const t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)({title:"",content:""}),u=Object(r.a)(i,2),s=u[0],m=u[1];function E(e){const t=e.target,n=t.name,a=t.value;m(e=>Object(p.a)(Object(p.a)({},e),{},{[n]:a}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},c&&l.a.createElement("input",{name:"title",onChange:E,value:s.title,placeholder:"Title"}),l.a.createElement("textarea",{onClick:function(){o(!0)},name:"content",onChange:E,value:s.content,placeholder:"Take a note...",rows:c?"3":"1"}),l.a.createElement(k.a,{in:!!c},l.a.createElement(j.a,{onClick:function(t){e.onAdd(s),m({title:"",content:""}),o(!1),t.preventDefault()}},l.a.createElement(b.a,null)))))};var C=function(e){const t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],o=n[1];return l.a.createElement("div",null,l.a.createElement("li",{onClick:function(){o(e=>!e)},style:{textDecoration:c&&"line-through"}},e.text," ",l.a.createElement("button",{className:"delete",onClick:()=>{e.onChecked(e.id)}},l.a.createElement(f.a,null))))};var N=function(){const e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),i=Object(r.a)(o,2),u=i[0],s=i[1];function d(e){s(t=>t.filter((t,n)=>n!==e))}const f=Object(a.useState)(""),p=Object(r.a)(f,2),h=p[0],b=p[1],j=Object(a.useState)([]),k=Object(r.a)(j,2),N=k[0],y=k[1];function g(e){y(t=>t.filter((t,n)=>n!==e))}return l.a.createElement("div",null,l.a.createElement(m,{toSwitch:function(){c(e=>!e)},isNotes:n}),n?l.a.createElement("div",{className:"to-do-list"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"heading"},l.a.createElement("h1",null,"To-Do List")),l.a.createElement("div",{className:"form"},l.a.createElement("input",{onChange:function(e){const t=e.target.value;b(t)},type:"text",value:h}),l.a.createElement("button",{onClick:function(){y(e=>[...e,h]),b("")}},l.a.createElement("span",null,"Add"))),l.a.createElement("div",{class:"items"},l.a.createElement("ul",null,N.map((e,t)=>l.a.createElement(C,{key:t,id:t,text:e,onChecked:g})))))):l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}}," ",l.a.createElement(O,{onAdd:function(e){s(t=>[...t,e])}})," "),u.map((e,t)=>l.a.createElement(v,{key:t,id:t,title:e.title,content:e.content,toDelete:d}))),l.a.createElement(E,null))};o.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c7c628f7.chunk.js.map