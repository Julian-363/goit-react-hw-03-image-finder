import axios from 'axios';

const API_KEY = '34274583-358fbb18fdafc2f53cb7ada51';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page = 1) => {
  const timestamp = Date.now();
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&timestamp=${timestamp}`
  );
  return response.data.hits;
};
