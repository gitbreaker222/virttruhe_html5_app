ui = {
    //jQuery objects loaded after init fn
    music       : undefined,
    sfx         : undefined,
    layer       : undefined,
    user_status : undefined,
    life        : undefined,
    keys        : undefined,
    rupees      : undefined,
    item_title  : undefined,
    inventory   : undefined,
    items       : undefined,
    scan        : undefined,
    pause       : undefined,
    new_item    : undefined,
    portal      : undefined,
    dialog      : undefined,
    btn_scan    : undefined,
    btn_pause   : undefined,
    btn_use     : undefined,
    btn_share   : undefined,
    btn_delete  : undefined,

    /*
     *  STATE
     */
    update_state : function() {
        "use strict";
        var state,
            prev_state;

        state = system_status.state;
        prev_state = system_status.prev_state1;

        switch(state) {
        case "title" :

            break;

        case "inventory" :
            this.pause.hide();
            this.scan.hide();
            this.new_item.hide();
            this.portal.hide();
            this.inventory.show();
            break;

        case "scan" :
            this[prev_state].hide();
            this.scan.show();
            break;

        case "pause" :
            this[prev_state].hide();
            this.pause.show();
            break;

        case "new_item" :
            this[prev_state].hide();
            ui.new_item.show();
            break;

        case "portal" :
            this[prev_state].hide();
            ui.portal.show();
            break;

        default :

        }
    },

    /*
     * LAYER
     */
    change_layer : function(layer) {
        this.layer.html(layer);
    },

    /*
     * INVENTORY
     */
    update_items : function() {
        "use strict"; console.log("update jquery objects");
        var item_list,
            current_item_id,
            html_snippet = "",
            html_full_string = "",
            content,
            i;
        
        item_list = inventory.item_list;
        content = this.items;

        for (i = 0; i < item_list.length; i++) {
            current_item_id = item_list[i];
            
            html_snippet =  '<li>'
                         +      '<a>'
                         +          '<img id="#id" src="#src" onclick="inventory.select(\'#id\')"/>'
                         +      '</a>'
                         +      '#label'
                         +  '</li>'
                         ;
            
            //replace the # tags with variables
            html_snippet = html_snippet.replace(/#id/g, item_list[i]);
            html_snippet = html_snippet.replace(/#src/, items[current_item_id].icon);
            if (items[current_item_id].stackable) {
                html_snippet = html_snippet.replace(/#label/, items[current_item_id].count);
            }else{
                html_snippet = html_snippet.replace(/#label/, "");
            }
            
            html_full_string += html_snippet;
        }
        
        content.html(html_full_string);

        this.item_title.html("Inventory");

        if (inventory.selected === null) {
            //disable buttons
            ui.btn_use.addClass("disabled");
            ui.btn_share.addClass("disabled");
            ui.btn_delete.addClass("disabled");
        }
    },

    select : function(item) {
        "use strict";
        var old,
            selected,
            name;
            
        old = $("#items .selected");
        selected = $("#" + item);
        name = items[item].name;

        try {
            old.removeClass("selected");
        } finally {
            selected.addClass("selected");
        }

        this.item_title.html(name);

        audio.play_sfx("OOT_PauseMenu_Cursor");

        return;
    },

    /*
     * USER STATS
     */

    /*
     * PRESENTATION
     */
    present_new_item : function(item_id) {
        var image = items[item_id].image;
        var ni_item = $("#ni_item");
        //ni = new_item
        var ni_shiny = $("#ni_shiny");
        $("#d_item").html(items[item_id].name);
        //dialog box, item name

        /*
        * TODO the event bindings can be optimized.
        * right now, they are bound once and removed each time.
        */
        //set up fn for animation start/end
        ni_item.one("animationstart", function() {
            audio.play_sfx("open_chest");
        });

        ni_item.one("animationend", function() {
            //reset the animation
            $("#ni_item").removeClass("a_zoom");
            $("#ni_shiny").removeClass("a_zoom");

            audio.play_sfx("OOT_Get_SmallItem1");
            //show dialog box
            $("#d_ni").show();
        });

        //load item picture
        ni_item.attr("src", image);
        //start animation
        $("#ni_shiny").addClass("a_zoom");
        $("#ni_item").addClass("a_zoom");

    },

    present_portal : function(portal) {
        //reset animation

        //set up animation

        //start animation

        //prepare dialog
        $("#d_portal .name").html(layers[portal].name);
        //show dialog
        $("#d_portal").show();

    }
};

