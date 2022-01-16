/*---------------------------------------

    griddery by @glenthemes [tumblr]
    
---------------------------------------*/

$(document).ready(function(){	
window.griddery = function(TT_TT, boobahz){
	var root = getComputedStyle(document.documentElement);
	var JQversion = jQuery.fn.jquery.replaceAll(".","");
	TT_TT.addClass("col-item");
	
	var col_count = Number(root.getPropertyValue(boobahz));
	
	$(".col-item").each(function(){
		$(this).not(".col-item + .col-item").each(function(){
			if(JQversion >= "180"){
				$(this).nextUntil(":not(.col-item)").addBack().wrapAll('<div class="col-tr">');
			} else {
				$(this).nextUntil(":not(.col-item)").andSelf().wrapAll('<div class="col-tr">');
			}
		})
	})//end .col-item each
	
	for(smh=1; smh<col_count+1; smh++){
		$(".col-tr .col-item:nth-child(" + col_count + "n+" + smh + ")").each(function(){
			$(this).attr("col-id",smh)
		});
	}
	
	$(".col-tr").prepend("<div class='temp-cols'></div>");
	
	for(tytn=1; tytn<col_count+1; tytn++){
        $(".temp-cols").append("<div class='col-column' col-id='" + tytn + "'></div>");
    }
	
	$(".temp-cols").children().unwrap();
	
	$(".col-item").each(function(){
        var col_id = $(this).attr("col-id");
        $(this).appendTo($(this).parents(".col-tr").find(".col-column[col-id='" + col_id + "']"))
    })
    
    $(".col-column[col-id], .col-item[col-id]").removeAttr("col-id");
	
	$(".col-column").each(function(){
		if($.trim($(this).html()) == ""){
			$(this).remove();
		}
	}); 
}
});
