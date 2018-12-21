var resetUnderbarClass = function () {
  var underbar = document.getElementsByClassName("underbar")[0];
  underbar.classList.remove('underbar-right')
  underbar.classList.remove('underbar-center')
  underbar.classList.remove('underbar-left')
}

var setUnderbarClass = function(className) {
  var underbar = document.getElementsByClassName("underbar")[0];
  underbar.classList.add(className)
}

var resetTextClass = function () {
  var text = document.getElementsByClassName("header-text")[0];
  underbar.classList.remove('header-text-link')
}

var setTextClass = function(classNameText){
  var text = document.getElementsByClassName("header-text")[0];
  text.classList.add(classNameText)
}

document.onreadystatechange = function () {

  var toProjectsTransition = function (){
    document.getElementById("newspage").style.transform = "translateX(0)";
    document.getElementById("newspage").style.transition = "800ms ease-in-out";
    document.getElementById("projectspage").style.transform = "translateX(0)";
    document.getElementById("projectspage").style.transition = "800ms ease-in-out";
    document.getElementById("infopage").style.transform = "translateX(0)";
    document.getElementById("infopage").style.transition = "800ms ease-in-out";
  }

    var projects = document.getElementById('projects')
    projects.addEventListener('click', function () {
      resetUnderbarClass()
      setUnderbarClass('underbar-left')
      toProjectsTransition()
    })

  var toNewsTransition = function () {
    document.getElementById("newspage").style.transform = "translateX(-100vw)";
    document.getElementById("newspage").style.transition = "800ms ease-in-out";
    document.getElementById("projectspage").style.transform = "translateX(-100vw)";
    document.getElementById("projectspage").style.transition = "800ms ease-in-out";
    document.getElementById("infopage").style.transform = "translateX(-100vw)";
    document.getElementById("infopage").style.transition = "800ms ease-in-out";
  }

    var news = document.getElementById('news')
    news.addEventListener('click', function () {
      resetUnderbarClass()
      setUnderbarClass('underbar-center')
      toNewsTransition()
    })

    var toInfoTransition = function () {
      document.getElementById("newspage").style.transform = "translateX(-200vw)";
      document.getElementById("newspage").style.transition = "800ms ease-in-out";
      document.getElementById("projectspage").style.transform = "translateX(-200vw)";
      document.getElementById("projectspage").style.transition = "800ms ease-in-out";
      document.getElementById("infopage").style.transform = "translateX(-200vw)";
      document.getElementById("infopage").style.transition = "800ms ease-in-out";
    }

    var info = document.getElementById('info')
    info.addEventListener('click', function () {
      resetUnderbarClass()
      setUnderbarClass('underbar-right')
      resetTextClass()
      setTextClass('header-text-link-active')
      console.log(hello);
      toInfoTransition()
    })

};
