import { Types } from '../actions'
const INITIAL_STATE = []


export default function convertReducer (state = INITIAL_STATE, action) {
    if (action.type === Types.CONVERTER_MOEDAS) {
        const result = action.payload.data;
        const quantity = action.quantity;
        return {
            result: result,
            quantity: quantity
        }
    } else { 
        return state;
    }
}