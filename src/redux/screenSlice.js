import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

export const screenSlice = createSlice({
    name:'screen',
    initialState,
    reducers: {
        changeScreen: (state,action)=>{

            state = action.payload;

            return state;

        }
    }

})

export const {changeScreen} = screenSlice.actions;
export default screenSlice.reducer;