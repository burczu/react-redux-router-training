import React from 'react';
import PropTypes from 'prop-types';
import EventItem from './EventItem';
import EventFilters from './EventFilters';
import EventAdd from './EventAdd';
import { connect } from 'react-redux';
import * as eventActions from '../actions/events';
import Loader from '../common/Loader';

class Events extends React.Component {
  static propTypes = {
    eventsReducer: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.getEvents();
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

    const {
      newName,
      newNameValid,
      newWhere,
      newWhereValid,
      newDate,
      newDateValid,
      newHour,
      newHourValid
    } = this.props.eventsReducer;

    if (newNameValid && newWhereValid && newHourValid && newDateValid) {
      this.props.addEvent(newName, newWhere, newDate, newHour);
    }
  }

  render() {
    return (
      <div>
        <EventFilters onFilterChange={this.onFilterChange.bind(this)} />
        <Loader isLoading={this.props.eventsReducer.isLoading}>
          <ul>
            {this.props.eventsReducer.events.map(item => {
              const date = new Date(item.date);

              if (date >= Date.now() && item.name.indexOf(this.props.eventsReducer.filter) > -1) {
                return (
                  <EventItem {...item} key={item.id} onDeleteClicked={this.onDeleteClicked.bind(this)} />
                );
              }

              return null;
            })}
          </ul>
        </Loader>
        <button onClick={this.onClearClicked.bind(this)}>Wyczyść</button>
        <EventAdd name={this.props.eventsReducer.newName}
                  where={this.props.eventsReducer.newWhere}
                  date={this.props.eventsReducer.newDate}
                  hour={this.props.eventsReducer.newHour}
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
    getEvents: () => dispatch(eventActions.getEvents()),
    clearEvents: () => dispatch(eventActions.clearEvents()),
    deleteEvent: (id) => dispatch(eventActions.deleteEvent(id)),
    filterEvents: (filter) => dispatch(eventActions.filterEvents(filter)),
    nameChanged: (name, valid) => dispatch(eventActions.nameChanged(name, valid)),
    whereChanged: (where, valid) => dispatch(eventActions.whereChanged(where, valid)),
    dateChanged: (date, valid) => dispatch(eventActions.dateChanged(date, valid)),
    hourChanged: (hour, valid) => dispatch(eventActions.hourChanged(hour, valid)),
    addEvent: (name, where, date, hour) => dispatch(eventActions.addEvent(name, where, date, hour))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
