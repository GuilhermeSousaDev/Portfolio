import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/storeTypes";
import { closeSnackbar } from "../../store/SnackbarSlice";

export default function SnackbarApp() {
    const snackbarStore = useSelector((state: RootState) => state.snackbar);
    const dispatch = useDispatch();

    return (
        <Snackbar
            open={snackbarStore.open}
            autoHideDuration={4000}
            transitionDuration={1000}
            anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
            onClose={() => dispatch(closeSnackbar())}
        >
            <Alert severity={snackbarStore.type}>
                { snackbarStore.message }
            </Alert>
        </Snackbar>
    )
}