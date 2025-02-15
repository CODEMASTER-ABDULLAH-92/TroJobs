// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';
// const initialState = {
//   jobe,
// };

// export const getData = async()=>{
//   const jobe = await axios.get("http://localhost:5001/api/job/listing")

// }
// export const jobSlice = createSlice({
//   name: 'jobApp',
//   initialState,
//   reducers: {
//   },
// });

// export const {  } = jobSlice.actions;
// export default jobSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// // Initial State
// const initialState = {
//   jobe: [], // Renamed from 'jobe' to 'jobs' (better naming)
//   loading: false,
//   error: null,
// };

// // Async Thunk to Fetch Jobs
// export const getData = createAsyncThunk('jobApp/fetchJobs', async (_, { rejectWithValue }) => {
//   try {
//     const response = await axios.get("http://localhost:5001/api/job/listing");
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response?.data || "Something went wrong");
//   }
// });

// // Redux Slice
// export const jobSlice = createSlice({
//   name: 'jobApp',
//   initialState,
//   reducers: {}, // No regular reducers needed
//   extraReducers: (builder) => {
//     builder
//       .addCase(getData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.jobe = action.payload;
//       })
//       .addCase(getData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default jobSlice.reducer;




import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialState = {
  jobe: [],  // ✅ Changed 'jobe' to 'jobs' for clarity
  loading: false,
  error: null,
};

// Async Thunk to Fetch Jobs
export const getData = createAsyncThunk('jobApp/fetchJobs', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("http://localhost:5001/api/job/listing");
    return response.data; // Ensure API returns an array
  } catch (error) {
    return rejectWithValue(error.response?.data || "Something went wrong");
  }
});

// Redux Slice
export const jobSlice = createSlice({
  name: 'jobApp',
  initialState,
  reducers: {}, // No regular reducers needed
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.jobe = action.payload; // ✅ Fixed 'jobe' → 'jobs'
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default jobSlice.reducer;
