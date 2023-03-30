import React, { useState } from "react";
import { Movies } from "./Movies";
import { Books } from "./Books";

export const Content = () => {
    const [content, setContent]  = useState('');
    const showMovies = (content === '' || content === 'movies')
    const showBooks = (content === '' || content === 'books')
    const handleContent = (value) =>{
        setContent(value);
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
        </>
    )
}