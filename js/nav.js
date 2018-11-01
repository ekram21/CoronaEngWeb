window.addEventListener('scroll', function() {
    function changeNavLinkColor(color) {
        let links = document.getElementById('main-navigation').getElementsByTagName('a');

        for(let i = 0; i < links.length; i++) {
            let link = links[i];
            link.setAttribute('style', 'color: ' + color);
        }
    }
    
    let scrolledPx = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var nav = document.getElementsByTagName('nav')[0];
    
    if (scrolledPx > 200) {
        nav.className = 'solid-bg';
        changeNavLinkColor('grey');
    } else {
        nav.className = '';
        changeNavLinkColor('white');
    }
});