import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'

export default class NoteView extends React.Component {

  render() {
    let note = this.props.selected
    return (
      <article className="note-view">
        <nav className="note-view__actions">
          <button className="note-view__actions__trash"></button>
          <span className="note-view__actions__status">{note.status}</span>
        </nav>
        <input className="note-view__title" value={note.title}
          onChange={ (e) => this.props.actions.editNote({title: e.target.value, body: note.body}, note.id)} />
        <textarea className="note-view__body" value={note.body}
          onChange={ (e) => this.props.actions.editNote({title: note.title, body: e.target.value}, note.id)}></textarea>
      </article>
    );
  }
}
