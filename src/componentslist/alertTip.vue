<template>
  <transition name="mint-toast-pop">
    <div class="mint-toast" v-show="visible" :class="customClass" :style="{ 'padding': iconClass == '' ? '10px' : '20px' }" :time = "autoHide" :defaultVal = "defaultVal" >
      <!-- <i class="mint-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i> -->
      <span class="mint-toast-text" :style="{ 'padding-top': iconClass == '' ? '0' : '10px' }">{{ message }}</span>
      <!-- <input type="hidden" :change="childToParent"> -->
    </div>
  </transition>
</template>
<script>
  export default{
    props:{
      message:String,
      visible:{
        default:false
      },
      position:{
        type: String,
        default: 'middle'
      },
      time:{
        default: 800,
      }
    },
    computed:{
      customClass(){
        var classes = [];
        switch(this.position){
          case 'top':
            classes.push('is-placetop');
            break;
          case 'bottom':
            classes.push('is-placebottom');
            break;
          default:
            classes.push('is-placemiddle');
        }
        return classes.join(' ');
      },
    },
    watch:{
      visible:function(){
        var self = this;
        if(self.$parent.showPositionValue == true){
            self.autoHide();
        }
      }
    },
    methods:{
      chilFn(msg){
        console.log(msg+"?3");
      },
      // childToParent(){
      //   console.log("$emit");
      //   this.$emit('childToParentMsg',this.time);
      // },
      autoHide(){
        var self = this,time = self.time;
        setTimeout(function(){
          self.$parent.showPositionValue = false;
        },time)
      }
    },
    data(){
      return {
        defaultVal : '这个是子组件的默认值',
        iconClass:'',
        isShow : this.visible,
        DefaultTime : this.time,
      }
    },
    created(){
        this.$emit('msg-from-child', this.defaultVal)
    }
  }
</script>
<style>
    .mint-toast {
      position: fixed;
      max-width: 80%;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      box-sizing: border-box;
      text-align: center;
      z-index: 1000;
      transition: opacity .3s linear;
    }
    .mint-toast-icon {
        display: block;
        text-align: center;
        font-size: 56px;
      }
      
     .mint-toast-text {
        font-size: 14px;
        display: block;
        text-align: center;
      }
      
      .is-placetop {
        top: 50px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      
      .is-placemiddle {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      
      .is-placebottom {
        bottom: 50px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      
      .mint-toast-pop-enter, .mint-toast-pop-leave-active {
        opacity: 0;
      }
</style>