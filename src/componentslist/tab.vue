<template>
<div class="tabs-content" >
 <div class="top">
 <ul class="nav nav-tabs rel">
   <li v-for='(item,index) in navdata' class="nav-li "   :class="{active:item.showFlag>=0}" @click = "keyShowFun(index) ">
      <span>{{item.key}}</span>
   </li>
   <span class="border-bottom"></span>
 </ul>
 </div>
  <div class="v-tabs-item">
    <slot></slot>
  </div>
</div>
</template>
<script>
export default {
 props: {
    flag: {
      type: Boolean,
      required: true,
      twoWay: true
    },
    navtitle: {
      type: String,
      default:''
    },
    navdata: {
      type: Array,
      required: true,
    },
},
mounted(){
  
},
methods: {
    vendor(){
      var v = (/webkit/i).test(navigator.appVersion) ? 'webkit' : (/firefox/i).test(navigator.userAgent) ? 'Moz' : 'opera' in window ? 'O' : '';
      return v;
    },
    keyShowFun(index) {
        var oLi = $(".nav-li");
        var li = oLi.eq(index), left = li[0].offsetLeft, width = li.width();
        var _this = this;
        _this.navdata.forEach(function(item) {
            item.showFlag = -1;
        });
        _this.navdata[index].showFlag = 1;
        _this.translate($(".border-bottom"),{x: left, y: 0}, 300)
        
    },
    translate(element, dist, speed) {
        if(speed){
          element.css('-'+this.vendor()+'-transition-duration', speed+'ms');
        }
        else{
          element.css('-'+this.vendor()+'-transition-duration', '0ms');
        }
      element.css('-'+this.vendor()+'-transform', 'translate('+dist.x+'px, '+dist.y+'px)' + 'translateZ(0)');
      return element;
  }
},
data() {
    return {
      active:0,
    }
},
}
</script>
<style>
  .border-bottom{
    content: '';
    position: absolute;
    left:0;
    bottom: 0;
    width: 50%;
    height: 2px;
    background: #0894ec
  }
</style>