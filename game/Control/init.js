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


    /*
    DEV
     */
    inventory.add("pine1");
}

$(document).ready(init());