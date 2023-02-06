"use strict";

$(document).ready(function() {

    // All The Scroll Functions

    $(window).scroll(function() {

        NavBar();
        ActiveLink();
        ScrollAnimation($("#about"), $("#aboutAnimationParent"));
        ScrollAnimation($("#skills"), $("#skillsAnimationParent"));
        ScrollAnimation($("#works"), $("#worksAnimationParent"));
        ScrollAnimation($("#contact"), $("#contactAnimationParent"));
        ScrollAnimation($("#contact"), $(".footerAnimationParent"));

    })

    // This Function Is For Scroll Animation

    function ScrollAnimation(id, animation) {

        var section = id;
        var wScroll = $(window).scrollTop() + $(window).height();
        var AnimationParent = section.offset().top + section.height() / 2;

        if(wScroll >= AnimationParent) {

            animation.css({
                display: "block",
            })

        }

    }

    // This Function is For Cursor

    $(window).mousemove((e) => {

        if($(this).width() > 1100) {

            let cursor = $(".mouse");
            let x = e.pageX;
            let y = e.pageY;
    
            cursor.css({
                left: x + "px",
                top: y + "px",
                opacity: "1",
            })

        }

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

    // This Function is for Opening Settings Menu

    function openFunc() {

        const gear = {
            gearIcon: $(".settingsBtn"),
            settingsParent: $(".settingsParent"),
        }

        $(window).click(function(e) {

            let className = e.target.className;

            if(className != "settingsBtn" && className != "fa-solid fa-gear") {
                gear.settingsParent.removeClass("close");
                gear.settingsParent.addClass("open");
            }

        })

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

        color.click(function() {
            let int = color.attr("class");
            int = int["13"];

            if(!$("body").hasClass(color)) {
                for(let i = 1; i <= 5; i++) {
                    $("body").removeClass("color-" + i);
                }
                $("body").addClass("color-" + int);
            }

        })

    }





    // ===== ===== ===== ----- ----- ----- -----
    // ===== ===== =====
    // ===== ===== =====       Works
    // ===== ===== =====
    // ===== ===== ===== ----- ----- ----- -----





    // This Function is for Works Content Hover

    function worksContentHover() {

        if($(window).width() > 1100) {

            const worksContent = {
                content: $(".worksImageParent"),
                image: $(".worksContent img"),
            };
    
            worksContent.content.mouseenter(function() {
                worksContent.content.mousemove(function(e) {
    
                    let x = e.offsetX;
                    let y = e.offsetY;
    
                    worksContent.image.css({
                        "transform-origin": x + "px " + y + "px",
                    })
    
                })
            })
    
            $(".worksImageParent + div").mouseenter(function() {
                $(".worksImageParent + div").mousemove(function() {
                    worksContent.image.css({
                        "transform-origin": "center",
                    })
                })
            })

        }

    }

    worksContentHover();





    // ===== ===== ===== ----- ----- ----- -----
    // ===== ===== =====
    // ===== ===== =====       Contact
    // ===== ===== =====
    // ===== ===== ===== ----- ----- ----- -----





    // This Function is For Contact Section

    function contact() {
        
        let date = new Date();
        let currentYear = date.getFullYear();
        $(".currentYear").text(currentYear);

        const form = {
            name: {
                inp: $("#name"),
                label: $("#nameLabel"),
                icon: $("#nameLabel + i"),
                valid: false,
            },
            lastName: {
                inp: $("#lastName"),
                label: $("#lastNameLabel"),
                icon: $("#lastNameLabel + i"),
                valid: false,
            },
            email: {
                inp: $("#email"),
                label: $("#emailLabel"),
                icon: $("#emailLabel + i"),
                valid: false,
            },
            subject: {
                inp: $("#subject"),
                label: $("#subjectLabel"),
                icon: $("#subjectLabel + i"),
                valid: false,
            },
            message: {
                inp: $("#message"),
                label: $("#messageLabel"),
                valid: false,
            },
            submit: $("#submit"),
        }

        function labelFocus(input, label) {

            input.focus(() => {

                if(input.val() == 0) {
                    label.removeClass("notValid");
                    label.addClass("valid");
                } else if(input.val() > 0){
                    label.removeClass("valid");
                    label.addClass("notValid");
                }

            })

            input.blur(() => {

                if(input.val() == 0) {
                    label.removeClass("valid");
                    label.addClass("notValid");
                } else if(input.val() > 0){
                    label.removeClass("notValid");
                    label.addClass("valid");
                }

            })

        }

        labelFocus(form.name.inp, form.name.label);
        labelFocus(form.lastName.inp, form.lastName.label);
        labelFocus(form.email.inp, form.email.label);
        labelFocus(form.subject.inp, form.subject.label);
        labelFocus(form.message.inp, form.message.label);

        form.submit.click(function() {

            checkValid(form.name.inp.val(), "name");
            checkValid(form.lastName.inp.val(), "lastName");
            checkValid(form.email.inp.val(), "email");
            checkValid(form.subject.inp.val(), "subject");
            checkValid(form.message.inp.val(), "message");

            if(form.name.valid && form.lastName.valid && form.email.valid && form.subject.valid && form.message.valid) {

                // $.ajax({
                //     url: "validate.php",
                //     method: "POST",
                //     datatype: "html",
                //     data: {
                //         "name": form.name.inp.val(),
                //         "lastName": form.lastName.inp.val(),
                //         "email": form.email.inp.val(),
                //         "subject": form.subject.inp.val(),
                //         "message": form.message.inp.val(),
                //     },
                //     success: function(data) {
                //         console.log(data);
                //     },
                // })

            }
            
        })

        function checkValid(value, name) {

            let trim = value.trim();

            if(name == "name") {

                if(trim.length == 0) {
                    form.name.inp.val("");
                    form.name.label.text("Enter Name");
                    form.name.inp.addClass("err");
                    form.name.label.addClass("err");
                    form.name.icon.addClass("err");
                } else {
                    form.name.label.text("Name");
                    form.name.inp.removeAttr("class");
                    form.name.label.removeClass("err");
                    form.name.icon.removeClass("err");
                    form.name.valid = true;
                }

            }

            if(name == "lastName") {

                if(trim.length == 0) {
                    form.lastName.inp.val("");
                    form.lastName.label.text("Enter Last Name");
                    form.lastName.inp.addClass("err");
                    form.lastName.label.addClass("err");
                    form.lastName.icon.addClass("err");
                } else {
                    form.lastName.label.text("Last Name");
                    form.lastName.inp.removeAttr("class");
                    form.lastName.label.removeClass("err");
                    form.lastName.icon.removeClass("err");
                    form.lastName.valid = true;
                }

            }

            if(name == "email") {

                if(trim.length == 0) {
                    form.email.inp.val("");
                    form.email.label.text("Enter Email");
                    form.email.inp.addClass("err");
                    form.email.label.addClass("err");
                    form.email.icon.addClass("err");
                } else {
                    if(trim.includes("@")) {
                        form.email.label.text("Email");
                        form.email.inp.removeAttr("class");
                        form.email.label.removeClass("err");
                        form.email.icon.removeClass("err");
                        form.email.valid = true;
                    } else {
                        form.email.label.text("Enter Valide Email");
                        form.email.inp.addClass("err");
                        form.email.label.addClass("err");
                        form.email.icon.addClass("err");
                        form.email.valid = false;
                    }
                }

            }

            if(name == "subject") {

                if(trim.length == 0) {
                    form.subject.inp.val("");
                    form.subject.label.text("Enter Subject");
                    form.subject.inp.addClass("err");
                    form.subject.label.addClass("err");
                    form.subject.icon.addClass("err");
                } else {
                    form.subject.label.text("Subject");
                    form.subject.inp.removeAttr("class");
                    form.subject.label.removeClass("err");
                    form.subject.icon.removeClass("err");
                    form.subject.valid = true;
                }

            }

            if(name == "message") {

                if(trim.length == 0) {
                    form.message.inp.val("");
                    form.message.label.text("Enter Message");
                    form.message.inp.addClass("err");
                    form.message.label.addClass("err");
                } else {
                    form.message.label.text("Message");
                    form.message.inp.removeAttr("class");
                    form.message.label.removeClass("err");
                    form.message.valid = true;
                }

            }

        }

    }

    contact();

})