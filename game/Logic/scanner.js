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
    };

    this.found_virttruhe = function(message){
        console.log("found virttruhe: " + message);
    }
}

var scanner = new Scanner();