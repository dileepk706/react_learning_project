import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cakes/cakeSlice";
import JuiceSilcer from "../features/juice/JuiceSilcer";
const store=configureStore({
    reducer:{
        cake:cakeSlice,
        juice:JuiceSilcer
    }
})
export default store