import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'
import NotePreview from './NotePreview'

export default class NoteList extends React.Component {

  render() {
    let selected = this.props.selected

    return (
      <aside className="note-list">
        <h2 className="note-list__title">Notes</h2>
        <div className="note-list__summary">
          <span>{ this.props.notes.length }</span>
          <span> </span>
          <span>{ this.props.notes.length === 1 ? 'note' : 'notes' }</span>
        </div>
        <ul className="note-list__container">
          {
            this.props.notes.map( note =>
              <NotePreview note={ note }
                           selectNote={ this.props.actions.selectNote }
                           isSelected={ selected ? selected.id === note.id : false } />
            )
          }
        </ul>
      </aside>
    );
  }
}
