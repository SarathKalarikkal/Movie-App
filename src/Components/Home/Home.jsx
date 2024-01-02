import React, { useEffect } from 'react';
import "./Home.scss"
import MovieListing from "../MovieListing/MovieListing"
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../Features/MovieSlice';

const Home = () => {

const dispatch = useDispatch()

const MovieText = "Harry"
const ShowText = "Friends"


useEffect(()=>{
    dispatch(fetchAsyncMovies(MovieText))
    dispatch(fetchAsyncShows(ShowText))
},[dispatch])

    return (
        <div className='banner-image'>
            <MovieListing />
        </div>
    );
};

export default Home;