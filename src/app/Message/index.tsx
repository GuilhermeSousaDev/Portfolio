import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { app, createMessage } from "../../services/firebase";
import { getDatabase, onValue, ref } from "firebase/database";

export default function Message() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<any>([]);

    useEffect(() => {
        const db = getDatabase(app);

        const query = ref(db, "messages");
        return onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            Object.values(data).map((project) => {
              setMessages((messages: any) => [...messages, project]);
            });
          }
        });
      }, []);

    const handleSendMessageToDatabase = async () => {
        console.log(messages);
        if (message) {
            createMessage(message);
            setMessage('');
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
        </Box>
    )
}