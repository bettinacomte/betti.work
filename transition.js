$(document).ready(function(){
    $("#news").click(function(){
        $("#test").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
        $("#test2").animate({
            left: '250px',
            opacity: '0.5',
            height: '250px',
            width: '250px'
        });
    });
});
