 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBrands = createAsyncThunk(
  'brands/fetchBrands',
  async () => {
    try {
      const response = await axios.get('https://ecommerce.routemisr.com/api/v1/brands');
      const data = response.data.data;
      return data;
    } catch (error) {
      console.error('Error fetching brands:', error);
      throw error;
    }
  }
);

const brandsSlice = createSlice({
  name: 'brands',
  initialState: {
    brands: [],
    loading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state) => {
        state.loading = false;
        state.isError = true;
      });
  },
});

  
export   const brandsReducer= brandsSlice.reducer;  
