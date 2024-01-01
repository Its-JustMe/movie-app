import { getMovies } from './modules.js';
import { API_URL, SEARCH_API } from './api.js';

const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        search.value = '';
    } else {
        window.location.reload();
    }
})