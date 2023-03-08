import { createSlice } from '@reduxjs/toolkit';
import { insertToCarrito } from '../../db';
export const foodSlice = createSlice({
    name: 'food',
    initialState: {
        cart:[],
    },
    reducers: {
         addCart: (state, {payload})=>{
            state.cart.push(payload)
         },
         deleteTask: (state, {payload})=>{
            state.cart = state.cart.filter(item=> item.id !== payload)
         }

     }
});


export const { addCart, deleteTask} = foodSlice.actions;