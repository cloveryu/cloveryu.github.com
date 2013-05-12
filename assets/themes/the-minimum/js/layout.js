$(function() {
	var _width = 960;
	$("body").load(function(){
		if (top == window) {
		  	var winWidth = $(window).width();
		  	var wid = (winWidth - _width) < 0 ? 0 : Math.floor((winWidth - _width) / 2);
		  	$(".logo").attr("style", "left:" + wid + "px;");
		}
	});
});
