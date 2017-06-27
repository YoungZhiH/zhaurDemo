<template>
  <Group>
     <x-input title="发送验证码" class="weui-vcode"></x-input>
  </Group>
</template>
<script>
  import { Xinput ,Group } from 'vux'
  export default {
    components:{
      Xinput,
      Group
    }
  }
</script>