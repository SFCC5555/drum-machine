import { createSlice } from "@reduxjs/toolkit";

const initialState = 'light'

export const buttonSlice = createSlice({
    name:'button',
    initialState,
    reducers: {
        changeButton: (state,action)=>{

            state = action.payload;

            return state;

        }
    }

})

export const {changeButton} = buttonSlice.actions;
export default buttonSlice.reducer;