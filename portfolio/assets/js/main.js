(function ($) {
	"use strict";

    jQuery(document).ready(function($){


		$(".project-titles li").on('click', function() {
            
            $(".project-titles li").removeClass("active");
            $(this).addClass("active");
            
            var selector = $(this).attr('data-filter');
            $(".project-list").isotope({
                filter: selector
            });
        });

        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true,
            animateIn: 'slideInRight',
            animateOut: 'fadeOutDown'
        });

		// $(".progress-bar").loading();
		// $('input').on('click', function () {
		// 	 $(".progress-bar").loading();
		// });

        $('#html').barfiller({
            barColor: '#0ABEF1',
            duration: 2000,
        });
        $('#css').barfiller({
            barColor: '#F92659',
            duration: 2000,
        });
        $('#framework').barfiller({
            barColor: '#FEBF01',
            duration: 2000,
        });
        $('#wp').barfiller({
            barColor: '#06D6A0',
            duration: 2000,
        });
        $('#java').barfiller({
            barColor: '#F77D0E',
            duration: 2000,
        });
        $('#php').barfiller({
            barColor: '#299A0B',
            duration: 2000,
        });

        //jQuery Menu Trigger and Sidebar
        $(".trigger-menu").click(function(){
            $(".trigger-menu").toggleClass("active")
        });
        $(".trigger-menu").click(function(){
            $(".sidebar-menu").toggleClass("active")
        });

        new WOW().init();

        var Loader = document.getElementById('preloader'); //Here you can change the VAR .
        window.addEventListener('load', function(){
           $(Loader).css({'display': 'none'}) // If you change the VAR on the top then you need to change here too .
        })


    });



    jQuery(window).load(function(){

        
    });


}(jQuery)); 