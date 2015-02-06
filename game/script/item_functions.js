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



function found_item(type, key){
	/*
	 * check current layer
	 */
	switch(global_status.current_layer) {
		
		
		case "title":
			/*
			 * check the type (portal or N/A)
			 */
			if (type == "portal"){
				play_sfx("OOT_PressStart.wav");
				change_layer(key);
				change_status("inventory");
				$("body").removeAttr("style");
			}else{
				alert("Not available. \n Key: " + key);
			}
			break;
			
			
		case "reality":
			/*
			 * check the type (portal, attribute item or collection item)
			 */
			switch(type){
				case "portal":
					change_layer(key);
					break;
				case "attribute":
					apply_attribute(key);
					break;
				default: //collection item
					/*
					 * compare key with item list or portal list
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
						console.log("ERROR: Key matches no item.");
						alert("This key does not fit to any VIRTTRUHE chest");//TODO popup
						global_status.game_status = "inventory";
					}
			}
			break;
			
			
		default:
			
		
	}			
}



function change_layer(key){
	global_status.current_layer = key;
	layer.innerHTML = layers[key];
}


function apply_attribute(key){
	
}



function new_item(item){
	console.log("start new item presentation");
	//pause function to control the .dequeue triggering in the event queue
	$.fn.pause = function (n) {
	  return this.queue(function () {
	    var el = this;
	    setTimeout(function () {
	      return $(el).dequeue();
	    }, n);
	  });
	};
	
	var soundQueue = $({});
	
	//preparing the stage....
	$("#img_chest").css("opacity", '0.0');
	$("#img_new_item").attr("src", item.image);
	$("#new_item_box img").attr("class", "scale_down");
	//lift the curtain
	$("#presentation_box").show();
	
	/*
	 * presentaton: the image of the new item comming out of a chest.
	 * to build a nice timed sequence, jQuerys ".queue" thing is used
	 */
	
		//chest appears, wait 600ms
	$("#presentation_box")
		.queue(function() {
			console.log("1");
			$("#img_chest").animate({opacity: "1.0"}, 200);
		})
		.dequeue() //<-- delayed dequeue method 1
		
		//sound: open chest
		.queue(function() {
			console.log("2");
			play_sfx("open_chest.ogg");
			//next(); //<--queues next (redundant here) and dequeues itself
		})
		.dequeue()
		//shiny background and item scales up, duration: 900ms
		.queue(function() {
			console.log("3");
			$("#new_item_box img").attr("class", "animate");
			//chest fades out, duration: 1600ms
			$("#img_chest").delay(300).animate({opacity: "0.0"}, 1400);
		})
		.dequeue()
		//sound: get small item1, wait 1500ms
		.queue(function() {
			console.log("4");
			setTimeout(function(){
				play_sfx("OOT_Get_SmallItem1.wav");}
				,1500);
		})
		.delay(1500).dequeue()
		//.pause(1500) //<-- delayed dequeue method 2 - custom func with setTimeout
	/*
	 * pop up dialog
	 */
		.queue(function(){
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
				//open dialog (after 800ms)
			$("#dialog").delay(800).dialog ( "open" );
			console.log("5");
			$(this).dequeue();
			//end of item presentation
	});
}



/*
 * FUNCTIONS FOR ATTRIBUTE ITEMS
 */
function add_health(units){
	
}

function add_key(units){
	
}

function add_rupees(units){
	
}
