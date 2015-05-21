function init(){
	console.log("program start");
	
	/*
	 * create jQuery objects
	 */
	ui.music		= $("#music_player"),
	ui.sfx			= $("#sfx_player"),
	ui.layer 		= $("#layer");
	ui.user_stats	= $("#user_stats_display"),
	ui.hearts		= $("#hearts"),
	ui.keys			= $("#keys_counter"),
	ui.rupees		= $("#rupee_counter"),
	ui.item_title	= $("#item_title"),
	ui.inventory	= $("#inventory"),
	ui.items		= $("#items"),
	ui.scan			= $("#scan"),
	ui.pause		= $("#pause"),
	ui.dialog		= $("#dialog"),
	ui.btn_scan		= $("#btn_scan"),
	ui.btn_pause	= $("#btn_pause"),
	ui.btn_use		= $("#btn_use"),
	ui.btn_share	= $("#btn_share"),
	ui.btn_delete	= $("#btn_delete"),
	
	console.log("change status to inventory");
	//data.set_status("inventory");
	system_status.change_state("inventory");
	system_status.change_layer("reality");
	
	
	function load_items(){
		var counter = 0;
		for (i in items){
			inventory.add(i);
			counter++;
			if(counter > 8){break;}
		};
	};
	load_items();
	
	
	ui.update_items();
	
	/*
	ui.music.attr("src", "data/audio/The Legend of Zelda - Gerudo Valley.mp3");
	ui.music.attr("type", "audio/mpeg");
	*/
}
