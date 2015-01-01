function btn_scan(){
	play_sfx("OOT_ZTarget_Center1.wav");
	add_to_inventory('Deku Nut');
}

function btn_options(){
	generate_key();
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
	play_sfx("OOT_Dialogue_No.wav");
	delete_all_from_inventory();
	select_item();
}
