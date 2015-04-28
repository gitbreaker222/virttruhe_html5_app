/*
 * THIS FUNCTION IS TO PRINT CONSOLE MESSAGES TO THE PAGE AND IS USEFULL FOR TESTING
 * PURPOSES ON SMARTPHONES
 */
message = {
	/*
	 * PROPERTIES
	 */
	
	log			: [],
	
	target		: page.layer, //link does not work for some reason  
	
	
	/*
	 * METHODS
	 */
	
	print		: function (text) {
			console.log(text);
			
			this.log.push(text);
			
			page.layer.html(text);
		},
	
};
function printnote(text){message.print(text);};