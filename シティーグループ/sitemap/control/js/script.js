// スマホとタブレットでviewportを切替え
$(function(){
    var ua = navigator.userAgent;
    if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
        $('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1">');
    } else {
        $('head').prepend('<meta name="viewport" content="width=1300">');
    } 
});

// header background color
$(function() {
	var dist = 1;
		$(window).scroll(function() {
		if ($(window).scrollTop() > dist) {
			$('.header').addClass('active');
            $('.fixed-btn').addClass('active');
		} else {
			$('.header').removeClass('active');
            $('.fixed-btn').removeClass('active');
		}
	});
});

// Pagetop
$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});


// ページ内スクロール
$(function() {
  // スクロールのオフセット値
  var offsetY = -140;
  // スクロールにかかる時間
  var time = 500;

  // ページ内リンクのみを取得
  $('a[href^="#"]').click(function() {
    // 移動先となる要素を取得
    var target = $(this.hash);
    if (!target.length) return ;
    // 移動先となる値
    var targetY = target.offset().top+offsetY;
    // スクロールアニメーション
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    // ハッシュ書き換えとく
    window.history.pushState(null, null, this.hash);
    // デフォルトの処理はキャンセル
    return false;
  });
});


//モーダル
$(function(){
    // 「.modal-open」をクリックしたらモーダルと黒い背景を表示する
    $('.modal-open').click(function(){
        // 黒い背景をbody内に追加
        $('body').append('<div class="modal_bg"></div>');
        $('.modal_bg').fadeIn();

        // data-targetの内容をIDにしてmodalに代入
        var modal = '#' + $(this).attr('data-target');

        // モーダルをウィンドウの中央に配置する
        function modalResize(){
            var w = $(window).width();
            var h = $(window).height();

            var x = (w - $(modal).outerWidth(true)) / 2;
            var y = (h - $(modal).outerHeight(true)) / 2;

            $(modal).css({'left': x + 'px','top': y + 'px'});
        }

        // modalResizeを実行
        modalResize();

        // modalをフェードインで表示
        $(modal).fadeIn();

        // .modal-bgか.modal-closeをクリックしたらモーダルと背景をフェードアウトさせる
        $('.modal_bg, .modal-close').off().click(function(){
            $('.modal-box').fadeOut();
            $('.modal_bg').fadeOut('slow',function(){
                $('.modal_bg').remove();
            });
        });

        // ウィンドウがリサイズされたらモーダルの位置を再計算する
        $(window).on('resize', function(){
            modalResize();
        });

        // .modal-switchを押すとモーダルを切り替える
        $('.modal-switch').click(function(){

          // 押された.modal-switchの親要素の.modal-boxをフェードアウトさせる
          $(this).parents('.modal-box').fadeOut();

          // 押された.modal-switchのdata-targetの内容をIDにしてmodalに代入
          var modal = '#' + $(this).attr('data-target');

          // モーダルをウィンドウの中央に配置する
          function modalResize(){
              var w = $(window).width();
              var h = $(window).height();

              var x = (w - $(modal).outerWidth(true)) / 2;
              var y = (h - $(modal).outerHeight(true)) / 2;

              $(modal).css({'left': x + 'px','top': y + 'px'});
          }

          // modalResizeを実行
          modalResize();

          $(modal).fadeIn();

          // ウィンドウがリサイズされたらモーダルの位置を再計算する
          $(window).on('resize', function(){
              modalResize();
          });

        });

    });

});




//固定 scroll nav + footer contact
$(function() {
  $(window).scroll(function() {
	if ($(window).scrollTop() > 200) {
		$('.scroll-nav-area').css('top','0');
		$('#footer-fixed').css('bottom','0');
	} else {
		$('.scroll-nav-area').css('top','-80px');
		$('#footer-fixed').css('bottom','-100px');
	}
  });
});




//詳しく見る（アコーディオン）
$(function(){
	$(".cmn_acc_btn").click(function(){
		$(this).prev(".cmn_acc_txt").slideToggle();

		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
				$(this).addClass("active");					
		}
	});
});


//アコーディオン
$(function(){
	$(".accordion").click(function() {
	if($(window).width()<768){
		$(this).next().slideToggle();
		
		if ($(this).children(".accordion-icon").hasClass('active')) {
			$(this).children(".accordion-icon").removeClass('active');				
		}
		else {
			$(this).children(".accordion-icon").addClass('active');			
		}
	}
	});
});	
$(window).resize(function() {
	if($(window).width()>=768){
		$(".accordion-box").removeAttr("style");
		$(".accordion-icon").removeClass('active');
	} 
});


