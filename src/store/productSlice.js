import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";


const initialState = {
    data:[],
    status:'idle'
}

const productSlice = createSlice({
    name:'products',
    initialState,
    // reducers:{
    //     // fetchProducts(state, action){
    //     //     console.log("aaa",action.payload)
    //     //     state.data = action.payload;
    //     // }
    // },

    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state,action)=>{
            state.status='loading';
        })

        .addCase(getProducts.fulfilled, (state, action)=>{
            state.data = action.payload;
            state.status='idle'
        })

        .addCase(getProducts.rejected,(state,action)=>{
            state.status='error'
        })
    }
});

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('product/get', async()=>{
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json();
    return result;  
})

// export function getProducts(){
//     return async function getProductsThunk(dispatch, getProduct){
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json();
//         dispatch(fetchProducts(result));
//     }

// }
