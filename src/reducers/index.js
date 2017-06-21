import { combineReducers } from 'redux';

import { eventsReducer } from './eventsReducer';
import { detailsReducer } from './detailsReducer';

const rootReducer = combineReducers({
  eventsReducer,
  detailsReducer
});

export default rootReducer;
