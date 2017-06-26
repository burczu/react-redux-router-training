import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Events from './events/Events';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Events} />
        </div>
      </Router>
    );
  }
}

export default App;
