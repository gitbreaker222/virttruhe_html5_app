function btn_start(){
    $("#start").hide(400, "linear");
};

/*
 * GLOBAL BUTTONS
 */
function btn_scan(){
	console.log("pressed scan button");
	
	//load current state
	var state = system_status.state;
	var prev_state1 = system_status.prev_state1;
	//var prev_state2 = system_status.prev_state2;
	
	switch(state){
			case "scan" :
				system_status.change_state(prev_state1);
				break;
				
			case "pause" :
				console.log("button disabled");
				break;
				
			case "new_item" :
				console.log("button disabled");
				break;
				
			case "portal" :
				console.log("button disabled");
				break;
				
			default : //inventory, title
				system_status.change_state("scan");
				break;
		}
}



function btn_pause(){
	console.log("pressed pause/settings button");
	
	//load current state
	var state = system_status.state;
	var prev_state1 = system_status.prev_state1;
	var prev_state2 = system_status.prev_state2;
	
	if(state != "pause"){
		system_status.change_state("pause");
		//audio.play_sfx("OOT_PauseMenu_Open");
	}else{
		system_status.change_state(prev_state1);
		//audio.play_sfx("OOT_PauseMenu_Close");
	}
}


/*
* INVENTORY BUTTONS
*/
function btn_info() {
	inventory.info();
}

function btn_use() {
	items[inventory.selected].use();
}

function btn_share() {
	inventory.share(inventory.selected);
}

function btn_delete() {
	inventory.remove(inventory.selected);
}

function btn_delete_dialog() {
	$("#d_delete").show().addClass("d_active");
	//TODO pass this job to dialog.js
}



/*
 * PAUSE / SETTINGS BUTTONS
 */
function switch_mute_music(){
	if(settings.music){
		settings.music = false;
	}else{
		settings.music = true;
	}
	
}

function switch_mute_sfx(){
	audio.mute_sfx();
}

function switch_photo_scanner(){
	alert("not available in alpha version");
	if(settings.photo_scanner){
		settings.photo_scanner = false;
	}else{
		settings.photo_scanner = true;
	}
}

function btn_save(){
	alert("not available in alpha version");
	//choose destination on file system
	
	//destination file content = JSON.stringify settings + items + inventory.item_list + user_stats
}

function btn_load(){
	alert("not available in alpha version");
	//choose file to load
	
	//check if it is JSON
	
	//settings = load.settings
	//audio.mute_music apply
	//audio.mute_sfx apply
}



/*
 * DIALOG BOX BUTTONS
 */
function btn_close_dialog() {
    dialog.close();
}




