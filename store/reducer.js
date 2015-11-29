export default function reducer(state, action) {
  switch (action.type) {
  case 'NOTE_SELECTED':
    let selected = state.notes.filter(note => note.id === action.id)[0]
    return {...state, selected: selected}

  default:
    return state
  }
}
