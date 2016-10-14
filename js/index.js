// 返回顶部
var scrollTop = function (){
  if( $(window).scrollTop() > 500 ){      
      $('.return').fadeIn();
    }else{     
      $('.return').fadeOut();
    }
}
	$(window).on('scroll',function (){
    scrollTop();
});
scrollTop();
$('.return').on('click',function (){
    $('html,body').animate({
      'scrollTop': 0
    },500);
  $('.return').hide();
});
// input获得焦点
$('.subcont .input').focus(function(){
    $(this).css({background:'#faf8f8'})
});
$('.subcont .input').blur(function(){
    $(this).css({background:'#fff'})
});
$('.subcont textarea').focus(function(){
    $(this).css({background:'#faf8f8'})
});
$('.subcont textarea').blur(function(){
    $(this).css({background:'#fff'})
});

// 选项卡 
  $('.About .Aboutdiv ul li').click(function(){
    var index=$(this).index();

    $(this).addClass('current').siblings().removeClass('current');
    $('.guanyu').hide().eq(index).show();
 
  });

// 二维码弹框
;(function(window,undefined){
  var qrcodeShowFn=function(){
    $('.share').on('click',function(){
      $('.qrcode_overlay_box').show(300);
      setTimeout(function(){
        $('.dialog_qrcode_wrapper').addClass('qrcode_show')
      },300)
      })
    }
    $('.qrcode_overlay_box').on('click',function(){
      $('.dialog_qrcode_wrapper').removeClass('qrcode_show')
      $(this).hide();
    })
  qrcodeShowFn();
})(this);