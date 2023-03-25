// const URL = 'https://pixabay.com/api/';
// const KEY = '11240134-58b8f655e9e0f8ae8b6e8e7de';
// const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

// function fetchImages(query, page = 1) {
//   return fetch(`${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`).then(
//     response => response.json()
//   );
// }

// export default fetchImages;

import axios from 'axios';

export async function fetchImages(searchName, page) {
  const API_URL = 'https://pixabay.com/api/';
  const config = new URLSearchParams({
    key: '31754006-f43a1b08b2cea32f92fc299f3',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: searchName,
    per_page: 12,
  });

  const response = await axios.get(`${API_URL}?page=${page}&${config}`);
  return response.data;
}