import { createSlice } from "@reduxjs/toolkit";

const initialState={
    
    showGPTSearch:false
}
const gptSlice= createSlice({
    name: "gpt",
    initialState,
    reducers:{
     toggleGPTSearchView:(state)=>{
        state.showGPTSearch= !state.showGPTSearch
     }
    }

})

export const {toggleGPTSearchView}=gptSlice.actions
export default gptSlice.reducer