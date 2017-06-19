import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';
import renderEvents from './Events';

ReactDOM.render(renderEvents(events), document.getElementById('root'));
