const newNoteButton = document.getElementById("New_note_button");
const noteTitle = document.getElementById("Note_title");
let currentNote = null;
const noteContent = document.getElementById("Note_content");
const notesList = document.querySelector(".Notes_list");
const saveButton = document.getElementById("Save_button");
const deleteButton = document.getElementById("Delete_button");

newNoteButton.addEventListener("click", function() {

  noteTitle.value = "";
  noteContent.value = "";

  const newNote = document.createElement("div");
  newNote.classList.add("Note_item");
  newNote.textContent = "Untitled Note";
  newNote.dataset.title = "Untitled Note";
  newNote.dataset.content = "";

  setupNote(newNote);
  notesList.appendChild(newNote);
  newNote.click();
});

function setupNote(note) {
  note.addEventListener("click", function() {
    currentNote = note;

    document.querySelectorAll(".Note_item").forEach(item => {
      item.classList.remove("Active_note");
    });

    note.classList.add("Active_note");

    noteTitle.value = note.dataset.title;
    noteContent.value = note.dataset.content;
  });
}

const noteItems = document.querySelectorAll(".Note_item");

noteItems.forEach(note => {
  setupNote(note);
});

saveButton.addEventListener("click", function() {
  if (currentNote === null) {
    return;
  }
  currentNote.dataset.title = noteTitle.value;
  currentNote.dataset.content = noteContent.value;
  currentNote.textContent = noteTitle.value;
});

deleteButton.addEventListener("click", function () {
  if (currentNote === null) {
    return;
  }
  currentNote.remove();

  const remainingNotes = document.querySelectorAll(".Note_item");

  if (remainingNotes.length > 0) {
    remainingNotes[0].click();
  } else {

  const newNote = document.createElement("div");
  newNote.classList.add("Note_item");
  newNote.textContent = "Untitled Note";
  newNote.dataset.title = "Untitled Note";
  newNote.dataset.content = "";

  setupNote(newNote);
  notesList.appendChild(newNote);

  newNote.click();
}
});

const firstNote = document.querySelector(".Note_item");
if (firstNote) {
  firstNote.click();
}