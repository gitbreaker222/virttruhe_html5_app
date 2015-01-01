
function generate_new_item_list(){
	//search item folder for images and create json "items.js" based on their names
	var item_path = "img/";
	var list_path = "";
	window.alert("no function yet");
};

function reload_inventory(){
	var inventory = document.getElementById("inventory");
	var node;
	
	//resetting the html content to prevent producing an ongoing list with the old inventory items
	inventory.innerHTML = "";
	
	for (i = 0; i < items.length; i++){
		node = document.createElement("LI");
		inventory.appendChild(node);
		
		if (items[i].found == true){
			node = document.createElement("IMG");
			node.setAttribute("src", "../" + items[i].icon);
			node.setAttribute("onclick", "select_item('"+ items[i].name +"')");
			inventory.lastChild.appendChild(node);
		}
	}
	
	
	//<li><img src="../img/items/small/arrows.png" /></li>
	
};

function add_to_inventory(item){
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
	for (i = 0; i < items.length; i++){
		items[i].found = false;
		console.log("removed from inventory: " + items[i].name);
	}
	reload_inventory();
}

function select_item(item){
	play_sfx("OOT_PauseMenu_Cursor.wav");
	//titel in bottom bar
}






