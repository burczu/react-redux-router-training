import React from 'react';
import events from './data/events.json';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    this.setState({
      events
    });
  }

  render() {
    return (
      <ul>
        {this.state.events.map(item => {
          const date = new Date(item.date);

          if (date >= Date.now()) {
            return (
              <li key={item.id}>
                <strong>{item.name}</strong><br />
                Gdzie: {item.place}<br />
                Kiedy: {item.date} - {item.time}
              </li>
            );
          }

          return null;
        })}
      </ul>
    );
  }
};

export default Events;
