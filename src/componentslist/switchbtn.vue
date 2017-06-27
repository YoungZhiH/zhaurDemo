<template>
  <div @click='change'>{{result?'开':'关'}}</div>
</template>
<script>
  export default{
    props : ['result'],
    data(){
      return {
          myResult: this.result//①创建props属性result的副本--myResult
      };
    },
    methods:{
      change() {
        this.myResult = !this.myResult;
      }
    },
    watch: {
        result(val) {
            this.myResult = val;//②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
        },
        myResult(val){
            //xxcanghai 小小沧海 博客园
            this.$emit("on-result-change",val);//③组件内对myResult变更后向外部发送事件通知
        }
    },
  }
</script>