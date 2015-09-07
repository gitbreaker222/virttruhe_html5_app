/**
 * Created by lexon222 on 07.09.15.
 */
function Video_scanner(){
    this.start = function(){
        $('#video-scanner').html5_qrcode(function(data){
                // do something when code is read
                console.log(data)
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
    };
}

var video_scanner = new Video_scanner();