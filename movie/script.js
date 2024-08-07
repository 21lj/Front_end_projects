const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c5d38f6dc4a1a72cee40dcd132ab7421&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=c5d38f6dc4a1a72cee40dcd132ab7421&query="'
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies){
    main.innerHTML = ''
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview, release_date } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByVote(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>${title}</h3>
                ${overview}
                <div><p>Release date: ${release_date}</p></div>
            </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByVote(vote){
    if(vote >= 8){
        return 'green'
    }else if(vote >=5){
        return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value 

    if(searchTerm && searchTerm != ''){
        getMovies(SEARCH_API + searchTerm)
    }else{
        window.location.reload()
    }
})