function btn_scan(){
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
