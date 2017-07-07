// JavaScript File
// JavaScript File
$( document ).ready(function() {
    
    $(".magic").hide();
    $("button").click(function() {
        var correctAnswer= $("input").val();
        if(correctAnswer==="Yes"){
            $(".magic").show();
        }else{
            $(".magic").hide();
        }
        }
    )


});