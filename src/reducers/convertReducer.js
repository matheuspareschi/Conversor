import { Types } from '../actions'
const INITIAL_STATE = []


export default function convertReducer (state = INITIAL_STATE, action) {
    if (action.type === Types.CONVERTER_MOEDAS) {
        const result = action.payload.data;

        return result
    } else { 
        return state;
    }
}