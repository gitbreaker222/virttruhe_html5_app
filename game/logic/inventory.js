inventory = {
	"items"		: [],
	"selected"	: null,
	
	
	"update"	: function() {
					console.log("update jquery objects");
					var items = this.items;
					var content = page.items;
					var node;
					
					for (i in items){
						node = '<li><img src="items[i].icon" onclick="inventory.select(items[i])" /></li>';
						node = document.createElement("LI");
						
						content.append(node);
						console.log(node);
					}
					
				},
	
	
	
	"add"		: function (item) {
					this.items.push(item);
					return(this.items);
				},
	
	
	"remove"	: function (item) {
					
					var items = this.items;
					
					for (i in items){
						if (items[i] == item){
							//removes 1 item beginning at position i
							items.splice(i, 1);
							
							if (this.selected == item){
								this.select(null);
							}
							
							return(items);
						}
					}
										
					console.log(item + " not in inventory");
					return(items);
					
				},
	
	
	"select"	: function (item) {
					this.selected = item;
					return(this.selected);
				}
	
	
};
