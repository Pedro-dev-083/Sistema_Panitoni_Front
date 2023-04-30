import axios from "axios";

//TODO: ajeitar o backend para enviar em requisição HTTPS
const BASE = "http://localhost:8080";

export const getMovies = async () => {
  const response = await axios.get(`${BASE}/movies`);
  return response.data;
};

export const addMovie = async (nome, genero, ano) => {
  const content = {
    nome: nome,
    genero: genero,
    ano: ano,
  };
  try {
    const response = await axios.post(`${BASE}/movies`, content, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { success: true, message: response.data.message };
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return { success: false, message: err.response.data.message };
    }
    return { success: false, message: "Erro ao adicionar filme." };
  }
};
