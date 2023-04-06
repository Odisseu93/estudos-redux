import { configureStore } from '@reduxjs/toolkit';
import {countSlice} from './slices/index';

const store = configureStore({
    reducer: {
        counter: countSlice.reducer
    },
});

export default store; 