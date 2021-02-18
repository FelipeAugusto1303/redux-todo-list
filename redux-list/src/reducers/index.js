import listReducer from './listReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    list: listReducer,
})

export default allReducers;