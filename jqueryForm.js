$(document).ready(function(){  

    $(".usern").hide();
    $(".email").hide();
    $(".pass").hide();
    var err  = false;
    var u =$("#user").val();
    $("#btn").click(function(){
    
        if(u<1){
            alert("");
            return false;
        }
    
    });

})