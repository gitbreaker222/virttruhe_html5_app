status = {
	"change"	: function (new_status) {
			data.set("previous_status", data.get("status"));
			data.set("status", new_status);
			
			page[data.get("previous_status")].hide();
			
			page[data.get("status")].show();
			
			switch(status) {
				case "title":
			    	$("body").css("background-color", "#fff");
			    	$("#status").attr("class", "hide");
			    	hide_all_pages();
					page_title.setAttribute("class", "show");
			        break;
			        
			    case "scan":
			    	hide_all_pages();
			       	page_scan.setAttribute("class", "show");
					unselect_all();
			        break;
			        
			    case "inventory":
			    	$("#status").attr("class", "show");
			    	hide_all_pages();
			    	
			    	
			        page.inventory.show();
			        break;
			        
			    case "pause":
			    	hide_all_pages();
					page_pause.setAttribute("class", "show");
			        break;
			        
			    default:
			    	console.log("Something is wrong. Set default status");
			    	hide_all_pages();
			    	page_inventory.setAttribute("class", "show");
		    }
		}
};

function change_status(status){
					
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
