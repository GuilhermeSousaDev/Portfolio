import { createSlice } from "@reduxjs/toolkit";

const animateSlice = createSlice({
    name: 'animate',
    initialState: {
        isEndProjectAnimation: false,
    },
    reducers: {
        changeIsEndProjectAnimation(state) {
            state.isEndProjectAnimation = true;
        },
    },
});

export const { changeIsEndProjectAnimation } = animateSlice.actions;
export default animateSlice.reducer;