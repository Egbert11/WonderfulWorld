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

	$('.radio-style input').on('ifChanged', function(event){
        // alert(event.type + ' callback'+data);
        var value = $(this).val();
        jumpToSomePage(value);
    });
});

//跳转页面
function jumpToSomePage(type){
    var tabs = $(".img-wrapper");
    $.each(tabs,function(index,value){
        $(this).removeClass('tab-active');
    });
    $("#"+type).addClass('tab-active');
}
