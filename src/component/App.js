import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies ,showFav} from "../actions";
import movies from "../reducers";


class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      //  console.log("updated");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    //  console.log("state",store.getState());
  }

isMovieFavourite = (movie)=>{
    const {favourites} = this.props.store.getState()
    const index = favourites.indexOf(movie)

    if (index !== -1) {
      // found the movie
      return true
    }
    return false

}

onTabChange=(val)=>{
  
  this.props.store.dispatch(showFav(val))

}
 


  render() {
    const { list,favourites ,showFavourites} = this.props.store.getState();
    // console.log("unfav" , this.props.store.getState());
    const displayMovies = showFavourites ? favourites : list
    return (
      <div>
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? "" :"active-tabs"}`} onClick={()=>this.onTabChange(false)}>movies</div>
            <div className={`tab ${showFavourites ? "active-tabs" :""}`} onClick={()=>this.onTabChange(true)}>favourites</div>
          </div>

          <div className="list">
          {displayMovies.map((movie, index) => (
              <MovieCard 
              movie={movie} 
              key={index} 
              dispatch = {this.props.store.dispatch}
              isFavourite = {this.isMovieFavourite(movie)} 
              />
            ))}
          </div>
          <div>
            {displayMovies.length == 0 ? <div className="no-movies"> No movies to display </div> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
  