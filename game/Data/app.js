var app = {
    /*
    APP STATES
     */
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
        "layer" : "layer01",
        "node"  : "0"
    }
};


/*
 GETTER SETTER and EVENT TRIGGER (APP)
 */
Object.defineProperties(this.app, {
    state: {
        "get": function() { return app.State},
        "set": function(value) {
            app.State = value;
            console.log("--EVENT-- state changed");
        }
    },
    keys: {
        "get": function() { return app.Keys},
        "set": function(value) {
            app.Keys = value;
            console.log("--EVENT-- keys changed");
        }
    },
    gold: {
        "get": function() { return app.Gold},
        "set": function(value) {
            app.Gold = value;
            console.log("--EVENT-- gold changed");
        }
    }
});




/*
SHORTCUTS
 */
var story = app.story;
