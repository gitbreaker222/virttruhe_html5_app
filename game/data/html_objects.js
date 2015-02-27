var page = {
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