// LINE txt
$(window).on('load scroll',function(){
  $('.txt-maker').each(function(){
    var targetPosition = $(this).offset().top;
    if($(window).scrollTop() > targetPosition - $(window).height() + 100){
      $(this).addClass('is-animation');
    }
  });
});

//SPメニュー
$(".sp-gnav-btn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#sp-gnav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#sp-gnav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".sp-gnav-btn").removeClass('active');//ボタンの activeクラスを除去し
    $("#sp-gnav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

$(".sp-gnav-btn").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".h-logo").toggleClass('h-active');//ナビゲーションにpanelactiveクラスを付与
});

/*===========================================================*/
/*印象編 4 最低限おぼえておきたい動き/
/*===========================================================*/

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){
    // 4-1 ふわっ（その場で）
	$('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
		}
		});
    
    // 4-4 ボンッ（拡大）
	$('.zoomOutTrigger').each(function(){ //zoomOutTriggerというクラス名が
		var elemPos = $(this).offset().top;//要素上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('zoomOut');// 画面内に入ったらzoomOutというクラス名を追記
		}
		});
	
	  // ヒュッ
  
	  $('.zoomOutTrigger').each(function(){ //zoomOutTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('zoomOut');// 画面内に入ったらzoomOutというクラス名を追記
		}
		}); 
	
    
}

/*===========================================================*/
/*印象編 8-2 テキストが流れるように出現（左から右）/
/*===========================================================*/

function slideAnime(){
	//====左右に動くアニメーションここから===
		$('.leftAnime').each(function(){ 
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//左から右へ表示するクラスを付与
				//テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
				$(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
				$(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
			}
		});
		
		$('.rightAnime').each(function(){
			var elemPos = $(this).offset().top-50;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight){
				//右から左へ表示するクラスを付与
				//テキスト要素を挟む親要素（右側）とテキスト要素を元位置でアニメーションをおこなう
				$(this).addClass("slideAnimeRightLeft");//要素を右枠外にへ移動しCSSアニメーションで右から元の位置に移動
				$(this).children(".rightAnimeInner").addClass("slideAnimeLeftRight");//子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
			}
		});
    //====左右に動くアニメーションここまで===
}

/*===========================================================*/
/*印象編 8-17 テキストがほのかに光りながら出現*/
/*===========================================================*/

// glowAnimeにglowというクラス名を付ける定義
function GlowAnimeControl() {
  $('.glowAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("glow");

    }
  });
}


// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
    var element = $(".glowAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
        var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }


      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述




/*===========================================================*/
/*印象編 8-9 テキストがじわっと出現*/
/*===========================================================*/

// blurTriggerにblurというクラス名を付ける定義

function BlurTextAnimeControl() {
	$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
		}
		});
}




// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ

  $('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
    }
    });

  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }
    });

  $('.fadeDownTrigger').each(function(){ //fadeDownTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeDown');// 画面内に入ったらfadeDownというクラス名を追記
    }
    });

  $('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
    }
    });

  $('.fadeRightTrigger').each(function(){ //fadeRightTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
    }
    });

  // パタッ

  $('.flipDownTrigger').each(function(){ //flipDownTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('flipDown');// 画面内に入ったらflipDownというクラス名を追記
    }
    });
  
  $('.flipLeftTrigger').each(function(){ //flipLeftTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('flipLeft');// 画面内に入ったらflipLeftというクラス名を追記
    }
    });

  $('.flipLeftTopTrigger').each(function(){ //flipLeftTopTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('flipLeftTop');// 画面内に入ったらflipLeftTopというクラス名を追記
    }
    });

  $('.flipRightTrigger').each(function(){ //flipRightTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('flipRight');// 画面内に入ったらflipRightというクラス名を追記
    }
    });

  $('.flipRightTopTrigger').each(function(){ //flipRightTopTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('flipRightTop');// 画面内に入ったらflipRightTopというクラス名を追記
    }
    });
  
  // くるっ

  $('.rotateXTrigger').each(function(){ //rotateXTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('rotateX');// 画面内に入ったらrotateXというクラス名を追記
    }
    });

  $('.rotateYTrigger').each(function(){ //rotateYTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('rotateY');// 画面内に入ったらrotateYというクラス名を追記
    }
    });

  $('.rotateLeftZTrigger').each(function(){ //rotateLeftZTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('rotateLeftZ');// 画面内に入ったらrotateLeftZというクラス名を追記
    }
    });
  
  $('.rotateRightZTrigger').each(function(){ //rotateRightZTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('rotateRightZ');// 画面内に入ったらrotateRightZというクラス名を追記
    }
    }); 
  
  // ボンッ

  $('.zoomInTrigger').each(function(){ //zoomInTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('zoomIn');// 画面内に入ったらzoomInというクラス名を追記
    }
    });

  // ヒュッ
  
  $('.zoomOutTrigger').each(function(){ //zoomOutTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('zoomOut');// 画面内に入ったらzoomOutというクラス名を追記
    }
    }); 
  
  // じわっ
  
  $('.blurTrigger').each(function(){ //blurTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
    }
    }); 
  
  // にゅーん
  
	// smoothTriggerにsmoothTextAppearというクラス名を付ける定義
  $('.smoothTextTrigger').each(function(){ //smoothTextTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('smoothTextAppear');// 画面内に入ったらsmoothTextAppearというクラス名を追記
    }else{
    $(this).removeClass('smoothTextAppear');// 画面外に出たらsmoothTextAppearというクラス名を外す
    }
    }); 
	
  // スーッ（枠線が伸びて出現）
    
  $('.lineTrigger').each(function(){ //lineTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('lineanime');// 画面内に入ったらlineanimeというクラス名を追記
    }
  }); 
    
  
  // シャッ（背景色が伸びて出現）
  
  $('.bgLRextendTrigger').each(function(){ //bgLRextendTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
    }
  }); 
  
  $('.bgRLextendTrigger').each(function(){ //bgRLextendTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgRLextend');// 画面内に入ったらbgRLextendというクラス名を追記
    }
  });
  
  $('.bgDUextendTrigger').each(function(){ //bgDUextendTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgDUextend');// 画面内に入ったらbgDUextendというクラス名を追記
    }
  });
  
  $('.bgUDextendTrigger').each(function(){ //bgUDextendTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgUDextend');// 画面内に入ったらbgUDextendというクラス名を追記
    }
  }); 
  
  $('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
    }
  }); 
  
  
}


// smoothTriggerにsmoothTextAppearというクラス名を付ける定義
function SmoothTextAnime() {
	$('.smoothTextTrigger').each(function(){ //smoothTextTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('smoothTextAppear');// 画面内に入ったらsmoothTextAppearというクラス名を追記
		}else{
		$(this).removeClass('smoothTextAppear');// 画面外に出たらsmoothTextAppearというクラス名を外す
		}
		});	
}


// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
	fadeAnime();/* アニメーション用の関数を呼ぶ*/
	slideAnime();//印象編 8-2 テキストが流れるように出現（左から右）の関数を呼ぶ
	BlurTextAnimeControl();//印象編 8-9 テキストがじわっと出現の関数を呼ぶ 
	GlowAnimeControl();//印象編 8-17 テキストがほのかに光りながら出現の関数を呼ぶ
	SmoothTextAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
    slideAnime();//印象編 8-2 テキストが流れるように出現（左から右）の関数を呼ぶ
    BlurTextAnimeControl();//印象編 8-9 テキストがじわっと出現の関数を呼ぶ
    GlowAnimeControl();//印象編 8-17 テキストがほのかに光りながら出現の関数を呼ぶ
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


