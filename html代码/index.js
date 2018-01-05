$(function(){

    
    
    var i = 0;
    var set;
    
    var len = $(".li").length;
    for(var j = 0; j < len; j ++){
        $(".cicles").append('<div class="cc"></div>');
    }
    $(".cc").eq(i).addClass("h");    
    
    function time(){
        set = setInterval(function(){
            if(i < 3){
                i++;
            } else {
                i = 0;
            }
    $(".ppt-con").stop(true).animate({"left": -i* 1100 + "px"});
            
    $(".cc").eq(i).addClass("h").siblings(".cc").removeClass("h");        
        }, 2000)        
    }
    
    time();

    $(".ppt").mouseover(function(){
        clearInterval(set);
    })   
    
    $(".ppt").mouseleave(function(){
        time();
    })

    $(".right").click(function(){
            if(i < 3){
                i++;
            } else {
                i = 0;
            }
    $(".ppt-con").stop(true).animate({"left": -i* 1100 + "px"}, 1000);   
$(".cc").eq(i).addClass("h").siblings(".cc").removeClass("h");          
    })

    $(".left").click(function(){
            if(i > 0){
                i--;
            } else {
                i = 3;
            }
        
    $(".ppt-con").stop(true).animate({"left": -i* 1100 + "px"}, 1000);   
$(".cc").eq(i).addClass("h").siblings(".cc").removeClass("h");          
    })    
    
    $(".cc").mouseover(function(){
        var this_ = $(this).index();
        i = this_;
    $(".ppt-con").stop(true).animate({"left": -i* 1100 + "px"}, 1000);          
$(".cc").eq(i).addClass("h").siblings(".cc").removeClass("h");          
    })
    
    
})
