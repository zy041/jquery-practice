$(document).ready(function(){
    for(i=0;i<5;i++){
		$("<div>").appendTo(document.body);
		}
	$("<div>").click(function(){
		$(this).hide(2000);
	});
});

