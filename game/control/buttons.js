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
		audio.play_sfx("OOT_PauseMenu_Open");
	}else{
		system_status.change_state(prev_state1);
		audio.play_sfx("OOT_PauseMenu_Close");
	}
}


/*
 * INVENTORY BUTTONS
 */
function btn_use(){
	console.log("pressed use button");
	
}


function btn_share(){
	console.log("pressed share button");
	
}

function btn_delete(){
	console.log("pressed delete button");
	inventory.remove(inventory.selected);
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
	if(settings.music){
		settings.sfx = false; //maybe make as an audio event
		audio.mute_music();
	}else{
		settings.sfx = true;
		audio.mute_sfx();
	}
}

function switch_photo_scanner(){
	if(settings.music){
		settings.photo_scanner = false;
	}else{
		settings.photo_scanner = true;
	}
}

function btn_save(){
	//choose destination on file system
	
	//destination file content = JSON.stringify settings + items + inventory.item_list + user_stats
}

function btn_load(){
	//chhose file to load
	
	//check if it is JSON
	
	//settings = load.settings
	//audio.mute_music apply
	//audio.mute_sfx apply
}





