import { combineReducers } from 'redux';
import list from './HomeReducer';

/*
    Using ComboneReducers to combine the reduces,
    in future the application may have multiple reducers
*/

const allReducers = combineReducers({
  list,
});

export default allReducers;
