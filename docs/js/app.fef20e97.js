(function(t){function e(e){for(var n,i,l=e[0],s=e[1],u=e[2],d=0,v=[];d<l.length;d++)i=l[d],o[i]&&v.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);c&&c(e);while(v.length)v.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,l=1;l<a.length;l++){var s=a[l];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2234:function(t,e,a){"use strict";var n=a("d316"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=a("bb71");a("da64");n["a"].use(o["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Header"),a("v-content",[a("router-view")],1),a("Footer")],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{staticClass:"white--text",attrs:{app:"",color:"blue-grey darken-4"}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("BOOK")]),a("span",{staticClass:"font-weight-light"},[t._v("SHELF")])]),a("v-spacer"),a("v-flex",{attrs:{xs12:"",sm6:"",md3:""}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("v-text-field",{attrs:{label:"検索",solo:"",flat:"","append-icon":"search"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)])],1),a("v-dialog",{attrs:{width:"800"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},t._l(t.books,function(e){return a("v-card",{key:e.ISBN,attrs:{color:"white"}},[a("v-layout",[a("v-flex",{attrs:{xs5:""}},[a("v-img",{attrs:{src:e.URL,height:"250px",contain:""}})],1),a("v-flex",{attrs:{xs7:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(e.Title))]),a("div",[t._v("著者： "+t._s(e.Author))]),a("div",[t._v("出版社： "+t._s(e.Publisher))]),a("div",[t._v("出版年月："+t._s(e.PublishedDate))])])])],1)],1),a("v-divider",{attrs:{light:""}}),a("v-card-actions",{staticClass:"pa-3"},[t._v("\r\n              "+t._s(e.Description)+"\r\n            ")]),a("v-divider"),a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\r\n              閉じる\r\n            ")])],1)}),1)],1)},s=[],u=(a("ac6a"),a("8aa5")),c=a.n(u),d={data:function(){return{books:[],keyword:"",dialog:!1}},methods:{search:function(){var t=this,e=c.a.firestore(),a=e.collection("books"),n=a.where("Title","==",this.keyword);n.get().then(function(e){e.empty?alert("一致するデータがありません"):(t.books=[],e.forEach(function(e){console.log(e.data()),t.books.push({ISBN:e.data().ISBN,Title:e.data().Title,Author:e.data().Author,Publisher:e.data().Publisher,PublishedDate:e.data().PublishedDate,Description:e.data().Description,URL:e.data().URL})}),t.dialog=!0)}).catch(function(t){console.log("Error getting documents",t)})}}},v=d,f=(a("2234"),a("2877")),h=a("6544"),p=a.n(h),m=a("8336"),b=a("b0af"),g=a("99d9"),k=a("12b2"),y=a("169a"),_=a("ce7e"),w=a("0e8f"),x=a("adda"),V=a("a722"),S=a("9910"),I=a("2677"),B=a("71d9"),D=a("2a7f"),C=Object(f["a"])(v,l,s,!1,null,null,null),j=C.exports;p()(C,{VBtn:m["a"],VCard:b["a"],VCardActions:g["a"],VCardTitle:k["a"],VDialog:y["a"],VDivider:_["a"],VFlex:w["a"],VImg:x["a"],VLayout:V["a"],VSpacer:S["a"],VTextField:I["a"],VToolbar:B["a"],VToolbarTitle:D["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",[a("v-bottom-nav",{attrs:{value:!0,fixed:"",color:"grey lighten-4"}},[a("router-link",{attrs:{tag:"button",to:"/"}},[a("v-btn",{attrs:{color:"teal",flat:""}},[a("span",[t._v("Home")]),a("v-icon",[t._v("home")])],1)],1),a("router-link",{attrs:{tag:"button",to:"/list"}},[a("v-btn",{attrs:{color:"teal",flat:""}},[a("span",[t._v("Book")]),a("v-icon",[t._v("book")])],1)],1),t.user?a("router-link",{attrs:{tag:"button",to:"/login"}},[a("v-btn",{attrs:{color:"teal",flat:""},on:{click:t.signOut}},[a("span",[t._v("signout")]),a("v-icon",[t._v("build")])],1)],1):a("router-link",{attrs:{tag:"button",to:"/login"}},[a("v-btn",{attrs:{color:"teal",flat:""}},[a("span",[t._v("Login")]),a("v-icon",[t._v("build")])],1)],1)],1)],1)},A=[],E={data:function(){return{user:null}},methods:{signOut:function(){var t=this;c.a.auth().signOut().then(function(){t.$router.push("/login")})}},beforeCreate:function(){var t=this;c.a.auth().onAuthStateChanged(function(e){t.user=e||null})}},$=E,O=a("887a"),T=a("553a"),P=a("132d"),R=Object(f["a"])($,N,A,!1,null,null,null),L=R.exports;p()(R,{VBottomNav:O["a"],VBtn:m["a"],VFooter:T["a"],VIcon:P["a"]});var F={name:"App",components:{Header:j,Footer:L}},U=F,q=a("7496"),z=a("549c"),H=Object(f["a"])(U,r,i,!1,null,null,null),M=H.exports;p()(H,{VApp:q["a"],VContent:z["a"]});var W=a("8c4f"),Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{attrs:{dark:"",height:"900",src:"https://source.unsplash.com/YLSwjSy7stw/1200x1200"}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[a("h1",{staticClass:"display-3 font-weight-black mb-3"},[t._v("BooKShelF")]),a("h4",{staticClass:"subheading font-weight-black"},[t._v("Let's create your own bookshelf!")])])],1)},K=[],G={name:"Home",data:function(){return{width:window.innerWidth,height:window.innerHeight}},methods:{handleResize:function(){this.width=window.innerWidth,this.height=window.innerHeight}},monuted:function(){window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)}},J=G,X=a("8b9c"),Z=Object(f["a"])(J,Y,K,!1,null,null,null),Q=Z.exports;p()(Z,{VLayout:V["a"],VParallax:X["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",[t._v("ログイン")]),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:t.emailRules,label:"メールアドレス",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{type:"password",counter:8,rules:t.passRules,label:"パスワード",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v("\n          ログイン\n        ")]),a("v-btn",{attrs:{color:"error"},on:{click:t.reset}},[t._v("\n          リセット\n        ")])],1),a("router-link",{attrs:{to:"/signup"}},[t._v("登録していない方はこちら")])],1)},et=[],at={data:function(){return{valid:!0,email:"",emailRules:[function(t){return!!t||"メールアドレスを記入してください"},function(t){return/.+@.+/.test(t)||"有効なアドレスを記入してください"}],password:"",passRules:[function(t){return!!t||"パスワードを記入してください"},function(t){return t&&t.length>=8||"8文字以上で記入してください"}]}},methods:{signIn:function(){var t=this;c.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){t.$route.query.redirect?t.$router.push(t.$route.query.redirect):t.$router.push("/")},function(t){alert(t.message)})},validate:function(){this.$refs.form.validate()&&(this.snackbar=!0),this.signIn()},reset:function(){this.$refs.form.reset()}}},nt=at,ot=a("a5238"),rt=a("4bd4"),it=Object(f["a"])(nt,tt,et,!1,null,null,null),lt=it.exports;p()(it,{VBtn:m["a"],VContainer:ot["a"],VForm:rt["a"],VTextField:I["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-card",[a("v-card-title",{staticClass:"blue-grey lighten-5"},[a("h1",[t._v("合計："+t._s(t.book_number)+"冊")]),a("v-spacer"),a("AddBookDialog",{attrs:{items:t.items,uid:t.uid},on:{display:t.display}})],1),a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.items,function(e){return a("v-flex",{key:e.ISBN,attrs:{xs6:"",md4:""}},[a("v-card",[a("v-img",{attrs:{src:e.URL,height:"200px"}}),a("v-divider",{attrs:{light:""}}),a("v-card-actions",{staticClass:"pa-3 font-weight-black",domProps:{textContent:t._s(e.Title)}}),a("v-divider",{attrs:{light:""}}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:t.deletes}},[a("v-icon",[t._v("delete")])],1),a("DetailDaialog",{attrs:{propsbooksdialog:t.propsbooksdialog,title:e.Title,author:e.Author,publisher:e.Title,publishedDate:e.Publisher,description:e.Description,url:e.URL}})],1)],1)],1)}),1)],1)],1)],1)],1)},ut=[],ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"800"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{icon:""}},n),[a("v-icon",[t._v("bookmark")])],1)]}}]),model:{value:t.booksdialog,callback:function(e){t.booksdialog=e},expression:"booksdialog"}},[a("v-card",{attrs:{color:"white"}},[a("v-layout",[a("v-flex",{attrs:{xs5:""}},[a("v-img",{attrs:{src:t.url,height:"250px",contain:""}})],1),a("v-flex",{attrs:{xs7:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(t.title))]),a("div",[t._v("著者： "+t._s(t.author))]),a("div",[t._v("出版社： "+t._s(t.publisher))]),a("div",[t._v("出版年月："+t._s(t.publishedDate))])])])],1)],1),a("v-divider",{attrs:{light:""}}),a("v-card-actions",{staticClass:"pa-3"},[t._v("\n          "+t._s(t.description)+"\n        ")]),a("v-divider"),a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.booksdialog=!1}}},[t._v("\n          閉じる\n        ")])],1)],1)},dt=[],vt={props:{propsbooksdialog:{type:Boolean},title:{type:String},author:{type:String},publisher:{type:String},publishedDate:{type:String},description:{type:String},url:{type:String}},data:function(){return{booksdialog:this.propsbooksdialog}}},ft=vt,ht=Object(f["a"])(ft,ct,dt,!1,null,null,null),pt=ht.exports;p()(ht,{VBtn:m["a"],VCard:b["a"],VCardActions:g["a"],VCardTitle:k["a"],VDialog:y["a"],VDivider:_["a"],VFlex:w["a"],VIcon:P["a"],VImg:x["a"],VLayout:V["a"],VSpacer:S["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{round:"",color:"blue lighten-3",dark:""}},n),[t._v("\n        本を追加する\n      ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n        ISBNを参照し本を追加します\n      ")]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{type:"number",counter:13,rules:t.ISBNRules,label:t.label,required:""},model:{value:t.ISBN,callback:function(e){t.ISBN="string"===typeof e?e.trim():e},expression:"ISBN"}}),a("v-btn",{attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v("\n            追加する\n          ")])],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          閉じる\n        ")])],1)],1)],1)],1)},bt=[],gt=a("bc3a"),kt=a.n(gt),yt={props:{items:{type:Array},uid:{type:String}},data:function(){return{label:"半角数字で入力してください",ISBNRules:[function(t){return!!t||"ISBNを入力してください"},function(t){return t&&t.length>=10||"ISBNは10/13桁の数字を入力してください"},function(t){return t&&t.length<=13||"ISBNは10/13桁の数字を入力してください"}],ISBN:"",judge:!0,valid:!0,dialog:!1}},methods:{validate:function(){this.$refs.form.validate()&&(console.log(this.ISBN),this.snackbar=!0,this.addBook())},addBook:function(){this.judge=!0,this.checkBook(this.ISBN),this.getResult(this.ISBN),this.$emit("display")},checkBook:function(t){var e=this;this.items.forEach(function(a){t==a.ISBN&&(e.judge=!1)})},getResult:function(t){var e=this;console.log(t),kt.a.get("https://www.googleapis.com/books/v1/volumes?q=isbn:"+t).then(function(t){if(null==t.data.items)console.log("データがありません"),e.ISBN="",e.label="お探しの本は見つかりません";else if(0==e.judge)e.ISBN="",e.label="入力済みのISBNです";else{var n=t.data.items,o=n[0].volumeInfo.title;null==o&&(o="データがありません");var r=n[0].volumeInfo.imageLinks.thumbnail;null==r&&(r="データがありません");var i=n[0].volumeInfo.authors[0];null==i&&(i="データがありません");var l=n[0].volumeInfo.publisher;null==l&&(l="データがありません");var s=n[0].volumeInfo.publishedDate;null==s&&(s="データがありません");var u=t.data.items[0].volumeInfo.description;null==u&&(u="データがありません");var c=a("8aa5");a("e71f"),c.apps.length||c.initializeApp({apiKey:"AIzaSyDOY8bWD39SdM2imFnSenjZX8YE2xEG28U",authDomain:"bookshelf-4ae61.firebaseapp.com",projectId:"bookshelf-4ae61"});var d=c.firestore();d.collection("books").add({UID:e.uid,ISBN:e.ISBN,Title:o,Author:i,Publisher:l,PublishedDate:s,Description:u,URL:r}).then(function(t){console.log("document written with ID: ",t.id)}).catch(function(t){console.error("Error adding document: ",t)}),e.dialog=!1,e.ISBN="",e.$refs.form.reset()}})}}},_t=yt,wt=Object(f["a"])(_t,mt,bt,!1,null,null,null),xt=wt.exports;p()(wt,{VBtn:m["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:k["a"],VDialog:y["a"],VDivider:_["a"],VForm:rt["a"],VSpacer:S["a"],VTextField:I["a"]});var Vt={components:{DetailDaialog:pt,AddBookDialog:xt},data:function(){return{items:[],uid:"",propsbooksdialog:!1}},computed:{book_number:function(){return this.items.length}},watch:{},methods:{deletes:function(){var t=this,e=this.items[0].ID,a=c.a.firestore();a.collection("books").doc(e).delete().then(function(){console.log("Document successfully deleted!"),t.display()}).catch(function(t){console.error("Error removing document: ",t)})},display:function(){var t=this,e=c.a.firestore(),a=e.collection("books");a.where("UID","==",this.uid).get().then(function(e){e.empty?console.log("No matching documents."):(t.items=[],e.forEach(function(e){t.items.push({ID:e.id,ISBN:e.data().ISBN,Title:e.data().Title,Author:e.data().Author,Publisher:e.data().Publisher,PublishedDate:e.data().PublishedDate,Description:e.data().Description,URL:e.data().URL})}))}).catch(function(t){console.log("Error getting documents",t)})}},beforeCreate:function(){var t=this;c.a.auth().onAuthStateChanged(function(e){e?(t.uid=e.uid,t.display()):t.uid=null})}},St=Vt,It=Object(f["a"])(St,st,ut,!1,null,null,null),Bt=It.exports;p()(It,{VBtn:m["a"],VCard:b["a"],VCardActions:g["a"],VCardTitle:k["a"],VContainer:ot["a"],VDivider:_["a"],VFlex:w["a"],VIcon:P["a"],VImg:x["a"],VLayout:V["a"],VSpacer:S["a"]});var Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h1",[t._v("サインアップ")]),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:t.emailRules,label:"メールアドレス",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{type:"password",counter:8,rules:t.passRules,label:"パスワード",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v("\n          新規登録\n        ")]),a("v-btn",{attrs:{color:"error"},on:{click:t.reset}},[t._v("\n          リセット\n        ")])],1)],1)},Ct=[],jt={data:function(){return{valid:!0,email:"",emailRules:[function(t){return!!t||"メールアドレスを記入してください"},function(t){return/.+@.+/.test(t)||"有効なアドレスを記入してください"}],password:"",passRules:[function(t){return!!t||"パスワードを記入してください"},function(t){return t&&t.length>=8||"8文字以上で記入してください"}]}},methods:{signUp:function(){var t=this;c.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){console.log(e.email),alert("Create account:",e.email),t.$route.query.redirect?t.$router.push(t.$route.query.redirect):t.$router.push("/")}).catch(function(t){alert(t.message)})},validate:function(){this.$refs.form.validate()&&(this.snackbar=!0),this.signUp()},reset:function(){this.$refs.form.reset()}}},Nt=jt,At=Object(f["a"])(Nt,Dt,Ct,!1,null,null,null),Et=At.exports;p()(At,{VBtn:m["a"],VContainer:ot["a"],VForm:rt["a"],VTextField:I["a"]}),n["a"].use(W["a"]);var $t=new W["a"]({mode:"",routes:[{path:"/",name:"home",component:Q},{path:"/login",name:"login",component:lt},{path:"/list",name:"list",component:Bt,meta:{requiresAuth:!0}},{path:"/signup",name:"signup",component:Et},{path:"*",redirect:"/"}]});$t.beforeEach(function(t,e,a){var n=t.matched.some(function(t){return t.meta.requiresAuth});n?c.a.auth().onAuthStateChanged(function(e){e?a():a({path:"/login",query:{redirect:t.fullPath}})}):a()});var Ot=$t;n["a"].config.productionTip=!1;var Tt={apiKey:"AIzaSyDOY8bWD39SdM2imFnSenjZX8YE2xEG28U",authDomain:"bookshelf-4ae61.firebaseapp.com",databaseURL:"https://bookshelf-4ae61.firebaseio.com",projectId:"bookshelf-4ae61",storageBucket:"",messagingSenderId:"439825651650",appId:"1:439825651650:web:24f18c0df843f3ea"};c.a.initializeApp(Tt),new n["a"]({router:Ot,render:function(t){return t(M)}}).$mount("#app")},d316:function(t,e,a){}});
//# sourceMappingURL=app.fef20e97.js.map