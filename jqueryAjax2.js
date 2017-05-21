//Ajax 异步请求数据
$(document).ready(function(){
	$("bodt").text("loading data is going");
		$("body").load("box.htm",function(a,status,c){
		console.log(status);
		if(status=="error"){
			$("body").text("failed loading");
		}
	});
	$.getscript("Hello.js").complete(function(){
		sayHello();
	});
});