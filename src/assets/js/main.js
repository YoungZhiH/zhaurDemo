import Header from '../../components/header.vue';
// import loading from '../../componentslist/loading.vue'
import VueRouter from 'vue-router';
import routes from './router.js';
import VueLazyload from 'vue-lazyload';
import vuex from 'vuex';
import store from '../../vuex/store.js'
import wechatTitle from 'vue-wechat-title'
import filters from '../filters/filters.vue'
// import vuei18n from 'vue-i18n';



Vue.config.debug = true;
Vue.config.devtools = true;

// Vue.use(vuei18n)
// 注册路由组件为全局
Vue.use(VueRouter);
// spa页面title 
Vue.use(wechatTitle);
// 懒加载



Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: '../../../dist/assets/imgae/loading.gif',
  error: '../../../dist/assets/imgae/loading.gif',
  // loading: '../../../dist/assets/imgae/loading.gif',
  loading: '../../../dist/assets/imgae/loading.gif',
  attempt: 1
});

var router = new VueRouter({
    routes,
    saveScrollPosition: true,
});

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  if(to.path  == '/login'){
    if(store.state.a.Overlogin ==  true){
        router.push({path:'/member'})
    }
  }
  if(to.path  == '/member'){
    if(store.state.a.Overlogin !=  true){
        router.push({path:'/login'})
    }
  }
  // $(".loadingBox").removeClass('nsr-loading-hiden');
  next();
});
router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
  console.log("成功浏览到:"+to.path)
});

var vm = new Vue({
  store,
  router,
  created(){
     // console.log(this.$children) 
  },
  components :{
    'header-top' : Header,
    // 'loading' : Loading,
  },
  watch: {
    '$route' (to, from) {
      if(to.path  == '/login'){
        if(store.state.a.Overlogin ==  true){
            router.push({path:'/home'})
        }
      }
      window.URLparams = this.$route.query;
    //刷新参数放到这里里面去触发就可以刷新相同界面了
    // this.getStatus(this.$route.path)
  }
},
}).$mount('#app');
