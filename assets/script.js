//Isotope active js code:
//************************

// Active isotope with jQuery code:

// $(function() {
//     $("img.lazy").lazyload();
// });

$('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});
// Isotope click function
$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});

 $("img").lazyload({
    event : 'scroll'
    ,effect : "fadeIn"
    ,appear:function(){console.log('loaded image')}
  });



