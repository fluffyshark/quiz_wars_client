import { configureStore } from "@reduxjs/toolkit"
import RegionSlice from "./RegionReducer"
import UserSlice from "./UserReducer"

export const store = configureStore({
    reducer: {
        regions: RegionSlice,
        user: UserSlice
    }
})

