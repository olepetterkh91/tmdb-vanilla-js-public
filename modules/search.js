const searchResultsDiv = document.getElementById("searchResults")
const loaderDiv = document.getElementById("loader")

import { getMoviesBySearchTerm } from "./api.js"
import {renderSingleMovie} from './movies.js'

let requestCount = 0

export function searchMovies(searchTerm) {
    if (searchTerm.trim() !== "" && requestCount < 100) {
        let searchTimeout
        clearTimeout(searchTimeout)
        searchTimeout = setTimeout(() => {
            fetchSearchedMovies(searchTerm)
            loaderDiv.textContent = "Søker...."
        }, 750)
    } else {
        searchResultsDiv.innerHTML = ""
        loaderDiv.textContent = ""
    }
}

export async function fetchSearchedMovies(searchTerm) {
    const movies = await getMoviesBySearchTerm(searchTerm);
    if (movies.length > 0) {
        searchResultsDiv.innerHTML = movies?.map((movie) => renderSingleMovie(movie)).join("")
        loaderDiv.textContent = `Viser ${movies?.length} resultater for ${searchTerm}`
    }
    if (movies?.length === 0) {
        searchResultsDiv.innerHTML = ""
        loaderDiv.textContent = "Fant ingen resultater"
    }
    requestCount++;
}