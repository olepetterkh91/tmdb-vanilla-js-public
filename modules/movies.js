const moviesDiv = document.getElementById("movies")

import { getPopularMovies } from "./api.js";
import { config } from "./config.js";

export async function renderMovies() {
    const movies = await getPopularMovies()
    console.log(movies)
    moviesDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie)).join("")
}

export function renderSingleMovie(movie) {
    return (
        `
        <div class="col-4 col-lg-3 col-xl-2 p-1">
            <img src="${movie?.poster_path ? config.image_base_url + movie?.poster_path : config.placeholder_poster}" class="img-fluid" >
        </div>
        `
    )
}