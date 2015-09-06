/**
 * Created by lexon222 on 07.09.15.
 */
var items = {};
var key_map = {};

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

    });
}

load_json();