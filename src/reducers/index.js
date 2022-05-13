import {ADD_MOVIES, ADD_FAVOURITE , REMOVE_FAVOURITE,SHOW_FAV} from "../actions"

const initialMoviesState ={
    list:[],
    favourites:[],
    showFavourites:false
}
export  function movies(state=initialMoviesState,action) {
  switch (action.type) {
      case ADD_MOVIES:
          return {
              ...state,
              list:action.movies
          }
         
          case ADD_FAVOURITE:
              return{
                  ...state,
                  favourites:[action.movie , ...state.favourites]
              }
  
          case REMOVE_FAVOURITE:
              const rem = action.movie
              const favourites = state.favourites
             const newF= favourites.filter(movies=> movies !== rem)
              return {
                  ...state,
                  favourites:newF
              }

              case SHOW_FAV:
                  return{
                      ...state,
                      showFavourites:action.val
                  }

      default:
          return state;
  }
    
}

const initialSearchState = {
    result:{}
}

export function search(state=initialSearchState,action) {
    

    return state
}


const initialRootState = {
    movies:initialMoviesState,
    search:initialSearchState
}

export default function rootReducer(state=initialRootState,action) {
    return {
        movies:movies(state.movies,action),
        search:search(state.search,action)
    }
}








