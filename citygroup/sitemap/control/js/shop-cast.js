		var windowWidth = $(window).width();
		var windowSm = 768;
		if (windowWidth <= windowSm) {
			const init = 18  //初期表示数
			const more = 6  //追加表示数

			// 初期表示数以降のリスト内容を非表示に
			$(".more-list li:nth-child(n+" + (init+1) + ")").hide()

			//初期表示数以下であればMoreボタンを非表示
			$(".more-list").filter(function(){
				return $(this).find("li").length <= init
			}).find(".cast-more-btn").hide()    

			// Moreボタンクリックで指定数表示
			$(".cast-more-btn").on("click",function(){
				let this_list = $(this).closest(".more-list")
				this_list.find("li:hidden").slice(0,more).slideToggle()

				if(this_list.find("li:hidden").length == 0){
					$(this).fadeOut();
					$(".btn-more").fadeIn()
				}
			});
		} else {
			const init = 8  //初期表示数
			const more = 8  //追加表示数

			// 初期表示数以降のリスト内容を非表示に
			$(".more-list li:nth-child(n+" + (init+1) + ")").hide()

			//初期表示数以下であればMoreボタンを非表示
			$(".more-list").filter(function(){
				return $(this).find("li").length <= init
			}).find(".cast-more-btn").hide()    

			// Moreボタンクリックで指定数表示
			$(".cast-more-btn").on("click",function(){
				let this_list = $(this).closest(".more-list")
				this_list.find("li:hidden").slice(0,more).slideToggle()

				if(this_list.find("li:hidden").length == 0){
					$(this).fadeOut();
					$(".btn-more").fadeIn()
				}
			});
		}
