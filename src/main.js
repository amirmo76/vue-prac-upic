import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App";
import store from './store/index';
import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList";
import UploadForm from "./components/UploadForm";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm },
    { path: '/callback', component: AuthHandler }
  ]
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');