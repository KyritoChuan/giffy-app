import axios from 'axios';
import { API_KEY, API_URL } from './settings';



export default function getTrendingTerms() {
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

    return axios.get(apiURL)
        .then(response => {
            return fromApiResponseToTrending(response);
        });
}

const fromApiResponseToTrending = (apiResponse) => {
    const { data = [] } = apiResponse.data; //defect value.
    // if (Array.isArray(data)) {
    // }
    // return [];
    return data;
}