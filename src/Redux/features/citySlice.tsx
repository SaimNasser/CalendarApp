import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
    selectedCity: [],
    day: { name: moment().format('dddd') },
};
export const citySlice = createSlice({
    name: 'City',
    initialState,
    reducers: {
        setCity: (state, action) => {
            state.selectedCity = action.payload;
        },
        setWeekday: (state, action) => {
            state.day = action.payload;
        },
    },
});

export const { setCity, setWeekday } = citySlice.actions;
export const selectCity = state => state.City.selectedCity;
export const selectWeekday = state => state.City.day;
export default citySlice.reducer;
