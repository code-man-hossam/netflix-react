import React, { useEffect, useState } from 'react'
import axios from './axios'
import './row.css'
import YoutTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = 'https://image.tmdb.org/t/p/original'

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParmas = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParmas.get('v'))
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row_poster ${isLargeRow && `row_posterLarge`}`}
              onClick={() => handleClick(movie)}
            />
          )
        })}
      </div>
      {trailerUrl && <YoutTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
