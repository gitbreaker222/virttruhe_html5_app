/**
 * Created by lexon222 on 07.09.15.
 */
function Video_scanner(){
    this.start = function(){
        var node = $('#video-scanner');

        //remove canvas from previous scan
        node.html("");

        //start new scan
        node.html5_qrcode(function(data){
                // do something when code is read
                console.log("QR-Code recognized! Stopping qrscan...");

                scanner.search_key(data)
            },
            function(error){
                //show read errors
            }, function(videoError){
                //the video stream could not be opened
                console.log(videoError)
            }
        );
    };

    this.stop = function(){
        //not needed
    };
}

var video_scanner = new Video_scanner();