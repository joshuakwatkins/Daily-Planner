// these two variables and setInterval display the current time and updates every 10th of a second
var timeDisplayEl = $("#currentDay");

var displayTime = function () {
  var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  timeDisplayEl.text(currentTime);
};
setInterval(displayTime, 100);

var pappy = $(".container");
var timeSlots = [];
var theTime = [
  "8AM",
  "9AM",
  "10AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
];

// This for loop builds 12 time slot blocks with the appropriate styling.
for (var i = 0; i < 12; i++) {
  var timeSlotDiv = $("<div>").attr({
    id: "time-slot-" + (i + 1),
    class: "row col-12",
  });
  var timeSlotHourDiv = $("<div>").attr({
    class: "hour col-1",
  });
  var hourPTag = $("<p>").text(theTime[i]);
  var currentState;
  //   this if statement determines
  if (moment(theTime[i], "hA").isSame()) {
    currentState = "present";
  } else if (moment(theTime[i], "hA").isBefore()) {
    currentState = "past";
  } else {
    currentState = "future";
  }
  var timeSlotTextDiv = $("<div>").attr({
    class: "time-block col-10 " + currentState,
  });
  var userInput = $("<textarea>").attr({
    class: "col-12",
  });
  var saveButton = $("<button>").attr({
    class: "saveBtn col-1",
    id: "saveBtn-" + (i + 1),
  });
  var saveIcon = $("<i>").attr({
    class: "fa fa-save",
  });
  //   this is the actual building of the elements.
  timeSlotDiv.append(timeSlotHourDiv);
  timeSlotHourDiv.append(hourPTag);
  timeSlotDiv.append(timeSlotTextDiv);
  timeSlotTextDiv.append(userInput);
  timeSlotDiv.append(saveButton);
  saveButton.append(saveIcon);
  pappy.append(timeSlotDiv);
  //   this is the save function
  saveButton.on("click", function () {
    var userEntry = $(this).prev().children("textarea").val();
    var entryName = $(this).parent().attr("id");
    localStorage.setItem(entryName, userEntry);
    console.log(userEntry);
    console.log(entryName);
    console.log($(this));
  });
  console.log(timeSlotDiv);
  //   this recalls the user's saved inputs
  this.userInput.val(localStorage.getItem("time-slot-" + (i + 1)));
}
