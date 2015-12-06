import { request } from '../store/helpers/async';

export default {
  selectNote: (id) => ({type: 'NOTE_SELECTED', id: id}),
  editNote: (values, id) => ({type: 'EDIT_NOTE', id: id, values: values}),
  addNote: (note) => ({type: 'ADD_NOTE', note: note}),
  saveNote: (id) => ({type: 'NOTE_SAVED', id: id})
};
