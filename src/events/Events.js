import React from 'react';
import PropTypes from 'prop-types';
import EventItem from './EventItem';
import EventFilters from './EventFilters';
import EventAdd from './EventAdd';
import { connect } from 'react-redux';
import * as eventActions from '../actions/events';

class Events extends React.Component {
  static propTypes = {
    events: PropTypes.array.isRequired
  }

  onClearClicked(event) {
    event.preventDefault();

    this.props.clearEvents();
  }

  onDeleteClicked(id, event) {
    event.preventDefault();

    this.props.deleteEvent(id);
  }

  onFilterChange(event) {
    const value = event.currentTarget.value;

    this.props.filterEvents(value);
  };

  onNameChanged(name, valid) {
    this.props.nameChanged(name, valid);
  }

  onWhereChanged(where, valid) {
    this.props.whereChanged(where, valid);
  }

  onDateChanged(date, valid) {
    this.props.dateChanged(date, valid);
  }

  onHourChanged(hour, valid) {
    this.props.hourChanged(hour, valid);
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

            if (date >= Date.now() && item.name.indexOf(this.props.filter) > -1) {
              return (
                <EventItem {...item} key={item.id} onDeleteClicked={this.onDeleteClicked.bind(this)} />
              );
            }

            return null;
          })}
        </ul>
        <button onClick={this.onClearClicked.bind(this)}>Wyczyść</button>
        <EventAdd name={this.props.newName}
                  where={this.props.newWhere}
                  date={this.props.newDate}
                  hour={this.props.newHour}
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
  return {
    clearEvents: () => dispatch(eventActions.clearEvents()),
    deleteEvent: (id) => dispatch(eventActions.deleteEvent(id)),
    filterEvents: (filter) => dispatch(eventActions.filterEvents(filter)),
    nameChanged: (name, valid) => dispatch(eventActions.nameChanged(name, valid)),
    whereChanged: (where, valid) => dispatch(eventActions.whereChanged(where, valid)),
    dateChanged: (date, valid) => dispatch(eventActions.dateChanged(date, valid)),
    hourChanged: (hour, valid) => dispatch(eventActions.hourChanged(hour, valid))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
