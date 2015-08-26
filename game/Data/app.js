app = {
    /*
    APP STATES
     */
    "state": "start",
    "prev_state": null,
    "prev_state2": null,

    /*
    CONFIGURATION
     */
    "config": {
        "scanner": "video"
    },

    /*
    ITEM LIST
     */
    "items": {
        "manual" : {
            "id": "manual",
            "name": "Manual",
            "image": "data/img/items/manual.png",
            "icon": "data/img/items/small/manual.png",
            "description": "A manual with instruction on how to use this app ",
            "type": "text",
            "content": "#manual", // ? content in json or better use other format?
            "stackable": "false",
            "use": "read(this.content)"
        }
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
SHORTCUTS
 */
var items = app.items;
var story = app.story;
