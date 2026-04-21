import { createSlice } from "@reduxjs/toolkit";
const initialState={
    movies:null,
    trailerVd:null,
    
}

export const movieSlice= createSlice({
    name:"movie",
    initialState,
    reducers:{
       addNowPlayingMovie : (state,action)=>{
        state.movies=action.payload
       },
       addTrailerVideo:(state,action)=>{
         state.trailerVd=action.payload
       },
       addPopularVideo:(state,action)=>{
         state.popularMovies=action.payload
       },
       addTopRatedMovies:(state,action)=>{
         state.topRatedMovies=action.payload
       }
    }
})
export const {addNowPlayingMovie,addTrailerVideo,addPopularVideo,addTopRatedMovies}= movieSlice.actions;
export default movieSlice.reducer;