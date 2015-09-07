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
                this.inventory.node.show();
                break;
            case "scan":
                this[app.config.scanner + "_scanner"].node.show();
                break;
            default :
                break;
        }
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
                    }

                    $("#info").html(item);

                    break;
                case "scan":
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

        },
        select : function(id){
            //unselect everything
            $(".selected").removeClass("selected");
            //select node with this id
            $("#"+id).addClass("selected");
        }
    },


    text_scanner : {
        node: $("#text-scanner")
    },


};



