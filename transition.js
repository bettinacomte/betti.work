 $(document).ready(function(){
    $("#news").click(function goNews(){
        console.log("toto");
        document.getElementById("newspage").style.transform = "translateX(-100vw)";
        document.getElementById("newspage").style.transitionDuration = "1s";
        document.getElementById("projectspage").style.transform = "translateX(-100vw)";
        document.getElementById("projectspage").style.transitionDuration = "1s";
        document.getElementById("infopage").style.transform = "translateX(-100vw)";
        document.getElementById("infopage").style.transitionDuration = "1s";

        document.getElementById("underbar").style.transform = "translateX(+200px)";
        document.getElementById("underbar").style.transitionDuration = "1s";
    });
    $("#projects").click(function goProjects(){
        console.log("toto2");
        document.getElementById("newspage").style.transform = "translateX(0)";
        document.getElementById("newspage").style.transitionDuration = "1s";
        document.getElementById("projectspage").style.transform = "translateX(0)";
        document.getElementById("projectspage").style.transitionDuration = "1s";
        document.getElementById("infopage").style.transform = "translateX(0)";
        document.getElementById("infopage").style.transitionDuration = "1s";
    });
    $("#info").click(function goInfos(){
        console.log("toto3");
        document.getElementById("newspage").style.transform = "translateX(-200vw)";
        document.getElementById("newspage").style.transitionDuration = "1s";
        document.getElementById("projectspage").style.transform = "translateX(-200vw)";
        document.getElementById("projectspage").style.transitionDuration = "1s";
        document.getElementById("infopage").style.transform = "translateX(-200vw)";
        document.getElementById("infopage").style.transitionDuration = "1s";
    });
});
