if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,r)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let l={};const u=s=>n(s,o),c={module:{uri:o},exports:l,require:u};e[o]=Promise.all(i.map((s=>c[s]||u(s)))).then((s=>(r(...s),l)))}}define(["./workbox-6567b62a"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quran-online"}),self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"/css/app.9ab3f662.css",revision:null},{url:"/css/chunk-vendors.e69385db.css",revision:null},{url:"/css/home.7f77ef7b.css",revision:null},{url:"/css/juz.f6b1aa3e.css",revision:null},{url:"/css/surah.735ff1ab.css",revision:null},{url:"/css/tafsir.d6a4045f.css",revision:null},{url:"/favicon/Group 1.jpg",revision:"347010b782a0a506804a30b95911b02e"},{url:"/favicon/favicon256.jpg",revision:"23985424c3e312f6ca66b086f69c3010"},{url:"/favicon/favicon256.png",revision:"be7a990f909780027e737e83d85fa5f7"},{url:"/favicon/logo.jpg",revision:"eee2c481d55da6399db23df404c76685"},{url:"/fonts/bootstrap-icons.70a9dee9.woff",revision:null},{url:"/fonts/bootstrap-icons.bfa90bda.woff2",revision:null},{url:"/img/favicon-16x16.89d117c8.png",revision:null},{url:"/img/favicon-32x32.0d3564dd.png",revision:null},{url:"/index.html",revision:"b74e0e55aa63148741af91989ab06db0"},{url:"/js/603.9ae59f08.js",revision:null},{url:"/js/app.d72c37be.js",revision:null},{url:"/js/chunk-vendors.0fa8a1e1.js",revision:null},{url:"/js/home.22764b03.js",revision:null},{url:"/js/juz.e174788b.js",revision:null},{url:"/js/surah.7e3ee180.js",revision:null},{url:"/js/tafsir.93d1d1ac.js",revision:null},{url:"/manifest.json",revision:"705f4889fabcffa8c796fc4cf7830993"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
