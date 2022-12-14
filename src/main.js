import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrap from "bootstrap";
import axios from "axios";
import popper from "popper.js";

import "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/bootstrap/js/bootstrap.min.js";
import "@/assets/css/media.css";
import "@/assets/css/all.css";
import "@/assets/css/style.css";

// import "@fortawesome/fontawesome-free/css/all.css";

import VueTelInput from "vue-tel-input";

// saleh
var filter = function(text, length, clamp){
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

Vue.use(VueTelInput);

import "vue-multiselect/dist/vue-multiselect.min.css";
import "vue-tel-input/dist/vue-tel-input.css";

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';


import "@/assets/style.scss";

import Multiselect from "vue-multiselect";

import Notifications from "vue-notification";
Vue.use(Notifications);

if (localStorage.getItem("user"))
  store.state.user = JSON.parse(localStorage.getItem("user"));

let api = axios.create({
  baseURL: "https://dashboard.ecp-bash.com",
});

api.interceptors.request.use(async (config) => {
  try {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "auth_token"
    )}`;
  } catch (err) {
    console.error(err);
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (
      err.response.status === 401 &&
      err.response.data.message === "Unauthenticated."
    ) {
      localStorage.setItem("auth_token", "");
      localStorage.setItem("user", "");
      store.state.user = {};
      router.push("/");
    }
    return err;
  }
);

Vue.component("multiselect", Multiselect);

Vue.prototype.$http = api;
Vue.config.productionTip = false;

new Vue({
  bootstrap,
  router,
  store,
  popper,
  render: (h) => h(App),
}).$mount("#app");
