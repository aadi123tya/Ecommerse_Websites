import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    cart:[
       
    ],
    Item:{}
}


export const Slices = createSlice({
    name:"userSlices",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            
        state.cart.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.cart = state.cart.filter((item)=>item.id!==action.payload)
        }
        ,setItem:(state,action)=>{
            state.Item = action.payload;
        }
    }
})
export const {addItem,removeItem,setItem}   = Slices.actions

export const SliceReducer =  Slices.reducer
