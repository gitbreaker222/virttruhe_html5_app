/* VCLSD-Pattern: DATA
 * VIEW
 * CONTROL
 * LOGIC
 * SERVICE
 * DATA		<--
 */

//PAGE OBJECTS
var page_inventory;
var page_scan;
var page_pause;
var dialog;

//AUDIO OBJECTS
var music;
var sfx;

//INITIALISE ON BODY LOAD
function init_objects(){
	page_inventory = document.getElementById("inventory");
	page_scan = document.getElementById("scan");
	page_pause = document.getElementById("pause");
	dialog = document.getElementById("dialog");
	
	music = document.getElementById("audio_player");
	sfx = document.getElementById("audio_sfx");
}
