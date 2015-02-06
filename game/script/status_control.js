/* VCLSD-Pattern: CONTROL
 * VIEW		
 * CONTROL	<--
 * LOGIC	
 * SERVICE	
 * DATA		
 */

function change_status(status){
	switch(status) {
		case "title":
	    	global_status.game_status = "title";
	    	$("#status").attr("class", "hide");
	    	hide_all_pages();
			page_title.setAttribute("class", "show");
	        break;
	        
	    case "scan":
	    	global_status.game_status = "scan";
	    	hide_all_pages();
	       	page_scan.setAttribute("class", "show");
			unselect_all();
	        break;
	        
	    case "inventory":
	    	global_status.game_status = "inventory";
	    	$("#status").attr("class", "show");
	    	hide_all_pages();
	        page_inventory.setAttribute("class", "show");
	        break;
	        
	    case "pause":
	    	global_status.game_status = "pause";
	    	hide_all_pages();
			page_pause.setAttribute("class", "show");
	        break;
	        
	    default:
	    	console.log("Something is wrong. Set default status");
	    	global_status.game_status = "inventory";
	    	hide_all_pages();
	    	page_inventory.setAttribute("class", "show");
    }
}

function hide_all_pages(){
	page_title.setAttribute("class", "hide");
	page_inventory.setAttribute("class", "hide");
	page_scan.setAttribute("class", "hide");
	page_pause.setAttribute("class", "hide");
}

function reset_dialog_status(){
	$("#dialog").dialog({
		title: "",
		modal: false,
		buttons: [{
			text: "Ok",
			icons: {
				primary: "ui-icon-heart"
			},
			click: function() {
				$( this ).dialog( "close" );
			}
		}],
		height: "auto",
		position: { my: "center", at: "center", of: window },
	});
}
