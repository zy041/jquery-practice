$(document).ready(function(){
	$("#btn1").click(function(){
		$("#p1").text("jikexueyuan")；//text()只可获取内容
		});
	$("#btn2").click(function(){
		$("#p2").html("<a href='http://www,jikexueyuan.com'>jikexueyuan</a>")；//text()只可获取内容
		});
	$("#btn3").click(function(){
		$("#i3").val("jikexueyuan")；//text()只可获取内容
		});
	$("#btn4").click(function(){
		$("#aid").attr({"href"："http://www.jikexueyuan.com ,
		                 "title":"hello"})；//text()只可获取内容
		});
	
	$("#btn5").click(function(){
		$("#p5").text(functiom(i,ot){
			return "old:" +ot+"new:this is the new content" +(i); //huidiao 
		})；//text()只可获取内容
		});
	});
	