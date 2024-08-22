import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from "@/router"; 
import store from "@/store"; 
import axios from "axios";

const app = createApp(App);

app.provide("$axios", axios);
const serverUrl = "//localhost:9092"; // jhj 로컬테스트용
app.provide("$serverUrl", serverUrl);

app.use(router);
app.use(store);
app.mount('#app')
