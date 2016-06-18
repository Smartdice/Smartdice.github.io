var config = {
	"particles": {
		"number": {
			"value": 80,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#d5d5d5"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 6,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#d5d5d5",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 1.5,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "grab"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 140,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
};

$(document).ready(function() {
	$('.js').show();
	var clickCounter = 0;
	var globalIndex = 0;
	var soundPlaying = false;
	var windowWidth = $(window).width();
 	if (windowWidth <= 992) {
		$('.project-animation').css('margin-top', '20%');
	}
	$('#fullpage').fullpage({
		navigation: false,
		scrollOverflow: true,
		verticalCentered: true,
		touchSensitivity: 3,
		normalScrollElementTouchThreshold: 3,
		paddingTop: '50px',
    // paddingBottom: '50px',
		// scrollBar: true,
		menu: '#menu',
		anchors:['home', 'video', 'smartdice', 'pinBuster', 'bitLeague', 'ttovi', 'dali', 'team'],
		afterRender: function () {
			// $('.particle-section').css('padding', '0');
			var slideHeight = $('.slide').height();
			var holeHeight = $('.hole').height();
			var windowHeight = $(window).height();
			// var screenHeight = $('.layer2.index1').height();
			if(windowWidth > 992) {
				var screenHeight = $('.layer2').height((windowHeight - 50) / 2.55);
				$('.project-info').css('height', '' + (slideHeight) + 'px');
				$('.project-info').addClass('flex-col-start');
				$('.project-animation').css('height', '' + (slideHeight) + 'px');
				$('.project-animation').addClass('flex-col-end');
				$('.hole-layer').css('height', '' + holeHeight + 'px');
				$('.screen').css('height', '' + screenHeight + 'px');
			} else if (windowWidth <= 992) {
				$('.layer2').css('width', '100%');
			}
		},
		afterLoad: function(anchorLink, index) {
			globalIndex = index;
			if (index === 1 || index === 2) {
				$('#navigation').hide()
			} else {
				$('#navigation').show()
			}
			// if (index >= 4) {
			// 	if(!$('.layer2.index' + (index - 3)).hasClass('active')) {
			// 		$('.layer2.index' + (index - 3)).addClass('active');
			// 	}
			// }
			if (index !== 1) {
				$('#click-phrase').css('visibility', 'hidden');
			}
			if(anchorLink !== 'dali') {
				$('#dali-sound').get(0).pause();
			}
		},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
			if (globalIndex >= 4 && slideAnchor === 1) {
				$('.layer2.index' + (globalIndex - 3)).addClass('active');
			}
			var loadedSlide = $(this);
			if(anchorLink === 'dali' && slideAnchor > 3) {
				$('#dali-sound').get(0).play();
			}
			if (anchorLink !== 'dali') {
				$('#dali-sound').get(0).pause();
			}
			// if(loadedSlide.has('#myVideo')) {
			// 	$('#myVideo').get(0).play();
			// } else {
			// 	$('#myVideo').get(0).stop();
			// }
			if (loadedSlide.hasClass('light-bg')) {
				$('.fp-controlArrow.fp-prev').css('background-image', 'url(../imgs/arrow_left_black.png)');
				$('.fp-controlArrow.fp-next').css('background-image', 'url(../imgs/arrow_right_black.png)');
			} else {
				$('.fp-controlArrow.fp-prev').css('background-image', 'url(../imgs/arrow_left.png)');
				$('.fp-controlArrow.fp-next').css('background-image', 'url(../imgs/arrow_right.png)');
			}
		},
		onLeave: function(index, newIndex, direction) {
			clickCounter = 0;
			// if($('.layer2.index' + (globalIndex - 3)).hasClass('active')) {
			// 	$('.layer2.index' + (globalIndex - 3)).removeClass('active');
			// }
		},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
			$('.layer2.index' + (globalIndex - 3)).removeClass('active');
		}
	});
	particlesJS('particles', config);
	$('#particles').click(function() {
		clickCounter += 1;
		if(clickCounter === 15) {
			$('#click-phrase').css('visibility', 'visible');
		}
	});

});