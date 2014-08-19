
function add(itementer, list) {

	var delete_item = "<div id='x'>x</div>"

	$("#"+list).prepend("<li>"+$('input[id='+itementer+']').val()+"</li>").prepend("<div id='x'>x</div>");
	$('#itementer').val('');

}


$(document).ready(function() {


	$("#list").on("click", "li", function() {
		$(this).toggleClass("click");
	});

	$("#list").on("click", "#x", function(){
		$(this).next("li").remove();
		$(this).remove();
	});


	$("#removeall").click(function() {
		$("#list").empty();
	});

	$("#itementer").keyup(function(event){
		if(event.keyCode == 13) {
			$("#addbutton").click();
		}
	});

});
