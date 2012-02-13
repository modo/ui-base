function fixSelect(){
	var select, num, element, dd, ddtrigger, ddmenu, input, i;
	
	select = $(this);
	num = $('option', select).size();
	element = {};
	
	if(select.attr('class') !== undefined){
		element.classes = select.attr('class');
	} else {
		element.classes = '';
	}
	
	if(select.attr('id') !== undefined){
		element.id = select.attr('id');
	} else {
		element.id = '';
	}
	
	if(select.attr('name') !== undefined){
		element.name = select.attr('name');
	} else {
		element.name = '';
	}
	
	if(select.attr('value') !== undefined){
		element.value = select.attr('value');
	} else {
		element.value = '';
	}
	
	element.text = $('option:selected', select).text();
	element.options = [];
	
	for(i=0; i < num; i++){
		var option = $('option:eq(' + i + ')', select);
		element.options[i] = $('<li><a href="#" data="' + option.val() + '">' + option.text() + '</a></li>');
	}
	
	select.after($('<div class="btn-group" />'));
	
	dd = select.next('.btn-group');
	
	dd.append($('<a class="btn dropdown-toggle select-toggle ' + element.classes + '" data-toggle="dropdown" href="#"><span class="text">' + element.text + '</span> <span class="caret"></span></a>'));
	ddtrigger = $('.dropdown-toggle', dd);
	
	dd.append($('<ul class="dropdown-menu" />'));
	ddmenu = $('.dropdown-menu', dd);
	for(i=0; i < num; i++){ ddmenu.append(element.options[i]); }
	$('a[data="' + select.val() + '"]', ddmenu).closest('li').addClass('active');
	
	select.replaceWith($('<input type="hidden" class="' + element.classes + '" id="' + element.id + '" name="' + element.name + '" value="' + element.value + '" />'));
	input = dd.prev('input[type=hidden]');
	
	$('a', ddmenu).click(function(e){
		e.preventDefault();
		var me = $(this);
		input.val(me.attr('data'));
		$('span.text', ddtrigger).text(me.text());
		$('.active', ddmenu).removeClass('active');
		me.closest('li').addClass('active');
	});
}