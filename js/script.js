"use strict";$(document).ready((function(){function n(){$(window).scrollTop()>0?$(".navParent").css({height:"70px"}):$(".navParent").css({height:"90px"})}$(window).scroll((function(){n(),$(".menu a").each((function(){$(this.hash).offset().top<$(window).scrollTop()+5&&($(".menu a").removeClass("active"),$(this).addClass("active"))}))})),n()}));