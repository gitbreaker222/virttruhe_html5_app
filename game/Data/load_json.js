/**
 * Created by lexon222 on 07.09.15.
 */
var items = {};
var key_map = {};
var dialogs = {};



// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    console.log(" Great success! All the File APIs are supported.")
} else {
    alert('The File APIs are not fully supported in this browser.');
}



function load_json(){
    //get JSON files
    $.getJSON('Data/items.json', function(data){
        //save JSON to new global object
        for(i in data){
            items[data[i].id] = data[i];
        }
    });
    $.getJSON('Data/key_map.json', function(data){
        //save JSON to new global object
        for(i in data){
            key_map[data[i].key] = data[i];
        }
        console.log("ready");
        //set ready flag
        app.loading = false;
    });
    $.getJSON('Data/dialogs.json', function(data){
        dialogs = data;
    });
}

load_json();