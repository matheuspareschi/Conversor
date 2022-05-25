import axios from 'axios';
import {API_KEY} from '../currancyApiKey';

export const Types = {
    CONVERTER_MOEDAS: 'CONVERTER_MOEDAS'
};

const BASE_URL = 'https://api.apilayer.com/currency_data'

export function converteMoedas(converte){
        const url = `${BASE_URL}/live?apikey=${API_KEY}&source=${converte.de}&currencies=${converte.para}`

        const request = axios.get(url);

        return {
            type: Types.CONVERTER_MOEDAS,
            payload: request, 
        }
}

