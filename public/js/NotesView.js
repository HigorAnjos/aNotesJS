export default class NotesView {
  constructor(root, { onNoteSelect, onNoteAdd, onNoteDelete } = {}) {
    this.root =  root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteDelete = onNoteDelete;
    this.root.innerHTML = `
        <div class="notes__sidebar">
          <button class="notes__add" type="button">Add Note</button>
          <div class="notes__list">
            <div class="notes__list-item"></div>
          </div>
        </div>
        <div class="notes__preview">
          <input class="notes__title" type="text" placeholder="New note...">
          <textarea class="notes__body">Take Note...</textarea>
        </div>
    `;

    const btnAddNote = this.root.querySelector(".notes__add");
    const inpTitle = this.root.querySelector(".notes__title");
    const inpBody = this.root.querySelector(".notes__body");

    btnAddNote.addEventListener("click", () => {
      this.onNoteAdd();
    })

  }
}