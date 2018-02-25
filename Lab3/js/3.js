var audio = document.getElementById("audio");

audio.volume = 0.0;

var button = document.getElementById("content-1");


button.addEventListener("click", function() {
	$(".fa").toggleClass("fa-pause");
    $(".fa").toggleClass("fa-play");

    if (audio.paused) {
    	audio.play();
    } else {
    	audio.pause();
    }

});

$("#increase").click(function(){
	audio.volume += 0.1;
});
$("#decrease").click(function(){
	audio.volume -= 0.1;
});

