/**
 * Created by lexon222 on 26.08.15.
 */
function Scanner(){
    this.start = function(){
        console.log("==start scanner==...");

        switch (app.config.scanner){
            case "text":
                text_scanner.start();
                break;
            case "video":
                video_scanner.start();
                break;
            default :
                video_scanner.start();
                break;
        }

        app.state = "scan";
    };

    this.stop = function(){
        console.log("==stop scanner==");

        app.state = app.prev_state;
    };

    this.search_key = function(message){
        var key;

        if( message.search(/#(\d|[abcdef]){8}\s/i) == -1) {
            alert("no VIRTTRUHE found");
            this.stop();
        }else{
            key = message.slice(/#(\d|[abcdef]){8}\s/i);
            this.found_virttruhe(key)
        }

    };

    this.found_virttruhe = function(key){
        console.log("found virttruhe: " + key);
        var id, type, set, layer, decision;

        id = this.map_key(key);
        type = this.get_type(id); //item/set/portal

        switch (type){
            case "item":
                inventory.add(id);
                alert("you have found: "+id);
                break;

            case "set":
                //cut out the set name from id (e.g. set_museum -> museum)
                set = id.substring(4, id.length);
                for (cur_id in items){
                    //add every item with this set to inventory
                    if(items[cur_id].set === set){
                        inventory.add(cur_id)
                    }
                }
                alert("you have found the set: "+set);
                break;

            case "portal":
                decision = window.confirm("the portal to " +layer+ ". Enter?");
                    if(decision){
                        console.log("enter portal");
                    }else{
                        console.log("return");
                    }
                break;

            default :
                console.log("error - item type not defined");
                break;
        }

        app.state = "inventory";


    };

    this.map_key = function(key){
        if(key_map[key] === undefined){
            return
        }
        return key_map[key][app.story.layer];
    };

    this.get_type = function(id){
        //check if is set
        if(id.search("set")>=0){
            // e.g. id = "set_museum"
            return "set";
        }else if(id.substring(1,2) === "a"){
            // e.g. #a0000000
            return "portal"
        }else{
            return "item"
        }
    }


}

var scanner = new Scanner();