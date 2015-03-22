function init(){
	console.log("program start");
	
	/*
	 * create jQuery objects
	 */
	page.layer = $("#layer");
	page.music = $("#music_player"),
	page.sfx= $("#sfx_player"),
	page.life= $("#life"),
	page.keys= $("#keys"),
	page.rupees = $("#rupees"),
	page.title= $("#title"),
	page.inventory= $("#inventory"),
	page.scan= $("#scan"),
	page.pause= $("#pause"),
	page.dialog= $("#dialog"),
	
	console.log("change status to inventory");
	data.set("status", "inventory");
	
}
