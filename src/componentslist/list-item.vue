<template>
   <div class="feed-section">
    <div class="feed-item">
      <div class="feed-content flex" v-for = " item in list">
          <div class="flex-2 feed-content-info">
            <h3 @click = "writeSome">{{item.title}}</h3>
            <p>{{item.desc}}</p>
          </div>
          <div class="flex-1 feed-content-img">
             <transition name="fade" mode="out-in">
              <img alt="" v-lazy="item.cover_url">
            </transition>
          </div>
      </div>
    </div>
   </div>
</template>
<script>
  export default{
    replace : true,
    props : ['list'],
    methods:{}
  }
</script>