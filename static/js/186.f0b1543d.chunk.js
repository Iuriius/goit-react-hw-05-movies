"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{877:function(e,r,n){n.d(r,{M4:function(){return o},Mn:function(){return f},Yn:function(){return p},wW:function(){return s},z1:function(){return i}});var t=n(5861),a=n(4687),u=n.n(a),c=n(3263).Z.create({baseURL:"https://api.themoviedb.org/3/"}),s=function(){var e=(0,t.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/".concat("trending/movie/month"),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f"}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/".concat("search/movie"),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f",query:r}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f"}});case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f"}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},3225:function(e,r,n){n.d(r,{Fg:function(){return p},aV:function(){return o},ck:function(){return f}});var t,a,u,c=n(168),s=n(4934),i=n(1087),o=s.Z.ul(t||(t=(0,c.Z)([""]))),f=s.Z.li(a||(a=(0,c.Z)([""]))),p=(0,s.Z)(i.rU)(u||(u=(0,c.Z)([""])))},186:function(e,r,n){n.r(r),n.d(r,{Reviews:function(){return v}});var t=n(5861),a=n(9439),u=n(4687),c=n.n(u),s=n(2791),i=n(7689),o=n(5218),f=n(877),p=n(1016),d=n(3225),h=n(184),v=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),n=r[0],u=r[1],v=(0,s.useState)(""),l=(0,a.Z)(v,2),m=l[0],w=l[1],x=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Yn)(x);case 3:r=e.sent,u(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),w(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),m?(o.ZP.error("Sorry, something went wrong \ud83d\ude1e"),(0,h.jsxs)(p.W2,{children:[(0,h.jsx)("div",{children:(0,h.jsx)(o.x7,{})}),(0,h.jsx)("p",{children:"Something went wrong... \ud83d\ude1e"})]})):(0,h.jsx)(p.W2,{children:0!==n.length?(0,h.jsx)(d.aV,{children:n.map((function(e){var r=e.author,n=e.content,t=e.id;return(0,h.jsxs)("li",{children:[(0,h.jsx)("h2",{children:r&&r}),(0,h.jsx)("p",{children:n&&n})]},t)}))}):(0,h.jsx)("p",{children:"There are no reviews of this movie yet \ud83d\ude1e"})})}}}]);
//# sourceMappingURL=186.f0b1543d.chunk.js.map