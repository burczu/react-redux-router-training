import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';

const getItems = () => {
  return (
    <ul>
      {events.map(item => {
        const date = new Date(item.date);

        if (date >= Date.now()) {
          return (
            <li key={item.id}>
              <strong>{item.name}</strong><br />
              Gdzie: {item.place}<br />
              Kiedy: {item.date} - {item.time}
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

ReactDOM.render(getItems(), document.getElementById('root'));
