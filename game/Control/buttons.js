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


};