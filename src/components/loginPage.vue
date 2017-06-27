<template>
  <div v-wechat-title="$route.meta.title">
   <group title="">
      <x-input title="姓名" name="username" placeholder="请输入姓名"   v-model = " name"></x-input>
    </group>
    <group title="">
      <x-input title="密码" name="username" placeholder="请输入密码" type="password" ></x-input>
    </group>
    <div class="center-box">
    <group title="">
        <XButton  type="primary" @click.native = "submitForm" :class="{ 'disbaled':disabledBtn}">登陆</XButton>
    </group>
    <divider>or</divider>
      <div class="login-page-footer"><span  @click="parentCall" id="roll_top">忘记密码</span><span class="tr">立即注册</span></div>
    <alertTip :message = "message" :visible= "showPositionValue" position="middle" :time = "2000" :defaultVal = "SdefaultVal" ref="AalertTip" @msg-from-child="getMsgFromChild" ></alertTip>
  </div>
  </div>
</template>
<style>
  .login-page-footer>span{
    display: inline-block;
    width: 50%
  }
  .tr{
    text-align: right
  }
</style>
<script>
  import { XInput ,Group , XButton  ,Cell ,Divider } from 'vux'
  import alertTip from '../componentslist/alertTip.vue';
  import axios from 'axios';
axios.defaults.baseURL = 'http://www.99elon.com/islogin?17';
axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';
  export default {
    data(){
      return {
        Amessage: "123673",
        name : '',
        NameReg : /^[\u4e00-\u9fa5\·]{2,10}$/,
        show : false,
        tip:'',
        position : 'default',
        message : '',
        showPositionValue : false,
        modelShow : '',
        disabledBtn : false,
        SdefaultVal:'',
      }
    },
    components:{
      XInput,
      Group,
      XButton,
      Cell,
      Divider,
      alertTip
    },
    methods:{
      parentCall(){
        var instance = axios.create({
    baseURL:'http://some-domain.com/api/',
    timeout:1000,
    headers:{'X-Custom-Header':'foobar'}
});
        function getUerAccount(){
    return axios.get('');
}

function getUserPermissions(){
    return axios.get('');
}

axios.all([getUerAccount(),getUserPermissions()])
    .then(axios.spread(function(acc,pers){
      console.log(acc+"?")
      console.log(pers+"?")
    }));
      console.log( this.$refs.AalertTip)
        // this.$refs.AalertTip.chilFn('我是父元素传过来的')
      },
      getMsgFromChild(v){
        console.log('msg: ' + v)
      },
      recieveMessage(text){
        console.log(text);
      },
      submitForm(){
        var self = this;
        if(self.disabledBtn ==  true){return false}
        self.disabledBtn = true;
        if(!self.NameReg.test(self.name)){
          self.show = true; 
          self.position = 'top';
          self.message = '姓名必须为中文！';
          self.showPositionValue = true;
          self.disabledBtn = false;
          // self.$emit('update:visible', false);
          return false;
        }
        // 登陆成功去把 vuex 的 login 的状态 改成true
        self.$store.dispatch('newBankName',{'Overlogin' : true, 'userName' : self.name  }).then(function(){
          // 异步修改状态后回调
          if(self.$store.state.a.Overlogin ==  true){
            self.$router.push({path:'/member'})
          }
        })
      }
    }
  }
</script>