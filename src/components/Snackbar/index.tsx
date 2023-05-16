import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { closeSnackbar } from "../../store/SnackbarSlice";
import { useAppSelector } from "../../hooks/useAppSelector";

export default function SnackbarApp() {
    const snackbarStore = useAppSelector(state => state.snackbar);
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