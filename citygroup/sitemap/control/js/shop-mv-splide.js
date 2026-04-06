			var slider1 = new Splide('.splide', {
			type: "loop",
			arrows: false,
			pagination: false,
			drag: "free",
			gap: 50,
			//perPage: 4,
			flickPower: 300,
			//focus: 'center',
			autoWidth: true,
			autoScroll: {
				speed: 1.4,
				pauseOnHover: false,
			},
			breakpoints: {
				769: {
					gap: 20,
					//perPage: 1.5,
					//autoWidth: false,
					autoScroll: {
						speed: 1.0,
						pauseOnHover: false,
					},
				},
			},
		});
		slider1.mount(window.splide.Extensions);