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
	console.log("ERROR: Key matches no item.");
	alert("This key does not fit to any VIRTTRUHE chest");//TODO popup
	game_status = "inventory";
}

function new_item(item){
	console.log("start new item presentation");
	//preparing the stage....
	$("#img_chest").hide();
	$("#img_shiny").effect("size", {
		to: { width: 0, height: 0}
	});
	$("#img_new_item").effect("size", {
		to: { width: 0, height: 0}
	});
	$("#presentation_box").show();
	/*
	 * presentaton: the image of the new item comming out of a chest
	 * The steps must be declared as (function-) variables, to use setTimeout
	 */
		//chest appears, wait 600ms
	var step_1 = function() {
		$("#img_chest").show();
		setTimeout(step_2(), 6000);
	};
	
		//sound: open chest
	var step_2 = function() {
	   play_sfx("open_chest.ogg");
	   setTimeout(step_3(), 0);
	};
		
		//shiny background and item scales up, duration: 900ms
	var step_3 = function() {
		$("#img_new_item").attr("src", item.image);
		$("#img_shiny").animate({
      		height:'90%',
			width:'90%'
		}, 900);
		$("#img_new_item").animate({
      		height:'60%',
			width:'60%'
		}, 900);
		setTimeout(step_4(), 1000);
	};
		
		//chest fades out, duration: 600ms
	var step_4 = function() {
	   $("#img_chest").toggle( "fade" );
	   setTimeout(step_5(), 0);
	};	
		//sound: get small item1, wait 800ms
	var step_5 = function() {
	   play_sfx("OOT_Get_SmallItem1.wav");
	   console.log("please wait 5 secs");
	   setTimeout(step_dialog(), 5000);
	};
		
	/*
	 * pop up dialog
	 */
	var step_dialog = function() {
		reset_dialog_status();
		dialog.innerHTML = "You have found: <u>" + item.name + "</u>";
			//prepare dialog contents
		$("#dialog").dialog({
			title: "New Item!",
			dialogClass: "no-close",
			buttons: [{
				text: "Ok",
				icons: {
					primary: "ui-icon-heart"
				},
				click: function() {
					//hide presentation stage
					$("#presentation_box").hide();
					//go back to inventory
					change_status("inventory");
					music.play();
					$( this ).dialog( "close" );
				}
			}],
		});
			//open dialog
		$("#dialog").dialog ( "open" );
		//end of item presentation
	};
	
	/*
	 * ok now roll out the presentation from step_1 on...
	 */
	step_1();	
}



function add_rupees(){
	//does this belong here??
}
