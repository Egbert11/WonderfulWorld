// JavaScript Document
$(function(){
	
	$("#bottom").click(function(){
			$(".nano").nanoScroller({scroll:'bottom'});		
		});
		$("#top").click(function(){
			$(".nano").nanoScroller({scroll:'top'});
		});
		
	$("#titleSearch").focus(function(){
		var text = $(this).val();
		if (text =='推荐标题搜索'){
			$("#titleSearch").val("");
		}
	});
	
	$('input').iCheck({
    	checkboxClass: 'icheckbox_flat-red',
    	radioClass: 'iradio_flat-red'
    });
	
	
});