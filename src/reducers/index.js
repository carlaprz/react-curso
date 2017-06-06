import { combineReducers } from 'redux'
import boards from './boards'
import colors from './colors'

const allReducer = {
    core: combineReducers({
        boards,
        colors
    })
};

export default allReducer