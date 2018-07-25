$(document).ready(function(){
	
	$("button").click(function(){
		var randomNumber = Math.floor((Math.random() * 6) + 1);
		console.log(randomNumber);
		$("text").html(randomNumber);
	});
});