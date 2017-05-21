//Ajax 异步请求数据
$(document).ready(function(){
	$("#btn").on("click"，function(){
		$.get("Sever.php",{name:$("namevalue").val()},function(data){
			$("#result").text("data");
		}).error(function(){
			$("#result").text("It has some problems with communication")
		});
	})	;
});

	