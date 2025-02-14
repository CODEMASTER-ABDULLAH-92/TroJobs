import { createSlice } from '@reduxjs/toolkit';
import { job } from '../../assets/asset';

// Initial state with isDarkMode
const initialState = {
  isDarkMode: true,
  job,
   // The state that tracks dark mode
};

export const jobSlice = createSlice({
  name: 'jobApp',
  initialState,
  reducers: {
    // Reducer to toggle dark mode
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});


export const selectIsDarkMode = (state) => state.jobApp.isDarkMode;
export const { toggleDarkMode } = jobSlice.actions;
export default jobSlice.reducer;
