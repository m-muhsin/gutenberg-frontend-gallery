!function(){"use strict";var e,t={959:function(){var e=window.wp.blocks,t=window.wp.element,r=window.wp.i18n,n=window.wp.blockEditor;(0,e.registerBlockType)("create-block/gutenberg-frontend-gallery",{edit:function(){const[e,o]=(0,t.useState)(0);return(0,t.createElement)("p",(0,n.useBlockProps)(),(0,t.createElement)("center",null,(0,r.__)("Gutenberg Frontend Gallery")),(0,t.createElement)("div",{className:"gallery-container"},(0,t.createElement)("button",{onClick:()=>o(e>0?e-1:2)},"left"),(0,t.createElement)("div",{className:"gallery-image-container"},(0,t.createElement)("img",{className:0===e?"active":"",src:"https://i.picsum.photos/id/929/600/400.jpg?hmac=mmmeqhlQps4_kzupk6aqkGVVTotK6zectPzy67Weymo",alt:"from lorem pixel"}),(0,t.createElement)("img",{className:1===e?"active":"",src:"https://i.picsum.photos/id/251/600/400.jpg?hmac=fgtXphw22xo5oD4Rr8iAOmLlSMBqp0nhdQdcR8ND1JU",alt:"from lorem pixel"}),(0,t.createElement)("img",{className:2===e?"active":"",src:"https://i.picsum.photos/id/152/600/400.jpg?hmac=JSE6ueTxsG8dYsvNUg2Ck-LXuzP8Hb1ZCI-1Q4etOdQ",alt:"from lorem pixel"})),(0,t.createElement)("button",{onClick:()=>o(e<2?e+1:0)},"right")))},save:function(){return(0,t.createElement)("p",n.useBlockProps.save(),(0,r.__)(" Gallery frontend here...","gutenberg-frontend-gallery"))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=function(t,r,o,l){if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],l=e[u][2];for(var a=!0,i=0;i<r.length;i++)(!1&l||c>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(a=!1,l<c&&(c=l));if(a){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[r,o,l]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,l,c=r[0],a=r[1],i=r[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(i)var u=i(n)}for(t&&t(r);s<c.length;s++)l=c[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},r=self.webpackChunkgutenberg_frontend_gallery=self.webpackChunkgutenberg_frontend_gallery||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[46],(function(){return n(959)}));o=n.O(o)}();