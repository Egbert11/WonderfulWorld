// JavaScript Document
$(function(){

    $(".nano").nanoScroller({alwaysVisible: true});

	$("#titleSearch").focus(function(){
		var text = $(this).val();
		if (text =='推荐标题搜索'){
			$("#titleSearch").val("");
		}
	});
	
	$('input').iCheck({
    	checkboxClass: 'icheckbox_flat-grey',
    	radioClass: 'iradio_flat-grey'
    });
});