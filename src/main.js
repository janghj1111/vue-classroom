import "./style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";

import router from "./router"; //"@/router";
//import store from "./stores";
import axios from "axios"; // './modules/axios' request.js
// import util from './modules/utils/util'
// import constant from './modules/utils/constant'
// import validator from './modules/utils/validator'
// import dialog from './modules/utils/dialog'
// import LoadScript from 'vue-plugin-load-script'
// import sha256 from './modules/utils/sha256'
// import i18n from './modules/i18n'
// import Tr from './modules/i18n/translation'
//import directives from './modules/directives'
import {
  Quasar,
  Notify,
  Dialog,
  Loading,
  Cookies,
  LocalStorage,
  SessionStorage,
} from "quasar";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "@quasar/extras/material-icons/material-icons.css";
import Qcalendar from "@quasar/quasar-ui-qcalendar";
import "@quasar/quasar-ui-qcalendar/dist/index.css";
import ElementPlus from "element-plus";
import mitt from "mitt";
import ko from "quasar/lang/ko-KR";

const app = createApp(App);

// 0825 추가
// const emitter = mitt();
// app.config.globalProperties.$emitter = emitter;
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // store 상태유지, localstorage 저장 플러그인
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.provide("$axios", axios);
// jhj 로컬테스트용
const serverUrl = "//localhost:9092";
app.provide("$serverUrl", serverUrl);

// app.use(store); pinia로 대체
app.use(router);
app.use(pinia);
app.use(axios);
//app.use(util)
//app.use(constant)
//app.use(validator)
//app.use(dialog)
//app.use(LoadScript)
app.use(Quasar, {
  lang: ko,
  plugins: {
    Notify,
    Dialog,
    Loading,
    Cookies,
    LocalStorage,
    SessionStorage,
  },
});
app.use(Qcalendar);
//app.use(sha256);
app.use(ElementPlus);

app.mount("#app");
