import axios from 'axios';

const BASE_URL = 'https://picsum.photos';

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
