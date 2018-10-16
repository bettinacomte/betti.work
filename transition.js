 $(document).ready(function(){
    $("#news").click(function(){
        console.log("toto");
        $("#projectspage").animate({
          left: '-100vw',
        }, 1000);
        $("#newspage").animate({
          right: '100vw',
        }, 1000);
    });
});

var links = document.querySelectorAll(".headerlink");
var section = document.querySelectorAll("sections");
