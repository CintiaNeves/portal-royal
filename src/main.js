import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue';
import VueResource from 'vue-resource';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import { routes } from './routes'

Vue.use(vuetify);
Vue.use(VueResource);
//Vue.http.options.root = 'http://localhost:3000/';
Vue.http.options.root = 'https://portal-royal-api.herokuapp.com/';
Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: 'history' });

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
