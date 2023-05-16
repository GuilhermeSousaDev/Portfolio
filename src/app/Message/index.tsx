import { useState } from "react";
import Box from "@mui/material/Box";
import RegisterMessage from "../../components/MessageComponents/RegisterMessage";
import SeeMessages from "../../components/MessageComponents/SeeMessages";
import Introduction from "../../components/MessageComponents/Introduction";
import { motion } from "framer-motion";
import { useFirebaseFind } from "../../services/firebase/hooks/useFirebaseFInd";
import { IMessage } from "../../services/firebase/models/IMessage";

export default function Message() {
    const [messages, setMessages] = useState<IMessage[]>([]);

    useFirebaseFind({ path: 'messages', setState: setMessages });

    return (
        <motion.div
            initial={{ opacity: 0, transform: 'translateY(200px)' }}
            whileInView={{ opacity: 1, transform: 'translate(0)' }}
            transition={{ delay: 0.1, duration: 1 }}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 20 }}
            >
                <Introduction />
                <RegisterMessage />
                <SeeMessages messages={messages} />
            </Box>
        </motion.div>
    )
}