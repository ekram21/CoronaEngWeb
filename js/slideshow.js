
$(document).ready(function () {
    $('.Slideshow').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1000,
    });

    hideRightArrowButton();
});

function hideRightArrowButton() {
    let rightArrowButton = document.getElementsByClassName('slick-next')[0];
    rightArrowButton.setAttribute('style', 'display: none');
}