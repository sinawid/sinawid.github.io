$(document)
    .ready(function() {

      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;

			$('.ui.dropdown')
				.dropdown()
			;

			$('.ui.search')
		  .search({
		    type: 'category'
		  })
			;

    })
  ;
