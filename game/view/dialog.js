dialog = {
    init : function() {
        //hide all dialogs
        $(".dialog").hide();
        //apply background click for close to each
        //$(".dialog").attr("onclick", "$(this).hide()");
        //fix background click for new_item dialog
        $("#d_ni").attr("onclick", "");
    },

    close : function() {
       
        
        //if dialog has an audio track, then stop/reset it
        if ($(".d_active audio")[0]) {
            $(".d_active audio")[0].pause();
            $(".d_active audio")[0].currentTime = 0;
            $(".d_active audio");
        }
        
        $(".d_active").hide().removeClass("d_active");
    }
};
