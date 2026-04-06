		var windowWidth = $(window).width();
		var windowSm = 768;
		if (windowWidth <= windowSm) {
		//横幅768px以下（スマホ）に適用させるJavaScriptを記述
			$('.slide-img-slick').slick({
				autoplay: true,
				dots: false,
				slidesToShow: 2.5,
				arrows: false,
				loop: true,

				autoplaySpeed: 0,//次の画像に切り替えるまでの時間 今回の場合は0
				speed: 8000,//画像が切り替わるまでの時間 今回の場合は難病で1枚分動くか
				cssEase: 'linear',//動きの種類は等速に
				pauseOnFocus: false,//フォーカスが合っても止めない
				pauseOnHover: false,//hoverしても止めない
			});		} else {
		//横幅768px以上（PC、タブレット）に適用させるJavaScriptを記述
			$('.slide-img-slick').slick({
				autoplay: true,
				dots: false,
				slidesToShow: 4,
				arrows: false,
				loop: true,

				autoplaySpeed: 0,//次の画像に切り替えるまでの時間 今回の場合は0
				speed: 8000,//画像が切り替わるまでの時間 今回の場合は難病で1枚分動くか
				cssEase: 'linear',//動きの種類は等速に
				pauseOnFocus: false,//フォーカスが合っても止めない
				pauseOnHover: false,//hoverしても止めない
			});		
				
		}