"use strict";

$(document).ready(function() {

    // All The Scroll Functions

    $(window).scroll(function() {

        NavBar();
        ActiveLink();

    })

    // This Function is for Navigation Height on Scroll

    function NavBar() {

        if($(window).scrollTop() > 0) {

            $(".navParent").css({
                height: "70px",
            })

        } else {

            $(".navParent").css({
                height: "90px",
            })

        }

    }

    // This Function Is for Active Link On Scroll

    function ActiveLink() {

        $(".menu a").each(function() {

            let sectionOffset = $(this.hash).offset().top;
    
            if(sectionOffset < $(window).scrollTop() + 5) {
    
                $(".menu a").removeClass("active")
                $(this).addClass("active")
    
            }
    
        })

    }

    // This Function is For Dark & Light Mode

    function Theme() {

        const theme = {
            parent: $(".theme"),
            icon: $(".theme i"),
            text: $(".theme p"),
        }
    
        theme.parent.click(function() {
    
            if($("body").hasClass("dark")) {
                $("body").removeClass("dark");
                theme.icon.addClass("fa-moon");
                theme.icon.removeClass("fa-sun");
                theme.text.text("Dark");
            } else {
                $("body").addClass("dark");
                theme.icon.removeClass("fa-moon");
                theme.icon.addClass("fa-sun");
                theme.text.text("Light");
            }
    
        })

    }

    Theme();

})