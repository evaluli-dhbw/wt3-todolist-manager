

$(document).ready(function() {
	console.log('Page is ready');

	$.get('/api/todolists', function(data) {
		$('.lead').append(data);
	});
});