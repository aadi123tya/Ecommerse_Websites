import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    cart:[
       
    ],
    Item:{},

    pathNavigate:[]
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
        , setItem:(state,action)=>{
            state.Item = action.payload;
        },
        setpathName:(state,action)=>{
            state.pathNavigate = state.pathNavigate.filter((page)=>(page!=(action.payload))?page:"")
            state.pathNavigate.push(action.payload)
        }
    }
})
export const {addItem,removeItem,setItem,setpathName}   = Slices.actions

export const SliceReducer =  Slices.reducer
