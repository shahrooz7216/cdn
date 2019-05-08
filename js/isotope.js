(function ($) {
    "use strict"; // Start of use strict

    // Init Isotope
    var itemSelector = '.isotope-item';
    var $container = $('.isotope-items-wrap');

    $container.imagesLoaded(function () {

        $container.isotope({

            itemSelector: itemSelector,
            transitionDuration: '0.7s',
            /* percentPosition: true,*/

            masonry: {
                columnWidth: itemSelector,
                /*columnWidth: 100,*/
                /*horizontalOrder: true,*/
                fitWidth: true
            }
        });


    });

    // Ascending order
    var responsiveIsotope = [
        [480, 4],
        [720, 6]
    ];

    // Parameters
    var itemsPerPageDefault = 8;
    var itemsPerPage = defineItemsPerPage();
    var currentNumberPages = 1;
    var currentPage = 1;
    var currentFilter = '*';
    var filterAtribute = 'data-filter';
    var pageAtribute = 'data-page';
    var pagerClass = 'isotope-pager';

    function changeFilter(selector) {
        $container.isotope({
            filter: selector
        });
    }

    // Go to page
    function goToPage(n) {
        currentPage = n;

        var selector = itemSelector;
        selector += (currentFilter != '*') ? '[' + filterAtribute + '="' + currentFilter + '"]' : '';
        selector += '[' + pageAtribute + '="' + currentPage + '"]';

        changeFilter(selector);
    }

    // Define items per page
    function defineItemsPerPage() {
        var pages = itemsPerPageDefault;

        for (var i = 0; i < responsiveIsotope.length; i++) {
            if ($(window).width() <= responsiveIsotope[i][0]) {
                pages = responsiveIsotope[i][1];
                break;
            }
        }
        return pages;
    }

    // Set pagination
    function setPagination() {
        var SettingsPagesOnItems = function () {

            var itemsLength = $container.children(itemSelector).length;

            var pages = Math.ceil(itemsLength / itemsPerPage);
            var item = 1;
            var page = 1;
            var selector = itemSelector;
            selector += (currentFilter != '*') ? '[' + filterAtribute + '="' + currentFilter + '"]' : '';

            $container.children(selector).each(function () {
                if (item > itemsPerPage) {
                    page++;
                    item = 1;
                }
                $(this).attr(pageAtribute, page);
                item++;
            });

            currentNumberPages = page;
        }();

        // Create pagers
        var CreatePagers = function () {

            // Don't create pagination on home page
            if ($('#collection-page').length) {

                var $isotopePager = ($('.' + pagerClass).length == 0) ? $('<div class="' + pagerClass + '"></div>') : $('.' + pagerClass);

                $isotopePager.html('');

                for (var i = 0; i < currentNumberPages; i++) {
                    var $pager = $('<a href="javascript:void(0);" class="pager" ' + pageAtribute + '="' + (i + 1) + '"></a>');
                    $pager.html(i + 1);

                    $pager.click(function () {
                        var page = $(this).eq(0).attr(pageAtribute);
                        goToPage(page);
                    });

                    $pager.appendTo($isotopePager);
                }

                $container.after($isotopePager);

            }

        }();
    }

    //setPagination();

    // Filter
    $('.filters-select a').click(function () {

        //$('.filters-select').on('change', function () {
        //  var filter = this.value;

        var filter = $(this).attr(filterAtribute);
        currentFilter = filter;

        setPagination();
        goToPage(1);
    });

    // Filter item active
    // var filterItemActive = $('.isotope-filter-links a');

    var filterItemActive = $('.filters-select a');

    //var filterItemActive = $('.filters-select');

    filterItemActive.on('change', function () {
        var $this = $(this); //.find('option');

        if (!$this.hasClass('active')) {
            filterItemActive.removeClass('active');
            $this.addClass('active');
        }
    });

    filterItemActive.on('click', function () {
        var $this = $(this); //.find('option');

        if (!$this.hasClass('active')) {
            filterItemActive.removeClass('active');
            $this.addClass('active');
        }
    });

    // Responsivo event
    $(window).resize(function () {
        itemsPerPage = defineItemsPerPage();
        setPagination();
        goToPage(1);
    });

    ////////////////////////////
    function hidePager() {
        if ($(".pager").length == 1) {
            $(".isotope-pager").css("display", "none");
        }
        else {
            $(".isotope-pager").css("display", "block");
        }
    }

    function pagerActive() {
        $('.pager:first').addClass('active');
        $('.pager').click(function () {
            var dataPage = $(this).attr("data-page");
            $('.isotope-pager').find('.active').removeClass('active');
            if (currentPage == dataPage) {
                $(this).addClass('active');
            }
        });
    }

    // hide isotope-pager if only 1 .pager.
    $('.isotope-filter-links li a').click(function () {
        hidePager();
    });


    // active class for pager.
    $('.filters-select a').click(function () {

        // $('.filters-select').on('change', function () {
        // $('.isotope-filter-links li').click(function(){
        pagerActive();
    });

    window.onload = function () {
        setPagination();
        goToPage(1);
        hidePager();
        pagerActive();
    };

})(jQuery.noConflict()); // End of use strict