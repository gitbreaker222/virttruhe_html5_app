/**
 * Created by lexon222 on 04.09.15.
 */
function View(html_element){
    this.node = html_element;
}

var views = {
    state_update : function(){
        var state = app.state;

        this.info_bar.update();

        //hide all contents, then show current
        $("#content").children().hide();
        switch (state){
            case "inventory":
                this.bottom_controls.node.show();
                this.inventory.node.show();
                break;
            case "scan":
                this.bottom_controls.node.hide();
                this[app.config.scanner + "_scanner"].node.show();
                break;
            case "menu":
                this.bottom_controls.node.hide();
                this.menu.node.show();
                break//dance
            default :
                break;
        }
        this.top_controls.update();
        this.bottom_controls.update();
    },


    /*
    INFO BAR
     */
    info_bar : {
        node    : $("#info_bar"),
        keys    : $("#keys"),
        gold    : $("#gold"),

        update  : function(){
            var state = app.state;
            var item;

            //info
            switch (state){
                case "inventory":
                    item = inventory.selected;

                    if(item == null){
                        item = "inventory"
                    }else{
                        item = items[item].name;
                    }
                    $("#info").html(item);
                    break;

                case "scan":
                    $("#info").html("scan...");
                    break;

                case "menu":
                    $("#info").html("menu");
                    break;
                default :
                    break;
            }

            //keys
            this.keys.find(".val").html(app.keys);

            //gold
            this.gold.find(".val").html(app.gold);
        }
    },



    /*
    TOP CONTROLS
     */
    top_controls : {
        node : $("#top_controls"),

        update : function(){
            $("#btn_scan").removeClass("disabled");
            switch (app.state){
                case "inventory":
                    break;
                case "scan":
                    break;
                case "menu":
                    $("#btn_scan").addClass("disabled");
                    break;
                default:
                    break
            }
        },
    },



    /*
    CONTENT VIEWS
     */
    inventory : {
        node : $("#inventory"),
        update: function(){
            console.log("update inventory");
            var items = inventory.item_list;
            var html = this.template;
            for (i in items){
                console.log(items[i]);
            }
            this.node.html(html)
        },
        add : function(id){
            console.log("update inventory view");
            var html =  '<li id="#id" onclick="buttons.btn_select_item(this)">'
                     +      '<img src="#src">'
                     +  '</li>';
            html = html.replace("#id", id);
            html = html.replace("#src", "Data/img/items/small/"+id+".jpg");

            this.node.append(html);
        },
        remove : function(id){
            $("#"+id).remove();
        },
        select : function(id){
            //unselect everything
            $(".selected").removeClass("selected");
            //check if nothing selected
            if(id == null){
                return
            }
            //else select node with this id
            $("#"+id).addClass("selected");
        }
    },


    text_scanner : {
        node        : $("#text-scanner"),

        validate    : function(){
            var message = $("#text-scanner").find("input")[0].value;
            var pattern = /#(\d|[abcdef]){8}\b/i;
            console.log(message);
            console.log(pattern.test(message));
            if(pattern.test(message)){
                $("#btn_submit").addClass("success");
            }else{
                $("#btn_submit").removeClass("success");
            }
        },
    },


    video_scanner : {
        node: $("#video-scanner")
    },

    menu : {
        node    : $("#menu")

    },



    /*
    BOTTOM CONTROLS
     */
    bottom_controls : {
        node : $("#bottom_controls"),
        update: function(){
            var state = app.state;
            var selected = inventory.selected;
            var item_btns = $(".item_button");

            switch (state){
                case "inventory":
                    if(selected == null){
                        //disable item buttons
                        item_btns.addClass("disabled");
                        return;
                    }else{
                        //enable item buttons
                        item_btns.removeClass("disabled");
                    }
                    // if selected item has no use fn
                    if(items[selected].function === null){
                        //disable use button
                        $("#btn_use").addClass("disabled");
                    }

                    break;
                //case "scan":
                    item_btns.addClass("disabled");
                    break;
                //case "menu":
                    item_btns.addClass("disabled");
                    break;
                default:
                    item_btns.addClass("disabled");
                    break;
            }
        }
    },


    /*
    DIALOG BOX PUP UP
     */
    dialog : {
        box     : $("#dialog_box"),
        node    : $("#dialog"),

        close: function(next_action){
            console.log("close dialog");
            //hide box
            this.box.hide();
            if(next_action !== undefined){
                next_action();
            }
        },

        show : function(){
            console.log("show dialog");
            //get message
            var message = app.dialog;
            //inject message into node
            this.node.html(message);
            //show box
            this.box.show();
        }
    }


};



