import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    foo:'foo'
}

export const navSlice = createSlice({
    name:'nav',
    initialState,
    reducers:{
        setFoo:(state,action) => {
            state.foo = action.payload
        }
    }
})
