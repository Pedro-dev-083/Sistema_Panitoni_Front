import axios from 'axios';

//TODO: ajeitar o backend para enviar em requisição HTTPS
const BASE = 'http://localhost:8080'

export const getMovies= async () => {
    const response = await axios.get(`${BASE}/movies`);
    return response.data;
  };
