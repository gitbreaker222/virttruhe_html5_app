/* VCLSD-Pattern: CONTROL
 * VIEW		
 * CONTROL	<--
 * LOGIC	
 * SERVICE	
 * DATA		
 */

function change_status(status){
	switch(status) {
	    case "scan":
	    	game_status = "scan";
	        page_inventory.setAttribute("class", "hide");
			page_scan.setAttribute("class", "show");
			page_pause.setAttribute("class", "hide");
			unselect_all();
	        break;
	    case "inventory":
	    	game_status = "inventory";
	        page_inventory.setAttribute("class", "show");
			page_scan.setAttribute("class", "hide");
			page_pause.setAttribute("class", "hide");
	        break;
	    case "pause":
	    game_status = "pause";
	        page_inventory.setAttribute("class", "hide");
			page_scan.setAttribute("class", "hide");
			page_pause.setAttribute("class", "show");
	        break;
	    default:
	    	console.log("Something is wrong. Set default status");
	    	page_inventory.setAttribute("class", "show");
			page_scan.setAttribute("class", "hide");
			page_pause.setAttribute("class", "hide");
    }
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
