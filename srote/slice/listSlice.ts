import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IInitialState {
    foo:string
}
const initialState: IInitialState = {
    foo:'foo'
}

export const listSlice = createSlice({
    name:'listItems',
    initialState,
    reducers:{
        setListItems(state:IInitialState, action:PayloadAction<string>){
            state.foo = action.payload            
        }
    }
})

export default listSlice.reducer;