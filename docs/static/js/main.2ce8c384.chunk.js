(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),i=n.n(a),s=n(2),u=n(3),j=n(0),o=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(s.a)(n,2),a=r[0],i=r[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a]})),i(""))},children:Object(j.jsx)("input",{type:"text",className:"input__text",value:a,onChange:function(e){i(e.target.value)}})})})},l=n(8),d=n(5),b=n.n(d),O=n(7),p=function(){var e=Object(O.a)(b.a.mark((function e(t){var n,c,r,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"nA3po3gSKPi9NoXIXqWqqz9OGeiSwfhO",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=").concat("nA3po3gSKPi9NoXIXqWqqz9OGeiSwfhO"),e.next=4,fetch(n);case 4:return c=e.sent,e.next=7,c.json();case 7:return r=e.sent,a=r.data,i=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,n=e.url;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card__header",children:Object(j.jsx)("img",{src:n.url,alt:t,className:"card__img"})}),Object(j.jsx)("p",{className:"card__title",children:t})]})},h=function(){return Object(j.jsx)("div",{className:"spiner"})},x=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){p(e).then((function(e){a({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,a=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:t}),a&&Object(j.jsx)(h,{}),Object(j.jsx)("ol",{className:"Container",children:r.map((function(e){return Object(j.jsx)(f,Object(l.a)({},e),Object(u.a)())}))})]})},m=function(){var e=Object(c.useState)([""]),t=Object(s.a)(e,2),n=t[0],r=t[1];return n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Gif Expert App "}),Object(j.jsx)(o,{setCategories:r}),Object(j.jsx)("hr",{}),Object(j.jsx)(j.Fragment,{children:n.map((function(e){return Object(j.jsx)(x,{category:e},Object(u.a)())}))})]}):null};n(15);i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2ce8c384.chunk.js.map