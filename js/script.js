
// card slider

$(".listcard").slick({
    dots: false,
    slidesToShow: 3,
    autoplay: false,
    speed: 900,
    autoplaySpeed: 700,
    prevArrow: '.slick-preve',
    nextArrow: '.slick-nexte',
    responsive: [
        {
        breakpoint: 768,
        settings: {
        slidesToShow: 2
            }
        },
        {
        breakpoint: 550,
        settings: {
        slidesToShow: 1
            }
        }
    ]
});
