scan = {
	/*
	 * PROPERTIES
	 */
	status				: true, //scan status. set to false, to manually stop html5_qrcode 
	get_status		: function(){return(this.status);},
	
	last_code_message	: "",
	
	
	/*
	 * METHODS
	 */
	start	: function(){
		
		this.status = true;
		audio.play_sfx("OOT_ZTarget_Center1");
	
		$('#reader')
			//clear canvas
			.html("")
			
			.html5_qrcode(
				function(qr_message){
			         // do something when code is read
			         
			        check_code(qr_message);
			        
			        //system_status.change_state("inventory");
			        return; 
			    },
			    
			    function(error){
			        //read errors 
			        console.log(error);
				},
			    
			    function(videoError){
			        console.log(videoError);
			    }
		    
			);
			
		/*
		 * SUBS
		 */
		function check_code(qr_message){
			/*
			 * search for '#'. pick the key out of the text string
			 */
			var start_slice;
			var stop_slice;
				//test if there is the # prefix
			try{
				start_slice = qr_message.indexOf("#");
			}catch(error){
				console.log(error);
				alert("This code has no key in it");
				return;
			}
				//test if the key/text after the # is long enough
			try{
				stop_slice = start_slice + 9;
			}catch(error){
				console.log(error);
				alert("No valid key in this code (too short)");
				return;
			}
			var key = qr_message.slice(start_slice, stop_slice);
			console.log("key found in code: " + key);
			
			map_key(key);
			return;
		}
		
		
		
		function map_key(key){
			console.log("mapping "+key+" for current layer: "+system_status.layer);
			/*
			 * This maps the key from the VIRTTRUHE to the Item key,
			 * depending on the current location 
			 */
			var map = item_map;
			var layer = system_status.layer;
			console.log(layer);
			var item_id = map[layer][key];
			var type = "item";
			
			// if code starts with a, its a portal. e.g. #a0000001
			if(key[1] == "a"){
				type = "portal";
			}
			
			console.log("found "+ type +": "+ item_id);
			if(type == "item"){
				inventory.add(item_id);
				system_status.change_state("new_item");
				ui.present_new_item(item_id);
				
			}else if(type == "portal"){
				system_status.change_layer(item_id);
				//TODO
				
			}else{
				console.log("item type undefined");
			}
			
			
			return;
		}
		
	},
		
		
	stop	: function(){
		this.status = false;
		audio.play_sfx("OOT_ZTarget_Center2");
	},
	
	
	
	
};




