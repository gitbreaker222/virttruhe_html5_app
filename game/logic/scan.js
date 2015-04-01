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
		
			$('#reader').html5_qrcode(
				
				function(qr_message){
			         // do something when code is read
			         console.log("### code is read");
			         console.log(data);
			    },
			    
			    function(error){
			        //read errors 
			        console.log(error);
				},
			    
			    function(videoError){
			        console.log(videoError);
			    }
			    
			);
			
			//TODO clear canvas to prevent next scan to use last saved picture, which is likely with the last readable qr code
			
			console.log("### end of scan");
		},
		
		
	stop	: function(){
			
			data.scan_status = false;
			
		},
	
	
	
	
};



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
		alert("This code has no key in it!");
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
	
	return(map_key(key));
}



function map_key(key){
	console.log("mapping the key for current layer: "+global_status.current_layer);
	/*
	 * This maps the key from the VIRTTRUHE to the Item key,
	 * depending on the current location 
	 */
	var map = {};
	switch(data.layer) {
		case "title":
			if (key == "#a0000000"){
				type = "portal";
				key = "reality";
			}else{
				type = "N/A";
			}
			break;
	    case "kokiri_forest":
	        map = {
	        	"#00000000"	:	["item", "manual"], // manual
				"#00000001"	:	["item", "arrows"], // arrows
				"#00000002"	:	["item", "deku_nut"], // deku nut
				"#00000003"	:	["item", "deku_stick"], // deku stick
				"#00000004"	:	["item", "deku_seeds"], // deku seeds
				"#00000005"	:	["item", "deku_shield"], // deku shield
				"#00000006"	:	["item", "deku_sword"], // deku sword
				"#00000007"	:	["item", "normal_boots"], // normal boots
				"#00000008"	:	["item", "magic_beans"], // magic beans
				"#00000009"	:	["item", "ocarina"], // ocarina
				"#0000000a"	:	["item", "empty_bottle"], // empty bottle
				"#0000000b"	:	["item", "health"], // health potion 
				"#0000000c"	:	["item", "boomerang"], // boomerang 
				"#0000000d"	:	["item", "lukas"], // lukas 
				"#0000000e"	:	["item", "tanja"], // tanja
				"#0000000f"	:	["attr", "rupees"], // 10 rupees
				"#10000000"	:	["item", "beer"], // beer
				"#a0000000"	:	["portal", "gerudo_valley"], // start card
				"#a0000001"	:	["portal", "reality"], // portal card
			};
			type = map[key][0];
			key = map[key][1];
			console.log("the key is: "+key);
	        break;
	    case "shop":
	        map = {
	        	"#00000000"	:	["item", "manual"], // manual
				"#00000001"	:	["item", "arrows"], // arrows
				"#00000002"	:	["item", "deku_nut"], // deku nut
				"#00000003"	:	["item", "deku_stick"], // deku stick
				"#00000004"	:	["item", "deku_seeds"], // deku seeds
				"#00000005"	:	["item", "deku_shield"], // deku shield
				"#00000006"	:	["item", "deku_sword"], // deku sword
				"#00000007"	:	["item", "normal_boots"], // normal boots
				"#00000008"	:	["item", "magic_beans"], // magic beans
				"#00000009"	:	["item", "ocarina"], // ocarina
				"#0000000a"	:	["item", "empty_bottle"], // empty bottle
				"#0000000b"	:	["item", "health"], // health potion 
				"#0000000c"	:	["item", "boomerang"], // boomerang 
				"#0000000d"	:	["item", "lukas"], // lukas 
				"#0000000e"	:	["item", "tanja"], // tanja
				"#0000000f"	:	["item", "rupees"], // 10 rupees
				"#10000000"	:	["item", "beer"], // beer
				"#a0000000"	:	["portal", "reality"], // start card
				"#a0000001"	:	["portal", "kokiri_forest"], // portal card
			};
			type = map[key][0];
			key = map[key][1];
			console.log("the key is: "+key);
	        break;
	    case "gerudo_valley":
	        map = {
	        	"#00000000"	:	["item", "manual"], // manual
				"#00000001"	:	["item", "arrows"], // arrows
				"#00000002"	:	["item", undefined], // deku nut
				"#00000003"	:	["item", undefined], // deku stick
				"#00000004"	:	["item", undefined], // deku seeds
				"#00000005"	:	["item", undefined], // deku shield
				"#00000006"	:	["item", undefined], // deku sword
				"#00000007"	:	["item", "normal_boots"], // normal boots
				"#00000008"	:	["item", "magic_beans"], // magic beans
				"#00000009"	:	["item", "ocarina"], // ocarina
				"#0000000a"	:	["item", "empty_bottle"], // empty bottle
				"#0000000b"	:	["item", "health"], // health potion 
				"#0000000c"	:	["item", "boomerang"], // boomerang 
				"#0000000d"	:	["item", "lukas"], // lukas 
				"#0000000e"	:	["item", "tanja"], // tanja
				"#0000000f"	:	["item", "rupees"], // 10 rupees
				"#10000000"	:	["item", "beer"], // beer
				"#a0000000"	:	["portal", "kokiri_forest"], // start card
				"#a0000001"	:	["portal", "spirit_temple"], // portal card
			};
			type = map[key][0];
			key = map[key][1];
			console.log("the key is: "+key);
	        break;
	    case "spirit_temple":
	        map = {
	        	"#00000000"	:	["item", "manual"], // manual
				"#00000001"	:	["item", "arrows"], // arrows
				"#00000002"	:	["item", undefined], // deku nut
				"#00000003"	:	["item", undefined], // deku stick
				"#00000004"	:	["item", undefined], // deku seeds
				"#00000005"	:	["item", undefined], // deku shield
				"#00000006"	:	["item", undefined], // deku sword
				"#00000007"	:	["item", "normal_boots"], // normal boots
				"#00000008"	:	["item", "magic_beans"], // magic beans
				"#00000009"	:	["item", "ocarina"], // ocarina
				"#0000000a"	:	["item", "empty_bottle"], // empty bottle
				"#0000000b"	:	["item", "health"], // health potion 
				"#0000000c"	:	["item", "boomerang"], // boomerang 
				"#0000000d"	:	["item", "lukas"], // lukas 
				"#0000000e"	:	["item", "tanja"], // tanja
				"#0000000f"	:	["item", "rupees"], // 10 rupees
				"#10000000"	:	["item", "beer"], // beer
				"#a0000000"	:	["portal", "reality"], // start card
				"#a0000001"	:	["portal", "gerudo_valley"], // portal card
			};
			type = map[key][0];
			key = map[key][1];
			console.log("the key is: "+key);
	        break;
	    default: //reality
	        map = {
	        	"#00000000"	:	["item", "manual"], // manual
				"#00000001"	:	["item", "arrows"], // arrows
				"#00000002"	:	["item", "deku_nut"], // deku nut
				"#00000003"	:	["item", "deku_stick"], // deku stick
				"#00000004"	:	["item", "deku_seeds"], // deku seeds
				"#00000005"	:	["item", "deku_shield"], // deku shield
				"#00000006"	:	["item", "deku_sword"], // deku sword
				"#00000007"	:	["item", "normal_boots"], // normal boots
				"#00000008"	:	["item", "magic_beans"], // magic beans
				"#00000009"	:	["item", "ocarina"], // ocarina
				"#0000000a"	:	["item", "empty_bottle"], // empty bottle
				"#0000000b"	:	["item", "health"], // health potion 
				"#0000000c"	:	["item", "boomerang"], // boomerang 
				"#0000000d"	:	["item", "lukas"], // lukas 
				"#0000000e"	:	["item", "tanja"], // tanja
				"#0000000f"	:	["item", "rupee"], // 10 rupees
				"#10000000"	:	["item", "beer"], // beer
				"#a0000000"	:	["portal", "shop"], // start card
				"#a0000001"	:	["portal", "kokiri_forest"], // portal card
			};
			type = map[key][0];
			key = map[key][1];
			console.log("the key is: "+key);
	} 
	
	return(found_item(type, key));
}
