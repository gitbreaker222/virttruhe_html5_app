/**
 * Created by lexon222 on 26.08.15.
 */
actions = {
    combine : {
        name: "Combine with another item",
        start: function() {
            var item1, item2;
            //get items somehow
            console.log("item1" + " will be combined with " + "item2");
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