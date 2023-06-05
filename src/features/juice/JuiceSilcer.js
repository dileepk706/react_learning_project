import { createSlice } from "@reduxjs/toolkit";

const juiceSlicer=createSlice({
    name:'juice',
    initialState:{
        juiceInStock:20
    },
    reducers:{
        sell:(state,action)=>{
            state.juiceInStock-=action.payload
        },
        order:(state,action)=>{
            state.juiceInStock+=action.payload
        }
    }
})
export default juiceSlicer.reducer
export const {sell,order}=juiceSlicer.actions