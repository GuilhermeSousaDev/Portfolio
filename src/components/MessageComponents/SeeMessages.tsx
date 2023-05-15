import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LikeOffIcon from "@mui/icons-material/ThumbUpOffAlt";
import LikeOnIcon from "@mui/icons-material/ThumbUpAlt";
import { IMessage } from "../../services/firebase/models/IMessage";
import { useAppSelector } from "../../hooks/useAppSelector";
import { increment } from "firebase/database";
import { useFirebaseUpdate } from "../../services/firebase/hooks/useFirebaseUpdate";

export default function SeeMessages({ messages }: { messages: IMessage[] }) {
    const isThemeDark = useAppSelector(state => state.theme.default) === 'dark';

    const [likedMessage, setLikedMessage] = useState<number[]>([]);
    const [isShowedMessages, setIsShowedMessages] = useState(false);

    const handleAddLikeInMessage = (key: string, index: number) => {
        useFirebaseUpdate({
            path: 'messages/' + key + '/likes',
            value: increment(1),
        });

        setLikedMessage([...likedMessage, index]);
    }

    const handleRemoveLikeInMessage = (key: string, index: number) => {
        useFirebaseUpdate({
            path: 'messages/' + key + '/likes',
            value: increment(-1),
        });

        const newLikes = likedMessage.filter(likeIndex => likeIndex !== index);
        setLikedMessage(newLikes);
    }

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
                            <Box key={message.key} sx={{ mb: 2 }}>
                                <ListItemText
                                    primary={message.data.username}
                                    secondary={message.data.message}
                                    sx={{ color: isThemeDark ? "#5135F0" : "#E66D32" }}
                                />
                                <Box display="flex">
                                    {!likedMessage.includes(i) ?
                                        <LikeOffIcon
                                            onClick={() => handleAddLikeInMessage(message.key, i)}
                                            color="primary"
                                            sx={{ cursor: "pointer" }}
                                        />
                                        :
                                        <LikeOnIcon
                                            onClick={() => handleRemoveLikeInMessage(message.key, i)}
                                            color="primary"
                                            sx={{ cursor: "pointer" }}
                                        />
                                    }
                                    <Typography color="text.primary" sx={{ ml: 1 }}>
                                        {message.data.likes}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </ListItem>
                </List>
            }
        </>
    )
}