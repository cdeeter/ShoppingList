$(document).ready(function() {
    
    var $addBtn = $("#addbutton");
        $rmvAllBtn = $("#removeall");
        $itemEnter = $("#itementer");
        $list = $("#list");
        
    
    $addBtn.click(function() {
        if ($itemEnter.val() == '') {
            alert("Please enter an item!");
        } else {
            $list.prepend("<li><div id='rmv'>x</div>"+$itemEnter.val()+"</li>");
            $itemEnter.val('');
        }
    });

    //delete items
	$list.on("click", "#rmv", function(){
		$(this).parent("li").remove();
		$(this).remove();
	});
    
    //change color of selected item
	$list.on("click", "li", function() {
		$(this).toggleClass("click");
	});

    //clear list
	$rmvAllBtn.click(function() {
		$list.empty();
	});

    //add item on enter press
	$itemEnter.keyup(function(event){
		if(event.keyCode == 13) {
			$addBtn.click();
		}
	});
    
    //rearrange list items
    $list.sortable();

});
