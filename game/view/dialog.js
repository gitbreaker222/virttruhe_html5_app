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
        $(".d_active").hide();
        
        //if dialog has an audio track, then stop/reset it
        if ($(".d_active audio")[0]) {
            $(".d_active audio")[0].pause();
            $(".d_active audio")[0].currentTime = 0;
            $(".d_active audio").removeClass("d_active");
        }
    }
};
