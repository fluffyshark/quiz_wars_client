import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {RegionData} from "./RegionData"


interface UserRegionData {
    id:number
    points_red:number
    points_blue:number
    points_yellow:number
    points_green:number
    controlledBy:string
    find: (predicate: (value: UserRegionData, index: number, obj: UserRegionData[]) => boolean) => UserRegionData | undefined;
    item: UserRegionData;
}

 

const RegionSlice = createSlice({
    name: "regions",
    initialState: {value: RegionData},
    reducers: {
        updateRegionData: (state, action:PayloadAction<UserRegionData>) => {
            state.value.map((region, i) => {
                let matchingRegion = action.payload.find(item => item.id === region.id);
                if (matchingRegion) {
                    region.points_red = matchingRegion.points_red
                    region.points_blue = matchingRegion.points_blue
                    region.points_yellow = matchingRegion.points_yellow
                    region.points_green = matchingRegion.points_green
                    region.controlledBy = matchingRegion.controlledBy
                }
            })
            
        },
        
    }
})

export const {updateRegionData} = RegionSlice.actions
export default RegionSlice.reducer

