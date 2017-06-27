<template>
    <div v-wechat-title="$route.meta.title">
    <tab>
      <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
      <tab-item @on-item-click="onItemClick">未发货</tab-item>
      <tab-item @on-item-click="onItemClick">全部订单</tab-item>
    </tab>
    <!-- <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
    </tab> -->
     <!--  <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">这里是 ： {{item}} Container</div>
        </swiper-item>
      </swiper> -->
      <!-- <router-link to="/book?qianTao=list">图书</router-link> -->
      <!-- 子页面 -->
 <!--      <router-link :to="{ path:'/movie/list', query: { num:  1}}">
        <div>更多</div>
      </router-link> -->
      <!-- <router-view></router-view> -->
     <!--  <ul>
        <li v-for = "(item,index) in listItem"  @click = "tabCut(index)">
          {{item.text}}
        </li>
          <div>
            {{contentsList[centetIndex].contents}}
          </div>
      </ul> -->
    </div>
</template>
<script>
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
  export default {
    beforeCreate(){
      $(".loadingBox").addClass('nsr-loading-hiden');
    },
    data(){
      return {
        list2: ['最近上映电影', '高分电影', '可看电影'] ,
        demo2: '精选',
        show: false,
        show1: false,
        show2: false,
        index: 0,
        listItem:[
          {text : '最近上映电影'},
          {text : '热门电影'},
          ],
        centetIndex:0,
        contentsList:[
          {contents:"我是最近上映电影的内容"},
          {contents:"我是热门电影"}
          ]
      }
    },
    methods:{
      tabCut(index){
        this.centetIndex  = index;
      },
      onItemClick (index) {
        console.log('on item click:', index)
      },
      addTab () {
        if (this.list2.length < 5) {
          this.list2 = list().slice(0, this.list2.length + 1)
        }
      },
      removeTab () {
        if (this.list2.length > 1) {
          this.list2 = list().slice(0, this.list2.length - 1)
        }
      },
      next () {
        if (this.index === this.list2.length - 1) {
          this.index = 0
        } else {
          ++this.index
        }
      },
      prev () {
        if (this.index === 0) {
          this.index = this.list2.length - 1
        } else {
          --this.index
        }
      }
    },
    components: {
        Tab,
        TabItem,
        Sticky,
        Divider,
        XButton,
        Swiper,
        SwiperItem
    }
   }
</script>
<style>
  .vux-tab-item{
  }
</style>