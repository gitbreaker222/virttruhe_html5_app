function init(){
	console.log("program start");
	
	/*
	 * create jQuery objects
	 * TODO change "page" to "ui" and create props in ui.js
	 */
	ui.layer 		= $("#layer");
	ui.music		= $("#music_player"),
	ui.sfx			= $("#sfx_player"),
	ui.user_stats	= $("#user_stats_display"),
	ui.life			= $("#life_counter"),
	ui.keys			= $("#keys_counter"),
	ui.rupees		= $("#rupee_counter"),
	ui.item_title	= $("#item_title"),
	ui.inventory	= $("#inventory"),
	ui.items		= $("#items"),
	ui.scan			= $("#scan"),
	ui.pause		= $("#pause"),
	ui.dialog		= $("#dialog"),
	
	console.log("change status to inventory");
	//data.set_status("inventory");
	app_status.change("inventory");
	
	for (i in items){
		inventory.add(i);
	};
	
	inventory.ui_items_update();
	
	ui.music.attr("src", "data/audio/The Legend of Zelda - Gerudo Valley.mp3");
	ui.music.attr("type", "audio/mpeg");
	
}
