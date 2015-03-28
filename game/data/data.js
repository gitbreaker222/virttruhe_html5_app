var data = {
	
	//the app status, e.g. "scanning" or "inventory" or "presentation"
	get_status			: function(){return this.status;},
	set_status			: function(x){
				this.status = x;
			},
	
	//the previous app status, when changing. Used to choose the next status, when going back from pause menu etc.
	get_prev_status1	: function(){return(this.prev_status1);},
	set_prev_status1	: function(x){
				this.prev_status1 = x;
			},
	
	get_prev_status2	: function(){return(this.prev_status2);},
	set_prev_status2	: function(x){
				this.prev_status2 = x;
			},
	
	//layer				: "title", //the virtual layer, e.g. "Reality" or "Kokiri Forest"
	get_layer			: function(){return(this.layer);},
	set_layer			: function(x){
				this.layer = x;
			},
			
	
};


function events(x){
	console.log("event in " + x);
	switch(x){
		case "data" :
			inventory.add("socks");
	}
	
}


var content = {
	
	selected_item		: null, // the ID of the currently selected item in the inventory
	
};


var dialog_data = [	// informations that should be shown to the user. but only information, no format here. that is in html-objecs.js
	{//page 1
		content				: "",
		buttons				: 
		[
			{
				label		: "",
				funcion		: "",
			},
		]
	},
];


var preferences = {		// these are set in the pause menu
	music				: true,
	sfx					: true,
	photo_scanner		: false,
};


