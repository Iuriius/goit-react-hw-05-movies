"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{877:function(n,t,r){r.d(t,{M4:function(){return s},Mn:function(){return f},Yn:function(){return p},wW:function(){return i},z1:function(){return o}});var e=r(5861),a=r(4687),u=r.n(a),c=r(3263).Z.create({baseURL:"https://api.themoviedb.org/3/"}),i=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/".concat("trending/movie/month"),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f"}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/".concat("search/movie"),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f",query:t}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/credits"),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f"}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/reviews"),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f"}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4126:function(n,t,r){r.d(t,{e:function(){return c}});var e=r(7689),a=r(3225),u=r(184),c=function(n){var t=n.movieList,r=(0,e.TH)();return(0,u.jsx)(a.aV,{children:t.length>0?t.map((function(n){var t=n.id,e=n.title;return(0,u.jsx)(a.ck,{children:(0,u.jsx)(a.Fg,{to:"/movies/".concat(t),state:{from:r},children:e})},t)})):null})}},3225:function(n,t,r){r.d(t,{Fg:function(){return p},aV:function(){return s},ck:function(){return f}});var e,a,u,c=r(168),i=r(4934),o=r(1087),s=i.Z.ul(e||(e=(0,c.Z)([""]))),f=i.Z.li(a||(a=(0,c.Z)([""]))),p=(0,i.Z)(o.rU)(u||(u=(0,c.Z)([""])))},9544:function(n,t,r){r.r(t),r.d(t,{Home:function(){return s}});var e=r(2791),a=r(877),u=r(4126),c=r(1077),i=r(1016),o=r(184),s=function(){(0,e.useEffect)((function(){}),[]);var n=(0,a.wW)();return(0,o.jsxs)(i.W2,{children:[(0,o.jsx)(c.Dx,{children:"Trending today:"}),n&&(0,o.jsx)(u.e,{movieList:n})]})}},1077:function(n,t,r){r.d(t,{Dx:function(){return o}});var e,a,u,c=r(168),i=r(4934),o=i.Z.h1(e||(e=(0,c.Z)([""])));i.Z.ul(a||(a=(0,c.Z)([""]))),i.Z.button(u||(u=(0,c.Z)([""])))}}]);
//# sourceMappingURL=544.5ee23121.chunk.js.map