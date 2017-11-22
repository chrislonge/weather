import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // Redux-Promise checks payload property for promises, finishes the request, and unwraps the promise!
    // If the action contains a promise, stop the action
    // After promise resolves create a new action and send it to reducers
    switch (action.type) {
        case FETCH_WEATHER:
            // Never manipulate state directly! Instead of mutating return new instsance of state.
            // ES6 Syntax 
            // Same thing as: return state.concat([action.payload.data]);
            return [action.payload.data, ...state]; // [city, city, city] NOT [city, [city, city]]
        default:
            return state;
    }
}