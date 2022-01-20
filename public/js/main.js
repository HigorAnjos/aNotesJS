import NotesView from "./NotesView.js"
import NotesAPI from "./NotesAPI.js"

const app = document.getElementById("app");
const view = new NotesView(app, {
  onNoteAdd() {
    console.log(" Funcao para o addNote")
  },
  onNoteSelect(id) {
    console.log("Note Selected: ", + id)
  },
  onNoteEdit(newTitle, newBody) {
    console.log(newTitle)
    console.log(newBody)
  },
  onNoteDelete (id) {
    console.log("Note DELETED" + id);
  }
});

const notes = NotesAPI.getAllNotes();

view.updateNoteList(notes);
view.updateActiveNote(notes[0]);
