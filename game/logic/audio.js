audio = {
	music	: "", //the current music track
	sfx		: "", //the current sfx track
	
	
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
	
	change_music	: function(next_track){
		var current_player = $("#"+audio.music);
		var next_player = $("#"+next_track);
		
		//stop current track + reset
		current_player[0].stop();
		current_player[0].currentTime = 0;
		
		//set next track as current track
		audio.music = next_track;
		
		//play it
		next_player.play();
		
	},
	
	change_file		: function(track, file){
		//reset old source
		ui[track].html("");
		
		//create new source
		try{
			var source_ogg = "<source src='data/audio/sfx/"+file+".ogg' type='audio/ogg'>";
			ui[track].append(source_ogg);
		}catch(e){
			console.log(e);
		}
		try{
			var source_mp3 = "<source src='data/audio/sfx/"+file+".mp3' type='audio/mpeg'>";
			ui[track].append(source_mp3);
		}catch(e){
			console.log(e);
		}
		
		
		ui[track][0].load();
		
		this[track] = file;
	},
	
	mute_music		: function(){
		if(settings.music){
			ui.music[0].muted = true;
			settings.music = false;
		}else{
			ui.music[0].muted = false;
			settings.music = true;
		}
		
	},
	
	mute_sfx		: function(){
		if(settings.sfx){
			settings.sfx = false;
			ui.sfx[0].muted = true;
		}else{
			settings.sfx = true;
			ui.sfx[0].muted = false;
		}
		
	},
	
	
	
	/*
	 * ADVANCED AUDIO CONTEXT STUFF
	 * http://www.html5rocks.com/en/tutorials/webaudio/intro/
	 */
	setupAudioContext	:function(){
		var context;
		window.addEventListener('load', init, false);
		function init() {
		  try {
		    // Fix up for prefixing
		    window.AudioContext = window.AudioContext||window.webkitAudioContext;
		    context = new AudioContext();
		  }
		  catch(e) {
		    alert('Web Audio API is not supported in this browser');
		  }
		}
		return(context);
	}
		
};


