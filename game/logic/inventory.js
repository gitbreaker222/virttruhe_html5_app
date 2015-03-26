inventory = {
	"item_index"		: [],
	"selected"			: null,
	
	
	"add"		: function (item) {
					this.item_index.push(item);
					events.add;
					return(this.item_index);
				},
	
	
	"remove"	: function (item) {
					
					var item_index = this.item_index;
					
					for (i in item_index){
						if (item_index[i] == item){
							//removes 1 item beginning at position i
							item_index.splice(i, 1);
							
							if (this.selected == item){
								this.select(null);
							}
							
							return(item_index);
						}
					}
										
					console.log(item + " not in inventory");
					return(item_index);
					
				},
	
	
	"select"	: function (item) {
					this.selected = item;
					
					//event
					this.ui_select(item);
					
					return(this.selected);
			},
				
				
				
	/*
	 * VIEW / CREATE jQUERY
	 */
	"ui_items_update"	: function() {
						console.log("update jquery objects");
						var item_index = this.item_index;
						var content = page.items;
						var node;
						var node2;
						var node3;
						
						content.empty();
						
						for (i in item_index){
							node = document.createElement("LI");
							
							content.append(node);
							
							node2 = document.createElement("A");
							node2.setAttribute("href", "#");
							
							node3 = document.createElement("IMG");
							node3.setAttribute("id", items[i].id);
							node3.setAttribute("src", items[i].icon);
							node3.setAttribute("onclick", "inventory.select('"+items[i].id +"')");
							
							node2.appendChild(node3);
							
							node.appendChild(node2);
							
							content.append(node);
							
				
						}
						
					},
	
	"ui_select"	: function(){
					var old = $("#items .selected");
					var selected = $("#" + this.selected);
					
					console.log(old);
					try{
						old.removeClass("selected");
					}finally{
						selected.addClass("selected");
					}
					
					return;
				}
	
	
};
