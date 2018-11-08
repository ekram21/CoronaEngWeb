var nav = $('.companyTabChoice');
var line = $('<div />').addClass('line');

//hide CPGL and CTSL TEXTS
$('.CPGL').fadeOut('fast');
$('.CTSL').fadeOut('fast');

line.appendTo(nav);

var active = nav.find('.companyTabChoiceLI_Active');
var pos = 0;
var wid = 0;

if(active.length) {
  pos = active.position().left;
  wid = active.width();
  line.css({
    left: pos,
    width: wid
  });
}

nav.find('ul li a').click(function(e) {
  e.preventDefault();
  if(!$(this).parent().hasClass('companyTabChoiceLI_Active') && !nav.hasClass('animate')) {
    
    nav.addClass('animate');

    var _this = $(this);

    currentTab = _this.text().replace(/\s+/, "").split(' ')[0]; //either CoronEngineering or CoronaPower or CoronaTech

    if (currentTab === 'CoronaEngineering'){
      $('.CPGL').fadeOut('fast');
      $('.CTSL').fadeOut('fast');
      $('.CEL').fadeIn('slow');
    }
    else if (currentTab === 'CoronaPower'){
      $('.CEL').fadeOut('fast');
      $('.CTSL').fadeOut('fast');
      $('.CPGL').fadeIn('slow');
    }
    else if (currentTab === 'CoronaTech'){
      $('.CEL').fadeOut('fast');
      $('.CPGL').fadeOut('fast');
      $('.CTSL').fadeIn('slow');
    }

    nav.find('ul li').removeClass('companyTabChoiceLI_Active');

    var position = _this.parent().position();
    var width = _this.parent().width();

    if(position.left >= pos) {
      line.animate({
        width: ((position.left - pos) + width)
      }, 300, function() {
        line.animate({
          width: width,
          left: position.left
        }, 150, function() {
          nav.removeClass('animate');
        });
        _this.parent().addClass('companyTabChoiceLI_Active');
      });
    } else {
      line.animate({
        left: position.left,
        width: ((pos - position.left) + wid)
      }, 300, function() {
        line.animate({
          width: width
        }, 150, function() {
          nav.removeClass('animate');
        });
        _this.parent().addClass('companyTabChoiceLI_Active');
      });
    }

    pos = position.left;
    wid = width;
  }



});

