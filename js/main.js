$(document).ready(function(){
    //$("#showwild").hide();
    $("#link1").click(function(){
        if ( $("#showwild").is(":hidden") ) {
            $("#showwild").slideDown(400);
        } else {
            $("#showwild").slideUp(400);
        }
        //$("#showwild").slideDown(400);
    });
});