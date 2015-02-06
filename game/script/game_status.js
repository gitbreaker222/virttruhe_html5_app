/* VCLSD-Pattern: DATA
 * VIEW
 * CONTROL
 * LOGIC
 * SERVICE
 * DATA		<--
 */
//GAME STATUS
var global_status = {
	"game_status"		: "start",
	"previous_status"	: "",
	"current_layer"		: "title",
	"hearts"			: 2,
	"keys"				: 0,
	"rupees"			: 0,
	"selected_item"		: "",
	"scan_status"		: false,
};

var preferences = {
	"music"				: true,
	"sfx"				: true,
};



/*
 * old status variables. still used, until
 * data management is updated
 */
var game_status = "inventory";
var previous_status;

//INVENTORY
var selected_item;

//SCANNER
var scan_status = false;

//AUDIO
var status_muted = false;