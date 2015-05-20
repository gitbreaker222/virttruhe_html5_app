ui = {
	//jQuery objects after init
	music		: undefined,
	sfx			: undefined,
	layer		: undefined,
	user_status	: undefined, //TODO and remove?
	hearts		: undefined,
	keys		: undefined,
	rupees		: undefined,
	item_title	: undefined,
	inventory	: undefined,
	items		: undefined,
	scan		: undefined,
	pause		: undefined,
	dialog		: undefined,
	
	
	
	/*
	 *  STATE
	 */
	update_state		: function(){
		var state = system_status.state;
		var prev_state = system_status.prev_state1;
		
		switch(state){
			case "title" :
				
				break;
				
			case "inventory" :
				this.pause.hide();
				this.scan.hide();
				this.inventory.show();
				break;
				
			case "scan" :
				this[prev_state].hide();
				this.scan.show();
				break;
				
			case "pause" :
				this[prev_state].hide();
				this.pause.show();
				break;
				
			case "new_item" :
				
				break;
				
			case "portal" :
				
				break;
				
			default :
				
		}
	},
	
	
	/*
	 * INVENTORY
	 */
	update_items		: function(){
		console.log("update jquery objects");
		var item_list = inventory.item_list;
		var content = this.items;
		var node;
		var node2;
		var node3;
		var node_label;
		
		content.empty();
		
		for (i=0; i <  item_list.length; i++){
			var current_item_id = item_list[i];
			
			node = document.createElement("LI");
			
			content.append(node);
			
			node2 = document.createElement("A");
			node2.setAttribute("href", "#");
			
			node3 = document.createElement("IMG");
			node3.setAttribute("id", current_item_id);
			node3.setAttribute("src", items[current_item_id].icon);
			node3.setAttribute("onclick", "inventory.select('"+ current_item_id +"')");
			
			node2.appendChild(node3);
			
			if(items[current_item_id].stackable){
				node_label = document.createElement("SPAN");
				node_label.setAttribute("class", "label");
				node_label.innerHTML = items[current_item_id].count;
				
				node2.appendChild(node_label);
			}
			
			node.appendChild(node2);
			
			content.append(node);
			
			}
			
		this.item_title.html("Inventory");
	},
	
	
	select				: function(item){
		var old 			= $("#items .selected");
		var selected 		= $("#" + item);
		var name			= items[item].name;
		
		try{
			old.removeClass("selected");
		}finally{
			selected.addClass("selected");
		}
		
		//show item name at bottom TODO
		this.item_title.html(name);
		
		
		audio.play_sfx("OOT_PauseMenu_Cursor");
		
		return;
	},
	
	/*
	 * USER STATS
	 */
	update_layer		: function(){
		this.layer.html(system_status.layer);
	},
	
	update_user_stats	: function(){
		//reset
		//this.hearts.html ...
	}
	
	
	
};










