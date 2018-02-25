
if (!localStorage.storage){
	localStorage.setItem("storage",JSON.stringify([]));
}
else {
	var storage =  JSON.parse(localStorage.getItem("storage"));
	storage.forEach( function(element) {
	$("#main-content").append('<p>' + element + "</p>");
});

}
	$("#submit").click(function() {
	$("#main-content").append('<p>' + $("#main-addbar-text").val() + "</p>");
	storage.push($("#main-addbar-text").val());
	localStorage.setItem("storage", JSON.stringify(storage));

	$("#main-addbar-text").val("");	
});