//プロフィールページのギャラリー設定------------------
$(function(){
 
  //コンテンツを囲む要素をidで指定
  var container = document.querySelector('.gallery');
 
  //すべての画像を読み込み終わった後に関数を実行
  imagesLoaded(container, function () {
    var msnry = new Masonry(container, {
      itemSelector: '.gallery-item', //コンテンツのclass名
      columnWidth: '.gallery-sizer', //カラムの幅を設定
      gutter: '.gutter-sizer',
      percentPosition: true,
    });
  });


  $('.lightgallery').lightGallery({
    mode: 'lg-zoom-out-big',
    download: false,
    scale: 2,
  });
});
