$(document).ready(function() {
    makeSectionExpandable('#clientsContainerExpandable', '#show-more-clients', '#hide-clients', '#clientsContainer', '.client');
    makeSectionExpandable('#productCardExpandable', '#show-more-products', '#hide-products', '#productCont', '.productOuterCard');
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