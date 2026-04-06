		var windowWidth = $(window).width();
		var windowSm = 768;
		if (windowWidth <= windowSm) {
		//横幅768px以下（スマホ）に適用させるJavaScriptを記述
			$('.event-slick').slick({
				autoplay: true,
				vertical: true,
				verticalSwiping: true,
				dots: false,
				slidesToShow: 1,
				arrows: false,
				loop: true,


				speed: 1000,//画像が切り替わるまでの時間 今回の場合は難病で1枚分動くか
			});		} else {
		//横幅768px以上（PC、タブレット）に適用させるJavaScriptを記述
			$('.event-slick').slick({
				autoplay: true,
				autoplaySpeed: 3000,
				vertical: true,
				verticalSwiping: true,
				dots: false,
				slidesToShow: 1,
				arrows: false,
				loop: true,

				speed: 1000,//画像が切り替わるまでの時間 今回の場合は難病で1枚分動くか
			});		
				
		}