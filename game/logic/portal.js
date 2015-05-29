portal = {
	to_layer	: null,
	
	
	
	enter		: function(to_layer){
		if(to_layer == "current"){
			to_layer = portal.to_layer;
		}
		system_status.change_layer(to_layer);
		system_status.change_state("inventory");
	},
	
	leave		: function(){
		portal.to_layer = null;
		system_status.change_state("inventory");
	}
	
};
