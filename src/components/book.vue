<template>
  <div v-wechat-title="$route.meta.title" >
  <loadingBox :hide-loading = "BooleanLoading"></loadingBox>
  <ul>
    <li class="book_item" v-for="item in info">
        <div class="movie_head ui-flex-align">
            <div class="ui-flex-1 movie_head_l">{{item.title}}</div>
            <div class="ui-flex-right movie_head_r">更多</div>
        </div>
       
        <div class="scroll_pic">
            <swiper :options="swiperOption"  class="book-list">
                    <swiper-slide v-for="list in item.arr">
                    <a>
                        <div class="pic" >
                            <img v-lazy="list.Imgurl" />
                        </div>
                        <h3>{{list.title}}</h3>
                    </a>
                  </swiper-slide>
          </swiper>
        </div>
    </li>
  </ul>
  <header class="gobal-title">分类浏览</header>
    <ul class="type-list">
        <li><a>小说<span></span></a></li>
        <li><a>爱情<span></span></a></li>
        <li><a>历史<span></span></a></li>
        <li><a>外国文学<span></span></a></li>
        <li><a>青春<span></span></a></li>
        <li><a>励志<span></span></a></li>
        <li><a>随笔<span></span></a></li>
        <li><a>传记<span></span></a></li>
        <li><a>推理<span></span></a></li>
        <li><a>旅行<span></span></a></li>
        <li><a>奇幻<span></span></a></li>
        <li><a>经管<span></span></a></li>
    </ul>
  </div>
</template>
<script>
  import VueAwesomeSwiper from 'vue-awesome-swiper';
  import loadingBox from '../componentslist/loading.vue';
  Vue.use(VueAwesomeSwiper)
  export default {
    name:'boox',
    watch:{
      $route(){
        console.log("route")
      }
    },
    beforeCreate(){
        var ImgArray = [],i;
        var self = this;
        this.$http.get('../../data/book.json').then(function(res){
          res.data.info.forEach(function(item,index){
              item.arr.forEach(function(arrItem,arrIndex){
                ImgArray.push({"src":arrItem.cover.url});
              })
          })
          self.imgUrl = ImgArray ;
          self.info = res.data.info ;
          $(".loadingBox").addClass('nsr-loading-hiden');
        },function(response){
            console.info(response);
        });
    },
    data(){
      return {
        info : self.info,
        imgUrl: '',
        BooleanLoading : false,
         swiperOption: {
          slidesPerView: 3.5,
          paginationClickable: true,
          spaceBetween: 10,
          freeMode: true
        }
      }
    },
    components:{loadingBox},
    created(){
      // this.fetchData()
      // console.log('created 创建前状态===============》');
    },
    beforeMount(){
      // console.log('beforeMount 创建完毕状态===============》');
    },
    mounted(){
      // console.log('mounted 挂载前状态===============》');
    },
    beforeUpdate(){
       // console.log('beforeUpdate 挂载结束状态===============》');
    },
    updated(){
      // setTimeout(function(){
        this.BooleanLoading = true ;
        // },1000)
    },
    beforeDestroy(){
       // console.log('beforeDestroy 销毁前状态===============》');
    },
    destroyed(){
       // console.log('destroyed 销毁完成状态===============》');
    },
  }

// beforecreate : 举个栗子：可以在这加个loading事件 
// created ：在这结束loading，还做一些初始化，实现函数自执行 
// mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
// beforeDestory： 你确认删除XX吗？ destoryed ：当前组件已被删除，清空相关内容
</script>

<style scoped>
swiper-wrapper
  .swiper-slide {
    width: 60%;
  }
  .swiper-slide:nth-child(2n) {
      width: 40%;
  }
  .swiper-slide:nth-child(3n) {
      width: 20%;
  }
</style>
