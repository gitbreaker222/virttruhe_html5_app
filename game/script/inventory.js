/* VCLSD-Pattern: LOGIC
 * VIEW		
 * CONTROL	
 * LOGIC	<--
 * SERVICE	
 * DATA		
 */

function generate_new_item_list(){
	//search item folder for images and create json "items.js" based on their names
	var item_path = "img/";
	var list_path = "";
	window.alert("no function yet");
	//unfinished***************
};

function reload_inventory(){
	var inventory = document.getElementById("inventory");
	var node;
	
	//resetting the html content to prevent producing an ongoing list with the old inventory items
	inventory.innerHTML = "";
	
	//look at each item object
	for (i = 0; i < items.length; i++){
		//create empty list item 
		var node = document.createElement("LI");
		inventory.appendChild(node);
		if (items[i].found == true){
			//if item is labeled "found=true" create clickable icon in li
			var node = document.createElement("IMG");
			node.setAttribute("src", items[i].icon);
			node.setAttribute("onclick", "select_item(this, '"+ items[i].name +"')");
			inventory.lastChild.appendChild(node);
			//result: <li><img src="../img/items/small/arrows.png" onclick="select_item("Arrows")" /></li>
		}
	}
	
};


function add_to_inventory(item){
	//search item list for a match with given item
	for (i = 0; i < items.length; i++){
		if (items[i].name == item){
			items[i].found = true;
			console.log("added to inventory: " + item);
			
			reload_inventory();
			return;
		};
	}
	console.log("cannot find '" + item + "'");
};


function delete_from_inventory(item){

};


function delete_all_from_inventory(){
	play_sfx("OOT_MainMenu_Letter.wav");
	/*
	 * confirm action with an jQueri UI -popup box
	 */
	reset_dialog_status();
	dialog.innerHTML = '<span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 20px 0;"></span>'
	+"Delete all items from the inventory. \n Are you sure?";
	$( "#dialog" ).dialog({
		resizable: false,
		//height:140,
		modal: true,
		buttons: {
			"Delete all items": function() {
				play_sfx("OOT_Dialogue_No.wav");
				//make each found status "false"
				for (i = 0; i < items.length; i++){
					items[i].found = false;
					console.log("removed from inventory: " + items[i].name);
				}
				reload_inventory();
				$( this ).dialog( "close" );
			},
			Cancel: function() {
				//abort action
				play_sfx("OOT_Dialogue_Done.wav");
				$( this ).dialog( "close" );
			}
		}
	});
	$( "#dialog" ).dialog( "open" );
}

function unselect_all(){
	//remove class attribute from each li-element
	var ul = document.getElementById("inventory").children;
	var li;
	
	for (i = 0; i < ul.length; i++){
		ul[i].removeAttribute("class");
	}
	//remove item name from bottom bar
	var text = document.getElementById("item_title");
	text.innerHTML = "";
}

function select_item(node, item){
	unselect_all();
	
	//if no specific item, reset - e.g. delete button
	var text = document.getElementById("item_title");
	if (item == undefined){
		text.innerHTML = "";
		return;
	}
	
	//beep
	play_sfx("OOT_PauseMenu_Cursor.wav");
	
	//show item name in bottom bar
	text.innerHTML = item;
	
	//graphical select
	node.parentNode.setAttribute("class", "selected");
}






