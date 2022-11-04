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

        if($(window).width() > 800) {
            
            if($(window).scrollTop() > 0) {

                $(".navParent").css({
                    height: "70px",
                })

                $(".navParent .logoParent .logo").css({
                    height: "45px",
                    width: "45px",
                })
    
            } else {
    
                $(".navParent").css({
                    height: "90px",
                })

                $(".navParent .logoParent .logo").css({
                    height: "55px",
                    width: "55px",
                })
    
            }

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

    // This Function is for Mobile Menu

    function mobileMenu() {

        const mobile = {
            toggle: $(".mobileMenuToggle"),
            menu: $(".mobileMenuParent"),
            links: $(".mobileMenuParent a")
        }

        mobile.toggle.click(function() {

            mobile.menu.css({
                display: "block",
            })


        })

        mobile.links.click(function() {

            mobile.menu.css({
                display: "none",
            })

        })

    }

    mobileMenu();

})