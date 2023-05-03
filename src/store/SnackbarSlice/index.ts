import { AlertColor } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

interface ISnackbarState {
    open: boolean;
    message: string;
    type: AlertColor;

}

const initialState = {
    open: false,
    message: '',
    type: 'success',
} as ISnackbarState;

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        showSnackbar(state, { payload }) {
            state.open = true;
            state.message = payload.message;
            state.type = payload.type as AlertColor;
        },
        closeSnackbar(state) {
            state.open = false;
        }
    }
});

export const { showSnackbar, closeSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;