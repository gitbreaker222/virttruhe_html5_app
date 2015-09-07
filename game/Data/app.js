var app = {
    /*
    APP STATES
     */
    "loading"       : true,
    "State"         : "start",
    "Prev_state"    : null,
    "Prev_state2"   : null,
    "Keys"          : 99,
    "Gold"          : 999,


    /*
    CONFIGURATION
     */
    "config": {
        "scanner": "text"
    },

    /*
    STORY STATES
     */
    "story": {
        "layer" : "layer1",
        "node"  : "0"
    }
};


/*
 GETTER SETTER and EVENT TRIGGER (APP)
 */
Object.defineProperties(app, {
    state: {
        "get": function() { return this.State},
        "set": function(value) {
            console.log("--EVENT-- state changed to: " + value);

            if(this.State == "menu" && value == "scan"){
                //special case when returning from pause menu to scanner
                this.State = value;
                this.prev_state = this.prev_state2;
                this.prev_state2 = "menu";
            }else{
                this.prev_state2 = this.prev_state;
                this.prev_state = this.State;
                this.State = value;
            }

            inventory.select(null);
            views.state_update();
        }
    },
    prev_state: {
        "get": function() { return app.Prev_state},
        "set": function(value) {
            app.Prev_state = value;
        }
    },
    prev_state2: {
        "get": function() { return app.Prev_state2},
        "set": function(value) {
            app.Prev_state2 = value;
        }
    },
    keys: {
        "get": function() { return app.Keys},
        "set": function(value) {
            app.Keys = value;
            views.info_bar.update();
        }
    },
    gold: {
        "get": function() { return app.Gold},
        "set": function(value) {
            app.Gold = value;
            views.info_bar.update();
        }
    }
});




/*
SHORTCUTS
 */
var story = app.story;
