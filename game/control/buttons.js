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
function btn_use(){
	items[inventory.selected].use();
}


function btn_share(){
	console.log("pressed share button");
	
}

function btn_delete(){
	
	inventory.remove(inventory.selected);
}

function btn_delete_dialog(){
	/*
	<a class="button" aria-label="Close" onclick="$('#dialog').foundation('reveal', 'close'); btn_delete();">
	<img class="icon" src="lib/foundation-5.5.1.custom/img/icons/fi-trash.svg" />
	</a>
	
	<a class="close-reveal-modal" aria-label="Close">&#215;</a>
	 */
	
	var p = document.createElement("P");
	p.innerHTML = "Do you really want to delete this item?";
	
	var a = document.createElement("A");
	a.setAttribute("class", "button");
	a.setAttribute("aria-label", "Close");
	a.setAttribute("onclick", "$('#dialog').foundation('reveal', 'close'); btn_delete()");
	
	var img = document.createElemten("IMG");
	img.setAttribute("class", "icon");
	img.setAttribute("src", "lib/foundation-5.5.1.custom/img/icons/fi-trash.svg");
	
	a.append(img);
	
	var d_message = document.createElement()
	/*
	 * CONTUNUE HERE TODO
	 * button.js and ui.js
	 * 
	 * create dialog content as js object
	 * send to ui
	 * ui creates dialog pop up as modal
	 * 
	 * not testet yet
	 */
	
	
				
	var dialog_obj = {
		message : d_message,
		actions : [
			{name : "CLOSE", fn : null}
		],
	};
	
	ui.dialog(dialog_obj);
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
	if(settings.photo_scanner){
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





