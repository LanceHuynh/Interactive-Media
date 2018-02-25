var connection = new WebSocket("wss://obscure-waters-98157.herokuapp.com");

connection.onopen = function () {
  connection.send('Ping'); 
};

document.getElementById("submit").addEventListener("click", function(){
	var text = document.getElementById("text").value;
	connection.send(text);
	document.getElementById("text").value = "";
});


connection.onmessage = function (e) {
  document.getElementById("screen").appendChild(document.createTextNode(e.data));
  document.getElementById("screen").appendChild(document.createElement("br"));
  document.getElementById("screen").scrollTop = document.getElementById("screen").scrollHeight;
};
