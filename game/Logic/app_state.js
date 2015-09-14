var app_state = {
    //this is not used at the time - instead use app.state setter
    change  : function(next_state){
            if(this.state == "menu" && next_state == "scan"){
                //special case when returning from pause menu to scanner
                this.state = next_state;
                this.prev_state1 = this.prev_state2;
                this.prev_state2 = "menu";
            }else{
                this.prev_state2 = this.prev_state1;
                this.prev_state1 = this.state;
                this.state = next_state;
            }
        /*
            //unload current state characteristics (on leave)
            switch(this.prev_state1){
                case "inventory" :
                    break;

                case "scan" :
                    scan.stop();
                    break;

                case "title" :
                    break;

                case "menu" :
                    audio.play_sfx("pause_open");

                    //activate scan button
                    ui.btn_scan.removeClass("disabled");
                    break;

                case "new_item" :
                    break;

                case "portal" :
                    break;

                default :
                    break;
            }

            //load next state characteristics (on enter)
            switch(next_state){
                case "inventory" :
                    if(this.prev_status != "menu"){
                        inventory.unselect();
                    }
                    audio.play();
                    break;

                case "scan" :
                    audio.pause();
                    scan.start();
                    break;

                case "title" :
                    break;

                case "menu" :
                    audio.pause();
                    audio.play_sfx("pause_close");
                    //disable scan button
                    ui.btn_scan.addClass("disabled");
                    break;

                case "new_item" :
                    break;

                case "portal" :
                    break;

                case "new_item":
                    break;

                case "portal":
                    break;

                default :
                    break;
            }
            */
    }
};