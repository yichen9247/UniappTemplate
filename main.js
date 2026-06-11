import App from './App';

// #ifndef VUE3
import Vue from 'vue';
import './uni.promisify.adaptor';
Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
    ...App
});
app.$mount();
// #endif

// #ifdef VUE3
import * as Pinia from 'pinia';
import { createSSRApp } from 'vue';
import uviewPlus from 'uview-plus';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export function createApp() {
    const app = createSSRApp(App);
    const pinia = Pinia.createPinia();
    pinia.use(piniaPluginPersistedstate);
    app.use(pinia);
    app.use(uviewPlus);
    return { app, pinia };
}
// #endif