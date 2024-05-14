document.addEventListener("DOMContentLoaded", function () {
    // Your existing code here
    var milliseconds = 0;
    var seconds = 0;
    var minutes = 0;
    var hours = 0;

    var appendMilliseconds = document.getElementById("milliseconds");
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
    var appendHours = document.getElementById("hours");

    var buttonStart = document.getElementById("play");
    var buttonStop = document.getElementById("stop");
    var buttonReset = document.getElementById("reset");
    var buttonLap = document.getElementById("lap");

    var Interval;
    var lapCounter = 1; // Initialize lap counter
    var lapTimesContainer = document.getElementById("lapTableBody");

    // Function for starting timer
    function startTimer() {
        milliseconds++;
        // Milliseconds Counter
        if (milliseconds < 10) {
            appendMilliseconds.innerHTML = "0" + milliseconds;
        } else {
            appendMilliseconds.innerHTML = milliseconds;
        }
        if (milliseconds > 99) {
            seconds++;
            appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            milliseconds = 0;
            appendMilliseconds.innerHTML = "0" + milliseconds;
        }
        // Second Counter
        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + seconds;
        }
        // Minutes Counter
        if (minutes > 59) {
            hours++;
            appendHours.innerHTML = hours < 10 ? "0" + hours : hours;
            minutes = 0;
            appendMinutes.innerHTML = "0" + minutes;
        }
    }

    // Button to start timer
    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        $("#animateCircle").addClass("addAnimation");
        $("#animateCircle.addAnimation").css("animation-play-state", "running");
    };

    // Button to stop timer
    buttonStop.onclick = function () {
        clearInterval(Interval);
        $("#animateCircle").css("animation-play-state", "paused");
    };

    // Button to reset timer
    // Button to reset timer
buttonReset.onclick = function () {
    var hidediv = document.getElementById("tohide");
    hidediv.style.display = "block";

    // Show a confirmation dialog
    var confirmReset = window.confirm("Are you sure you want to restart?");

    // Check the user's response
    if (confirmReset) {
        clearInterval(Interval);
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        appendMilliseconds.innerHTML = "00";
        appendSeconds.innerHTML = "00";
        appendMinutes.innerHTML = "00";
        appendHours.innerHTML = "00";
        lapTimesContainer.innerHTML = ""; // Clear lap times
        lapCounter = 1; // Reset lap counter
    } else {
        // Hide the "No History" message if the user cancels the reset action
        hidediv.style.display = "none";
    }
};


    // Function to handle lap functionality
    function lapFunc() {
        var hidediv = document.getElementById("tohide");
        hidediv.style.display = "none";

        var lapTime = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
        var lapEntry = document.createElement("tr");
        lapEntry.innerHTML = "<td>Lap " + lapCounter + "</td><td>" + lapTime + "</td>";
        lapTimesContainer.appendChild(lapEntry);
        lapCounter++;
    }

    // Assign lap function to lap button
    buttonLap.onclick = lapFunc;
});
