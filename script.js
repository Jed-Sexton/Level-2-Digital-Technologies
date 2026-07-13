const equipment = {

  Mathematics: [
      "Scientific Calculator",
      "Exercise Book",
      "Pencil",
      "Ruler"
  ],

  English: [
      "Exercise Book",
      "Blue Pen",
      "Novel"
  ],

  Biology: [
      "Exercise Book",
      "Calculator",
      "Pen"
  ],

  Physics: [
      "Scientific Calculator",
      "Exercise Book",
      "Ruler"
  ],

  Chemistry: [
      "Scientific Calculator",
      "Lab Book",
      "Pen"
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