import NotesAPI from "./NotesAPI.js"
// aqui sera o view

NotesAPI.saveNotes({
  id: 247532,
  title: "new Note! + ",
  body: "I am a new note.",
});

console.log(NotesAPI.getAllNotes());


