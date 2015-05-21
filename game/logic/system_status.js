system_status = {
	
	state		: undefined, //app- or game state. e.g. "inventory" or "scan"
	prev_state1	: undefined,
	prev_state2	: undefined,
	
	layer		: "Reality", //the virtual layer, e.g. "Reality" or "Kokiri Forest"
	setLayer	: function(x){
		this.layer = x;
		//event
		ui.change_layer(layers[x].name);
		audio.change_music(layers[x].music);
	},
	
	
	
	/*
	 * METHODS
	 */
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
		
		//unload current state characteristics (on leaf)
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
				
				//activate scan button
				ui.btn_scan.removeClass("disabled");
				break;
				
			case "new_item" :
				break;
				
			case "portal" :
				break;
				
			default :
				break;
		}
		
		//load next state characteristics (on enter)
		switch(next_state){
			case "inventory" :
				if(this.prev_status != "pause"){
					inventory.unselect();
				}
				audio.play();
				break;
				
			case "scan" :
				audio.pause();
				scan.start();
				break;
				
			case "title" :
				break;
				
			case "pause" :
				audio.pause();
				audio.play_sfx("OOT_PauseMenu_Open");
				//disable scan button
				ui.btn_scan.addClass("disabled");
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
	
	
	
	change_layer	: function(next_layer){
		//validation
		if(layers[next_layer] == undefined){
			console.log(next_layer + " does not exist in current item-set");
			return;
		}
		this.setLayer(next_layer);
	},
	
};
