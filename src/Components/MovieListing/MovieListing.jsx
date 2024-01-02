import React from 'react';
import "./MovieListing.scss"
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../Features/MovieSlice';
import MovieCard from "../MovieCard/MovieCard"
import Slider from "react-slick"
import { Settings } from '../../Common/Settings';

const MovieListing = () => {
    

const movies = useSelector(getAllMovies)
const shows = useSelector(getAllShows)

let renderMovies, renderShows = ""

renderMovies = movies.Response === "True" ?
  (movies.Search.map((movie, index)=>{
      return <MovieCard data={movie} key={index}/>
  }))
  :
  (
  <div className ="movies-error">
  <h3>{movies.Error}</h3>
  </div>
  )
renderShows = shows.Response === "True" ?
  (shows.Search.map((show, index)=>{
      return <MovieCard data={show} key={index}/>
  }))
  :
  (
  <div className ="shows-error">
  <h3>{movies.Error}</h3>
  </div>
  )


    return (
        <div className='movie-wrapper'>
        <div className="movie-list">
         <h2>Movies</h2>
         <div className="movie-container">
            <Slider {...Settings}>
             {renderMovies}
             </Slider>
         </div>
        </div>
        <div className="movie-list">
         <h2>Shows</h2>
         <div className="movie-container">
         <Slider {...Settings}>
         {renderShows}
       </Slider>            
         </div>
        </div>
     </div>
    );
};

export default MovieListing;