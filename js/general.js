$(document).ready(function() {
    makeSectionExpandable('#clientsContainerExpandable', '#show-more-clients', '#hide-clients', '#clientsContainer', '.client');
    makeSectionExpandable('#productCardExpandable', '#show-more-products', '#hide-products', '#productCont', '.productOuterCard');
    var files = []
    var deviceType = '';
    var devTypesAlreadyRequested = [];
    
    $('.quotation').click(function () {
        deviceType = $(this).siblings('.itemHeading').text();
        $('#get-quotation-form h1').text('Get Quotation for ' + deviceType + 'S');

        if (devTypesAlreadyRequested.includes(deviceType)) {
            showUploadCompleteDialogue();
        } else
            resetAndDisplayRequestQuoteForm();
    });
    
    $('#chooseFile').change(e => {
        var filename = $("#chooseFile").val();
        files = e.target.files;
        
        if (/^\s*$/.test(filename)) {
            $(".file-upload").removeClass('active');
            $("#noFile").text("No file chosen..."); 
        }
        else {
            $(".file-upload").addClass('active');
            $("#noFile").text(files.length + ' file(s) selected'); 
        }
    });

    $('#close-quote-form-button').click(e => {
        e.preventDefault();
        $('#get-quotation-form').fadeOut('fast');
    });
    
    
    $('#get-quotation-form form').submit(function(e) {
        e.preventDefault();
        $('#close-quote-form-button').hide();
        $('#quotation-submit-button').prop('disabled', true);
        
        var formData = $(this).serializeArray();
        var metaData = {};
        let filesUploaded = 0;
        let fileFormatRegex = /(\.pdf|\.doc|\.docx)$/i;
        
        for (var entry of formData) metaData[entry.name] = entry.value;
        
        if (!files.length){
            $('#upload-state').text('You must select atleast 1 file for upload...');
            $('#upload-state').fadeIn('fast');
        }
        else {
            $('#upload-state').text('Uploading files...');

            for (var file of files) {                
                var storageRef = firebase.storage().ref(deviceType + '/' + metaData.email + '_' + file.name);
                
                if (fileFormatRegex.test(file.name)) {
                    storageRef.put(file, metaData).on(
                        'state_changed',
                        snap => {}, 
                        error =>  $('#upload-state').text(`${error}`),
                        () => {
                            filesUploaded++;
                            $('#upload-state').text(`${filesUploaded} out of ${files.length} files uploaded`);
        
                            if (filesUploaded === files.length) {
                                showUploadCompleteDialogue();
                                devTypesAlreadyRequested.push(deviceType);
                            }
                        }
                    );
                } else {
                    $('#upload-state').text('Only PDF and MS Word (doc/docx) files allowed');
                    $('#upload-state').fadeIn('fast');
                }
            }
        }
    });
});

function showUploadCompleteDialogue() {
    $('#upload-state').text('Your files for have been uploaded, we will get back to you soon!');
    $('#get-quotation-form form').hide();
    $('#quotation-submit-button').hide();
    $('#close-quote-form-button').show();
    $('#get-quotation-form').fadeIn('fast');
    $('#quotation-submit-button').prop('disabled', false);   
}

function resetAndDisplayRequestQuoteForm() {
    $('#upload-state').hide()
    $('#get-quotation-form form').show();
    $('#quotation-submit-button').show();
    $('#close-quote-form-button').show();
    $('#get-quotation-form').fadeIn('fast');
}

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