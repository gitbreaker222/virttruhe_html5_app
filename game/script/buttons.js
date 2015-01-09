/* VCLSD-Pattern: CONTROL
 * VIEW		
 * CONTROL	<--
 * LOGIC	
 * SERVICE	
 * DATA		
 */

function btn_scan(){
	if (scan_status == false){
		//open scanner view
		scan_status = true;
		music.pause();
		play_sfx("OOT_ZTarget_Center1.wav");
		page_inventory.setAttribute("class", "hide");
		page_scan.setAttribute("class", "show");
		page_pause.setAttribute("class", "hide");
		unselect_all();
		
		//qr_start();
		
	}else{
		//close scanner view, show inventory
		scan_status = false;
			//qr_stop();
		play_sfx("OOT_MainMenu_Error.wav");
		setTimeout(function(){music.play();}, 700);
		page_inventory.setAttribute("class", "show");
		page_scan.setAttribute("class", "hide");
		page_pause.setAttribute("class", "hide");
	}
	
}

function btn_options(){
	//toggle page views and play/pause music
	if (page_pause.getAttribute("class") == "hide"){
		//open pause menu
		music.pause();
		play_sfx("OOT_PauseMenu_Open.wav");
		page_inventory.setAttribute("class", "hide");
		page_scan.setAttribute("class", "hide");
		page_pause.setAttribute("class", "show");
		
	}else{
		//close pause menu, show inventory
		play_sfx("OOT_PauseMenu_Close.wav");
		setTimeout(function(){music.play();}, 700);
		page_inventory.setAttribute("class", "show");
		page_scan.setAttribute("class", "hide");
		page_pause.setAttribute("class", "hide");
	}
}

function btn_use(){
	if (music.paused){
		music.play();
	}else{
		music.pause();
	}
	
}

function btn_delete(){
	delete_all_from_inventory();
	select_item();
}

function btn_toggle_sound(){
	var button = document.getElementById("button_toggle_sound")
	music_on_off();
	play_sfx("OOT_PauseMenu_Select.wav");
	if(status_muted){
		button.setAttribute("class", "btn-icon btn-active");
	}else{
		button.setAttribute("class", "btn-icon");
	}
}

//not in use, as it fired everytime
function background_tap(){
	unselect_all();
}
