function init(){
    // 手气不错click事件
    $(".lucky").click(function(){

    });
}

$(document).ready(function(){
    custom_radio_checkbox();
    // $('input').iCheck({
    //     checkboxClass: 'icheckbox_minimal-blue',
    //     radioClass: 'iradio_minimal-blue'
    // });

    // $('input').on('ifChanged', function(event){
    //     var value = $(this).val();
    //     jumpToSomePage(value);
    // });

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
    initWithStaticData("#renqizhubo1");
    initWithStaticData("#gamezhibo1");
    initWithStaticData("#girllive");
    initWithStaticData("#gamelive");
});

//跳转页面
function jumpToSomePage(type){
         //alert(type);
         var tabs = $(".content");
         $.each(tabs,function(index,value){
                 $(this).removeClass('cactive');
         });
        $("#"+type).addClass('cactive');
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
    var cells = sub_container.find("li a");
    $.each(cells,function(index,value){
        var room_id = index;

        if ($(this).attr('class') =='game_cell_image'){
            $("game_cell"+index).attr("id","");
            $(this).attr('id','game_cell'+index);
        }else if ($(this).attr('class') =='renqi_cell_image'){
            $("live_cell"+index).attr("id","");
            $(this).attr('id','live_cell'+index);
        }

        //更新图片的hover操作
        $(this).val(room_id);
        $(this).hover(hoverIn,hoverOut);
        //调整右下角人数的宽度.
        var people_num = $(this).find(".people_num");
        var tempWidth = people_num.width();
        tempWidth += 12;
        people_num.css({"width":tempWidth+"px"});
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
                var room_id = index;
                //更新图片
                cell.append('<img class="cell_image" src="'+
                    url+'"/>');
                cell.append('<span class="people_name">'+name+'</span>');
                cell.append('<span class="people_num">'+num +'人</span>');
                //type = 1;
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
            if(roomid % 2 == 0){
                hover_tiplive.append('<span class="jutiroomhoverlivetext">进入<span style="color:#FF0000">'+roomid+'</span>房间</span>')
                hover_tiplive.append('<span class="extractmark">| 预览</span>');
                //预览
            }else{
                hover_tiplive.append('<span class="pindaohoverlivetext">进入频道</span>');
                //跳到频道。
            }
            break;
        case 'game_cell':
            //游戏直播
            var roomid = $(this).val();
            $(this).append('<span class="hover_tiplive"></span>');
            var hover_tiplive = $(this).find(".hover_tiplive");
            hover_tiplive.append('<span class="play_icon"></span>');
            if(roomid%2 == 0){
                hover_tiplive.append('<span class="gamehoverlivetext">进入<span style="color:#FF0000">'+roomid+'</span>房间</span>');
            }else{
                hover_tiplive.append('<span class="pindaohoverlivetext">进入频道</span>');
            }
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
    });
    var btns = $(".next");
    $.each(btns,function(index,btn){
        height = $(this).height();
        var parent = $(this).parent();
        fheight = parent.height();
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

function custom_radio_checkbox() {
    $('body').addClass('has-js');
    $('.label_check,.label_radio').click(function(){
        setupLabel();
    });
    setupLabel();
}

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