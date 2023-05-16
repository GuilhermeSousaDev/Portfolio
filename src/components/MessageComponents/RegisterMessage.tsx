import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useFirebaseCreate } from "../../services/firebase/hooks/useFirebaseCreate";
import { showSnackbar } from "../../store/SnackbarSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export default function RegisterMessage() {
    const dispatch = useAppDispatch();

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMessageToDatabase = () => {
        if (message) {
            try {
                useFirebaseCreate({
                    path: 'messages',
                    data: {
                        username: username ? username : 'Anonymous',
                        message,
                        likes: 0,
                        done: false,
                    },
                });
                dispatch(showSnackbar({ 
                    open: true,
                    message: "Thank You for The Message",
                    type: "success",
                }));
            } catch (error) {
                dispatch(showSnackbar({
                    open: true,
                    message: "Error for Add Message",
                    type: "error",
                }));
            }
            setMessage('');
            setUsername('');
        } else {
            dispatch(showSnackbar({
                open: true,
                message: "Fill in the fields to send the message",
                type: "error",
            }));
        }
    }

    return (
        <>
            <TextField
                value={username}
                variant="outlined"
                label="Your Name"
                color="primary"
                sx={{ width: '50%', mt: 5, mb: 2 }}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                value={message}
                variant="outlined"
                label="Message"
                color="primary"
                sx={{ width: '50%', mt: 5, mb: 5 }}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button
                variant="outlined"
                color="primary"
                onClick={handleSendMessageToDatabase}
            >
                Send
            </Button>
        </>
    )
}