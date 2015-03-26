app_status = {
	"change"	: function (new_status) {
			var status = data.get_status();
			var previous_status = data.get_prev_status1();
			
			data.set_prev_status1(status);
			
			data.set_status(new_status);
			
			//event
			page.hide(previous_status);
			page.show(status);
			
			if(status == "title" || status == "scan"){
				console.log(status);
				page.hide("user_stats");
				
			}else{
				page.show("user_stats");
			};
			
			return;
		}
};
