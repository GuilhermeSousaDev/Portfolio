import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useFirebaseCreate } from "../../services/firebase/hooks/useFirebaseCreate";

export default function RegisterMessage() {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMessageToDatabase = async () => {
        if (message && username) {
            useFirebaseCreate({
                path: 'messages',
                data: {
                    username,
                    message,
                    likes: 0,
                    done: false,
                },
            });
            setMessage('');
            setUsername('');
        } else if (message && !username) {
            useFirebaseCreate({
                path: 'messages',
                data: {
                    username: 'Anonymous',
                    message,
                    likes: 0,
                    done: false,
                },
            });
            setMessage('');
            setUsername('');
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