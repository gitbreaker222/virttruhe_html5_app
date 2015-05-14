system_status = {
	
	state		: undefined, //app- or game state. e.g. "inventory" or "scan"
	
	prev_state1	: undefined,
	
	prev_state2	: undefined,
	
	layer		: "reality", //the virtual layer, e.g. "Reality" or "Kokiri Forest"
	
	
	
	change_state	: function(state){
		this.prev_state2 = this.prev_state1;
		this.prev_state1 = this.state;
		this.state = state;
		
		console.log("state changed to " + this.state);
		
		//load state characteristics
		switch(state){
			case "inventory" :
				if(this.prev_state1 == "scan"){
					scan.stop();
				}
				break;
				
			case "scan" :
				scan.start();
				break;
				
			case "title" :
				break;
				
			case "pause" :
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
