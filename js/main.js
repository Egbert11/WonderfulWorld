$( function(){
	//判断单选框的选择类型
	var type;
	$(".radio-style input").change(function(){
		var type = $("input[type='radio']:checked").val();
	});
	
	$(function() {
		$(".recommend-edit").dialog({
			autoOpen: false,
			title:"频道推荐编辑",
			width:233,
		});
	});
	
	$("img").bind("click",function(){
		$( ".recommend-edit" ).dialog("open");
		return false;
	});
	
	$(function() {
		$(".recommend-success").dialog({
			autoOpen: false,
			title:"推荐成功",
			width:233,
		});
	});
	
	$(".recommend-edit button#ok").bind("click",function(){
		$( ".recommend-success" ).dialog("open");
		return false;
	});

	$(".jCarouselLite").jCarouselLite({
    	btnNext: ".next",
    	btnPrev: ".prev",
    	circular: false
	});
	//adjustBtnForVcenter();
	var main = $(".one_line");
	adjustBtnForVcenter();
    initWithData("","{}");
});


function fetchData(){

};

function initWithData(url,data){
	//加载live数据
    url = "./testdata.php"
	$.ajax({
		type:'GET',
		url:url,
		data:data,
		dataType:"json",
		success:function(data){
            
            var container = $("#videolive");
            var sub_container = $("#videolive .jCarouselLite ul");
            sub_container.empty();
            $.each(data,function(index,value){
              //  alert(index+value);
                sub_container.append('<li class="cell"id="life_cell'+(index+1)+'"></li>');
                var cell = sub_container.find("#life_cell"+(index+1));
                var url = value.imgUrl;
                var name = value.nickname;
                var num = value.num;
                //alert(url+name+num);
                cell.append('<img class="cell_image" src="'+
                    url+'"/>');
                cell.append('<span class="people_name">'+name+'</span>');
                cell.append('<span class="people_num">'+num +'人</span>');
                //type = 1;
                cell.hover(hoverIn,hoverOut);
        //cell.click();
            });
		},
		error:function(){}
	});
};

var hoverIn = function(){
    var type = $(this).attr('id');
    type = type.substr(0,type.length-1);
    switch(type){
        case 'life_cell':
             $(this).append('<span class="hover_tiplive">进行直播</span>');
             break;
    }
} 

var hoverOut = function(){
    var tip = $(this).find(".hover_tiplive");
                 tip.remove();
}

var onClickJump = function(){
    
}

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
