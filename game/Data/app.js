app = {
    /*
    APP STATES
     */
    "State": "start",
    "Prev_state": null,
    "Prev_state2": null,


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
        "layer" : "reality",
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
            console.log("--EVENT-- inventory changed (add or remove)");
        }
    }
});




/*
SHORTCUTS
 */
var items = app.items;
var story = app.story;
