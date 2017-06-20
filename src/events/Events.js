import React from 'react';
import PropTypes from 'prop-types';
import EventItem from './EventItem';
import EventFilters from './EventFilters';
import EventAdd from './EventAdd';
import { connect } from 'react-redux';

class Events extends React.Component {
  static propTypes = {
    events: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      newName: '',
      newNameValid: false,
      newWhere: '',
      newWhereValid: false,
      newDate: '',
      newDateValid: false,
      newHour: '',
      newHourValid: false
    };
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

  onFilterChange(event) {
    const value = event.currentTarget.value;

    this.setState({
      filter: value
    });
  };

  onNameChanged(name, valid) {
    this.setState({
      newName: name,
      newNameValid: valid
    });
  }

  onWhereChanged(where, valid) {
    this.setState({
      newWhere: where,
      newWhereValid: valid
    });
  }

  onDateChanged(date, valid) {
    this.setState({
      newDate: date,
      newDateValid: valid
    });
  }

  onHourChanged(hour, valid) {
    this.setState({
      newHour: hour,
      newHourValid: valid
    });
  }

  onEventAddSubmit(event) {
    event.preventDefault();

    const { newNameValid, newWhereValid, newHourValid, newDateValid } = this.state;
    const events = this.state.events;
    const maxId = Math.max(...events.map(item => item.id));

    if (newNameValid && newWhereValid && newHourValid && newDateValid) {
      events.push({
        id: maxId + 1,
        name: this.state.newName,
        place: this.state.newWhere,
        date: this.state.newDate,
        time: this.state.newHour
      });

      this.setState({
        events,
        newName: '',
        newNameValid: false,
        newWhere: '',
        newWhereValid: false,
        newDate: '',
        newDateValid: false,
        newHour: '',
        newHourValid: false
      });
    }
  }

  render() {
    return (
      <div>
        <EventFilters onFilterChange={this.onFilterChange.bind(this)} />
        <ul>
          {this.props.events.map(item => {
            const date = new Date(item.date);

            if (date >= Date.now() && item.name.indexOf(this.state.filter) > -1) {
              return (
                <EventItem {...item} key={item.id} onDeleteClicked={this.onDeleteClicked.bind(this)} />
              );
            }

            return null;
          })}
        </ul>
        <button onClick={this.onClearClicked.bind(this)}>Wyczyść</button>
        <EventAdd name={this.state.newName}
                  where={this.state.newWhere}
                  date={this.state.newDate}
                  hour={this.state.newHour}
                  onNameChanged={this.onNameChanged.bind(this)}
                  onWhereChanged={this.onWhereChanged.bind(this)}
                  onDateChanged={this.onDateChanged.bind(this)}
                  onHourChanged={this.onHourChanged.bind(this)}
                  onSubmit={this.onEventAddSubmit.bind(this)}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { ...state };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
