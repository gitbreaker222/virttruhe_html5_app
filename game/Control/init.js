/**
 * Created by lexon222 on 03.09.15.
 */

function init(){
    console.log("=====INIT=====");
    $(document).foundation(); //init for foundation framework or so


    //attach buttons
    buttons.attach();

    //change state to inventory
    app.state = "inventory";


    /*
    DEV
     */
    //inventory.add("set_crime");
}

$(document).ready(init());