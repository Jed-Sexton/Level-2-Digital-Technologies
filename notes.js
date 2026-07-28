const newNoteButton = document.getElementById("New_note_button");
const noteTitle = document.getElementById("Note_title");
const noteContent = document.getElementById("Note_content");
const notesList = document.querySelector(".Notes_list");


newNoteButton.addEventListener("click", function() {

  noteTitle.value = "";
  noteContent.value = "";

  const newNote = document.createElement("div");
  newNote.classList.add("Note_item");
  newNote.textContent = "New Note";

  notesList.appendChild(newNote);

});