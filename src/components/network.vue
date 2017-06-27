<template>
  <div v-wechat-title="$route.meta.title">
    <div class="networld-bg"></div>
    <tab :navdata='navData'>
      <div v-for = "item in navData">
        <!-- <input type="hidden" name="your_name" v-model="item.showFlag" /> -->
        <span v-html ="item.view" :data-info ="item.showFlag" v-if="item.showFlag>0" ></span>
      </div>
      <!-- <div class="clears relative">
        <ul class="tab-list fl">
          <li v-for = "item  in  arrayList">
            <div class="gobal-content"> 
              <p>{{item.title}}</p> 
              <div>
                {{item.desc}}
              </div> 
             </div>
           </li>
        </ul>
        <ul class="tab-list fl">
          <li>
            <div class="gobal-content"> 
              <p>致青春广播</p> 
              <div>
                盘点历届奥运会中国乒乓球队精彩比赛瞬间。2016里约奥运会乒乓球男团半决赛，中国3-0韩国晋级，张继科遭遇韩国小将郑荣植的顽强阻击，在两度落后的情况下，苦战五局才得以3：2涉险过关。图为张继科精彩比赛瞬间。 
              </div> 
             </div>
          </li>
        </ul>
      </div> -->
</tab>
  </div>
</template>
<script>
import tab from '../componentslist/tab.vue';
// import Swipe from '../assets/js/libs/swipe/swipe.js';
  export default {
    data() {
      return {
        tabsShowFlag : true, 
        arrayList :{},
        navData: [{
            key: '追弋广播',
            showFlag: 1,
            view: '<div>Component A</div>',
         }, {
            key: '致青春广播',
            showFlag: -1,
            view: '<div>Component A2</div>',
         }],
        swiperOption: {
          slidesPerView: 4,
          paginationClickable: true,
          spaceBetween: 30,
          freeMode: true
        },
      }
    },
    components:{
      'tab' : tab,
    },
    beforeCreate(){
      var self = this;
      $(".loadingBox").addClass('nsr-loading-hiden');
      self.$http.get('../../data/homeList.json').then(function(res){
        self.arrayList = res.data.info;
      })
    },
    mounted(){
      // var navTabs = $(".nav-tabs"),config = {
      //   callback: function (i) {
      //     navTabs.find('li').eq(i).addClass('active').siblings().removeClass('active');
      //   }
      // }
      // var swipe = Swipe(document.getElementById('tab-box'),config);
      // navTabs.on('click', 'li', function () {
      //   if($(this).hasClass('active')){return false}
      //   $(this).addClass('active').siblings().removeClass('active')
      //   swipe.slide($(this).index());
      //   return false;
      // });
    },
    
    created(){
      console.log('created 创建前状态===============》');
    },
    beforeMount(){
      console.log('beforeMount 创建完毕状态===============》');
    },
    methods:{
      bankName() {
        // console.log($store.state.a.bankInf.bankName);
        // return this.$store.state.bankInf.bankName;
      }
    }
  }
</script>
<style>
  .tabs-content{
    background: #eee;
    height:100%;
  }
</style>