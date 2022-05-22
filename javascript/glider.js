window.addEventListener('load', function(){
	new Glider(document.querySelector('.glider'), {
		
        //Para los SmP
        slidesToShow: 1,
		    slidesToScroll: 1,
        draggable:true,
        rewind:true,
		dots: '.dots',


		responsive: [
			{
			  breakpoint: 550, //a partir de 550px
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}},
            {
			  breakpoint: 800, //a partir de 800px
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}}
		]
	});
});