import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RegionData} from "./RegionData"


 

const initialState = {value: RegionData } 

const RegionSlice = createSlice({
    name: "regions",
    initialState, 
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

       
    }
})

export const {login} = RegionSlice.actions
export default RegionSlice.reducer

