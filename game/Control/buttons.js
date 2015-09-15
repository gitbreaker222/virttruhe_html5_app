/**
 * Created by lexon222 on 04.09.15.
 */
var buttons;
buttons = {
    /*
     TOP BAR
     */
    scan: function (btn) {
        if (this.disabled(btn)) return;

        switch (app.state) {
            case "inventory":
                scanner.start();
                break;
            case "scan":
                scanner.stop();
                break;
            default :
                scanner.start();
                console.log("= scanner started from default case! =");
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
    btn_select_item: function(element){
        if(app.combine_item){
            //user selected second item for combine action
            actions.combine.start(inventory.selected, element.id);
            app.combine_item = false;
        }else {
            inventory.select(element.id);
        }
    },

    btn_info: function (btn) {
        dialog.get_message("info");
    },

    btn_use: function (btn) {
        if (this.disabled(btn)) return;

        dialog.get_message("use");
    },

    btn_share: function (btn) {
        if (this.disabled(btn)) return;

        console.log("button pushed");
        console.log(btn);
    },

    btn_delete: function (btn) {
        if (this.disabled(btn)) return;

        inventory.remove(inventory.selected);
    },

    btn_menu: function (btn) {
        if(app.state !== "menu"){
            app.state = "menu";
        }else{
            app.state = app.prev_state;
        }

    },

    /*
     TEXT SCANNER
     */
    btn_submit: function (btn) {
        var message = $("#text-scanner").find("input")[0].value;
        scanner.search_key(message);
    },


    /*
    MENU
     */
    btn_scanner_select: function(event){
        var type = event.target.value; //get selected type
        type = type.toLowerCase();
        scanner.change(type)
    },
    toggle_bgm: function(){
        if(bgm.playing()){
            bgm.pause();
        }else {
            bgm.play();
        }
    },


    /*
    DIALOG
     */
    d_close : function(event){
        views.dialog.close();
    },
    d_ok    : function(){
        console.log("confirm dialog thingy");
        this.d_close();
        if(actions.next_action) actions[actions.next_action].start();
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
            buttons.scan(this);
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
        $("#m_music").find("input").change(function(){
            buttons.toggle_bgm()
        });

        //control/stop event propagation on clicks
        $("#dialog").click(function(event){
            event.stopPropagation();
        });

        //attach event handlers
        //$("#text-scanner").find("input")[0].oninput="views.text_scanner.validate()";
    },


    /*
    SUBS
     */
    disabled    : function(button){
        if(button.className.search("disabled") !== -1){
            console.log("button disabled");
            return true
        }
        return false
    }


};