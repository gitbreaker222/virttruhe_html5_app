/**
 * Created by lexon222 on 08.09.15.
 */
var dialog = {

    get_message : function(context){
        var message;

        switch (context) {
            case "info":
                if(app.selected == null){
                    dialog.write(dialogs.info.default);
                }else{
                    dialog.write(dialogs.info.description);
                }
                break;
            case "use":
                break
        }
    },

    write  : function(message){
        //search for #tag variables
        var tags = message.match(/#\w+/g);
        console.log(tags);
        //replace those tags
        for (var tag in tags){
            //sort out prototype properties. e.g. "array.remove"
            if(!(tag >= 0)) continue;

            switch (tags[tag]){
                case "#ok":
                    message = message.replace(/#ok/g, dialogs.ok);
                    break;
                case "#no":
                    break;
                case "#description":
                    break;
                case "#name":
                    break;
                case "#next":
                    break;
                default:
                    alert("unhandled dialog #tag: "+tag);
                    break;
            }
        }
        app.dialog = message;
    }
};