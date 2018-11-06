$(document).ready(function() {
    makeSectionExpandable('#clientsContainerExpandable', '#show-more-clients', '#hide-clients', '#clientsContainer', '.client');
    makeSectionExpandable('#productCardExpandable', '#show-more-products', '#hide-products', '#productCont', '.productOuterCard');

    $('#chooseFile').bind('change', function () {
        var filename = $("#chooseFile").val();
        if (/^\s*$/.test(filename)) {
          $(".file-upload").removeClass('active');
          $("#noFile").text("No file chosen..."); 
        }
        else {
          $(".file-upload").addClass('active');
          $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
        }
    });

    $('.quotation').click(function() {
        $('#get-quotation-form').fadeIn('fast');
        var deviceType = $(this).siblings('.itemHeading').text();
        var files = []
        
        let fileButton = document.getElementById('chooseFile');
        
        fileButton.addEventListener('change', function(e) {
            files = e.target.files;

            console.log(files);
        });

        $('#close-quote-form-button').click(function(e) {
            e.preventDefault();
            console.log('closing!')
            $(this).off('click');
            $('#get-quotation-form').fadeOut('fast');
        });

        console.log('devType: ' + deviceType);
        $('#get-quotation-form form').submit(function(e) {
            e.preventDefault();
            console.log('submitting');
        });
    });

});

function makeSectionExpandable(targetId, showButtonId, hideButtonId, mainSectionId, innerElement) {
    $(targetId).hide();
    $(hideButtonId).hide();
    $(targetId + ' ' + innerElement).fadeOut('fast');

    $(showButtonId).click(function() {
        $(targetId).slideDown('fast', function() {
            $(targetId + ' ' + innerElement).fadeIn('slow');
        });
        
        $(showButtonId).hide();
        $(hideButtonId).show();
        // document.getElementById(mainSectionId).style.paddingBottom = '0';
    });
    
    $(hideButtonId).click(function() {
        $(targetId).slideUp('fast', function() {
            $(targetId + ' ' + innerElement).fadeOut('fast');
        });
        
        $(hideButtonId).hide();
        $(showButtonId).show();
        // document.getElementById(mainSectionId).style.paddingBottom = '5%';
    });
} 