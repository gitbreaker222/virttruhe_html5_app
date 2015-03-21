var data = {
	
	
	"status"			: null, //the app status, e.g. "scanning" or "inventory" or "presentation"
	
	"prev_status1"		: null, //the previous app status, when changing. Used to choose the next status, when going back from pause menu etc.
	
	"prev_status2"		: null,
	
	"layer"				: "title", //the virtual layer, e.g. "Reality" or "Kokiri Forest"
	
	
	get					: function(attribute){
							if (attribute == undefined){
								var list = [];
								for (x in this){
									list.push(x);
								}
								return(list);
							}
							console.log(data[attribute]);
							},
	set					: function(attr, val){
								this[attr] = val;
								events("data");
							}
	
};


function events(x){
	console.log("event in " + x);
	switch(x){
		case "data" :
			inventory.add("socks");
	}
	
}

var user_stats = {
	
	"hearts"			: 2, // the players/users health bar
	
	"keys"				: 0, // keys are used to unlock portals or chests that are locked
	
	"rupees"			: 0, // amount of the currency "rupees". Can be exchanged for items in the shop
	
};


var content = {
	
	"selected_item"		: null, // the ID of the currently selected item in the inventory
	
};


var dialog_data = [	// informations that should be shown to the user. but only information, no format here. that is in html-objecs.js
	{//page 1
		"content"			: "",
		"buttons"			: 
		[
			{
				"label"		: "",
				"funcion"	: "",
			},
		]
	},
];


var preferences = {		// these are set in the pause menu
	"music"				: true,
	"sfx"				: true,
	"photo_scanner"		: false,
};


