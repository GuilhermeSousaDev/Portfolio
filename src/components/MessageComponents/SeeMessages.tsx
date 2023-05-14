import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { IMessage } from "../../services/firebase/models/IMessage";
import { useAppSelector } from "../../hooks/useAppSelector";

export default function SeeMessages({ messages }: { messages: IMessage[] }) {
    const isThemeDark = useAppSelector(state => state.theme.default) === 'dark';
    const [isShowedMessages, setIsShowedMessages] = useState(false);

    return (
        <>
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
            </Typography>
            <Box
                onClick={() => setIsShowedMessages(!isShowedMessages)}
                sx={{ mt: 1, cursor: 'pointer' }}
            >
                {!isShowedMessages ?
                    <ArrowDropDownIcon color="primary" fontSize="large" />
                    : <ArrowDropUpIcon color="primary" fontSize="large" />
                }
            </Box>
            {isShowedMessages &&
                <List component={'div'}>
                    <ListItem
                        color="primary"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start'
                        }}
                    >
                        {messages.map((message: IMessage, i) => (
                            <ListItemText
                                key={i}
                                primary={message.username}
                                secondary={message.message}
                                sx={{ mb: 2, color: isThemeDark ? "#5135F0" : "#E66D32" }}
                            />
                        ))}
                    </ListItem>
                </List>
            }
        </>
    )
}