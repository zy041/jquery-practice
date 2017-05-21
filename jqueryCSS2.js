
$(document).ready(function(){
	alret($("#div").height());
	alret($("#div").innerHeight());
	alret($("#div").outerHeight());//不传参数时，为元素本身高度+内边距+边框
	alret($("#div").outerHeight(ture));//传参数时，为元素本身高度+内边距+边框+外边距
		
	});

	