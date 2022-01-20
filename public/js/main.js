import NotesAPI from "./NotesAPI.js"

NotesAPI.saveNotes({
  title: "new Note!",
  body: "I am a new note.",
});

console.log(NotesAPI.getAllNotes());