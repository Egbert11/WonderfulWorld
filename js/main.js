// JavaScript Document
$(function() {
	var type;
	$(".radio-style input").change(function(){
		var type = $("input[type='radio']:checked").val();
		alert(type);
	});
});