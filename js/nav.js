window.addEventListener('scroll', function() {
    let scrolledPx = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    let nav = document.getElementsByTagName('nav')[0];
    
    if (scrolledPx > 175) {
        nav.className = 'solid-bg';
        changeNavFontColor('grey');
    } else {
        nav.className = '';
        changeNavFontColor('white');
    }

    function changeNavFontColor(color) {
        let links = document.getElementById('main-navigation').getElementsByTagName('a');
        let dropDownButtons = document.getElementById('main-navigation').getElementsByTagName('button');

        // change font color of the a tags in the nav 
        for(let i = 0; i < links.length; i++) {
            let link = links[i];
            link.setAttribute('style', 'color: ' + color);
        }
        
        // change font color of the dropdown buttons in the nav 
        for(let i = 0; i < dropDownButtons.length; i++) {
            let button = dropDownButtons[i];
            button.setAttribute('style', 'color: ' + color);
        }
    }
});