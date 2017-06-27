g<template>
    <div v-wechat-title="$route.meta.title">
      <div>group页面</div>
    </div>
</template>
<script>
  export default {
    methods: {
    },
    beforeCreate(){
          console.log(window.URLparams)
          // console.log('deviceid: ' + this.$route.query.number);
          // console.log('dataId: ' + this.$route.query.numbers);
          var ImgArray = [],i;
          var self = this;
          this.$http.get('../../data/book.json').then(function(res){
            res.data.info.forEach(function(item,index){
                item.arr.forEach(function(arrItem,arrIndex){
                  ImgArray.push({"src":arrItem.cover.url});
                })
            })
            self.imgUrl = ImgArray;
            self.info = res.data.info;
          },function(response){
              console.info(response);
        });
    },
  }
</script>