import React from 'react';
import AppContainer from '../views/AppContainer';
import fs from 'fs';
import buildStore from '../store/buildStore';
import Note from './models/note';

const index = fs.readFileSync('index.html', {encoding: 'utf-8'});

export default function render() {
  const initialState = { 'notes' : Note.all() }
  console.log('Note', Note.all()[0]) // TODO debug

  let store = buildStore(initialState);
  let componentHtml = React.renderToString(<AppContainer store={store}/>);
  let html = index
    .replace('{{component}}', componentHtml)
    .replace(/(window\.initialState = )(initialState)/, "$1" + JSON.stringify(store.getState()));
  return html;
}
