function setSizes() {
	$.each($('.card'), function() {
		var width = $(this).parent().parent().width();
		$(this).css('height', width).find('.front, .back').css('height', width);
	});
}

$(window).resize(function() {
	setSizes();
});

$(document).ready(function() {
	setSizes();

	$.each($('.card'), function() {
		// color thief get color from image and set on the .back
	});
});