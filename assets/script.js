// Declare initial variables.
// var taskBlock = document.getElementsByClassName("task-block")
var taskBlock = $(".task-block");

// Displays current date and time at top of page.
function displayTime() {
    var currentTimeDate = moment().format("[It is ]MMM DD, YYYY [at] hh:mm A");
    $("#currentDay").text(currentTimeDate);
}
// Runs function displayTime every 5 seconds.
setInterval(displayTime, 5000);

//Style the task blocks based on current time.
function styleRows() {
    var currentHour = moment().format("H");
    taskBlock.each(function() {
        var thisBlock = $(this);
        var thisBlockHour = parseInt(thisBlock.attr("hour"));
        // If the block is in the past use Bootstrap to set color to gray.
        if (thisBlockHour < currentHour) {
            thisBlock.addClass("past").removeClass("present future");
        }
        // If the block is in the present use Bootstrap to set color to green.
        if (thisBlockHour == currentHour) {
            thisBlock.addClass("present").removeClass("past future");
        }
        // If the block is in the future use Bootstrap to set color to blue.
        if (thisBlockHour > currentHour) {
            thisBlock.addClass("future").removeClass("past present");
        }
    })
}
// Runs function styleRows every minute.
setInterval(styleRows, 60000);

// Runs selected functions once page is loaded.
$(window).on("load", function() {
    styleRows();
})

// When save button is clicked, task is saved in local storage using the hour as a key.
$(".saveBtn").on("click", function() {
    var taskToSave = $(this).siblings("textarea").val();
    var blockTime = $(this).siblings("textarea").attr("hour");
    localStorage.setItem(blockTime, taskToSave);
})

// Populate task list from local storage.
$("textarea").each(function(){
    var blockTime = $(this).attr("hour");
    $(this).val(localStorage.getItem(blockTime));
})