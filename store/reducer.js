export default function reducer(state, action) {
  switch (action.type) {
  case 'NOTE_SELECTED':
    let selected = state.notes.filter(note => note.id === action.id)[0]
    return {...state, selected: selected}
  case 'NOTE_BODY_CHANGED':
    let index = state.notes.reduce((prevIndex, note, i) => {
      if (prevIndex !== -1) return prevIndex
      return note.id === action.id ? i : -1
    }, -1)
    let newState = {...state}
    newState.notes[index].body = action.newBody
    return newState
  default:
    return state
  }
}
