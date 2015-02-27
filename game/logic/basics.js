/*
 * APP STATUS
 */
function set_status (status){
	data.status = status;
	return;
}

function get_status (){
	return(data.status);
}



/*
 * jQuery DIALOG OBJECTS
 */
function create_dialog(page){
	var content = dialog.content;
	var buttons = dialog.buttons;
	if(page == undefined){page = 0;};
	
	//modify html-page.dialog
	//show dialog
}
