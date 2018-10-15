$(document).ready(function(){
    $("#news").click(function(){
        console.log("toto")
        $("#projectspage").animate({
          x: "-100vw"
        }, 5000);
        $("#test2").animate({
            left: '250px',
            opacity: '0.5',
            height: '250px',
            width: '250px'
        });
    });
});
