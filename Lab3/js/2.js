if (!localStorage.storage){
	localStorage.setItem("storage",JSON.stringify([]));
}
else {
	var storage =  JSON.parse(localStorage.getItem("storage"));
	storage.forEach( function(element) {
	var para = document.createElement("p");
	var content = document.createTextNode(element);
	para.appendChild(content);
	document.getElementById("main-content").appendChild(para);
});

}
document.getElementById("submit").addEventListener("click", function() {
	var para = document.createElement("p");
	var content = document.createTextNode( document.getElementById("main-addbar-text").value);
	para.appendChild(content);
	document.getElementById("main-content").appendChild(para);
	console.log(para.innerHTML);

	storage.push(document.getElementById("main-addbar-text").value);
	localStorage.setItem("storage", JSON.stringify(storage));

	document.getElementById("main-addbar-text").value ="";	
});