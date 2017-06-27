<template>
  <div v-wechat-title="$route.meta.title">
  <divider>个人中心</divider>
  <masker style="border-radius: 2px;">
      <div class="m-img" ></div>
      <div slot="content" class="m-title">
        尊敬的 {{list.name}} 先生
        <br/>
        <span class="m-time">上次登录的时间：{{date | formatDate}}</span>
      </div>
    </masker>
    <group title="">
        <XButton  type="warn" @click.native = "loginOut ">退出</XButton>
    </group>
    </div>
</template>
<script>
  import {Divider, Masker,XButton , Group} from 'vux'
  export default {
  components: {
      Masker,
      XButton,
      Group,
      Divider
    },
    data(){
      return {
        list:{
          name: '',
          date:'',
        }
      }
    },
    created(){
      var self = this ;
      self.date = new Date().getTime();
      self.list.name = self.$store.state.a.userName;
    },
    methods:{
      loginOut(){
          var self = this ;
          self.$store.dispatch('newBankName',{'Overlogin' : false }).then(function(){
              self.$router.push({path:'/login'})
          })
      }
    }
  }
</script>
<style>
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>