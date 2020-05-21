import React, { FunctionComponent } from 'react';

import { TextEditor } from '../TextEditor';

import './App.scss';

export const App: FunctionComponent<{}> = () => {
  return (
    <div className="App">
      <TextEditor />
    </div>
  );
}
