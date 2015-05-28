share = {
	create		: function(item_id){
		var qrcode = $("#share_qrcode .d_message");
		
		//remove previous image
		qrcode.html("");
		//create new qr code
		new QRCode(qrcode[0], "#"+item_id+" :: Zelda Demo - A VIRTTRUHE game");
		//show dialog box
		$("#share_qrcode").show();
	}
};
