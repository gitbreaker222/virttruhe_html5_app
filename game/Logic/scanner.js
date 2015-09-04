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
        var key = message.slice(/#(\d|[abcdef]){8}/i);

        if(key === -1){
            alert("nothing found");
            this.stop();
        }else{
            this.found_virttruhe(key)
        }

    };

    this.found_virttruhe = function(key){
        console.log("found virttruhe: " + key);
    };

    this.map_key = function(key){

    };


}

var scanner = new Scanner();