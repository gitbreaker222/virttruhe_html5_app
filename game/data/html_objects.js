page = {
	/*
	 * HEAD
	 */
	layer			: $("#layer"),
	music			: $("#music_player"),
	sfx				: $("#sfx_player"),
	
	/*
	 * USER_STATS
	 */
	user_stats		: $("#user_stats"),
	life			: $("#life"),
	keys			: $("#keys"),
	rupees			: $("#rupees"),
	
	/*
	 * CONTENT
	 */
	title			: $("#title"),
	inventory		: $("#inventory"),
	items			: $("#items"),
	item_title		: $("#item_title"),
	scan			: $("#scan"),
	pause			: $("#pause"),
	dialog			: $("#dialog"),
	
	
	/*
	 * METHODS
	 */
	show			: function(element){
			this[element].show();
			
			return;
		},
	
	
	hide			: function(element){
			if (element == undefined){
				console.log("element not defined");
				return;
			}
			
			this[element].hide();
			
			return;
		},
};


/*
 * OLD STUFF BUT MAY BE USEFULL
 */  
function reset_dialog_status(){
	$("#dialog").dialog({
		title: "",
		modal: false,
		buttons: [{
			text: "Ok",
			icons: {
				primary: "ui-icon-heart"
			},
			click: function() {
				$( this ).dialog( "close" );
			}
		}],
		height: "auto",
		position: { my: "center", at: "center", of: window },
	});
}