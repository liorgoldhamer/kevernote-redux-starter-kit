import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'

export default class NoteView extends React.Component {

  render() {
    let note = this.props.note
    let actions = this.props.actions

    return (
      <article className="note-view">
        <nav className="note-view__actions">
          <button className="note-view__actions__trash"></button>
          <span className="note-view__actions__status"></span>
        </nav>
        <input className="note-view__title" value={ note.title } onChange={ (e) => actions.changeNoteTitle(note.id, e) } />
        <textarea className="note-view__body" value={ note.body } onChange={ (e) => actions.changeNoteBody(note.id, e) }></textarea>
      </article>
    );
  }
}
