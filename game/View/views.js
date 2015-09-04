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
        template : "<ul>#items</ul>",
        update: function(){
            var items = inventory.item_list;
            var html = this.template;

            for (id in items){
                console.log("id");
            }

            this.node.html(html)
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
        console.log(app.state);
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



