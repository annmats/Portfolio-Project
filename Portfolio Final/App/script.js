$(document).ready(function () {

    //To prevent reloading
    function ifLoggedIn() {
        if (window.localStorage.getItem("ajaxUsername") != null) {
            $(".form-login").removeClass("active")
            $(".form-login").addClass("inactive")

            $(".homepage").removeClass("inactive")
            $(".homepage").addClass("active")
        }
    }
    ifLoggedIn();

    $(".logout").click(function () {
        window.localStorage.removeItem("ajaxUsername");
        location.reload(0)
    })

    //login validation
    $("form").submit(function (event) {
        event.preventDefault();
        let params = $(this).serialize()
        $.ajax({
            url: "assets/profile.json",
            type: "GET",
            data: params,
            success: function (response) {
                if (parseInt(response.status) == 200) {
                    const info = response.data
                    if (info.username == $("input[name=username]").val() && info.password == $("input[name=password]").val()) {
                        $(".form-login").removeClass("active")
                        $(".form-login").addClass("inactive")

                        $(".homepage").removeClass("inactive")
                        $(".homepage").addClass("active")

                        window.localStorage.setItem("ajaxUsername", response.data.username)
                    }
                    else {
                        $(".message").text("Please input valid username and password.")
                        $(".message").css("color", "red")
                        $(".message").fadeOut(5000)
                    }
                }
            }
        })
    })

    // showSlides()
    let slideIndex = 0;
    showSlides();

    function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" inaction", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " inaction";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
    }

    // featured books script
    $.ajax({
        url: "assets/featured.json",
        type: "GET",
        success: function (response) {
            if (parseInt(response.status) == 200) {
                const books = response.books
                let column = ""
                for (let i = 0; i < books.length; i++) {
                    column = `${column}<div class="featuredbook-container">`
                    column = `${column}<div class="featuredbook-mini flex justify_align">`
                    column = `${column}<a href="${books[i].href}"><img id="featured-img" src="img/Featured/${books[i].image}"></a>`
                    column = `${column}</div>`
                    column = `${column}<div id="featured-category" class="featuredbook-mini">`
                    column = `${column}<a id="featured-href" href="${books[i].href}">${books[i].category}</a>`
                    column = `${column}</div>`
                    column = `${column}</div>`
                }
                $(".featuredbooks-maincontainer").append(column)
            }
        }
    })

})