import './App.css';
// import { products, d } from './components/Products';
import { useState } from 'react';

import DetailsPage from './Pages/DetailsPage';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import WatchListPage from './Pages/WatchListPage';
import MovieContext from './context/MovieContext';
// import Callbacks from './components/Callbacks';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
// import Ex from './components/ExampleEffect/ExampleEffect';
// [{},{},{}, ]
// [...watchlist, movieObj];
function App() {
  // console.log(products);
  // console.log(d);

  // const [input, setInput] = useState("");
  // const [count, setCount] = useState(0);

  const [watchlist, setWatchList] = useState(JSON.parse(localStorage.getItem('movies')));

  console.log(watchlist);
  function handleAddToWatchList(movieObj) {
    let updatedWatchlist = [...watchlist, movieObj];
    // [1,2,3,4]  
    // [1, 2, 3, 4, 5]
    // updateWatchlist = watchlist.push(movieObj);
    // updateWatchlist = [...watchlist];
    setWatchList(updatedWatchlist);
    localStorage.setItem('movies', JSON.stringify(updatedWatchlist))
  }

  function deleteFromWatchList(movieObj) {
    let filteredMovies = watchlist.filter((movie) => {
      return movie.id !== movieObj.id
    });
    setWatchList(filteredMovies);
    localStorage.setItem('movies', JSON.stringify(filteredMovies))
  }

  // 
  // const incrementCount = useCallback(() => setCount(count + 1), [count]);

  // const valueRef = useRef(0);
  // const inputRef = useRef(0);

  // const onSubmit = () => {
  //   // console.log(valueRef.current);
  //   console.log(inputRef.current.value);
  //   console.log(inputRef.current);
  //   inputRef.current.focus();
  //   valueRef.current = valueRef.current + 1;
  //   // setCount(count + 1);
  // }

  // useEffect(() => {
  //   console.log(valueRef.current);
  // }, [valueRef.current]);

  return (
    <div className="App">
      {/* <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={incrementCount}>Increment Count</button>
      <h3>Input Text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr/>
      <Callbacks count={count} xyz={incrementCount} /> */}

      {/* 

        {
          watchlist: watchlist,
          handleAddToWatchList: handleAddToWatchList,
          deleteFromWatchList: deleteFromWatchList
        }
      
      */}
      <BrowserRouter>
        <MovieContext.Provider value={{ watchlist, setWatchList, handleAddToWatchList, deleteFromWatchList }}>
          <NavBar />
          <Switch>
            {/* <Route
              path="/"
              exact={true}
              render={() => <HomePage watchlist={watchlist} handleAddToWatchList={handleAddToWatchList} deleteFromWatchList={deleteFromWatchList} />}
            /> */}

            <Route
              path="/"
              exact={true}
              component={HomePage}
            />
            <Route
              path="/details/:id"
              exact={true}
              component={DetailsPage}
            />
            <Route
              path="/watchlist"
              exact={true}
              component={WatchListPage}
            />
            <Route component={NotFoundPage} />
            </Switch>
        </MovieContext.Provider>
      </BrowserRouter>
      {/* <Ex /> */}
      {/* <span>{valueRef.current}</span> */}
      {/* <span>{count}</span> */}
      {/* <input id="btn" ref={inputRef} type="text" />
      <button onClick={onSubmit}>New value</button> */}
    </div>
  );
}

export default App;


//  this is a react component
// A react component is reusable piece of js which returns html 
// the name of the component is usualy capitalised
// a component can be imported by another component in order to use it


//[{id:2},{id:3},{id:4}]
// {id:2}
// [{id:3}, {id:4}]