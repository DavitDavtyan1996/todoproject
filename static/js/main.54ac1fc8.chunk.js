(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(t,e,n){},26:function(t,e,n){},28:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a=n(2),i=n(15),c=n.n(i),o=(n(21),n(22),n(8)),r=n(9),l=n(4),s=n(5),u=n(3),b=n(7),d=n(6),j=n(10),h=n(12),p=(n(26),n(0)),f=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={term:""},a.onUpdateSearch=a.onUpdateSearch.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"onUpdateSearch",value:function(t){var e=t.target.value;this.setState({term:e}),this.props.onUpdateSearch(e)}},{key:"render",value:function(){return Object(p.jsx)("input",{className:"form-control  search-input",type:"text",placeholder:"\u043f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0438\u0441\u044f\u043c",onChange:this.onUpdateSearch})}}]),n}(a.Component),m=(n(28),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).buttons=[{name:"all",label:"\u0412\u0441\u0435"},{name:"like",label:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c"}],a}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.buttons.map((function(e){var n=e.name,a=e.label,i=t.props.filter===n?"btn-info":"btn-outline-secondary";return Object(p.jsx)("button",{type:"button",className:"btn ".concat(i),onClick:function(){return t.props.onFilterSelect(n)},children:a},n)}));return Object(p.jsx)("div",{className:"btn-group",children:e})}}]),n}(a.Component)),O=n(16),v=n(11),g=(n(31),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDelete,a=t.onToggleImportant,i=t.onToggleLiked,c="app-list-item d-flex justify-content-between";return!0===t.important&&(c+=" important"),!0===t.like&&(c+=" like"),Object(p.jsxs)("div",{className:c,children:[Object(p.jsx)("span",{onClick:i,className:"app-list-item-label",children:e}),Object(p.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(p.jsx)("button",{type:"button",className:"btn-star btn-sm",onClick:a,children:Object(p.jsx)(v.a,{icon:"star"})}),Object(p.jsx)("button",{type:"button",className:"btn-trash btn-sm",onClick:n,children:Object(p.jsx)(v.a,{icon:"trash"})}),Object(p.jsx)(v.a,{icon:"heart"})]})]})}}]),n}(a.Component)),x=(n(32),["id"]),k=function(t){var e=t.posts,n=t.onDelete,a=t.onToggleImportant,i=t.onToggleLiked,c=e.map((function(t){var e=t.id,c=Object(O.a)(t,x);return Object(p.jsx)("li",{className:"list-group-item",children:Object(p.jsx)(g,Object(o.a)(Object(o.a)({},c),{},{onDelete:function(){return n(e)},onToggleImportant:function(){return a(e)},onToggleLiked:function(){return i(e)}}))},e)}));return Object(p.jsx)("ul",{className:"app-list \r list-group",children:c})},y=(n(33),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={text:""},a.onValueChange=a.onValueChange.bind(Object(u.a)(a)),a.onSubmit=a.onSubmit.bind(Object(u.a)(a)),a}return Object(s.a)(n,[{key:"onValueChange",value:function(t){this.setState({text:t.target.value})}},{key:"onSubmit",value:function(t){t.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return Object(p.jsxs)("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit,children:[Object(p.jsx)("input",{type:"text",placeholder:"\u043e \u0447\u0435\u043c \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441?",className:"form-control  new-post-label",onChange:this.onValueChange,value:this.state.text}),Object(p.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})}}]),n}(a.Component)),S=(n(34),function(t){var e=t.liked,n=t.allPosts;return Object(p.jsxs)("div",{className:"app-header d-flex",children:[Object(p.jsx)("h1",{children:"Davit Davtyan"}),Object(p.jsxs)("h2",{children:[" ",n," \u0437\u0430\u043f\u0438\u0441\u0435\u0439, \u0438\u0437 \u043d\u0438\u0445 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c ",e]})]})});n(35);j.b.add(h.b,h.c,h.a);var I=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={data:[{label:"Going to learn React",important:!0,like:!1,id:1},{label:"That is so good",important:!1,like:!1,id:2},{label:"I need a break...",important:!1,like:!1,id:3}],term:"",filter:"all"},a.deleteItem=a.deleteItem.bind(Object(u.a)(a)),a.addItem=a.addItem.bind(Object(u.a)(a)),a.onToggleImportant=a.onToggleImportant.bind(Object(u.a)(a)),a.onToggleLiked=a.onToggleLiked.bind(Object(u.a)(a)),a.onUpdateSearch=a.onUpdateSearch.bind(Object(u.a)(a)),a.onFilterSelect=a.onFilterSelect.bind(Object(u.a)(a)),a.maxId=4,a}return Object(s.a)(n,[{key:"deleteItem",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t}));return{data:[].concat(Object(r.a)(n.slice(0,a)),Object(r.a)(n.slice(a+1)))}}))}},{key:"addItem",value:function(t){var e={label:t,important:!1,id:this.maxId++};t.trim().length&&this.setState((function(t){var n=t.data;return{data:[].concat(Object(r.a)(n),[e])}}))}},{key:"onToggleImportant",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n[a],c=Object(o.a)(Object(o.a)({},i),{},{important:!i.important});return{data:[].concat(Object(r.a)(n.slice(0,a)),[c],Object(r.a)(n.slice(a+1)))}}))}},{key:"onToggleLiked",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n[a],c=Object(o.a)(Object(o.a)({},i),{},{like:!i.like});return{data:[].concat(Object(r.a)(n.slice(0,a)),[c],Object(r.a)(n.slice(a+1)))}}))}},{key:"searchPost",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.indexOf(e)>-1}))}},{key:"filterPost",value:function(t,e){return"like"===e?t.filter((function(t){return t.like})):t}},{key:"onUpdateSearch",value:function(t){this.setState({term:t})}},{key:"onFilterSelect",value:function(t){this.setState({filter:t})}},{key:"render",value:function(){var t=this.state,e=t.data,n=t.term,a=t.filter,i=e.filter((function(t){return t.like})).length,c=e.length,o=this.filterPost(this.searchPost(e,n),a);return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(S,{liked:i,allPosts:c}),Object(p.jsxs)("div",{className:"search-pannel d-flex",children:[Object(p.jsx)(f,{onUpdateSearch:this.onUpdateSearch}),Object(p.jsx)(m,{filter:a,onFilterSelect:this.onFilterSelect})]}),Object(p.jsx)(k,{posts:o,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked}),Object(p.jsx)(y,{onAdd:this.addItem})]})}}]),n}(a.Component);c.a.render(Object(p.jsx)(I,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.54ac1fc8.chunk.js.map