//var iranian = function($) {
  //'use strict'; // Start of use strict

  // Drop down part
  //$('.dropselect').dropselect();
//};

/////////////////
(function ($) {

    "use strict";

    // Home page custom
    if ($('#index-page').length || $('#category-page').length) {

        $.realItemNumber(8);

        $('.dropselect-home').click(function (e) {
            e.preventDefault();
        });
    }

    // Category page custom
    if ($('#category-page').length) {

        $.realItemNumber(8);

        // Drop down part
        $('.dropselect').dropselect();

        // Thumbnail part
        $(document).ready(function () {
            $('.thumb-slider').slick({

                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 5,
                draggable: true,
                infinite: true,
                swipeToSlide: true,
                touchMove: true,
                autoplay: false,

                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '0px',
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '0px',
                            slidesToShow: 3
                        }
                    }
                ]

            });
        });
    }


    /* Mobile NAV */

    var $mobileNavBtnOpen = $('.mobile-nav-menu'),
        $menu = $('.navbar-nav-responsive'),
        $mobileNavBtnClose = $('.custom-nav-item-top');

    $mobileNavBtnClose.on('click', function (e) {

        if ($mobileNavBtnOpen.hasClass('active')) {
            $menu.slideUp('fast');
            $mobileNavBtnOpen.removeClass('active');
        }

        e.preventDefault();
    });

    $mobileNavBtnOpen.on('click', function (e) {

        if (!$mobileNavBtnOpen.hasClass('active')) {
            $menu.slideDown('fast');
            $menu.css('display', 'flex');
            $mobileNavBtnOpen.addClass('active');
        }

        e.preventDefault();
    });


    if ($('#website8-page').length) {

        /* Accordion */
        var acc = document.getElementsByClassName("accordion"),
            i;

        for (i = 0; i < acc.length; i++) {

            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });

        }


        /*Default value*/
        acc[0].click();


        /* Zoom image */
        $(window).on('load resize', function () {

            // Get the modal
            var modal = document.getElementsByClassName('custom-zoomer')[0],           // var modal = document.getElementsByClassName('custom-zoomer')[value],
                img = document.getElementsByClassName('zoomer')[0],                    // Get the image and insert it inside the modal - use its "alt" text as a caption

                modalImg = document.getElementsByClassName("img01")[0],
                captionText = document.getElementsByClassName("caption")[0];

            img.onclick = function () {

                var $this = document.getElementsByClassName('main-img')[0];

                modal.style.display = "block";
                modalImg.src = $this.src;
                captionText.innerHTML = $this.alt;
            }

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }

        });

    }


    /* Design Page */

    if ($('#website16-page').length) {

        var $openBox = $('.controllers').find('.panel > ul > li > a');

        $openBox.on('click', function (e) {

            e.preventDefault();

            var $this = $(this),
                $box = $this.siblings('.boxes');

            $openBox.removeClass('active');
            $this.addClass('active');

            if (!$box.hasClass('active')) {
                $('.controllers').find('.panel').find('.boxes').fadeOut('fast').removeClass('active');

                $box.slideDown('fast');
                $box.css('display', 'block');
                $box.addClass('active');
            }
            else {
                $box.fadeOut('fast');
                $box.removeClass('active');
            }

            $.goToPage(1);
        });

        $('.dropselect').click(function (e) {
            e.preventDefault();
        });

        $.realItemNumber(10);
    }


}(jQuery));


// Sliders
if (jQuery('#website8-page').length) {

    /* Slider part 01 */

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i,
            slides = document.getElementsByClassName("mySlides");
        dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }


    /* Slider part 2 */

    jQuery('.slideshow-container-relatives').slick({

        centerMode: false,
        centerPadding: '10px',
        slidesToShow: 3,
        draggable: true,
        infinite: true,
        swipeToSlide: true,
        touchMove: true,
        autoplay: false,
        dots: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });

}

// Tabs
if (jQuery('#website16-page').length) {

    function openTab(evt, tabName) {

        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");

        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");

        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";

    }

}
