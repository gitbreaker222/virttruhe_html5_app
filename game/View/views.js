/**
 * Created by lexon222 on 04.09.15.
 */
function View(html_element){
    this.node = html_element;
}

var views = {
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
            var html =  '<li id="#id">'
                     +      '<img src="#src">'
                     +  '</li>';
            html = html.replace("#id", id);
            html = html.replace("#src", "Data/img/items/Memory-Card.png")//+id+"png")

            this.node.append(html);
        }
    },


    text_scanner : {
        node: $("#text-scanner")
    },



    /*
    UPDATE ALL VIEWS
     */
    state_update : function(){
        //show current content
        $("#content").children().hide();
        switch (app.state){
            case "inventory":
                this.inventory.node.show();
                break;
            case "scan":
                this[app.config.scanner + "_scanner"].node.show();
                break;
            default :
                break;
        }
    }

};



