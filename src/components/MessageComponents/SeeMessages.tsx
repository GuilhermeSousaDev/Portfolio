import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LikeOffIcon from "@mui/icons-material/ThumbUpOffAlt";
import LikeOnIcon from "@mui/icons-material/ThumbUpAlt";
import { AnimatePresence, motion } from "framer-motion";
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
                <motion.div 
                    animate={{ rotateZ: !isShowedMessages ? 0 : 180 }} 
                    whileTap={{ scale: 2 }} 
                    transition={{ type: "spring" }}
                >
                    <ArrowDropDownIcon color="primary" fontSize="large" />
                </motion.div>
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
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <Box sx={{ mb: 2 }}>
                                    <ListItemText
                                        primary={message.data.username}
                                        secondary={message.data.message}
                                        sx={{ color: isThemeDark ? "#5135F0" : "#E66D32" }}
                                    />
                                    <Box display="flex">
                                        <motion.div whileTap={{ scale: 2 }} transition={{ type: "spring" }}>
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
                                        </motion.div>
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1 }}
                                            >
                                                <Typography color="text.primary" sx={{ ml: 1 }}>
                                                    {message.data.likes}
                                                </Typography>
                                            </motion.div>
                                        </AnimatePresence>
                                    </Box>
                                </Box>
                            </motion.div>
                        ))}
                    </ListItem>
                </List>
            }
        </>
    )
}