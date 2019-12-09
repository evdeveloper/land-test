$(document).ready(function () {
    svg4everybody({});

    function popup() {
        $('.product__info').on('click', function(){
            $(this).closest('.product__item').find('.popup-info').toggleClass('active');
            

        });

    }
    function popupClose() {
        $('.popup-info__close').on('click',function(){
            $('.popup-info').removeClass('active');
        });
    }

    popup();
    popupClose();

});