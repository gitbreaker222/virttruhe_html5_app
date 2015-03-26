function init(){
	console.log("program start");
	
	/*
	 * create jQuery objects
	 */
	page.layer 		= $("#layer");
	page.music		= $("#music_player"),
	page.sfx		= $("#sfx_player"),
	page.user_stats = $("#user_stats"),
	page.life		= $("#life"),
	page.keys		= $("#keys"),
	page.rupees		= $("#rupees"),
	page.title		= $("#title"),
	page.inventory	= $("#inventory"),
	page.items		= $("#items"),
	page.scan		= $("#scan"),
	page.pause		= $("#pause"),
	page.dialog		= $("#dialog"),
	
	console.log("change status to inventory");
	data.set_status("inventory");
	app_status.change("inventory");
	
	for (i in items){
		inventory.add(items[i].id);
	};
	inventory.ui_items_update();
	
}
