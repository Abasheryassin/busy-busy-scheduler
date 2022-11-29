// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements in the html.
var dateDisplayEl = $('#currentDay');
var saveBtn = $('.saveBtn');

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // function getData() {
  //   var dataRetrival = JSON.parse(localStorage.getItem("notedata"));
    
  //   console.log(dataRetrival);
  // }
  // getData();


  saveBtn.on('click', function(event) {
    var event = $(event.target);
    var note = event.prev().val();
    var time = event.parent().attr('id');

    var data = {"hour": time, "noteText": note}
    console.log(data);
    localStorage.setItem("notedata", JSON.stringify(data));
  });


  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour.
  function timeBlocks() {
    var hour = dayjs().format('H');
    for (i = 9; i <= 17; i++) {
      if (i < hour) {
        var addClass = $('#hour-' + i).addClass("past");
      } else if (i == hour) {
        var addClass = $('#hour-' + i).addClass("present");
      } else if (i > hour) {
        var addClass = $('#hour-' + i).addClass("future");
      }
    }
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
    var date = dayjs().format('MMM DD, YYYY');
    dateDisplayEl.text(date);
  }
  timeBlocks();
  displayTime();

});
