<template>
    <div id="banner">
      <ul>
        <li v-for= "item in bannerList">
          <img v-lazy="item" alt="">
        </li>
      </ul>
    </div>
</template>
<script>
// var swipe = Swipe(document.getElementById('banner'));
  import Swipe from '../assets/js/libs/swipe/swipe.js'
  export default {
    data() {
      return {
        slider : null,
        bannerList: [
          'https://img.huxiucdn.com/article/cover/201702/23/113005305119.jpg?imageView2/1/w/1350/h/1011/|imageMogr2/strip/interlace/1/quality/85/format/jpg',
          'https://img.huxiucdn.com/article/cover/201705/27/135826311883.jpg?imageView2/1/w/1350/h/1011/|imageMogr2/strip/interlace/1/quality/85/format/jpg',
        ]
      }
    },
    mounted(){
      this.slider  = Swipe(document.getElementById('banner'));
    }
  }
</script>