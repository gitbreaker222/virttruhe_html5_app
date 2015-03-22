/*
 * mostly jQuery objects. They get manipulated by a -logic- component,
 * after another -logic- component wrote the content for it in -data-
 * and visualized by -view-
 */
page = {
	/*
	 * HEAD
	 */
	"layer"			: $("#layer"),
	"music"			: $("#music_player"),
	"sfx"			: $("#sfx_player"),
	
	/*
	 * USER_STATS
	 */
	"life"			: $("#life"),
	"keys"			: $("#keys"),
	"rupees"		: $("#rupees"),
	
	/*
	 * CONTENT
	 */
	"title"			: $("#title"),
	"inventory"		: $("#inventory"),
	"inventory_list": $("items"),
	"scan"			: $("#scan"),
	"pause"			: $("#pause"),
	"dialog"		: $("#dialog"),
};


//save the actual jQuery opject, instead of the link TODO check
function save_objects(){
	for (obj in page){
		page.obj = obj; 
	}
}