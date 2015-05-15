audio = {
	music	: "",
	sfx		: "",
	
	
	play_pause		: function(track){
		if(track == undefined){
			track = "music";
		}
		
		if(ui[track][0].paused ){
			ui[track][0].play();
		}else{
			ui[track][0].pause();	
		}
	},
	
	play_sfx		: function (file){
		//load file, if not already loaded
		if(this.sfx != file){
			console.log("change file " + file );
			this.change_file("sfx", file);
		}else{
			//else, reset time marker
			ui.sfx[0].currentTime = 0;
		}
		
		ui.sfx[0].play();
	},
	
	stop			: function(track){
		ui[track][0].pause();
		ui[track][0].currentTime = 0;
	},
	
	change_file		: function(track, file){
		//reset old source
		ui[track].html("");
		
		//create new source
		var source_ogg = "<source src='data/audio/sfx/"+file+".ogg'>";
		var source_mp3 = "<source src='data/audio/sfx/"+file+".mp3'>";
		
		ui[track].append(source_ogg);
		ui[track].append(source_mp3);
		
		ui[track][0].load();
		
		this[track] = file;
	},
	
};


