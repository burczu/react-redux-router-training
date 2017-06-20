import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import Events from './events/Events';
import Details from './details/Details';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <aside>
            <ul>
              <li>
                <NavLink to="/" exact activeStyle={{ fontWeight: 'bold' }}>Strona domowa</NavLink>
              </li>
            </ul>
          </aside>

          <Route exact path="/" component={Events} />
          <Route path="/details/:id" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;
