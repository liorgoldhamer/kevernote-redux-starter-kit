import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'
import ActionBar from './ActionBar'
import NoteList from './NoteList'
import NoteView from './NoteView'

class App extends React.Component {
  render() {
    return (
      <main className="app">
        <ActionBar />
        <NoteList notes={ this.props.notes }
                  actions={ this.props.actions }
                  selected={ this.props.selected } />
                <NoteView selected={ this.props.selected } />
      </main>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(App);
