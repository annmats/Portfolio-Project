$(document).ready(function () {

  let ajaxfirstName = null
  var oldUrl1 = $("a.pr1").attr("href")
  var oldUrl2 = $("a.pr2").attr("href")
  var oldUrl3 = $("a.pr3").attr("href")
  var oldUrl4 = $("a.pr4").attr("href")
  var newUrl1
  var newUrl2
  var newUrl3
  var newUrl4
  var oldProjImage1 = $("img.pr1").attr("src")
  var oldProjImage2 = $("img.pr2").attr("src")
  var oldProjImage3 = $("img.pr3").attr("src")
  var oldProjImage4 = $("img.pr4").attr("src")
  var newProjImage1
  var newProjImage2
  var newProjImage3
  var newProjImage4

  /* PUT PROJECT URL & IMAGE "HERE" IN REPLACE METHOD */
  function replaceProjects(){
    newUrl1 = oldUrl1.replace("JC-proj/WD_Activity_Jethro_2/index.html", "MM-proj/PROJ_1/PROJ_1_index.html")
    newUrl2 = oldUrl2.replace("JC-proj/WD_Activity_Jethro_3/index.html", "MM-proj/PROJ_2/index.html")
    newUrl3 = oldUrl3.replace("JC-proj/WD_Activity_Jethro_6/index.html", "MM-proj/PROJ_3/index.html")
    newUrl4 = oldUrl4.replace("App/index.html", "App/index.html")
    $("a.pr1").attr("href", newUrl1)
    $("a.pr2").attr("href", newUrl2)
    $("a.pr3").attr("href", newUrl3)
    $("a.pr4").attr("href", newUrl4)
    newProjImage1 = oldProjImage1.replace("img/J-PROJ-1.JPG", "img/image1.JPG")
    newProjImage2 = oldProjImage2.replace("img/J-PROJ-2.JPG", "img/image2.JPG")
    newProjImage3 = oldProjImage3.replace("img/J-PROJ-3.JPG", "img/image3.JPG")
    newProjImage4 = oldProjImage4.replace("img/J-PROJ-4.JPG", "img/image4.JPG")
    $("img.pr1").attr("src", newProjImage1)
    $("img.pr2").attr("src", newProjImage2)
    $("img.pr3").attr("src", newProjImage3)
    $("img.pr4").attr("src", newProjImage4)
  }

  function WelcomePage() {
    $("section.welcome").addClass("active")
    $("section.welcome").removeClass("inactive")
    $("section.main").addClass("inactive")
    $("section.main").removeClass("active")
    window.localStorage.setItem("ajaxfirstName", null)
  }

  function mainPage() {
    $("section.welcome").removeClass("active")
    $("section.welcome").addClass("inactive")
    $("section.main").removeClass("inactive")
    $("section.main").addClass("active")
  }

  function checkedifViewed() {
      if (window.localStorage.getItem("ajaxfirstName") == "Mary Ann") { 
          mainPage()
          MaryAnn() 
      }
      else if (window.localStorage.getItem("ajaxfirstName") == "Jethro") {
          mainPage()
          Jethro()
      }
      else if (window.localStorage.getItem("ajaxfirstName") == null) {
          WelcomePage()
      }
  }

  checkedifViewed();

  /*Mary Ann Portfolio*/
  function MaryAnn() {
      $("section#bg-heading").removeClass("img5")
      $("section#bg-heading").addClass("img1")
      replaceProjects()
      $.ajax({
          url: "assets/profile.json",
          type: "GET",
          success: function(response) {
              if (parseInt(response.status) == 200) {
                  const data = response.data
                  const skills = response.skills
  
                  $("#firstname").html(data[1].firstName)
                  $("#lastname").html(`${data[1].lastName}.`)
                  $("#job").html(data[1].job)

                  window.localStorage.setItem("ajaxfirstName", data[1].firstName)
              }
          }
      })
  }

  /*Jethro Portfolio*/
  function Jethro() {
      $("section#bg-heading").removeClass("img1")
      $("section#bg-heading").addClass("img5")
      $("a.pr1").attr("href", oldUrl1)
      $("a.pr2").attr("href", oldUrl2)
      $("a.pr3").attr("href", oldUrl3)
      $("img.pr1").attr("src", oldProjImage1)
      $("img.pr2").attr("src", oldProjImage2)
      $("img.pr3").attr("src", oldProjImage3)
      $("img.pr4").attr("src", oldProjImage4)
      $.ajax({
          url: "assets/profile.json",
          type: "GET",
          success: function(response) {
              if (parseInt(response.status) == 200) {
                  const data = response.data
                  const skills = response.skills

                  $("#firstname").html(data[0].firstName)
                  $("#lastname").html(`${data[0].lastName}.`)
                  $("#job").html(data[0].job)

                  window.localStorage.setItem("ajaxfirstName", data[0].firstName)
              }
          }
      })
  }

  $(".welcome-page").click(function () {
      WelcomePage()
  })

  $(".btn-welcome").click(function () {
      mainPage()
      if ($(this).is("#MaryAnn") == true) {
          MaryAnn()
      }
      else if ($(this).is("#Jethro") == true) {
          Jethro()
      }
  });
})
