// store.js
import { configureStore } from '@reduxjs/toolkit';
// import { counterReducer } from './counterSlice';
import { brandsReducer } from './BrandSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,  
    brands: brandsReducer,  
  },
});
