(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s,a=c(4),n=c.n(a),l=c(2),d=c(1),i=(c(9),c(10),c(0)),o=function(e){var t=e.todos,c=e.selectedTodo,s=e.setSelectedTodo;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),Object(i.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"far\n                  ".concat((null===c||void 0===c?void 0:c.id)===e.id?"fa-eye-slash":"fa-eye")})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var r=s,j=function(e){var t=e.todos,c=e.setPreparedTodos,s=Object(d.useState)(""),a=Object(l.a)(s,2),n=a[0],o=a[1],j=Object(d.useState)(r.All),b=Object(l.a)(j,2),u=b[0],h=b[1];Object(d.useEffect)((function(){var e=function(e,t){if(t===r.All)return e;switch(t){case r.Active:return e.filter((function(e){return!e.completed}));case r.Completed:return e.filter((function(e){return e.completed}));default:return e}}(t,u);e=function(e,t){return e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))}(e,n),c(e)}),[t,n,u,c]);return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){h(e.target.value)},children:[Object(i.jsx)("option",{value:r.All,children:"All"}),Object(i.jsx)("option",{value:r.Active,children:"Active"}),Object(i.jsx)("option",{value:r.Completed,children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){return o(e.target.value)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:n&&Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return o("")}})})]})]})},b=(c(12),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function u(e){return fetch("https://mate-academy.github.io/react_dynamic-list-of-todos/api/"+e).then((function(e){return e.json()}))}var h=function(e){var t=e.todo,c=e.setSelectedTodo,s=Object(d.useState)(!1),a=Object(l.a)(s,2),n=a[0],o=a[1],r=Object(d.useState)(null),j=Object(l.a)(r,2),h=j[0],m=j[1];return Object(d.useEffect)((function(){var e;o(!0),(e=t.userId,u("users/".concat(e,".json"))).then((function(e){m(e),o(!1)}))}),[t.userId]),Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),n?Object(i.jsx)(b,{}):Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(i.jsx)("strong",{className:"has-text-danger",children:t.completed?"Done":"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===h||void 0===h?void 0:h.name})]})]})]})]})};var m=function(){var e=Object(d.useState)(null),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(d.useState)([]),n=Object(l.a)(a,2),r=n[0],m=n[1],O=Object(d.useState)([]),x=Object(l.a)(O,2),f=x[0],p=x[1];return Object(d.useEffect)((function(){u("todos.json").then((function(e){m(e),p(e)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(j,{todos:r,setPreparedTodos:p})}),Object(i.jsx)("div",{className:"block",children:0===r.length?Object(i.jsx)(b,{}):Object(i.jsx)(o,{todos:f,selectedTodo:c,setSelectedTodo:s})})]})})}),c&&Object(i.jsx)(h,{todo:c,setSelectedTodo:s})]})};n.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.c7410708.chunk.js.map