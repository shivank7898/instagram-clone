import { createSlice,createAsyncThunk } from "@reduxjs/toolkit" 
import axios from 'axios'

export const fetchPosts = createAsyncThunk('post/fetchproducts', async() => {
    try{
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data
    }catch(error) {
        throw(error)
    }
} )

const postSlice = createSlice({
        name:"post",
        initialState: {
            isloading:false,
            data:null,
            isError: false
        },
        extraReducers: (builder) => {
            builder
             .addCase(fetchPosts.pending, (state) => {
                state.isloading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isloading = false
                state.data = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isError =true
                console.log("Error", action.payload)
      }); 
        }
})


export default postSlice.reducer
export const postReducer = postSlice.reducer