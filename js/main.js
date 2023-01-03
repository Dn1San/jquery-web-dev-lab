$(document).ready(function(){
    //start
    $("#showMore").click(function(){
        $("#moreContent").slideToggle('fast', function(){
            if($(this).is(":hidden")){
                $("#showMore").text("Show Details")
            }else{
                $("#showMore").text("Hide Details")
            }
        })
    })
    
    $(".burger").on(click, function (){
        $("nav").slideToggle("fast")
    })
    //end
})
