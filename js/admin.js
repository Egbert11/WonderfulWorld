// JavaScript Document
$(function(){

    $(".nano").nanoScroller({alwaysVisible: true});

	$("#bottom").click(function(){
			$(".nano").nanoScroller({scroll:'bottom'});		
		});
		$("#top").click(function(){
			$(".nano").nanoScroller({scroll:'top'});
		});
	
	//输入域获得焦点 
	$("#titleSearch").focus(function(){
		var text = $(this).val();
		if (text =='推荐标题搜索'){
			$("#titleSearch").val("");
		}
	});
	
	//输入域失去焦点 
	$("#titleSearch").blur(function(){
		var text = $(this).val();
		if (text.toString() ==''){
			$("#titleSearch").val("推荐标题搜索");
		}
	});
	
	$('input').iCheck({
    	checkboxClass: 'icheckbox_minimal-blue',
    	radioClass: 'iradio_minimal-blue'
    });

	$('.radio-style input').on('ifChanged', function(event){
        // alert(event.type + ' callback'+data);
        var value = $(this).val();
        jumpToSomePage(value);
    });
    setUpCellFun();
});

//跳转页面
function jumpToSomePage(type){
    var tabs = $(".img-wrapper");
    $.each(tabs,function(index,value){
        $(this).removeClass('tab-active');
    });
    $("#"+type).addClass('tab-active');
}

function openThePopUp(){
//	alert("abc");
	initPopUp();
	var blocklayer = $(".blocklayer");
	//根据数据修改popup，custom
	var popUp = $(".popup");
	blocklayer.css({display:"block"});
	popUp.css({display:"block"});
}

function initPopUp(){
	var blocklayer = $(".blocklayer");
	//根据数据修改popup，custom
	var popUp = $(".popup");
	var closeBtn = popUp.find(".closebtn");
	closeBtn.click(closeBtnFun);
	var cancelBtn  = popUp.find(".cancelbtn");
	cancelBtn.click(closeBtnFun);
	//custom confirm button behavior when click
	var confirmBtn = popUp.find(".confirmbtn");
	confirmBtn.click(closeBtnFun);
}





var  closeBtnFun = function closeThePopUp(){
	var blocklayer = $(".blocklayer");
	//根据数据修改popup，custom
	var popUp = $(".popup");
	blocklayer.css({display:"none"});
	popUp.css({display:"none"});
}

function setUpCellFun(){
	var container = $(".content");
	var sub_containers = container.find(".img-wrapper");
	var l = sub_containers.length;
	for (var i = 0 ; i < l ; ++i){
		var sub_container = sub_containers[i];
		var cells = $("li",sub_container);
		$.each(cells,function(index,value){
			var cell = $(this);
			//点击编辑弹出
			var editorBtn = cell.find(".edit button");
			editorBtn.click(function(){
				var blocklayer = $(".blocklayer");
				//根据数据修改popup，custom
				var popUp = $(".popup");
				openThePopUp();
			}); 
		});
	}
}
