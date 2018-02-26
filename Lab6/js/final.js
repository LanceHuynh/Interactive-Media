/*var div = "<div class='placeholder'></div>";
for (var i = 0; i < 9; i++) {
	$("#content").append(div);
}
*/

$("button").click(function() {
	var value = $("#search").val();
	render(value);
});

	function render(para) {
	  	var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	  	$.getJSON( flickerAPI, {
	    	tags: para,
	    	tagmode: "any",
	    	format: "json"
	 	})
	    .done(function( data ) {
	      $.each( data.items, function( i, item ) {
	        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#content" );
	        if ( i === 30) {
	          return false;
	        }
	      });
	    });
	    $("#content").html("");

	}