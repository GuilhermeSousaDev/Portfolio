import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { app } from "../../services/firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { IMessage } from "../../services/firebase/models/IMessage";
import { useFirebaseCreate } from "../../services/firebase/hooks/useFirebaseCreate";

export default function Message() {
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [isShowedMessages, setIsShowedMessages] = useState(false);

    useEffect(() => {
        const db = getDatabase(app);

        const query = ref(db, "messages");
        return onValue(query, (snapshot) => {
            const data = snapshot.val();

            setMessages([]);
            if (snapshot.exists()) {
                Object.values(data).map((message) => {
                    setMessages((messages: any) => [...messages, message]);
                });
            }
        });
    }, []);

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
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography
                variant="h4"
                color="text.primary"
                sx={{ textAlign: "center", mb: 3, mt: 10 }}
            >
                Let a Message !
            </Typography>
            <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textAlign: "center" }}
            >
                If you wish, please provide feedback on how I can improve the portfolio.
            </Typography>
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
            <Typography
                color="text.primary"
                variant="body1"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 5,
                }}
            >
                See Messages
                <Box 
                    onClick={() => setIsShowedMessages(!isShowedMessages)} 
                    sx={{ mt: 1, cursor: 'pointer' }}
                >
                    {!isShowedMessages ? 
                        <ArrowDropDown /> 
                        : <ArrowDropUp />
                    }
                </Box>
                { isShowedMessages && 
                    <List component={'div'}>
                        <ListItem 
                            sx={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                alignItems: 'start' 
                            }}
                        >
                            { messages.map((message: IMessage) => (
                                <ListItemText 
                                    primary={message.username}
                                    secondary={message.message}
                                    sx={{ mb: 2 }}
                                />
                            ))}
                        </ListItem>
                    </List>
                }
            </Typography>
        </Box>
    )
}