import Hero from './Hero';
import {useParams} from 'react-router-dom'
import { useState , useEffect } from 'react';


const MovieView = () =>{


    const { id } = useParams()
    const [movieDetails , setMovieDetails] = useState({})
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzlmYWNlZmRjZWMwZTQ1N2UzMTNhODRjZjFiNjM5NSIsInN1YiI6IjY1Mjk5NzhlMWYzZTYwMDBhYzRkODA3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3oQDGYKs_uH0xqubkD4B7r49jW6t0BH4YE_S221gf-8'
          }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}/lists?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => {
          setTimeout(() =>{
              setMovieDetails(data)
              setIsLoading(false)
          },2000)
        })
    }, [id])

    function renderMovieDetails(){
        if(isLoading){
          return <Hero text="Loading..."></Hero>
        }
        if(movieDetails){
          const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
          const poster_path =`https://image.tmdb.org/t/p/500${movieDetails.poster_path}`
          return(
          <>
              <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
              <div className="container my-5">
                <div className='row'>
                    <div className="col-md-3">
                    <img src={poster_path} alt='...' className='img-fluid shadow rounded'></img>

                    </div>
                    <div className='col-md-9'>
                      <h2>{movieDetails.original_title}</h2>
                      <p className='lead'>
                          {movieDetails.overview}
                      </p>
                    </div>
                </div>
              </div>
          </>
          )

        }
    }

    return renderMovieDetails()

};

export default MovieView ;