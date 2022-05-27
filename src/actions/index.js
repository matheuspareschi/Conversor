import axios from 'axios';
import {API_KEY} from '../currancyApiKey';

export const Types = {
    CONVERTER_MOEDAS: 'CONVERTER_MOEDAS'
};

const BASE_URL = 'https://api.apilayer.com/currency_data'

 export async function converteMoedas(converte){
        const url = `${BASE_URL}/live?apikey=${API_KEY}&source=${converte.de}&currencies=${converte.para}`

        const request = await axios.get(url);

        const valor = convertTotalValue(converte.valor, request.data.quotes);
        console.log(request.data.quotes)

        return {
            type: Types.CONVERTER_MOEDAS,
            payload: request, 
            quantity: valor
        }
}

function convertTotalValue(quantity, value) {
    
    const total = quantity * Object.values(value)[0]
    
    return total.toFixed(2)
}

