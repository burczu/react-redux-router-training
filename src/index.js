import React from 'react';
import ReactDOM from 'react-dom';

import Events from './Events';

const events = [
  {
    id: 1,
    name: 'meetJS Wrocław',
    place: 'Monterail',
    date: '2017-05-12',
    time: '18:00'
  },
  {
    id: 2,
    name: 'DevOps Wrocław',
    place: 'Mleczarnia',
    date: '2017-08-14',
    time: '19:30'
  },
  {
    id: 3,
    name: 'Wrocławska Grupa .NET',
    place: 'Nietota',
    date: '2017-08-20',
    time: '18:30'
  }
];

ReactDOM.render(<Events events={events} />, document.getElementById('root'));
