/* VCLSD-Pattern: DATA
 * VIEW
 * CONTROL
 * LOGIC
 * SERVICE
 * DATA		<--
 */
//GAME STATUS
var global_status = {
	"current_location"	: "start",
	"previous_location"	: "",
	"selected_item"		: "",
	"scan_status"		: false,
	"muted"				: false,
};

var game_status = "inventory";
var previous_status;

//INVENTORY
var selected_item;

//SCANNER
var scan_status = false;

//AUDIO
var status_muted = false;