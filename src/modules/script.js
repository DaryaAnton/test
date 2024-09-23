$(document).ready(function(){
//burger
    const modalNav = new HystModal({
        linkAttributeName: "data-hystmodal",
        catchFocus: true,
		waitTransitions: true,
		backscroll: false,
		closeOnEsc: false,
    });

//swiper-services
    var swiper = new Swiper(".swiper-services", {
        slidesPerView: 1.3,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            635: {
                slidesPerView: 1.6,
            },
            960: {
                slidesPerView: 1.8,
            },
            1000: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.2,
            },            
            1350: {
                slidesPerView: 2.4,
            }
        },
    });

//swiper-poster
    var swiper = new Swiper(".swiper-poster", {
        slidesPerView: 1.3,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            635: {
                slidesPerView: 1.6,
            },
            960: {
                slidesPerView: 1.8,
            },
            1000: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.2,
            },            
            1350: {
                slidesPerView: 2.4,
            }
        },
    });
//swiper-main-slider
    var swiper = new Swiper(".swiper-main-slider", {
        slidesPerView: 1,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
//swiper-freeride-slider
    var swiper = new Swiper(".swiper-freeride-slider", {
        slidesPerView: 1,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
//swiper-foto
    var swiper = new Swiper(".swiper-foto", {
        slidesPerView: 1.3,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            635: {
                slidesPerView: 1.6,
            },
            960: {
                slidesPerView: 1.8,
            },
            1000: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.2,
            },            
            1350: {
                slidesPerView: 2.4,
            }
        },
    });
//swiper-canteen
    var swiper = new Swiper(".swiper-canteen", {
        slidesPerView: 1,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
//swiper-rent
    var swiper = new Swiper(".swiper-rent", {
        slidesPerView: 1,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
//swiper-snowmobile
    var swiper = new Swiper(".swiper-snowmobile", {
        slidesPerView: 1,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    
//scrollbar
if(document.querySelector('.mycustom-scroll')!= undefined){
    $(".mycustom-scroll").mCustomScrollbar({
        axis: "x",
        theme: "rounded-dark",
        scrollInertia: "330",
        setHeight: "100%",
        mouseWheel: {
            deltaFactor: 300
        }
    });
}
//swiper-main-summer-slider
    var swiper = new Swiper(".swiper-main-summer-slider", {
        slidesPerView: 1,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
//swiper-main-buy-slider
    var swiper = new Swiper(".swiper-main-buy-slider", {
        slidesPerView: 1,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    $( function() {
        $( "#datepicker, #datepicker2" ).datepicker();
    } );
    $( function() {
        $( "#datepicker-sky, #datepicker-sky2" ).datepicker();
    } );

//swiper-main-bear-slider
    var swiper = new Swiper(".swiper-main-bear-slider", {
        slidesPerView: 1,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    $('.time-period__point').on('click', function(){
        $(this).toggleClass('active');
    });


    $('.couch__card').on('click', function(e) {
        let data = $(this).attr('data-couch');
        if ($('.couch__card[data-couch=' + data + ']').hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $('.couch__card').removeClass('active');
            $(this).addClass('active');
        }
    });
});




