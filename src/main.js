import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyDOY8bWD39SdM2imFnSenjZX8YE2xEG28U",
  authDomain: "bookshelf-4ae61.firebaseapp.com",
  databaseURL: "https://bookshelf-4ae61.firebaseio.com",
  projectId: "bookshelf-4ae61",
  storageBucket: "",
  messagingSenderId: "439825651650",
  appId: "1:439825651650:web:24f18c0df843f3ea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
