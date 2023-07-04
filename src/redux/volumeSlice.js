import { createSlice } from "@reduxjs/toolkit";

const initialState = 50

export const volumeSlice = createSlice({
    name:'volume',
    initialState,
    reducers: {
        changeVolume: (state,action)=>{

            console.log(action.payload)
            
            state = action.payload;

            return state;

        }
    }

})

export const {changeVolume} = volumeSlice.actions;
export default volumeSlice.reducer;