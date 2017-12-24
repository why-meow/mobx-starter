import React from 'react';
import { observer } from 'mobx-react';

import theme from './App.css';

@observer
class App extends React.Component {
  render() {
    const { counter } = this.props;
    return (
      <div className={theme.root}>
        <h1 className={theme.header}>
          Hello World!
        </h1>
        <div>{counter.value}</div>
        <button onClick={counter.inc.bind(counter)}>+</button>
        <button onClick={counter.dec.bind(counter)}>-</button>
      </div>
    );
  }
}

export default App;
