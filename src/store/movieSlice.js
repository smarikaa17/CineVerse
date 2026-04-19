import { createSlice } from "@reduxjs/toolkit";
const initialState={
    movie:null
}

export const movieSlice= createSlice({
    name:"movies",
    initialState,
    reducers:{
       addNowPlayingMovie : (state,action)=>{
        state.movie=action.payload
       }
    }
})
export const {addNowPlayingMovie}= movieSlice.actions;
export default movieSlice.reducer;