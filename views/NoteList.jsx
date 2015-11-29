import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'
import NotePreview from './NotePreview'

class NoteList extends React.Component {

  render() {
    console.log('NoteList', this)

    return (
      <aside className="note-list">
        <h2 className="note-list__title">Notes</h2>
        <div className="note-list__summary">
          <span>9</span>
          <span> </span>
          <span>notes</span>
        </div>
        <ul className="note-list__container">
          { this.props.data.notes.map( note => <NotePreview note={ note } />) }
        </ul>
      </aside>
    );
  }
}

export default connect(
  state => ({data: state}),
  dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(NoteList);
