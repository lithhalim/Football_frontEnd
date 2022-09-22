import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


//initial value 
const initialState = {
  value: false
}



//function we will invoke to fetch the data
export const GetAllUserData = createAsyncThunk(
    'alluserdata/GetAllUserData',
    //userid to send argement with calling function
    async (arrgement, thunkAPI) => {
        const Datause=await axios.get(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${process.env.REACT_APP_API}&from=2021-09-17&to=2021-09-17`)
        return  Datause
    
    })
  

//the data will come here will shere with all page
export const alluserdata = createSlice({
  name: 'alluserdata',
  initialState,
  reducer:{

  },
  //extraReducer Use to Shaer the Information but the fetching information
  extraReducers:{
    //the data will have 3 state fulfiled for sucses and reject for reject and payload
      [GetAllUserData.fulfilled]:(state,action)=>{
        console.log(action)
          state.value=action
      },
      [GetAllUserData.rejected]:(state,action)=>{
        state.value=action
      }
  }
})


export default alluserdata.reducer
