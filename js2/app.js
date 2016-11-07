var main = function() {
    $('.btn').click(function() {
        var post = $('.status-box').val();
        var new_content = $('<li>').text(post);
        new_content.prependTo('.posts')
        var post = $('.status-box').val('');
        $('.counter').text(140);
        $('.btn').addClass('disabled');
    });
    $('.btn').addClass('disabled')
    $('.status-box').keyup(function() {
        var postLength = $(this).val().length;
        var charactersLeft = 140 - postLength;
        $('.counter').text(charactersLeft);
        
        if (charactersLeft <= 0) {
            $('.btn').addClass('disabled');
        } else {
            $('.btn').removeClass('disabled');
        }
    });
    
};

$(document).ready(main);