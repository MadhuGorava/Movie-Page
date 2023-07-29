import {useState, useEffect} from 'react'

const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://hoblist.com/api/movieList', {
          method: 'POST',
          body: JSON.stringify({
            category: 'movies',
            language: 'kannada',
            genre: 'all',
            sort: 'voting',
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const data = await response.json()
        setMovies(data.result)
        console.log(data.result)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchMovies()
  }, [])

  return (
    <div className="movie-container">
      <h2>Movie List</h2>
      <ul className="movie-list">
        {movies.map(movie => (
          <li key={movie.title}>
            <img src={movie.poster} alt={movie.title} className="poster" />
            <div>
              <p>
                Title: <span>{movie.title}</span>
              </p>
              <p>
                Language: <span>{movie.language}</span>
              </p>
              <p>
                Genre: <span>{movie.genre}</span>
              </p>
            </div>
            {/* Add other movie information you want to display */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieList
