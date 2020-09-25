$(document).ready(function(){
    var total_clicks = 0;
    var clicks_per_second = 0;

    var intern_hired = 0;
    var engineer_hired = 0;
    var senior_hired = 0;

    var intern_initial_cost = 10;
    var engineer_initial_cost = 100;
    var senior_initial_cost = 200;

    var intern_cost = 10;
    var engineer_cost = 100;
    var senior_cost = 200;



    $.fn.button_click_event = function(){
        $("#click_btn").on('click', function(){
            total_clicks += 1;
            $("#click_count").html(Math.floor(total_clicks));
        });
    };
    
    $.fn.clicks_per_second_event = function(){
        window.setInterval(function(){
            total_clicks += clicks_per_second;
            $("#click_count").html(Math.floor(total_clicks));
        }, 1000);
    }

    $.fn.hiring_button_events = function(){
        $("#intern_hire").attr("disabled", true);
        $("#engineer_hire").attr("disabled", true);
        $("#senior_hire").attr("disabled", true);

        $("#intern_hire").on('click', function(){
            intern_hired += 1;
            clicks_per_second += 0.5;
            total_clicks -= intern_cost;
            $("#click_count").html(Math.round(total_clicks));
            $("#clicks_per_second").html(clicks_per_second);
            intern_cost = Math.round(intern_initial_cost * (1 + (0.1 * Math.pow(intern_hired + 1, 1.6))))
            $("#intern_cost").html("Cost: "+intern_cost+" clicks")
        });

        $("#engineer_hire").on('click', function(){
            engineer_cost += 1;
            clicks_per_second += 1;
            total_clicks -= engineer_cost;
            $("#click_count").html(Math.round(total_clicks));
            $("#clicks_per_second").html(clicks_per_second);
            engineer_cost = Math.round(engineer_initial_cost * (1 + (0.1 * Math.pow(engineer_hired + 1, 1.6))))
            $("#engineer_cost").html("Cost: "+engineer_cost+" clicks")

        });

        $("#senior_hire").on('click', function(){
            senior_hired += 1;
            clicks_per_second += 2;
            total_clicks -= senior_cost;
            $("#click_count").html(Math.round(total_clicks));
            $("#clicks_per_second").html(clicks_per_second);
            senior_cost = Math.round(senior_initial_cost * (1 + (0.1 * Math.pow(senior_hired + 1, 1.6))))
            $("#senior_cost").html("Cost: "+senior_cost+" clicks")
        });
    }

    $.fn.hiring_enabling_even = function(){
        $("#click_count").on("DOMSubtreeModified", function(){
            if (total_clicks >= intern_cost){
                $("#intern_hire").attr("disabled", false);
            }else{
                $("#intern_hire").attr("disabled", true);
            }
            if (total_clicks >= engineer_cost){
                $("#engineer_hire").attr("disabled", false);
            }else{
                $("#engineer_hire").attr("disabled", true);
            }
            if (total_clicks >= senior_cost ){
                $("#senior_hire").attr("disabled", false);
            }else{
                $("#senior_hire").attr("disabled", true);
            }
        });
    }





    var pageready = (function(){
        var thispage = {};
        thispage.init = function(){

        $.fn.button_click_event();
        $.fn.clicks_per_second_event();
        $.fn.hiring_button_events();
        $.fn.hiring_enabling_even();

        };
        return thispage;
    })();

    pageready.init();

});
