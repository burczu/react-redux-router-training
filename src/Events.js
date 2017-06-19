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

  onClearClicked(event) {
    event.preventDefault();

    this.setState({ events: [] });
  }

  render() {
    return (
      <div>
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
        <button onClick={this.onClearClicked.bind(this)}>Wyczyść</button>
      </div>
    );
  }
};

export default Events;
