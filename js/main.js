$( function(){

    //$('input').iCheck();
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

	//adjustBtnForVcenter();
	var main = $(".one_line");

    initWithData("","{}"); 
    adjustBtnForVcenter();
    setUpBtnHover();
    $(".jCarouselLite").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        circular: false,
        visible: 4
    });
 
     

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
                var room_id = 10;
                //更新图片
                cell.append('<img class="cell_image" src="'+
                    url+'"/>');
                cell.append('<span class="people_name">'+name+'</span>');
                cell.append('<span class="people_num">'+num +'人</span>');
                //type = 1;

                cell = $.extend({roomid:0},cell||{});
                cell.roomid = room_id
                //更新图片的hover操作
                cell.val(room_id);
                cell.hover(hoverIn,hoverOut);
                //调整右下角人数的宽度.
                var people_num = cell.find(".people_num");
                var tempWidth = people_num.width();
                tempWidth += 12;
                people_num.css({"width":tempWidth+"px"});
                //创建房间图标
                cell.append('<span class="room_id">'+room_id+'</span>');
               // cell.append('<span class="hover_tiplive">进行直播</span>');
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
             //美女直播L
             var roomid = $(this).val();
             $(this).append('<span class="hover_tiplive"></span>');
             var hover_tiplive = $(this).find(".hover_tiplive");
             hover_tiplive.append('<span class="play_icon"></span>');
             if(true){
                hover_tiplive.append('<span class="jutiroomhoverlivetext">进入<span style="color:#FF0000">'+roomid+'</span>房间</span>')
                hover_tiplive.append('<span class="extractmark">|</span>');  
                //预览
             }else{
                //跳到频道。
             }
             break;
        case 'game':
            //游戏直播
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
    	//$(this).css("margin-top",(fheight - height) /2);
    });
    var btns = $(".next");
        $.each(btns,function(index,btn){
    	height = $(this).height();
    	var parent = $(this).parent();
    	fheight = parent.height();
    	//alert("feight"+ fheight +" height"+ height );
    	//$(this).css("margin-top",(fheight - height) /2);
//        alert("fheight" + fheight + "height"+height);
        var name = parent.attr("class");
    }); 
};

function setUpBtnHover(){
    var btns = $(".prev");
    $.each(btns,function(index,btn){
        $(this).hover(function(){
            $(this).css({"background":'url("./image/left_hover.png") no-repeat center'});
        },function(){
            $(this).css({"background":'url("./image/left_normal.png") no-repeat center'});
        });
    });
    var btns = $(".next");
    $.each(btns,function(index,btn){
        $(this).hover(function(){
            $(this).css({"background":'url("./image/right_hover.png") no-repeat center'});
        },function(){
            $(this).css({"background":'url("./image/right_normal.png") no-repeat center'});
        });
    });
}
