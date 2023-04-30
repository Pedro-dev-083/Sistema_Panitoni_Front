import React, { useState } from "react";
import { Movies } from "./Movies";
import { Books } from "./Books";
import { addMovie } from "../../services/api";

export const Content = () => {
    const [content, setContent]  = useState('');
    const showMovies = (content === '' || content === 'movies')
    const showBooks = (content === '' || content === 'books')
    const handleContent = (value) =>{
        setContent(value);
    }

    const add = (e) =>{
        e.preventDefault();
        const name = document.getElementById("name").value;
        const genre = document.getElementById("genre").value;
        const year = document.getElementById("year").value;
        addMovie(name, genre, year)  
        .then(response => {
            console.log(response.message); // faz algo com a resposta de sucesso
          })
          .catch(error => {
            console.error(error.message); // faz algo com o erro retornado
          });;        
    }

    return (
        <>
            <button onClick={() => handleContent('')}>Todos</button>
            <br/>
            <button onClick={() => handleContent('books')}>Livros</button>
            <br/>
            <button onClick={() => handleContent('movies')}>Filmes</button>
            {showMovies ? <Movies/> : null}
            {showBooks ? <Books/> : null}
            <div>
                <h2>Adicionar filme:</h2>
                <label>Nome:</label>
                <input id="name"/>
                <label>Gênero:</label>
                {/* TODO: Fazer com que o input apenas aceite as respostas de gênero existentes no banco */}
                <input id="genre"/>
                <label>Ano:</label>
                <input id="year"/>
                <button onClick={e=>add(e)}>Enviar</button>
            </div>
        </>
    )
}