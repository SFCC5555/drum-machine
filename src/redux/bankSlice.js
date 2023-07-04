import { createSlice } from "@reduxjs/toolkit";

const initialState = false

export const bankSlice = createSlice({
    name:'bank',
    initialState,
    reducers: {
        changeBank: (state,action)=>{

            console.log(action.payload)
            
            state = action.payload;

            return state;

        }
    }

})

export const {changeBank} = bankSlice.actions;
export default bankSlice.reducer;