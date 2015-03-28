audio = {
	/*
	 * PROPERTIES
	 */
	
	
	
	/*
	 * 	METHODS
	 */	
	 change_music	: function(file){
			page.music.attr("src", "data/audio/" + file);
			page.music.attr("type", "audio/mpeg");
		 },
		 
	 
	 play_sfx		: function(file){
		 	page.sfx.attr("src", "data/audio/sfx/" + file);
			page.sfx.attr("type", "audio/ogg");
			
			page.sfx.trigger("play");
		 },
		 
	 
	 toggle_mute_sound	: function(){
	 		page.music.prop("muted",!page.music.prop("muted"));
		 },
};


