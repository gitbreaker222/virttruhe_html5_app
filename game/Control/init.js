/**
 * Created by lexon222 on 03.09.15.
 */
function init(){
    console.log("=====INIT=====");
    $(document).foundation();
    $.getJSON('Data/items.json', function(data){
        //save JSON to new global object
        items = {};
        for(i in data){
            items[data[i].id] = data[i];
        }

    })
}

$(document).ready(init());