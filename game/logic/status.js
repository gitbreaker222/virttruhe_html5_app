app_status = {
	change		: function (new_status) {
			var status = data.get_status();
			var previous_status = data.get_prev_status1();
			
			data.set_prev_status1(status);
			
			data.set_status(new_status);
			
			console.log("changed status to: " + new_status);
			
			//event
			this.hide_all();
			page.show(new_status);
			
			if(new_status == "title" || new_status == "scan"){
				page.hide("user_stats");
				
			}else{
				page.show("user_stats");
			};
			
			return;
		},
		
		
		
	hide_all	: function (){
		page.hide("scan");
		page.hide("inventory");
		
	}
};



/*
 * THIS FUNCTION IS TO PRINT CONSOLE MESSAGES TO THE SCREEN AND IS USEFULL FOR TESTING
 * PURPOSES ON SMARTPHONES
 */
message = {
	/*
	 * PROPERTIES
	 */
	
	log			: [],
	
	target		: page.layer, //link does not work for some reason  
	
	
	/*
	 * METHODS
	 */
	
	print		: function (text) {
			console.log(text);
			
			this.log.push(text);
			
			page.layer.html(text);
		},
	
};
function printnote(text){message.print(text);};













