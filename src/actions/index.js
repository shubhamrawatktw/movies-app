export const ADD_MOVIES = "ADD_MOVIES"
export const ADD_FAVOURITE = "ADD_FAVOURITE"
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE"
export const SHOW_FAV = "SHOW_FAV"

export function addMovies(movies) {
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}


export function addFavourites(movie) {
    return {
        type:ADD_FAVOURITE,
        movie:movie
    }
}

export function removeFavourites(movie) {
    return {
        type:REMOVE_FAVOURITE,
        movie:movie
    }
}

export function showFav(val) {
    return {
        type:SHOW_FAV,
        val
    }
}