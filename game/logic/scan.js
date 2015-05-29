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
					var success = false;
			        //check for "#" and 8 character code (should be hexadecimal like: 000011af) 
					var success = check_code(qr_message);
					//if nothing, check for ",," and direct item id.
					if(success == false){success = check_share(qr_message);}
					//if nothing again, return to inventory
					if(success == false){
			        	system_status.change_state("inventory");
			        }
			        
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
			start_slice = qr_message.indexOf("#");
			if(start_slice < 0){
				//alert("This code has no key in it: \n" + qr_message);
				return(false);
			}
			//test if the key/text after the # is long enough
			stop_slice = start_slice + 9;
			if(qr_message.length < stop_slice){
				alert("No valid key in this code (too short): \n" + qr_message);
				return(false);
			}
			
			var key = qr_message.slice(start_slice, stop_slice);
			console.log("key found in code: " + key);
			
			map_key(key);
			return(true);
		}
		
		function check_share(qr_message){
			var start_slice;
			var stop_slice;
			
			//test if there is the ,, prefix
			start_slice = qr_message.indexOf(",,");
			if(start_slice < 0){
				alert("This code has no key in it: \n" + qr_message);
				return(false);
			}
			
			//cut the prefix away
			var item_id = qr_message.slice(start_slice+2);
			console.log("item id found in code: " + item_id);
			
			if(items[item_id] == undefined){
				console.log("No valid key in this code (item not found): \n" + qr_message);
				return(false);
			}
			
			inventory.add(item_id);
			system_status.change_state("new_item");
			ui.present_new_item(item_id);
			
			return(true);
		}
		
		
		function map_key(key){
			console.log("mapping "+key+" for current layer: "+system_status.layer);
			/*
			 * This maps the key from the VIRTTRUHE to the Item key,
			 * depending on the current location 
			 */
			var map = item_map;
			var layer = system_status.layer;
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
				portal.to_layer = item_id;
				system_status.change_state("portal");
				ui.present_portal(item_id);
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




