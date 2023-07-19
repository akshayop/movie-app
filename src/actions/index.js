// {
//     type: 'INCREASE_COUNT',
//     movies: [m1 , m2, m3]
// }

// {
//     type: 'DECREASE_COUNT'
// }



// Action types
export const ADD_MOVIES = 'ADD_MOVIES';

// Action Creators  
export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies
      }
}