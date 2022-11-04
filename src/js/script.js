"use strict";

$(document).ready(function() {

    // All The Scroll Functions

    $(window).scroll(function() {

        NavBar();
        ActiveLink();

    })





    // ===== ===== ===== ----- ----- ----- -----
    // ===== ===== =====
    // ===== ===== =====       Navigation Menu
    // ===== ===== =====
    // ===== ===== ===== ----- ----- ----- -----





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

    NavBar();

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

})