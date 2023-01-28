import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RegionData} from "./RegionData"


interface UserRegionData {
    id:number
    points_red:number
}

const initialState = {value: RegionData } 

const RegionSlice = createSlice({
    name: "regions",
    initialState, 
    reducers: {
        add_point: (state, action:PayloadAction<UserRegionData>) => {
            state.value.map((region) => {
                if (region.id === action.payload.id) {
                    region.points_red += action.payload.points_red
                }
            })
        },

       
    }
})

export const {add_point} = RegionSlice.actions
export default RegionSlice.reducer

