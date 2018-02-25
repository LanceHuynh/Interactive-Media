var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

var startPoint;

var endPoint;

var clicking = false;

var linePaths= [];

canvas.addEventListener("mousedown", function(event) {

	startPoint= getMousePos(canvas,event);
	clicking = true;
});

canvas.addEventListener("mouseup", function(event) {
	endPoint = getMousePos(canvas,event);
	drawLine(startPoint,endPoint);
	clicking = false;
});

canvas.addEventListener("mousemove", function(event) {
	if (clicking == false) return;

		context.clearRect(0, 0, canvas.width, canvas.height);
		linePaths.forEach( function(element) {
		drawLineAgainOrTemp(element.start,element.end);
		var mousePos = getMousePos(canvas,event);
		drawLineAgainOrTemp(startPoint,mousePos);
	});



});

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function drawLineAgainOrTemp(start, end) {
	context.beginPath();
    context.moveTo(start.x,start.y);
    context.lineTo(end.x,end.y);
    context.stroke();
}


function drawLine(start, end) {
	context.beginPath();
    context.moveTo(start.x,start.y);
    context.lineTo(end.x,end.y);
    context.stroke();
    var path = { 
    	start: start,
    	end: end		
   	};
    linePaths.push(path);

}


