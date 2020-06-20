import axios from 'axios';

export default axios.create({
    baseURL: 'https://5eed13414cbc340016330e71.mockapi.io/stickers',
    headers: {
        'Content-Type': 'application/json'
    }
});