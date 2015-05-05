inventory = {
	"item_list"		: [],
	"selected"			: null,
	
	
	"add"		: function (item) {
					this.item_list.push(item);
					
					return;
				},
	
	
	"remove"	: function (item) {
					
					var list = this.item_list;
					
					for (i=0; i < list.length; i++){
						if (list[i] == item){
							//removes 1 item beginning at position i
							list.splice(i, 1);
							
							if (this.selected == item){
								this.select(null);
							}
							
							return;
						}
					}
										
					console.log(item + " not in inventory");
					return(item_list);
					
				},
	
	
	"select"	: function (item) {
					this.selected = item;
					
					//event
					this.ui_select(item);
					
					return;
			},
				
				
				
	/*
	 * VIEW, CREATE jQUERY
	 */
	"ui_items_update"	: function() {
						console.log("update jquery objects");
						var item_list = this.item_list;
						var content = page.items;
						var node;
						var node2;
						var node3;
						
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
							
							node.appendChild(node2);
							
							content.append(node);
							
				
						}
						
					},
	
	"ui_select"	: function(){
					var old 			= $("#items .selected");
					var selected 		= $("#" + this.selected);
					
					try{
						old.removeClass("selected");
					}finally{
						selected.addClass("selected");
					}
					
					//show item name at bottom TODO
					for(i in items){
						var item = items[i];
						if (item.id == this.selected){
							page.item_title.html(item.name);
						}
					}
					
					
					audio.play_sfx("OOT_PauseMenu_Cursor.ogg");
					
					return;
				}
	
	
};
