var dialogs = {
    "test": [
        "this is the first page of a multipage dialog #next",
        "this is a second page of a multipage dialog #prev #ok"
    ],
    "info": {
        "default": "scan VIRTTRUHE QR-Cards and click on items to interact with them #ok",
        "description": "#description <br> #ok",
        "version"   : "<p>VIRTTRUHE "+app.version+" alpha</p><p>developed by <a href='http://www.rubenlabiunda.de'>Ruben La Biunda</a></p>"
    },
    "use": {
        "ask": "#name?<br> #ok #no",
        "combine": "Select item...<br> #ok"
    },

    "ok": "<button onclick='buttons.d_ok()'>OK</button>",
    "no": "<button onclick='buttons.d_close()'>No</button>"
};