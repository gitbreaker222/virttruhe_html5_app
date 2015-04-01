app_status = {
	change		: function (new_status) {
			var status = data.get_status();
			var previous_status = data.get_prev_status1();
			
			data.set_prev_status1(status);
			
			data.set_status(new_status);
			
			//event
			this.hide_all();
			page.show(new_status);
			
			if(status == "title" || status == "scan"){
				console.log(status);
				page.hide("user_stats");
				
			}else{
				
				
				
				//TODO bug: wont show user stats when toggle back from scan to inventory
				
				
				
				page.show("user_stats");
			};
			
			return;
		},
		
		
		
	hide_all	: function (){
		page.hide("scan");
		page.hide("inventory");
		
	}
};
