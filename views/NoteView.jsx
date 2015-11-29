import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'

export default class NoteView extends React.Component {

  render() {
    return (
      <article className="note-view">
        <nav className="note-view__actions">
          <button className="note-view__actions__trash"></button>
          <span className="note-view__actions__status"></span>
        </nav>
        <input className="note-view__title" />
        <textarea className="note-view__body"></textarea>
      </article>
    );
  }
}
