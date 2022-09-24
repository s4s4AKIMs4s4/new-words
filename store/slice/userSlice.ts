import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import useStore from "../../hooks/useStore"
import { IUserLanguge, LanguageEnum } from "../../src/models/language"

interface IAuth {
    isAuth:boolean,
}

type IInitialState = IAuth & IUserLanguge

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
            const {saveUserLanguges} = useStore()
            state.sourseLanguage = action.payload
            saveUserLanguges({
                destenationLanguage: state.destenationLanguage,
                sourseLanguage:action.payload,
            })        
        },
        setDestenationLanguage(state:IInitialState, action:PayloadAction<LanguageEnum>){
            const {saveUserLanguges} = useStore()
            state.destenationLanguage = action.payload
            saveUserLanguges({
                destenationLanguage: action.payload,
                sourseLanguage:state.sourseLanguage
            })            
        }
    }
})

export default userSlice.reducer;