// Declare initial variables.
// var taskBlock = document.getElementsByClassName("task-block")
var taskBlock = $(".task-block");
var currentHour = moment().format("H");
var taskItems = [];
console.log(currentHour)


// Displays current date and time at top of page.
function displayTime() {
    var currentTimeDate = moment().format("[It is ]MMM DD, YYYY [at] hh:mm A");
    $("#currentDay").text(currentTimeDate);
}
// Runs function displayTime every second.
setInterval(displayTime, 1000);

//Style the task blocks based on current time.
function styleRows() {
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

// Runs selected functions once page is loaded.
$(window).on("load", function() {
    styleRows();
    // displayTime();
})

$(".saveBtn").on("click", function() {
var taskToSave = $(this).siblings("textarea").val();
var blockTime = $(this).siblings("textarea").attr("hour");
localStorage.setItem(blockTime, taskToSave);
})

$("textarea").each(function(){
    var blockTime = $(this).attr("hour");
    $(this).val(localStorage.getItem(blockTime));
})


// create array of objects of textarea.innerText and hour attribute
// JSON stringify array
// Store string in localStorage

// Pull string from local storage
// JSON parse string into array
// display objects and textarea.innerText
