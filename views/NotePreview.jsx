import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'
import _ from './lib/date_extensions'

export default class NotePreview extends React.Component {

  render() {

    let note = this.props.note

    let previewClass = 'note-preview'
    previewClass += this.props.isSelected ? ' is-selected' : ''

    return (
      <li className={ previewClass } onClick={ () => this.props.selectNote(note.id) }>
        <a href={ "#notes/" + note.id } className="note-preview__link">
          <span className="note-preview__time">{ (new Date(note.created_at)).toRelativeTime() }</span>
          <h2 className="note-preview__title">{ note.title }</h2>
          <p className="note-preview__body">
            { note.body.length > 100 ? note.body.substr(0,97) + '...' : note.body }
          </p>
        </a>
      </li>
    );
  }
}
