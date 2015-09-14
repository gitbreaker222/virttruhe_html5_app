/**
 * Created by lexon222 on 26.08.15.
 */
actions = {
    combine : {
        name: "Combine with another item",
        start: function(item1, item2) {
            //set state
            app.state == "combine";
            //check if items are given
            if(item2 === undefined){
                console.log("select second item");
                return
            }

            console.log(item1 + " will be combined with " + "item2");

            /*
            HELPER FN
             */
            function select_items(){
                //get item 1
                var item1 = inventory.selected;
                //user must select now item 2
                dialog.write();
                var item2;
                return [item1, item2];
            }
        }
    },
    "read" : function(txt){
        if (!txt) txt = "no text given";
        console.log(txt);
    },
    take_seeds : {
        name : "Take seeds",
        start: function(){
            console.log("you take out the seeds and put them in your inventory. The pine is no longer useful");
            inventory.add("pine_seed");
            //presentation.new_item("seeds"); ...something like that yeah
            inventory.remove("pine2");
        }
    }
};