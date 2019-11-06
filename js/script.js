$(function() {
    $(document).scroll(function(){
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});


$(function(){
    $(".carousel").carousel( { interval: 5000});
    });
