$(document)
    .ready(function() {
				$('.special.cards .image').dimmer({
				  on: 'hover'
				});

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

				$('.fixed.menu').transition('fade in');

	})
;
