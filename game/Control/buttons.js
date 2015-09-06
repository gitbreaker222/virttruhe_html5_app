/**
 * Created by lexon222 on 04.09.15.
 */
var buttons;
buttons = {
    /*
     TOP BAR
     */
    btn_scan: function (btn) {
        console.log("scan button pushed:");

        switch (app.state) {
            case "inventory":
                scanner.start();
                break;
            case "scan":
                scanner.stop();
                break;
            default :
                scanner.start();
                console.log("=scanner startet from default case!=");
                break;
        }
    },

    btn_play: function (btn) {
        console.log("button pushed");
        console.log(btn);
    },

    /*
     ITEM INTERACTION, BOTTOM BAR
     */
    btn_select_item: function(item_id){
        inventory.select(item_id.id);
    },

    btn_info: function (btn) {
        console.log("button pushed");
        console.log(btn);
    },

    btn_use: function (btn) {
        console.log("button pushed");
        console.log(btn);
    },

    btn_share: function (btn) {
        console.log("button pushed");
        console.log(btn);
    },

    btn_delete: function (btn) {
        console.log("button pushed");
        console.log(btn);
    },

    btn_menu: function (btn) {
        console.log("button pushed");
        console.log(btn);
    },

    /*
     TEXT SCANNER
     */
    btn_submit: function (btn) {
        var message = $("#text-scanner").find("input")[0].value;
        scanner.search_key(message);
    },

    /*
    ATTACH BUTTONS AFTER HTML LOAD
     */
    attach : function(){
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
    },


};