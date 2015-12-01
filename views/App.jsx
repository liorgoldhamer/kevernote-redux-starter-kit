import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'
import ActionBar from './ActionBar'
import NoteList from './NoteList'
import NoteView from './NoteView'

class App extends React.Component {
  selectedNote() {
    if (this.props.selected === undefined)
    {
      return (this.props.notes ? this.props.notes[0] : undefined)
    }
    return this.props.selected
  }

  render() {
    return (
      <main className="app">
        <ActionBar actions= { this.props.actions }/>
        <NoteList notes={ this.props.notes }
                  actions={ this.props.actions }
                  selected={ this.selectedNote() } />
                <NoteView selected={ this.selectedNote() }
                          actions= { this.props.actions } />
      </main>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(App);
