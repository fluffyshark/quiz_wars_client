import { configureStore } from "@reduxjs/toolkit"
import RegionSlice from "./RegionReducer"
import UserSlice from "./UserReducer"
import VictoryPointSlice from "./VictoryPointsReducer"

export const store = configureStore({
    reducer: {
        regions: RegionSlice,
        user: UserSlice,
        victory: VictoryPointSlice
    }
})

