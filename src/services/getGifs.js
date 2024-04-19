import axios from 'axios';
import { API_KEY, API_URL } from './settings';




export default function getGifs({ keyword = 'morty', limit = 25, page = 0 } = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=G&lang=en`;

    return axios.get(apiURL)
        .then(response => {
            return fromApiResponseToGifs(response);
        });
}

const fromApiResponseToGifs = (apiResponse) => {
    const { data = [] } = apiResponse.data; //defect value.

    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { images, title, id } = image;
            const { url } = images.downsized_medium; //downsized_medium.url
            return { id, title, url };
        });

        return gifs;
    }
    return [];
}