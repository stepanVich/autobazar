$(document).ready(function() {
	/* Slider */

	$(function() {
		$(".rslides").responsiveSlides({
			nav: false,
			pager: true
		});
	});

	/* Range slider */
	var html5Slider = document.getElementById('price-slider');

	noUiSlider.create(html5Slider, {
	    start: [500000, 2000000],
	    connect: true,
	    range: {
	        'min': 0,
	        'max': 5000000
	    },
        format: wNumb({
            decimals: 0,
            thousand: ' ',
            suffix: ' Kč'
        })
	});

	var inputFrom = document.getElementById('price-from');
	var inputTo = document.getElementById('price-to');

	html5Slider.noUiSlider.on('update', function (values, handle) {

	    var value = values[handle];
	    if (handle == 0) {
	        inputFrom.value = value;
	    } else if (handle == 1) {
	        inputTo.value = value;
	    }
	});

	inputFrom.addEventListener('change', function () {
	    html5Slider.noUiSlider.set([this.value, null]);
	});

	inputTo.addEventListener('change', function () {
	    html5Slider.noUiSlider.set([null, this.value]);
	});

	/* Responsive navigation */
	$('.menu-icon').click(function() {
		$('.nav-top').toggle('show');
	});


	// Custom select dropdown
	$("select").chosen({
		disable_search_threshold: 20,
		no_results_text: "Nic nenalezeno!",
		inherit_select_classes: true
	});

});
