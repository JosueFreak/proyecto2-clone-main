const moviesDB = [
    {
        id: 1,
        title: 'Back to the future',
        gender: 'Ciencia Ficcion',
        description: 'Lorem Ipsum',
        director: 'Robert Zemeckis',
        year: 1985
    }
]
let movieId = 1

const findAllMovies = async () => {
    return moviesDB
}

const findMovieById = async (id) => {
    const movie = moviesDB.find(movieItem => movieItem.id === id)
    return movie
}

const createMovie = async (movieObj) => {
    const newMovie = {
        id: movieId++,
        title: movieObj.title || 'unknow',
        gender: movieObj.gender || 'unknow',
        description: movieObj.description || 'Lorem Ipsum',
        director: movieObj.director || 'unknow',
        year: movieObj.year || null
    }
    moviesDB.push(newMovie)
    return newMovie
}

module.exports = {
    findAllMovies,
    findMovieById,
    createMovie
}