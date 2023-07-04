import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from './buttonSlice.js';
import powerReducer from './powerSlice.js';
import bankReducer from './bankSlice.js';
import screenReducer from './screenSlice.js';
import volumeReducer from './volumeSlice.js';

export const store = configureStore({
    reducer: {
        button: buttonReducer,
        power: powerReducer,
        bank: bankReducer,
        screen: screenReducer,
        volume: volumeReducer
    }
})