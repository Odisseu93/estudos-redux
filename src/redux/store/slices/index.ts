import { createSlice } from '@reduxjs/toolkit';


const initialState = {value: 0};

// criando e  um slice exportando o slice 
export const countSlice = createSlice ({
    initialState,
    name: 'counter',
    reducers: {
        increment: (state)=> {
            state.value += 1
        },
        decrement: (state)=> {
            state.value -= 1
        },
    }
});


export const { increment,  decrement } = countSlice.actions;
