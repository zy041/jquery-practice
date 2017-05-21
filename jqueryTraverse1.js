/*
*children 只能向下遍历一级 children 为可选参数
*find 可向下遍历任何一级，find为必选参数
*/
$(document).ready(function(){
	//$("#div1").children("#div2").css({border:"3px solid red"})	;
	//$("#div1").find("a").css({border:"3px solid red"})	;
	$("#div1").chidren("p").css({border:"3px solid red"})	;
	});

	