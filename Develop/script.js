//Makes sure that the current day is displayed on on the planner using dayjs, will automatically 
//switch with this function.
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));

// Need the document to be ready before running the functions for 
// the "Past, Present, Future" functions for formatting the time blocks
$(document).ready(function () {
//this will be the time blocks function
  function timeBlock() {
    var CurrentHour = dayjs().hour();
    console.log(CurrentHour);

    // The loop to go through each block.
    $(".time-block").each(function () {
      var block = parseInt($(this).attr("id").split("hour")[1]);
      console.log(block);
      // Conditionals that will check time and add classes based off the 
      // var block to get the info needed for the conditional
      if (block < CurrentHour) {
        // This one will add the class "past" to any hours that have happened
        // for the day.
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (block === CurrentHour) {
        // This will make the current hour a red time block to indicate
        // current hour on tthe timetable
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      }
      else {
        // If no other conditionals are met they should be considered 
        // future hours, they should be shown as green on the timetable
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  // This will grab the info needed to compare current time to 
  // time blocks listed. Dont use "-" between the hour and number
  // will throw a negative number and cause issues with the conditionals.
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  // calls on the function to set the formats
  timeBlock();
});
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
