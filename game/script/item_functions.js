/* VCLSD-Pattern: LOGIC
 * VIEW		
 * CONTROL	
 * LOGIC	<--
 * SERVICE	
 * DATA		
 */

function generate_key(){
	/*
	 * generates a hexadecimal (0-9 a-f) string
	 * prefixed with a hashtag (#), so the scanner
	 * can search for it in the QR-Code.
	 * 
	 * This opens the possibility to let a QR-Code
	 * contain a human readable message and a key, like:
	 * "VIRTTRUHE game from Ruben La Biunda --- #22FA3BC8"
	 */
	
	/*
	 * TODO USE HASHING (the items name) instead of RANDOM KEY!!! THIS MAKES
	 * ITEM-LIST GENERATION AND QR-CODE PRODUCTION LESS COMPLEX
	 */ 
	
	var key = "#";
	
	for(i = 0; i < 8; i++){
		var x = Math.random()*16;
	    x = parseInt(x);
	    x = x.toString(16); // here x is smth between 0 and f
	    key = key + x;
	};
	
	window.alert("new key generated: " + key);
	return(key);
}


function found_key(qr_message){
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
	
	/*
	 * compare key with item list
	 */
	var item;
	for (i in items){
		if (items[i].key == key){
			item = items[i];
			
			/*
			 * tell the new-item() function, which item to present
			 */
			new_item(item);
			/*
			 * tell add_to_inventory() which item to add
			 */
			add_to_inventory(item.name);
			return;
		}
	}
	console.log("ERROR: Key matches no item.")
	alert("This key does not fit to any VIRTTRUHE chest");//TODO popup
	game_status = "inventory";
}

function new_item(item){
	/*
	 * presentaton: the image of the new item comming out of a chest
	 */
		//chest appears, wait 600ms
	$('<img src="img/chest.png" alt="chest"></img>').appendTo("#presentation_div");
		
		//sound: open chest
	play_sfx("open_chest.ogg");
		
		//shiny background and item scales up, duration: 900ms
	$('<img src="img/shiny.png" alt="shiny"></img>').appendTo("#presentation_div");
	$('<img id="new_item" src="" alt="item"></img>').appendTo("#presentation_div");
	$("#new_item").attr("src", item.image);
		
		//chest fades out, duration: 600ms
		
		//sound: get small item1, wait 800ms
	play_sfx("OOT_Get_SmallItem1.wav");
		
		//pop up
	
	
	
	
	
	
	
	/*
	 * pop up dialog
	 */
	reset_dialog_status();
	dialog.innerHTML = "You have found: <u>" + item.name + "</u>";
	
	$("#dialog").dialog({
		title: "New Item!",
	});
	
	$("#dialog").dialog ( "open" );
	
	setTimeout(function(){
		//clear presentation
		 $("#presentation_div").empty();
		
		change_status("inventory");
		music.play();
		}, 1000
	);
}



function add_rupees(){
	//does this belong here??
}
