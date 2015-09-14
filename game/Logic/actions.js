/**
 * Created by lexon222 on 26.08.15.
 */
actions = {
    //if a user has to confirm an action, it is this action
    next_action : null,

    combine : {
        name: "Combine with another item",
        start: function(item1, item2) {
            //set state
            app.combine_item = true;
            //check if items are given
            if(item2 === undefined){
                console.log("select second item");
                return
            }

            console.log(item1 + " will be combined with " + item2);
            app.combine_item = false;

            //reset next action
            actions.next_action = null;
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