/*
 * THIS IS MY PSEUDO EVENT HANDLER
 * 
 * It should act like an observer for the controllers,
 * but it just is a callback chain:
 * logic/data --> events --> controller
 * 
 * simple, but not clean object orientated design with
 * fancy observer pattern
 * 
 */

events = {
	"event_flag": false,
	/*
	 *  INVENTORY EVENTS
	 */
	"select"	: function(){
					if(event_flag){
						return;
					}
					this.event_flag = true;
					ui_update.select;
				},
	
	"add"		: function(){
					if(event_flag){
						return;
					}
					this.event_flag = true;
					ui_update.update_items;
				},
	
	
	
};
