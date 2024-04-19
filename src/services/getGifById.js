import axios from 'axios';
import { API_KEY, API_URL } from './settings';




export default function getGifById(gifId = "") {
    const apiURL = `${API_URL}/gifs?api_key=${API_KEY}&ids=${gifId}`;

    return axios.get(apiURL)
        .then(response => {
            return fromApiResponseToGif(response);
        });
}

const fromApiResponseToGif = (apiResponse) => {
    const { data = [] } = apiResponse.data; //defect value.

    if (Array.isArray(data)) { //Devuelve array, pero siempre vendrá 1.
        const gifs = data.map(image => {
            const { images, title, id } = image;
            const { url } = images.downsized_medium; //downsized_medium.url
            return { id, title, url };
        });

        if (gifs.length > 0) {
            return gifs[0];
        }
    }
    return {};
}