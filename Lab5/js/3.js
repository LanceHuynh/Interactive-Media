
$("#button").click(function() {
	$.ajax({
  		dataType: "jsonp",
  		url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp",
 		 success: jsonCallback
	});

});

function jsonCallback(data) {
		data.forEach( function(element) {
			$("#list").append("<p>" + element.name + " email:" + "<a href='" + "mailto:" + element.email + "'>" + element.email + "</a>" + "</p>");
		});
		$("#button").css('display', 'none');
}