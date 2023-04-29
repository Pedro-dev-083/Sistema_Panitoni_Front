import React, { useEffect, useState } from "react";
import { getMovies } from "../../../services/api";

export const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const fetchMovies = async () => {
            const movies = await getMovies();
            setMovies(movies.content);            
        };
        fetchMovies();
    }, []);

    return (
        <div>
           {movies.map(obj => (
            <li key={obj.id}>{obj.nome}</li>
           ))} 
        </div>
    )
}