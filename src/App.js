import './App.css';
import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6346d645';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');

    useEffect(() => {
        searchMovie('batman');
    }, []);

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    return ( 
        <div className='app'>
            <h1>Movie Land</h1> 

            <div className='search'>
                <input 
                    placeholder='Search for your movie' 
                    value = { searchTerm }
                    onChange = {(e) => setsearchTerm(e.target.value)} 
                />

                <button onClick={() => searchMovie (searchTerm)}>Search</button>
            </div>

            {movies?.length > 0 
                ? (
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
                )
                : 
                (
                <div>
                    <h1>No movie found</h1>
                </div>)
            }
            
        </div>
     );
};
 
export default App;