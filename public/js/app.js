import NotesView from "./NotesView.js";
import NotesAPI from "./NotesAPI.js";

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._hendlers());

    this._refreshNotes();
  }

  _refreshNotes ()  {
    const notes = NotesAPI.getAllNotes();

    this._setNotes(notes);

    if (notes.length > 0) {
      this._setActiveNote(notes[0]);
    }

  }

  _setNotes(notes) {
    this.notes = notes;
    this.view.updateNoteList(notes)
    this.view.updateNotePreviewVisibility(notes.length > 0);
  }

  _setActiveNote(note) {
    this.activeNote = note;
    this.view.updateActiveNote(note);
  }

  _hendlers() {
    return {
      onNoteSelect: noteId => {
        console.log("Nota selecionada:", noteId)
      },
      onNoteAdd: () => {
        console.log("Nota ADD")
      },
      onNoteEdit: (title, body) => {
        console.log(title, body)
      },
      onNoteDelete: noteId => {
        console.log("Nota DeLETE:", noteId)
      }
    };
  }


}