"use strict";

$(document).ready(function() {

    // All The Scroll Functions

    $(window).scroll(function() {

        NavBar();
        ActiveLink();
        AboutScrollAnimation();

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





    // ===== ===== ===== ----- ----- ----- -----
    // ===== ===== =====
    // ===== ===== =====       Home
    // ===== ===== =====
    // ===== ===== ===== ----- ----- ----- -----





    // This Function is for Changing Mode (Light or Dark)
    
    function themeFunc() {

        const settings = {
            themeBtn: $(".themeParent"),
            themeIcon: $(".themeParent i"),
        };

        settings.themeBtn.click(function() {
            
            if($("body").hasClass("dark")) {
                $("body").removeClass("dark");
                settings.themeIcon.removeClass("fa-sun");
                settings.themeIcon.addClass("fa-moon");
            } else {
                $("body").addClass("dark");
                settings.themeIcon.removeClass("fa-moon");
                settings.themeIcon.addClass("fa-sun");
            }

        })

    }

    themeFunc();

    // This Function is for Changing Color

    function openFunc() {

        const gear = {
            gearIcon: $(".settingsBtn"),
            settingsParent: $(".settingsParent"),
        }

        gear.gearIcon.click(function() {

            if(gear.settingsParent.hasClass("open")) {
                gear.settingsParent.removeClass("open");
                gear.settingsParent.addClass("close");
            } else {
                gear.settingsParent.removeClass("close");
                gear.settingsParent.addClass("open");
            }

        })

        const colors = {
            color_1: $(".colors.color-1"),
            color_2: $(".colors.color-2"),
            color_3: $(".colors.color-3"),
            color_4: $(".colors.color-4"),
            color_5: $(".colors.color-5"),
        }

        changeColorFunc(colors.color_1);
        changeColorFunc(colors.color_2);
        changeColorFunc(colors.color_3);
        changeColorFunc(colors.color_4);
        changeColorFunc(colors.color_5);

    }

    openFunc();

    // this function is for Changing Color

    function changeColorFunc(color) {

        const gear = {
            gearIcon: $(".settingsBtn"),
            settingsParent: $(".settingsParent"),
        }

        color.click(function() {
            let int = color.attr("class");
            int = int["13"];

            if(!$("body").hasClass(color)) {
                for(let i = 1; i <= 5; i++) {
                    $("body").removeClass("color-" + i);
                }
                $("body").addClass("color-" + int);
            }
        
            gear.settingsParent.removeClass("close");
            gear.settingsParent.addClass("open");

        })

    }

    // This Function Is For Scroll Animation

    function AboutScrollAnimation() {

        var about = $("#about");
        var wScroll = $(window).scrollTop() + $(window).height();
        var aboutAnimationParent = about.offset().top + about.height() / 2;

        if(wScroll >= aboutAnimationParent) {

            $("#aboutAnimationParent").css({
                display: "block",
            })

        }

    }

})