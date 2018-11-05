$(document).ready(function() {
    makeSectionExpandable('#clientsContainerExpandable', '#show-more-clients', '#hide-clients', 'clientsContainer');
    makeSectionExpandable('#productCardExpandable', '#show-more-products', '#hide-products', 'productCont');
});

function makeSectionExpandable(targetId, showButtonId, hideButtonId, mainSectionId) {
    $(targetId).hide();
    $(hideButtonId).hide();

    $(showButtonId).click(function() {
        $(targetId).slideDown();
        $(showButtonId).hide();
        $(hideButtonId).show();
        document.getElementById(mainSectionId).style.paddingBottom = '0';
    });
    
    $(hideButtonId).click(function() {
        $(targetId).slideUp();
        $(hideButtonId).hide();
        $(showButtonId).show();
        document.getElementById(mainSectionId).style.paddingBottom = '5%';
    });
} 