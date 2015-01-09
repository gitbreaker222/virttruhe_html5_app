/* VCLSD-Pattern: LOGIC
 * VIEW		
 * CONTROL	
 * LOGIC	<--
 * SERVICE	
 * DATA		
 */

//TODO delete qr_start and qr_stop because camera straming is not used
function qr_start(){
	//TODO remove last video picture, because after successfull scan, this will immediatly succeed before new scan
	scan_status = true;
	setTimeout(function(){
		qr_stop();
		alert("Nothing found. Try again.");
		},28000);
		
	$('#reader').html5_qrcode(function(data){
			// do something when code is read
			
				play_sfx("OOT_Get_SmallItem1.wav");
		 		qr_stop();
		 			console.log("code is: " + data);
		 		var item = found_key(data);
		 		add_to_inventory(item);
		 		//close scanner view, show inventory
				setTimeout(function(){music.play();}, 700);
				page_inventory.setAttribute("class", "show");
				page_scan.setAttribute("class", "hide");
				page_pause.setAttribute("class", "hide");
		 		// - set scan_status back
				scan_status = false;
	 	},
	 	function(error){
			//show read errors 
			console.log("...scanning...");
			play_sfx("beep2_quiet.wav");
		}, function(videoError){
			//the video stream could not be opened
			alert("your browser does not support camera access");
		}
		
	);
}

function qr_stop(){
	scan_status = false;
	//TODO: end camera steam
	var parent = document.getElementById("reader");
	var child = document.getElementsByTagName("video")[0];
	parent.removeChild(child);
	
	//change state back to inventory TODO: this needs a function
	var page_inventory = document.getElementById("inventory");
	var page_scan = document.getElementById("scan");
	play_sfx("OOT_MainMenu_Error.wav");
	setTimeout(function(){music.play();}, 700);
	page_inventory.setAttribute("class", "show");
	page_scan.setAttribute("class", "hide");
}

function decode_qr(){
	scan_status = true;
	var canvas = document.getElementById("qr-canvas");
	var context = canvas.getContext("2d");
	var image = document.getElementById("preview_img");
	var file = document.querySelector('input[type=file]').files[0];
	var reader = new FileReader();
	
	if (file) {
	    reader.readAsDataURL(file);
	}else {
	    image.src = "";
  	}
	
    reader.onloadend = function(){
    	image.src = reader.result;
    	//wait till the image is loaded
    	image.onload = function (){
    		//delete picture from previous scan
    		context.clearRect(0, 0, canvas.width, canvas.height);
    		//...then draw it on the canvas
	    	context.drawImage(image,10,10,307,250);
	    	
	    	//prepare reaction on successfull scan
			qrcode.callback = function(data){
				console.log("QR-Code says: " + data);
            	alert("Item found: "+ data);
            	//TODO pass the code to the item-functions...
			};
            try {
	    		//automaticly decodes canvas with id="qr-canvas"
				qrcode.decode();
				return;
            }catch(e) {
              console.log(e);
            }
	    };	
    };
    scan_status = false;
    console.log("scan_status set back to FALSE");
    
}
