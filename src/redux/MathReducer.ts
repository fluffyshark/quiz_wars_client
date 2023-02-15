import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface NewQuestion {
    question:string
    answer:number
}
interface MathType {
    type:string
}


export var mathData = { question: "", answer: 0, type: "" } 


const MathSlice = createSlice({
    name: "math",
    initialState: {value: mathData},
    reducers: {
        setMathQuestion: (state, action:PayloadAction<NewQuestion>) => {
            state.value.question = action.payload.question   
            state.value.answer = action.payload.answer   
         },
         setMathType: (state, action:PayloadAction<MathType>) => {
            state.value.type = action.payload.type   
         },
        
    }
})

export const { setMathQuestion, setMathType } = MathSlice.actions
export default MathSlice.reducer
