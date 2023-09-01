var check_mailtab = 'inbox-tab';
$(document).ready(function(){
    // selecting inbox mails using checkbox start
    $('#input-check-all').on('change',function(){
        if($('#input-check-all').is(':checked')){
            inbox_tab = $("#"+check_mailtab).children('.inbox');
            inpox_chk = $(inbox_tab).children('input');
            for(s= 0; s<5; s++){
                inpox_chk[s].checked = true;
            }
        }
        else{
            $('.mail-checks').prop('checked',false);
            $('.check-box-control').css('display','none');
        }
        
    }); 
    $('.mail-checks').change(function(){
        $('#input-check-all').prop('checked',false);
        $('.check-box-control').css('display','flex');
    });
    $('.fa-square-minus').click(function(){
        $('#input-check-all').prop('checked',false);
        $('.mail-checks').prop('checked',false);
    });
    // selecting inbox mails using checkbox end
    // -------------------------------------------
    // news box drop-down toggler start
    $('.news-sorter-btn').click(function(){
        $('.news-sorte-list').toggle();
    });
    // news box drop-down toggler end
    // -------------------------------------------
    // top nav search box start 
    $('#search-input').click(function(){
        $('#search-input').animate({
            width: '300px',
            
        });
    });
    $('#search-input').focusout(function(){
        $('#search-input').animate({
            width: '200px',
        });
    });
    // top nav search box end
    // -------------------------------------------
    // menu button toggler action starts
    $('.menu-button').click(function(){
        $('#side-nav').toggleClass('side-toggle-half');
        $('.nav-hider').toggle();
        $('.logo-link').toggle();
        $('.left-panels').toggleClass('left-panels-toggle');  
        $('.brand-txt').toggle();
        hs_class = $('#side-nav').hasClass('side-toggle-half');
        if(hs_class == true){
            $('.droop-downs').addClass('drop-out');
            $('.top-nav-left').animate({
                width:'5%'
            });
            $('.top-nav-right').animate({
                width:'95%'
            });
        }
        else if(hs_class == false){
            $('.droop-downs').removeClass('drop-out');
            $('.top-nav-left').animate({
                width:'15%'
            });
            $('.top-nav-right').animate({
                width:'85%'
            });
        }
    });
    // menu button toggler action ends
    // // -------------------------------------------
    // navigation drop-downs toggler starts
    $('.drop-clicker').click(function(){
        next_tag  = $(this).next();
        next_tag.css('display','block');
        $('.drop-clicker').not(this).next().css('display','none');
    });
    $(document).on('click',function(event){
        var $trg = $('.drop-clicker');
        if($trg !== event.target && !$trg.has(event.target).length){
            $('.drop-clicker').not(this).next().css('display','none');
        }
    });
    // navigation drop-downs toggler ends
    // -------------------------------------------
    // compost mail starts
    $('#inbox-container').show();
    $('#sent-mail-container').hide();
    $('.controls .fa-compress').show();
    $('.controls .fa-expand').hide();
    $('.compost-mail-btn').click(function(){
        $('.small-scren-titles span').text('Create Mail')
        $('#sent-mail-container').show();
        $('#inbox-container').hide();
        // ==================
        $('#sent-mail-container').removeClass('minimize_window');
        $('.mail-box').show();

        $('.controls .fa-up-right-from-square').hide();
        $('.controls .fa-window-minimize').show();

        $('#sent-mail-container').removeClass('compress_window');
        // =======================
        $('.controls .fa-compress').show();
        $('.controls .fa-expand').hide();
        // ====================
        $('.compost-mail-btn').hide();
    });
    $('.controls .fa-xmark').click(function(){
        $('#sent-mail-container').hide();
        $('#inbox-container').show();
        $('.compost-mail-btn').show();
    });
    $('.controls .fa-window-minimize').click(function(){
        $('.controls .fa-window-minimize').hide();
        $('.controls .fa-up-right-from-square').show();
        // ========================
        $('.controls .fa-expand').hide();
        $('#sent-mail-container').addClass('minimize_window');
        $('.mail-box').hide();
        $('#inbox-container').show();
        // ===================
        $('.controls .fa-compress').hide();
        $('.controls .fa-expand').hide();

    });
    $('.controls .fa-up-right-from-square').click(function(){
        $('.controls .fa-up-right-from-square').hide();
        $('.controls .fa-window-minimize').show();
        // =============================
        $('#sent-mail-container').removeClass('minimize_window');
        $('.mail-box').show();
        $('#inbox-container').hide();
        // ==============================
        $('.controls .fa-expand').show();
        $('.controls .fa-compress').hide();
        var compresed = $('.compress_window').css('display');
        if(compresed == 'block'){
            $('#inbox-container').show();
        }
        else{
            $('.controls .fa-expand').hide();
            $('.controls .fa-compress').show();
        }
    });
    $('.controls .fa-compress').click(function(){
        $('.controls .fa-expand').show();
        $('.controls .fa-compress').hide();
        // ========================
        $('#sent-mail-container').addClass('compress_window');
        $('#inbox-container').show();
    });
    $('.controls .fa-expand').click(function(){
        $('.controls .fa-compress').show();
        $('.controls .fa-expand').hide();
        // ==================================
        $('#sent-mail-container').removeClass('compress_window');
        $('#inbox-container').hide();
    });
    // compost mail ends
    // +++++++++++++++++++++++++++++++
    // --------------------------------
    // app menu cicker
    $('.app-menu-btn').click(function(){
        $('#side-nav').css('left','0');
    });
    $('#content-body').click(function(){
        $('#side-nav').css('left','-190px');
        $('.small-search').hide();
        $('.small-search').val('');
        $('.small-scren-titles span').show();
    });
    // mobile screen search
    $('#search-small-btn').click(function(){
        $('.small-scren-titles span').hide();
        $('.small-search').show();
        $('.small-search').val('');
    });
});