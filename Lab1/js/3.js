var el = document.getElementsByClassName("button")[0];

 el.addEventListener('click', function(event) {
	event.target.classList.toggle('changecolor'); 
});