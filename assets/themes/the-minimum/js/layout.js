$(function() {
	var _width = 960;
	var leftAliged = function() {
		alert(2);
		if (top == window) {
			alert(1);
		  	var winWidth = $(window).width();
		  	var wid = (winWidth - _width) < 0 ? 0 : Math.floor((winWidth - _width) / 2);
		  	$(".logo").attr("style", "left:" + wid + "px;");
		}
	};
	$(window).resize(leftAliged);
	$("body").load(function(){
		
	});

});
