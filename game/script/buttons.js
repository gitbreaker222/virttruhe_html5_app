function btn_scan(){
	var music = document.getElementById("audio_player");
	var page_inventory = document.getElementById("inventory");
	var page_scan = document.getElementById("scan");
	var page_pause = document.getElementById("pause");
	
	if (page_scan.getAttribute("class") == "hide"){
		//open scanner view
		music.pause();
		play_sfx("OOT_ZTarget_Center1.wav");
		page_inventory.setAttribute("class", "hide");
		page_scan.setAttribute("class", "show");
		page_pause.setAttribute("class", "hide");
		unselect_all();
		qr_start();
		
	}else{
		//close scanner view, show inventory
		qr_stop()
		play_sfx("OOT_MainMenu_Error.wav");
		setTimeout(function(){music.play();}, 700);
		page_inventory.setAttribute("class", "show");
		page_scan.setAttribute("class", "hide");
		page_pause.setAttribute("class", "hide");
	}
	
}

function btn_options(){
	var music = document.getElementById("audio_player");
	//toggle page views and play/pause music
	var page_inventory = document.getElementById("inventory");
	var page_scan = document.getElementById("scan");
	var page_pause = document.getElementById("pause");
	
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
	var music = document.getElementById("audio_player");
	
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

//not in use, as it fired everytime
function background_tap(){
	unselect_all();
}
