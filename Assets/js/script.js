// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements in the html.
var dateDisplayEl = $('#currentDay');
var saveBtn = $('.saveBtn');
var data = {};

$(function () {
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  function getData() {
    var data = localStorage.getItem("notedata");
    if (data){
      data = JSON.parse(data);
    } else {
      data = {};
    }
    return data;
  }
  
  function displayData() {
    data = getData();
    for (i = 9; i < 17; i++) {
      $("#hour-" + i).children().eq(1).text(data['hour-' + i]);
    }
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  
  saveBtn.on('click', function(event) {
    var event = $(event.target);
    var time = event.closest('div').attr('id');
    var note = $('#' + time).children().eq(1).val();
    console.log(time);
    console.log(note);
    
    data[time] = note;
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
  
  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
    var date = dayjs().format('MMM DD, YYYY');
    dateDisplayEl.text(date);
  }

  displayData();
  timeBlocks();
  displayTime();
});
