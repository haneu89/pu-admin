require('../../index.html')

window._ = require('lodash');

try {
  window.Popper = require('popper.js').default;
  window.$ = window.jQuery = require('jquery');

  require('bootstrap');
} catch (e) {}


var Selector = {
  sidebar       : '.left-col',
  mainHeader    : '.main-header',
  contentWrapper: '.content-wrapper',
  // wrapper       : '.wrapper',
  // mainFooter    : '.main-footer',
}

var windowHeight  = $(window).outerHeight()
var headerHeight = $(Selector.mainHeader).outerHeight() || 0
// var footerHeight  = $(Selector.mainFooter).outerHeight() || 0
// var sidebarHeight = $(Selector.sidebar).outerHeight() || 0

$(Selector.sidebar).css('min-height', windowHeight);
$(Selector.contentWrapper).css('min-height', windowHeight - headerHeight);