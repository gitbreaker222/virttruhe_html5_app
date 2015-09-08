/**
 * Created by lexon222 on 03.09.15.
 */

function init(){
    console.log("=====INIT=====");

    if(app.loading){
        console.log("... loading ...")
        setTimeout(function(){init()},100);
        return;
    }
    console.log("OK");
    $(document).foundation(); //init for foundation framework or so


    //attach buttons
    buttons.attach();

    //change state to inventory
    app.state = "inventory";

    //set selected scanner (can be cached)
    app.config.scanner = ($("#scanner_select")[0].value).toLowerCase();


    /*
    DEV
     */
    inventory.add("pine1");
    inventory.add("pine2");
}

$(document).ready(init());