dialog = {
	init	: function(){
		//hide all dialogs
		$(".dialog").hide();
		//apply background click for close to each
		$(".dialog").attr("onclick", "$(this).hide()");
		//fix background click for new_item dialog
		$("#d_ni").attr("onclick", "");
	},
	
};
