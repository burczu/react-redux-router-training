import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';

const EventAdd = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <legend>Dodaj wydarzenie</legend>
      <TextInput placeholder="Nazwa wydarzenia" onInputChanged={props.onNameChanged} value={props.name} />
      <TextInput placeholder="Gdzie" onInputChanged={props.onWhereChanged} value={props.where} />
      <TextInput placeholder="Data" onInputChanged={props.onDateChanged} value={props.date} />
      <TextInput placeholder="Godzina" onInputChanged={props.onHourChanged} value={props.hour} />
      <button type="submit">Zapisz</button>
    </form>
  );
};

EventAdd.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChanged: PropTypes.func.isRequired,
  where: PropTypes.string.isRequired,
  onWhereChanged: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  onDateChanged: PropTypes.func.isRequired,
  hour: PropTypes.string.isRequired,
  onHourChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default EventAdd;
