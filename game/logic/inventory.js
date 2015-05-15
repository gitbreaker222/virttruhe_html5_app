inventory = {
	item_list		: [],
	selected			: null,
	
	
	
	add		: function (item) {
					/*
					 * validation
					 */
					if(item == undefined){
						message.print("cannot add nothing to inventory");
						return;
					}
					//check if item exists in loaded item_set
					if(items[item] == undefined){
						message.print("item not in list: " + item);
						return;
					}
					
					//check if stackable
					if(items[item].stackable){
						//stackable
						message.print("stackable");
						//check if exists
						//if()
						
						
					}else{
						//not stackable
						message.print("not stackable");
						
					}
					this.item_list.push(item);
					
					
					//event trigger
					ui.update_items();
					return;
				},
	
	
	remove	: function (item) {
					var list = this.item_list;
					var pos = list.indexOf(item); 
					/*
					 * validation
					 */
					if(pos == -1){
						console.log(item + " not in inventory");
						return;
					}
					
					//check if stackable
					if(items[item].stackable){
						//check if only one left
						if(items[item].count == 1){
							//delete from list
							list.splice(pos, 1);
						}
						items[item].count--;	
					}
					
					list.splice(pos, 1);
					
					
					//event trigger
					ui.update_items();
				},
	
	
	select	: function (item) {
					this.selected = item;
					
					//event
					ui.select(item);
					
					return;
			},
				
				
				
	/*
	 * VIEW, CREATE jQUERY
	 */
	ui_items_update	: function() { //TODO remove
						console.log("update jquery objects");
						var item_list = this.item_list;
						var content = ui.items;
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
	
	
	
	
};
