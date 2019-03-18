//Check off specific todos by clicking
$('ul').on("click", "li", function(){
    $(this).toggleClass("completed")
});
//Click on X to be deleted
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){ 
   if (event.which === 13) {
       //Grabbing new todo from input
       let textInput = $(this).val();
       $(this).val("")
       //Create a new li and add to ul
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + textInput + "</li>")
   }
});
