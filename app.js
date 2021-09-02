const searchInput = document.getElementById("search");

import {searchMovies} from './modules/search.js'
import {renderMovies} from './modules/movies.js'

searchInput.addEventListener("keyup", (e) => searchMovies(e.target.value))

function App() {
    renderMovies()
}
App()