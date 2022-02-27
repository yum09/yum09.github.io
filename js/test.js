$(window).on('load', function() {

  var $widget = $('iframe.twitter-timeline');
  var $widgetContents = $widget.contents();
  $widgetContents.find('head').append('<link rel="stylesheet" type="text/css" href="css/test.css">');

});

$("#particle").particleText({
text: "沼津東高校化学部", // 表示させたいテキスト。改行の場合は<br>追加
colors:["#ffffff"],
//colors:["#1C98A4","#16BA9A", "#15B066"], // パーティクルの色を複数指定可能
speed: "slow", // slow, middle, high の3つから粒子が集まる速さを選択
});



function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 20){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});
