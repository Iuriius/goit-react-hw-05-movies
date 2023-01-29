"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[420],{877:function(e,r,n){n.d(r,{M4:function(){return o},Mn:function(){return d},Yn:function(){return f},wW:function(){return u},z1:function(){return i}});var t=n(5861),a=n(4687),c=n.n(a),s=n(3263).Z.create({baseURL:"https://api.themoviedb.org/3/"}),u=function(){var e=(0,t.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/".concat("trending/movie/week"),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f"}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/".concat("search/movie"),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f",query:r}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f"}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/credits"),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f"}});case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/reviews"),{params:{api_key:"23220e7137d4edd367a9f0eb448d494f"}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},9420:function(e,r,n){n.r(r),n.d(r,{MovieCard:function(){return v}});var t=n(5861),a=n(9439),c=n(4687),s=n.n(c),u=n(2791),i=n(5218),o=n(7689),d=n(877),f=n(1016),p=n(3035),h=n(184),v=function(){var e,r,n=(0,o.UO)().movieId,c=(0,u.useState)({}),v=(0,a.Z)(c,2),l=v[0],x=v[1],m=(0,u.useState)(""),w=(0,a.Z)(m,2),j=w[0],k=w[1],g=(0,o.TH)(),Z=(0,u.useRef)(null===(e=g.state)||void 0===e?void 0:e.from);if((0,u.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.M4)(n);case 3:r=e.sent,x(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),k(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),j)return i.ZP.error("Sorry, something went wrong \ud83d\ude1e"),(0,h.jsxs)(f.W2,{children:[(0,h.jsx)("div",{children:(0,h.jsx)(i.x7,{})}),(0,h.jsx)("p",{children:"Something went wrong... \ud83d\ude1e"})]});if(!l)return(0,h.jsx)(f.W2,{children:(0,h.jsx)("p",{children:"There are no reviews of this movie yet \ud83d\ude1e"})});var b=l.title,y=l.poster_path,_=l.release_date,I=l.vote_average,M=l.overview,U=l.genres;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(p.$0,{children:(0,h.jsxs)(f.W2,{children:[(0,h.jsx)(p.II,{to:null!==(r=Z.current)&&void 0!==r?r:"/",children:"Go back"}),(0,h.jsxs)(p.UK,{children:[(0,h.jsx)(p.Ee,{src:y&&"https://image.tmdb.org/t/p/w500".concat(y),alt:b}),(0,h.jsxs)(p.dk,{children:[(0,h.jsx)("h2",{children:"".concat(b,"(").concat(new Date(_).getFullYear(),")")}),(0,h.jsxs)("p",{children:["User score: ",Math.ceil(10*I)," %"]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:M}),(0,h.jsx)("h2",{children:"Genres"}),(0,h.jsx)("p",{children:(null===U||void 0===U?void 0:U.length)>0?U.map((function(e){return e.name})).join(" "):"-"})]})]})]})}),(0,h.jsx)(p.$0,{children:(0,h.jsxs)(f.W2,{children:[(0,h.jsx)(f.Fg,{to:"cast",children:"Cast"}),(0,h.jsx)(f.Fg,{to:"reviews",children:"Reviews"})]})}),(0,h.jsx)(p.$0,{children:(0,h.jsx)(o.j3,{})})]})}},3035:function(e,r,n){n.d(r,{$0:function(){return f},Ee:function(){return h},II:function(){return l},UK:function(){return p},dk:function(){return v}});var t,a,c,s,u,i=n(168),o=n(4934),d=n(1087),f=o.Z.section(t||(t=(0,i.Z)([""]))),p=o.Z.div(a||(a=(0,i.Z)([""]))),h=o.Z.img(c||(c=(0,i.Z)([""]))),v=o.Z.div(s||(s=(0,i.Z)([""]))),l=(0,o.Z)(d.OL)(u||(u=(0,i.Z)([""])))}}]);
//# sourceMappingURL=420.77fc6015.chunk.js.map