$(function () {

//トップページ背景のスライドショー------------------
  if ($('#vegas').length){
    $('#vegas').vegas({
      slides: [{
          src: 'images/top-main1.jpg'
        },
        {
          src: 'images/top-main2.jpg'
        },
        {
          src: 'images/top-main3.jpg'
        },
      ],
      transition: 'fade', //スライドを遷移させる際のアニメーション
      transitionDuration: 3000, //スライドの遷移アニメーションの時間
      delay: 5000, //スライド切り替え時の遅延時間
      animationDuration: 20000, //スライド表示中のアニメーションの時間
      timer: false,
    });
  }

//トップページのコンテンツスライドショー------------------
  if ($('.slider').length){
    $('.slider').slick({
      accessibility: true,
      autoplay: true,
      dots: true,
      autoplaySpeed: 3000, // 自動再生のスピード（ミリ秒単位）
      infinite: true, // スライドのループを有効にするか
      centerMode: true,
      centerPadding: '30px',
      slidesToShow: 5,
      responsive: [{
          breakpoint: 1110,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 4
          }
        },
        {
          breakpoint: 900,
          settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 700,
          settings: {
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 610,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  }
});
//スムーススクロール------------------
$(function(){
  $('a[href^="#"]').click(function(){
    // var adjust = 100;
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});



//スマホ表示のハンバーガーメニュー------------------
$(function(){
  $(".sp-nav").hide();
  $(".nav_toggle").click(function(){//メニューボタンをクリックしたとき
    $(".sp-nav").slideToggle(300);//0.3秒で表示したり非表示にしたりする
    $('.nav_toggle, .sp-nav').toggleClass('show');
  });
});

// スマホメニューの背景をスクロールさせない
$(function(){
  $(".nav_toggle").click(function(){//メニューボタンをクリックしたとき
    $('body').toggleClass('is-fixed');
  });
});





//マウスポインター追従あり------------------
$(function () {
  var cursor = $(".cursor");
  var follower = $(".follower");
  var cWidth = 8; //カーソルの大きさ
  var fWidth = 40; //フォロワーの大きさ
  var delay = 10; //数字を大きくするとフォロワーがより遅れて来る
  var mouseX = 0; //マウスのX座標
  var mouseY = 0; //マウスのY座標
  var posX = 0; //フォロワーのX座標
  var posY = 0; //フォロワーのY座標  


  //カーソルの遅延アニメーション
  //ほんの少ーーーしだけ遅延させる 0.001秒
  TweenMax.to({}, .001, {
    repeat: -1,
    onRepeat: function () {
      posX += (mouseX - posX) / delay;
      posY += (mouseY - posY) / delay;

      TweenMax.set(follower, {
        css: {
          left: posX - (fWidth / 2),
          top: posY - (fWidth / 2)
        }
      });

      TweenMax.set(cursor, {
        css: {
          left: mouseX - (cWidth / 2),
          top: mouseY - (cWidth / 2)
        }
      });
    }

  });

  //マウス座標を取得
  $(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  $("a").on({
    "mouseenter": function () {
      cursor.addClass("is-active");
      follower.addClass("is-active");
    },
    "mouseleave": function () {
      cursor.removeClass("is-active");
      follower.removeClass("is-active");
    }
  });
});


