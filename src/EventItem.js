import React from 'react';
import PropTypes from 'prop-types';

const EventItem = (props) => {
  return (
    <li>
      <strong>{props.name}</strong><br />
      Gdzie: {props.place}<br />
      Kiedy: {props.date} - {props.time}<br />
      <button onClick={props.onDeleteClicked.bind(this, props.id)}>Usuń</button>
    </li>
  );
};

EventItem.propTypes = {
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onDeleteClicked: PropTypes.func.isRequired
};

export default EventItem;
