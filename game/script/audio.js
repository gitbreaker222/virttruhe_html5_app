function change_music(){
	var music = document.getElementById("audio_player");
	
	music.setAttribute("src", "audio/The Legend of Zelda - Gerudo Valley.mp3");
	music.setAttribute("type", "audio/mpeg");
};

function play_sfx(file){
	var sfx = document.getElementById("audio_sfx");
	
	sfx.setAttribute("src", "audio/sfx/" + file);
	sfx.setAttribute("type", "audio/wav");
	
	sfx.play();
}
