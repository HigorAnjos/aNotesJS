import NotesView from "./NotesView.js";

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._hendlers());
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