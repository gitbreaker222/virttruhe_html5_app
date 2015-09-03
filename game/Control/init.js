/**
 * Created by lexon222 on 03.09.15.
 */
function init(){
    console.log("=====INIT=====");
    $(document).foundation(); //init for foundation framework or so

    //get JSON files
    $.getJSON('Data/items.json', function(data){
        //save JSON to new global object
        items = {};
        for(i in data){
            items[data[i].id] = data[i];
        }
    });
    $.getJSON('Data/key_map.json', function(data){
        //save JSON to new global object
        key_map = {};
        for(i in data){
            key_map[data[i].key] = data[i];
        }

    });
}

$(document).ready(init());