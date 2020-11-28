$(document).ready(function() {
    // We are using a Javascript library, called Jquery, to select an element with an ID of stop-button
    // Notice #stop-button is the same as the CSS ID selector
    var stopButton = $("#stop-button");
    var stopLight = $("#stop-light");
    
    // On pressing stop button, we will execute the function "turnOnStopLight"
    stopButton.click(turnOnStopLight);
    
    // A function section of a program that performs a specific task
    function turnOnStopLight() {
        // We add a class of "stop" to the stoplight. Try looking at the CSS file to see what this does!
        stopLight.addClass("stop");
    }

    // Your turn: Try leverage on the existing code to get the traffic light fully operational!
})