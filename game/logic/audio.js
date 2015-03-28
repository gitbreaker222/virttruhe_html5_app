audio = {
	/*
	 * PROPERTIES
	 */
	
	
	
	/*
	 * 	METHODS
	 */	
	 /*
	  * TODO repari these methods. update variables, properties, etc...
	  */
	 change_music	: function(file){
			page.music.attr("src", "audio/" + file);
			page.music.attr("type", "audio/mpeg");
		 },
	 
	 play_sfx		: function(file){
		 	page.sfx.attr("src", "data/audio/sfx/" + file);
			page.sfx.attr("type", "audio/ogg");
			
			page.sfx.trigger("play");
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