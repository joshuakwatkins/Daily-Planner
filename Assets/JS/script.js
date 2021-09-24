// for each row.children(button).on("click", function {write the input to the description div + clear the input + localStoage})
var timeDisplayEl = $("#currentDay");
var timeSlot1 = $("#time-slot-1");
var timeSlot2 = $("#time-slot-2");
var timeSlot3 = $("#time-slot-3");
var timeSlot4 = $("#time-slot-4");
var timeSlot5 = $("#time-slot-5");
var timeSlot6 = $("#time-slot-6");
var timeSlot7 = $("#time-slot-7");
var timeSlot8 = $("#time-slot-8");
var timeSlot9 = $("#time-slot-9");
var timeSlot10 = $("#time-slot-10");
var timeSlot11 = $("#time-slot-11");
var timeSlot12 = $("#time-slot-12");

var timeSlots = [
  timeSlot1,
  timeSlot2,
  timeSlot3,
  timeSlot4,
  timeSlot5,
  timeSlot6,
  timeSlot7,
  timeSlot8,
  timeSlot9,
  timeSlot10,
  timeSlot11,
  timeSlot12,
];

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
for (var i = 0; i < 12; i++) {
  // var timeSlot = $("#time-slot-" + i+1);
  var timeSlotDiv = $("<div>").attr({
    id: "time-slot-" + (i + 1),
    class: "row col-12",
  });
  var timeSlotHourDiv = $("<div>").attr({
    class: "hour col-1",
  });
  var hourPTag = $("<p>").text(theTime[i]);
  var currentState;
  if (moment(theTime[i], "hA").isSame()){
      currentState = "present";
  } else if (moment(theTime[i], "hA").isBefore()){
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
    id: "saveBtn-" + (i+1),
  });
  var saveIcon = $("<i>").attr({
    class: "fa fa-save",
  });
  timeSlotDiv.append(timeSlotHourDiv);
  timeSlotHourDiv.append(hourPTag);
  timeSlotDiv.append(timeSlotTextDiv);
  timeSlotTextDiv.append(userInput);
  timeSlotDiv.append(saveButton);
  saveButton.append(saveIcon);
  pappy.append(timeSlotDiv);
  saveButton.on("click", function() {
      var userEntry = $(this).prev().children("textarea").val();
      var entryName = $(this).parent().attr("id");
      localStorage.setItem(entryName ,userEntry);
      console.log(userEntry);
      console.log(entryName);
      console.log($(this));
  });
  console.log(timeSlotDiv);
}

// for (i=0; i < timeSlots.length; i++) {
//     console.log("the start of my for loop");
//     var theSaveButton = $("#time-slot-"+(i+1));
//     theSaveButton.on("click", ".saveBtn", function() {
//         console.log("clicked the button for " + [i] + "th position in the array");
//         localStorage.setItem(this.id, this.children("<textarea>").value)
//     }).val(function() {
//         var userInput = localStorage.getItem(this.id);
//         theSaveButton.children("<textarea>").text(userInput);
//     } )
// }

var displayTime = function () {
  var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  timeDisplayEl.text(currentTime);
};

setInterval(displayTime, 100);
