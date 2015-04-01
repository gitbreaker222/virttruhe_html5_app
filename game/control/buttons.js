function btn_scan(){
	
	var status = data.get_status();
	var prev_status = data.get_prev_status1();
	
	if(status != "scan"){
		audio.play_sfx("OOT_ZTarget_Center1.ogg");
		
		app_status.change("scan");
		
		//start scanner
		scan.start();
		
	}else{
		//close scanner view, show previous status
		audio.play_sfx("OOT_MainMenu_Error.ogg");
		
		app_status.change(prev_status);
		
		//setTimeout(function(){music.play();}, 700);
	}
	
}

function btn_options(){
	//toggle page views and play/pause music
	if (global_status.game_status !== "pause"){
		//open pause menu
		music.pause();
		play_sfx("OOT_PauseMenu_Open.ogg");
		change_status("pause");
		
	}else{
		//close pause menu, show inventory
		play_sfx("OOT_PauseMenu_Close.ogg");
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
	var button = document.getElementById("button_toggle_sound");
	music_on_off();
	play_sfx("OOT_PauseMenu_Select.ogg");
	if(status_muted){
		button.setAttribute("class", "btn-icon btn-active");
	}else{
		button.setAttribute("class", "btn-icon");
	}
}

function btn_about(){
	/*
	 * open a dialog
	 */
	reset_dialog_status();
	dialog.innerHTML = 'VIRTTRUHE HTML5 App by Ruben La Biunda. Visit <a href="virttruhe.tumblr.com">tumblr.virttruhe.com</a> for more information.';
		//prepare dialog contents
	$("#dialog").dialog({
		title: "About",
	});
		//open dialog
	$("#dialog").dialog ( "open" );
}
