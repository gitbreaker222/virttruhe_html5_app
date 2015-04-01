function init(){
	console.log("program start");
	
	/*
	 * create jQuery objects
	 */
	page.layer 		= $("#layer");
	page.music		= $("#music_player"),
	page.sfx		= $("#sfx_player"),
	page.user_stats = $("#user_stats_display"),
	page.life		= $("#life_counter"),
	page.keys		= $("#keys_counter"),
	page.rupees		= $("#rupee_counter"),
	page.item_title	= $("#item_title"),
	page.inventory	= $("#inventory"),
	page.items		= $("#items"),
	page.scan		= $("#scan"),
	page.pause		= $("#pause"),
	page.dialog		= $("#dialog"),
	
	console.log("change status to inventory");
	//data.set_status("inventory");
	app_status.change("inventory");
	
	for (i=2; i < items.length; i++){
		inventory.add(items[i].id);
	};
	
	inventory.ui_items_update();
	
	page.music.attr("src", "data/audio/The Legend of Zelda - Gerudo Valley.mp3");
	page.music.attr("type", "audio/mpeg");
	
}
