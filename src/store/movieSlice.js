import { createSlice } from "@reduxjs/toolkit";
const initialState={
    movies:null,
    trailerVd:null
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
       }
    }
})
export const {addNowPlayingMovie,addTrailerVideo}= movieSlice.actions;
export default movieSlice.reducer;