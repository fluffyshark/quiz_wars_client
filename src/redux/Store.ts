import { configureStore } from "@reduxjs/toolkit"
import RegionSlice from "./RegionReducer"


export const store = configureStore({
    reducer: {
        regions: RegionSlice
    }
})

