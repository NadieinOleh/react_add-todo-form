(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),c=a(2),s=a(7),l=a(1),o=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(0),u=function(e){var t=e.user,a=t.name,n=t.email;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},m=function(e){var t=e.todo,a=t.id,n=t.title,i=t.user,r=t.completed;return Object(d.jsxs)("article",{"data-id":a,className:"TodoInfo\n        ".concat(r?"TodoInfo--completed":""),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:n}),i&&Object(d.jsx)(u,{user:i})]})},j=function(e){var t=e.todoList;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(m,{todo:e},e.id)}))})},b=(a(14),function(e){return o.find((function(t){return t.id===e}))||null}),h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:b(e.userId)})})),O=function(){var e=Object(l.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(0),s=Object(c.a)(i,2),u=s[0],m=s[1],O=Object(l.useState)(!1),p=Object(c.a)(O,2),f=p[0],x=p[1],v=Object(l.useState)(!1),y=Object(c.a)(v,2),S=y[0],I=y[1],N=Object(l.useState)(h),C=Object(c.a)(N,2),g=C[0],_=C[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"titleInput",children:"Title: "}),Object(d.jsx)("input",{type:"text","data-cy":"titleInput",id:"titleInput",placeholder:"Enter a title",value:a,onChange:function(e){n(e.target.value),x(!1)}}),f&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"userSelect",children:"User: "}),Object(d.jsxs)("select",{"data-cy":"userSelect",id:"userSelect",value:u,onChange:function(e){m(+e.target.value),I(!1)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),o.map((function(e){var t=e.id,a=e.name;return Object(d.jsx)("option",{value:t,children:a},t)}))]}),S&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:function(e){if(e.preventDefault(),0===u||""===a)return I(!0),x(!0);n(""),m(0);var t=Math.max.apply(Math,Object(r.a)(g.map((function(e){return e.id})))),i=b(u),c={id:t+1,title:a,completed:!1,userId:u,user:null!==i&&void 0!==i?i:null};return _([].concat(Object(r.a)(g),[c]))},children:"Add"})]}),Object(d.jsx)(j,{todoList:g})]})};i.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5a5f2789.chunk.js.map