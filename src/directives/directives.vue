<script>
 Vue.directive('scroll',{
　　bind: function(el, binding){
      window.addEventListener('scroll',function(){
         if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
          var fnc = binding.value;   
              fnc(); 
        }
      })
　　},
});

 Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
    // document.getElementById('title').innerText = document.title
  }
})
</script>