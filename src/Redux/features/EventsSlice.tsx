import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
    events: [],
};
export const eventSlice = createSlice({
    name: 'Events',
    initialState,
    reducers: {
        setEvent: (state, action) => {

        },
    },
});

export const { setEvent, } = eventSlice.actions;
export const selectEvent = state => state.Event.events;
export default eventSlice.reducer;
