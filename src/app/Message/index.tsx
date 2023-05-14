import { useState } from "react";
import Box from "@mui/material/Box";
import RegisterMessage from "../../components/MessageComponents/RegisterMessage";
import SeeMessages from "../../components/MessageComponents/SeeMessages";
import Introduction from "../../components/MessageComponents/Introduction";
import { useFirebaseFind } from "../../services/firebase/hooks/useFirebaseFInd";
import { IMessage } from "../../services/firebase/models/IMessage";

export default function Message() {
    const [messages, setMessages] = useState<IMessage[]>([]);

    useFirebaseFind({ path: 'messages', setState: setMessages });

    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            justifyContent="center"
            alignItems="center"
        >
            <Introduction />
            <RegisterMessage />
            <SeeMessages messages={messages} />
        </Box>
    )
}