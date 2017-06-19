import React from 'react';
import events from './data/events';
import EventItem from './EventItem';

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

  onDeleteClicked(id, event) {
    event.preventDefault();

    const filteredArray = this.state.events.filter(item => item.id !== id);

    this.setState({
      events: filteredArray
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.events.map(item => {
            const date = new Date(item.date);

            if (date >= Date.now()) {
              return (
                <EventItem {...item} onDeleteClicked={this.onDeleteClicked.bind(this)} />
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
