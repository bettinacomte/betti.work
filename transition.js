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

var resetUnderbarClass2 = function () {
  var underbar = document.getElementsByClassName("underbar")[1];
  underbar.classList.remove('underbar-right')
  underbar.classList.remove('underbar-center')
  underbar.classList.remove('underbar-left')
}

var setUnderbarClass2 = function(className) {
  var underbar = document.getElementsByClassName("underbar")[1];
  underbar.classList.add(className)
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
    var projects2 = document.getElementById('projects2')
    projects2.addEventListener('click', function () {
      resetUnderbarClass2()
      setUnderbarClass2('underbar-left')
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

    var news2 = document.getElementById('news2')
    news2.addEventListener('click', function () {
      resetUnderbarClass2()
      setUnderbarClass2('underbar-center')
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
      toInfoTransition()
    })

    var info2 = document.getElementById('info2')
    info2.addEventListener('click', function () {
      resetUnderbarClass2()
      setUnderbarClass2('underbar-right')
      toInfoTransition()
    })

};
