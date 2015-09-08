/**
 * Created by lexon222 on 08.09.15.
 */
var dialog = {
    state : app.state,

    write  : function(){
        var container = $("#dialog");
        var message;
        var item;

        switch(app.state){
            case "inventory":
                if(inventory.selected === null){
                    message = "scan VIRTTRUHE QR-Cards and click on items to interact with them";
                }else{
                    item = items[inventory.selected];
                    console.log(item);

                    message = item.description;
                }
                break;
            case "scan":
                //button hidden
                break;
            case "menu":
                //button hidden
                break;
        }

        //insert dialog to UI
        container.html(message);
    },
};