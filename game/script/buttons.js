/* VCLSD-Pattern: CONTROL
 * VIEW		
 * CONTROL	<--
 * LOGIC	
 * SERVICE	
 * DATA		
 */

function btn_scan(){
	if (game_status !== "scan"){
		//open scanner view
		music.pause();
		play_sfx("OOT_ZTarget_Center1.wav");
		change_status("scan");
		//remove the previous loaded file
		document.getElementById("myForm").reset();
	}else{
		//close scanner view, show inventory
		play_sfx("OOT_MainMenu_Error.wav");
		change_status("inventory");
		setTimeout(function(){music.play();}, 700);
	}
	
}

function btn_options(){
	//toggle page views and play/pause music
	if (game_status !== "pause"){
		//open pause menu
		music.pause();
		play_sfx("OOT_PauseMenu_Open.wav");
		change_status("pause");
		
	}else{
		//close pause menu, show inventory
		play_sfx("OOT_PauseMenu_Close.wav");
		setTimeout(function(){music.play();}, 700);
		change_status("inventory");
	}
}

function btn_use(){
	//TODO add use_item() function
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
