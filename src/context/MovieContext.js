import {createContext} from "react";

const MovieContext = createContext({
  watchlist: [],
  setWatchList: () => {},
  handleAddToWatchList: () => {},
  deleteFromWatchList: () => {},
});

export default MovieContext;