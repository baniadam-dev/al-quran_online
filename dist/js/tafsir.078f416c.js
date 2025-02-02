"use strict";(self["webpackChunkquran_online"]=self["webpackChunkquran_online"]||[]).push([[690],{4309:function(a,t,s){s.r(t),s.d(t,{default:function(){return ua}});var e=s(6768);function n(a,t,s,n,r,i){const d=(0,e.g2)("DetailTafsirVue"),l=(0,e.g2)("DetailTafsirSkeleton");return(0,e.uX)(),(0,e.Wv)(e.tY,null,{default:(0,e.k6)((()=>[(0,e.bF)(d)])),fallback:(0,e.k6)((()=>[(0,e.bF)(l)])),_:1})}var r=s(4232);const i={class:"container mt-custom"},d={class:"bg-success p-4 rounded shadow text-white"},l={class:"row"},u={class:"col-md-6"},c={class:"fw-bold"},o=["textContent"],m=["textContent"],p=["textContent"],h={class:"col-md-6 text-end justify-content-end"},k={class:""},v={class:"mt-1"},b={class:"row mt-2"},f={key:0,class:"col-md-6 mt-1"},_={class:"d-grid gap-2"},L={key:1,class:"col-md-6"},x={key:2,class:"col-md-6 mt-1"},y={class:"d-grid gap-2"},w={class:"container mb-5"},g={class:"row"},F={class:"card mt-3 shadow-sm"},C={class:"card-body"},j={class:"card-title nama-latin mb-4"},X=["innerHTML"];function A(a,t,s,n,A,E){const S=(0,e.g2)("router-link"),R=(0,e.g2)("footer-vue");return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.Lk)("main",i,[(0,e.Lk)("div",d,[(0,e.Lk)("div",l,[(0,e.Lk)("div",u,[(0,e.Lk)("h2",c,[(0,e.Lk)("span",{textContent:(0,r.v_)(n.tafsir.nama_latin)},null,8,o),t[0]||(t[0]=(0,e.eW)(" - ")),(0,e.Lk)("span",{textContent:(0,r.v_)(n.tafsir.nama)},null,8,m)]),(0,e.Lk)("p",{class:"text-capitalize",textContent:(0,r.v_)(n.tafsir.tempat_turun+" • "+n.tafsir.jumlah_ayat+" ayat • "+n.tafsir.arti)},null,8,p)]),(0,e.Lk)("div",h,[(0,e.Lk)("div",k,[(0,e.Lk)("div",v,[(0,e.bF)(S,{to:{name:"surah",params:{id:n.tafsir.nomor}},class:"btn btn-warning fw-bold"},{default:(0,e.k6)((()=>t[1]||(t[1]=[(0,e.eW)(" Lihat Surat ")]))),_:1},8,["to"])])])])])]),(0,e.Lk)("div",b,[0!=n.tafsir.prev?((0,e.uX)(),(0,e.CE)("div",f,[(0,e.Lk)("div",_,[(0,e.bF)(S,{to:{name:"tafsir",params:{id:n.tafsir.prev_id}},class:"btn btn-success"},{default:(0,e.k6)((()=>[t[2]||(t[2]=(0,e.Lk)("i",{class:"bi bi-arrow-left"},null,-1)),(0,e.eW)(" Surah Sebelumnya ("+(0,r.v_)(n.tafsir.prevsurah)+") ",1)])),_:1},8,["to"])])])):(0,e.Q3)("",!0),0==n.tafsir.prev?((0,e.uX)(),(0,e.CE)("div",L)):(0,e.Q3)("",!0),0!=n.tafsir.next?((0,e.uX)(),(0,e.CE)("div",x,[(0,e.Lk)("div",y,[(0,e.bF)(S,{to:{name:"tafsir",params:{id:n.tafsir.next_id}},class:"btn btn-success float-end"},{default:(0,e.k6)((()=>[(0,e.eW)(" ("+(0,r.v_)(n.tafsir.nextsurah)+") Surah Selanjutnya ",1),t[3]||(t[3]=(0,e.Lk)("i",{class:"bi bi-arrow-right"},null,-1))])),_:1},8,["to"])])])):(0,e.Q3)("",!0)])]),(0,e.Lk)("div",w,[(0,e.Lk)("div",g,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(n.tafrow,((a,t)=>((0,e.uX)(),(0,e.CE)("div",{class:"col-md-12",key:t},[(0,e.Lk)("div",F,[(0,e.Lk)("div",C,[(0,e.Lk)("h5",j," Ayat "+(0,r.v_)(a.ayat),1),(0,e.Lk)("p",{innerHTML:a.tafsir,class:"card-text",style:{"white-space":"pre-wrap"}},null,8,X)])])])))),128))])]),(0,e.bF)(R)],64)}var E=s(144),S=s(1387),R=s(4373),D=s(8144),T={name:"DetailSurahVue",components:{FooterVue:D.A},data(){return{}},async setup(){const a=(0,E.Kh)({nomor:"",nama:"",nama_latin:"",jumlah_ayat:"",tempat_turun:"",arti:"",tafsir:[],surat_selanjutnya:{id:"",nomor:"",nama:"",nama_latin:"",jumlah_ayat:"",tempat_turun:"",arti:""},surat_sebelumnya:{id:"",nomor:"",nama:"",nama_latin:"",jumlah_ayat:"",tempat_turun:"",arti:""}});let t=(0,E.KR)([]);const s=(0,S.rd)(),e=(0,S.lq)();return await R.A.get(`https://equran.id/api/tafsir/${e.params.id}`).then((s=>{a.nomor=s.data.nomor,a.nama_latin=s.data.nama_latin,a.nama=s.data.nama,a.arti=s.data.arti,a.ayat=s.data.ayat,a.jumlah_ayat=s.data.jumlah_ayat,a.tempat_turun=s.data.tempat_turun,a.audio=s.data.audio,a.next=s.data.surat_selanjutnya,a.prev=s.data.surat_sebelumnya,a.next_id=s.data.surat_selanjutnya.id,a.prev_id=s.data.surat_sebelumnya.id,a.nextsurah=s.data.surat_selanjutnya.nama_latin,a.prevsurah=s.data.surat_sebelumnya.nama_latin,t.value=s.data.tafsir})).catch((a=>{console.log(a.response.data)})),{router:s,tafsir:a,tafrow:t}}},K=s(1241);const V=(0,K.A)(T,[["render",A],["__scopeId","data-v-3ba07e4a"]]);var W=V;const q={class:"container mt-custom"},I={class:"bg-success p-4 rounded shadow text-white"},Q={class:"float-end"},H={class:""},M={class:"row"},P={class:"col-md-6"},z={class:"lead"},Y={class:"row mt-3"},$={class:"col-md-6"},B={class:"d-grid gap-2"},G={class:"col-md-6"},J={class:"d-grid gap-2"},N={class:"container mb-5"},O={class:"row"},U={class:"card mt-4 shadow-sm"},Z={class:"card-body"},aa={class:"card-title"},ta={class:"card-text mt-4"};function sa(a,t,s,n,r,i){const d=(0,e.g2)("AnimatedPlaceholder");return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.Lk)("main",q,[(0,e.Lk)("div",I,[(0,e.Lk)("h1",Q,[(0,e.bF)(d,{width:"110px",height:"6px",borderRadius:"5px"})]),(0,e.Lk)("h1",H,[(0,e.bF)(d,{width:"250px",height:"20px",borderRadius:"5px"})]),(0,e.Lk)("div",M,[(0,e.Lk)("div",P,[(0,e.Lk)("span",z,[(0,e.bF)(d,{width:"160px",height:"20px",borderRadius:"5px"})])])])]),(0,e.Lk)("div",Y,[(0,e.Lk)("div",$,[(0,e.Lk)("div",B,[(0,e.bF)(d,{width:"100%",height:"35px",borderRadius:"5px"})])]),(0,e.Lk)("div",G,[(0,e.Lk)("div",J,[(0,e.bF)(d,{width:"100%",height:"35px",borderRadius:"5px",class:"float-end"})])])])]),(0,e.Lk)("div",N,[(0,e.Lk)("div",O,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(n.ayat,((a,t)=>((0,e.uX)(),(0,e.CE)("div",{class:"col-md-12",key:t},[(0,e.Lk)("div",U,[(0,e.Lk)("div",Z,[(0,e.Lk)("h5",aa,[(0,e.bF)(d,{width:"150px",height:"20px",borderRadius:"5px"})]),(0,e.Lk)("p",ta,[(0,e.bF)(d,{width:"100%",height:"200px",borderRadius:"5px"})])])])])))),128))])])],64)}var ea=s(2894),na={name:"DetailSurahVue",components:{AnimatedPlaceholder:ea.A},setup(){const a=15;return{ayat:a}}};const ra=(0,K.A)(na,[["render",sa],["__scopeId","data-v-0ee3c2a5"]]);var ia=ra,da={name:"DetailTafsir",components:{DetailTafsirVue:W,DetailTafsirSkeleton:ia}};const la=(0,K.A)(da,[["render",n]]);var ua=la}}]);
//# sourceMappingURL=tafsir.078f416c.js.map