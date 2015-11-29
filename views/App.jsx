import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'
import ActionBar from './ActionBar'
import NoteList from './NoteList'
import NoteView from './NoteView'

class App extends React.Component {
  render() {
    let notes = this.props.notes
    let actions = this.props.actions
    let selected = this.props.selected

    return (
      <main className="app">
        <ActionBar />
        <NoteList notes={ notes } actions={ actions } selected={ selected } />
        <NoteView note={ selected || notes[0] } actions={ actions } />
      </main>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(App);
