audio = {
	/*
	 * PROPERTIES
	 */
	playing			: true,
	
	
	/*
	 * 	METHODS
	 */	
	 change_music	: function(file){
			page.music.attr("src", "data/audio/" + file);
			page.music.attr("type", "audio/mpeg");
		 },
		 
	play			: function(){
			page.music.trigger("play");
			this.playing = true;
		},
		
	pause			: function(){
			page.music.trigger("pause");
			this.playing = false;
		},
		 
	play_pause		: function(){
		
			if (this.playing){
				page.music.trigger("pause");
				
				this.playing = false;
			}else{
				page.music.trigger("play");
				
				this.playing = true;
			}
			
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


