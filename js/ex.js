$(document).ready(function() {
	$(".faq_con_item").click(function() {
	const $t = $(this);
	const is_show = ($t.attr("data-show") == "true");

	console.log($t.data("show"), is_show)
	$t.attr("data-show", (!is_show).toString())
	})
});


var $box = $('.loader');

setTimeout(function() {
  $box.removeClass('loader');
}, 1300);