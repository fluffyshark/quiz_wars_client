import { configureStore } from "@reduxjs/toolkit"
import RegionSlice from "./RegionReducer"
import UserSlice from "./UserReducer"
import VictorySlice from "./VictoryReducer"

export const store = configureStore({
    reducer: {
        regions: RegionSlice,
        user: UserSlice,
        victory: VictorySlice
    }
})

