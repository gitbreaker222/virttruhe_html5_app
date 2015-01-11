/* VCLSD-Pattern: LOGIC
 * VIEW		
 * CONTROL	
 * LOGIC	<--
 * SERVICE	
 * DATA		
 */

function decode_qr(){
	scan_status = true;
	var canvas = document.getElementById("qr-canvas");
	var context = canvas.getContext("2d");
	var image = document.getElementById("preview_img");
	var form = document.getElementById("myForm");
	var file = form.childNodes[1].files[0];
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
            	found_key(data);
            };
            try {
	    		//automaticly decodes canvas with id="qr-canvas"
				qrcode.decode();
			}catch(e) {
              console.log(e);
              alert("Couldnt find any Items - Try again..."); //TODO popup
              change_status("inventory");
            }
            //remove the preview image
			image.src = "";
		};	
    };
    scan_status = false;
    console.log("scan_status set back to FALSE");
    
}
