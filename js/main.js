$( function(){

    //$('input').iCheck();
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

    $(".header input").change(function (){
        var type = $("input[type='radio']:checked").val();
        
        jumpToSomePage(type);
    });

	//adjustBtnForVcenter();
	var main = $(".one_line");

    // initWithData("","{}"); 

    adjustBtnForVcenter();
    setUpBtnHover();
    $("#renqizhubo1 .jCarouselLite").jCarouselLite({
        btnNext: "#renqizhubo1 .next",
        btnPrev: "#renqizhubo1 .prev",
        circular: false,
        visible: 4
    });
    $("#gamezhibo1 .jCarouselLite").jCarouselLite({
        btnNext: "#gamezhibo1 .next",
        btnPrev: "#gamezhibo1 .prev",
        circular: false,
        visible: 4
    });

    $("#renqizhubo3").jCarouselLite({
        btnNext: "#nextrbtn",
        btnPrev: "#prevlbtn",
        circular: false,
        visible: 4
    });
    $("#renqizhubo2").jCarouselLite({
        btnNext: "#nextrbtn",
        btnPrev: "#prevlbtn",
        circular: false,
        visible: 4
    });
    //initWithStaticData("#renqizhubo1");
    //initWithStaticData("#gamezhibo1");
    //initWithStaticData("#renqizhubo2");
    //initWithStaticData("#renqizhubo3");
    // alert("abc");
});

//跳转页面
function jumpToSomePage(type){
         var tabs = $(".content");
         $.each(tabs,function(index,value){
                 $(this).removeClass('active');
         });
        $("#"+type).addClass('active');
        switch (type){
            case "alllive":
                    $("#renqizhubo1 .jCarouselLite").jCarouselLite({
                        btnNext: "#renqizhubo1 .next",
                        btnPrev: "#renqizhubo1 .prev",
                        circular: false,
                        visible: 4
                    });
                    $("#gamezhibo1 .jCarouselLite").jCarouselLite({
                        btnNext: "#gamezhibo1 .next",
                        btnPrev: "#gamezhibo1 .prev",
                        circular: false,
                        visible: 4
                    });
                break;
            case "girllive":
                $("#renqizhubo3").jCarouselLite({
                    btnNext: "#girlnextrbtn",
                    btnPrev: "#girlprevlbtn",
                    circular: false,
                    visible: 4
                });
                $("#renqizhubo2").jCarouselLite({
                    btnNext: "#girlnextrbtn",
                    btnPrev: "#girlprevlbtn",
                    circular: false,
                    visible: 4
                });
                break;
            case "gamelive":    
                $("#gamezhibo3").jCarouselLite({
                    btnNext: "#gamenextrbtn",
                    btnPrev: "#gameprevlbtn",
                    circular: false,
                    visible: 4
                });
                $("#gamezhibo2").jCarouselLite({
                    btnNext: "#gamenextrbtn",
                    btnPrev: "#gameprevlbtn",
                    circular: false,
                    visible: 4
                });
                break;
        }
}

function  initWithStaticData(str){

            var container = $(str);
            var sub_container = container.find(".jCarouselLite ul");
            //sub_container.empty();
            var cells = sub_container.find("li");
            $.each(cells,function(index,value){
                //sub_container.append('<li class="cell"id="life_cell'+(index+1)+'"></li>');
                //var cell = sub_container.find("#life_cell"+(index+1));
                //var url = "./image/avatar.png";
                //var name = "性感小蛮腰";
                //var num = 20;
                var room_id = 10;
                //更新图片
                //cell.append('<img class="cell_image" src="'+
                  //  url+'"/>');
                //cell.append('<span class="people_name">'+name+'</span>');
                //cell.append('<span class="people_num">'+num +'人</span>');
                //type = 1;
                $(this).attr('id','live_cell'+index);

                //cell = $.extend({roomid:0},cell||{});
                //cell.roomid = room_id
                //更新图片的hover操作
                $(this).val(room_id);
                $(this).hover(hoverIn,hoverOut);
                //调整右下角人数的宽度.
                var people_num = $(this).find(".people_num");
                var tempWidth = people_num.width();
                tempWidth += 12;
                people_num.css({"width":tempWidth+"px"});
                //创建房间图标
                //cell.append('<span class="room_id">'+room_id+'</span>');
               // cell.append('<span class="hover_tiplive">进行直播</span>');
        //cell.click();
            });
}

function initWithData(url,data){
	//加载live数据
    url = "./testdata.php"
	$.ajax({
		type:'GET',
		url:url,
		data:data,
		dataType:"json",
		success:function(data){
            
            var container = $("#alllive");
            var sub_container = $("#alllive .jCarouselLite ul");
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
        case 'live_cell':
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