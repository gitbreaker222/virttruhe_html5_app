inventory = {
	"item_index"		: [],
	"selected"	: null,
	
	
	"update"	: function() {
					console.log("update jquery objects");
					var item_index = this.item_index;
					var content = page.items;
					var node;
					var node2;
					
					for (i in item_index){
						node = document.createElement("LI");
						
						content.append(node);
						
						node2 = document.createElement("IMG");
						node2.setAttribute("src", items[i].icon);
						node2.setAttribute("onclick", "inventory.select("+items[i].id +")");
						
						node.appendChild(node2);
						
						content.append(node);
						
					}
					
				},
	
	
	
	"add"		: function (item) {
					this.item_index.push(item);
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
					return(this.selected);
				}
	
	
};
