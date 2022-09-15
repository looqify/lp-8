$(function() {
    $('.slider .item').first().addClass('active');
    $('.action-btn').on('click', function(e) {
        e.preventDefault();
        var self = $(this);
        self.closest('.item').hide();
        setTimeout(function() {
            self.closest('.item').next().fadeIn();
        }, 1500);
        $('.crumb.omgitsactive').next().addClass('omgitsactive').siblings().removeClass('omgitsactive');
        $('.curtain').addClass('active');
        $('.crumbs').css({ opacity: 0 });
        setTimeout(function() {
            $('.curtain').removeClass('active');
            $('.crumbs').css({ opacity: 1 });
            $('.slider .item.active').removeClass('active').next().fadeIn().addClass('active');
        }, 2000);

    });
})