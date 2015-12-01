import { request } from '../store/helpers/async';

function noteAddedSuccessfully(response) {
  console.log('response',response)
  // return response
}

function noteAddingError(response) {
  console.log('response',response)
  // return response
}

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
    let id = state.notes ? state.notes[0].id + 1 : 1
    let newNote = {
              id: id,
              title: "New note",
               body: "Write your comment here",
               format: "txt",
               status: 'Saving...',
               createdAt: new Date(Date.now()),
               updatedAt: new Date(Date.now())}
    state.notes.unshift(newNote)

    request('POST', '/api/notes', newNote, {noteAddedSuccessfully, noteAddingError})
    return {...state, selected: newNote}
  default:
    return state
  }
}
