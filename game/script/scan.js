/* VCLSD-Pattern: LOGIC
 * VIEW		
 * CONTROL	
 * LOGIC	<--
 * SERVICE	
 * DATA		
 */

function decode_qr(){
	scan_status = true;
	var canvas = document.getElementById("qr-canvas");
	var context = canvas.getContext("2d");
	var image = document.getElementById("preview_img");
	var form = document.getElementById("myForm");
	var file = form.childNodes[1].files[0];
	var reader = new FileReader();
	
	if (file) {
	    reader.readAsDataURL(file);
	}else {
	    image.src = "";
  	}
	
    reader.onloadend = function(){
    	image.src = reader.result;
    	//wait till the image is loaded
    	image.onload = function (){
    		//delete picture from previous scan
    		context.clearRect(0, 0, canvas.width, canvas.height);
    		//...then draw it on the canvas
	    	context.drawImage(image,10,10,307,250);
	    	
	    	//prepare reaction on successfull scan
			qrcode.callback = function(data){
				console.log("QR-Code says: " + data);
				//remove the preview image
				image.src = "";
            	check_code(data);
            };
            try {
	    		//automaticly decodes canvas with id="qr-canvas"
				qrcode.decode();
				return;
			}catch(e) {
              console.log(e);
              alert("Did not work. Try again..."); //TODO popup
              change_status("inventory");
            }
		};	
    };
    scan_status = false;
    console.log("scan_status set back to FALSE");
    
}



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
	switch(global_status.current_layer) {
		case "title":
			if (key == "#a0000000"){
				type = "portal";
				key = "reality";
			}else{
				type = "N/A";
			}
			break;
	    case "kokiri_forest":
	        
	        break;
	    case "shop":
	        
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
				"#0000000f"	:	["attr", "rupees"], // 10 rupees
				"#10000000"	:	["item", "beer"], // beer
				"#a0000001"	:	["portal", "N/A"], // start card
				"#a0000002"	:	["portal", "kokiri_forest"], // portal card
			};
			type = map[key][0];
			key = map[key][1];
			console.log("the key is: "+key);
	} 
	
	return(found_item(type, key));
}
