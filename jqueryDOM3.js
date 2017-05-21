/* *append 在被选中元素结尾插入内容
   *prepend 在被选中元素开头插入内容
   *before  在被选中元素之前插入内容 可换行添加
   *after 在被选中元素之后插入内容   可换行添加 */
$(document).ready(function(){
	$("#btn1").click(function(){
		$("#p1").append(" jikexueyuan")；//text()只可获取内容
		});
	$("#btn1").click(function(){
		$("#p1").prepend(" jikexueyuan")；//text()只可获取内容
		});
	$("#btn2").click(function(){
		$("#p2").before(" jikexueyuan")；//text()只可获取内容
		});
	});

	function appendText(){
		var text1="<p>me</p>";
		var text2=$("<p></p>").text("ime");
		var text3=document.createElement("p");
		text3.innerHTML="wme";
		$("body").append(text1,text2,text3);
	};  //添加方式：HTML， Jquery， Dom
	