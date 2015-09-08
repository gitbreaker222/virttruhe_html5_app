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
            case "photo":
                alert("TO BE DONE");
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
        var key,
            id,
            pattern = /#(?:\d|[abcdef]){8}\b/i;

        console.log("got message: "+message);

        //look for key in message (e.g. #00000001)
        if(pattern.test(message) == false){
            alert("no VIRTTRUHE found");
            this.stop();
        }else{
            //extract key and trim whitespace
            key = message.match(pattern)[0].trim();
            //check if key is listed on item map
            id = this.map_key(key);
            if(id === undefined){
                alert("Key not listed: "+key);
                this.stop();
                return;
            }

            this.found_virttruhe(id);
        }

    };

    this.found_virttruhe = function(id){
        console.log("found virttruhe: " + id);
        var type, set, layer, decision;

        type = this.get_type(id); //item/set/portal/null

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

            case "empty":
                alert("Empty VIRTTRUHE. Maybe on another layer");
                break;

            default :
                console.log("error - item type not defined");
                break;
        }

        //app.state = "inventory";
        this.stop();
    };

    this.map_key = function(key){
        if(key_map[key] === undefined){
            return undefined
        }
        return key_map[key][app.story.layer];
    };

    this.get_type = function(id){
        //check if null
        if(id === null) return "empty";
        //check if is set - e.g. id = "set_museum"
        if(id.search("set")>=0) return "set";
        //check if portal - e.g. #a0000000
        if(id.substring(1,2) === "a") return "portal";
        else return "item"
    }


    this.change = function(type){
        console.log(type);
        app.config.scanner = type;
    }


}

var scanner = new Scanner();