/* VCLSD-Pattern: LOGIC
 * VIEW		
 * CONTROL	
 * LOGIC	<--
 * SERVICE	
 * DATA		
 */

function change_music(){
	music.setAttribute("src", "audio/The Legend of Zelda - Gerudo Valley.mp3");
	music.setAttribute("type", "audio/mpeg");
};

function play_sfx(file){
	sfx.setAttribute("src", "audio/sfx/" + file);
	sfx.setAttribute("type", "audio/wav");
	
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
