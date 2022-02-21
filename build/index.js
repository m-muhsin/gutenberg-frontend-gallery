!function(){"use strict";var e,t={396:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,r=window.wp.blockEditor,a=window.wp.components;const l=()=>(0,t.createElement)(a.Icon,{icon:"plus"});(0,e.registerBlockType)("create-block/gutenberg-frontend-gallery",{edit:function(e){let{attributes:o,setAttributes:i}=e;const{images:c}=o;return(0,t.createElement)("p",(0,r.useBlockProps)(),(0,t.createElement)("h3",{className:"block-title"},(0,n.__)("Gutenberg Slideshow")),(0,t.createElement)("div",{className:"gallery-image-container--edit"},c.length>0?c.map(((e,n)=>(0,t.createElement)("div",{className:"single-image-container"},(0,t.createElement)("span",{className:"remove-btn",onClick:()=>(e=>{const t=c.filter(((t,n)=>{if(e!==n)return t}));i({images:t})})(n)},"×"),(0,t.createElement)("img",{className:"gallery-image current",src:e.url,alt:e.alt})))):"No images have been added to the Gallery."),(0,t.createElement)(r.MediaUploadCheck,null,(0,t.createElement)(r.MediaUpload,{multiple:!0,onSelect:e=>{let t=[];e.forEach((e=>{t=[...t,{url:e.url,alt:e.alt}]})),i({images:[...c,...t]})},allowedTypes:["image"],render:e=>{let{open:n}=e;return(0,t.createElement)(a.Button,{icon:l,className:"add-image",variant:"secondary",onClick:n},"Add Gallery Image")}})))},save:function(e){let{attributes:n}=e;const{images:a}=n,l=[...a];return(0,t.createElement)("div",r.useBlockProps.save(),(0,t.createElement)("div",{class:"gallery-container",id:"imagesContainer","data-images":l},(0,t.createElement)("div",{class:"slides"},a.length>0?a.map(((e,n)=>(0,t.createElement)("img",{className:0===n?"gallery-image slide current":"gallery-image slide",src:e.url,alt:e.alt}))):"No images have been added to the Gallery."),(0,t.createElement)("div",{class:"controls"},(0,t.createElement)("button",{class:"goToPrev"},"← Prev"),(0,t.createElement)("button",{class:"goToNext"},"Next →"))))}})}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,n,a,l){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],l=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&l||o>=l)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(i=!1,l<o&&(o=l));if(i){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,a,l]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,l,o=n[0],i=n[1],c=n[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var u=c(r)}for(t&&t(n);s<o.length;s++)l=o[s],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},n=self.webpackChunkgutenberg_frontend_gallery=self.webpackChunkgutenberg_frontend_gallery||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[46],(function(){return r(396)}));a=r.O(a)}();