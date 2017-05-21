$(document).ready(function(){
	$("#btn1").click(function(){
		alert("text:"+$("#text").text())；//text()只可获取内容
		});
	$("#btn1").click(function(){
		alert("text:"+$("#text").html())；//html()可获取内部子标签
		});
	$("#btn1").click(function(){
		alert("text:"+$("#it").val())；//获取对话框
		});
	$("#btn2").click(function(){
		alert("text:"+$("#aid").attr("href"))；//获取对话框
		});
	});
	