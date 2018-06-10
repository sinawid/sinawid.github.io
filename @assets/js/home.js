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

			// semantic documentation on progres bars: https://semantic-ui.com/modules/progress.html#/usage
				$('#card .ui.progress').progress(
					'set percent', 50
				);

				$('#card .ui.progress')
				  .progress({
						total: 100000,
						text: {
				      active  : 'IDR{value} dari IDR{total} telah didanai',
				      success : 'CAMPAIGN SELESAI'
				    }
					}
				);

    })
  ;
