import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../Apis/MovieApi";
import { ApiKey } from "../Apis/ApiKey";


export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async(term)=>{
    
    const response = await MovieApi
     .get(`?apiKey=${ApiKey}&s=${term}&type=movie`)
     return response.data
})
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async(term)=>{
    
    const response = await MovieApi
     .get(`?apiKey=${ApiKey}&s=${term}&type=series`)
     return response.data
})
export const showSelectedMovieOrShow = createAsyncThunk("movies/showSelectedMovieOrShow", async(id)=>{
      
    const response = await MovieApi
    .get(`?apiKey=${ApiKey}&i=${id}&plot=full`)
     return response.data 
})







const initialState = {
    movies : {},
    shows : {},
    selectedMovieOrShow : {}
}

const movieSlice = createSlice(({
    name : "movies",
    initialState,
    reducers : {
      removeSelectedMovieOrShow : (state)=>{
         state.selectedMovieOrShow = {}
      }
    },
    extraReducers : (builder)=>{
        builder
         .addCase(fetchAsyncMovies.pending, (state)=>{
            console.log("Pending")
         })
         .addCase(fetchAsyncMovies.fulfilled, (state, {payload})=>{
            console.log("Movie list Success")
            state.movies = payload
         })
         .addCase(fetchAsyncMovies.rejected, (state)=>{
            console.log("Failed")
         })
         .addCase(fetchAsyncShows.fulfilled, (state, {payload})=>{
            console.log("show list Success")
            state.shows = payload
         })
         .addCase(showSelectedMovieOrShow.fulfilled, (state, {payload})=>{
            console.log("selectedovieOrShow list Success")
            state.selectedMovieOrShow = payload
         })
    }
}))




export default movieSlice.reducer
export const {removeSelectedMovieOrShow} = movieSlice.actions
export const getAllMovies = (state)=>state.movies.movies
export const getAllShows = (state)=>state.movies.shows
export const getSelectedMovieOrShow = (state)=>state.movies.selectedMovieOrShow