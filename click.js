$(document).ready(function(){
    var total_clicks = 0;
    var clicks_per_second = 0;

    $.fn.button_click_event = function(){
        $("#click_btn").on('click', function(){
            total_clicks += 1;
            $("#click_count").html(Math.round(total_clicks));
        });
    };

    $.fn.clicks_per_second_event = function(){
        window.setInterval(function(){
            total_clicks += clicks_per_second;
            $("#click_count").html(Math.round(total_clicks));
        }, 1000);
    }

    var pageready = (function(){
        var thispage = {};
        thispage.init = function(){
        $.fn.button_click_event();
        $.fn.clicks_per_second_event();

        // $("#clicks_per_second").html(clicks_per_second);



        };
        return thispage;
    })();

    pageready.init();

});
