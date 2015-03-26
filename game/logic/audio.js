audio = {
	/*
	 * PROPERTIES
	 */
	
	
	
	/*
	 * 	METHODS
	 */	
	 change_music	: function(file){
			music.setAttribute("src", "audio/" + file);
			music.setAttribute("type", "audio/mpeg");
		 },
	 
	 play_sfx		: function(file){
		 	sfx.setAttribute("src", "audio/sfx/" + file);
			sfx.setAttribute("type", "audio/ogg");
			
			sfx.play();
		 },
	 
	 toggle_music	: function(file){
	 		var music = preferences.music;
			if (music){
				music		= false;
				music.muted	= true;
				sfx.muted	= true;
				
			}else{
				music		= true;
				music.muted	= false;
				sfx.muted	= false;
			}
			
		 },
};