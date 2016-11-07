var main = function() {
    console.log("Ready!");
};

$(document).ready(main);

$(".article").click(function() {
   console.log("Clicked!");
   $('.description').hide();
   $(this).children('.description').show(); 
});