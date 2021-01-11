import $ from 'jquery';
window.$ = $;

import * as bootstrap from 'bootstrap';

import { Swiper, Navigation, Pagination, Controller } from 'swiper';
Swiper.use([Navigation, Pagination, Controller]);

import MmenuLight from "mmenu-light";

import Inputmask from "inputmask";

import AOS from 'aos';

import smoothscroll from 'smoothscroll-polyfill';



(function () {

    smoothscroll.polyfill();

    AOS.init({
        offset: 300,
        once: true
    });

    function dropdownClick () {
        if ( $(".dropdown-click-wrapper").length ) {
            $(document).on("click", ".dropdown-click-toggle", function () {
                $(this).toggleClass("active").closest(".dropdown-click-wrapper").toggleClass("active").find(".dropdown-click-menu").toggleClass("active");
            })
        }
    }

    dropdownClick()



    Inputmask().mask(document.querySelectorAll("input"));


    const menu = new MmenuLight(
        document.querySelector( "#mobile-menu" )
    );

    const navigator = menu.navigation({
        title: ""
    });

    const drawer = menu.offcanvas({

    });

    document.querySelector( "a[href='#mobile-menu']" )
        .addEventListener( "click", ( event ) => {
            event.preventDefault();
            drawer.open();
        });


    $(".swiper-container").each(function(){

        var loop = Boolean( $(this).find(".swiper-wrapper").data("loop") );

        var mySwiper = new Swiper( $(this)[0], {

            slidesPerView: "auto",

            observer: true,
            observeParents: true,

            watchSlidesVisibility: true,
            loop: loop,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },

        });

        mySwiper.on('slideChange', function () {
            $(".dropdown-click-wrapper, .dropdown-click-menu, .dropdown-click-toggle").removeClass("active");
        });

    })

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar',
        method: "position",
        offset: 150
    })

})()
