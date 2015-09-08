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
            console.log("item not in list: " + item_id);
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
        var list = this.item_list;
        var pos = list.indexOf(id);
        var item;
        /*
         * validation
         */
        if (pos === -1) {
            console.log(id + " not in inventory");
            return;
        }

        item = items[id];

        //check if stackable
        if (item.stackable === true) {
            //check if only one left
            if (item.count === 1) {
                //delete from list
                list.splice(pos, 1);
                console.log(list);
                inventory.selected = null;
                console.log("selected: " + inventory.selected);
            }
            //reduce counter
            items[id].count--;
            //view.inventory
        } else {
            list.splice(pos, 1);
            inventory.selected = null;
        }

        //event trigger
        views.inventory.remove(id);
    },

    select : function(id){
        inventory.selected = id;
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
 note: event trigger for  item list  are not realized with setters, as an array is used!
 The array gets modified via push() etc. methods and therefor "mutated" without setting a
 new value to the carrying variable.
 Instead the view update call follows the list manipulation in the add/remove method above.
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
            console.log("item selected: "+value);
            views.inventory.select(value);
            views.info_bar.update();
            views.bottom_controls.update();
        }
    },

});
