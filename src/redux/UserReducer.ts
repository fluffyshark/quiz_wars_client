import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface UserData {
    userId?:string
    username:string
    gameCode:string
    points?:UserPoints
    selectedRegionId?:SelectedRegion
    team?:string
}
interface UserPoints {
    points:number
}
interface SelectedRegion {
    selectedRegionId:number
}

export var userData = {userId: "", username: "", gameCode: "",  points: 0, selectedRegionId: 0, team:"Blue"} 

const UserSlice = createSlice({
    name: "user",
    initialState: {value: userData},
    reducers: {
        add_user_info: (state, action:PayloadAction<UserData>) => {
            state.value.username = action.payload.username
            state.value.gameCode = action.payload.gameCode
        },
        add_points: (state, action:PayloadAction<UserPoints>) => {
            state.value.points += action.payload.points
        },
        select_region: (state, action:PayloadAction<SelectedRegion>) => {
            state.value.selectedRegionId = action.payload.selectedRegionId
        },

       
    }
})

export const {add_user_info, add_points, select_region} = UserSlice.actions
export default UserSlice.reducer

