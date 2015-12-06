import { request } from '../store/helpers/async';

export default function reducer(state, action) {
  switch (action.type) {
  case 'NOTE_SELECTED':
    let selected = state.notes.filter(note => note.id === action.id)[0]
    return {...state, selected: selected}
  case 'EDIT_NOTE':
    let edited = state.notes.filter(note => note.id === action.id)[0]
    edited.body = action.values.body
    edited.title = action.values.title
    selected = {...edited}
    return {...state, selected: selected}
  case 'ADD_NOTE':
    action.note.status = 'Saving...'
    state.notes.unshift(action.note)
    return {...state, selected: action.note}
  case 'NOTE_SAVED':
    let note = state.notes.filter(note => note.id === action.id)[0]
    note.status = 'Saved'
    return {...state}
  default:
    return state
  }
}
