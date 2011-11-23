$.fn.bind_taglist = function(options){
	var input = this;
	var defaults = {'list':''};
	var opts = $.extend({}, defaults, options);
	var tag = opts.list + " .tag";

	$(tag).live('click',function(){
		add_selected_tag(input,this);
		return false;
	});

	$(input).keyup(function(){
		var values = $.trim($(this).val());
		if(values == '')return false;
		valuesArray = values.split(' ');
		$(tag).removeClass('tag_selected');
		tags = $(tag);
		for(var i=0;i<tags.length;i++){
			var flag = false;
			for(var j=0;j<valuesArray.length;j++){
				if($(tags[i]).text() == valuesArray[j]){
					if(!$(tags[i]).hasClass('tag_selected')){
						$(tags[i]).addClass('tag_selected');
						break;
					}
				}
			}
		}
	});

	$(input).trigger('keyup');
	
	function add_selected_tag(textfield,selected){
		var tags = $.trim($(textfield).val()).split(' ');
		var selectedTag =  $(selected).text();
		var isExists = false;
		for(var i=0;i<tags.length;i++){
			var tag = $.trim(tags[i]);
			if(tag == selectedTag){
				isExists = true;
				if($(selected).hasClass('tag_selected')){
					$(selected).removeClass('tag_selected');
					tags[i]='';
				}
				break;
			}
		}
		if(isExists == false){
			$(selected).addClass('tag_selected');
			tags.push(selectedTag);
		}
		$(textfield).val($.trim(tags.join(' ')));
	}
};