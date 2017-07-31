$(document).ready(function() {
	$("#new-quote").on("click", function() {
    var bgColor = '#'+Math.random().toString(16).substr(-6);
    
    $("body").css("background-color", bgColor);
    $(".quote").css("color", bgColor);
    $(".btn").css("background-color", bgColor);
    
  });
 });