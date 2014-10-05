//add items to list
function add(itementer, list) {

	var delete_item = "<div id='x'>x</div>"

	$("#"+list).prepend("<li>"+$('input[id='+itementer+']').val()+"</li>").prepend("<div id='x'>x</div>");
	$('#itementer').val('');

}


$(document).ready(function() {

    //change color of selected item
	$("#list").on("click", "li", function() {
		$(this).toggleClass("click");
	});
    
    //delete items
	$("#list").on("click", "#x", function(){
		$(this).next("li").remove();
		$(this).remove();
	});

    //clear list
	$("#removeall").click(function() {
		$("#list").empty();
	});

    //add item on enter press
	$("#itementer").keyup(function(event){
		if(event.keyCode == 13) {
			$("#addbutton").click();
		}
	});

});
