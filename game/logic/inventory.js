inventory = {
	item_list		: [],
	selected		: null,
	setSelected		: function(x){
		this.selected = x;
		//event
		if(x){
			ui.select(x);
		}else{
			ui.update_items();
		}
	},
	
	
	
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
			
			
			
					//check if already exists					//TODO make this elegant
					if(this.item_list.indexOf(item) == -1){
						//no -> add counter
						items[item].count = 1;
						//...and write to list
						this.item_list.push(item);
					}else{
						//yes -> counter +1
						items[item].count += 1;
					}
			
			
		}else{
			//not stackable
			message.print("not stackable");
			
			
					//check if already exists					//TODO make this elegant (dry)
					if(this.item_list.indexOf(item) == -1){
						//no -> write to list
						this.item_list.push(item);
					}else{
						//yes -> skip
						message.print(item + " already in inventory");
					}
			
			
			
		}
		
		
		
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
							console.log("#");
							inventory.setSelected(null);
							console.log("selected: "+inventory.selected);
						}
						items[item].count--;
						ui.update_items();
					}else{
						list.splice(pos, 1);
						inventory.setSelected(null);
					}
					
					
					//event trigger
					//ui.update_items();
					
				},
	
	
	select	: function (item) {
					this.setSelected(item);
					
					//event
					//enable buttons
					ui.btn_use.removeClass("disabled");
					ui.btn_share.removeClass("disabled");
					ui.btn_delete.removeClass("disabled");
					
					return;
			},
				
				
				
	unselect : function(){
		this.setSelected(null);
	},
	
	
	
	
	
};