// rollAnimeにrollというクラス名を付ける定義
function RollAnimeControl() {
	$('.rollAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var childs = $(this).children();	//rollAnimeの子要素を取得
		if (scroll >= elemPos - windowHeight) {
			$(childs).each(function (i) {		//子要素を1つ1つ処理をおこなう
				if (i < 10) {					//10未満の場合
				$(this).css("transition-delay","."+i+"s");	//子要素にcsstransition-delayを追加
				}else {							//10以上の場合
					var n = i / 10;				//ミリ秒指定なので10で割る
					$(this).css("transition-delay",n+"s");	//子要素にcsstransition-delayを追加
				}
			});
			
			$(this).addClass("roll"); //rollというアニメーションクラスを付与

		} else {
			$(childs).each(function () {		//子要素を1つ1つ処理をおこなう
				$(this).css("transition-delay","0s");//子要素にcsstransition-delayの秒を0とする
			});
			//$(this).removeClass("roll");//rollというアニメーションクラスを除去
		}
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	RollAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".rollAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = [];
		text.split('').forEach(function (t, i) {
			if (t !== " ") {
				if (i < 10) {
					textbox += '<span style="transition-delay:.' + i + 's;">' + t + '</span>';
				} else {
					var n = i / 10;
					textbox += '<span style="transition-delay:' + n + 's;">' + t + '</span>';
				}

			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});

	RollAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述




// テキストラインアニメーション
$(window).on('load scroll',function(){
  $('.txt-maker').each(function(){
    var targetPosition = $(this).offset().top;
    if($(window).scrollTop() > targetPosition - $(window).height() + 100){
      $(this).addClass('is-animation');
    }
  });
});



//-----------------------------------------------------

$(function () {
  $(".text-animation").each(function () {
    // 1文字ずつ<span>で囲む
    $(this)
      .children()
      .addBack()
      .contents()
      .each(function () {
        if (this.nodeType == 3) {
          $(this).replaceWith(
            $(this).text().replace(/(\S)/g, "<span>$1</span>")
          );
        }
      });
    // スクロールして要素が画面内に入ったら文字を表示
    $(this).on("inview", function () {
      // 1文字ずつ順番に表示(不透明にする)
      $(this).css({ opacity: 1 });
      for (var i = 0; i <= $(this).children("span").length; i++) {
        $(this)
          .children("span")
          .eq(i)
          .delay(80 * i) // 文字間の時間
          .animate({ opacity: 1 }, 500); // 全部表示されるまでの時間
      }
    }),
	$('.en-bg').on("inview", function () {
      // 1文字ずつ順番に表示(不透明にする)
      $(this).css({ opacity: .4 });
      for (var i = 0; i <= $(this).children("span").length; i++) {
        $(this)
          .children("span")
          .eq(i)
          .delay(80 * i) // 文字間の時間
          .animate({ opacity: .4 }, 500); // 全部表示されるまでの時間
      }
    });
  });
});


$(function(){
$(".photoArea").on("inview", function (event, isInView) {
  if (isInView) {
	$(this).stop().addClass("move");
  }
});
});


$(function(){
	$(".drawer-dropdown").on("click", function() {
		$(this).next('.toggle-title').slideToggle();
		$(this).toggleClass('active')
	});
	return false;
});



/*=========================================================
	ページタイトル画像：header-img
===========================================================*/

$(window).scroll(function() {
	var scroll = $(window).scrollTop();//スクロール値を定義
		//header-imgの背景
		$('.header-img').css({
		transform: 'scale('+(100 + scroll/20)/100+')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
		top: -(scroll/50)  + "%",//スクロール値を代入してtopの位置をマイナスにずらす
		});
	});



$(function(){
	$(".faq-area .quest").on("click", function() {
		$(this).next('.answer').slideToggle();
		$(this).toggleClass('active')
	});
	return false;
});


/*=========================================================
	店舗情報：タブ切り替え
===========================================================*/

// タブの見出し（tab-item）を取得
const tabItems = document.querySelectorAll(".tab-item");

tabItems.forEach((tabItem) => {
  tabItem.addEventListener("click", () => {
    // すべてのタブを非アクティブにする
    tabItems.forEach((t) => {
      t.classList.remove("active");
    });
    // すべてのコンテンツを非表示にする
    const tabPanels = document.querySelectorAll(".tab-panel");
    tabPanels.forEach((tabPanel) => {
      tabPanel.classList.remove("active");
    });

    // クリックされたタブをアクティブにする
    tabItem.classList.add("active");

    // 対応するコンテンツを表示
    const tabIndex = Array.from(tabItems).indexOf(tabItem);
    tabPanels[tabIndex].classList.add("active");
  });
});


//固定ボタン
$(window).scroll(function () {
  if($(window).scrollTop() > 450) {
	$('.fixed-shop-btn').addClass('fixed');
  } else {
	$('.fixed-shop-btn').removeClass('fixed');
  }
});


$(function(){
$(".effect").on("inview", function (event, isInView) {
  if (isInView) {
	$(this).stop().addClass("is-active");
  }
});
});

