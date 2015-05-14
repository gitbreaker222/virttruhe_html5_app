/*
 * GLOBAL BUTTONS
 */
function btn_scan(){
	console.log("pressed scan button");
	
	//load current state
	var state = system_status.state;
	var prev_state1 = system_status.prev_state1;
	var prev_state2 = system_status.prev_state2;
	
	if(state != "scan"){
		system_status.change_state("scan");
	}else{
		system_status.change_state(prev_state1);
	}
	
}



function btn_options(){
	console.log("pressed pause/options button");
	
	//load current state
	var state = system_status.state;
	var prev_state1 = system_status.prev_state1;
	var prev_state2 = system_status.prev_state2;
	
	if(state != "pause"){
		system_status.change_state("pause");
	}else{
		system_status.change_state(prev_state1);
	}
}


/*
 * INVENTORY BUTTONS
 */
function btn_use(){
	console.log("pressed use button");
	
}


function btn_share(){
	console.log("pressed share button");
	
}

function btn_delete(){
	console.log("pressed delete button");
	
}













