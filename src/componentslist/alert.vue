<template>
    <div>
        <span>我是A组件的数据->{{a}}</span>
        <input type="button" value="把A数据传给C" @click = "send">
        <slot>没有分发内容 我就显示了slot标签内的内容</pre>
        </slot>
      </div>
</template>

<script>
    export default {
      props:["myMessage05"],
      data: function () {
        return {
          isShow: false,
          a: "我是通过子组件$emit传递到父组件的数据~",
          myMessage05 : "",
        }
      },
      created(){
        this.send()
      },
      methods: {
        send () {
           this.$emit("a-msg", this.a);
        }
      },
    }
</script>
