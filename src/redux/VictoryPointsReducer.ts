import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface VictoryPoints {
    red_team:number 
    blue_team:number
    yellow_team:number
    green_team:number
}


export const victoryPoints = {red_team: 0, blue_team: 0, yellow_team: 0, green_team: 0};

const VictoryPointSlice = createSlice({
    name: "victory",
    initialState: {value: victoryPoints},
    reducers: {
        add_victory_points: (state, action:PayloadAction<VictoryPoints>) => {
            state.value.red_team += action.payload.red_team
            state.value.blue_team += action.payload.blue_team
            state.value.yellow_team += action.payload.yellow_team
            state.value.green_team += action.payload.green_team
        },
    }
})

export const {add_victory_points} = VictoryPointSlice.actions
export default VictoryPointSlice.reducer

