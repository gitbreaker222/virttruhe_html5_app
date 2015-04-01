// code from dwa012 @ github
(function( $ ){
  jQuery.fn.extend({
    html5_qrcode: function(qrcodeSuccess, qrcodeError, videoError, active) {
      return this.each(function() {
        var currentElem = $( this );
        
        var height = currentElem.height();
        var width = currentElem.width();
        
        if (height == null) {
          height = 250;
        }
        
        if (width == null) {
          width = 300;
        }
        
        var vidElem = $('<video width="' + width + 'px" height="' + height + 'px"></video>').appendTo(currentElem);
        var canvasElem = $('<canvas id="qr-canvas" width="' + (width - 2) + 'px" height="' + (height - 2) + 'px" style="display:none;"></canvas>').appendTo(currentElem);
        
        var video = vidElem[0];
        var canvas = canvasElem[0];
        var context = canvas.getContext('2d');
        var localMediaStream;
        
        var qrscan = function() {
        	
        	if (scan.status){ //edited by gitbreaker222 @ github
        		if (localMediaStream) {
        		
		            context.drawImage(video, 0, 0, 307,250);
		    
		            try {
		              qrcode.decode();
		              console.log("QR-Code recognized! Stopping qrscan...");
		              context = null;
		              return;
		            } catch(e) {
		              qrcodeError(e);
		            }
		    		setTimeout(qrscan, 500);
		    
		        } else {
		        	setTimeout(qrscan, 500);
		        }
        	}else{
        		console.log("qrscan stopped manually.");
        		return;
        	};
        };//end snapshot function
        
        window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
        navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    
        var successCallback = function(stream) {
            video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
            localMediaStream = stream;
    
            video.play();
            setTimeout(qrscan,1000); //first scan call
        };
    
        // Call the getUserMedia method with our callback functions
        if (navigator.getUserMedia) {
            navigator.getUserMedia({video: true}, successCallback, videoError);
        } else {
            console.log('Native web camera streaming (getUserMedia) not supported in this browser.');
            // Display a friendly "sorry" message to the user
        }
    
        qrcode.callback = qrcodeSuccess;
      }); // end of html5_qrcode
    }
  });
})( jQuery );
