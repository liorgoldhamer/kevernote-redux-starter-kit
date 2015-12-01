export default {
  selectNote: (id) => ({type: 'NOTE_SELECTED', id: id}),
  editNote: (values, id) => ({type: 'EDIT_NOTE', id: id, values: values}),
  addNote: () => ({type: 'ADD_NOTE'})
};
