$(document).ready(function(){
	$("#clickmebtn").on("click",clickhander1);
	$("#clickmebtn").on("click",clickhander2);
	$("#clickmebtn").off("click",clickhander2);
});

function clickhander1(e){
	console.log("clickhander1");
}

function clickhander2(e){
	console.log("clickhander2");
}
