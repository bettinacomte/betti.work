 $(document).ready(function(){
    $("#news").click(function goNews(){
        console.log("toto");
        document.getElementById("newspage").style.transform = "translateX(-100vw)";
        document.getElementById("newspage").style.transition = "800ms ease-in-out";
        document.getElementById("projectspage").style.transform = "translateX(-100vw)";
        document.getElementById("projectspage").style.transition = "800ms ease-in-out";
        document.getElementById("infopage").style.transform = "translateX(-100vw)";
        document.getElementById("infopage").style.transition = "800ms ease-in-out";

        document.getElementById("underbar").style.transform = "translateX(+160px)";
        document.getElementById("underbar").style.transition = "400ms ease-in-out";
    });
    $("#projects").click(function goProjects(){
        console.log("toto2");
        document.getElementById("newspage").style.transform = "translateX(0)";
        document.getElementById("newspage").style.transition = "800ms ease-in-out";
        document.getElementById("projectspage").style.transform = "translateX(0)";
        document.getElementById("projectspage").style.transition = "800ms ease-in-out";
        document.getElementById("infopage").style.transform = "translateX(0)";
        document.getElementById("infopage").style.transition = "800ms ease-in-out";

        document.getElementById("underbar").style.transform = "translateX(0px)";
        document.getElementById("underbar").style.transition = "400ms ease-in-out";
    });
    $("#info").click(function goInfos(){
        console.log("toto3");
        document.getElementById("newspage").style.transform = "translateX(-200vw)";
        document.getElementById("newspage").style.transition = "800ms ease-in-out";
        document.getElementById("projectspage").style.transform = "translateX(-200vw)";
        document.getElementById("projectspage").style.transition = "800ms ease-in-out";
        document.getElementById("infopage").style.transform = "translateX(-200vw)";
        document.getElementById("infopage").style.transition = "800ms ease-in-out";

        document.getElementById("underbar").style.transform = "translateX(+298px)";
        document.getElementById("underbar").style.transition = "400ms ease-in-out";
    });
});
