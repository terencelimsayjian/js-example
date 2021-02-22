$(document).ready(function() {
    var stopButton = $("#stop-button");
    var stopLight = $("#stop-light");
    var slowButton = $("#slow-button");
    var slowLight = $("#slow-light");
    var goButton = $("#go-button");
    var goLight = $("#go-light");

    stopButton.click(turnOnStopLight);
    
    function turnOnStopLight() {
        stopLight.addClass("stop");
        slowLight.removeClass("slow");
        goLight.removeClass("go");
    }

    slowButton.click(turnOnSlowLight);

    function turnOnSlowLight() {
        slowLight.addClass("slow");
        stopLight.removeClass("stop");
        goLight.removeClass("go");
    }

    goButton.click(turnOnGoLight);

    function turnOnGoLight() {
        goLight.addClass("go");
        stopLight.removeClass("stop");
        slowLight.removeClass("slow");
    }

    // comment1
    // comment2
    // comment5
})