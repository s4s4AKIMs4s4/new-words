import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LanguageEnum } from "../../src/models/language"

interface IInitialState {
    isAuth:boolean,
    sourseLanguage:LanguageEnum,
    destenationLanguage:LanguageEnum,
}
const initialState: IInitialState = {
    isAuth:false,
    sourseLanguage:LanguageEnum.EN,
    destenationLanguage: LanguageEnum.ES
}

export const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        setisAuth(state:IInitialState, action:PayloadAction<boolean>){
            state.isAuth = action.payload
        },
        setSourseLanguage(state:IInitialState, action:PayloadAction<LanguageEnum>){
            state.sourseLanguage = action.payload            
        },
        setDestenationLanguage(state:IInitialState, action:PayloadAction<LanguageEnum>){
            state.destenationLanguage = action.payload            
        }
    }
})

export default userSlice.reducer;