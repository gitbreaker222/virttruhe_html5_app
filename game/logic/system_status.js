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
				//scan button active
				
				break;
				
			case "scan" :
				//scan button active
				break;
				
			case "title" :
				//scan button active
				
				break;
				
			case "pause" :
				//scan button disabled
				
				break;
				
			case "new_item" :
				//scan button disabled
				
				break;
				
			case "portal" :
				//scan button disabled
				
				break;
				
			default :
				break;
		}
		
		
		//event
		ui.update_state();
		
		//TODO create layer characteristics (ui color, sounds, portals/items);
	},
	
};
