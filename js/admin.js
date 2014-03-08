// JavaScript Document
$(function(){

    $(".nano").nanoScroller({alwaysVisible: true});
    $("#bottom").click(function(){
        $(".nano").nanoScroller({scroll:'bottom'});
    });
    $("#top").click(function(){
        $(".nano").nanoScroller({scroll:'top'});
    });

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
    	checkboxClass: 'icheckbox_flat-grey',
    	radioClass: 'iradio_flat-grey'
    });
	
	
});