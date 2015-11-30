import { request, asyncAction } from './helpers/async';

let addNewNote = asyncAction((dispatch) => {
  dispatch({type: 'NEW_NOTE_ADDED'});
  // request('post', '/inc');
})

let changeNoteBody = asyncAction((dispatch, state, actionParams) => {
  dispatch({
    id: actionParams.id,
    newBody: actionParams.event.target.value,
    type: 'NOTE_BODY_CHANGED'
  })
  // request('post', '/inc');
})

let changeNoteTitle = asyncAction((dispatch, state, actionParams) => {
  dispatch({
    id: actionParams.id,
    newTitle: actionParams.event.target.value,
    type: 'NOTE_TITLE_CHANGED'
  })
  // request('post', '/dec');
})

let selectNote = asyncAction((dispatch, state, id) => {
  dispatch({type: 'NOTE_SELECTED', id: id})
  // request('post', '/dec');
})

export default {
  addNewNote: addNewNote,
  changeNoteBody: changeNoteBody,
  changeNoteTitle: changeNoteTitle,
  selectNote: selectNote
}
