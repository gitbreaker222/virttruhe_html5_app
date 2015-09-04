/**
 * Created by lexon222 on 03.09.15.
 */
function init(){
    console.log("=====INIT=====");
    $(document).foundation(); //init for foundation framework or so

    //get JSON files
    $.getJSON('Data/items.json', function(data){
        //save JSON to new global object
        items = {};
        for(i in data){
            items[data[i].id] = data[i];
        }
    });
    $.getJSON('Data/key_map.json', function(data){
        //save JSON to new global object
        key_map = {};
        for(i in data){
            key_map[data[i].key] = data[i];
        }

    });

    //attach buttons
    $("#btn_delete").click(function () {
        buttons.btn_delete(this);
    });
    $("#btn_info").click(function () {
        buttons.btn_info(this);
    });
    $("#btn_menu").click(function () {
        buttons.btn_menu(this);
    });
    $("#btn_play").click(function () {
        buttons.btn_play(this);
    });
    $("#btn_scan").click(function () {
        buttons.btn_scan(this);
    });
    $("#btn_share").click(function () {
        buttons.btn_share(this);
    });
    $("#btn_submit").click(function () {
        buttons.btn_submit(this);
    });
    $("#btn_use").click(function () {
        buttons.btn_use(this);
    });

    //change state to inventory
    app.state = "inventory";
}

$(document).ready(init());