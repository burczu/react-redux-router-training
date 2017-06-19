import React from 'react';

const EventItem = (props) => {
  return (
    <li key={props.id}>
      <strong>{props.name}</strong><br />
      Gdzie: {props.place}<br />
      Kiedy: {props.date} - {props.time}<br />
      <button onClick={props.onDeleteClicked.bind(this, props.id)}>Usuń</button>
    </li>
  );
};

export default EventItem;
