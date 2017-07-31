$(document).ready(function() {
	$("#new-quote").on("click", function call_api_chuck () {
		$.ajax({
			url: "https://api.icndb.com/jokes/random",
			jsonp: "callback",
			type: "GET",
			dataType: "jsonp",
			success: function (data) {
				
				$("#quote-content").html(data.value.joke);
			},

			xhrFields: {
				withCredentials: false
			}
    });
			});
});