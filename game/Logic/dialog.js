/**
 * Created by lexon222 on 08.09.15.
 */
var dialog = {

    write  : function(start){
        var container = $("#dialog");
        var message;
        var item;
        var path = [start];


        switch(start){
            case "info":
                if(inventory.selected === null){
                    message = "scan VIRTTRUHE QR-Cards and click on items to interact with them";

                    path.push("null");
                }else{
                    item = items[inventory.selected];
                    message = item.description;
                }
                break;

            case "use":
                item = items[inventory.selected];
                var action_id = item.function;
                var action_name = actions[action_id].name;
                //var action = actions[action_id].start;

                message = dialogs.use.ask;
                //insert action name
                message = message.replace("#name", action_name);
                //insert button functions
                message = message.replace("#dialog_ok", "<button onclick='views.dialog.close()(actions."+action_id+".start())'>OK</button>");
                message = message.replace("#dialog_close", "<button onclick='views.dialog.close()'>No</button>");

                app.dialog = message;
                break;

            case "share":
                break;

            case "delete":
                break;
        }

        //insert dialog to UI
        //container.html(message);


        /*
        SUB FN
         */
        function walk_path(root, path) {
            var node = root;
            for (var index=0; index < path.length; index = index+1) {
                node = node[path[index]];
            }
            return node;
        }


    }
};