import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import useStore from "../../hooks/useStore"
import { chapterEnum } from "../../src/models/chapter"
import { topicEnum } from "../../src/models/topic"

interface IInitialState {
    chapterId:chapterEnum | null ,
    topicId:topicEnum | null,
}
const initialState: IInitialState = {
    chapterId:null,
    topicId:null,
}

export const sessionSlice = createSlice({
    name:'sessionSlice',
    initialState,
    reducers:{
        setChapterId(state:IInitialState, action:PayloadAction<chapterEnum>){
            const {saveChapterId} = useStore()
            saveChapterId(action.payload)
            state.chapterId = action.payload            
        },
        setTopicId(state:IInitialState, action:PayloadAction<topicEnum>){
            const {saveTopicId} = useStore()
            saveTopicId(action.payload)
            state.topicId = action.payload            
        }
    }
})

export default sessionSlice.reducer;