import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Contact from './components/Contact.vue'
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
import Blogs from './components/Blogs.vue'

Vue.use(VueRouter);

const routes = [

  {
    path: '/', component: Nav
  },
  {
    path: '/Contact', component: Contact
  },
  {
    path: '/HelloWorld', component: HelloWorld
  },
  {
    path: '/Blogs', component: Blogs
  }

];

const router = new VueRouter({routes: routes});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
