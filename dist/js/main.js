$('.toggle-nav').on('click', function (e) {
    e.preventDefault();
    $('.sidebar').toggleClass('toggled');
});

$('.sub-menu > a').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.sub-menu').toggleClass('toggled');
    $(this).next('ul').toggleClass('fadeIn');
});