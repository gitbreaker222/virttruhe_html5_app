/* VCLSD-Pattern: LOGIC
 * VIEW		
 * CONTROL	
 * LOGIC	<--
 * SERVICE	
 * DATA		
 */
function get_scan_status(){
	return scan_status;
}
function set_scan_status(status){
	scan_status = status;
	console.log("global scan status set to: " + status)
}

function qr_stop(){
	set_scan_status(false);
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

function qr_start(){
	//TODO remove last video picture, because after successfull scan, this will immediatly succeed before new scan
	set_scan_status(true);
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
			set_scan_status(false);
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