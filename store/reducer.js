export default function reducer(state, action) {
  switch (action.type) {
    case 'NOTE_SELECTED': {
      let selected = state.notes.filter(note => note.id === action.id)[0]
      return {...state, selected: selected}
    }
    case 'NOTE_BODY_CHANGED': {
      let newNotes = Array.from(state.notes, (note) => {
        return (note.id !== action.id)
          ? note
          : {...note, body: action.newBody}
      })

      return { ...state, notes: newNotes}
    }
    case 'NOTE_TITLE_CHANGED': {
      let newNotes = Array.from(state.notes, (note) => {
        return (note.id !== action.id)
          ? note
          : {...note, title: action.newTitle}
      })

      return { ...state, notes: newNotes}
    }
    default:
      return state
  }
}
