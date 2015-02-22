/* VCLSD-Pattern: LOGIC
 * VIEW		
 * CONTROL	
 * LOGIC	<--
 * SERVICE	
 * DATA		
 */

function change_music(file){
	music.setAttribute("src", "audio/" + file);
	music.setAttribute("type", "audio/mpeg");
};

function play_sfx(file){
	sfx.setAttribute("src", "audio/sfx/" + file);
	sfx.setAttribute("type", "audio/ogg");
	
	sfx.play();
}

function music_on_off(){
	if (status_muted){
		status_muted = false;
		music.muted = false;
		sfx.muted = false;
	}else{
		status_muted = true;
		music.muted = true;
		sfx.muted = true;
	}
}
