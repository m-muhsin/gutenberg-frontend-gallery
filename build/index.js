!function(){"use strict";var e,t={396:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,r=window.wp.blockEditor,l=window.wp.components;(0,e.registerBlockType)("create-block/gutenberg-frontend-gallery",{edit:function(e){let{attributes:a,setAttributes:o}=e;const{images:i}=a;return console.log("images",i),(0,t.createElement)("p",(0,r.useBlockProps)(),(0,n.__)("gutenberg-frontend-gallery"),(0,t.createElement)("button",{class:"btn-left"},"left"),(0,t.createElement)("div",{class:"gallery-image-container"},i.length>0?i.map(((e,n)=>(0,t.createElement)("img",{src:e.url,alt:e.alt,className:"gallery-image active"}))):""),(0,t.createElement)("button",{class:"btn-right"},"right"),(0,t.createElement)(r.MediaUploadCheck,null,(0,t.createElement)(r.MediaUpload,{onSelect:e=>{console.log("images 1",i),console.log("images 2",i);let t={url:e.url,alt:e.alt};o({images:[...i,t]})},allowedTypes:["image"],render:e=>{let{open:n}=e;return(0,t.createElement)(l.Button,{onClick:n},"Open Media Library")}})))},save:function(e){let{attributes:n}=e;const{images:l}=n,a=[...l];return(0,t.createElement)("p",r.useBlockProps.save(),(0,t.createElement)("div",{class:"gallery-container",id:"imagesContainer","data-images":a},(0,t.createElement)("button",{class:"btn-left"},"left"),(0,t.createElement)("div",{class:"gallery-image-container"},l.length>0?l.map(((e,n)=>(0,t.createElement)("img",{className:0===n?"gallery-image active":"gallery-image",src:e.url,alt:e.alt}))):""),(0,t.createElement)("button",{class:"btn-right"},"right")))}})}},n={};function r(e){var l=n[e];if(void 0!==l)return l.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,l,a){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],a=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(i=!1,a<o&&(o=a));if(i){e.splice(u--,1);var s=l();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,l,a]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,a,o=n[0],i=n[1],c=n[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(l in i)r.o(i,l)&&(r.m[l]=i[l]);if(c)var u=c(r)}for(t&&t(n);s<o.length;s++)a=o[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=self.webpackChunkgutenberg_frontend_gallery=self.webpackChunkgutenberg_frontend_gallery||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=r.O(void 0,[46],(function(){return r(396)}));l=r.O(l)}();