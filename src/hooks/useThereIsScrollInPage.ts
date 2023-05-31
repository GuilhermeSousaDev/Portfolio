import { useEffect, useState } from "react";

export default function useThereIsScrollInPage() {
    let body = document.body, html = document.documentElement;

    const [docHeight, setDocHeight] = useState(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
    const [winHeight] = useState(window.innerHeight);

    useEffect(() => {
        setDocHeight(html.scrollHeight);
    }, [html.scrollHeight]);

    if (docHeight > winHeight) {
        return true;
    } else {
        return false;
    }
}