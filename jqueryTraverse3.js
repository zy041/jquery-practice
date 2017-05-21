/*
*siblings()修改掉同级的所有其他元素
*next() 修改掉指定的下一个元素
*nextAll()修改掉指定元素下面的所有元素
*nextUntil()区间修改
*prev()修改掉指定的上一个元素
*prevAll()修改掉指定元素上面的所有元素
*preuUtil() 向上区间修改
*/
$(document).ready(function(){
	//$("h4").siblings().css({border:"3px solid red"})	;
	//$("h4").next().css({border:"3px solid red"})	;
	//$("h4").nextAll().css({border:"3px solid red"})	;
	//$("p").nextUntil("h4").css({border:"3px solid red"})	;
	$("h4").prev().css({border:"3px solid red"})	;
	
	});

	