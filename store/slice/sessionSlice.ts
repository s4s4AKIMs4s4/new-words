import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { chapterEnum } from "../../src/models/chapter"
import { topicEnum } from "../../src/models/topic"

interface IInitialState {
    chapterId:chapterEnum,
    topicId:topicEnum,
}
const initialState: IInitialState = {
    chapterId:1,
    topicId:0,
}

export const sessionSlice = createSlice({
    name:'sessionSlice',
    initialState,
    reducers:{
        setChapterId(state:IInitialState, action:PayloadAction<chapterEnum>){
            state.chapterId = action.payload            
        },
        setTopicId(state:IInitialState, action:PayloadAction<topicEnum>){
            state.topicId = action.payload            
        }
    }
})

export default sessionSlice.reducer;