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

    // This Function is For Settings Menu

    function Settings() {

        const settingsParent = {
            settings: $(".settings"),
            settingsMenu: $(".settingsMenu"),
        }

        settingsParent.settings.click(function() {

            if(settingsParent.settings.hasClass("open")) {

                settingsParent.settingsMenu.css({
                    display: "none",
                })
                settingsParent.settings.removeClass("open");

            } else {

                settingsParent.settingsMenu.css({
                    display: "block",
                })
                settingsParent.settings.addClass("open");

            }

        })

    }

    Settings();

    // This Function Is for Changing color

    function ChangeColor() {

        let color1 = $(".colorsParent .color-1"),
            color2 = $(".colorsParent .color-2"),
            color3 = $(".colorsParent .color-3"),
            color4 = $(".colorsParent .color-4"),
            color5 = $(".colorsParent .color-5");

            color1.click(function() {
                $("body").removeClass("color-1");
                $("body").removeClass("color-2");
                $("body").removeClass("color-3");
                $("body").removeClass("color-4");
                $("body").removeClass("color-5");
                $("body").addClass("color-1");
            })
            
            color2.click(function() {
                $("body").removeClass("color-1");
                $("body").removeClass("color-2");
                $("body").removeClass("color-3");
                $("body").removeClass("color-4");
                $("body").removeClass("color-5");
                $("body").addClass("color-2");
            })
            
            color3.click(function() {
                $("body").removeClass("color-1");
                $("body").removeClass("color-2");
                $("body").removeClass("color-3");
                $("body").removeClass("color-4");
                $("body").removeClass("color-5");
                $("body").addClass("color-3");
            })
            
            color4.click(function() {
                $("body").removeClass("color-1");
                $("body").removeClass("color-2");
                $("body").removeClass("color-3");
                $("body").removeClass("color-4");
                $("body").removeClass("color-5");
                $("body").addClass("color-4");
            })
            
            color5.click(function() {
                $("body").removeClass("color-1");
                $("body").removeClass("color-2");
                $("body").removeClass("color-3");
                $("body").removeClass("color-4");
                $("body").removeClass("color-5");
                $("body").addClass("color-5");
            })

    }

    ChangeColor();

})