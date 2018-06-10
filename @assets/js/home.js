$(document)
    .ready(function() {

			$(window).scroll(handleHitTop);
			var checkIfShow = false;

			function handleHitTop(event) {
			    var currentScrollTopValue = $(this).scrollTop();

			    if (handleHitTop.lastTop === undefined) {
			        handleHitTop.lastTop = currentScrollTopValue ;

			        return;
			    }

			    if (handleHitTop.lastTop == 0 && currentScrollTopValue == 0) {
			        return;
			    }

			    handleHitTop.lastTop = currentScrollTopValue;

			    if (handleHitTop.lastTop == 0) {
			        $('.fixed.menu').transition('fade out');
							checkIfShow = false;
			    } else if (handleHitTop.lastTop > 0) {
							if (checkIfShow == false) {
			    			$('.fixed.menu').transition('fade in');
								checkIfShow = true;
							}
			    }
			}

      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;

    })
  ;
