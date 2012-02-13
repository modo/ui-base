function makeExpandable(){
	var menu = $(this);
	var li = menu.closest('li');
	var span =  li.find('span');
	var text = span.text();
	
	li.addClass('submenu-expand');
	
	if($('.active', menu).size() > 0){
		li.addClass('submenu-open');
		span.replaceWith($('<a href="javascript:;">' + text + '<i class="icon-minus"></i></a>'));
	} else {
		li.addClass('submenu-closed');
		span.replaceWith($('<a href="javascript:;">' + text + '<i class="icon-plus"></i></a>'));
		menu.hide();
	}
}

function toggleMenu(){
	$(this).closest('li').toggleClass('subnav-open').toggleClass('subnav-closed');
	$(this).find('i').toggleClass('icon-minus').toggleClass('icon-plus');
	$(this).next('ul').slideToggle();
}

$.fn.subnav = function(){
	$('ul ul', this).each(makeExpandable);
	$('.submenu-expand > a', this).live('click', toggleMenu);
};