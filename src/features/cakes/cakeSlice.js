import { createSlice } from "@reduxjs/toolkit";

const cakeSlicer=createSlice({
    name:'cake',
    initialState:{
        cakeInStock:10
    },
    reducers:{
        sell:(state,action)=>{
            state.cakeInStock-=action.payload
        },
        order:(state,actio)=>{
            state.cakeInStock+=actio.payload
        }
    }
})

export default cakeSlicer.reducer
export const {sell,order}=cakeSlicer.actions