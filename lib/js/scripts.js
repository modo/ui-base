// General plugins
// ---------------------------------------------
// @codekit-prepend 'jquery.jqModal.js';

// Bootstrap functions
// @codekit-prepend 'bootstrap-alert.js';
// @codekit-prepend 'bootstrap-button.js';
// @codekit-prepend 'bootstrap-carousel.js';
// @codekit-prepend 'bootstrap-collapse.js';
// @codekit-prepend 'bootstrap-dropdown.js';
// @codekit-prepend 'bootstrap-modal.js';
// @codekit-prepend 'bootstrap-tooltip.js';
// @codekit-prepend 'bootstrap-scrollspy.js';
// @codekit-prepend 'bootstrap-tab.js';
// @codekit-prepend 'bootstrap-transition.js';
// @codekit-prepend 'bootstrap-typeahead.js';


// USGBC-specific functions
// ---------------------------------------------
// @codekit-prepend 'usgbc/subnav.js';
// @codekit-prepend 'usgbc/fix-select.js';


// Initializations 
// ---------------------------------------------
$(document).ready(function(){
	$('.collapse').collapse();
	$('.dropdown-toggle').dropdown()
	$('#sub-section-nav').subnav();
	$('select:not([multiple])').each(fixSelect);
});

