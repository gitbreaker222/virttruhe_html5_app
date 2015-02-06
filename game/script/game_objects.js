/* VCLSD-Pattern: DATA
 * VIEW
 * CONTROL
 * LOGIC
 * SERVICE
 * DATA		<--
 */

/*
 * THESE ARE HTML-OBJECTS
 */
//PAGE OBJECTS
var page_title;
var page_inventory;
var page_scan;
var page_pause;
var dialog;

var layer;

//AUDIO OBJECTS
var music;
var sfx;

//INITIALISE ON BODY LOAD
function init_objects(){
	page_title = document.getElementById("title");
	page_inventory = document.getElementById("inventory");
	page_scan = document.getElementById("scan");
	page_pause = document.getElementById("pause");
	dialog = document.getElementById("dialog");
	
	layer = document.getElementById("layer");
	
	music = document.getElementById("audio_player");
	sfx = document.getElementById("audio_sfx");
}