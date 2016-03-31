

$(document).ready(function() {
	console.log('Page is ready');

	// fetch all todo lists
	$.get('/api/todolists', function(res) {
		var result = 'no data yet.';
		// if the request was successfull
		if (res.success) {
			var lists = res.data;			
			result = '<ul class="list-group">';
			// iterate over the todolists and display their name in a bootstrap list
			res.data.forEach(function(ele) {
				result += '<li class="list-group-item">' + ele.name + '</li>';
			});

			result += '</ul>';
		}

		// append the result dom element to the lead class element
		$('.lead').append(result);
	});
});