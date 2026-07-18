const equipment = {

  Mathematics: [
    "Graphic calculator",
    "Exercise book",
    "HB pencil",
    "Blue/black pen",
    "Eraser",
    "Pencil sharpener",
    "Ruler"
  ],

  English: [
    "Laptop",
    "Exercise book",
    "Blue/black pen",
    "Novel",
    "Highlighter",
  ],

  Biology: [
    "Laptop",
    "Exercise book",
    "Biology sciPAD",
    "Calculator",
    "Blue/black pen",
    "Highlighter"
  ],

  Chemistry: [
    "Laptop",
    "Exercise book",
    "Chemistry sciPAD",
    "Calculator",
    "Blue/black pen",
    "Lab coat/safety glasses"
  ],

  Physics: [
    "Laptop",
    "Exercise book",
    "Physics sciPAD",
    "Calculator",
    "Blue/black pen"
  ],

  "Digital Technologies": [
    "Laptop",
    "Laptop charger",
    "Mouse (optional)",
    "Headphones",
    "USB drive (optional)",
    "Exercise book",
    "Blue/black pen"
  ],

  "Design & Visual Communication": [
    "Laptop",
    "Sketchbook",
    "2H pencil",
    "HB pencil",
    "Eraser",
    "Sharpener",
    "300 mm ruler",
    "Set squares",
    "Compass",
    "Protractor",
    "Fine liner"
  ],

  "Physical Education": [
      "PE uniform",
      "Sports shoes",
      "Water bottle",
      "Towel",
      "Change of clothes"
  ],

  Health: [
      "Exercise book",
      "Blue/black pen",
      "Highlighter",
      "Laptop"
  ],

  Music: [
      "Instrument (if required)",
      "Music folder",
      "Manuscript book",
      "HB pencil",
      "Eraser"
  ],

  Geography: [
      "Laptop",
      "Exercise book",
      "Geography workbook",
      "Calculator",
      "Blue/black pen",
      "Coloured pencils",
      "Ruler"
  ],

  History: [
      "Laptop",
      "Exercise book",
      "Blue/black pen",
      "Highlighter",
      "Folder"
  ],

  Business: [
      "Laptop",
      "Exercise book",
      "Calculator",
      "Blue/black pen",
      "Highlighter"
  ],

  Spanish: [
      "Laptop",
      "Exercise book",
      "Workbook",
      "Blue/black pen",
      "Spanish dictionary (optional)"
  ],

  Design: [
      "Laptop",
      "Sketchbook",
      "HB pencil",
      "Eraser",
      "Sharpener",
      "Fine liner",
      "Markers"
  ],

  Painting: [
      "Visual diary",
      "HB pencil",
      "Eraser",
      "Paint brushes",
      "Paint palette",
      "Paints",
      "Apron"
  ],

  Photography: [
      "Laptop",
      "Camera",
      "Camera battery",
      "SD card",
      "Camera charger",
      "Exercise book"
  ],

  "Religious Education": [
      "Laptop",
      "Exercise book",
      "Blue/black pen",
      "Highlighter"
  ]

};

function openPopup(subject){

  document.getElementById("subjectTitle").textContent = subject;

  const list = document.getElementById("equipmentList");

  list.innerHTML = "";

  equipment[subject].forEach(function(item){

      const li = document.createElement("li");

      li.textContent = item;

      list.appendChild(li);

  });

  document.getElementById("popup").style.display = "flex";

}

function closePopup(){

  document.getElementById("popup").style.display = "none";

}


const durationButton = document.getElementById("durationButton");
const durationDropdown = document.getElementById("durationDropdown");
const timerDisplay = document.getElementById("timerDisplay");
const playPauseButton = document.getElementById("playPauseButton");
const playPauseImage = document.getElementById("playPauseImage");
let selectedDuration = 25 * 60;
let remainingTime = selectedDuration;
let timerRunning = false;
let timerInterval;

durationButton.addEventListener("click", function() {
  if (durationDropdown.style.display === "flex") {
    durationDropdown.style.display = "none";
  } else {
    durationDropdown.style.display = "flex";
  }
});

const durationOptions = document.querySelectorAll(".Duration_option");

durationOptions.forEach(function(option) {

  option.addEventListener("click", function() {

    let minutes = option.dataset.minutes;
    selectedDuration = minutes * 60;
    remainingTime = selectedDuration;

    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;

    if (hours > 0) {
      timerDisplay.textContent = hours + ":" + String(remainingMinutes).padStart(2, "0") + ":00";
    } else {
      timerDisplay.textContent = minutes + ":00";
    }

    durationDropdown.style.display = "none";

  });

});

timerDisplay.textContent = "25:00";

function updateTimer() {

  if (remainingTime > 0) {

    remainingTime--;

    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;

    timerDisplay.textContent =
      minutes + ":" + String(seconds).padStart(2, "0");

  }

}

playPauseButton.addEventListener("click", function() {

  if (timerRunning === false) {

    timerRunning = true;

    playPauseImage.src = "Website_Images/2DIGT_Timer_Playing.png";

    timerInterval = setInterval(updateTimer, 1000);

  } else {

    timerRunning = false;

    playPauseImage.src = "Website_Images/2DIGT_Timer_Paused.png";

    clearInterval(timerInterval);

  }

});