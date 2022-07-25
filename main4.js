import axios from "axios";

const fetchMovies = () => {
    axios
        .get('http://www.omdbapi.com/?i=tt3896198&apikey=ae748ae5&s=frozen')
        .then((res) => {
            //console.log(res)
            const h1El = document.querySelector("h1")
            const imgEl = document.querySelector("img")
            h1El.textContent = res.data.Search[0].Title
            imgEl.src = res.data.Search[0].Poster
        });
}

fetchMovies()