import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface UserData {
    userId:string
    username:string
    gameCode:string
    points:UserPoints
    selectedRegion:string
}
interface UserPoints {
    points:number
}

export var userData = {userId: "", username: "", gameCode:"",  points: 0, selectedRegion: ""} 

const UserSlice = createSlice({
    name: "user",
    initialState: {value: userData},
    reducers: {
        add_points: (state, action:PayloadAction<UserPoints>) => {
            state.value.points += action.payload.points
        },

       
    }
})

export const {add_points} = UserSlice.actions
export default UserSlice.reducer

