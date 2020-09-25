$(document).ready(function(){

    var pageready = (function(){
        var thispage = {};
        thispage.init = function(){
            console.log("HERE");

        };
        return thispage;
    })();

    pageready.init();

});
