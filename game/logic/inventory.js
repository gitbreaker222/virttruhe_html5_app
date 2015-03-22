inventory = {
	"items"		: [],
	"selected"	: null,
	
	
	"reload"	: function() {
					console.log("reload inventory");
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
