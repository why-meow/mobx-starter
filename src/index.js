import React from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobx';

import App from './App';

const counter = observable({
  value: 1,
  inc() {
    ++this.value;
  },
  dec() {
    --this.value;
  }
});

ReactDOM.render(<App counter={counter}/>, document.getElementById('root'));
