"use strict";(self["webpackChunkquran_online"]=self["webpackChunkquran_online"]||[]).push([[962],{7122:function(a,e,t){t.d(e,{A:function(){return l}});var n=t(6768);const r={class:"container mt-custom"};function s(a,e,t,s,o,c){return(0,n.uX)(),(0,n.CE)("main",r,e[0]||(e[0]=[(0,n.Lk)("div",{class:"home bg-success text-white rounded text-center shadow mb-4"},[(0,n.Lk)("h1",null,"Al-Qur'an Online📖"),(0,n.Lk)("p",{class:"lead content"},[(0,n.eW)(" Baca Al-Qur'an secara Online dimana dan kapanpun saja dengan mudah "),(0,n.Lk)("br"),(0,n.eW)(" Al-Qur'an ini yang bersumber dari "),(0,n.Lk)("a",{href:"https://quran.kemenag.go.id/",class:"text-decoration-none text-warning",target:"_blank"},"Kementrian Agama Republik Indonesia "),(0,n.eW)(" dengan murottal "),(0,n.Lk)("strong",null,"Misyari Rasyid Al-'Afasi"),(0,n.eW)(". ")])],-1)]))}var o={name:"HomeVue",components:{}},c=t(1241);const u=(0,c.A)(o,[["render",s],["__scopeId","data-v-a10f7a5a"]]);var l=u},4875:function(a,e,t){t.r(e),t.d(e,{default:function(){return E}});var n=t(6768),r=t(4232);const s={key:0,class:"text-center mt-3 mb-4"};function o(a,e,t,o,c,u){const l=(0,n.g2)("HomeVue"),d=(0,n.g2)("SurahVue"),i=(0,n.g2)("SurahSkeleton"),m=(0,n.g2)("FooterVue");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.bF)(l),o.errMsg?((0,n.uX)(),(0,n.CE)("div",s,(0,r.v_)(o.errMsg),1)):((0,n.uX)(),(0,n.Wv)(n.tY,{key:1},{default:(0,n.k6)((()=>[(0,n.bF)(d)])),fallback:(0,n.k6)((()=>[(0,n.bF)(i)])),_:1})),(0,n.bF)(m)],64)}var c=t(144),u=t(7122),l=t(5130);const d={class:"container mb-2"},i={class:"row"},m={class:"col-md-12"},p={class:"search"},k={class:"container mb-5"},v={class:"row"},h={class:"card mt-4"},b={class:"card-body card-custom"},L={class:"float-end"},f={class:"card-title nama-latin"},g={class:"card-text text-capitalize"},x={key:0,class:"mt-5 mb-5"};function _(a,e,t,s,o,c){const u=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",d,[(0,n.Lk)("div",i,[(0,n.Lk)("div",m,[(0,n.Lk)("div",p,[(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s.input=a),class:"search",placeholder:"Ketik nama surat..."},null,512),[[l.Jo,s.input]])])])])]),(0,n.Lk)("div",k,[(0,n.Lk)("div",v,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(c.filteredQuran,((a,e)=>((0,n.uX)(),(0,n.CE)("div",{class:"col-md-4 col-12",key:e},[(0,n.bF)(u,{to:{name:"surah",params:{id:a.nomor}},class:"text-decoration-none text-dark"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",h,[(0,n.Lk)("div",b,[(0,n.bF)(u,{to:{name:"surah",params:{id:a.nomor}},class:"text-decoration-none text-success"},{default:(0,n.k6)((()=>[(0,n.Lk)("h2",L,(0,r.v_)(a.nama),1)])),_:2},1032,["to"]),(0,n.bF)(u,{to:{name:"surah",params:{id:a.nomor}},class:"text-decoration-none text-success"},{default:(0,n.k6)((()=>[(0,n.Lk)("h5",f,[(0,n.eW)((0,r.v_)(a.nomor)+". "+(0,r.v_)(a.nama_latin)+" ",1),(0,n.Lk)("small",null,"("+(0,r.v_)(a.jumlah_ayat)+" ayat)",1)])])),_:2},1032,["to"]),(0,n.Lk)("p",g,(0,r.v_)(a.tempat_turun+" • "+a.arti),1)])])])),_:2},1032,["to"])])))),128)),s.input&&!c.filteredQuran.length?((0,n.uX)(),(0,n.CE)("div",x,e[1]||(e[1]=[(0,n.Lk)("h3",{class:"text-center mt-5 mb-5"},"Surat tidak ditemukan",-1)]))):(0,n.Q3)("",!0)])])],64)}t(8992),t(4520);var w=t(4373),A={name:"SurahVue",components:{},async setup(){const a=(0,c.KR)([]),e=(0,c.KR)("");return await w.A.get("https://equran.id/api/surat").then((e=>{a.value=e.data})).catch((a=>{console.log(a.response.data)})),{quran:a,input:e}},computed:{filteredQuran(){return this.quran.filter((a=>a.nama_latin.toLowerCase().includes(this.input.toLowerCase())||a.arti.toLowerCase().includes(this.input.toLowerCase())))}}},F=t(1241);const y=(0,F.A)(A,[["render",_],["__scopeId","data-v-3c6f350a"]]);var C=y,K=t(8144),S=t(6872),V={name:"IndexVue",components:{HomeVue:u.A,SurahVue:C,FooterVue:K.A,SurahSkeleton:S.A},setup(){const a=(0,c.KR)(null);return(0,n.qG)((()=>{a.value="Something went wrong!, Please try again later."})),{errMsg:a}}};const X=(0,F.A)(V,[["render",o],["__scopeId","data-v-72b1e831"]]);var E=X},6872:function(a,e,t){t.d(e,{A:function(){return h}});var n=t(6768);const r={class:"container mt-2 mb-5"},s={class:"row"},o={class:"card mt-4"},c={class:"card-body"},u={class:"float-end"},l={class:"card-title nama-latin"},d={class:"card-text"};function i(a,e,t,i,m,p){const k=(0,n.g2)("AnimatedPlaceholder");return(0,n.uX)(),(0,n.CE)(n.FK,null,[e[0]||(e[0]=(0,n.Fv)('<div class="container mb-2" data-v-02a83284><div class="row" data-v-02a83284><div class="col-md-12" data-v-02a83284><div class="input-group" data-v-02a83284><input type="text" class="form-control p-3" placeholder="Ketik nama surat..." data-v-02a83284></div></div></div></div>',1)),(0,n.Lk)("div",r,[(0,n.Lk)("div",s,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.quran,(a=>((0,n.uX)(),(0,n.CE)("div",{class:"col-md-4 col-12",key:a},[(0,n.Lk)("div",o,[(0,n.Lk)("div",c,[(0,n.Lk)("h5",u,[(0,n.bF)(k,{width:"70px",height:"20px",borderRadius:"5px"})]),(0,n.Lk)("h5",l,[(0,n.bF)(k,{width:"150px",height:"20px",borderRadius:"5px"})]),(0,n.Lk)("p",d,[(0,n.bF)(k,{width:"250px",height:"20px",borderRadius:"5px"})])])])])))),128))])])],64)}var m=t(2894),p={name:"SurahSkeletonVue",components:{AnimatedPlaceholder:m.A},setup(){const a=15;return{quran:a}}},k=t(1241);const v=(0,k.A)(p,[["render",i],["__scopeId","data-v-02a83284"]]);var h=v}}]);
//# sourceMappingURL=home.880364bc.js.map