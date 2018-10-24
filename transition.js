 $(document).ready(function(){
    $("#news").click(function goNews(){
        console.log("toto");
        document.getElementById("newspage").style.transform = "translateX(-100vw)";
        document.getElementById("newspage").style.transitionDuration = "800ms";
        document.getElementById("projectspage").style.transform = "translateX(-100vw)";
        document.getElementById("projectspage").style.transitionDuration = "800ms";
        document.getElementById("infopage").style.transform = "translateX(-100vw)";
        document.getElementById("infopage").style.transitionDuration = "800ms";

        document.getElementById("underbar").style.transform = "translateX(+160px)";
        document.getElementById("underbar").style.transitionDuration = "400ms";
    });
    $("#projects").click(function goProjects(){
        console.log("toto2");
        document.getElementById("newspage").style.transform = "translateX(0)";
        document.getElementById("newspage").style.transitionDuration = "800ms";
        document.getElementById("projectspage").style.transform = "translateX(0)";
        document.getElementById("projectspage").style.transitionDuration = "800ms";
        document.getElementById("infopage").style.transform = "translateX(0)";
        document.getElementById("infopage").style.transitionDuration = "800ms";

        document.getElementById("underbar").style.transform = "translateX(0px)";
        document.getElementById("underbar").style.transitionDuration = "400ms";
    });
    $("#info").click(function goInfos(){
        console.log("toto3");
        document.getElementById("newspage").style.transform = "translateX(-200vw)";
        document.getElementById("newspage").style.transitionDuration = "800ms";
        document.getElementById("projectspage").style.transform = "translateX(-200vw)";
        document.getElementById("projectspage").style.transitionDuration = "800ms";
        document.getElementById("infopage").style.transform = "translateX(-200vw)";
        document.getElementById("infopage").style.transitionDuration = "800ms";

        document.getElementById("underbar").style.transform = "translateX(+298px)";
        document.getElementById("underbar").style.transitionDuration = "400ms";
    });
});
