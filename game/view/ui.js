ui = {
	//jQuery objects loaded after init fn
	music		: undefined,
	sfx			: undefined,
	layer		: undefined,
	user_status	: undefined,
	life		: undefined,
	keys		: undefined,
	rupees		: undefined,
	item_title	: undefined,
	inventory	: undefined,
	items		: undefined,
	scan		: undefined,
	pause		: undefined,
	new_item	: undefined,
	portal		: undefined,
	dialog		: undefined,
	btn_scan	: undefined,
	btn_pause	: undefined,
	btn_use		: undefined,
	btn_share	: undefined,
	btn_delete	: undefined,
	
	
	
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
				this.new_item.hide();
				this.portal.hide();
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
				this[prev_state].hide();
				ui.new_item.show();
				break;
				
			case "portal" :
				this[prev_state].hide();
				ui.portal.show();
				break;
				
			default :
				
		}
	},
	
	
	/*
	 * LAYER
	 */
	change_layer		: function(layer){
		this.layer.html(layer);
	},
	
	/*
	 * DIALOG BOX POP UP
	 */
	dialog				: function(obj){
		/*
		 * dialog_object = {
		 * 	 message : "string w/ html formating or DOM nodes",
		 *   actions : [
		 *     {name : "string", fn : function()},
		 *     {name : "string", fn : function()},
		 *   ]
		 * }
		 */
	
		var dialog = this.dialog;
		var d_message = $("#d_message");
		var d_actions = $("#d_actions");
		var actions_html = "";
		
		//remove old dialog content
		dialog.empty();
		
		//create dialog message
		d_message.html(obj.message);
		
		//create buttons for actions
		for(i = 0; obj.actions.length; i++){
			var node = document.createElement("A");
			
			if(obj.actions[i].name == "CLOSE"){
				//if action is close button
				node.setAttribute("class", "close-reveal-modal");
				node.setAttribute("aria-label", "Close");
				node.innerhtml = "&#215;"; //"X" Symbol
			}else{
				//else prepare label and click function for button
				node.innerhtml = obj.actions[i].name;
				node.setAttribute("class", "button");
				node.setAttribute("onclick", obj.actions[i].fn);
			}
			
			//append button node to actions section
			d_actions.append(node);
		}
		
		//show the modal / dialog box
		dialog.foundation("modal", "open");
	}
	
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
		
		if(inventory.selected == null){
			//disable buttons
			ui.btn_use.addClass("disabled");
			ui.btn_share.addClass("disabled");
			ui.btn_delete.addClass("disabled");
		}
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
		
		this.item_title.html(name);
		
		
		audio.play_sfx("OOT_PauseMenu_Cursor");
		
		return;
	},
	
	/*
	 * USER STATS
	 */
	
	/*
	 * PRESENTATION
	 */
	present_new_item	: function(item_id){
		var image = items[item_id].image;
		var ni_item = $("#ni_item"); //ni = New Item. ID prefix for new_item row
		//sfx shortcuts
		var sfx_chest = audio.play_sfx("open_chest");
		var sfx_ni = audio.play_sfx("OOT_Get_SmallItem1");
		
		ni_item.attr("src", image);
		
		ni_item.on("animationstart", sfx_chest);
		ni_item.on("animationend", sfx_ni);
		
		//show dialog box
		ni_item.on("animationend", function(){
			
		});
		
		
		
	},
	
	
};










