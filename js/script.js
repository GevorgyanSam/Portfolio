"use strict";$(document).ready((function(){function e(e,o){var s=e;$(window).scrollTop()+$(window).height()>=s.offset().top+s.height()/2&&o.css({display:"block"})}function o(){$(window).width()>800&&($(window).scrollTop()>0?($(".navParent").css({height:"70px"}),$(".navParent .logoParent .logo").css({height:"45px",width:"45px"})):($(".navParent").css({height:"90px"}),$(".navParent .logoParent .logo").css({height:"55px",width:"55px"})))}function s(e){const o={gearIcon:$(".settingsBtn"),settingsParent:$(".settingsParent")};e.click((function(){let s=e.attr("class");if(s=s[13],!$("body").hasClass(e)){for(let e=1;e<=5;e++)$("body").removeClass("color-"+e);$("body").addClass("color-"+s)}o.settingsParent.removeClass("close"),o.settingsParent.addClass("open")}))}$(window).scroll((function(){o(),$(".menu a").each((function(){$(this.hash).offset().top<$(window).scrollTop()+5&&($(".menu a").removeClass("active"),$(this).addClass("active"))})),e($("#about"),$("#aboutAnimationParent")),e($("#skills"),$("#skillsAnimationParent")),e($("#works"),$("#worksAnimationParent")),e($("#contact"),$("#contactAnimationParent"))})),$(window).mousemove((e=>{if($(this).width()>1e3){let o=$(".mouse"),s=e.pageX,n=e.pageY;o.css({left:s+"px",top:n+"px",opacity:"1"})}})),o(),function(){const e={toggle:$(".mobileMenuToggle"),menu:$(".mobileMenuParent"),links:$(".mobileMenuParent a")};e.toggle.click((function(){e.menu.css({display:"block"})})),e.links.click((function(){e.menu.css({display:"none"})}))}(),function(){const e={themeBtn:$(".themeParent"),themeIcon:$(".themeParent i")};e.themeBtn.click((function(){$("body").hasClass("dark")?($("body").removeClass("dark"),e.themeIcon.removeClass("fa-sun"),e.themeIcon.addClass("fa-moon")):($("body").addClass("dark"),e.themeIcon.removeClass("fa-moon"),e.themeIcon.addClass("fa-sun"))}))}(),function(){const e={gearIcon:$(".settingsBtn"),settingsParent:$(".settingsParent")};e.gearIcon.click((function(){e.settingsParent.hasClass("open")?(e.settingsParent.removeClass("open"),e.settingsParent.addClass("close")):(e.settingsParent.removeClass("close"),e.settingsParent.addClass("open"))}));const o={color_1:$(".colors.color-1"),color_2:$(".colors.color-2"),color_3:$(".colors.color-3"),color_4:$(".colors.color-4"),color_5:$(".colors.color-5")};s(o.color_1),s(o.color_2),s(o.color_3),s(o.color_4),s(o.color_5)}(),function(){if($(window).width()>1e3){const e={content:$(".worksImageParent"),image:$(".worksContent img")};e.content.mouseenter((function(){e.content.mousemove((function(o){let s=o.offsetX,n=o.offsetY;e.image.css({"transform-origin":s+"px "+n+"px"})}))})),$(".worksImageParent + div").mouseenter((function(){$(".worksImageParent + div").mousemove((function(){e.image.css({"transform-origin":"center"})}))}))}}(),function(){const e={name:{inp:$("#name"),label:$("#nameLabel")},lastName:{inp:$("#lastName"),label:$("#lastNameLabel")},email:{inp:$("#email"),label:$("#emailLabel")},subject:{inp:$("#subject"),label:$("#subjectLabel")},message:{inp:$("#message"),label:$("#messageLabel")},submit:$("#submit")};function o(e,o){e.focus((()=>{0==e.val()?(o.removeClass("notValid"),o.addClass("valid")):e.val()>0&&(o.removeClass("valid"),o.addClass("notValid"))})),e.blur((()=>{0==e.val()?(o.removeClass("valid"),o.addClass("notValid")):e.val()>0&&(o.removeClass("notValid"),o.addClass("valid"))}))}o(e.name.inp,e.name.label),o(e.lastName.inp,e.lastName.label),o(e.email.inp,e.email.label),o(e.subject.inp,e.subject.label),o(e.message.inp,e.message.label),e.submit.click((function(e){e.preventDefault()}))}()}));