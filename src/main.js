import "@/style/main.css";

// Import Vue
import Vue from 'vue';

// Import Vue App, routes, store
import store from "@/store/store"
import router from "@/router/router"
import App from './App';

import Loader from './components/app/Loader.vue'

import hoverDirective from './directives/hover.directive';

Vue.component('Loader', Loader)

// Vue.config.productionTip = false

new Vue({
    el: '#app',
    store: store, 
    router: router,
    render: h => h(App),
});
