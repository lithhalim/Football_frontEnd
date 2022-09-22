import { configureStore } from '@reduxjs/toolkit';
import  alluserdata  from '../fetchdata/getalldata';




export const store = configureStore({
  reducer: {
    alluserdata:alluserdata
 }, 
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),


})
