system_status = {
	
	state		: undefined, //app- or game state. e.g. "inventory" or "scan"
	
	prev_state1	: undefined,
	
	prev_state2	: undefined,
	
	layer		: "reality", //the virtual layer, e.g. "Reality" or "Kokiri Forest"
	
	
	
	change_state	: function(state){
		this.prev_state2 = this.prev_state1;
		
		this.prev_state1 = this.state;
		
		this.state = state;
	},
	
};
