import './MovieCard.css';
import { Link } from "react-router-dom";
// import MovieContext from '../../context/MovieContext';
// import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MovieCard({ movie }) {

  const dispatch = useDispatch();

  const watchlist = useSelector(state => {
    console.log(state);
    return state.watchlist;
  })

  // console.log(watchlist.watchlist);

  // let { watchlist, handleAddToWatchList, deleteFromWatchList } = useContext(MovieContext);

  function doesContain() {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movie.id) {
        return true;
      }
    }
    return false;
  }

  // console.log("Movies Card", movie.id);

  function addToWatchList() {
    // handleAddToWatchList(movie);
    dispatch({type: 'ADD_TO_WATCHLIST', payload: movie})
  }

  function deleteFWatchList() {
    // deleteFromWatchList(movie);
    dispatch({type: 'REMOVE_FROM_WATCHLIST', payload: movie})
  }

  return (
    <div className="movie-card">
      <div className="movie-card-img">
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      </div>
      <Link to={`/details/${movie.id}`}>
        i
      </Link>
      <div className="movie-card-title">
        {movie.title}
      </div>
      {doesContain() ? (<button onClick={deleteFWatchList}>remove</button>) : (<button onClick={addToWatchList}>add</button>)}
    </div>
  )
}

export default MovieCard;


// watchList = [{id:1},{id:2}]