dialog = {
	init	: function(){
		$(".dialog").hide();
		//apply background click for close to each
		$(".dialog").attr("onclick", "$(this).hide()");
		
	}
};
