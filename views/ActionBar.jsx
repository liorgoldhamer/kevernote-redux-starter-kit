import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'
import { request } from '../store/helpers/async';

export default class ActionBar extends React.Component {
  addNewNote() {
    let id = this.props.notes ? this.props.notes[0].id + 1 : 1
    let newNote = {
              id: id,
              title: "New note",
               body: "Write your comment here",
               format: "txt",
               status: 'Saved',
               createdAt: new Date(Date.now()),
               updatedAt: new Date(Date.now())}
    request('POST', '/api/notes', newNote, {success: () => this.noteAddedSuccessfully(id), error: this.noteAddingError})
    return newNote
  }

  noteAddedSuccessfully(id) {
    this.props.actions.saveNote(id)
  }


  noteAddingError(response) {
    console.log('response',response)
    // return response
  }

  render() {
    return (
      <nav className="action-bar">
        <div className="action-bar__logo"></div>
        <button className="action-bar__new"
        onClick={ () => this.props.actions.addNote(this.addNewNote()) }>+</button>
      </nav>
    );
  }
}
