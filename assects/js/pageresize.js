$(document).ready(function(){
    // 
    wdt = $(window).width();
    btn_icon = '<i class="fa-solid fa-download"></i>';
    if(wdt<490){
        $('#tbl1-btn-download').text('');
        $('#tbl1-btn-download').append(btn_icon);
    }
    else{
        $('#tbl1-btn-download').text('');
        $('#tbl1-btn-download').append(btn_icon+' Downlaod');
    }
    $(window).resize(function(){
        if($(window).width()<490){
            $('#tbl1-btn-download').text('');
            $('#tbl1-btn-download').append(btn_icon);
        }
        else if($(window).width()>490){
            $('#tbl1-btn-download').text('');
            $('#tbl1-btn-download').append(btn_icon+' Downlaod');
        }
    });
});