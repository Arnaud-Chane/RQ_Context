import {useContext} from 'react';
import MovieContext from '../contexts/MovieContext';

const MoviesList = () => {
  const { movies, setMovies } = useContext(MovieContext);



  return (
    <div className="MoviesList">
      <ul>
      {movies.map((movie) => (
        <li key={movie.movie_id}>
          {movie.title} - {movie.release_year}
        </li>
      ))}
      </ul>
      
      {movies.length < 4 && (
        <button
        onClick={() => {
          setMovies([
            ...movies,
            {
              movie_id: 4,
              title: 'Harry Potter and the Goblet of Fire',
              release_year: 2005,
            },
          ]);
        }}>
          More
        </button>
      )}

    </div>
  )
}


export default MoviesList