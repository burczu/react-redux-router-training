import React from 'react';

const EventFilters = (props) => {
  return <input type="text" onChange={props.onFilterChange} placeholder="filtruj..." />
};

export default EventFilters;
