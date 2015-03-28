user_stats = {
	
	//TODO make properties to objects with own methods "add" "loose" etc.
	hearts				: 2, // the players/users health bar
	
	keys				: 0, // keys are used to unlock portals or chests that are locked
	
	rupees				: 0, // amount of the currency "rupees". Can be exchanged for items in the shop
	
	
	/*
	 * METHODS
	 */
	add					: function(property, value){
		this[property] += value;
		
		//event
		this.ui_update();
	},
	
	lose				: function(property, value){
		if(value > this[property]){
			value = this[property];
		}
		this[property] -= value;
	},
	
	
	ui_update			: function(){
		page.keys.html(this.keys);
		
	}
	
	
};
