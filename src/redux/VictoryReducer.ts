import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface PlayTime {
    gamePlayTime:number
}
interface VictoryStatus {
    gameStatus:string
}
interface VictoryPoints {
    red:number
    blue:number
    yellow:number
    green:number
}


export var victoryData = {gameStatus: "ongoing", gamePlayTime:0, red:0, blue:0, yellow:0, green:0 } 


const VictorySlice = createSlice({
    name: "victory",
    initialState: {value: victoryData},
    reducers: {
        setGameStatus: (state, action:PayloadAction<PlayTime>) => {
            state.value.gamePlayTime = action.payload.gamePlayTime     
         },
        updateGameStatus: (state, action:PayloadAction<VictoryStatus>) => {
           state.value.gameStatus = action.payload.gameStatus     
        },
        updateVictoryPoints: (state, action:PayloadAction<VictoryPoints>) => {
            state.value.red = action.payload.red     
            state.value.blue = action.payload.blue     
            state.value.yellow = action.payload.yellow     
            state.value.green = action.payload.green     
         },
       
        
    }
})

export const { updateGameStatus, updateVictoryPoints,setGameStatus } = VictorySlice.actions
export default VictorySlice.reducer

