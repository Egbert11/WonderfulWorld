$( function(){
	//判断单选框的选择类型
	var type;
	$(".radio-style input").change(function(){
		var type = $("input[type='radio']:checked").val();
	});
	
	$(".recommend-edi").find("img").bind("click",function(){
		$( "#dialog" ).dialog({ 
          buttons: { "Ok": function() { $(this).dialog("close"); } }  
        });
	});

	$(".jCarouselLite").jCarouselLite({
    	btnNext: ".next",
    	btnPrev: ".prev",
    	circular: false
	});
	//adjustBtnForVcenter();
	var main = $(".one_line");
});

function fetchData(){

};

function initWithData(){

};

//compatible for ie 
function adjustBtnForVcenter(){
	var btns = $(".prev");
    $.each(btns,function(index,btn){
    	height = $(this).height();
    	var parent = $(this).parent();
    	fheight = parent.height();
    	//alert("feight"+ fheight +" height"+ height );
    	$(this).css("margin-top",(fheight - height) /2);
    });
    var btns = $(".next");
        $.each(btns,function(index,btn){
    	height = $(this).height();
    	var parent = $(this).parent();
    	fheight = parent.height();
    	//alert("feight"+ fheight +" height"+ height );
    	$(this).css("margin-top",(fheight - height) /2);
    }); 
};
