document.getElementById("submit").addEventListener("click", function() {
	var para = document.createElement("p");
	var content = document.createTextNode( document.getElementById("main-addbar-text").value);
	para.appendChild(content);
	document.getElementById("main-content").appendChild(para);
	console.log(para.innerHTML);
	document.getElementById("main-addbar-text").value ="";
});