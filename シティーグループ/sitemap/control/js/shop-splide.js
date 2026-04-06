		var slider1 = new Splide('.shop-splide', {
			type: "loop",
			arrows: false,
			pagination: false,
			drag: "free",
			gap: 0,
			perPage: 4,
			flickPower: 300,
			//focus: 'center',
			autoWidth: true,
			autoScroll: {
				speed: 1.4,
				pauseOnHover: false,
			},
			breakpoints: {
				769: {
					gap: 0,
					//perPage: 1.5,
					//autoWidth: false,
					autoScroll: {
						speed: 1.0,
					},
				},
			},
		});
		slider1.mount(window.splide.Extensions);