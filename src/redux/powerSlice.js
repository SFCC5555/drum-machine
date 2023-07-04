import { createSlice } from "@reduxjs/toolkit";

const initialState = true

export const powerSlice = createSlice({
    name:'power',
    initialState,
    reducers: {
        changePower: (state,action)=>{

            state = action.payload;

            return state;

        }
    }

})

export const {changePower} = powerSlice.actions;
export default powerSlice.reducer;