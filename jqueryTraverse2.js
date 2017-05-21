/*
*parent 只能只向一层向上遍历
*parents 全部向上遍历 可任意指定参数
*parentUntil 指的是包含的区间
*/
$(document).ready(function(){
	//$("p").parent().css({border:"3px solid red"})	;
	$("p").parentsUntil("#div1").css({border:"3px solid red"})	;
	});

	