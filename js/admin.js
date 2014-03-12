// JavaScript Document
$(function(){
	//自定义checkbox和radio
	custom_radio_checkbox();
	 
	//滚动条的设置
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
			$(this).val("");
		}
	});
	
	//输入域失去焦点 
	$("#titleSearch").blur(function(){
		var text = $(this).val();
		if (text.toString() ==''){
			$(this).val("推荐标题搜索");
		}
	});
	
	//设置icheck样式
	/*$('input').iCheck({
    	checkboxClass: 'icheckbox_minimal-blue',
    	radioClass: 'iradio_minimal-blue'
    });*/
	
	//radio之间的切换
	/*$('.radio-style input').on('ifChanged', function(event){
        // alert(event.type + ' callback'+data);
		alert("hah");
        var value = $(this).val();
        jumpToSomePage(value);
    });*/
	
	//监听点击"编辑"事件
    setUpCellFun();
	
	//频道推荐标题编辑获得焦点 
	$(".popup .popup_content .popupenter").focus(function(){
		var text = $(this).val();
		if (text.indexOf('推荐标题') >= 0){
			$(this).val("");
		}
	});
	
	//频道推荐标题编辑失去焦点 
	$(".popup .popup_content .popupenter").blur(function(){
		var text = $(this).val();
		if (text.toString() ==''){
			$(this).val("推荐标题推荐标题");
		}
	});
	
	//推荐成功点击"关闭"事件
	$(".recommend-success .popup_header .closebtn").bind("click",function() {
		hideRecommendSuccess();
	});
	
	//推荐成功点击"确认"事件
	$(".recommend-success .button-style button#OK").bind("click",function() {
		hideRecommendSuccess();
	});
	
	//推荐成功点击"推荐内容管理"事件
	$(".recommend-success .button-style button#manage").bind("click",function() {
		hideRecommendSuccess();
	});
});

function setupLabel(){
	if($('.label_check input').length) {
		$('.label_check').each(function(){
			$(this).removeClass('c_on');
		});
		$('.label_check input:checked').each(function(){
			$(this).parent('label').addClass('c_on');
		});
	};
	if($('.label_radio input').length) {
		$('.label_radio').each(function(){
			$(this).removeClass('r_on');
		});
		$('.label_radio input:checked').each(function(){
			$(this).parent('label').addClass('r_on');
		});
		//根据选中的radio跳转到相应的页面
		var value = $("label.r_on input").val();
		jumpToSomePage(value);
		
	};
}

function custom_radio_checkbox() {
	$('body').addClass('has-js');
	$('.label_check,.label_radio').click(function(){
		setupLabel();
	});
	setupLabel();
}

//跳转页面
function jumpToSomePage(type){
    var tabs = $(".img-wrapper");
    $.each(tabs,function(index,value){
        $(this).removeClass('tab-active');
    });
    $("#"+type).addClass('tab-active');
}

//打开频道推荐对话框
function openThePopUp(){
//	alert("abc");
	initPopUp();
	var blocklayer = $(".blocklayer");
	//根据数据修改popup，custom
	var popUp = $(".popup");
	blocklayer.css({display:"block"});
	popUp.css({display:"block"});
}

//初始化频道推荐对话框
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
	confirmBtn.click(confirmBtnFun);
}

//频道推荐页面关闭按钮
var  closeBtnFun = function closeThePopUp(){
	var blocklayer = $(".blocklayer");
	//根据数据修改popup，custom
	var popUp = $(".popup");
	blocklayer.css({display:"none"});
	popUp.css({display:"none"});
}

//频道推荐页面确认按钮
var confirmBtnFun = function recommendSuccessPopUp(){
	//根据数据修改popup，custom
	var popUp = $(".popup");
	popUp.css({display:"none"});
	var blocklayer = $(".blocklayer");
	var success = $(".recommend-success");
	blocklayer.css({display:"block"});
	success.css({display:"block"});
}

//监听点击编辑事件
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

//隐藏推荐成功对话框
function hideRecommendSuccess(){
	var blocklayer = $(".blocklayer");
	//根据数据修改popup，custom
	var popUp = $(".recommend-success");
	blocklayer.css({display:"none"});
	popUp.css({display:"none"});
}
