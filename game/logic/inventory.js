inventory = {
	item_list : [],
	
	Selected : null,
	get selected(){
	    return this.Selected;
	},
	set selected(value){
	    this.Selected = value;
	    
	    if (value) {
            ui.select(value);
        } else {
            ui.update_items();
        }
	},
	

	add : function(item) {
		/*
		 * validation
		 */
		if (item === undefined) {
			console.log("cannot add nothing to inventory");
			return;
		}
		//check if item exists in loaded item_set
		if (items[item] === undefined) {
			console.log("item not in list: " + item);
			return;
		}

		//check if stackable
		if (items[item].stackable) {
			//stackable
			console.log(item);
			console.log(items[item].stackable);
			console.log("stackable");

			//check if already exists					//TODO make this elegant, if possible
			if (this.item_list.indexOf(item) === -1) {
				//no -> add counter
				items[item].count = 1;
				//...and write to list
				this.item_list.push(item);
			} else {
				//yes -> counter +1
				items[item].count += 1;
			}

		} else {
			//not stackable
			console.log("not stackable");

			//check if already exists					//TODO make this elegant (d.r.y.)
			if (this.item_list.indexOf(item) === -1) {
				//no -> write to list
				this.item_list.push(item);
			} else {
				//yes -> skip
				console.log(item + " already in inventory");
			}

		}

		//event trigger
		ui.update_items();
		return;
	},

	remove : function(item) {
		var list = this.item_list;
		var pos = list.indexOf(item);
		/*
		 * validation
		 */
		if (pos === -1) {
			console.log(item + " not in inventory");
			return;
		}

		//check if stackable
		if (items[item].stackable) {
			//check if only one left
			if (items[item].count === 1) {
				//delete from list
				list.splice(pos, 1);
				console.log("#");
				inventory.selected = null;
				console.log("selected: " + inventory.selected);
			}
			items[item].count--;
			ui.update_items();
		} else {
			list.splice(pos, 1);
			inventory.selected = null;
		}

		//event trigger
		//ui.update_items();

	},

	select : function(item) {
		this.selected = item;

		//event
		//enable buttons
		ui.btn_use.removeClass("disabled");
		ui.btn_share.removeClass("disabled");
		ui.btn_delete.removeClass("disabled");

		return;
	},

	unselect : function() {
		this.selected = null;
	},

	info : function() {
		var item = items[inventory.selected];
		if (inventory.selected === null) {
			$("#d_info .d_message").html("Select an item from your inventory, to use, share or delete it.");
		} else {
			$("#d_info .d_message").html("Name: " + item.name + "<br/> Function: " + item.use);
		}
		$("#d_info").show();
	},

	share : function(item_id) {
		var qrcode = $("#share_qrcode .d_message");

		//remove previous image
		qrcode.html("");
		//create new qr code
		new QRCode(qrcode[0], ",," + item_id);
		//show dialog box
		$("#share_qrcode").show();
	},
};
