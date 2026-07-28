const newNoteButton = document.getElementById("New_note_button");
const noteTitle = document.getElementById("Note_title");
const noteContent = document.getElementById("Note_content");
const notesList = document.querySelector(".Notes_list");


newNoteButton.addEventListener("click", function() {

  noteTitle.value = "";
  noteContent.value = "";

  const newNote = document.createElement("div");
  newNote.classList.add("Note_item");
  newNote.textContent = "Untitled Note";
  newNote.dataset.title = "Untitled Note";
  newNote.dataset.content = "";

  notesList.appendChild(newNote);

});

const noteItems = document.querySelectorAll(".Note_item");

noteItems.forEach(note => {

  note.addEventListener("click", function() {

    noteTitle.value = note.dataset.title;
    noteContent.value = note.dataset.content;

  });

});