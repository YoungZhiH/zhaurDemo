<script>
  Vue.filter('formatDate',function(val){
    var date = new Date(parseInt(val));
    var minutes =  date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes()
    var Seconds =  date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds()
    return date.getFullYear() +" 年" + parseInt(date.getMonth()+1) +" 月" +  date.getDate()+" 日" +  date.getHours()+" ：" +  minutes +" ：" + Seconds;
  });
</script>