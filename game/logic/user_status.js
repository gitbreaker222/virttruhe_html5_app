user_status = {
	
	hearts				: 2, // the players/users health bar
	
	keys				: 0, // keys are used to unlock portals or chests that are locked
	
	rupees				: 99, // amount of the currency "rupees". Can be exchanged for items in the shop
	
	
	/*
	 * METHODS
	 */
	add					: function(value, property){
		this[property] += value;
		
		//event
		
	},
	
	lose				: function(value, property){
		if(value > this[property]){
			value = this[property];
		}
		this[property] -= value;
	},
		
	
};
