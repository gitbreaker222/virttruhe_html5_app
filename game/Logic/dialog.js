/**
 * Created by lexon222 on 08.09.15.
 */
var dialog = {
    next_page    : null,

    get_message : function(context){
        var state = app.state;
        var message;

        switch (context) {
            case "info":
                if(state == "inventory") {
                    if (inventory.selected == null) {
                        //the default information
                        dialog.write(dialogs.info.default);
                    } else {
                        //description of the selected item
                        dialog.write(dialogs.info.description);
                    }
                }else if(state == "menu"){
                    dialog.write(dialogs[context].version)
                }
                break;
            case "use":
                //assume state is inventory
                //set action
                actions.next_action = items[inventory.selected].function;
                dialog.write(dialogs.use.ask);
                break
        }
    },

    write  : function(message){
        var tags, tag;

        //search for #tag variables
        tags = message.match(/#\w+/g);

        for(var i in tags){
            //sort out prototype properties
            if(!(i >= 0)) continue;

            tag = tags[i];
            console.log(tag);
            //replace tag
            switch (tag){
                case "#ok":
                    message = message.replace(/#ok/g, dialogs.ok);
                    break;
                case "#no":
                    message = message.replace(/#no/g, dialogs.no);
                    break;
                case "#description":
                    message = message.replace(/#description/g, items[inventory.selected].description);
                    break;
                case "#name":
                    //verb for item action
                    message = message.replace(/#name/g, actions[items[inventory.selected].action].name);
                    //
                    break;
                case "#prev":
                    break;
                case "#next":
                    break;
                default:
                    alert("unhandled dialog #tag: "+tag);
                    return;
            }
        }



        app.dialog = message;
    }
};