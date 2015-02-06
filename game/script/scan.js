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
				"#00000001"	:	"#00000001", // arrows
				"#00000002"	:	"#00000002", // deku nut
				"#00000003"	:	"#00000003", // deku stick
				"#00000004"	:	"#00000004", // deku seeds
				"#00000005"	:	"#00000005", // deku shield
				"#00000006"	:	"#00000006", // deku sword
				"#00000007"	:	"#00000007", // normal boots
				"#00000008"	:	"#00000008", // magic beans
				"#00000009"	:	"#00000009", // ocarina
				"#0000000a"	:	"#0000000a", // empty bottle
				"#0000000b"	:	"#0000000b", // health potion 
				"#0000000c"	:	"#0000000c", // boomerang 
				"#0000000d"	:	"#0000000d", // lukas 
				"#0000000e"	:	"#0000000e", // tanja
				"#0000000f"	:	"#0000000f", // 10 rupees
				"#10000000"	:	"#00000010", // beer
				"#a0000001"	:	"#00000011", // start card
				"#a0000002"	:	"#00000012", // portal card
			};
	} 
	
	return(found_item(type, key));
}
