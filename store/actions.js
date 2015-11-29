export default {
  selectNote: (id) => ({type: 'NOTE_SELECTED', id: id}),
  changeNoteBody: (id, event) => ({
    id: id,
    newBody: event.target.value,
    type: 'NOTE_BODY_CHANGED'
  }),
  changeNoteTitle: () => ({type: 'NOTE_TITLE_CHANGED'}),
};
