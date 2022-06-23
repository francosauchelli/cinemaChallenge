// api's key - own
const api_key = '22aa3d3bd156db58ec3731889f91e5f9';

// Discover request sorted by popularity-desc
export const API_DISCOVER=`https://api.themoviedb.org/3/discover/movie?api_key=${ api_key }&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
export const API_SEARCH=`https://api.themoviedb.org/3/search/movie?api_key=${ api_key }&language=es-ES&query=`;
export const API_MOVIE_DETAIL=`https://api.themoviedb.org/3/movie/movie_id?api_key=${ api_key }&language=es-ES`
export const IMAGE_PATH=`https://image.tmdb.org/t/p/w500`;