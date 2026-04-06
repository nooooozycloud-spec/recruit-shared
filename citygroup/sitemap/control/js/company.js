/*=========================================================
// 企業情報 サイドナビ追従
===========================================================*/
$(window).on('load resize', function () {
	var winW = $(window).width();
	var devW = 768;
	if (winW <= devW) {
		//768px以下の時の処理
	} else {
		//769pxより大きい時の処理
		/*サイドナビ追従*/
		$(function () {
			var h_wrap = $('.company-wrap').offset().top,
				h_doc = $(document).height(),
				h_foot = $('#footer').outerHeight(),
				//h_contact = $('#com-contact').outerHeight(),
				//h_flinks = $('.cmn-links-area').outerHeight(),
				h_footwrap = h_foot,
				sidenav = $('.company-nav-inner');

			$(window).on("load scroll", function () {
				var value = $(this).scrollTop(), //スクロール位置
					scrollPosition = $(window).height() + $(window).scrollTop(); //ウィンドウの高さ＋ウィンドウのスクロール位置

				if (value > h_wrap - 100 ) { //fixスタートのタイミング

					sidenav.addClass('is-fix');
					if (h_doc - scrollPosition < h_footwrap - 100) { //フッター手前でfix解除
						/*sidenav.removeClass('is-fix');*/
						$('.company-nav').addClass('is-opacity');

					} else {
						sidenav.addClass('is-fix');
						$('.company-nav').removeClass('is-opacity');
					}

				} else {
					sidenav.removeClass('is-fix');
				}
			});
			
		});
	}
});