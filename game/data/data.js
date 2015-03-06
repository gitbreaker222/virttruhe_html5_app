var data = {
	
	
	"status"			: null, //the app status, e.g. "scanning" or "inventory" or "presentation"
	
	"prev_status"		: null, //the previous app status, when changing. Used to choose the next status, when going back from pause menu etc.
	
	"layer"				: "title", //the virtual layer, e.g. "Reality" or "Kokiri Forest"
	
};


var user_stats = {
	
	"hearts"			: 2, // the players/users health bar
	
	"keys"				: 0, // keys are used to unlock portals or chests that are locked
	
	"rupees"			: 0, // amount of the currency "rupees". Can be exchanged for items in the shop
	
};


var content = {
	
	"selected_item"		: null, // the ID of the currently selected item in the inventory
	
};


var dialog = [	// informations that should be shown to the user. but only information, no format here. that is in html-objecs.js
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
