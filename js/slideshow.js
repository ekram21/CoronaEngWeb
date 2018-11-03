

$(document).ready(function () {
    $('.Slideshow').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4500,
        pauseOnFocus: false,
        pauseOnHover: false,
    });


    //event change when the slide changes
    // On before slide change
    $('.Slideshow').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        console.log(nextSlide);
        if(nextSlide === 0){
            consoleText(['Low, Medium and High Voltage Switchgear'], 'text', ['white']);
        }
        else if (nextSlide === 1){
            consoleText(['Engineering, Procurement & Construction (EPC)'], 'text', ['white']);
        }
        else if (nextSlide === 2){
            consoleText(['Power Transmission & Generation'], 'text', ['white']);
        }
        else if (nextSlide === 3) {
            consoleText(['High Quality Circuit Protection'], 'text', ['white']);
        }
    });
});
