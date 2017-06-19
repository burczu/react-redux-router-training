import React from 'react';

const EventFilters = (props) => {
  return <input type="text" onChange={props.onFilterChange} />
};

export default EventFilters;
