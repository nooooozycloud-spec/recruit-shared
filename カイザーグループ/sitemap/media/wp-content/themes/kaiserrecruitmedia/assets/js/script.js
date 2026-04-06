// script.js

/*---------------------------------------------
	イベント発動 : ロード
 ---------------------------------------------*/

var loaded = jQuery(".js-loaded");

// jQuery(window).loaded(function () {
jQuery(document).ready(function () {
	loaded.addClass('loaded');
});

/*---------------------------------------------
 イベント発動 : スクロール
---------------------------------------------*/
var scroll = jQuery('.js-scroll');

jQuery(function(jQuery) {

	jQuery(window).scroll(function () {
		if(jQuery(this).scrollTop() > 900) {
			scroll.addClass('scrolled');
		}else{
			scroll.removeClass('scrolled');
		}
	});
});


/*---------------------------------------------
	Preloader
 ---------------------------------------------*/
jQuery(window).load(function(){
	jQuery("#loader").fadeOut(2000,function(){
		jQuery("#loader").remove();
	});
});

/*---------------------------------------------
	anchor-link
 ---------------------------------------------*/

jQuery(function($) {
	jQuery('.anchor-link').click(function(){
		jQuery('html,body').animate({ scrollTop: jQuery(jQuery(this).attr("href")).offset().top });
		return false;
	});
});

// jQuery(function() {
//     jQuery('a[href*=#]').click(function() {
//         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&　location.hostname == this.hostname) {
//             var target = jQuery(this.hash);
//             target = target.length && target;
//             if (target.length) {
//                 var sclpos = 160;
//                 var scldurat = 400;
//                 var targetOffset = target.offset().top - sclpos;
//                 jQuery('html,body').animate({scrollTop: targetOffset}, {duration: scldurat, easing: "easeInOutExpo"});
//                 return false;
//             }
//         }
//     });
// });

/*---------------------------------------------
	rollover
 ---------------------------------------------*/
jQuery(function($) {
	var postfix = '_on';
	$('.imgover img').not('[src*="'+ postfix +'."]').each(function() {
		var img = $(this);
		var src = img.attr('src');
		var src_on = src.substr(0, src.lastIndexOf('.'))
				   + postfix
				   + src.substring(src.lastIndexOf('.'));
		$('<img>').attr('src', src_on);
		img.hover(function() {
			img.attr('src', src_on);
		}, function() {
			img.attr('src', src);
		});
	});
});


/*---------------------------------------------
	トグルナビゲーション
 ---------------------------------------------*/
var nav = jQuery('#nav');
var opener = jQuery(".js-menu-open");
var closer = jQuery(".js-menu-close");
var overlay = jQuery("#overlay");

nav.css({ "display":"block"});

function slideclose() {
	//スライド閉じるアニメーション
	nav.removeClass("on");
	closer.css({ "display":"none"});
	opener.css({ "display":"block"});
	overlay.hide();
}
function slideopen() {
	//スライド開くアニメーション
	nav.addClass("on");
	closer.css({ "display":"block"});
	opener.css({ "display":"none"});
	overlay.show();
}

jQuery(document).ready(function () {
	opener.click(function(){
		slideopen();
	});

	closer.click(function(){
		slideclose();
	});
	overlay.click(function(){
		slideclose();
	});
});



/*---------------------------------------------

	UserAgent Junction

 ---------------------------------------------*/

if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
	/*---------------------------------------------

		Mobile Only

	 ---------------------------------------------*/
	/*---------------------------------------------
		タッチエリアの確保
	 ---------------------------------------------*/
	jQuery(function($){
	    jQuery( 'a, div, .box' )
	      .bind( 'touchstart', function(){
	        jQuery( this ).addClass( 'hover' );
	    }).bind( 'touchend', function(){
	        jQuery( this ).removeClass( 'hover' );
	    });
	});

}

else {

};
