// import home from '../../components/home.vue';
// import movie from '../../components/movie.vue';
// import book from '../../components/book.vue';
// import network from '../../components/network.vue';
// import group from '../../components/group.vue';
// import movielist from '../../components/movielist.vue';

var routes = [
  { path: '/', redirect: '/home'},
  { path: '/home',
    meta:{
      title: 'Zhaur-首页'
    },
    component (resolve) {
        require(['../../components/home.vue'], resolve)
      }},
    { path: '/movie', 
      component (resolve) {
        require(['../../components/movie.vue'], resolve)
      }, 
      meta:{
        title: 'Zhaur-电影'
      },
      name: 'movie',
      children:[
        { path:'/movie/list' , component (resolve) {
          require(['../../components/movielist.vue'], resolve)
        }}
    ]
  },
  { path: '/book', 
    component (resolve) {
        require(['../../components/book.vue'], resolve)
      },
      meta:{
        title: 'Zhaur-图书'
      },
      name: 'book',
  },
  { path: '/network',
    component (resolve) {
        require(['../../components/network.vue'], resolve)
      },
      meta:{
        title: 'Zhaur-广播'
      },
      name: 'network'
  },
  { path: '/group',
    component (resolve) {
        require(['../../components/group.vue'], resolve)
      },
      meta:{
        title: 'Zhaur-小组'
      }, 
    name: 'group'
  },
  { path: '/member',
    component (resolve) {
        require(['../../components/memberCenter.vue'], resolve)
      },
      meta:{
        title: 'Zhaur-个人中心'
      }, 
    name: 'member'
  },
  { path: '/login',
    component (resolve) {
        require(['../../components/loginPage.vue'], resolve)
      },
      meta:{
        title: 'Zhaur-登陆'
      }, 
    name: 'loginPage',
    // children:[
    //     { path:'/member' , component (resolve) {
    //       require(['../../components/memberCenter.vue'], resolve)
    //     }}
    // ]
  }
]
export default routes;
