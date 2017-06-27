<template>
  <div>
    <div class="popbg" v-if = " show "></div>
    <transition name="fade" mode="out-in">
    <div class="notification fixed"
          :style="setStyle"
          v-if="show">
    <div class="delete"
        v-if="!options.autoClose"
        @click="close()"></div>
    <div class="content" v-html= "options.content"></div>
    </div>
  </transition>
  </div>
</template>
<script>
  export default{
    props : {
      options:{
        type : Object,
        default(){}
      },
      show:{
        type: Boolean,
        default: false
      },
      isShow:{
        default : true,
        type : Boolean
      },
      title:{
        default : ''
      },
      isShowIf:{
        default : false,
        type : Boolean
      }
    },
    data(){
      return {
        isShowIfResult: this.isShowIf,
        helloWatch : '',
      }
    },
    computed:{
      setStyle(){
        return {
          background : this.options.background || '#fff',
          color : this.options.color || '#fff',
        }
      }
    },
    methods:{
      change(){
        this.isShowIfResult = !this.isShowIfResult
        this.isShow = !this.isShow 
      },
      close(){
        this.$emit('update:show', false);
      }
    },
    watch:{
      isShowIf(val) {
        console.log(val)
        this.isShowIfResult = val;
      },
      isShowIfResult(val){
        this.$emit("on-result-change",val);//③组件内对myResult变更后向外部发送事件通知
      }
    }
  }
</script>
<style type="text/css">
  .delete {
    -moz-appearance: none;
    -webkit-appearance: none;
    background: rgba(51, 51, 51, .2);
    cursor: pointer;
    display: inline-block;
    height: 24px;
    position: relative;
    vertical-align: top;
    width: 24px;
    float: right;
  }
  .delete:after,
  .delete:before {
    background: #fff;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    margin-left: -25%;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    width: 50%;
  }
  .delete:before {
    transform: rotate(45deg);
  }
  .delete:after {
    transform: rotate(-45deg);
  }
  .delete:hover {
    background: rgba(51, 51, 51, .5);
  }
 .notification {
    background: #fff;
    width: 90%;
    margin: 0 auto;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 10;
  }
  .notification .content {
    padding: .75rem 2rem;
  }
  .popus-box{
    background: #fff;
    width: 90%;
    margin: 0 auto;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 10;
  }
  .popbg{
    background: #000;
    opacity: .75;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: alpha(opacity=75);
    z-index: 9;

  }
</style>