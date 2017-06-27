
//产品及服务
$('.product-item').hover(function(){
  $(this).addClass('active').siblings().removeClass('active');
});