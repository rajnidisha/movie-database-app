// import MovieContext from '../../context/MovieContext';
// import { useContext } from 'react';
import WatchListCard from '../WatchListCard';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './WatchList.css';
function WatchList() {
  
  const [search, setSearch] = useState("");
  // let { watchlist, setWatchList, deleteFromWatchList } = useContext(MovieContext);
  const dispatch = useDispatch();

  const watchlist = useSelector(state => {
    console.log(state);
    return state.watchlist;
  })
  console.log(watchlist);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleAscendingSort() {
    let sortAsc = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjA.vote_average - movieObjB.vote_average
    });
    console.log(sortAsc);
    // setWatchList(sortAsc);
    dispatch({type: 'SET_WATCHLIST', payload: sortAsc})

    // setWatchList([...sortAsc]);
  }

  function handleDescendingSort() {
    let sortDesc = watchlist.sort((movieObjA, movieObjB) => {
      return movieObjB.vote_average - movieObjA.vote_average
    });
    console.log(sortDesc);
    dispatch({type: 'SET_WATCHLIST', payload: sortDesc})

    // setWatchList([...sortDesc]);
  }

  return (<div className='watchlist'>
    <button onClick={handleAscendingSort}>Asc Sort</button>
    <button onClick={handleDescendingSort}>desc Sort</button>

    <input onChange={handleSearch} value={search} />
    {watchlist.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase())
    }).map(function (item) {
      return (<WatchListCard item={item}  key={item.id} />)
    })}
  </div>)
}

export default WatchList;