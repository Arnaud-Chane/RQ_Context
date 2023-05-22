import {useContext} from 'react';
import MovieContext from '../contexts/MovieContext';

const MoviesList = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className="MoviesList">
      {movies.map((movie) => (
        <li key={movie.movie_id}>
          {movie.title} - {movie.release_year}
        </li>
      ))}
    </div>
  )
}

export default MoviesList