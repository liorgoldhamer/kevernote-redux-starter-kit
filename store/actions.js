export default {
  addNewNote: () => ({type: 'NEW_NOTE_ADDED'}),
  selectNote: (id) => ({type: 'NOTE_SELECTED', id: id}),
  changeNoteBody: (id, event) => ({
    id: id,
    newBody: event.target.value,
    type: 'NOTE_BODY_CHANGED'
  }),
  changeNoteTitle: (id, event) => ({
    id: id,
    newTitle: event.target.value,
    type: 'NOTE_TITLE_CHANGED'
  })
}
