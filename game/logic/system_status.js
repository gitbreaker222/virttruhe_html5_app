system_status = {
	
	state		: undefined, //app- or game state. e.g. "inventory" or "scan"
	
	prev_state1	: undefined,
	
	prev_state2	: undefined,
	
	layer		: "reality", //the virtual layer, e.g. "Reality" or "Kokiri Forest"
	
	
	
	change_state	: function(next_state){
		if(this.state == "pause" && next_state == "scan"){
			this.state = next_state;
			this.prev_state1 = this.prev_state2;
			this.prev_state2 = "pause";
		}else{
			this.prev_state2 = this.prev_state1;
			this.prev_state1 = this.state;
			this.state = next_state;
		}
		
		
		console.log("state changed to " + this.state);
		
		//unload current state characteristics
		switch(this.prev_state1){
			case "inventory" :
				break;
				
			case "scan" :
				scan.stop();
				break;
				
			case "title" :
				break;
				
			case "pause" :
				audio.play_sfx("OOT_PauseMenu_Close");
				if(ui.music[0].paused){
					audio.play_pause();
				}
				
				break;
				
			case "new_item" :
				break;
				
			case "portal" :
				break;
				
			default :
				break;
		}
		
		//load next state characteristics
		switch(next_state){
			case "inventory" :
				break;
				
			case "scan" :
				scan.start();
				break;
				
			case "title" :
				break;
				
			case "pause" :
				if(ui.music[0].paused == false){
					audio.play_pause();
				}
				audio.play_sfx("OOT_PauseMenu_Open");
				break;
				
			case "new_item" :
				break;
				
			case "portal" :
				break;
				
			default :
				break;
		}
		
		
		//event
		ui.update_state();
		
		//TODO create layer characteristics (ui color, sounds, portals/items);
		
	},
	
};
