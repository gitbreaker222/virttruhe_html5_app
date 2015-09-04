/**
 * Created by lexon222 on 26.08.15.
 */
/**
 *
 * @property item_list {array}
 */
var inventory = {
    "Item_list" : [],
    "Selected": null,



    /*
    METHODS
     */
    "add" : function(item_id){
        /*
         * validation
         */
        if (item_id === undefined) {
            console.log("cannot add nothing to inventory");
            return;
        }
        //check if item exists
        if (items[item_id] === undefined) {
            console.log("item not in list: " + item);
            return;
        }
        //check if stackable
        if (items[item_id].stackable === true) {
            //stackable
            //check if already in list
            if (this.exists(item_id)) {
                //no -> add counter
                items[item_id].count = 1;
                //...and write to list
                this.Item_list.push(item_id);
                console.log(item_id + " now in inventory");

                //console.log("--EVENT--");
                views.inventory.add(item_id);
            } else {
                //yes -> counter +1
                items[item_id].count += 1;
                console.log("added 1 " +item_id+ " to inventory");

                //console.log("--EVENT--");
                views.inventory.add(item_id);
            }

        } else {
            //not stackable
            //check if already exists
            if (this.exists(item_id) === false) {
                //no -> write to list
                this.item_list.push(item_id);
                console.log(item_id + " now in inventory");

                //console.log("--EVENT--");
                views.inventory.add(item_id);
            } else {
                //yes -> skip
                console.log(item_id + " already in inventory");
            }

        }

    },

    remove : function(id){

    },

    /*
    SUBS
     */
    /*
    looks if an item already is in inventory and returns true if true
     */
    exists : function(id){
        return this.item_list.indexOf(id) >= 0;
    }
};

/*
 GETTER SETTER and EVENT TRIGGER
 */
Object.defineProperties(inventory, {
    item_list: {
        "get": function() {return inventory.Item_list},
        "set": function(value) {
            inventory.Item_list = value;
            console.log("--EVENT-- inventory changed via setter");
        }
    },
    selected: {
        "get": function() { return this.Selected},
        "set": function(value) {
            this.Selected = value;
            console.log("--EVENT-- on: " + JSON.stringify(this));
        }
    },

});
